import { Request, Response } from 'express';
import { User, IUser } from '../models/user';
import { generateToken } from '../utils/generateToken';

export const register = async (req: Request, res: Response) => {
    const { email, password } = req.body;
    try {
      const user = new User({ email, password });
      await user.save();
      res.status(201).json({
        token: generateToken(user._id.toString()),
      });
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
};
  
export const login = async (req: Request, res: Response) => {
    const { email, password } = req.body;
    try {
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
      const isMatch = await user.comparePassword(password);
      if (!isMatch) {
        return res.status(400).json({ message: 'Invalid credentials' });
      }
      res.json({
        token: generateToken(user._id.toString()),
      });
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
};