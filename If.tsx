export default function If(props: { cond: boolean, children: JSX.Element }) {
    if (props.cond) {
        return props.children
    } else {
        return null
    }
}