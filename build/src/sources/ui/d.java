package ui;

import java.util.Set;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public interface d {
    default Object a(Class cls) {
        return e(d0.b(cls));
    }

    default Set b(Class cls) {
        return d(d0.b(cls));
    }

    fj.b c(d0 d0Var);

    default Set d(d0 d0Var) {
        return (Set) c(d0Var).get();
    }

    default Object e(d0 d0Var) {
        fj.b f10 = f(d0Var);
        if (f10 == null) {
            return null;
        }
        return f10.get();
    }

    fj.b f(d0 d0Var);

    default fj.b g(Class cls) {
        return f(d0.b(cls));
    }
}
