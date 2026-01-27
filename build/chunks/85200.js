/** Chunk was on 60667 **/
/** chunk id: 85200, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => g
}), n(896048);
var r = n(627968),
    i = n(64700),
    l = n(311907),
    s = n(625841),
    a = n(74848),
    o = n(430452),
    c = n(723702),
    d = n(801264),
    u = n(731854),
    _ = n(985018),
    p = n(637462);
let m = c.isWindows() ? ["BTHENUM", "BTHHFENUM"] : [];

function g() {
    var e, t;
    let {
        canSetInputDevice: n,
        canSetOutputDevice: c
    } = (0, l.cf)([o.A], () => ({
        canSetInputDevice: o.A.supports(u.O5.AUDIO_INPUT_DEVICE),
        canSetOutputDevice: o.A.supports(u.O5.AUDIO_OUTPUT_DEVICE)
    })), g = (0, a.x5)(u.oh.AUDIO_INPUT), A = (0, a.x5)(u.oh.AUDIO_OUTPUT), [f, h] = (0, a.tR)(u.oh.AUDIO_INPUT, {
        location: "UserSettingsDevices"
    }), [b, E] = (0, a.tR)(u.oh.AUDIO_OUTPUT, {
        location: "UserSettingsDevices"
    }), x = f.concat(h), O = b.concat(E), C = i.useMemo(() => {
        let e = m.some(e => {
                var t;
                return null == g || null == (t = g.hardwareId) ? void 0 : t.startsWith(e)
            }),
            t = m.some(e => {
                var t;
                return null == A || null == (t = A.hardwareId) ? void 0 : t.startsWith(e)
            });
        return e && t && (null == g ? void 0 : g.containerId) != null && g.containerId === (null == A ? void 0 : A.containerId)
    }, [g, A]), I = x[0], T = O[0], S = null != (e = null == I ? void 0 : I.disabled) ? e : !n, j = null != (t = null == T ? void 0 : T.disabled) ? t : !c;
    return (0, r.jsxs)("div", {
        className: p.y0,
        children: [(0, r.jsxs)("div", {
            className: p.o6,
            children: [(0, r.jsx)("div", {
                className: p.fi,
                children: (0, r.jsx)(s.U, {
                    label: _.intl.string(_.t.hHMYbb),
                    deviceType: u.oh.AUDIO_INPUT,
                    location: "UserSettingsDevices",
                    hideDeviceTypeIcon: !0,
                    isDisabled: S
                })
            }), (0, r.jsx)("div", {
                className: p.fi,
                children: (0, r.jsx)(s.U, {
                    label: _.intl.string(_.t.dl18zb),
                    deviceType: u.oh.AUDIO_OUTPUT,
                    location: "UserSettingsDevices",
                    hideDeviceTypeIcon: !0,
                    isDisabled: j
                })
            })]
        }), C && (0, r.jsx)(d.A, {
            look: d.k.WARNING,
            children: _.intl.string(_.t.Ioz3gx)
        })]
    })
}