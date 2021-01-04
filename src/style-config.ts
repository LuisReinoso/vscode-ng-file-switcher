export function fromRoot(angularJSON: any): string | null {
  let styleConfig;
  try {
    styleConfig =
      angularJSON["schematics"]["@schematics/angular:component"]["style"];
  } catch (error) {}

  return styleConfig;
}

export function fromDefaultProject(angularJSON: any) {
  const defaultProject = angularJSON["defaultProject"];
  let styleConfig;
  try {
    styleConfig =
      angularJSON["projects"][defaultProject]["schematics"]["@schematics/angular:component"][
        "style"
      ];
  } catch (error) {}
  return styleConfig;
}

export function getStyleExtension(angularJSON: any): string {
  return fromRoot(angularJSON) || fromDefaultProject(angularJSON) || 'css';
}
