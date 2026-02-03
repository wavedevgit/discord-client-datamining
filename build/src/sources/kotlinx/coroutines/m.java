package kotlinx.coroutines;

import hs.j0;
import hs.k0;
import hs.u1;
import java.util.concurrent.CancellationException;
import kotlin.Result;
import kotlin.Unit;
import kotlin.coroutines.Continuation;
import kotlin.coroutines.CoroutineContext;
import kotlin.jvm.internal.Intrinsics;
import ms.l0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class m extends os.h {

    /* renamed from: i  reason: collision with root package name */
    public int f36135i;

    public m(int i10) {
        this.f36135i = i10;
    }

    public void d(Object obj, Throwable th2) {
    }

    public abstract Continuation h();

    public Throwable i(Object obj) {
        hs.r rVar;
        if (obj instanceof hs.r) {
            rVar = (hs.r) obj;
        } else {
            rVar = null;
        }
        if (rVar == null) {
            return null;
        }
        return rVar.f27941a;
    }

    public Object j(Object obj) {
        return obj;
    }

    public final void k(Throwable th2) {
        hs.a0.a(h().getContext(), new hs.d0("Fatal exception in coroutines machinery for " + this + ". Please read KDoc to 'handleFatalException' method and report this incident to maintainers", th2));
    }

    public abstract Object l();

    @Override // java.lang.Runnable
    public final void run() {
        u1 u1Var;
        try {
            Continuation h10 = h();
            Intrinsics.checkNotNull(h10, "null cannot be cast to non-null type kotlinx.coroutines.internal.DispatchedContinuation<T of kotlinx.coroutines.DispatchedTask>");
            ms.i iVar = (ms.i) h10;
            Continuation continuation = iVar.f39161p;
            Object obj = iVar.f39163r;
            CoroutineContext context = continuation.getContext();
            Object i10 = l0.i(context, obj);
            Job job = null;
            if (i10 != l0.f39175a) {
                u1Var = hs.x.m(continuation, context, i10);
            } else {
                u1Var = null;
            }
            CoroutineContext context2 = continuation.getContext();
            Object l10 = l();
            Throwable i11 = i(l10);
            if (i11 == null && k0.b(this.f36135i)) {
                job = (Job) context2.l(Job.f36083j);
            }
            if (job != null && !job.a()) {
                CancellationException N = job.N();
                d(l10, N);
                Result.a aVar = Result.f33071e;
                continuation.resumeWith(Result.b(kotlin.c.a(N)));
            } else if (i11 != null) {
                Result.a aVar2 = Result.f33071e;
                continuation.resumeWith(Result.b(kotlin.c.a(i11)));
            } else {
                Result.a aVar3 = Result.f33071e;
                continuation.resumeWith(Result.b(j(l10)));
            }
            Unit unit = Unit.f33074a;
            if (u1Var == null || u1Var.X0()) {
                l0.f(context, i10);
            }
        } catch (j0 e10) {
            hs.a0.a(h().getContext(), e10.getCause());
        } catch (Throwable th2) {
            k(th2);
        }
    }
}
