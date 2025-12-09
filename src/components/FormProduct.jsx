import { useState } from "react";
import { useProductsContext } from "../context/ProductsContext";
import styles from "./FormProduct.module.css";
import X from "../assets/X";

const FormProduct = ({ initialProduct = {}, modo = "agregar", onClose }) => {

    const [product, setProduct] = useState(initialProduct);
    const { addProduct, editProduct } = useProductsContext();

    const handleChange = (evento) => {
        const { name, value } = evento.target;
        setProduct({ ...product, [name]: value });
    };

    const handleSubmit = async (evento) => {
        evento.preventDefault();
        if (modo === "agregar") {
            await addProduct(product);
        } else {
            await editProduct(product);
        }
        onClose();
    };

    return (
        <div
            className={styles.modalOverlay}
            aria-modal="true"
            role="dialog"
        >
            <div className={styles.modalContainer}>
                {/* Contenido del Modal */}
                <div className={styles.modalContent}>
                    {/* Encabezado del Modal */}
                    <div className={styles.modalHeader}>
                        <h3 className={styles.modalHeaderTitle}>
                            {modo === "agregar" ? "Agregar Producto" : "Editar Producto"}
                        </h3>
                        <button
                            type="button"
                            onClick={onClose}
                            className={styles.closeButton}
                        >
                            <X />
                        </button>
                    </div>
                    {/* Cuerpo del Modal */}
                    <form onSubmit={handleSubmit}>
                        <div className={styles.formGrid}>
                            {/* Campo Nombre */}
                            <div className={styles.colSpan2}>
                                <label className={styles.formLabel}>
                                    Nombre
                                </label>
                                <input
                                    type="text"
                                    name="nombre"
                                    id="nombre"
                                    className={styles.formInputBase}
                                    placeholder="Ingrese el nombre del producto"
                                    value={product.nombre || ""}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            {/* Campo Precio */}
                            <div className={`${styles.colSpan2} ${styles.smColSpan1}`}>
                                <label className={styles.formLabel}>
                                    Precio
                                </label>
                                <input
                                    type="number"
                                    name="precio"
                                    id="precio"
                                    className={styles.formInputBase}
                                    placeholder="$0.00"
                                    value={product.precio || ""}
                                    onChange={handleChange}
                                    required
                                    min="0"
                                    step="any"
                                />
                            </div>

                            <div className={`${styles.colSpan2} ${styles.smColSpan1}`}>
                                <label className={styles.formLabel}>
                                    URL de Imagen
                                </label>
                                <input
                                    type="text"
                                    name="imagen"
                                    id="imagen"
                                    className={styles.formInputBase}
                                    placeholder="https://ejemplo.com/imagen.jpg"
                                    value={product.imagen || ""}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className={styles.colSpan2}>
                                <label className={styles.formLabel}>
                                    Descripción del Producto
                                </label>
                                <textarea
                                    id="descripcion"
                                    name="descripcion"
                                    rows="4"
                                    className={styles.formInputBase}
                                    placeholder="Escriba la descripción del producto aquí"
                                    value={product.descripcion || ""}
                                    onChange={handleChange}
                                    required
                                ></textarea>
                            </div>
                        </div>
                        {/* Botones de Accion */}
                        <div className={styles.modalActions}>
                            <button
                                type="submit"
                                className={`${styles.btnBase} ${styles.btnPrimary}`}
                            >
                                {modo === "agregar" ? <>Agregar</> : <>Actualizar</>}
                            </button>
                            <button
                                type="button"
                                onClick={onClose}
                                className={`${styles.btnBase} ${styles.btnSecondary}`}
                            >
                                Cancelar
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default FormProduct;