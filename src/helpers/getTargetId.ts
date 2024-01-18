function getTargetId(id: string, idName: string): string | null {
  let targetId: string | null = "";
  if (id) {
    localStorage.setItem(`${idName}`, `${id}`);
    targetId = id;
    return targetId;
  } else {
    targetId = localStorage.getItem(`${idName}`);
    return targetId;
  }
}

export default getTargetId;
