export default function Shop({ name, time, children }) {
    return (
        <div style={{
            backgroundColor: "red"
        }}>
            <p>
                Hello {name}
            </p>

            {children}

            <span>How are you, {time}</span>
        </div>
    )
}