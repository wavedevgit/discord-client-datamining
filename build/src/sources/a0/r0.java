package a0;

import java.util.Objects;
import java.util.Set;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public interface r0 {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static abstract class a {
        public static a a(String str, Class cls) {
            return b(str, cls, null);
        }

        public static a b(String str, Class cls, Object obj) {
            return new d(str, cls, obj);
        }

        public abstract String c();

        public abstract Object d();

        public abstract Class e();
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public interface b {
        boolean a(a aVar);
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public enum c {
        ALWAYS_OVERRIDE,
        HIGH_PRIORITY_REQUIRED,
        REQUIRED,
        OPTIONAL
    }

    static boolean A(c cVar, c cVar2) {
        c cVar3 = c.REQUIRED;
        if (cVar == cVar3 && cVar2 == cVar3) {
            return true;
        }
        return false;
    }

    static r0 E(r0 r0Var, r0 r0Var2) {
        r1 Z;
        if (r0Var == null && r0Var2 == null) {
            return w1.X();
        }
        if (r0Var2 != null) {
            Z = r1.a0(r0Var2);
        } else {
            Z = r1.Z();
        }
        if (r0Var != null) {
            for (a aVar : r0Var.b()) {
                Q(Z, r0Var2, r0Var, aVar);
            }
        }
        return w1.Y(Z);
    }

    static void Q(r1 r1Var, r0 r0Var, r0 r0Var2, a aVar) {
        if (Objects.equals(aVar, i1.f92r)) {
            r1Var.K(aVar, r0Var2.f(aVar), b0.n.a((m0.c) r0Var.e(aVar, null), (m0.c) r0Var2.e(aVar, null)));
            return;
        }
        r1Var.K(aVar, r0Var2.f(aVar), r0Var2.a(aVar));
    }

    Object a(a aVar);

    Set b();

    Object c(a aVar, c cVar);

    Set d(a aVar);

    Object e(a aVar, Object obj);

    c f(a aVar);

    void g(String str, b bVar);

    boolean h(a aVar);
}
