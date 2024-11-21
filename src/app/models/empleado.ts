export class Empleado {
    constructor(_id = "", nombre = "", documento = "", email = "", telefono= 0,rol="") {

            this._id = _id;        
            this.nombre = nombre;        
            this.documento = documento;        
            this.email = email;        
            this.telefono = telefono;
            this.rol= rol;
        
        }
        
            _id: string; // Sub guión id porque los datos van a venir de MOngodb
            nombre: string;
            documento: string;
            email: string;
            telefono: number;
            rol: string;
}
