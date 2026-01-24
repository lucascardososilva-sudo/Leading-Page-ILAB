import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, RefreshCcw } from 'lucide-react';
import { motion } from 'framer-motion';

interface Props {
    children?: ReactNode;
    fallback?: ReactNode;
}

interface State {
    hasError: boolean;
    error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
    public state: State = {
        hasError: false,
        error: null
    };

    public static getDerivedStateFromError(error: Error): State {
        return { hasError: true, error };
    }

    public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error("Uncaught error:", error, errorInfo);
    }

    public render() {
        if (this.state.hasError) {
            return this.props.fallback || (
                <div className="w-full h-[50vh] min-h-[300px] flex flex-col items-center justify-center p-6 text-center bg-fox-50/50 rounded-2xl border-2 border-dashed border-fox-200 m-4">
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="w-16 h-16 bg-fox-100 text-fox-500 rounded-full flex items-center justify-center mb-4"
                    >
                        <AlertTriangle size={32} />
                    </motion.div>
                    <h3 className="text-xl font-display font-bold text-navy-800 mb-2">
                        Algo deu errado nesta seção
                    </h3>
                    <p className="text-gray-600 max-w-md mb-6">
                        Não conseguimos carregar este conteúdo no momento.
                    </p>
                    <button
                        onClick={() => window.location.reload()}
                        className="flex items-center gap-2 px-6 py-3 bg-white border border-gray-200 text-navy-800 rounded-full hover:border-fox-500 hover:text-fox-500 transition-all font-medium shadow-sm hover:shadow-md"
                    >
                        <RefreshCcw size={18} />
                        Tentar recarregar
                    </button>
                </div>
            );
        }

        return this.props.children;
    }
}
