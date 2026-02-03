package kotlinx.coroutines;

import java.util.concurrent.CancellationException;
import js.n0;
import js.z0;
import kotlin.coroutines.CoroutineContext;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class z {
    public static final CompletableJob a(Job job) {
        return a0.a(job);
    }

    public static /* synthetic */ CompletableJob b(Job job, int i10, Object obj) {
        return a0.b(job, i10, obj);
    }

    public static final void c(CoroutineContext coroutineContext, CancellationException cancellationException) {
        a0.c(coroutineContext, cancellationException);
    }

    public static final void d(Job job, String str, Throwable th2) {
        a0.d(job, str, th2);
    }

    public static final void g(CoroutineContext coroutineContext, CancellationException cancellationException) {
        a0.g(coroutineContext, cancellationException);
    }

    public static final void h(Job job, CancellationException cancellationException) {
        a0.h(job, cancellationException);
    }

    public static final n0 j(Job job, n0 n0Var) {
        return a0.j(job, n0Var);
    }

    public static final void k(CoroutineContext coroutineContext) {
        a0.k(coroutineContext);
    }

    public static final void l(Job job) {
        a0.l(job);
    }

    public static final Job m(CoroutineContext coroutineContext) {
        return a0.m(coroutineContext);
    }

    public static final n0 n(Job job, boolean z10, z0 z0Var) {
        return a0.n(job, z10, z0Var);
    }

    public static /* synthetic */ n0 o(Job job, boolean z10, z0 z0Var, int i10, Object obj) {
        return a0.o(job, z10, z0Var, i10, obj);
    }
}
