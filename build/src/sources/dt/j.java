package dt;

import java.util.concurrent.CancellationException;
import kotlin.Result;
import kotlin.Unit;
import kotlin.coroutines.Continuation;
import kotlin.coroutines.CoroutineContext;
import kotlinx.coroutines.CoroutineDispatcher;
import kotlinx.coroutines.Job;
import ys.l1;
import ys.u1;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class j {

    /* renamed from: a */
    private static final e0 f21887a = new e0("UNDEFINED");

    /* renamed from: b */
    public static final e0 f21888b = new e0("REUSABLE_CLAIMED");

    public static final /* synthetic */ e0 a() {
        return f21887a;
    }

    public static final void b(Continuation continuation, Object obj) {
        u1 u1Var;
        if (continuation instanceof i) {
            i iVar = (i) continuation;
            Object b10 = ys.t.b(obj);
            if (d(iVar.f21883o, iVar.getContext())) {
                iVar.f21885q = b10;
                iVar.f35617i = 1;
                c(iVar.f21883o, iVar.getContext(), iVar);
                return;
            }
            ys.p0 b11 = l1.f56368a.b();
            if (b11.m2()) {
                iVar.f21885q = b10;
                iVar.f35617i = 1;
                b11.c2(iVar);
                return;
            }
            b11.g2(true);
            try {
                Job job = (Job) iVar.getContext().m(Job.f35565k);
                if (job != null && !job.a()) {
                    CancellationException I = job.I();
                    iVar.d(b10, I);
                    Result.a aVar = Result.f32553e;
                    iVar.resumeWith(Result.b(kotlin.c.a(I)));
                } else {
                    Continuation continuation2 = iVar.f21884p;
                    Object obj2 = iVar.f21886r;
                    CoroutineContext context = continuation2.getContext();
                    Object i10 = l0.i(context, obj2);
                    if (i10 != l0.f21898a) {
                        u1Var = ys.x.m(continuation2, context, i10);
                    } else {
                        u1Var = null;
                    }
                    iVar.f21884p.resumeWith(obj);
                    Unit unit = Unit.f32556a;
                    if (u1Var == null || u1Var.d1()) {
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
            coroutineDispatcher.b1(coroutineContext, runnable);
        } catch (Throwable th2) {
            throw new ys.j0(th2, coroutineDispatcher, coroutineContext);
        }
    }

    public static final boolean d(CoroutineDispatcher coroutineDispatcher, CoroutineContext coroutineContext) {
        try {
            return coroutineDispatcher.x1(coroutineContext);
        } catch (Throwable th2) {
            throw new ys.j0(th2, coroutineDispatcher, coroutineContext);
        }
    }

    public static final boolean e(i iVar) {
        Unit unit = Unit.f32556a;
        ys.p0 b10 = l1.f56368a.b();
        if (b10.o2()) {
            return false;
        }
        if (b10.m2()) {
            iVar.f21885q = unit;
            iVar.f35617i = 1;
            b10.c2(iVar);
            return true;
        }
        b10.g2(true);
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
