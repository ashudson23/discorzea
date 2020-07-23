import Canvas from 'canvas';
import Discord from 'discord.js';

export default async (uri, width, height, name = 'image') => {
  const canvas = Canvas.createCanvas(96, 96);
  const ctx = canvas.getContext('2d');
  const image = await Canvas.loadImage(uri);
  ctx.drawImage(image, 0, 0, width, height);
  return new Discord.MessageAttachment(canvas.toBuffer(), name);
};
