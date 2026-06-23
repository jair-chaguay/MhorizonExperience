import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface PrivacyPolicyModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export const ModalPolicies: React.FC<PrivacyPolicyModalProps> = ({ isOpen, onClose }) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
                    onClick={onClose}
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 30 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 30 }}
                        transition={{
                            type: "spring",
                            stiffness: 300,
                            damping: 25,
                        }}
                        onClick={(e) => e.stopPropagation()} 
                        className="relative w-full max-w-3xl max-h-[85vh] overflow-y-auto bg-white rounded-xl shadow-2xl p-8 md:p-12"
                    >

                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 p-2 text-gray-500 cursor-pointer hover:text-gray-800 hover:bg-gray-100 rounded-full transition-colors"
                            aria-label="Cerrar políticas"
                        >
                            <X className="w-6 h-6" />
                        </button>

                        <div className="pr-4">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6 border-l-4 border-l-brand  pl-4">
                                Políticas de Privacidad y Seguridad de la Información
                            </h2>

                            <div className="space-y-6 text-gray-700 leading-relaxed">
                                <section>
                                    <h3 className="text-lg font-semibold text-gray-900 mb-2">1. Responsable del Tratamiento de Datos</h3>
                                    <p>
                                        MHORIZON (a través de su división educativa <strong>Mhorizon Experience</strong>), con domicilio en Guayaquil, Ecuador, es responsable del tratamiento de los datos personales recopilados en nuestra plataforma y campus virtual. Nuestro compromiso es garantizar la máxima confidencialidad y seguridad de la información de nuestros alumnos, docentes y miembros de la comunidad.
                                    </p>
                                </section>

                                <section>
                                    <h3 className="text-lg font-semibold text-gray-900 mb-2">2. Información que Recopilamos</h3>
                                    <p>
                                        Para brindarte una experiencia de aprendizaje fluida, a través de nuestros formularios de contacto, pre-inscripción y registro, podemos recopilar: nombre completo, correo electrónico, número de teléfono, información profesional o de tu empresa (si aplica), y detalles sobre los módulos de capacitación en los que estás interesado.
                                    </p>
                                </section>

                                <section>
                                    <h3 className="text-lg font-semibold text-gray-900 mb-2">3. Finalidad del Tratamiento</h3>
                                    <p className="mb-2">Los datos que nos compartes se utilizan de forma transparente y exclusivamente para:</p>
                                    <ul className="list-disc pl-5 space-y-2">
                                        <li><strong>Gestión Académica:</strong> Procesar tu inscripción, darte acceso al Campus Virtual, hacer seguimiento a tu progreso y emitir tu Certificación Progresiva.</li>
                                        <li><strong>Soporte y Atención:</strong> Responder a tus dudas, enviarte materiales del curso y brindarte asistencia técnica.</li>
                                        <li><strong>Comunidad y Networking:</strong> Coordinar tu participación en grupos reducidos, foros y enviarte invitaciones a nuestros eventos exclusivos y cierres especiales (como el Café Empresarial).</li>
                                        <li><strong>Actualización Profesional:</strong> Compartirte información relevante sobre nuevos módulos, boletines y recursos que sumen a tu crecimiento en el área de auditoría y negocios.</li>
                                    </ul>
                                </section>

                                <section>
                                    <h3 className="text-lg font-semibold text-gray-900 mb-2">4. Seguridad de la Información</h3>
                                    <p>
                                        Cuidamos tus datos personales y académicos con el mismo rigor que aplicamos en nuestros servicios de auditoría. Implementamos protocolos técnicos y organizativos de alto nivel para proteger tu información contra el acceso no autorizado, alteración o pérdida, basándonos en nuestros propios estándares de control de riesgos.
                                    </p>
                                </section>

                                <section>
                                    <h3 className="text-lg font-semibold text-gray-900 mb-2">5. Derechos del Titular (LOPDP)</h3>
                                    <p>
                                        De conformidad con la Ley Orgánica de Protección de Datos Personales de Ecuador, como parte de nuestra comunidad tienes el derecho de acceder, rectificar, actualizar, oponerte al uso o solicitar la eliminación de tus datos en cualquier momento. Para ejercer estos derechos o hacernos cualquier consulta, puedes comunicarte directamente con nosotros al correo: <a href="mailto:news@mhorizon.com.ec" className="text-blue-600 hover:underline font-medium">news@mhorizon.com.ec</a>.
                                    </p>
                                </section>
                            </div>
                        </div>

                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};