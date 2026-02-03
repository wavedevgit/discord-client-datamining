package kotlinx.coroutines;

import java.util.concurrent.CancellationException;
import js.j0;
import js.k0;
import js.u1;
import kotlin.Result;
import kotlin.Unit;
import kotlin.coroutines.Continuation;
import kotlin.coroutines.CoroutineContext;
import kotlin.jvm.internal.Intrinsics;
import os.l0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class m extends qs.h {

    /* renamed from: i  reason: collision with root package name */
    public int f35525i;

    public m(int i10) {
        this.f35525i = i10;
    }

    public void b(Object obj, Throwable th2) {
    }

    public abstract Continuation d();

    public Throwable i(Object obj) {
        js.r rVar;
        if (obj instanceof js.r) {
            rVar = (js.r) obj;
        } else {
            rVar = null;
        }
        if (rVar == null) {
            return null;
        }
        return rVar.f31981a;
    }

    public Object j(Object obj) {
        return obj;
    }

    public final void k(Throwable th2) {
        js.a0.a(d().getContext(), new js.d0("Fatal exception in coroutines machinery for " + this + ". Please read KDoc to 'handleFatalException' method and report this incident to maintainers", th2));
    }

    public abstract Object l();

    @Override // java.lang.Runnable
    public final void run() {
        u1 u1Var;
        try {
            Continuation d10 = d();
            Intrinsics.checkNotNull(d10, "null cannot be cast to non-null type kotlinx.coroutines.internal.DispatchedContinuation<T of kotlinx.coroutines.DispatchedTask>");
            os.i iVar = (os.i) d10;
            Continuation continuation = iVar.f44516p;
            Object obj = iVar.f44518r;
            CoroutineContext context = continuation.getContext();
            Object i10 = l0.i(context, obj);
            Job job = null;
            if (i10 != l0.f44530a) {
                u1Var = js.x.m(continuation, context, i10);
            } else {
                u1Var = null;
            }
            CoroutineContext context2 = continuation.getContext();
            Object l10 = l();
            Throwable i11 = i(l10);
            if (i11 == null && k0.b(this.f35525i)) {
                job = (Job) context2.l(Job.f35473h);
            }
            if (job != null && !job.a()) {
                CancellationException N = job.N();
                b(l10, N);
                Result.a aVar = Result.f32461e;
                continuation.resumeWith(Result.b(kotlin.c.a(N)));
            } else if (i11 != null) {
                Result.a aVar2 = Result.f32461e;
                continuation.resumeWith(Result.b(kotlin.c.a(i11)));
            } else {
                Result.a aVar3 = Result.f32461e;
                continuation.resumeWith(Result.b(j(l10)));
            }
            Unit unit = Unit.f32464a;
            if (u1Var == null || u1Var.X0()) {
                l0.f(context, i10);
            }
        } catch (j0 e10) {
            js.a0.a(d().getContext(), e10.getCause());
        } catch (Throwable th2) {
            k(th2);
        }
    }
}
