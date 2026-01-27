/** Chunk was on 60667 **/
/** chunk id: 117178, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => g
}), n(896048), n(321073);
var r = n(627968),
    i = n(64700),
    l = n(695497),
    s = n.n(l),
    a = n(313869),
    o = n(451802),
    c = n(723702),
    d = n(837921),
    u = n(650583);

function _(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}
let p = c.isPlatformEmbedded && null != d.Ay.getDiscordUtils().inputCaptureRegisterElement;
class m extends i.PureComponent {
    componentDidMount() {
        this._mounted = !0
    }
    componentWillUnmount() {
        this._mounted = !1, this.cleanUp()
    }
    componentDidUpdate(e) {
        this.props.defaultValue !== e.defaultValue && this.setState({
            codes: this.props.defaultValue
        })
    }
    cleanUp() {
        c.isPlatformEmbedded && null != this.gs && (this.gs.destroy(), this.gs = null)
    }
    handleComboChange(e) {
        let {
            mode: t
        } = this.state, {
            onChange: n
        } = this.props;
        t === o.E.RECORDING && (null != n && n(e), this.setState({
            codes: e
        }))
    }
    render() {
        let e, t, {
                codes: n,
                mode: i
            } = this.state,
            {
                disabled: l
            } = this.props;
        return p ? (t = d.Ay.getDiscordUtils().inputCaptureRegisterElement, e = this.handleNativeChange) : c.isPlatformEmbedded || (e = this.handleComboKeys), (0, r.jsx)(o.A, {
            disabled: l,
            value: n,
            mode: i,
            onClick: this.toggleRecordMode,
            onChange: e,
            registerNativeRecorder: t,
            disableOnClickWhileRecording: p
        })
    }
    constructor(e) {
        super(e), _(this, "_input", void 0), _(this, "gs", void 0), _(this, "_mounted", !1), _(this, "recordStart", () => {
            c.isPlatformEmbedded && !p && (this.gs = new a.A, this.gs.on("change", this.handleGSChange)), this.setState({
                mode: o.E.RECORDING
            })
        }), _(this, "recordEnd", () => {
            this.cleanUp(), this.setState({
                mode: o.E.DEFAULT
            })
        }), _(this, "toggleRecordMode", () => {
            this.state.mode === o.E.DEFAULT ? this.recordStart() : this.recordEnd()
        }), _(this, "handleComboKeys", (e, t, n) => {
            if (n.preventDefault(), "keydown" === n.type) {
                let e = t.map(e => [u.zY.KEYBOARD_KEY, s()(e), u.g$.BROWSER]),
                    {
                        keyCode: r
                    } = n;
                null == e.find(e => {
                    let [, t] = e;
                    return r === t
                }) && e.push([u.zY.KEYBOARD_KEY, r, u.g$.BROWSER]), this.handleComboChange(e)
            }
        }), _(this, "handleGSChange", e => {
            if (!1 === this._mounted) return;
            let t = [...e.combo];
            this.handleComboChange(t)
        }), _(this, "handleNativeChange", e => {
            e.length > 0 && this.handleComboChange(e), this.recordEnd()
        });
        const {
            defaultValue: t
        } = e;
        this.state = {
            codes: t,
            mode: o.E.DEFAULT
        }
    }
}
let g = m