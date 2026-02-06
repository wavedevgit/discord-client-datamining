package ts;

import kotlin.jvm.functions.Function2;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class b {

    /* renamed from: a */
    private static final e0 f50813a = new e0("CLOSED");

    public static final c b(c cVar) {
        while (true) {
            Object g10 = cVar.g();
            if (g10 == f50813a) {
                return cVar;
            }
            c cVar2 = (c) g10;
            if (cVar2 == null) {
                if (cVar.m()) {
                    return cVar;
                }
            } else {
                cVar = cVar2;
            }
        }
    }

    public static final Object c(b0 b0Var, long j10, Function2 function2) {
        while (true) {
            if (b0Var.f50815i < j10 || b0Var.k()) {
                Object g10 = b0Var.g();
                if (g10 == f50813a) {
                    return c0.a(f50813a);
                }
                b0 b0Var2 = (b0) ((c) g10);
                if (b0Var2 == null) {
                    b0Var2 = (b0) function2.invoke(Long.valueOf(b0Var.f50815i + 1), b0Var);
                    if (b0Var.o(b0Var2)) {
                        if (b0Var.k()) {
                            b0Var.n();
                        }
                    }
                }
                b0Var = b0Var2;
            } else {
                return c0.a(b0Var);
            }
        }
    }
}
