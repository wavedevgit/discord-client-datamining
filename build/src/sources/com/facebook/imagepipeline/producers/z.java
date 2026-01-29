package com.facebook.imagepipeline.producers;

import com.facebook.cache.common.CacheKey;
import com.facebook.common.internal.Supplier;
import com.facebook.imagepipeline.request.ImageRequest;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class z implements w0 {

    /* renamed from: a  reason: collision with root package name */
    private final Supplier f11987a;

    /* renamed from: b  reason: collision with root package name */
    private final la.k f11988b;

    /* renamed from: c  reason: collision with root package name */
    private final w0 f11989c;

    /* renamed from: d  reason: collision with root package name */
    private final la.d f11990d;

    /* renamed from: e  reason: collision with root package name */
    private final la.d f11991e;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    private static class a extends s {

        /* renamed from: c  reason: collision with root package name */
        private final ProducerContext f11992c;

        /* renamed from: d  reason: collision with root package name */
        private final Supplier f11993d;

        /* renamed from: e  reason: collision with root package name */
        private final la.k f11994e;

        /* renamed from: f  reason: collision with root package name */
        private final la.d f11995f;

        /* renamed from: g  reason: collision with root package name */
        private final la.d f11996g;

        public a(Consumer consumer, ProducerContext producerContext, Supplier supplier, la.k kVar, la.d dVar, la.d dVar2) {
            super(consumer);
            this.f11992c = producerContext;
            this.f11993d = supplier;
            this.f11994e = kVar;
            this.f11995f = dVar;
            this.f11996g = dVar2;
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
                if (!c.e(i10) && kVar != null && !c.l(i10, 10) && kVar.L() != fa.c.f24884d) {
                    ImageRequest V = this.f11992c.V();
                    CacheKey encodedCacheKey = this.f11994e.getEncodedCacheKey(V, this.f11992c.a());
                    this.f11995f.a(encodedCacheKey);
                    if ("memory_encoded".equals(this.f11992c.D0("origin"))) {
                        if (!this.f11996g.b(encodedCacheKey)) {
                            if (V.getCacheChoice() == ImageRequest.CacheChoice.SMALL) {
                                z10 = true;
                            } else {
                                z10 = false;
                            }
                            na.b bVar = (na.b) this.f11993d.get();
                            if (z10) {
                                b10 = bVar.a();
                            } else {
                                b10 = bVar.b();
                            }
                            b10.f(encodedCacheKey);
                            this.f11996g.a(encodedCacheKey);
                        }
                    } else if ("disk".equals(this.f11992c.D0("origin"))) {
                        this.f11996g.a(encodedCacheKey);
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
        this.f11987a = supplier;
        this.f11988b = kVar;
        this.f11990d = dVar;
        this.f11991e = dVar2;
        this.f11989c = w0Var;
    }

    @Override // com.facebook.imagepipeline.producers.w0
    public void b(Consumer consumer, ProducerContext producerContext) {
        try {
            if (ya.b.d()) {
                ya.b.a("EncodedProbeProducer#produceResults");
            }
            y0 F = producerContext.F();
            F.d(producerContext, c());
            a aVar = new a(consumer, producerContext, this.f11987a, this.f11988b, this.f11990d, this.f11991e);
            F.j(producerContext, "EncodedProbeProducer", null);
            if (ya.b.d()) {
                ya.b.a("mInputProducer.produceResult");
            }
            this.f11989c.b(aVar, producerContext);
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
