package ms;

import hs.l1;
import hs.u1;
import java.util.concurrent.CancellationException;
import kotlin.Result;
import kotlin.Unit;
import kotlin.coroutines.Continuation;
import kotlin.coroutines.CoroutineContext;
import kotlinx.coroutines.CoroutineDispatcher;
import kotlinx.coroutines.Job;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class j {

    /* renamed from: a */
    private static final e0 f39164a = new e0("UNDEFINED");

    /* renamed from: b */
    public static final e0 f39165b = new e0("REUSABLE_CLAIMED");

    public static final /* synthetic */ e0 a() {
        return f39164a;
    }

    public static final void b(Continuation continuation, Object obj) {
        u1 u1Var;
        if (continuation instanceof i) {
            i iVar = (i) continuation;
            Object b10 = hs.t.b(obj);
            if (d(iVar.f39160o, iVar.getContext())) {
                iVar.f39162q = b10;
                iVar.f36135i = 1;
                c(iVar.f39160o, iVar.getContext(), iVar);
                return;
            }
            hs.p0 b11 = l1.f27924a.b();
            if (b11.r2()) {
                iVar.f39162q = b10;
                iVar.f36135i = 1;
                b11.j2(iVar);
                return;
            }
            b11.p2(true);
            try {
                Job job = (Job) iVar.getContext().l(Job.f36083j);
                if (job != null && !job.a()) {
                    CancellationException N = job.N();
                    iVar.d(b10, N);
                    Result.a aVar = Result.f33071e;
                    iVar.resumeWith(Result.b(kotlin.c.a(N)));
                } else {
                    Continuation continuation2 = iVar.f39161p;
                    Object obj2 = iVar.f39163r;
                    CoroutineContext context = continuation2.getContext();
                    Object i10 = l0.i(context, obj2);
                    if (i10 != l0.f39175a) {
                        u1Var = hs.x.m(continuation2, context, i10);
                    } else {
                        u1Var = null;
                    }
                    iVar.f39161p.resumeWith(obj);
                    Unit unit = Unit.f33074a;
                    if (u1Var == null || u1Var.X0()) {
                        l0.f(context, i10);
                    }
                }
                do {
                } while (b11.u2());
            } finally {
                try {
                    return;
                } finally {
                }
            }
            return;
        }
        continuation.resumeWith(obj);
    }

    public static final void c(CoroutineDispatcher coroutineDispatcher, CoroutineContext coroutineContext, Runnable runnable) {
        try {
            coroutineDispatcher.E1(coroutineContext, runnable);
        } catch (Throwable th2) {
            throw new hs.j0(th2, coroutineDispatcher, coroutineContext);
        }
    }

    public static final boolean d(CoroutineDispatcher coroutineDispatcher, CoroutineContext coroutineContext) {
        try {
            return coroutineDispatcher.W1(coroutineContext);
        } catch (Throwable th2) {
            throw new hs.j0(th2, coroutineDispatcher, coroutineContext);
        }
    }

    public static final boolean e(i iVar) {
        Unit unit = Unit.f33074a;
        hs.p0 b10 = l1.f27924a.b();
        if (b10.s2()) {
            return false;
        }
        if (b10.r2()) {
            iVar.f39162q = unit;
            iVar.f36135i = 1;
            b10.j2(iVar);
            return true;
        }
        b10.p2(true);
        try {
            iVar.run();
            do {
            } while (b10.u2());
        } finally {
            try {
                return false;
            } finally {
            }
        }
        return false;
    }
}
