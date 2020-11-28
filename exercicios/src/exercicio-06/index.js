const simples = (capitalI, taxa, tempo) => capitalI + capitalI * taxa * tempo;
const compostos = (capitalI, taxa, tempo) => capitalI * (1 + taxa) ** tempo;

module.exports = { simples, compostos };
