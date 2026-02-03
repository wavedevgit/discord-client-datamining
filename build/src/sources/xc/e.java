package xc;

import lc.l0;
import ne.h0;
import tc.b0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
abstract class e {

    /* renamed from: a  reason: collision with root package name */
    protected final b0 f53243a;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a extends l0 {
        public a(String str) {
            super(str, null, false, 1);
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public e(b0 b0Var) {
        this.f53243a = b0Var;
    }

    public final boolean a(h0 h0Var, long j10) {
        if (b(h0Var) && c(h0Var, j10)) {
            return true;
        }
        return false;
    }

    protected abstract boolean b(h0 h0Var);

    protected abstract boolean c(h0 h0Var, long j10);
}
