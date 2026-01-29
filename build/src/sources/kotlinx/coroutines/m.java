package kotlinx.coroutines;

import gs.j0;
import gs.k0;
import gs.u1;
import java.util.concurrent.CancellationException;
import kotlin.Result;
import kotlin.Unit;
import kotlin.coroutines.Continuation;
import kotlin.coroutines.CoroutineContext;
import kotlin.jvm.internal.Intrinsics;
import ls.l0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class m extends ns.h {

    /* renamed from: i  reason: collision with root package name */
    public int f36343i;

    public m(int i10) {
        this.f36343i = i10;
    }

    public void b(Object obj, Throwable th2) {
    }

    public abstract Continuation h();

    public Throwable i(Object obj) {
        gs.r rVar;
        if (obj instanceof gs.r) {
            rVar = (gs.r) obj;
        } else {
            rVar = null;
        }
        if (rVar == null) {
            return null;
        }
        return rVar.f27178a;
    }

    public Object j(Object obj) {
        return obj;
    }

    public final void k(Throwable th2) {
        gs.a0.a(h().getContext(), new gs.d0("Fatal exception in coroutines machinery for " + this + ". Please read KDoc to 'handleFatalException' method and report this incident to maintainers", th2));
    }

    public abstract Object l();

    @Override // java.lang.Runnable
    public final void run() {
        u1 u1Var;
        try {
            Continuation h10 = h();
            Intrinsics.checkNotNull(h10, "null cannot be cast to non-null type kotlinx.coroutines.internal.DispatchedContinuation<T of kotlinx.coroutines.DispatchedTask>");
            ls.i iVar = (ls.i) h10;
            Continuation continuation = iVar.f37445p;
            Object obj = iVar.f37447r;
            CoroutineContext context = continuation.getContext();
            Object i10 = l0.i(context, obj);
            Job job = null;
            if (i10 != l0.f37459a) {
                u1Var = gs.x.m(continuation, context, i10);
            } else {
                u1Var = null;
            }
            try {
                CoroutineContext context2 = continuation.getContext();
                Object l10 = l();
                Throwable i11 = i(l10);
                if (i11 == null && k0.b(this.f36343i)) {
                    job = (Job) context2.l(Job.f36291j);
                }
                if (job != null && !job.a()) {
                    CancellationException N = job.N();
                    b(l10, N);
                    Result.a aVar = Result.f33279e;
                    continuation.resumeWith(Result.b(kotlin.c.a(N)));
                } else if (i11 != null) {
                    Result.a aVar2 = Result.f33279e;
                    continuation.resumeWith(Result.b(kotlin.c.a(i11)));
                } else {
                    Result.a aVar3 = Result.f33279e;
                    continuation.resumeWith(Result.b(j(l10)));
                }
                Unit unit = Unit.f33282a;
                if (u1Var == null || u1Var.Z0()) {
                    l0.f(context, i10);
                }
            } catch (Throwable th2) {
                if (u1Var == null || u1Var.Z0()) {
                    l0.f(context, i10);
                }
                throw th2;
            }
        } catch (j0 e10) {
            gs.a0.a(h().getContext(), e10.getCause());
        } catch (Throwable th3) {
            k(th3);
        }
    }
}
