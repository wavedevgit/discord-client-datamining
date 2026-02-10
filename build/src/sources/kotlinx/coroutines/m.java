package kotlinx.coroutines;

import dt.l0;
import java.util.concurrent.CancellationException;
import kotlin.Result;
import kotlin.Unit;
import kotlin.coroutines.Continuation;
import kotlin.coroutines.CoroutineContext;
import kotlin.jvm.internal.Intrinsics;
import ys.j0;
import ys.k0;
import ys.u1;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class m extends ft.h {

    /* renamed from: i  reason: collision with root package name */
    public int f35048i;

    public m(int i10) {
        this.f35048i = i10;
    }

    public void d(Object obj, Throwable th2) {
    }

    public abstract Continuation h();

    public Throwable i(Object obj) {
        ys.r rVar;
        if (obj instanceof ys.r) {
            rVar = (ys.r) obj;
        } else {
            rVar = null;
        }
        if (rVar == null) {
            return null;
        }
        return rVar.f55816a;
    }

    public Object j(Object obj) {
        return obj;
    }

    public final void k(Throwable th2) {
        ys.a0.a(h().getContext(), new ys.d0("Fatal exception in coroutines machinery for " + this + ". Please read KDoc to 'handleFatalException' method and report this incident to maintainers", th2));
    }

    public abstract Object l();

    @Override // java.lang.Runnable
    public final void run() {
        u1 u1Var;
        try {
            Continuation h10 = h();
            Intrinsics.checkNotNull(h10, "null cannot be cast to non-null type kotlinx.coroutines.internal.DispatchedContinuation<T of kotlinx.coroutines.DispatchedTask>");
            dt.i iVar = (dt.i) h10;
            Continuation continuation = iVar.f21883p;
            Object obj = iVar.f21885r;
            CoroutineContext context = continuation.getContext();
            Object i10 = l0.i(context, obj);
            Job job = null;
            if (i10 != l0.f21897a) {
                u1Var = ys.x.m(continuation, context, i10);
            } else {
                u1Var = null;
            }
            CoroutineContext context2 = continuation.getContext();
            Object l10 = l();
            Throwable i11 = i(l10);
            if (i11 == null && k0.b(this.f35048i)) {
                job = (Job) context2.m(Job.f34996k);
            }
            if (job != null && !job.a()) {
                CancellationException I = job.I();
                d(l10, I);
                Result.a aVar = Result.f31984e;
                continuation.resumeWith(Result.b(kotlin.c.a(I)));
            } else if (i11 != null) {
                Result.a aVar2 = Result.f31984e;
                continuation.resumeWith(Result.b(kotlin.c.a(i11)));
            } else {
                Result.a aVar3 = Result.f31984e;
                continuation.resumeWith(Result.b(j(l10)));
            }
            Unit unit = Unit.f31987a;
            if (u1Var == null || u1Var.d1()) {
                l0.f(context, i10);
            }
        } catch (j0 e10) {
            ys.a0.a(h().getContext(), e10.getCause());
        } catch (Throwable th2) {
            k(th2);
        }
    }
}
