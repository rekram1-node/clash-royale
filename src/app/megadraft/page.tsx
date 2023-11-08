import { createMegaDraft } from "@/models/megaDraft";
import { Card } from "@/models/cards"
import styles from '../../styles/Grid.module.css';

export default function MegaDraft() {
    const newDraft = createMegaDraft();
    return (
        <div className={styles.gridContainer}>
            {newDraft.cards.map((item: Card) => (
                <div key={item.id} className={styles.gridItem}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={item.iconUrl} alt={`Item ${item.id}`} />
                </div>
            ))}
        </div>
    )
}
