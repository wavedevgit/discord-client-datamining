package vi;

import java.util.Set;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public interface d {
    default Object a(Class cls) {
        return f(d0.b(cls));
    }

    gj.b b(d0 d0Var);

    default Set c(Class cls) {
        return g(d0.b(cls));
    }

    gj.b d(d0 d0Var);

    default gj.b e(Class cls) {
        return b(d0.b(cls));
    }

    default Object f(d0 d0Var) {
        gj.b b10 = b(d0Var);
        if (b10 == null) {
            return null;
        }
        return b10.get();
    }

    default Set g(d0 d0Var) {
        return (Set) d(d0Var).get();
    }
}
