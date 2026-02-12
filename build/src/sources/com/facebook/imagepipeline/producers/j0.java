package com.facebook.imagepipeline.producers;

import com.facebook.common.references.CloseableReference;
import com.facebook.imagepipeline.request.ImageRequest;
import java.io.InputStream;
import java.util.concurrent.Executor;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class j0 implements w0 {

    /* renamed from: a  reason: collision with root package name */
    private final Executor f11406a;

    /* renamed from: b  reason: collision with root package name */
    private final s8.i f11407b;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    class a extends e1 {

        /* renamed from: q  reason: collision with root package name */
        final /* synthetic */ ImageRequest f11408q;

        /* renamed from: r  reason: collision with root package name */
        final /* synthetic */ y0 f11409r;

        /* renamed from: s  reason: collision with root package name */
        final /* synthetic */ ProducerContext f11410s;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        a(Consumer consumer, y0 y0Var, ProducerContext producerContext, String str, ImageRequest imageRequest, y0 y0Var2, ProducerContext producerContext2) {
            super(consumer, y0Var, producerContext, str);
            this.f11408q = imageRequest;
            this.f11409r = y0Var2;
            this.f11410s = producerContext2;
        }

        /* JADX INFO: Access modifiers changed from: protected */
        @Override // n8.h
        /* renamed from: j */
        public void b(ta.k kVar) {
            ta.k.i(kVar);
        }

        /* JADX INFO: Access modifiers changed from: protected */
        @Override // n8.h
        /* renamed from: k */
        public ta.k c() {
            ta.k d10 = j0.this.d(this.f11408q);
            if (d10 == null) {
                this.f11409r.b(this.f11410s, j0.this.f(), false);
                this.f11410s.m("local", "fetch");
                return null;
            }
            d10.L0();
            this.f11409r.b(this.f11410s, j0.this.f(), true);
            this.f11410s.m("local", "fetch");
            this.f11410s.p("image_color_space", d10.s());
            return d10;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    class b extends f {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ e1 f11412a;

        b(e1 e1Var) {
            this.f11412a = e1Var;
        }

        @Override // com.facebook.imagepipeline.producers.x0
        public void b() {
            this.f11412a.a();
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public j0(Executor executor, s8.i iVar) {
        this.f11406a = executor;
        this.f11407b = iVar;
    }

    @Override // com.facebook.imagepipeline.producers.w0
    public void b(Consumer consumer, ProducerContext producerContext) {
        y0 y10 = producerContext.y();
        ImageRequest I = producerContext.I();
        producerContext.m("local", "fetch");
        a aVar = new a(consumer, y10, producerContext, f(), I, y10, producerContext);
        producerContext.h(new b(aVar));
        this.f11406a.execute(aVar);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public ta.k c(InputStream inputStream, int i10) {
        CloseableReference E0;
        CloseableReference closeableReference = null;
        try {
            if (i10 <= 0) {
                E0 = CloseableReference.E0(this.f11407b.a(inputStream));
            } else {
                E0 = CloseableReference.E0(this.f11407b.b(inputStream, i10));
            }
            closeableReference = E0;
            ta.k kVar = new ta.k(closeableReference);
            p8.b.b(inputStream);
            CloseableReference.z(closeableReference);
            return kVar;
        } catch (Throwable th2) {
            p8.b.b(inputStream);
            CloseableReference.z(closeableReference);
            throw th2;
        }
    }

    protected abstract ta.k d(ImageRequest imageRequest);

    /* JADX INFO: Access modifiers changed from: protected */
    public ta.k e(InputStream inputStream, int i10) {
        return c(inputStream, i10);
    }

    protected abstract String f();
}
