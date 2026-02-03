package com.google.common.util.concurrent;

import ii.h;
import ii.m;
import java.util.concurrent.ExecutionException;
import java.util.concurrent.Executor;
import java.util.concurrent.Future;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class c extends d {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    private static final class a implements Runnable {

        /* renamed from: d  reason: collision with root package name */
        final Future f16922d;

        /* renamed from: e  reason: collision with root package name */
        final b f16923e;

        a(Future future, b bVar) {
            this.f16922d = future;
            this.f16923e = bVar;
        }

        @Override // java.lang.Runnable
        public void run() {
            Throwable a10;
            Future future = this.f16922d;
            if ((future instanceof mi.a) && (a10 = mi.b.a((mi.a) future)) != null) {
                this.f16923e.onFailure(a10);
                return;
            }
            try {
                this.f16923e.onSuccess(c.b(this.f16922d));
            } catch (Error e10) {
                e = e10;
                this.f16923e.onFailure(e);
            } catch (RuntimeException e11) {
                e = e11;
                this.f16923e.onFailure(e);
            } catch (ExecutionException e12) {
                this.f16923e.onFailure(e12.getCause());
            }
        }

        public String toString() {
            return h.b(this).c(this.f16923e).toString();
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
