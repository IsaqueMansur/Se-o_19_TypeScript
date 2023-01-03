/* eslint no-useless-constructor: 0 */

export default class Database {
  private static database: Database; //eslint-disable-line

  private constructor(
    private host: string,
    private user: string,
    private password: string,
  ) {}

  connect(): void {
    console.log(`Conectado à ${this.host}`);
  }

  static getDatabase(
    host: string,
    user: string,
    password: string,
  ): Database {
    if (Database.database) {
      console.log('Retornando instância já criada');
      return Database.database;
    }
    Database.database = new Database(host, user, password);
    console.log('Criando nova instância');
    return Database.database;
  }
}

const db1 = Database.getDatabase('localhost1', 'root', '123456');
db1.connect();

const db2 = Database.getDatabase('localhost1', 'root', '123456');
db2.connect();
