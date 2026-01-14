import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle } from 'lucide-react';

export const ContactForm: React.FC = () => {
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
    const [formData, setFormData] = useState({
        nome: '',
        email: '',
        whatsapp: '',
        mensagem: ''
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('submitting');

        try {
            // Utilizando FormSubmit.co para envio direto sem necessidade de backend
            const response = await fetch("https://formsubmit.co/ajax/lucascardososilva@usp.br", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    ...formData,
                    _subject: `Formulário SanFran InovaLab: Mensagem de ${formData.nome}`,
                })
            });

            if (response.ok) {
                setStatus('success');
                setFormData({ nome: '', email: '', whatsapp: '', mensagem: '' });
            } else {
                setStatus('idle');
                alert("Houve um pequeno erro ao processar seu envio. Verifique se o e-mail de destino já foi confirmado pelo serviço.");
            }
        } catch (error) {
            console.error(error);
            setStatus('idle');
            alert("Erro de conexão. Tente novamente em instantes.");
        }
    };

    if (status === 'success') {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-fox-50 p-10 rounded-3xl border border-fox-200 text-center"
            >
                <div className="w-16 h-16 bg-fox-500 rounded-full flex items-center justify-center text-white mx-auto mb-6">
                    <CheckCircle size={32} />
                </div>
                <h3 className="text-2xl font-display font-bold text-navy-800 mb-2">Mensagem Enviada!</h3>
                <p className="text-gray-600">Obrigado pelo contato. Lucas receberá sua mensagem em breve.</p>
                <button
                    onClick={() => setStatus('idle')}
                    className="mt-6 text-fox-600 font-bold hover:underline"
                >
                    Enviar outra mensagem
                </button>
            </motion.div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto bg-white p-8 md:p-10 rounded-[2.5rem] shadow-xl border border-gray-100 text-left">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-navy-800 ml-1">Nome Completo</label>
                    <input
                        required
                        name="nome"
                        type="text"
                        value={formData.nome}
                        onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                        placeholder="Seu nome"
                        className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-fox-500 focus:border-transparent outline-none transition-all"
                    />
                </div>
                <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-navy-800 ml-1">Email</label>
                    <input
                        required
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="voce@exemplo.com"
                        className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-fox-500 focus:border-transparent outline-none transition-all"
                    />
                </div>
            </div>

            <div className="space-y-2 mb-6">
                <label className="text-xs font-black uppercase tracking-widest text-navy-800 ml-1">WhatsApp / Celular</label>
                <input
                    required
                    name="whatsapp"
                    type="tel"
                    value={formData.whatsapp}
                    onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                    placeholder="(11) 99999-9999"
                    className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-fox-500 focus:border-transparent outline-none transition-all"
                />
            </div>

            <div className="space-y-2 mb-8">
                <label className="text-xs font-black uppercase tracking-widest text-navy-800 ml-1">Sua Mensagem</label>
                <textarea
                    required
                    name="mensagem"
                    rows={4}
                    value={formData.mensagem}
                    onChange={(e) => setFormData({ ...formData, mensagem: e.target.value })}
                    placeholder="Como podemos ajudar?"
                    className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-fox-500 focus:border-transparent outline-none transition-all resize-none"
                />
            </div>

            <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full py-5 bg-navy-800 text-white rounded-2xl font-black uppercase tracking-widest hover:bg-fox-500 transition-all shadow-lg flex items-center justify-center gap-3 disabled:opacity-50"
            >
                {status === 'submitting' ? (
                    "Enviando..."
                ) : (
                    <>Enviar Mensagem <Send size={18} /></>
                )}
            </button>
        </form>
    );
};
