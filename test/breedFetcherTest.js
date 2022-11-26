const { fetchBreedDescription } = require('../breedFetcher');
const { assert } = require('chai');

describe('fetchBreedDescription', () => {
  it('returns a string description for a Cheetoh breed, via callback', (done) => {
    fetchBreedDescription('Cheetoh', (err, desc) => {
      assert.equal(err, null);
      const expectedDesc = "The Cheetoh has a super affectionate nature and real love for their human companions; they are intelligent with the ability to learn quickly. You can expect that a Cheetoh will be a fun-loving kitty who enjoys playing, running, and jumping through every room in your house.";
    //   console.log(`1// ${expectedDesc}`);
    //   console.log(`2// ${desc}`);
      assert.equal(expectedDesc, desc);

      done();

    });
  });
  
  it('returns a string description for a Bengal breed, via callback', (done) => {
    fetchBreedDescription('Bengal', (err, desc) => {
      assert.equal(err, null);
      const expectedDesc = "Bengals are a lot of fun to live with, but they\'re definitely not the cat for everyone, or for first-time cat owners. Extremely intelligent, curious and active, they demand a lot of interaction and woe betide the owner who doesn\'t provide it.";
      assert.equal(expectedDesc, desc);

      done();
    });
  });
});