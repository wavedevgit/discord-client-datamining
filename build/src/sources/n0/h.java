package n0;

import a0.i1;
import a0.r0;
import a0.w1;
import a0.x2;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class h implements x2, i1, e0.n {
    static final r0.a J = r0.a.a("camerax.core.streamSharing.captureTypes", List.class);
    private final w1 I;

    /* JADX INFO: Access modifiers changed from: package-private */
    public h(w1 w1Var) {
        this.I = w1Var;
    }

    public List W() {
        return (List) a(J);
    }

    @Override // a0.e2
    public r0 getConfig() {
        return this.I;
    }
}
