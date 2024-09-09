<?php
require_once __DIR__ . '/../config/database.php';

class CrudController {
    private $db;

    public function __construct() {
        $this->db = (new Database())->getConnection();
    }

    public function create($data) {
        $stmt = $this->db->prepare("INSERT INTO tb_items (name, description) VALUES (:name, :description)");
        $stmt->bindParam(':name', $data['name']);
        $stmt->bindParam(':description', $data['description']);
        $stmt->execute();
    }

    public function read() {
        $stmt = $this->db->prepare("SELECT * FROM tb_items");
        $stmt->execute();
        return $stmt->fetchAll();
    }

    public function update($id, $data) {
        $stmt = $this->db->prepare("UPDATE tb_items SET name = :name, description = :description WHERE id = :id");
        $stmt->bindParam(':name', $data['name']);
        $stmt->bindParam(':description', $data['description']);
        $stmt->bindParam(':id', $id);
        $stmt->execute();
    }

    public function delete($id) {
        $stmt = $this->db->prepare("DELETE FROM tb_items WHERE id = :id");
        $stmt->bindParam(':id', $id);
        $stmt->execute();
    }
}
?>