import { Cast } from "@/infrastructure/interfaces/cast";
import { Cast as CastDB } from "@/infrastructure/interfaces/movieDb-credits.response";

export class CastMapper {
  static fromCastDBToEntity(actor: CastDB): Cast {
    return {
      id: actor.id,
      name: actor.name,
      character: actor.character ?? "No character",
      Avatar: actor.profile_path
        ? `https://image.tmdb.org/t/p/w500${actor.profile_path}`
        : "https://i.stack.imgur.com/l60Hf.png",
    };
  }
}
