package com.facebook.imagepipeline.producers;

import com.facebook.cache.common.CacheKey;
import com.facebook.common.internal.Supplier;
import com.facebook.imagepipeline.request.ImageRequest;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class z implements w0 {

    /* renamed from: a  reason: collision with root package name */
    private final Supplier f10969a;

    /* renamed from: b  reason: collision with root package name */
    private final la.k f10970b;

    /* renamed from: c  reason: collision with root package name */
    private final w0 f10971c;

    /* renamed from: d  reason: collision with root package name */
    private final la.d f10972d;

    /* renamed from: e  reason: collision with root package name */
    private final la.d f10973e;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    private static class a extends s {

        /* renamed from: c  reason: collision with root package name */
        private final ProducerContext f10974c;

        /* renamed from: d  reason: collision with root package name */
        private final Supplier f10975d;

        /* renamed from: e  reason: collision with root package name */
        private final la.k f10976e;

        /* renamed from: f  reason: collision with root package name */
        private final la.d f10977f;

        /* renamed from: g  reason: collision with root package name */
        private final la.d f10978g;

        public a(Consumer consumer, ProducerContext producerContext, Supplier supplier, la.k kVar, la.d dVar, la.d dVar2) {
            super(consumer);
            this.f10974c = producerContext;
            this.f10975d = supplier;
            this.f10976e = kVar;
            this.f10977f = dVar;
            this.f10978g = dVar2;
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
                if (!c.e(i10) && kVar != null && !c.l(i10, 10) && kVar.L() != fa.c.f22712d) {
                    ImageRequest V = this.f10974c.V();
                    CacheKey encodedCacheKey = this.f10976e.getEncodedCacheKey(V, this.f10974c.a());
                    this.f10977f.a(encodedCacheKey);
                    if ("memory_encoded".equals(this.f10974c.D0("origin"))) {
                        if (!this.f10978g.b(encodedCacheKey)) {
                            if (V.getCacheChoice() == ImageRequest.CacheChoice.SMALL) {
                                z10 = true;
                            } else {
                                z10 = false;
                            }
                            na.b bVar = (na.b) this.f10975d.get();
                            if (z10) {
                                b10 = bVar.a();
                            } else {
                                b10 = bVar.b();
                            }
                            b10.f(encodedCacheKey);
                            this.f10978g.a(encodedCacheKey);
                        }
                    } else if ("disk".equals(this.f10974c.D0("origin"))) {
                        this.f10978g.a(encodedCacheKey);
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
        this.f10969a = supplier;
        this.f10970b = kVar;
        this.f10972d = dVar;
        this.f10973e = dVar2;
        this.f10971c = w0Var;
    }

    @Override // com.facebook.imagepipeline.producers.w0
    public void b(Consumer consumer, ProducerContext producerContext) {
        try {
            if (ya.b.d()) {
                ya.b.a("EncodedProbeProducer#produceResults");
            }
            y0 F = producerContext.F();
            F.d(producerContext, c());
            a aVar = new a(consumer, producerContext, this.f10969a, this.f10970b, this.f10972d, this.f10973e);
            F.j(producerContext, "EncodedProbeProducer", null);
            if (ya.b.d()) {
                ya.b.a("mInputProducer.produceResult");
            }
            this.f10971c.b(aVar, producerContext);
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
