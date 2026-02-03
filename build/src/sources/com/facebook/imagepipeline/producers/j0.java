package com.facebook.imagepipeline.producers;

import com.facebook.common.references.CloseableReference;
import com.facebook.imagepipeline.request.ImageRequest;
import java.io.InputStream;
import java.util.concurrent.Executor;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class j0 implements w0 {

    /* renamed from: a  reason: collision with root package name */
    private final Executor f10404a;

    /* renamed from: b  reason: collision with root package name */
    private final r8.i f10405b;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    class a extends e1 {

        /* renamed from: q  reason: collision with root package name */
        final /* synthetic */ ImageRequest f10406q;

        /* renamed from: r  reason: collision with root package name */
        final /* synthetic */ y0 f10407r;

        /* renamed from: s  reason: collision with root package name */
        final /* synthetic */ ProducerContext f10408s;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        a(Consumer consumer, y0 y0Var, ProducerContext producerContext, String str, ImageRequest imageRequest, y0 y0Var2, ProducerContext producerContext2) {
            super(consumer, y0Var, producerContext, str);
            this.f10406q = imageRequest;
            this.f10407r = y0Var2;
            this.f10408s = producerContext2;
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
            sa.k d10 = j0.this.d(this.f10406q);
            if (d10 == null) {
                this.f10407r.b(this.f10408s, j0.this.f(), false);
                this.f10408s.n("local", "fetch");
                return null;
            }
            d10.V0();
            this.f10407r.b(this.f10408s, j0.this.f(), true);
            this.f10408s.n("local", "fetch");
            this.f10408s.B("image_color_space", d10.E());
            return d10;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    class b extends f {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ e1 f10410a;

        b(e1 e1Var) {
            this.f10410a = e1Var;
        }

        @Override // com.facebook.imagepipeline.producers.x0
        public void b() {
            this.f10410a.a();
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public j0(Executor executor, r8.i iVar) {
        this.f10404a = executor;
        this.f10405b = iVar;
    }

    @Override // com.facebook.imagepipeline.producers.w0
    public void b(Consumer consumer, ProducerContext producerContext) {
        y0 F = producerContext.F();
        ImageRequest V = producerContext.V();
        producerContext.n("local", "fetch");
        a aVar = new a(consumer, F, producerContext, f(), V, F, producerContext);
        producerContext.h(new b(aVar));
        this.f10404a.execute(aVar);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public sa.k c(InputStream inputStream, int i10) {
        CloseableReference J0;
        CloseableReference closeableReference = null;
        try {
            if (i10 <= 0) {
                J0 = CloseableReference.J0(this.f10405b.a(inputStream));
            } else {
                J0 = CloseableReference.J0(this.f10405b.b(inputStream, i10));
            }
            closeableReference = J0;
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
