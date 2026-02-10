package com.facebook.imagepipeline.producers;

import com.facebook.cache.common.CacheKey;
import com.facebook.common.internal.Supplier;
import com.facebook.common.references.CloseableReference;
import com.facebook.imagepipeline.request.ImageRequest;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class k implements w0 {

    /* renamed from: a  reason: collision with root package name */
    private final ma.w f10844a;

    /* renamed from: b  reason: collision with root package name */
    private final Supplier f10845b;

    /* renamed from: c  reason: collision with root package name */
    private final ma.k f10846c;

    /* renamed from: d  reason: collision with root package name */
    private final w0 f10847d;

    /* renamed from: e  reason: collision with root package name */
    private final ma.d f10848e;

    /* renamed from: f  reason: collision with root package name */
    private final ma.d f10849f;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    private static class a extends s {

        /* renamed from: c  reason: collision with root package name */
        private final ProducerContext f10850c;

        /* renamed from: d  reason: collision with root package name */
        private final ma.w f10851d;

        /* renamed from: e  reason: collision with root package name */
        private final Supplier f10852e;

        /* renamed from: f  reason: collision with root package name */
        private final ma.k f10853f;

        /* renamed from: g  reason: collision with root package name */
        private final ma.d f10854g;

        /* renamed from: h  reason: collision with root package name */
        private final ma.d f10855h;

        public a(Consumer consumer, ProducerContext producerContext, ma.w wVar, Supplier supplier, ma.k kVar, ma.d dVar, ma.d dVar2) {
            super(consumer);
            this.f10850c = producerContext;
            this.f10851d = wVar;
            this.f10852e = supplier;
            this.f10853f = kVar;
            this.f10854g = dVar;
            this.f10855h = dVar2;
        }

        @Override // com.facebook.imagepipeline.producers.c
        /* renamed from: p */
        public void h(CloseableReference closeableReference, int i10) {
            boolean z10;
            ma.j b10;
            try {
                if (za.b.d()) {
                    za.b.a("BitmapProbeProducer#onNewResultImpl");
                }
                if (!c.e(i10) && closeableReference != null && !c.l(i10, 8)) {
                    ImageRequest I = this.f10850c.I();
                    CacheKey encodedCacheKey = this.f10853f.getEncodedCacheKey(I, this.f10850c.a());
                    String str = (String) this.f10850c.Z("origin");
                    if (str != null && str.equals("memory_bitmap")) {
                        if (this.f10850c.k().G().E() && !this.f10854g.b(encodedCacheKey)) {
                            this.f10851d.a(encodedCacheKey);
                            this.f10854g.a(encodedCacheKey);
                        }
                        if (this.f10850c.k().G().C() && !this.f10855h.b(encodedCacheKey)) {
                            if (I.getCacheChoice() == ImageRequest.CacheChoice.SMALL) {
                                z10 = true;
                            } else {
                                z10 = false;
                            }
                            oa.b bVar = (oa.b) this.f10852e.get();
                            if (z10) {
                                b10 = bVar.a();
                            } else {
                                b10 = bVar.b();
                            }
                            b10.f(encodedCacheKey);
                            this.f10855h.a(encodedCacheKey);
                        }
                    }
                    o().b(closeableReference, i10);
                    if (za.b.d()) {
                        za.b.b();
                        return;
                    }
                    return;
                }
                o().b(closeableReference, i10);
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

    public k(ma.w wVar, Supplier supplier, ma.k kVar, ma.d dVar, ma.d dVar2, w0 w0Var) {
        this.f10844a = wVar;
        this.f10845b = supplier;
        this.f10846c = kVar;
        this.f10848e = dVar;
        this.f10849f = dVar2;
        this.f10847d = w0Var;
    }

    @Override // com.facebook.imagepipeline.producers.w0
    public void b(Consumer consumer, ProducerContext producerContext) {
        try {
            if (za.b.d()) {
                za.b.a("BitmapProbeProducer#produceResults");
            }
            y0 y10 = producerContext.y();
            y10.d(producerContext, c());
            a aVar = new a(consumer, producerContext, this.f10844a, this.f10845b, this.f10846c, this.f10848e, this.f10849f);
            y10.j(producerContext, "BitmapProbeProducer", null);
            if (za.b.d()) {
                za.b.a("mInputProducer.produceResult");
            }
            this.f10847d.b(aVar, producerContext);
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
        return "BitmapProbeProducer";
    }
}
