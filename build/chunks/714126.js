/** chunk id: 714126, original params: e,t,l (module,exports,require) **/
"use strict";
l.d(t, {
    W: () => s
});
var r = l(627968),
    a = l(64700),
    n = l(397927),
    i = l(14503);
class s extends a.PureComponent {
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
        return null != this.state.error ? (0, r.jsx)("div", {
            children: (0, r.jsx)(n.Text, {
                color: "text-feedback-critical",
                variant: "text-md/normal",
                className: i.cW,
                children: "Error rendering component. Check console for more information on the error."
            })
        }) : this.props.children
    }
}