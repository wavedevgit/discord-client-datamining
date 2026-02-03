package ss;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public interface k0 {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a {
        public static ts.a a(k0 k0Var) {
            Integer a10 = k0Var.a();
            if (a10 != null) {
                return new ts.a(a10.intValue(), 9);
            }
            return null;
        }

        public static void b(k0 k0Var, ts.a aVar) {
            Integer num;
            if (aVar != null) {
                num = Integer.valueOf(aVar.d(9));
            } else {
                num = null;
            }
            k0Var.u(num);
        }
    }

    void D(Integer num);

    Integer a();

    void b(ts.a aVar);

    Integer d();

    Integer e();

    Integer h();

    Integer i();

    void n(Integer num);

    g r();

    void s(g gVar);

    void t(Integer num);

    void u(Integer num);

    void x(Integer num);

    ts.a z();
}
