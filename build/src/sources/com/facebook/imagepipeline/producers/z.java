package com.facebook.imagepipeline.producers;

import com.facebook.cache.common.CacheKey;
import com.facebook.common.internal.Supplier;
import com.facebook.imagepipeline.request.ImageRequest;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class z implements w0 {

    /* renamed from: a  reason: collision with root package name */
    private final Supplier f11008a;

    /* renamed from: b  reason: collision with root package name */
    private final ma.k f11009b;

    /* renamed from: c  reason: collision with root package name */
    private final w0 f11010c;

    /* renamed from: d  reason: collision with root package name */
    private final ma.d f11011d;

    /* renamed from: e  reason: collision with root package name */
    private final ma.d f11012e;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    private static class a extends s {

        /* renamed from: c  reason: collision with root package name */
        private final ProducerContext f11013c;

        /* renamed from: d  reason: collision with root package name */
        private final Supplier f11014d;

        /* renamed from: e  reason: collision with root package name */
        private final ma.k f11015e;

        /* renamed from: f  reason: collision with root package name */
        private final ma.d f11016f;

        /* renamed from: g  reason: collision with root package name */
        private final ma.d f11017g;

        public a(Consumer consumer, ProducerContext producerContext, Supplier supplier, ma.k kVar, ma.d dVar, ma.d dVar2) {
            super(consumer);
            this.f11013c = producerContext;
            this.f11014d = supplier;
            this.f11015e = kVar;
            this.f11016f = dVar;
            this.f11017g = dVar2;
        }

        @Override // com.facebook.imagepipeline.producers.c
        /* renamed from: p */
        public void h(ta.k kVar, int i10) {
            boolean z10;
            ma.j b10;
            try {
                if (za.b.d()) {
                    za.b.a("EncodedProbeProducer#onNewResultImpl");
                }
                if (!c.e(i10) && kVar != null && !c.l(i10, 10) && kVar.z() != ga.c.f24098d) {
                    ImageRequest I = this.f11013c.I();
                    CacheKey encodedCacheKey = this.f11015e.getEncodedCacheKey(I, this.f11013c.a());
                    this.f11016f.a(encodedCacheKey);
                    if ("memory_encoded".equals(this.f11013c.Z("origin"))) {
                        if (!this.f11017g.b(encodedCacheKey)) {
                            if (I.getCacheChoice() == ImageRequest.CacheChoice.SMALL) {
                                z10 = true;
                            } else {
                                z10 = false;
                            }
                            oa.b bVar = (oa.b) this.f11014d.get();
                            if (z10) {
                                b10 = bVar.a();
                            } else {
                                b10 = bVar.b();
                            }
                            b10.f(encodedCacheKey);
                            this.f11017g.a(encodedCacheKey);
                        }
                    } else if ("disk".equals(this.f11013c.Z("origin"))) {
                        this.f11017g.a(encodedCacheKey);
                    }
                    o().b(kVar, i10);
                    if (za.b.d()) {
                        za.b.b();
                        return;
                    }
                    return;
                }
                o().b(kVar, i10);
                if (za.b.d()) {
                    za.b.b();
                }
            } catch (Throwable th2) {
                if (za.b.d()) {
                    za.b.b();
                }
                throw th2;
            }
        }
    }

    public z(Supplier supplier, ma.k kVar, ma.d dVar, ma.d dVar2, w0 w0Var) {
        this.f11008a = supplier;
        this.f11009b = kVar;
        this.f11011d = dVar;
        this.f11012e = dVar2;
        this.f11010c = w0Var;
    }

    @Override // com.facebook.imagepipeline.producers.w0
    public void b(Consumer consumer, ProducerContext producerContext) {
        try {
            if (za.b.d()) {
                za.b.a("EncodedProbeProducer#produceResults");
            }
            y0 y10 = producerContext.y();
            y10.d(producerContext, c());
            a aVar = new a(consumer, producerContext, this.f11008a, this.f11009b, this.f11011d, this.f11012e);
            y10.j(producerContext, "EncodedProbeProducer", null);
            if (za.b.d()) {
                za.b.a("mInputProducer.produceResult");
            }
            this.f11010c.b(aVar, producerContext);
            if (za.b.d()) {
                za.b.b();
            }
            if (za.b.d()) {
                za.b.b();
            }
        } catch (Throwable th2) {
            if (za.b.d()) {
                za.b.b();
            }
            throw th2;
        }
    }

    protected String c() {
        return "EncodedProbeProducer";
    }
}
