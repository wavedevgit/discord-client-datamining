package com.facebook.imagepipeline.producers;

import com.facebook.common.references.CloseableReference;
import com.facebook.imagepipeline.request.ImageRequest;
import java.io.InputStream;
import java.util.concurrent.Executor;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class j0 implements w0 {

    /* renamed from: a  reason: collision with root package name */
    private final Executor f10789a;

    /* renamed from: b  reason: collision with root package name */
    private final r8.i f10790b;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    class a extends e1 {

        /* renamed from: q  reason: collision with root package name */
        final /* synthetic */ ImageRequest f10791q;

        /* renamed from: r  reason: collision with root package name */
        final /* synthetic */ y0 f10792r;

        /* renamed from: s  reason: collision with root package name */
        final /* synthetic */ ProducerContext f10793s;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        a(Consumer consumer, y0 y0Var, ProducerContext producerContext, String str, ImageRequest imageRequest, y0 y0Var2, ProducerContext producerContext2) {
            super(consumer, y0Var, producerContext, str);
            this.f10791q = imageRequest;
            this.f10792r = y0Var2;
            this.f10793s = producerContext2;
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
            sa.k d10 = j0.this.d(this.f10791q);
            if (d10 == null) {
                this.f10792r.b(this.f10793s, j0.this.f(), false);
                this.f10793s.m("local", "fetch");
                return null;
            }
            d10.V0();
            this.f10792r.b(this.f10793s, j0.this.f(), true);
            this.f10793s.m("local", "fetch");
            this.f10793s.y("image_color_space", d10.E());
            return d10;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    class b extends f {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ e1 f10795a;

        b(e1 e1Var) {
            this.f10795a = e1Var;
        }

        @Override // com.facebook.imagepipeline.producers.x0
        public void b() {
            this.f10795a.a();
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public j0(Executor executor, r8.i iVar) {
        this.f10789a = executor;
        this.f10790b = iVar;
    }

    @Override // com.facebook.imagepipeline.producers.w0
    public void b(Consumer consumer, ProducerContext producerContext) {
        y0 F = producerContext.F();
        ImageRequest V = producerContext.V();
        producerContext.m("local", "fetch");
        a aVar = new a(consumer, F, producerContext, f(), V, F, producerContext);
        producerContext.h(new b(aVar));
        this.f10789a.execute(aVar);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public sa.k c(InputStream inputStream, int i10) {
        CloseableReference N0;
        CloseableReference closeableReference = null;
        try {
            if (i10 <= 0) {
                N0 = CloseableReference.N0(this.f10790b.a(inputStream));
            } else {
                N0 = CloseableReference.N0(this.f10790b.b(inputStream, i10));
            }
            closeableReference = N0;
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
