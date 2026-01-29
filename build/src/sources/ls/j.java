package ls;

import gs.l1;
import gs.u1;
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
    private static final e0 f37448a = new e0("UNDEFINED");

    /* renamed from: b */
    public static final e0 f37449b = new e0("REUSABLE_CLAIMED");

    public static final /* synthetic */ e0 a() {
        return f37448a;
    }

    public static final void b(Continuation continuation, Object obj) {
        u1 u1Var;
        if (continuation instanceof i) {
            i iVar = (i) continuation;
            Object b10 = gs.t.b(obj);
            if (d(iVar.f37444o, iVar.getContext())) {
                iVar.f37446q = b10;
                iVar.f36343i = 1;
                c(iVar.f37444o, iVar.getContext(), iVar);
                return;
            }
            gs.p0 b11 = l1.f27161a.b();
            if (b11.r2()) {
                iVar.f37446q = b10;
                iVar.f36343i = 1;
                b11.j2(iVar);
                return;
            }
            b11.p2(true);
            try {
                Job job = (Job) iVar.getContext().l(Job.f36291j);
                if (job != null && !job.a()) {
                    CancellationException N = job.N();
                    iVar.b(b10, N);
                    Result.a aVar = Result.f33279e;
                    iVar.resumeWith(Result.b(kotlin.c.a(N)));
                } else {
                    Continuation continuation2 = iVar.f37445p;
                    Object obj2 = iVar.f37447r;
                    CoroutineContext context = continuation2.getContext();
                    Object i10 = l0.i(context, obj2);
                    if (i10 != l0.f37459a) {
                        u1Var = gs.x.m(continuation2, context, i10);
                    } else {
                        u1Var = null;
                    }
                    iVar.f37445p.resumeWith(obj);
                    Unit unit = Unit.f33282a;
                    if (u1Var == null || u1Var.Z0()) {
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
            throw new gs.j0(th2, coroutineDispatcher, coroutineContext);
        }
    }

    public static final boolean d(CoroutineDispatcher coroutineDispatcher, CoroutineContext coroutineContext) {
        try {
            return coroutineDispatcher.W1(coroutineContext);
        } catch (Throwable th2) {
            throw new gs.j0(th2, coroutineDispatcher, coroutineContext);
        }
    }

    public static final boolean e(i iVar) {
        Unit unit = Unit.f33282a;
        gs.p0 b10 = l1.f27161a.b();
        if (b10.s2()) {
            return false;
        }
        if (b10.r2()) {
            iVar.f37446q = unit;
            iVar.f36343i = 1;
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
