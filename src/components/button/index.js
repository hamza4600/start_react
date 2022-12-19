import { memo, forwardRef } from "react";
import styles from "./styles.module.css";


const Button = memo(
    forwardRef(
        function Button(props, ref) {
            const {
                children,
                leftIcon,
                rightIcon,
                isDisabled,
                type,
            } = props;
            return (
                <>
                    <div>
                        <button
                            ref={ref}
                            type={type}
                            disabled={isDisabled}
                            onClickCapture={(e) => { e.preventDefault(); }}
                            className={styles.button + " " + (isDisabled ? styles.disabled : "")}

                        >
                            {(leftIcon) && (
                                <i className={styles.leftIcon}>{leftIcon}</i>
                            )}
                            {children}
                            {(rightIcon) && (
                                <i className={styles.rightIcon}>{rightIcon}</i>
                            )}
                        </button>
                    </div>
                </>
            )
        }
    )
)

export default Button