package ti;

import java.util.Set;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public interface d {
    default Object a(Class cls) {
        return g(d0.b(cls));
    }

    default Set b(Class cls) {
        return d(d0.b(cls));
    }

    ej.b c(d0 d0Var);

    default Set d(d0 d0Var) {
        return (Set) f(d0Var).get();
    }

    default ej.b e(Class cls) {
        return c(d0.b(cls));
    }

    ej.b f(d0 d0Var);

    default Object g(d0 d0Var) {
        ej.b c10 = c(d0Var);
        if (c10 == null) {
            return null;
        }
        return c10.get();
    }
}
