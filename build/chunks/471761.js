/** Chunk was on 21738 **/
/** chunk id: 471761, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => b
}), n(896048);
var r = n(627968),
    i = n(64700),
    l = n(311907),
    a = n(451988),
    s = n(990078),
    o = n(397927),
    c = n(465797),
    u = n(186975),
    d = n(379103),
    p = n(652215),
    h = n(985018);
let g = (0, o.kHD)(u.A),
    f = (0, o.kHD)(d.A),
    m = new Set([p.VX0.PUSHING, p.VX0.PULLING]),
    A = Object.freeze({
        [p.VX0.DONE]: g,
        [p.VX0.PLANNING]: g,
        [p.VX0.PREPARING]: g,
        [p.VX0.PUSHING]: o.JMY,
        [p.VX0.PULLING]: o.s3U,
        [p.VX0.CONFLICT]: g,
        [p.VX0.ERROR]: g
    });
class _ extends i.PureComponent {
    componentDidMount() {
        this.getIsRecentlySynced() && this.setRecentlySyncedTimeout()
    }
    componentDidUpdate(e) {
        null != this.props.cloudSyncState && this.props.cloudSyncState.type === p.VX0.DONE && null != this.props.cloudSyncState.timestamp && (null == e.cloudSyncState || null == e.cloudSyncState.timestamp) && this.setRecentlySyncedTimeout()
    }
    componentWillUnmount() {
        this._doneTimer.stop()
    }
    setRecentlySyncedTimeout() {
        this._doneTimer.start(2e3, () => this.forceUpdate())
    }
    getIsRecentlySynced() {
        let {
            cloudSyncState: e
        } = this.props;
        if (null != e && e.type === p.VX0.DONE) {
            let t = e.timestamp;
            return null != t && Date.now() - t <= 2e3
        }
        return !1
    }
    getStop(e, t) {
        if (t) return 1;
        if (e.type === p.VX0.PUSHING || e.type === p.VX0.PULLING) {
            let {
                progress: t,
                total: n
            } = e;
            return t / n
        }
        return 0
    }
    getTooltip(e, t) {
        switch (e.type) {
            case p.VX0.DONE:
                if (t) return h.intl.string(h.t.atpo0W);
                return h.intl.string(h.t.ZCw6zh);
            case p.VX0.CONFLICT:
            case p.VX0.ERROR:
                return h.intl.string(h.t.ZCw6zh);
            case p.VX0.PLANNING:
                return h.intl.string(h.t.ERQ0VA);
            case p.VX0.PREPARING:
                return h.intl.string(h.t.n5feu3);
            case p.VX0.PUSHING:
                return h.intl.string(h.t.oCBh0J);
            case p.VX0.PULLING:
                return h.intl.string(h.t.RTLNqC);
            default:
                return null
        }
    }
    render() {
        let {
            cloudSyncState: e,
            libraryApplication: t,
            className: n
        } = this.props, i = null == e ? {
            type: p.VX0.DONE
        } : e, l = this.getIsRecentlySynced();
        (m.has(i.type) || l) && (t.id, this.getStop(i, l));
        let a = l ? f : A[i.type];
        return (0, r.jsx)(s.m, {
            text: this.getTooltip(i, l),
            children: (0, r.jsx)(a, {
                className: n
            })
        })
    }
    constructor(...e) {
        super(...e),
            function(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n
            }(this, "_doneTimer", new a.Ep)
    }
}
let b = l.Ay.connectStores([c.A], e => {
    let {
        libraryApplication: t
    } = e;
    return {
        cloudSyncState: c.A.getState(t.id, t.branchId)
    }
})(_)