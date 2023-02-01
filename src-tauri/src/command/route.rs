#[tauri::command]
async fn open_login(handle: tauri::AppHandle) {
  let login_window = tauri::WindowBuilder::new(
    &handle,
    "external", /* the unique window label */
    tauri::WindowUrl::External("/login".parse().unwrap())
  ).build().unwrap();
}
