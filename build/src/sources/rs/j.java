package rs;

import java.util.concurrent.CancellationException;
import kotlin.Result;
import kotlin.Unit;
import kotlin.coroutines.Continuation;
import kotlin.coroutines.CoroutineContext;
import kotlinx.coroutines.CoroutineDispatcher;
import kotlinx.coroutines.Job;
import ms.l1;
import ms.u1;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class j {

    /* renamed from: a */
    private static final e0 f48968a = new e0("UNDEFINED");

    /* renamed from: b */
    public static final e0 f48969b = new e0("REUSABLE_CLAIMED");

    public static final /* synthetic */ e0 a() {
        return f48968a;
    }

    public static final void b(Continuation continuation, Object obj) {
        u1 u1Var;
        if (continuation instanceof i) {
            i iVar = (i) continuation;
            Object b10 = ms.t.b(obj);
            if (d(iVar.f48964o, iVar.getContext())) {
                iVar.f48966q = b10;
                iVar.f35049i = 1;
                c(iVar.f48964o, iVar.getContext(), iVar);
                return;
            }
            ms.p0 b11 = l1.f38926a.b();
            if (b11.r2()) {
                iVar.f48966q = b10;
                iVar.f35049i = 1;
                b11.j2(iVar);
                return;
            }
            b11.p2(true);
            try {
                Job job = (Job) iVar.getContext().k(Job.f34997h);
                if (job != null && !job.a()) {
                    CancellationException N = job.N();
                    iVar.b(b10, N);
                    Result.a aVar = Result.f31985e;
                    iVar.resumeWith(Result.b(kotlin.c.a(N)));
                } else {
                    Continuation continuation2 = iVar.f48965p;
                    Object obj2 = iVar.f48967r;
                    CoroutineContext context = continuation2.getContext();
                    Object i10 = l0.i(context, obj2);
                    if (i10 != l0.f48979a) {
                        u1Var = ms.x.m(continuation2, context, i10);
                    } else {
                        u1Var = null;
                    }
                    iVar.f48965p.resumeWith(obj);
                    Unit unit = Unit.f31988a;
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
            throw new ms.j0(th2, coroutineDispatcher, coroutineContext);
        }
    }

    public static final boolean d(CoroutineDispatcher coroutineDispatcher, CoroutineContext coroutineContext) {
        try {
            return coroutineDispatcher.W1(coroutineContext);
        } catch (Throwable th2) {
            throw new ms.j0(th2, coroutineDispatcher, coroutineContext);
        }
    }

    public static final boolean e(i iVar) {
        Unit unit = Unit.f31988a;
        ms.p0 b10 = l1.f38926a.b();
        if (b10.s2()) {
            return false;
        }
        if (b10.r2()) {
            iVar.f48966q = unit;
            iVar.f35049i = 1;
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
