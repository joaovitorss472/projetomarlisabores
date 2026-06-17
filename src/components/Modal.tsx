import React from 'react';
import '../styles/modal.css'; 

// Tipagem rigorosa do TypeScript para as props do Modal
interface MenuModalProps {
    isOpen: boolean;
    onClose: () => void;
    onNext: (e: React.MouseEvent) => void;
    onPrev: (e: React.MouseEvent) => void;
    imageSrc: string;
}

export function MenuModal({ isOpen, onClose, onNext, onPrev, imageSrc }: MenuModalProps) {
    // Se o modal não estiver aberto, o componente não renderiza nada na tela
    if (!isOpen) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            
            <button className="modal-close" onClick={onClose}>
                X
            </button>

            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                
                <button className="modal-nav prev" onClick={onPrev}>
                    &#10094;
                </button>
                
                <img 
                    src={imageSrc} 
                    alt="Imagem Ampliada do Cardápio" 
                    className="modal-image" 
                />

                <button className="modal-nav next" onClick={onNext}>
                    &#10095;
                </button>

            </div>
        </div>
    );
}