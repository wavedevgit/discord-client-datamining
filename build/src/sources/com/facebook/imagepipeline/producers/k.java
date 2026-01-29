package com.facebook.imagepipeline.producers;

import com.facebook.cache.common.CacheKey;
import com.facebook.common.internal.Supplier;
import com.facebook.common.references.CloseableReference;
import com.facebook.imagepipeline.request.ImageRequest;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class k implements w0 {

    /* renamed from: a  reason: collision with root package name */
    private final la.w f11823a;

    /* renamed from: b  reason: collision with root package name */
    private final Supplier f11824b;

    /* renamed from: c  reason: collision with root package name */
    private final la.k f11825c;

    /* renamed from: d  reason: collision with root package name */
    private final w0 f11826d;

    /* renamed from: e  reason: collision with root package name */
    private final la.d f11827e;

    /* renamed from: f  reason: collision with root package name */
    private final la.d f11828f;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    private static class a extends s {

        /* renamed from: c  reason: collision with root package name */
        private final ProducerContext f11829c;

        /* renamed from: d  reason: collision with root package name */
        private final la.w f11830d;

        /* renamed from: e  reason: collision with root package name */
        private final Supplier f11831e;

        /* renamed from: f  reason: collision with root package name */
        private final la.k f11832f;

        /* renamed from: g  reason: collision with root package name */
        private final la.d f11833g;

        /* renamed from: h  reason: collision with root package name */
        private final la.d f11834h;

        public a(Consumer consumer, ProducerContext producerContext, la.w wVar, Supplier supplier, la.k kVar, la.d dVar, la.d dVar2) {
            super(consumer);
            this.f11829c = producerContext;
            this.f11830d = wVar;
            this.f11831e = supplier;
            this.f11832f = kVar;
            this.f11833g = dVar;
            this.f11834h = dVar2;
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
                    ImageRequest V = this.f11829c.V();
                    CacheKey encodedCacheKey = this.f11832f.getEncodedCacheKey(V, this.f11829c.a());
                    String str = (String) this.f11829c.D0("origin");
                    if (str != null && str.equals("memory_bitmap")) {
                        if (this.f11829c.l().G().E() && !this.f11833g.b(encodedCacheKey)) {
                            this.f11830d.b(encodedCacheKey);
                            this.f11833g.a(encodedCacheKey);
                        }
                        if (this.f11829c.l().G().C() && !this.f11834h.b(encodedCacheKey)) {
                            if (V.getCacheChoice() == ImageRequest.CacheChoice.SMALL) {
                                z10 = true;
                            } else {
                                z10 = false;
                            }
                            na.b bVar = (na.b) this.f11831e.get();
                            if (z10) {
                                b10 = bVar.a();
                            } else {
                                b10 = bVar.b();
                            }
                            b10.f(encodedCacheKey);
                            this.f11834h.a(encodedCacheKey);
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
        this.f11823a = wVar;
        this.f11824b = supplier;
        this.f11825c = kVar;
        this.f11827e = dVar;
        this.f11828f = dVar2;
        this.f11826d = w0Var;
    }

    @Override // com.facebook.imagepipeline.producers.w0
    public void b(Consumer consumer, ProducerContext producerContext) {
        try {
            if (ya.b.d()) {
                ya.b.a("BitmapProbeProducer#produceResults");
            }
            y0 F = producerContext.F();
            F.d(producerContext, c());
            a aVar = new a(consumer, producerContext, this.f11823a, this.f11824b, this.f11825c, this.f11827e, this.f11828f);
            F.j(producerContext, "BitmapProbeProducer", null);
            if (ya.b.d()) {
                ya.b.a("mInputProducer.produceResult");
            }
            this.f11826d.b(aVar, producerContext);
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
