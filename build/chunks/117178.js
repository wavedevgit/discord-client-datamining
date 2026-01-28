/** Chunk was on 78528 **/
/** chunk id: 117178, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => g
}), n(896048), n(321073);
var r = n(627968),
    l = n(64700),
    i = n(695497),
    s = n.n(i),
    a = n(313869),
    o = n(451802),
    c = n(723702),
    u = n(837921),
    d = n(650583);

function p(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}
let h = c.isPlatformEmbedded && null != u.Ay.getDiscordUtils().inputCaptureRegisterElement;
class f extends l.PureComponent {
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
                mode: l
            } = this.state,
            {
                disabled: i
            } = this.props;
        return h ? (t = u.Ay.getDiscordUtils().inputCaptureRegisterElement, e = this.handleNativeChange) : c.isPlatformEmbedded || (e = this.handleComboKeys), (0, r.jsx)(o.A, {
            disabled: i,
            value: n,
            mode: l,
            onClick: this.toggleRecordMode,
            onChange: e,
            registerNativeRecorder: t,
            disableOnClickWhileRecording: h
        })
    }
    constructor(e) {
        super(e), p(this, "_input", void 0), p(this, "gs", void 0), p(this, "_mounted", !1), p(this, "recordStart", () => {
            c.isPlatformEmbedded && !h && (this.gs = new a.A, this.gs.on("change", this.handleGSChange)), this.setState({
                mode: o.E.RECORDING
            })
        }), p(this, "recordEnd", () => {
            this.cleanUp(), this.setState({
                mode: o.E.DEFAULT
            })
        }), p(this, "toggleRecordMode", () => {
            this.state.mode === o.E.DEFAULT ? this.recordStart() : this.recordEnd()
        }), p(this, "handleComboKeys", (e, t, n) => {
            if (n.preventDefault(), "keydown" === n.type) {
                let e = t.map(e => [d.zY.KEYBOARD_KEY, s()(e), d.g$.BROWSER]),
                    {
                        keyCode: r
                    } = n;
                null == e.find(e => {
                    let [, t] = e;
                    return r === t
                }) && e.push([d.zY.KEYBOARD_KEY, r, d.g$.BROWSER]), this.handleComboChange(e)
            }
        }), p(this, "handleGSChange", e => {
            if (!1 === this._mounted) return;
            let t = [...e.combo];
            this.handleComboChange(t)
        }), p(this, "handleNativeChange", e => {
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
let g = f