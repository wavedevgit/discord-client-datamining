package com.facebook.imagepipeline.producers;

import com.facebook.cache.common.CacheKey;
import com.facebook.common.internal.Supplier;
import com.facebook.common.references.CloseableReference;
import com.facebook.imagepipeline.request.ImageRequest;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class k implements w0 {

    /* renamed from: a  reason: collision with root package name */
    private final la.w f10805a;

    /* renamed from: b  reason: collision with root package name */
    private final Supplier f10806b;

    /* renamed from: c  reason: collision with root package name */
    private final la.k f10807c;

    /* renamed from: d  reason: collision with root package name */
    private final w0 f10808d;

    /* renamed from: e  reason: collision with root package name */
    private final la.d f10809e;

    /* renamed from: f  reason: collision with root package name */
    private final la.d f10810f;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    private static class a extends s {

        /* renamed from: c  reason: collision with root package name */
        private final ProducerContext f10811c;

        /* renamed from: d  reason: collision with root package name */
        private final la.w f10812d;

        /* renamed from: e  reason: collision with root package name */
        private final Supplier f10813e;

        /* renamed from: f  reason: collision with root package name */
        private final la.k f10814f;

        /* renamed from: g  reason: collision with root package name */
        private final la.d f10815g;

        /* renamed from: h  reason: collision with root package name */
        private final la.d f10816h;

        public a(Consumer consumer, ProducerContext producerContext, la.w wVar, Supplier supplier, la.k kVar, la.d dVar, la.d dVar2) {
            super(consumer);
            this.f10811c = producerContext;
            this.f10812d = wVar;
            this.f10813e = supplier;
            this.f10814f = kVar;
            this.f10815g = dVar;
            this.f10816h = dVar2;
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
                    ImageRequest V = this.f10811c.V();
                    CacheKey encodedCacheKey = this.f10814f.getEncodedCacheKey(V, this.f10811c.a());
                    String str = (String) this.f10811c.D0("origin");
                    if (str != null && str.equals("memory_bitmap")) {
                        if (this.f10811c.k().G().E() && !this.f10815g.b(encodedCacheKey)) {
                            this.f10812d.b(encodedCacheKey);
                            this.f10815g.a(encodedCacheKey);
                        }
                        if (this.f10811c.k().G().C() && !this.f10816h.b(encodedCacheKey)) {
                            if (V.getCacheChoice() == ImageRequest.CacheChoice.SMALL) {
                                z10 = true;
                            } else {
                                z10 = false;
                            }
                            na.b bVar = (na.b) this.f10813e.get();
                            if (z10) {
                                b10 = bVar.a();
                            } else {
                                b10 = bVar.b();
                            }
                            b10.f(encodedCacheKey);
                            this.f10816h.a(encodedCacheKey);
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
        this.f10805a = wVar;
        this.f10806b = supplier;
        this.f10807c = kVar;
        this.f10809e = dVar;
        this.f10810f = dVar2;
        this.f10808d = w0Var;
    }

    @Override // com.facebook.imagepipeline.producers.w0
    public void b(Consumer consumer, ProducerContext producerContext) {
        try {
            if (ya.b.d()) {
                ya.b.a("BitmapProbeProducer#produceResults");
            }
            y0 F = producerContext.F();
            F.d(producerContext, c());
            a aVar = new a(consumer, producerContext, this.f10805a, this.f10806b, this.f10807c, this.f10809e, this.f10810f);
            F.j(producerContext, "BitmapProbeProducer", null);
            if (ya.b.d()) {
                ya.b.a("mInputProducer.produceResult");
            }
            this.f10808d.b(aVar, producerContext);
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
