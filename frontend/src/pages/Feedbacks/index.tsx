import { useEffect, useState } from 'react';
import { api } from '../../services/api';
import style from './feedback.module.css';

export function Feedbacks() {
    const [feedback, setFeedback] = useState<{}[]>();

    const getFeed: () => Promise<void> = async () => {
        const { data } = await api.get('/feedback');
        const prod = data;
        setFeedback(prod);
    };

    useEffect(() => {
        getFeed();
    }, []);

    return (
        <section>
            <h2 className={style['feed-header']}>Lista de Feedbacks</h2>
            <div className={style['container']}>
                {feedback ? (
                    feedback.map((feed: any) => (
                        <div className={style['feed-card']} key={feed.id}>
                            <h2 className={style['feed-title']}>
                                {feed.title}
                            </h2>
                            <p className={style['feed-body']}>{feed.content}</p>
                            <div className={style['feed-footer']}>
                                <p className={style['feed-autor']}>
                                    <strong>Autor:</strong> {feed.name}
                                </p>
                            </div>
                        </div>
                    ))
                ) : (
                    <h3>Não foi possivel renderizar os feedbacks</h3>
                )}
            </div>
        </section>
    );
}
