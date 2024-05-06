import { Request, Response } from;
import { Name } from ;

let names: Name[] = [];
let idCounter = 1;

export const addName = (req: Request, res: Response) => {
  const { name } = req.body;
  const newName: Name = { id: idCounter++, name };
  names.push(newName);
  res.json(newName);
};

export const getAllNames = (req: Request, res: Response) => {
  res.json(names);
};
