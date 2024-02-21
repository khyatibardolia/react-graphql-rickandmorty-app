import {FC, ReactNode} from "react";

type Props = {
    header?: ReactNode,
    body: ReactNode,
    footer?: ReactNode,
}

export const Card: FC<Props> = ({header, body, footer}) => {
    return (
        <div className="card">
            {header && <div className="card-header">
                {header}
            </div>}
            {body && <div className="card-body">
                {body}
            </div>}
            {footer && <div className="card-footer">
                {footer}
            </div>}

        </div>
    )
}