package qi;

import java.util.Set;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public interface d {
    default Object a(Class cls) {
        return d(d0.b(cls));
    }

    default Set b(Class cls) {
        return f(d0.b(cls));
    }

    default bj.b c(Class cls) {
        return g(d0.b(cls));
    }

    default Object d(d0 d0Var) {
        bj.b g10 = g(d0Var);
        if (g10 == null) {
            return null;
        }
        return g10.get();
    }

    bj.b e(d0 d0Var);

    default Set f(d0 d0Var) {
        return (Set) e(d0Var).get();
    }

    bj.b g(d0 d0Var);
}
