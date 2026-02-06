package com.facebook.imagepipeline.producers;

import com.facebook.cache.common.CacheKey;
import com.facebook.common.internal.Supplier;
import com.facebook.common.references.CloseableReference;
import com.facebook.imagepipeline.request.ImageRequest;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class k implements w0 {

    /* renamed from: a  reason: collision with root package name */
    private final la.w f10704a;

    /* renamed from: b  reason: collision with root package name */
    private final Supplier f10705b;

    /* renamed from: c  reason: collision with root package name */
    private final la.k f10706c;

    /* renamed from: d  reason: collision with root package name */
    private final w0 f10707d;

    /* renamed from: e  reason: collision with root package name */
    private final la.d f10708e;

    /* renamed from: f  reason: collision with root package name */
    private final la.d f10709f;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    private static class a extends s {

        /* renamed from: c  reason: collision with root package name */
        private final ProducerContext f10710c;

        /* renamed from: d  reason: collision with root package name */
        private final la.w f10711d;

        /* renamed from: e  reason: collision with root package name */
        private final Supplier f10712e;

        /* renamed from: f  reason: collision with root package name */
        private final la.k f10713f;

        /* renamed from: g  reason: collision with root package name */
        private final la.d f10714g;

        /* renamed from: h  reason: collision with root package name */
        private final la.d f10715h;

        public a(Consumer consumer, ProducerContext producerContext, la.w wVar, Supplier supplier, la.k kVar, la.d dVar, la.d dVar2) {
            super(consumer);
            this.f10710c = producerContext;
            this.f10711d = wVar;
            this.f10712e = supplier;
            this.f10713f = kVar;
            this.f10714g = dVar;
            this.f10715h = dVar2;
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
                    ImageRequest I = this.f10710c.I();
                    CacheKey encodedCacheKey = this.f10713f.getEncodedCacheKey(I, this.f10710c.a());
                    String str = (String) this.f10710c.Y("origin");
                    if (str != null && str.equals("memory_bitmap")) {
                        if (this.f10710c.k().G().E() && !this.f10714g.b(encodedCacheKey)) {
                            this.f10711d.b(encodedCacheKey);
                            this.f10714g.a(encodedCacheKey);
                        }
                        if (this.f10710c.k().G().C() && !this.f10715h.b(encodedCacheKey)) {
                            if (I.getCacheChoice() == ImageRequest.CacheChoice.SMALL) {
                                z10 = true;
                            } else {
                                z10 = false;
                            }
                            na.b bVar = (na.b) this.f10712e.get();
                            if (z10) {
                                b10 = bVar.a();
                            } else {
                                b10 = bVar.b();
                            }
                            b10.f(encodedCacheKey);
                            this.f10715h.a(encodedCacheKey);
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
        this.f10704a = wVar;
        this.f10705b = supplier;
        this.f10706c = kVar;
        this.f10708e = dVar;
        this.f10709f = dVar2;
        this.f10707d = w0Var;
    }

    @Override // com.facebook.imagepipeline.producers.w0
    public void b(Consumer consumer, ProducerContext producerContext) {
        try {
            if (ya.b.d()) {
                ya.b.a("BitmapProbeProducer#produceResults");
            }
            y0 y10 = producerContext.y();
            y10.d(producerContext, c());
            a aVar = new a(consumer, producerContext, this.f10704a, this.f10705b, this.f10706c, this.f10708e, this.f10709f);
            y10.j(producerContext, "BitmapProbeProducer", null);
            if (ya.b.d()) {
                ya.b.a("mInputProducer.produceResult");
            }
            this.f10707d.b(aVar, producerContext);
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
