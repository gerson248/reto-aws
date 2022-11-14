import { describe, it } from "@jest/globals";
import * as request from "supertest";

const gateway = "https://km63u2dl4f.execute-api.us-east-2.amazonaws.com/dev";
const server = request.agent(gateway);

describe("create card integration tests", () => {
  it("it should return a 200 for correct creation of the card", (done) => {
    server
      .post("/films")
      .set("Accept", "application/json")
      .send({
        "title": "A New Hope 4",
        "opening_crawl": "It is a period of civil war 4.",
        "episode_id": 4,
        "url": "https://swapi.py4e.com/api/films/2/",
        "vehicles": ["vehiculo 1, vehiculo 2"]
      })
      .expect("Content-Type", /json/)
      .expect(200)
      .end(done);
  });

  it("it should return a 400 for the incorrect creation", (done) => {
    server
      .get("/films/244e9193-1f14-47a5-b34d-29d4670d0afc")
      .set("Accept", "application/json")
      .send({})
      .expect("Content-Type", /json/)
      .expect(200)
      .end(done);
  });

});
