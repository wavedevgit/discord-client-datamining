package com.facebook.imagepipeline.producers;

import com.facebook.common.references.CloseableReference;
import com.facebook.imagepipeline.bitmaps.PlatformBitmapFactory;
import com.facebook.imagepipeline.request.Postprocessor;
import java.util.Map;
import java.util.concurrent.Executor;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class u0 implements w0 {

    /* renamed from: a  reason: collision with root package name */
    private final w0 f10838a;

    /* renamed from: b  reason: collision with root package name */
    private final PlatformBitmapFactory f10839b;

    /* renamed from: c  reason: collision with root package name */
    private final Executor f10840c;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public class a extends s {

        /* renamed from: c  reason: collision with root package name */
        private final y0 f10841c;

        /* renamed from: d  reason: collision with root package name */
        private final ProducerContext f10842d;

        /* renamed from: e  reason: collision with root package name */
        private final Postprocessor f10843e;

        /* renamed from: f  reason: collision with root package name */
        private boolean f10844f;

        /* renamed from: g  reason: collision with root package name */
        private CloseableReference f10845g;

        /* renamed from: h  reason: collision with root package name */
        private int f10846h;

        /* renamed from: i  reason: collision with root package name */
        private boolean f10847i;

        /* renamed from: j  reason: collision with root package name */
        private boolean f10848j;

        /* renamed from: com.facebook.imagepipeline.producers.u0$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
        class C0156a extends f {

            /* renamed from: a  reason: collision with root package name */
            final /* synthetic */ u0 f10850a;

            C0156a(u0 u0Var) {
                this.f10850a = u0Var;
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
                    closeableReference = a.this.f10845g;
                    i10 = a.this.f10846h;
                    a.this.f10845g = null;
                    a.this.f10847i = false;
                }
                if (CloseableReference.I0(closeableReference)) {
                    try {
                        a.this.y(closeableReference, i10);
                    } finally {
                        CloseableReference.z(closeableReference);
                    }
                }
                a.this.w();
            }
        }

        public a(Consumer consumer, y0 y0Var, Postprocessor postprocessor, ProducerContext producerContext) {
            super(consumer);
            this.f10845g = null;
            this.f10846h = 0;
            this.f10847i = false;
            this.f10848j = false;
            this.f10841c = y0Var;
            this.f10843e = postprocessor;
            this.f10842d = producerContext;
            producerContext.g(new C0156a(u0.this));
        }

        private synchronized boolean A() {
            return this.f10844f;
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
            CloseableReference process = this.f10843e.process(fVar.M1(), u0.this.f10839b);
            try {
                sa.f M0 = sa.f.M0(process, eVar.I1(), fVar.p1(), fVar.a1());
                M0.J(fVar.getExtras());
                return CloseableReference.K0(M0);
            } finally {
                CloseableReference.z(process);
            }
        }

        private synchronized boolean G() {
            if (!this.f10844f && this.f10847i && !this.f10848j && CloseableReference.I0(this.f10845g)) {
                this.f10848j = true;
                return true;
            }
            return false;
        }

        private boolean H(sa.e eVar) {
            return eVar instanceof sa.f;
        }

        private void I() {
            u0.this.f10840c.execute(new b());
        }

        private void J(CloseableReference closeableReference, int i10) {
            synchronized (this) {
                try {
                    if (this.f10844f) {
                        return;
                    }
                    CloseableReference closeableReference2 = this.f10845g;
                    this.f10845g = CloseableReference.n(closeableReference);
                    this.f10846h = i10;
                    this.f10847i = true;
                    boolean G = G();
                    CloseableReference.z(closeableReference2);
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
                this.f10848j = false;
                G = G();
            }
            if (G) {
                I();
            }
        }

        private boolean x() {
            synchronized (this) {
                try {
                    if (this.f10844f) {
                        return false;
                    }
                    CloseableReference closeableReference = this.f10845g;
                    this.f10845g = null;
                    this.f10844f = true;
                    CloseableReference.z(closeableReference);
                    return true;
                } catch (Throwable th2) {
                    throw th2;
                }
            }
        }

        /* JADX INFO: Access modifiers changed from: private */
        public void y(CloseableReference closeableReference, int i10) {
            o8.j.b(Boolean.valueOf(CloseableReference.I0(closeableReference)));
            if (!H((sa.e) closeableReference.J())) {
                D(closeableReference, i10);
                return;
            }
            this.f10841c.d(this.f10842d, "PostprocessorProducer");
            try {
                try {
                    CloseableReference F = F((sa.e) closeableReference.J());
                    y0 y0Var = this.f10841c;
                    ProducerContext producerContext = this.f10842d;
                    y0Var.j(producerContext, "PostprocessorProducer", z(y0Var, producerContext, this.f10843e));
                    D(F, i10);
                    CloseableReference.z(F);
                } catch (Exception e10) {
                    y0 y0Var2 = this.f10841c;
                    ProducerContext producerContext2 = this.f10842d;
                    y0Var2.k(producerContext2, "PostprocessorProducer", e10, z(y0Var2, producerContext2, this.f10843e));
                    C(e10);
                    CloseableReference.z(null);
                }
            } catch (Throwable th2) {
                CloseableReference.z(null);
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
            if (!CloseableReference.I0(closeableReference)) {
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
        this.f10838a = (w0) o8.j.g(w0Var);
        this.f10839b = platformBitmapFactory;
        this.f10840c = (Executor) o8.j.g(executor);
    }

    @Override // com.facebook.imagepipeline.producers.w0
    public void b(Consumer consumer, ProducerContext producerContext) {
        y0 y10 = producerContext.y();
        Postprocessor postprocessor = producerContext.I().getPostprocessor();
        o8.j.g(postprocessor);
        this.f10838a.b(new b(new a(consumer, y10, postprocessor, producerContext)), producerContext);
    }
}
