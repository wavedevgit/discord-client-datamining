package com.facebook.imagepipeline.producers;

import android.util.Pair;
import java.util.concurrent.ConcurrentLinkedQueue;
import java.util.concurrent.Executor;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class j1 implements w0 {

    /* renamed from: a  reason: collision with root package name */
    private final w0 f11414a;

    /* renamed from: b  reason: collision with root package name */
    private final int f11415b;

    /* renamed from: e  reason: collision with root package name */
    private final Executor f11418e;

    /* renamed from: d  reason: collision with root package name */
    private final ConcurrentLinkedQueue f11417d = new ConcurrentLinkedQueue();

    /* renamed from: c  reason: collision with root package name */
    private int f11416c = 0;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public class a extends s {

        /* JADX INFO: Access modifiers changed from: package-private */
        /* renamed from: com.facebook.imagepipeline.producers.j1$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
        public class RunnableC0158a implements Runnable {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ Pair f11420d;

            RunnableC0158a(Pair pair) {
                this.f11420d = pair;
            }

            @Override // java.lang.Runnable
            public void run() {
                j1 j1Var = j1.this;
                Pair pair = this.f11420d;
                j1Var.g((Consumer) pair.first, (ProducerContext) pair.second);
            }
        }

        private void p() {
            Pair pair;
            synchronized (j1.this) {
                try {
                    pair = (Pair) j1.this.f11417d.poll();
                    if (pair == null) {
                        j1 j1Var = j1.this;
                        j1Var.f11416c--;
                    }
                } catch (Throwable th2) {
                    throw th2;
                }
            }
            if (pair != null) {
                j1.this.f11418e.execute(new RunnableC0158a(pair));
            }
        }

        @Override // com.facebook.imagepipeline.producers.s, com.facebook.imagepipeline.producers.c
        protected void f() {
            o().a();
            p();
        }

        @Override // com.facebook.imagepipeline.producers.s, com.facebook.imagepipeline.producers.c
        protected void g(Throwable th2) {
            o().onFailure(th2);
            p();
        }

        @Override // com.facebook.imagepipeline.producers.c
        protected void h(Object obj, int i10) {
            o().b(obj, i10);
            if (c.d(i10)) {
                p();
            }
        }

        private a(Consumer consumer) {
            super(consumer);
        }
    }

    public j1(int i10, Executor executor, w0 w0Var) {
        this.f11415b = i10;
        this.f11418e = (Executor) p8.j.g(executor);
        this.f11414a = (w0) p8.j.g(w0Var);
    }

    @Override // com.facebook.imagepipeline.producers.w0
    public void b(Consumer consumer, ProducerContext producerContext) {
        boolean z10;
        producerContext.y().d(producerContext, "ThrottlingProducer");
        synchronized (this) {
            try {
                int i10 = this.f11416c;
                z10 = true;
                if (i10 >= this.f11415b) {
                    this.f11417d.add(Pair.create(consumer, producerContext));
                } else {
                    this.f11416c = i10 + 1;
                    z10 = false;
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
        if (!z10) {
            g(consumer, producerContext);
        }
    }

    void g(Consumer consumer, ProducerContext producerContext) {
        producerContext.y().j(producerContext, "ThrottlingProducer", null);
        this.f11414a.b(new a(consumer), producerContext);
    }
}
