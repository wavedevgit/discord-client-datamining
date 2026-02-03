package com.facebook.imagepipeline.producers;

import com.facebook.common.references.CloseableReference;
import com.facebook.imagepipeline.request.ImageRequest;
import java.io.InputStream;
import java.util.concurrent.Executor;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class j0 implements w0 {

    /* renamed from: a  reason: collision with root package name */
    private final Executor f11436a;

    /* renamed from: b  reason: collision with root package name */
    private final r8.i f11437b;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    class a extends e1 {

        /* renamed from: q  reason: collision with root package name */
        final /* synthetic */ ImageRequest f11438q;

        /* renamed from: r  reason: collision with root package name */
        final /* synthetic */ y0 f11439r;

        /* renamed from: s  reason: collision with root package name */
        final /* synthetic */ ProducerContext f11440s;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        a(Consumer consumer, y0 y0Var, ProducerContext producerContext, String str, ImageRequest imageRequest, y0 y0Var2, ProducerContext producerContext2) {
            super(consumer, y0Var, producerContext, str);
            this.f11438q = imageRequest;
            this.f11439r = y0Var2;
            this.f11440s = producerContext2;
        }

        /* JADX INFO: Access modifiers changed from: protected */
        @Override // m8.h
        /* renamed from: j */
        public void b(sa.k kVar) {
            sa.k.l(kVar);
        }

        /* JADX INFO: Access modifiers changed from: protected */
        @Override // m8.h
        /* renamed from: k */
        public sa.k c() {
            sa.k d10 = j0.this.d(this.f11438q);
            if (d10 == null) {
                this.f11439r.b(this.f11440s, j0.this.f(), false);
                this.f11440s.n("local", "fetch");
                return null;
            }
            d10.V0();
            this.f11439r.b(this.f11440s, j0.this.f(), true);
            this.f11440s.n("local", "fetch");
            this.f11440s.B("image_color_space", d10.E());
            return d10;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    class b extends f {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ e1 f11442a;

        b(e1 e1Var) {
            this.f11442a = e1Var;
        }

        @Override // com.facebook.imagepipeline.producers.x0
        public void b() {
            this.f11442a.a();
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public j0(Executor executor, r8.i iVar) {
        this.f11436a = executor;
        this.f11437b = iVar;
    }

    @Override // com.facebook.imagepipeline.producers.w0
    public void b(Consumer consumer, ProducerContext producerContext) {
        y0 F = producerContext.F();
        ImageRequest V = producerContext.V();
        producerContext.n("local", "fetch");
        a aVar = new a(consumer, F, producerContext, f(), V, F, producerContext);
        producerContext.h(new b(aVar));
        this.f11436a.execute(aVar);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public sa.k c(InputStream inputStream, int i10) {
        CloseableReference L0;
        CloseableReference closeableReference = null;
        try {
            if (i10 <= 0) {
                L0 = CloseableReference.L0(this.f11437b.a(inputStream));
            } else {
                L0 = CloseableReference.L0(this.f11437b.b(inputStream, i10));
            }
            closeableReference = L0;
            sa.k kVar = new sa.k(closeableReference);
            o8.b.b(inputStream);
            CloseableReference.N(closeableReference);
            return kVar;
        } catch (Throwable th2) {
            o8.b.b(inputStream);
            CloseableReference.N(closeableReference);
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
