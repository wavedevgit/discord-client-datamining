package com.facebook.imagepipeline.producers;

import com.facebook.cache.common.CacheKey;
import com.facebook.common.internal.Supplier;
import com.facebook.common.references.CloseableReference;
import com.facebook.imagepipeline.request.ImageRequest;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class k implements w0 {

    /* renamed from: a  reason: collision with root package name */
    private final la.w f10420a;

    /* renamed from: b  reason: collision with root package name */
    private final Supplier f10421b;

    /* renamed from: c  reason: collision with root package name */
    private final la.k f10422c;

    /* renamed from: d  reason: collision with root package name */
    private final w0 f10423d;

    /* renamed from: e  reason: collision with root package name */
    private final la.d f10424e;

    /* renamed from: f  reason: collision with root package name */
    private final la.d f10425f;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    private static class a extends s {

        /* renamed from: c  reason: collision with root package name */
        private final ProducerContext f10426c;

        /* renamed from: d  reason: collision with root package name */
        private final la.w f10427d;

        /* renamed from: e  reason: collision with root package name */
        private final Supplier f10428e;

        /* renamed from: f  reason: collision with root package name */
        private final la.k f10429f;

        /* renamed from: g  reason: collision with root package name */
        private final la.d f10430g;

        /* renamed from: h  reason: collision with root package name */
        private final la.d f10431h;

        public a(Consumer consumer, ProducerContext producerContext, la.w wVar, Supplier supplier, la.k kVar, la.d dVar, la.d dVar2) {
            super(consumer);
            this.f10426c = producerContext;
            this.f10427d = wVar;
            this.f10428e = supplier;
            this.f10429f = kVar;
            this.f10430g = dVar;
            this.f10431h = dVar2;
        }

        @Override // com.facebook.imagepipeline.producers.c
        /* renamed from: p */
        public void h(CloseableReference closeableReference, int i10) {
            boolean z10;
            la.j b10;
            try {
                if (ya.b.d()) {
                    ya.b.a("BitmapProbeProducer#onNewResultImpl");
                }
                if (!c.e(i10) && closeableReference != null && !c.l(i10, 8)) {
                    ImageRequest V = this.f10426c.V();
                    CacheKey encodedCacheKey = this.f10429f.getEncodedCacheKey(V, this.f10426c.a());
                    String str = (String) this.f10426c.D0("origin");
                    if (str != null && str.equals("memory_bitmap")) {
                        if (this.f10426c.l().G().E() && !this.f10430g.b(encodedCacheKey)) {
                            this.f10427d.b(encodedCacheKey);
                            this.f10430g.a(encodedCacheKey);
                        }
                        if (this.f10426c.l().G().C() && !this.f10431h.b(encodedCacheKey)) {
                            if (V.getCacheChoice() == ImageRequest.CacheChoice.SMALL) {
                                z10 = true;
                            } else {
                                z10 = false;
                            }
                            na.b bVar = (na.b) this.f10428e.get();
                            if (z10) {
                                b10 = bVar.a();
                            } else {
                                b10 = bVar.b();
                            }
                            b10.f(encodedCacheKey);
                            this.f10431h.a(encodedCacheKey);
                        }
                    }
                    o().b(closeableReference, i10);
                    if (ya.b.d()) {
                        ya.b.b();
                        return;
                    }
                    return;
                }
                o().b(closeableReference, i10);
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

    public k(la.w wVar, Supplier supplier, la.k kVar, la.d dVar, la.d dVar2, w0 w0Var) {
        this.f10420a = wVar;
        this.f10421b = supplier;
        this.f10422c = kVar;
        this.f10424e = dVar;
        this.f10425f = dVar2;
        this.f10423d = w0Var;
    }

    @Override // com.facebook.imagepipeline.producers.w0
    public void b(Consumer consumer, ProducerContext producerContext) {
        try {
            if (ya.b.d()) {
                ya.b.a("BitmapProbeProducer#produceResults");
            }
            y0 F = producerContext.F();
            F.d(producerContext, c());
            a aVar = new a(consumer, producerContext, this.f10420a, this.f10421b, this.f10422c, this.f10424e, this.f10425f);
            F.j(producerContext, "BitmapProbeProducer", null);
            if (ya.b.d()) {
                ya.b.a("mInputProducer.produceResult");
            }
            this.f10423d.b(aVar, producerContext);
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
        return "BitmapProbeProducer";
    }
}
