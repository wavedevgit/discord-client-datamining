package com.facebook.imagepipeline.producers;

import com.facebook.cache.common.CacheKey;
import com.facebook.common.internal.Supplier;
import com.facebook.imagepipeline.request.ImageRequest;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class z implements w0 {

    /* renamed from: a  reason: collision with root package name */
    private final Supplier f10868a;

    /* renamed from: b  reason: collision with root package name */
    private final la.k f10869b;

    /* renamed from: c  reason: collision with root package name */
    private final w0 f10870c;

    /* renamed from: d  reason: collision with root package name */
    private final la.d f10871d;

    /* renamed from: e  reason: collision with root package name */
    private final la.d f10872e;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    private static class a extends s {

        /* renamed from: c  reason: collision with root package name */
        private final ProducerContext f10873c;

        /* renamed from: d  reason: collision with root package name */
        private final Supplier f10874d;

        /* renamed from: e  reason: collision with root package name */
        private final la.k f10875e;

        /* renamed from: f  reason: collision with root package name */
        private final la.d f10876f;

        /* renamed from: g  reason: collision with root package name */
        private final la.d f10877g;

        public a(Consumer consumer, ProducerContext producerContext, Supplier supplier, la.k kVar, la.d dVar, la.d dVar2) {
            super(consumer);
            this.f10873c = producerContext;
            this.f10874d = supplier;
            this.f10875e = kVar;
            this.f10876f = dVar;
            this.f10877g = dVar2;
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
                if (!c.e(i10) && kVar != null && !c.l(i10, 10) && kVar.z() != fa.c.f23013d) {
                    ImageRequest I = this.f10873c.I();
                    CacheKey encodedCacheKey = this.f10875e.getEncodedCacheKey(I, this.f10873c.a());
                    this.f10876f.a(encodedCacheKey);
                    if ("memory_encoded".equals(this.f10873c.Y("origin"))) {
                        if (!this.f10877g.b(encodedCacheKey)) {
                            if (I.getCacheChoice() == ImageRequest.CacheChoice.SMALL) {
                                z10 = true;
                            } else {
                                z10 = false;
                            }
                            na.b bVar = (na.b) this.f10874d.get();
                            if (z10) {
                                b10 = bVar.a();
                            } else {
                                b10 = bVar.b();
                            }
                            b10.f(encodedCacheKey);
                            this.f10877g.a(encodedCacheKey);
                        }
                    } else if ("disk".equals(this.f10873c.Y("origin"))) {
                        this.f10877g.a(encodedCacheKey);
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
        this.f10868a = supplier;
        this.f10869b = kVar;
        this.f10871d = dVar;
        this.f10872e = dVar2;
        this.f10870c = w0Var;
    }

    @Override // com.facebook.imagepipeline.producers.w0
    public void b(Consumer consumer, ProducerContext producerContext) {
        try {
            if (ya.b.d()) {
                ya.b.a("EncodedProbeProducer#produceResults");
            }
            y0 y10 = producerContext.y();
            y10.d(producerContext, c());
            a aVar = new a(consumer, producerContext, this.f10868a, this.f10869b, this.f10871d, this.f10872e);
            y10.j(producerContext, "EncodedProbeProducer", null);
            if (ya.b.d()) {
                ya.b.a("mInputProducer.produceResult");
            }
            this.f10870c.b(aVar, producerContext);
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
