"use client";
import styles from "app/sass/global-error.module.sass";
import Image from "next/image";

export default function GlobalError({ reset }: ErrorPageProps) {
  return (
    <main className={styles.error}>
      <h1 className={styles.Error__title}>Ha ocurrido un error</h1>
      <Image src="/images/error.png" alt="Error" width={300} height={300} />
      <p className={styles.Error__message}>Lo sentimos, ha ocurrido un error</p>
      <button className={styles.Error__button} onClick={reset}>
        Recargar
      </button>
    </main>
  );
}
