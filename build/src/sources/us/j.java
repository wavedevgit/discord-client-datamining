package us;

import java.util.concurrent.CancellationException;
import kotlin.Result;
import kotlin.Unit;
import kotlin.coroutines.Continuation;
import kotlin.coroutines.CoroutineContext;
import kotlinx.coroutines.CoroutineDispatcher;
import kotlinx.coroutines.Job;
import ps.l1;
import ps.u1;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class j {

    /* renamed from: a */
    private static final e0 f51784a = new e0("UNDEFINED");

    /* renamed from: b */
    public static final e0 f51785b = new e0("REUSABLE_CLAIMED");

    public static final /* synthetic */ e0 a() {
        return f51784a;
    }

    public static final void b(Continuation continuation, Object obj) {
        u1 u1Var;
        if (continuation instanceof i) {
            i iVar = (i) continuation;
            Object b10 = ps.t.b(obj);
            if (d(iVar.f51780o, iVar.getContext())) {
                iVar.f51782q = b10;
                iVar.f34826i = 1;
                c(iVar.f51780o, iVar.getContext(), iVar);
                return;
            }
            ps.p0 b11 = l1.f44513a.b();
            if (b11.r2()) {
                iVar.f51782q = b10;
                iVar.f34826i = 1;
                b11.j2(iVar);
                return;
            }
            b11.p2(true);
            try {
                Job job = (Job) iVar.getContext().m(Job.f34774h);
                if (job != null && !job.a()) {
                    CancellationException C = job.C();
                    iVar.b(b10, C);
                    Result.a aVar = Result.f31762e;
                    iVar.resumeWith(Result.b(kotlin.c.a(C)));
                } else {
                    Continuation continuation2 = iVar.f51781p;
                    Object obj2 = iVar.f51783r;
                    CoroutineContext context = continuation2.getContext();
                    Object i10 = l0.i(context, obj2);
                    if (i10 != l0.f51795a) {
                        u1Var = ps.x.m(continuation2, context, i10);
                    } else {
                        u1Var = null;
                    }
                    iVar.f51781p.resumeWith(obj);
                    Unit unit = Unit.f31765a;
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
            coroutineDispatcher.z1(coroutineContext, runnable);
        } catch (Throwable th2) {
            throw new ps.j0(th2, coroutineDispatcher, coroutineContext);
        }
    }

    public static final boolean d(CoroutineDispatcher coroutineDispatcher, CoroutineContext coroutineContext) {
        try {
            return coroutineDispatcher.U1(coroutineContext);
        } catch (Throwable th2) {
            throw new ps.j0(th2, coroutineDispatcher, coroutineContext);
        }
    }

    public static final boolean e(i iVar) {
        Unit unit = Unit.f31765a;
        ps.p0 b10 = l1.f44513a.b();
        if (b10.s2()) {
            return false;
        }
        if (b10.r2()) {
            iVar.f51782q = unit;
            iVar.f34826i = 1;
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
