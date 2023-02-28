import { useEffect, useState } from 'react';
import { api } from '../../../services/api';
import style from './adicionar.module.css';
import alert from './alert.module.css';

export function Adicionar() {
    const [title, setTitle] = useState('');
    const [content, setConent] = useState('');
    const [nome, setNome] = useState('');
    const [res, setRes] = useState<{}>();
    const [error, setError] = useState<{}>();

    const getValues = (e: any, type: string) => {
        if (type == 'title') {
            setTitle(e.target.value);
        } else if (type == 'content') {
            setConent(e.target.value);
        } else if (type == 'nome') {
            setNome(e.target.value);
        }
    };

    const sendValue: () => void = () => {
        if (!title || !content) {
            let data: { error: boolean; message: string } = {
                error: true,
                message: 'preencha todos os campos obrigatórios!',
            };

            return setError(data);
        }

        let data: string = JSON.stringify({
            title: title,
            content: content,
            name: nome,
        });
        let config: { headers: { 'Content-Type': string } } = {
            headers: {
                'Content-Type': 'application/json; charset=utf-8',
            },
        };

        api.post('/feedback', data, config)
            .then((response: any) => setRes(response))
            .catch((error: any) => {
                let data: { error: boolean; message: string } = {
                    error: true,
                    message: `${error}`,
                };
                return setError(data);
            });
    };

    useEffect(() => {
        if (res) {
            setTimeout(() => {
                window.location.reload();
            }, 3000);
            setError(undefined);
        } else if (error) {
            setRes(undefined);
        }
    }, [res, error]);
    return (
        <>
            <section>
                {error ? (
                    <div className={`${alert['alert-box']} ${alert['error']}`}>
                        <h3 className={alert['alert-title']}>
                            Erro ao enviar o feedback!
                        </h3>
                        <p className={alert['alert-content']}>
                            Ocorreu um erro no envio do seu feedback,{' '}
                            <a
                                className={alert['alert-redirect']}
                                onClick={() => {
                                    window.location.reload();
                                }}
                            >
                                Tente novamente.
                            </a>
                        </p>
                    </div>
                ) : undefined}

                <div className={style['container']}>
                    <h2>Enviar Feedback</h2>
                    <label htmlFor="title" className={style['label-group']}>
                        Titulo*
                        <input
                            type="text"
                            onKeyUp={(e) => {
                                getValues(e, 'title');
                            }}
                        />
                    </label>
                    <label htmlFor="content" className={style['label-group']}>
                        Conteudo*
                        <input
                            type="text"
                            onKeyUp={(e) => {
                                getValues(e, 'content');
                            }}
                        />
                    </label>
                    <label htmlFor="nome" className={style['label-group']}>
                        Nome
                        <input
                            type="text"
                            onKeyUp={(e) => {
                                getValues(e, 'nome');
                            }}
                        />
                    </label>
                    <button className={style['send-btn']} onClick={sendValue}>
                        Enviar
                    </button>
                </div>

                {res ? (
                    <div
                        className={`${alert['alert-box']} ${alert['success']}`}
                    >
                        <h3 className={alert['alert-title']}>
                            Feedback enviado com sucesso!
                        </h3>
                        <p className={alert['alert-content']}>
                            Seu feedback foi enviado com sucesso va para a lista
                            para ve-lo, ou{' '}
                            <a className={alert['alert-redirect']}>
                                clique-aqui
                            </a>
                        </p>
                    </div>
                ) : undefined}
            </section>
        </>
    );
}
