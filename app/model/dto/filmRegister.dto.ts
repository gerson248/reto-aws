import { IsArray, IsNumber, IsString } from "class-validator";
import { Service } from "typedi";

@Service()
export class FilmRegisterDTO {
  @IsString()
  title: string;

  @IsString()
  opening_crawl: string;

  @IsNumber()
  episode_id: number;

  @IsString()
  url: string;

  @IsArray()
  vehicles: string[];

  constructor(params: {
    title: string;
    opening_crawl: string;
    episode_id: number;
    url: string;
    vehicles: string[];
  }) {
    const { title, opening_crawl, episode_id, url, vehicles } = params;
    this.title = title;
    this.opening_crawl = opening_crawl;
    this.episode_id = episode_id;
    this.url = url;
    this.vehicles = vehicles;
  }
}
