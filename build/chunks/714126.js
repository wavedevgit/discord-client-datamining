/** chunk id: 714126 params = (module,exports,require) **/
a.d(t, {
    W: () => i
});
var l = a(627968),
    r = a(64700),
    n = a(397927),
    s = a(764432);
class i extends r.PureComponent {
    state = {
        error: null,
        info: null
    };
    componentDidCatch(e, t) {
        console.error("Error rendering component (LocalErrorBoundary): ", e), this.setState({
            error: e,
            info: t
        })
    }
    render() {
        return null != this.state.error ? (0, l.jsx)("div", {
            children: (0, l.jsx)(n.Text, {
                color: "text-feedback-critical",
                variant: "text-md/normal",
                className: s.cW,
                children: "Error rendering component. Check console for more information on the error."
            })
        }) : this.props.children
    }
}