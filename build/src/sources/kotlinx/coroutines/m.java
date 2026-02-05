package kotlinx.coroutines;

import java.util.concurrent.CancellationException;
import kotlin.Result;
import kotlin.Unit;
import kotlin.coroutines.Continuation;
import kotlin.coroutines.CoroutineContext;
import kotlin.jvm.internal.Intrinsics;
import ms.j0;
import ms.k0;
import ms.u1;
import rs.l0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class m extends ts.h {

    /* renamed from: i  reason: collision with root package name */
    public int f35049i;

    public m(int i10) {
        this.f35049i = i10;
    }

    public void b(Object obj, Throwable th2) {
    }

    public abstract Continuation h();

    public Throwable i(Object obj) {
        ms.r rVar;
        if (obj instanceof ms.r) {
            rVar = (ms.r) obj;
        } else {
            rVar = null;
        }
        if (rVar == null) {
            return null;
        }
        return rVar.f38943a;
    }

    public Object j(Object obj) {
        return obj;
    }

    public final void k(Throwable th2) {
        ms.a0.a(h().getContext(), new ms.d0("Fatal exception in coroutines machinery for " + this + ". Please read KDoc to 'handleFatalException' method and report this incident to maintainers", th2));
    }

    public abstract Object l();

    @Override // java.lang.Runnable
    public final void run() {
        u1 u1Var;
        try {
            Continuation h10 = h();
            Intrinsics.checkNotNull(h10, "null cannot be cast to non-null type kotlinx.coroutines.internal.DispatchedContinuation<T of kotlinx.coroutines.DispatchedTask>");
            rs.i iVar = (rs.i) h10;
            Continuation continuation = iVar.f48965p;
            Object obj = iVar.f48967r;
            CoroutineContext context = continuation.getContext();
            Object i10 = l0.i(context, obj);
            Job job = null;
            if (i10 != l0.f48979a) {
                u1Var = ms.x.m(continuation, context, i10);
            } else {
                u1Var = null;
            }
            CoroutineContext context2 = continuation.getContext();
            Object l10 = l();
            Throwable i11 = i(l10);
            if (i11 == null && k0.b(this.f35049i)) {
                job = (Job) context2.k(Job.f34997h);
            }
            if (job != null && !job.a()) {
                CancellationException N = job.N();
                b(l10, N);
                Result.a aVar = Result.f31985e;
                continuation.resumeWith(Result.b(kotlin.c.a(N)));
            } else if (i11 != null) {
                Result.a aVar2 = Result.f31985e;
                continuation.resumeWith(Result.b(kotlin.c.a(i11)));
            } else {
                Result.a aVar3 = Result.f31985e;
                continuation.resumeWith(Result.b(j(l10)));
            }
            Unit unit = Unit.f31988a;
            if (u1Var == null || u1Var.X0()) {
                l0.f(context, i10);
            }
        } catch (j0 e10) {
            ms.a0.a(h().getContext(), e10.getCause());
        } catch (Throwable th2) {
            k(th2);
        }
    }
}
