/** chunk id: 714126 params = (module,exports,require) **/
a.d(t, {
    W: () => i
});
var l = a(627968),
    n = a(64700),
    r = a(397927),
    s = a(810583);
class i extends n.PureComponent {
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
            children: (0, l.jsx)(r.Text, {
                color: "text-feedback-critical",
                variant: "text-md/normal",
                className: s.cW,
                children: "Error rendering component. Check console for more information on the error."
            })
        }) : this.props.children
    }
}