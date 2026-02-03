package os;

import java.util.List;
import js.c1;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class u {
    private static final v a(Throwable th2, String str) {
        if (th2 != null) {
            throw th2;
        }
        d();
        throw new lr.h();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static /* synthetic */ v b(Throwable th2, String str, int i10, Object obj) {
        if ((i10 & 1) != 0) {
            th2 = null;
        }
        if ((i10 & 2) != 0) {
            str = null;
        }
        return a(th2, str);
    }

    public static final boolean c(c1 c1Var) {
        return c1Var.f2() instanceof v;
    }

    public static final Void d() {
        throw new IllegalStateException("Module with the Main dispatcher is missing. Add dependency providing the Main dispatcher, e.g. 'kotlinx-coroutines-android' and ensure it has the same version as 'kotlinx-coroutines-core'");
    }

    public static final c1 e(s sVar, List list) {
        try {
            return sVar.b(list);
        } catch (Throwable th2) {
            return a(th2, sVar.a());
        }
    }
}
