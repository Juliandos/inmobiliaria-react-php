<?php

class Api{

  public function getImagenes(){

    $vector = array();
    $conexion = new Conexion();
    $db = $conexion->getConexion();
    $sql = "SELECT * FROM casas";
    $consulta = $db->prepare($sql);
    $consulta->execute();
    while($fila = $consulta->fetch()) {
        $vector[] = array(
          "id" => $fila['id'],
          "foto" => $fila['foto'],
          "precio" =>  $fila['precio'],
          "barrio" => $fila['barrio'],
          "ciudad" => $fila['ciudad'],
          "area" => $fila['area'],
          "habitaciones" => $fila['habitaciones'],
          "baños" => $fila['baños'],
          "parquaderos" => $fila['parquaderos'],
          "comisionistaid" => $fila['comisionistaid'],
          "arrendoventa" => $fila['arrendoventa']
        );
          }//fin del ciclo while 

    return $vector;
  }


  public function addImagen($descripcion, $imagen){
    
    $conexion = new Conexion();
    $db = $conexion->getConexion();
    $sql = "INSERT INTO galeria (descripcion, imagen) VALUES (:descripcion,:imagen)";
    $consulta = $db->prepare($sql);
    $consulta->bindParam(':descripcion', $descripcion);
    $consulta->bindParam(':imagen', $imagen);
    $consulta->execute();

    return '{"msg":"imagen agregada"}';
  }

  public function deleteImagen($id){
    
    $conexion = new Conexion();
    $db = $conexion->getConexion();
    $sql = "DELETE FROM galeria WHERE id=:id";
    $consulta = $db->prepare($sql);
    $consulta->bindParam(':id', $id); 
    $consulta->execute();

    return '{"msg":"imagen eliminada"}';
  }

}

?>