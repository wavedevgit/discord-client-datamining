package com.facebook.imagepipeline.producers;

import com.facebook.cache.common.CacheKey;
import com.facebook.common.internal.Supplier;
import com.facebook.imagepipeline.request.ImageRequest;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class z implements w0 {

    /* renamed from: a  reason: collision with root package name */
    private final Supplier f11586a;

    /* renamed from: b  reason: collision with root package name */
    private final ma.k f11587b;

    /* renamed from: c  reason: collision with root package name */
    private final w0 f11588c;

    /* renamed from: d  reason: collision with root package name */
    private final ma.d f11589d;

    /* renamed from: e  reason: collision with root package name */
    private final ma.d f11590e;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    private static class a extends s {

        /* renamed from: c  reason: collision with root package name */
        private final ProducerContext f11591c;

        /* renamed from: d  reason: collision with root package name */
        private final Supplier f11592d;

        /* renamed from: e  reason: collision with root package name */
        private final ma.k f11593e;

        /* renamed from: f  reason: collision with root package name */
        private final ma.d f11594f;

        /* renamed from: g  reason: collision with root package name */
        private final ma.d f11595g;

        public a(Consumer consumer, ProducerContext producerContext, Supplier supplier, ma.k kVar, ma.d dVar, ma.d dVar2) {
            super(consumer);
            this.f11591c = producerContext;
            this.f11592d = supplier;
            this.f11593e = kVar;
            this.f11594f = dVar;
            this.f11595g = dVar2;
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
                if (!c.e(i10) && kVar != null && !c.l(i10, 10) && kVar.z() != ga.c.f25399d) {
                    ImageRequest I = this.f11591c.I();
                    CacheKey encodedCacheKey = this.f11593e.getEncodedCacheKey(I, this.f11591c.a());
                    this.f11594f.a(encodedCacheKey);
                    if ("memory_encoded".equals(this.f11591c.Z("origin"))) {
                        if (!this.f11595g.b(encodedCacheKey)) {
                            if (I.getCacheChoice() == ImageRequest.CacheChoice.SMALL) {
                                z10 = true;
                            } else {
                                z10 = false;
                            }
                            oa.b bVar = (oa.b) this.f11592d.get();
                            if (z10) {
                                b10 = bVar.a();
                            } else {
                                b10 = bVar.b();
                            }
                            b10.f(encodedCacheKey);
                            this.f11595g.a(encodedCacheKey);
                        }
                    } else if ("disk".equals(this.f11591c.Z("origin"))) {
                        this.f11595g.a(encodedCacheKey);
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
        this.f11586a = supplier;
        this.f11587b = kVar;
        this.f11589d = dVar;
        this.f11590e = dVar2;
        this.f11588c = w0Var;
    }

    @Override // com.facebook.imagepipeline.producers.w0
    public void b(Consumer consumer, ProducerContext producerContext) {
        try {
            if (za.b.d()) {
                za.b.a("EncodedProbeProducer#produceResults");
            }
            y0 y10 = producerContext.y();
            y10.d(producerContext, c());
            a aVar = new a(consumer, producerContext, this.f11586a, this.f11587b, this.f11589d, this.f11590e);
            y10.j(producerContext, "EncodedProbeProducer", null);
            if (za.b.d()) {
                za.b.a("mInputProducer.produceResult");
            }
            this.f11588c.b(aVar, producerContext);
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
