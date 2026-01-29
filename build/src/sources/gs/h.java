package gs;

import kotlin.coroutines.CoroutineContext;
import kotlin.jvm.functions.Function2;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract /* synthetic */ class h {
    public static final Object a(CoroutineContext coroutineContext, Function2 function2) {
        p0 p0Var;
        p0 a10;
        CoroutineContext k10;
        Thread currentThread = Thread.currentThread();
        kotlin.coroutines.d dVar = (kotlin.coroutines.d) coroutineContext.l(kotlin.coroutines.d.f33354h);
        if (dVar == null) {
            a10 = l1.f27161a.b();
            k10 = x.k(v0.f27191d, coroutineContext.U0(a10));
        } else {
            p0 p0Var2 = null;
            if (dVar instanceof p0) {
                p0Var = (p0) dVar;
            } else {
                p0Var = null;
            }
            if (p0Var != null) {
                if (p0Var.v2()) {
                    p0Var2 = p0Var;
                }
                if (p0Var2 != null) {
                    a10 = p0Var2;
                    k10 = x.k(v0.f27191d, coroutineContext);
                }
            }
            a10 = l1.f27161a.a();
            k10 = x.k(v0.f27191d, coroutineContext);
        }
        e eVar = new e(k10, currentThread, a10);
        eVar.V0(c0.f27144d, eVar, function2);
        return eVar.W0();
    }

    public static /* synthetic */ Object b(CoroutineContext coroutineContext, Function2 function2, int i10, Object obj) {
        if ((i10 & 1) != 0) {
            coroutineContext = kotlin.coroutines.e.f33356d;
        }
        return g.e(coroutineContext, function2);
    }
}
