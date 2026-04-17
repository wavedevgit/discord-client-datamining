/** chunk id: 714126 params = (module,exports,require) **/
l.d(t, {
    W: () => i
});
var a = l(627968),
    r = l(64700),
    n = l(397927),
    s = l(723680);
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
        return null != this.state.error ? (0, a.jsx)("div", {
            children: (0, a.jsx)(n.Text, {
                color: "text-feedback-critical",
                variant: "text-md/normal",
                className: s.cW,
                children: "Error rendering component. Check console for more information on the error."
            })
        }) : this.props.children
    }
}