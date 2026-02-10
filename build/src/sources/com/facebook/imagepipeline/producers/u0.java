package com.facebook.imagepipeline.producers;

import com.facebook.common.references.CloseableReference;
import com.facebook.imagepipeline.bitmaps.PlatformBitmapFactory;
import com.facebook.imagepipeline.request.Postprocessor;
import java.util.Map;
import java.util.concurrent.Executor;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class u0 implements w0 {

    /* renamed from: a  reason: collision with root package name */
    private final w0 f11555a;

    /* renamed from: b  reason: collision with root package name */
    private final PlatformBitmapFactory f11556b;

    /* renamed from: c  reason: collision with root package name */
    private final Executor f11557c;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public class a extends s {

        /* renamed from: c  reason: collision with root package name */
        private final y0 f11558c;

        /* renamed from: d  reason: collision with root package name */
        private final ProducerContext f11559d;

        /* renamed from: e  reason: collision with root package name */
        private final Postprocessor f11560e;

        /* renamed from: f  reason: collision with root package name */
        private boolean f11561f;

        /* renamed from: g  reason: collision with root package name */
        private CloseableReference f11562g;

        /* renamed from: h  reason: collision with root package name */
        private int f11563h;

        /* renamed from: i  reason: collision with root package name */
        private boolean f11564i;

        /* renamed from: j  reason: collision with root package name */
        private boolean f11565j;

        /* renamed from: com.facebook.imagepipeline.producers.u0$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
        class C0160a extends f {

            /* renamed from: a  reason: collision with root package name */
            final /* synthetic */ u0 f11567a;

            C0160a(u0 u0Var) {
                this.f11567a = u0Var;
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
                    closeableReference = a.this.f11562g;
                    i10 = a.this.f11563h;
                    a.this.f11562g = null;
                    a.this.f11564i = false;
                }
                if (CloseableReference.C0(closeableReference)) {
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
            this.f11562g = null;
            this.f11563h = 0;
            this.f11564i = false;
            this.f11565j = false;
            this.f11558c = y0Var;
            this.f11560e = postprocessor;
            this.f11559d = producerContext;
            producerContext.h(new C0160a(u0.this));
        }

        private synchronized boolean A() {
            return this.f11561f;
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

        private CloseableReference F(ta.e eVar) {
            ta.f fVar = (ta.f) eVar;
            CloseableReference process = this.f11560e.process(fVar.Q1(), u0.this.f11556b);
            try {
                ta.f b22 = ta.f.b2(process, eVar.J1(), fVar.q1(), fVar.c1());
                b22.J(fVar.getExtras());
                return CloseableReference.E0(b22);
            } finally {
                CloseableReference.z(process);
            }
        }

        private synchronized boolean G() {
            if (!this.f11561f && this.f11564i && !this.f11565j && CloseableReference.C0(this.f11562g)) {
                this.f11565j = true;
                return true;
            }
            return false;
        }

        private boolean H(ta.e eVar) {
            return eVar instanceof ta.f;
        }

        private void I() {
            u0.this.f11557c.execute(new b());
        }

        private void J(CloseableReference closeableReference, int i10) {
            synchronized (this) {
                try {
                    if (this.f11561f) {
                        return;
                    }
                    CloseableReference closeableReference2 = this.f11562g;
                    this.f11562g = CloseableReference.n(closeableReference);
                    this.f11563h = i10;
                    this.f11564i = true;
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
                this.f11565j = false;
                G = G();
            }
            if (G) {
                I();
            }
        }

        private boolean x() {
            synchronized (this) {
                try {
                    if (this.f11561f) {
                        return false;
                    }
                    CloseableReference closeableReference = this.f11562g;
                    this.f11562g = null;
                    this.f11561f = true;
                    CloseableReference.z(closeableReference);
                    return true;
                } catch (Throwable th2) {
                    throw th2;
                }
            }
        }

        /* JADX INFO: Access modifiers changed from: private */
        public void y(CloseableReference closeableReference, int i10) {
            p8.j.b(Boolean.valueOf(CloseableReference.C0(closeableReference)));
            if (!H((ta.e) closeableReference.J())) {
                D(closeableReference, i10);
                return;
            }
            this.f11558c.d(this.f11559d, "PostprocessorProducer");
            try {
                try {
                    CloseableReference F = F((ta.e) closeableReference.J());
                    y0 y0Var = this.f11558c;
                    ProducerContext producerContext = this.f11559d;
                    y0Var.j(producerContext, "PostprocessorProducer", z(y0Var, producerContext, this.f11560e));
                    D(F, i10);
                    CloseableReference.z(F);
                } catch (Exception e10) {
                    y0 y0Var2 = this.f11558c;
                    ProducerContext producerContext2 = this.f11559d;
                    y0Var2.k(producerContext2, "PostprocessorProducer", e10, z(y0Var2, producerContext2, this.f11560e));
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
            return p8.f.of("Postprocessor", postprocessor.getName());
        }

        /* JADX INFO: Access modifiers changed from: protected */
        @Override // com.facebook.imagepipeline.producers.c
        /* renamed from: E */
        public void h(CloseableReference closeableReference, int i10) {
            if (!CloseableReference.C0(closeableReference)) {
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
        this.f11555a = (w0) p8.j.g(w0Var);
        this.f11556b = platformBitmapFactory;
        this.f11557c = (Executor) p8.j.g(executor);
    }

    @Override // com.facebook.imagepipeline.producers.w0
    public void b(Consumer consumer, ProducerContext producerContext) {
        y0 y10 = producerContext.y();
        Postprocessor postprocessor = producerContext.I().getPostprocessor();
        p8.j.g(postprocessor);
        this.f11555a.b(new b(new a(consumer, y10, postprocessor, producerContext)), producerContext);
    }
}
