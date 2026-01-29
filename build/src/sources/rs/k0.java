package rs;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public interface k0 {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a {
        public static ss.a a(k0 k0Var) {
            Integer a10 = k0Var.a();
            if (a10 != null) {
                return new ss.a(a10.intValue(), 9);
            }
            return null;
        }

        public static void b(k0 k0Var, ss.a aVar) {
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

    Integer c();

    Integer d();

    Integer e();

    Integer h();

    void j(ss.a aVar);

    void l(g gVar);

    void o(Integer num);

    g s();

    void t(Integer num);

    void u(Integer num);

    void x(Integer num);

    ss.a z();
}
