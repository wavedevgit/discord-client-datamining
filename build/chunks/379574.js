/** Chunk was on 28636 **/
/** chunk id: 379574, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => g
}), n(896048), n(693327), n(554719), n(680155), n(323874), n(14289), n(35956), n(747238);
var r = n(627968),
    l = n(64700),
    i = n(311907),
    a = n(397927),
    s = n(976860),
    o = n(961350),
    c = n(449054),
    d = n(412461),
    u = n(933171),
    p = n(652215),
    h = n(985018);
let m = "redirect_to_support_server";

function g(e) {
    var t;
    let n, g, _, {
            application: b,
            className: f
        } = e,
        {
            onGoToSupportServer: x
        } = (t = b, n = (0, d.DB)(), g = (0, i.bG)([o.default], () => o.default.getSessionId()), _ = l.useCallback(async () => {
            try {
                var e;
                let n = null == t || null == (e = t.guild) ? void 0 : e.id;
                if (null != n) {
                    (0, d.TR)(p.HAw.APP_DIRECTORY_SUPPORT_SERVER_JOINED, {
                        application_id: t.id,
                        support_guild_id: n
                    });
                    let e = {
                        page: p.liQ.APPLICATION_DIRECTORY
                    };
                    await (0, c.Z2)(n, e)
                }
            } catch (e) {}
        }, [t]), l.useEffect(() => {
            let e = new URL(location.href);
            if (null != t && n && null != g && "true" === e.searchParams.get(m)) {
                e.searchParams.delete(m);
                let t = e.pathname + e.search;
                (0, s.bG)(t), _()
            }
        }, [n, _, g, t]), {
            onGoToSupportServer: l.useCallback(() => {
                var e;
                null != (null == t || null == (e = t.guild) ? void 0 : e.id) && (n ? _() : (0, d.jL)({
                    [m]: "true"
                }))
            }, [t, _, n])
        });
    return null != b.guild && b.guild.features.includes(p.GuildFeatures.DISCOVERABLE) ? (0, r.jsxs)("div", {
        className: f,
        children: [(0, r.jsx)(a.Heading, {
            variant: "heading-sm/semibold",
            color: "text-strong",
            children: h.intl.string(h.t.KJEO27)
        }), (0, r.jsx)(u.A, {
            guild: b.guild,
            onClick: x
        })]
    }) : null
}