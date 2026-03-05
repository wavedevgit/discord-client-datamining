/** chunk id: 745399 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => c
});
var i = n(627968),
    s = n(64700),
    r = n(311907),
    l = n(854378),
    a = n(976860),
    o = n(210714),
    d = n(58013);
r.Ay.initialize();
class c extends s.PureComponent {
    static defaultProps = {
        transitionTo: a.pX,
        replaceWith: a.bG
    };
    componentDidMount() {
        (0, o.d)("account_revert")
    }
    render() {
        let {
            token: e
        } = this.props.match.params;
        return (0, i.jsx)(l.Ay, {
            style: {
                padding: 0
            },
            children: (0, i.jsx)(d.A, {
                width: 464,
                token: e,
                ...this.props
            })
        })
    }
}