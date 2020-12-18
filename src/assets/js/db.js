class Db {
  static get idbPromise() {
    return new Promise((resolve) => {
      const thisIdb = idb.open('footballapp', 1, (upgradeDB) => {
        if (!upgradeDB.objectStoreNames.contains('teams')) {
          const id = upgradeDB.createObjectStore('teams');
          id.createIndex('id', 'id', { unique: false });
        }
      });
      resolve(thisIdb);
    });
  }

  static async savedForLater(data) {
    const db = await this.idbPromise;
    const tx = db.transaction('teams', 'readwrite');
    const store = await tx.objectStore('teams');
    const items = {
      id: data.id,
      crestUrl: data.crestUrl,
      shortName: data.shortName,
      area: {
        name: data.area.name,
      },
    };
    store.add(items);
    return tx.complete;
  }

  static async putForLater(data, id) {
    const db = await this.idbPromise;
    const tx = db.transaction('teams', 'readwrite');
    const store = await tx.objectStore('teams');
    const items = {
      id: data.id,
      crestUrl: data.crestUrl,
      shortName: data.shortName,
      area: {
        name: data.area.name,
      },
    };
    store.put(items, id);
    return tx.complete;
  }

  static async getAll() {
    const db = await this.idbPromise;
    const tx = db.transaction('teams', 'readonly');
    const store = tx.objectStore('teams');
    return store.getAll();
  }

  static async getForLater(id) {
    const db = await this.idbPromise;
    const tx = db.transaction('teams', 'readonly');
    const store = tx.objectStore('teams');
    return store.get(id);
  }

  static async removeForLater(id) {
    const db = await this.idbPromise;
    const tx = db.transaction('teams', 'readwrite');
    const store = tx.objectStore('teams');
    store.delete(id);
    return tx.complete;
  }
}

export default Db;
