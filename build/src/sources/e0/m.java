package e0;

import a0.e2;
import a0.r0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public interface m extends e2 {
    public static final r0.a F = r0.a.a("camerax.core.target.name", String.class);
    public static final r0.a G = r0.a.a("camerax.core.target.class", Class.class);

    default String M() {
        return (String) a(F);
    }

    default String q(String str) {
        return (String) e(F, str);
    }
}
