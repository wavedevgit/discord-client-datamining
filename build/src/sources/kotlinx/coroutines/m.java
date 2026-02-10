package kotlinx.coroutines;

import java.util.concurrent.CancellationException;
import kotlin.Result;
import kotlin.Unit;
import kotlin.coroutines.Continuation;
import kotlin.coroutines.CoroutineContext;
import kotlin.jvm.internal.Intrinsics;
import ps.j0;
import ps.k0;
import ps.u1;
import us.l0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class m extends ws.h {

    /* renamed from: i  reason: collision with root package name */
    public int f34826i;

    public m(int i10) {
        this.f34826i = i10;
    }

    public void b(Object obj, Throwable th2) {
    }

    public abstract Continuation g();

    public Throwable i(Object obj) {
        ps.r rVar;
        if (obj instanceof ps.r) {
            rVar = (ps.r) obj;
        } else {
            rVar = null;
        }
        if (rVar == null) {
            return null;
        }
        return rVar.f44530a;
    }

    public Object j(Object obj) {
        return obj;
    }

    public final void k(Throwable th2) {
        ps.a0.a(g().getContext(), new ps.d0("Fatal exception in coroutines machinery for " + this + ". Please read KDoc to 'handleFatalException' method and report this incident to maintainers", th2));
    }

    public abstract Object l();

    @Override // java.lang.Runnable
    public final void run() {
        u1 u1Var;
        try {
            Continuation g10 = g();
            Intrinsics.checkNotNull(g10, "null cannot be cast to non-null type kotlinx.coroutines.internal.DispatchedContinuation<T of kotlinx.coroutines.DispatchedTask>");
            us.i iVar = (us.i) g10;
            Continuation continuation = iVar.f51781p;
            Object obj = iVar.f51783r;
            CoroutineContext context = continuation.getContext();
            Object i10 = l0.i(context, obj);
            Job job = null;
            if (i10 != l0.f51795a) {
                u1Var = ps.x.m(continuation, context, i10);
            } else {
                u1Var = null;
            }
            CoroutineContext context2 = continuation.getContext();
            Object l10 = l();
            Throwable i11 = i(l10);
            if (i11 == null && k0.b(this.f34826i)) {
                job = (Job) context2.m(Job.f34774h);
            }
            if (job != null && !job.a()) {
                CancellationException C = job.C();
                b(l10, C);
                Result.a aVar = Result.f31762e;
                continuation.resumeWith(Result.b(kotlin.c.a(C)));
            } else if (i11 != null) {
                Result.a aVar2 = Result.f31762e;
                continuation.resumeWith(Result.b(kotlin.c.a(i11)));
            } else {
                Result.a aVar3 = Result.f31762e;
                continuation.resumeWith(Result.b(j(l10)));
            }
            Unit unit = Unit.f31765a;
            if (u1Var == null || u1Var.Z0()) {
                l0.f(context, i10);
            }
        } catch (j0 e10) {
            ps.a0.a(g().getContext(), e10.getCause());
        } catch (Throwable th2) {
            k(th2);
        }
    }
}
