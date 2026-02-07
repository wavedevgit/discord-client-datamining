package kotlinx.coroutines;

import java.util.concurrent.CancellationException;
import kotlin.Result;
import kotlin.Unit;
import kotlin.coroutines.Continuation;
import kotlin.coroutines.CoroutineContext;
import kotlin.jvm.internal.Intrinsics;
import os.j0;
import os.k0;
import os.u1;
import ts.l0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class m extends vs.h {

    /* renamed from: i  reason: collision with root package name */
    public int f35117i;

    public m(int i10) {
        this.f35117i = i10;
    }

    public void b(Object obj, Throwable th2) {
    }

    public abstract Continuation d();

    public Throwable i(Object obj) {
        os.r rVar;
        if (obj instanceof os.r) {
            rVar = (os.r) obj;
        } else {
            rVar = null;
        }
        if (rVar == null) {
            return null;
        }
        return rVar.f43573a;
    }

    public Object j(Object obj) {
        return obj;
    }

    public final void k(Throwable th2) {
        os.a0.a(d().getContext(), new os.d0("Fatal exception in coroutines machinery for " + this + ". Please read KDoc to 'handleFatalException' method and report this incident to maintainers", th2));
    }

    public abstract Object l();

    @Override // java.lang.Runnable
    public final void run() {
        u1 u1Var;
        try {
            Continuation d10 = d();
            Intrinsics.checkNotNull(d10, "null cannot be cast to non-null type kotlinx.coroutines.internal.DispatchedContinuation<T of kotlinx.coroutines.DispatchedTask>");
            ts.i iVar = (ts.i) d10;
            Continuation continuation = iVar.f50876p;
            Object obj = iVar.f50878r;
            CoroutineContext context = continuation.getContext();
            Object i10 = l0.i(context, obj);
            Job job = null;
            if (i10 != l0.f50890a) {
                u1Var = os.x.m(continuation, context, i10);
            } else {
                u1Var = null;
            }
            CoroutineContext context2 = continuation.getContext();
            Object l10 = l();
            Throwable i11 = i(l10);
            if (i11 == null && k0.b(this.f35117i)) {
                job = (Job) context2.m(Job.f35065h);
            }
            if (job != null && !job.a()) {
                CancellationException C = job.C();
                b(l10, C);
                Result.a aVar = Result.f32053e;
                continuation.resumeWith(Result.b(kotlin.c.a(C)));
            } else if (i11 != null) {
                Result.a aVar2 = Result.f32053e;
                continuation.resumeWith(Result.b(kotlin.c.a(i11)));
            } else {
                Result.a aVar3 = Result.f32053e;
                continuation.resumeWith(Result.b(j(l10)));
            }
            Unit unit = Unit.f32056a;
            if (u1Var == null || u1Var.Z0()) {
                l0.f(context, i10);
            }
        } catch (j0 e10) {
            os.a0.a(d().getContext(), e10.getCause());
        } catch (Throwable th2) {
            k(th2);
        }
    }
}
