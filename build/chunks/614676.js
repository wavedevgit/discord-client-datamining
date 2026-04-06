/** chunk id: 614676 params = (module,exports,require) **/
n.d(t, {
    A: () => o
});
var i = n(626584),
    a = n(90924),
    r = n(629471),
    l = n(652215);
let s = new i.A(l.meB),
    o = {
        [l.e$_.CAPTURE_LOG]: {
            validation: e => (0, r.A)(e).required().keys({
                level: e.string().max(10).required(),
                message: e.string().max(1e3).required()
            }),
            handler(e) {
                let {
                    socket: t,
                    args: {
                        level: n,
                        message: i
                    }
                } = e;
                (0, a.lG)(t.transport);
                let r = t.application.id,
                    l = `${r} - ${i}`;
                switch (n) {
                    case "log":
                        s.log(l);
                        break;
                    case "warn":
                        s.warn(l);
                        break;
                    case "debug":
                        s.verbose(l);
                        break;
                    case "info":
                        s.info(l);
                        break;
                    case "error":
                        s.error(l)
                }
            }
        }
    }