/** chunk id: 490415, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => a
});
var i = n(627968),
    s = n(64700),
    l = n(961350);

function a(e) {
    return class extends s.Component {
        state = {
            isAuthenticated: l.default.isAuthenticated()
        };
        componentDidMount() {
            l.default.addChangeListener(this.onStoreChange)
        }
        componentWillUnmount() {
            l.default.removeChangeListener(this.onStoreChange)
        }
        onStoreChange = () => {
            this.setState({
                isAuthenticated: l.default.isAuthenticated()
            })
        };
        render() {
            return (0, i.jsx)(e, {
                ...this.props,
                isAuthenticated: this.state.isAuthenticated
            })
        }
    }
}