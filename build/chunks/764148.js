/** chunk id: 764148 params = (module,exports,require) **/
n.d(t, {
    A: () => O
});
var i = n(256415),
    r = n(837921),
    a = n(214961),
    l = n(88065),
    s = n(474951),
    o = n(770804),
    d = n(539754),
    c = n(228440),
    u = n(372919),
    A = n(624712),
    h = n(294446),
    _ = n(175436),
    m = n(43203),
    p = n(1791),
    g = n(293890),
    E = n(985603),
    I = n(103949),
    f = n(873351),
    C = n(885969),
    T = n(944127),
    N = n(388331),
    S = n(466444),
    v = n(177235),
    x = n(266686);
let y = {
        ...a.U,
        ...u.A,
        ...A.A,
        ..._.A,
        ...p.A,
        ...m.A,
        ...g.A,
        ...E.A,
        ...I.A,
        ...f.A,
        ...C.A,
        ...N.A,
        ...v.A,
        ...S.A,
        ...h.A,
        ...T.A
    },
    b = {
        ...l.A,
        ...o.c,
        ...d.I,
        ...c.p
    },
    O = {
        server: s.A,
        commands: y,
        events: b,
        stores: [i.default],
        transports: [x.A],
        registerTransportsForEmbeddedPlatform: function() {
            r.Ay.ensureModule("discord_rpc").then(() => {
                for (let e of [n(33006).A, n(998921).A]) s.A.registerTransport(e)
            })
        }
    }