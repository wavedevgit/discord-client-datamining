package com.facebook.imagepipeline.producers;

import com.facebook.common.references.CloseableReference;
import com.facebook.imagepipeline.bitmaps.PlatformBitmapFactory;
import com.facebook.imagepipeline.request.Postprocessor;
import java.util.Map;
import java.util.concurrent.Executor;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class u0 implements w0 {

    /* renamed from: a  reason: collision with root package name */
    private final w0 f10554a;

    /* renamed from: b  reason: collision with root package name */
    private final PlatformBitmapFactory f10555b;

    /* renamed from: c  reason: collision with root package name */
    private final Executor f10556c;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public class a extends s {

        /* renamed from: c  reason: collision with root package name */
        private final y0 f10557c;

        /* renamed from: d  reason: collision with root package name */
        private final ProducerContext f10558d;

        /* renamed from: e  reason: collision with root package name */
        private final Postprocessor f10559e;

        /* renamed from: f  reason: collision with root package name */
        private boolean f10560f;

        /* renamed from: g  reason: collision with root package name */
        private CloseableReference f10561g;

        /* renamed from: h  reason: collision with root package name */
        private int f10562h;

        /* renamed from: i  reason: collision with root package name */
        private boolean f10563i;

        /* renamed from: j  reason: collision with root package name */
        private boolean f10564j;

        /* renamed from: com.facebook.imagepipeline.producers.u0$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
        class C0147a extends f {

            /* renamed from: a  reason: collision with root package name */
            final /* synthetic */ u0 f10566a;

            C0147a(u0 u0Var) {
                this.f10566a = u0Var;
            }

            @Override // com.facebook.imagepipeline.producers.x0
            public void b() {
                a.this.B();
            }
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
        public class b implements Runnable {
            b() {
            }

            @Override // java.lang.Runnable
            public void run() {
                CloseableReference closeableReference;
                int i10;
                synchronized (a.this) {
                    closeableReference = a.this.f10561g;
                    i10 = a.this.f10562h;
                    a.this.f10561g = null;
                    a.this.f10563i = false;
                }
                if (CloseableReference.F0(closeableReference)) {
                    try {
                        a.this.y(closeableReference, i10);
                    } finally {
                        CloseableReference.N(closeableReference);
                    }
                }
                a.this.w();
            }
        }

        public a(Consumer consumer, y0 y0Var, Postprocessor postprocessor, ProducerContext producerContext) {
            super(consumer);
            this.f10561g = null;
            this.f10562h = 0;
            this.f10563i = false;
            this.f10564j = false;
            this.f10557c = y0Var;
            this.f10559e = postprocessor;
            this.f10558d = producerContext;
            producerContext.h(new C0147a(u0.this));
        }

        private synchronized boolean A() {
            return this.f10560f;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public void B() {
            if (x()) {
                o().a();
            }
        }

        private void C(Throwable th2) {
            if (x()) {
                o().onFailure(th2);
            }
        }

        private void D(CloseableReference closeableReference, int i10) {
            boolean d10 = c.d(i10);
            if ((!d10 && !A()) || (d10 && x())) {
                o().b(closeableReference, i10);
            }
        }

        private CloseableReference F(sa.e eVar) {
            sa.f fVar = (sa.f) eVar;
            CloseableReference process = this.f10559e.process(fVar.N1(), u0.this.f10555b);
            try {
                sa.f K0 = sa.f.K0(process, eVar.J1(), fVar.q1(), fVar.b1());
                K0.A0(fVar.getExtras());
                return CloseableReference.J0(K0);
            } finally {
                CloseableReference.N(process);
            }
        }

        private synchronized boolean G() {
            if (!this.f10560f && this.f10563i && !this.f10564j && CloseableReference.F0(this.f10561g)) {
                this.f10564j = true;
                return true;
            }
            return false;
        }

        private boolean H(sa.e eVar) {
            return eVar instanceof sa.f;
        }

        private void I() {
            u0.this.f10556c.execute(new b());
        }

        private void J(CloseableReference closeableReference, int i10) {
            synchronized (this) {
                try {
                    if (this.f10560f) {
                        return;
                    }
                    CloseableReference closeableReference2 = this.f10561g;
                    this.f10561g = CloseableReference.E(closeableReference);
                    this.f10562h = i10;
                    this.f10563i = true;
                    boolean G = G();
                    CloseableReference.N(closeableReference2);
                    if (G) {
                        I();
                    }
                } catch (Throwable th2) {
                    throw th2;
                }
            }
        }

        /* JADX INFO: Access modifiers changed from: private */
        public void w() {
            boolean G;
            synchronized (this) {
                this.f10564j = false;
                G = G();
            }
            if (G) {
                I();
            }
        }

        private boolean x() {
            synchronized (this) {
                try {
                    if (this.f10560f) {
                        return false;
                    }
                    CloseableReference closeableReference = this.f10561g;
                    this.f10561g = null;
                    this.f10560f = true;
                    CloseableReference.N(closeableReference);
                    return true;
                } catch (Throwable th2) {
                    throw th2;
                }
            }
        }

        /* JADX INFO: Access modifiers changed from: private */
        public void y(CloseableReference closeableReference, int i10) {
            o8.j.b(Boolean.valueOf(CloseableReference.F0(closeableReference)));
            if (!H((sa.e) closeableReference.C0())) {
                D(closeableReference, i10);
                return;
            }
            this.f10557c.d(this.f10558d, "PostprocessorProducer");
            try {
                try {
                    CloseableReference F = F((sa.e) closeableReference.C0());
                    y0 y0Var = this.f10557c;
                    ProducerContext producerContext = this.f10558d;
                    y0Var.j(producerContext, "PostprocessorProducer", z(y0Var, producerContext, this.f10559e));
                    D(F, i10);
                    CloseableReference.N(F);
                } catch (Exception e10) {
                    y0 y0Var2 = this.f10557c;
                    ProducerContext producerContext2 = this.f10558d;
                    y0Var2.k(producerContext2, "PostprocessorProducer", e10, z(y0Var2, producerContext2, this.f10559e));
                    C(e10);
                    CloseableReference.N(null);
                }
            } catch (Throwable th2) {
                CloseableReference.N(null);
                throw th2;
            }
        }

        private Map z(y0 y0Var, ProducerContext producerContext, Postprocessor postprocessor) {
            if (!y0Var.f(producerContext, "PostprocessorProducer")) {
                return null;
            }
            return o8.f.of("Postprocessor", postprocessor.getName());
        }

        /* JADX INFO: Access modifiers changed from: protected */
        @Override // com.facebook.imagepipeline.producers.c
        /* renamed from: E */
        public void h(CloseableReference closeableReference, int i10) {
            if (!CloseableReference.F0(closeableReference)) {
                if (c.d(i10)) {
                    D(null, i10);
                    return;
                }
                return;
            }
            J(closeableReference, i10);
        }

        @Override // com.facebook.imagepipeline.producers.s, com.facebook.imagepipeline.producers.c
        protected void f() {
            B();
        }

        @Override // com.facebook.imagepipeline.producers.s, com.facebook.imagepipeline.producers.c
        protected void g(Throwable th2) {
            C(th2);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    class b extends s {
        /* JADX INFO: Access modifiers changed from: protected */
        @Override // com.facebook.imagepipeline.producers.c
        /* renamed from: p */
        public void h(CloseableReference closeableReference, int i10) {
            if (c.e(i10)) {
                return;
            }
            o().b(closeableReference, i10);
        }

        private b(a aVar) {
            super(aVar);
        }
    }

    public u0(w0 w0Var, PlatformBitmapFactory platformBitmapFactory, Executor executor) {
        this.f10554a = (w0) o8.j.g(w0Var);
        this.f10555b = platformBitmapFactory;
        this.f10556c = (Executor) o8.j.g(executor);
    }

    @Override // com.facebook.imagepipeline.producers.w0
    public void b(Consumer consumer, ProducerContext producerContext) {
        y0 F = producerContext.F();
        Postprocessor postprocessor = producerContext.V().getPostprocessor();
        o8.j.g(postprocessor);
        this.f10554a.b(new b(new a(consumer, F, postprocessor, producerContext)), producerContext);
    }
}
