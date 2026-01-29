/** Chunk was on 31748 **/
/** chunk id: 606451, original params: e,t,n (module,exports,require) **/
n.d(t, {
    m: () => g
});
var r = n(627968),
    l = n(64700),
    i = n(735438),
    a = n(353709),
    o = n(311907),
    s = n(397927),
    c = n(971778),
    u = n(494783),
    d = n(342887),
    f = n(985018),
    p = n(938663);

function g() {
    let e, t, n, g, m, _, {
            hasActiveDownloads: h,
            progress: y
        } = (e = (0, o.cf)([c.A], () => c.A.getOngoingDownloads()), t = l.useRef({}), l.useEffect(() => {
            0 === Object.entries(e).length && (t.current = {}), Object.assign(t.current, e)
        }, [e]), g = (n = Object.values(t.current)).some(e => {
            let {
                downloadedBytes: t
            } = e;
            return (null != t ? t : 0) > 0
        }), m = (0, i.sumBy)(n, e => {
            var t;
            return null != (t = null == e ? void 0 : e.downloadedBytes) ? t : 0
        }), {
            hasActiveDownloads: g,
            progress: 0 === (_ = (0, i.sumBy)(n, e => {
                var t;
                return null != (t = null == e ? void 0 : e.totalBytes) ? t : 0
            })) ? 0 : Math.floor(m / _ * 100)
        }),
        {
            activeVoice: A
        } = (0, u.f)();
    return (0, s.pnh)(h ? null != A ? "voice-on" : "voice-off" : null, {
        from: {
            opacity: 0,
            translateY: 20
        },
        enter: e => ({
            opacity: 1,
            translateY: "voice-on" === e ? -72 : 0
        }),
        leave: {
            opacity: 0,
            translateY: 80
        }
    }, "respect-motion-settings")((e, t) => null != t ? (0, r.jsx)(a.animated.div, {
        style: e,
        className: p.zh,
        children: (0, r.jsxs)("div", {
            className: p.AY,
            children: [(0, r.jsxs)("div", {
                className: p.l_,
                children: [(0, r.jsx)(s.Text, {
                    variant: "text-sm/semibold",
                    color: "text-strong",
                    children: f.intl.format(f.t["r+uZYZ"], {
                        progress: y
                    })
                }), (0, r.jsx)(s.QWc, {
                    text: f.intl.string(f.t["ETE/oC"]),
                    onClick: d.HD,
                    variant: "always-white",
                    textVariant: "text-sm/normal"
                })]
            }), (0, r.jsx)(s.iCB, {
                percent: y,
                size: s.iCB.Sizes.XSMALL
            })]
        })
    }) : null)
}