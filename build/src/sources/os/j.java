package os;

import java.util.concurrent.CancellationException;
import js.l1;
import js.u1;
import kotlin.Result;
import kotlin.Unit;
import kotlin.coroutines.Continuation;
import kotlin.coroutines.CoroutineContext;
import kotlinx.coroutines.CoroutineDispatcher;
import kotlinx.coroutines.Job;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class j {

    /* renamed from: a */
    private static final e0 f44519a = new e0("UNDEFINED");

    /* renamed from: b */
    public static final e0 f44520b = new e0("REUSABLE_CLAIMED");

    public static final /* synthetic */ e0 a() {
        return f44519a;
    }

    public static final void b(Continuation continuation, Object obj) {
        u1 u1Var;
        if (continuation instanceof i) {
            i iVar = (i) continuation;
            Object b10 = js.t.b(obj);
            if (d(iVar.f44515o, iVar.getContext())) {
                iVar.f44517q = b10;
                iVar.f35525i = 1;
                c(iVar.f44515o, iVar.getContext(), iVar);
                return;
            }
            js.p0 b11 = l1.f31964a.b();
            if (b11.r2()) {
                iVar.f44517q = b10;
                iVar.f35525i = 1;
                b11.j2(iVar);
                return;
            }
            b11.p2(true);
            try {
                Job job = (Job) iVar.getContext().l(Job.f35473h);
                if (job != null && !job.a()) {
                    CancellationException N = job.N();
                    iVar.b(b10, N);
                    Result.a aVar = Result.f32461e;
                    iVar.resumeWith(Result.b(kotlin.c.a(N)));
                } else {
                    Continuation continuation2 = iVar.f44516p;
                    Object obj2 = iVar.f44518r;
                    CoroutineContext context = continuation2.getContext();
                    Object i10 = l0.i(context, obj2);
                    if (i10 != l0.f44530a) {
                        u1Var = js.x.m(continuation2, context, i10);
                    } else {
                        u1Var = null;
                    }
                    iVar.f44516p.resumeWith(obj);
                    Unit unit = Unit.f32464a;
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
            throw new js.j0(th2, coroutineDispatcher, coroutineContext);
        }
    }

    public static final boolean d(CoroutineDispatcher coroutineDispatcher, CoroutineContext coroutineContext) {
        try {
            return coroutineDispatcher.W1(coroutineContext);
        } catch (Throwable th2) {
            throw new js.j0(th2, coroutineDispatcher, coroutineContext);
        }
    }

    public static final boolean e(i iVar) {
        Unit unit = Unit.f32464a;
        js.p0 b10 = l1.f31964a.b();
        if (b10.s2()) {
            return false;
        }
        if (b10.r2()) {
            iVar.f44517q = unit;
            iVar.f35525i = 1;
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
