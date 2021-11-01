import { Request, Response } from "express";

import { CONFIG } from "../config";
import { command } from "../helpers/system";

export const getlinkController = async (req: Request, res: Response) => {
  let data: any = await command(
    CONFIG.system.youtubeDlPath,
    "-g",
    `https://www.youtube.com/watch?v=${req.query.id}`
  );
  data = data.split("\n");

  if (data[1]) {
    return res.status(200).json({
      status: true,
      data: {
        audio: data[1],
        createdAt: Date.now(),
      },
    });
  }

  return res.status(422).json({
    status: false,
    errorMessage: "",
  });
};
