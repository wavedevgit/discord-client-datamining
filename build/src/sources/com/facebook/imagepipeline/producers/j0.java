package com.facebook.imagepipeline.producers;

import com.facebook.common.references.CloseableReference;
import com.facebook.imagepipeline.request.ImageRequest;
import java.io.InputStream;
import java.util.concurrent.Executor;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class j0 implements w0 {

    /* renamed from: a  reason: collision with root package name */
    private final Executor f10688a;

    /* renamed from: b  reason: collision with root package name */
    private final r8.i f10689b;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    class a extends e1 {

        /* renamed from: q  reason: collision with root package name */
        final /* synthetic */ ImageRequest f10690q;

        /* renamed from: r  reason: collision with root package name */
        final /* synthetic */ y0 f10691r;

        /* renamed from: s  reason: collision with root package name */
        final /* synthetic */ ProducerContext f10692s;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        a(Consumer consumer, y0 y0Var, ProducerContext producerContext, String str, ImageRequest imageRequest, y0 y0Var2, ProducerContext producerContext2) {
            super(consumer, y0Var, producerContext, str);
            this.f10690q = imageRequest;
            this.f10691r = y0Var2;
            this.f10692s = producerContext2;
        }

        /* JADX INFO: Access modifiers changed from: protected */
        @Override // m8.h
        /* renamed from: j */
        public void b(sa.k kVar) {
            sa.k.k(kVar);
        }

        /* JADX INFO: Access modifiers changed from: protected */
        @Override // m8.h
        /* renamed from: k */
        public sa.k c() {
            sa.k d10 = j0.this.d(this.f10690q);
            if (d10 == null) {
                this.f10691r.b(this.f10692s, j0.this.f(), false);
                this.f10692s.m("local", "fetch");
                return null;
            }
            d10.O0();
            this.f10691r.b(this.f10692s, j0.this.f(), true);
            this.f10692s.m("local", "fetch");
            this.f10692s.p("image_color_space", d10.s());
            return d10;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    class b extends f {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ e1 f10694a;

        b(e1 e1Var) {
            this.f10694a = e1Var;
        }

        @Override // com.facebook.imagepipeline.producers.x0
        public void b() {
            this.f10694a.a();
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public j0(Executor executor, r8.i iVar) {
        this.f10688a = executor;
        this.f10689b = iVar;
    }

    @Override // com.facebook.imagepipeline.producers.w0
    public void b(Consumer consumer, ProducerContext producerContext) {
        y0 y10 = producerContext.y();
        ImageRequest I = producerContext.I();
        producerContext.m("local", "fetch");
        a aVar = new a(consumer, y10, producerContext, f(), I, y10, producerContext);
        producerContext.g(new b(aVar));
        this.f10688a.execute(aVar);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public sa.k c(InputStream inputStream, int i10) {
        CloseableReference K0;
        CloseableReference closeableReference = null;
        try {
            if (i10 <= 0) {
                K0 = CloseableReference.K0(this.f10689b.a(inputStream));
            } else {
                K0 = CloseableReference.K0(this.f10689b.b(inputStream, i10));
            }
            closeableReference = K0;
            sa.k kVar = new sa.k(closeableReference);
            o8.b.b(inputStream);
            CloseableReference.z(closeableReference);
            return kVar;
        } catch (Throwable th2) {
            o8.b.b(inputStream);
            CloseableReference.z(closeableReference);
            throw th2;
        }
    }

    protected abstract sa.k d(ImageRequest imageRequest);

    /* JADX INFO: Access modifiers changed from: protected */
    public sa.k e(InputStream inputStream, int i10) {
        return c(inputStream, i10);
    }

    protected abstract String f();
}
