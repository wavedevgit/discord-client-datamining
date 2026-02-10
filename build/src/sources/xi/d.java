package xi;

import java.util.Set;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public interface d {
    default Object a(Class cls) {
        return f(d0.b(cls));
    }

    default Set b(d0 d0Var) {
        return (Set) d(d0Var).get();
    }

    ij.b c(d0 d0Var);

    ij.b d(d0 d0Var);

    default Set e(Class cls) {
        return b(d0.b(cls));
    }

    default Object f(d0 d0Var) {
        ij.b c10 = c(d0Var);
        if (c10 == null) {
            return null;
        }
        return c10.get();
    }

    default ij.b g(Class cls) {
        return c(d0.b(cls));
    }
}
