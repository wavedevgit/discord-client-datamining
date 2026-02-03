package us;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public interface k0 {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a {
        public static vs.a a(k0 k0Var) {
            Integer a10 = k0Var.a();
            if (a10 != null) {
                return new vs.a(a10.intValue(), 9);
            }
            return null;
        }

        public static void b(k0 k0Var, vs.a aVar) {
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

    void c(g gVar);

    Integer d();

    Integer e();

    Integer h();

    Integer i();

    void n(Integer num);

    void p(vs.a aVar);

    g s();

    void t(Integer num);

    void u(Integer num);

    void x(Integer num);

    vs.a z();
}
