import { Request, Response } from "express";

import { CONFIG } from "../config";
import { command } from "../helpers/system";

export const getlinkController = async (req: Request, res: Response) => {
  return command(
    CONFIG.system.youtubeDlPath,
    "-g",
    `https://www.youtube.com/watch?v=${req.query.id}`
  )
    .then((data: any) => {
      data = data.split("https://");

      if (data[2]) {
        return res.status(200).json({
          status: true,
          data: {
            audio: "https://" + data[2],
            createdAt: Date.now(),
          },
        });
      } else {
        throw new Error("Something is wrong");
      }
    })
    .catch(() => {
      return res.status(422).json({
        status: false,
        errorMessage: "Invalid access",
      });
    });
};
