package com.google.common.util.concurrent;

import java.util.concurrent.ExecutionException;
import java.util.concurrent.Executor;
import java.util.concurrent.Future;
import li.h;
import li.m;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class c extends d {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    private static final class a implements Runnable {

        /* renamed from: d  reason: collision with root package name */
        final Future f16284d;

        /* renamed from: e  reason: collision with root package name */
        final b f16285e;

        a(Future future, b bVar) {
            this.f16284d = future;
            this.f16285e = bVar;
        }

        @Override // java.lang.Runnable
        public void run() {
            Throwable a10;
            Future future = this.f16284d;
            if ((future instanceof pi.a) && (a10 = pi.b.a((pi.a) future)) != null) {
                this.f16285e.onFailure(a10);
                return;
            }
            try {
                this.f16285e.onSuccess(c.b(this.f16284d));
            } catch (Error e10) {
                e = e10;
                this.f16285e.onFailure(e);
            } catch (RuntimeException e11) {
                e = e11;
                this.f16285e.onFailure(e);
            } catch (ExecutionException e12) {
                this.f16285e.onFailure(e12.getCause());
            }
        }

        public String toString() {
            return h.b(this).c(this.f16285e).toString();
        }
    }

    public static void a(ListenableFuture listenableFuture, b bVar, Executor executor) {
        m.j(bVar);
        listenableFuture.a(new a(listenableFuture, bVar), executor);
    }

    public static Object b(Future future) {
        m.q(future.isDone(), "Future was expected to be done: %s", future);
        return g.a(future);
    }
}
