package com.facebook.imagepipeline.producers;

import com.facebook.cache.common.CacheKey;
import com.facebook.common.internal.Supplier;
import com.facebook.common.references.CloseableReference;
import com.facebook.imagepipeline.request.ImageRequest;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class k implements w0 {

    /* renamed from: a  reason: collision with root package name */
    private final ma.w f11422a;

    /* renamed from: b  reason: collision with root package name */
    private final Supplier f11423b;

    /* renamed from: c  reason: collision with root package name */
    private final ma.k f11424c;

    /* renamed from: d  reason: collision with root package name */
    private final w0 f11425d;

    /* renamed from: e  reason: collision with root package name */
    private final ma.d f11426e;

    /* renamed from: f  reason: collision with root package name */
    private final ma.d f11427f;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    private static class a extends s {

        /* renamed from: c  reason: collision with root package name */
        private final ProducerContext f11428c;

        /* renamed from: d  reason: collision with root package name */
        private final ma.w f11429d;

        /* renamed from: e  reason: collision with root package name */
        private final Supplier f11430e;

        /* renamed from: f  reason: collision with root package name */
        private final ma.k f11431f;

        /* renamed from: g  reason: collision with root package name */
        private final ma.d f11432g;

        /* renamed from: h  reason: collision with root package name */
        private final ma.d f11433h;

        public a(Consumer consumer, ProducerContext producerContext, ma.w wVar, Supplier supplier, ma.k kVar, ma.d dVar, ma.d dVar2) {
            super(consumer);
            this.f11428c = producerContext;
            this.f11429d = wVar;
            this.f11430e = supplier;
            this.f11431f = kVar;
            this.f11432g = dVar;
            this.f11433h = dVar2;
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
                    ImageRequest I = this.f11428c.I();
                    CacheKey encodedCacheKey = this.f11431f.getEncodedCacheKey(I, this.f11428c.a());
                    String str = (String) this.f11428c.Z("origin");
                    if (str != null && str.equals("memory_bitmap")) {
                        if (this.f11428c.i().G().E() && !this.f11432g.b(encodedCacheKey)) {
                            this.f11429d.a(encodedCacheKey);
                            this.f11432g.a(encodedCacheKey);
                        }
                        if (this.f11428c.i().G().C() && !this.f11433h.b(encodedCacheKey)) {
                            if (I.getCacheChoice() == ImageRequest.CacheChoice.SMALL) {
                                z10 = true;
                            } else {
                                z10 = false;
                            }
                            oa.b bVar = (oa.b) this.f11430e.get();
                            if (z10) {
                                b10 = bVar.a();
                            } else {
                                b10 = bVar.b();
                            }
                            b10.f(encodedCacheKey);
                            this.f11433h.a(encodedCacheKey);
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
        this.f11422a = wVar;
        this.f11423b = supplier;
        this.f11424c = kVar;
        this.f11426e = dVar;
        this.f11427f = dVar2;
        this.f11425d = w0Var;
    }

    @Override // com.facebook.imagepipeline.producers.w0
    public void b(Consumer consumer, ProducerContext producerContext) {
        try {
            if (za.b.d()) {
                za.b.a("BitmapProbeProducer#produceResults");
            }
            y0 y10 = producerContext.y();
            y10.d(producerContext, c());
            a aVar = new a(consumer, producerContext, this.f11422a, this.f11423b, this.f11424c, this.f11426e, this.f11427f);
            y10.j(producerContext, "BitmapProbeProducer", null);
            if (za.b.d()) {
                za.b.a("mInputProducer.produceResult");
            }
            this.f11425d.b(aVar, producerContext);
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
