package com.facebook.imagepipeline.producers;

import com.facebook.cache.common.CacheKey;
import com.facebook.common.internal.Supplier;
import com.facebook.imagepipeline.request.ImageRequest;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class z implements w0 {

    /* renamed from: a  reason: collision with root package name */
    private final Supplier f10584a;

    /* renamed from: b  reason: collision with root package name */
    private final la.k f10585b;

    /* renamed from: c  reason: collision with root package name */
    private final w0 f10586c;

    /* renamed from: d  reason: collision with root package name */
    private final la.d f10587d;

    /* renamed from: e  reason: collision with root package name */
    private final la.d f10588e;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    private static class a extends s {

        /* renamed from: c  reason: collision with root package name */
        private final ProducerContext f10589c;

        /* renamed from: d  reason: collision with root package name */
        private final Supplier f10590d;

        /* renamed from: e  reason: collision with root package name */
        private final la.k f10591e;

        /* renamed from: f  reason: collision with root package name */
        private final la.d f10592f;

        /* renamed from: g  reason: collision with root package name */
        private final la.d f10593g;

        public a(Consumer consumer, ProducerContext producerContext, Supplier supplier, la.k kVar, la.d dVar, la.d dVar2) {
            super(consumer);
            this.f10589c = producerContext;
            this.f10590d = supplier;
            this.f10591e = kVar;
            this.f10592f = dVar;
            this.f10593g = dVar2;
        }

        @Override // com.facebook.imagepipeline.producers.c
        /* renamed from: p */
        public void h(sa.k kVar, int i10) {
            boolean z10;
            la.j b10;
            try {
                if (ya.b.d()) {
                    ya.b.a("EncodedProbeProducer#onNewResultImpl");
                }
                if (!c.e(i10) && kVar != null && !c.l(i10, 10) && kVar.L() != fa.c.f23687d) {
                    ImageRequest V = this.f10589c.V();
                    CacheKey encodedCacheKey = this.f10591e.getEncodedCacheKey(V, this.f10589c.a());
                    this.f10592f.a(encodedCacheKey);
                    if ("memory_encoded".equals(this.f10589c.D0("origin"))) {
                        if (!this.f10593g.b(encodedCacheKey)) {
                            if (V.getCacheChoice() == ImageRequest.CacheChoice.SMALL) {
                                z10 = true;
                            } else {
                                z10 = false;
                            }
                            na.b bVar = (na.b) this.f10590d.get();
                            if (z10) {
                                b10 = bVar.a();
                            } else {
                                b10 = bVar.b();
                            }
                            b10.f(encodedCacheKey);
                            this.f10593g.a(encodedCacheKey);
                        }
                    } else if ("disk".equals(this.f10589c.D0("origin"))) {
                        this.f10593g.a(encodedCacheKey);
                    }
                    o().b(kVar, i10);
                    if (ya.b.d()) {
                        ya.b.b();
                        return;
                    }
                    return;
                }
                o().b(kVar, i10);
                if (ya.b.d()) {
                    ya.b.b();
                }
            } catch (Throwable th2) {
                if (ya.b.d()) {
                    ya.b.b();
                }
                throw th2;
            }
        }
    }

    public z(Supplier supplier, la.k kVar, la.d dVar, la.d dVar2, w0 w0Var) {
        this.f10584a = supplier;
        this.f10585b = kVar;
        this.f10587d = dVar;
        this.f10588e = dVar2;
        this.f10586c = w0Var;
    }

    @Override // com.facebook.imagepipeline.producers.w0
    public void b(Consumer consumer, ProducerContext producerContext) {
        try {
            if (ya.b.d()) {
                ya.b.a("EncodedProbeProducer#produceResults");
            }
            y0 F = producerContext.F();
            F.d(producerContext, c());
            a aVar = new a(consumer, producerContext, this.f10584a, this.f10585b, this.f10587d, this.f10588e);
            F.j(producerContext, "EncodedProbeProducer", null);
            if (ya.b.d()) {
                ya.b.a("mInputProducer.produceResult");
            }
            this.f10586c.b(aVar, producerContext);
            if (ya.b.d()) {
                ya.b.b();
            }
            if (ya.b.d()) {
                ya.b.b();
            }
        } catch (Throwable th2) {
            if (ya.b.d()) {
                ya.b.b();
            }
            throw th2;
        }
    }

    protected String c() {
        return "EncodedProbeProducer";
    }
}
