import { forwardRef, useEffect, useMemo } from "react";
import clsx from "clsx";
import uuId from "Hooks/uuId";
import { AiOutlineEye } from "react-icons/ai";
import styles from "./input.module.css";
import Radio from "./radio";
import { compose } from "redux";
import validator from "./helper";

const defaultStyle = {
    border: 'none',
    MozAppearance: 'none',
    outline: 'none',
    textDecoration: 'none',
    WebkitAppearance: 'none',
    WebkitFontSmoothing: 'antialiased'
}

const Input = forwardRef(
    function Input(props, ref) {
        let {
            type,
            id,
            placeholder,
            value,
            onChange,
            autoFocus = false,
            label,
            disabled = false,
            icon
        } = props;

        const idx = useMemo(() => { return uuId() }, [])
        id = id || idx;

        useEffect(() => {
            if (autoFocus) {
                document.getElementById(id).focus();
                //  can also used Ref
            }
        }, [id, autoFocus])

        const showPassword = () => {
            const password = document.getElementById(id);
            if (password.type === "password") {
                password.type = "text";
            } else {
                password.type = "password";
            }
        };

        return (
            <>
                <div
                    className={clsx(styles.input, {
                        [styles.login]: type === "login",
                    })}
                >
                    {label ? <label htmlFor={id || idx}>{label}</label> : null}
                    <input
                        ref={ref}
                        style={defaultStyle}
                        type={type}
                        id={id || idx}
                        placeholder={placeholder}
                        value={value}
                        onChange={onChange}
                        autoFocus={autoFocus}
                        className={clsx(styles.inputField, {
                            [styles.login]: type === "login",
                            [styles.disable]: disabled,


                        })}
                        {...props}
                    />
                    {icon && <i>{icon}</i>}
                    {type === "password" && <i className={styles.passIcon} onClick={showPassword}><AiOutlineEye size={22} /></i>}

                </div>
            </>

        )
    }
)

export default compose(
    validator
)(Input);

Input.Radio = Radio;
