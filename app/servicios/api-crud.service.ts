import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IAlumnos, Users } from '../pages/interfaces/interfaces';
import { environment } from 'src/environments/environment';
import { IAlumno } from '../pages/interfaces/interfaces';
import { User } from '../pages/interfaces/interfaces';


@Injectable({
  providedIn: 'root'
})
export class ApiCrudService {

  constructor(private httpclient:HttpClient) { }

  listarAlumnos():Observable<IAlumnos>{
    return this.httpclient.get<IAlumnos>(`${environment.apiUrl}/alumnos`);
  }

  CrearAlumno(newAlumno: IAlumno): Observable<IAlumno>{
    return this.httpclient.post<IAlumnos>(`${environment.apiUrl}/alumnos`, newAlumno);
  }

  BuscarAlumnoId(id:number):Observable<IAlumnos>{
    return this.httpclient.get<IAlumnos>(`${environment.apiUrl}/alumnos/?id=${id}`);
  }

  ActualizarAlumno(alumno:any):Observable<IAlumnos>{
    return this.httpclient.put<IAlumnos>(`${environment.apiUrl}/alumnos/${alumno.id}`, alumno);
  }

  EliminarAlumno (alumno:any): Observable<IAlumnos>{
    return this.httpclient.delete<IAlumnos>(`${environment.apiUrl}/alumnos/${alumno.id}`);
  }
  CrearUsuario (newUsuario: User): Observable<Users>{
    return this.httpclient.post<Users>(`${environment.apiUrl}/user`, newUsuario);
  }
  SaludoUsuarioId(id:number): Observable<Users>{
    return this.httpclient.get<Users>(`${environment.apiUrl}/alumnos/?id=${id}`);
  }
  BuscarUsuarioId(id:number):Observable<Users>{
    return this.httpclient.get<Users>(`${environment.apiUrl}/users/?id=${id}`);
  }
  SaludoUsuario():Observable<Users>{
    return this.httpclient.get<Users>(`${environment.apiUrl}/users`);
  }
}
