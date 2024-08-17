const combinationSum2 = (candidates, target) => {
  console.log(candidates, target);
};

// combinationSum2(candidates, target);
const candidates = [10, 1, 2, 7, 6, 1, 5];
const target = 8;

let results = [];
candidates.sort((a, b) => a - b);

console.log(candidates);

const ans = [];
const t = [];
const dfs = (i, s) => {
  if (s === 0) {
    ans.push(t.slice());
    return;
  }
  if (i >= candidates.length || s < candidates[i]) {
    return;
  }
  for (let j = i; j < candidates.length; ++j) {
    if (j > i && candidates[j] === candidates[j - 1]) {
      continue;
    }
    t.push(candidates[j]);
    dfs(j + 1, s - candidates[j]);
    t.pop();
  }
};

dfs(0, target);
