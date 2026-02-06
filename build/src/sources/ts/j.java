package ts;

import java.util.concurrent.CancellationException;
import kotlin.Result;
import kotlin.Unit;
import kotlin.coroutines.Continuation;
import kotlin.coroutines.CoroutineContext;
import kotlinx.coroutines.CoroutineDispatcher;
import kotlinx.coroutines.Job;
import os.l1;
import os.u1;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class j {

    /* renamed from: a */
    private static final e0 f50831a = new e0("UNDEFINED");

    /* renamed from: b */
    public static final e0 f50832b = new e0("REUSABLE_CLAIMED");

    public static final /* synthetic */ e0 a() {
        return f50831a;
    }

    public static final void b(Continuation continuation, Object obj) {
        u1 u1Var;
        if (continuation instanceof i) {
            i iVar = (i) continuation;
            Object b10 = os.t.b(obj);
            if (d(iVar.f50827o, iVar.getContext())) {
                iVar.f50829q = b10;
                iVar.f35069i = 1;
                c(iVar.f50827o, iVar.getContext(), iVar);
                return;
            }
            os.p0 b11 = l1.f43508a.b();
            if (b11.r2()) {
                iVar.f50829q = b10;
                iVar.f35069i = 1;
                b11.j2(iVar);
                return;
            }
            b11.p2(true);
            try {
                Job job = (Job) iVar.getContext().m(Job.f35017h);
                if (job != null && !job.a()) {
                    CancellationException C = job.C();
                    iVar.b(b10, C);
                    Result.a aVar = Result.f32005e;
                    iVar.resumeWith(Result.b(kotlin.c.a(C)));
                } else {
                    Continuation continuation2 = iVar.f50828p;
                    Object obj2 = iVar.f50830r;
                    CoroutineContext context = continuation2.getContext();
                    Object i10 = l0.i(context, obj2);
                    if (i10 != l0.f50842a) {
                        u1Var = os.x.m(continuation2, context, i10);
                    } else {
                        u1Var = null;
                    }
                    iVar.f50828p.resumeWith(obj);
                    Unit unit = Unit.f32008a;
                    if (u1Var == null || u1Var.Z0()) {
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
            coroutineDispatcher.D1(coroutineContext, runnable);
        } catch (Throwable th2) {
            throw new os.j0(th2, coroutineDispatcher, coroutineContext);
        }
    }

    public static final boolean d(CoroutineDispatcher coroutineDispatcher, CoroutineContext coroutineContext) {
        try {
            return coroutineDispatcher.V1(coroutineContext);
        } catch (Throwable th2) {
            throw new os.j0(th2, coroutineDispatcher, coroutineContext);
        }
    }

    public static final boolean e(i iVar) {
        Unit unit = Unit.f32008a;
        os.p0 b10 = l1.f43508a.b();
        if (b10.s2()) {
            return false;
        }
        if (b10.r2()) {
            iVar.f50829q = unit;
            iVar.f35069i = 1;
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
