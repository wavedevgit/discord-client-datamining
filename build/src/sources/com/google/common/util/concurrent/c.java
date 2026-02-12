package com.google.common.util.concurrent;

import java.util.concurrent.ExecutionException;
import java.util.concurrent.Executor;
import java.util.concurrent.Future;
import pi.h;
import pi.m;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class c extends d {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    private static final class a implements Runnable {

        /* renamed from: d  reason: collision with root package name */
        final Future f17154d;

        /* renamed from: e  reason: collision with root package name */
        final b f17155e;

        a(Future future, b bVar) {
            this.f17154d = future;
            this.f17155e = bVar;
        }

        @Override // java.lang.Runnable
        public void run() {
            Throwable a10;
            Future future = this.f17154d;
            if ((future instanceof ti.a) && (a10 = ti.b.a((ti.a) future)) != null) {
                this.f17155e.onFailure(a10);
                return;
            }
            try {
                this.f17155e.onSuccess(c.b(this.f17154d));
            } catch (Error e10) {
                e = e10;
                this.f17155e.onFailure(e);
            } catch (RuntimeException e11) {
                e = e11;
                this.f17155e.onFailure(e);
            } catch (ExecutionException e12) {
                this.f17155e.onFailure(e12.getCause());
            }
        }

        public String toString() {
            return h.b(this).c(this.f17155e).toString();
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
