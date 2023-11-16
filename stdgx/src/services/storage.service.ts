import { Injectable } from "@angular/core";
import { STORAGE_KEYS } from "src/config/storage_keys.config";
import { LocalStorage } from "src/models/local.storage";

@Injectable()
export class StorageService {
  getLocalStorage(): LocalStorage | null {
    let user = localStorage.getItem(STORAGE_KEYS.localStorage);
    if (user == null) {
      return null;
    } else {
      return JSON.parse(user);
    }
  }

  setLocalStorage(obj: LocalStorage | null): void {
    if (obj == null) {
      localStorage.removeItem(STORAGE_KEYS.localStorage);
    } else {
      localStorage.setItem(STORAGE_KEYS.localStorage, JSON.stringify(obj));
    }
  }
}