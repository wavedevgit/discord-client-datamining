package com.facebook.imagepipeline.producers;

import com.facebook.cache.common.CacheKey;
import com.facebook.common.references.CloseableReference;
import com.facebook.imagepipeline.request.ImageRequest;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class y implements w0 {

    /* renamed from: a  reason: collision with root package name */
    private final ma.w f11578a;

    /* renamed from: b  reason: collision with root package name */
    private final ma.k f11579b;

    /* renamed from: c  reason: collision with root package name */
    private final w0 f11580c;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    private static class a extends s {

        /* renamed from: c  reason: collision with root package name */
        private final ma.w f11581c;

        /* renamed from: d  reason: collision with root package name */
        private final CacheKey f11582d;

        /* renamed from: e  reason: collision with root package name */
        private final boolean f11583e;

        /* renamed from: f  reason: collision with root package name */
        private final boolean f11584f;

        public a(Consumer consumer, ma.w wVar, CacheKey cacheKey, boolean z10, boolean z11) {
            super(consumer);
            this.f11581c = wVar;
            this.f11582d = cacheKey;
            this.f11583e = z10;
            this.f11584f = z11;
        }

        @Override // com.facebook.imagepipeline.producers.c
        /* renamed from: p */
        public void h(ta.k kVar, int i10) {
            CloseableReference closeableReference;
            try {
                if (za.b.d()) {
                    za.b.a("EncodedMemoryCacheProducer#onNewResultImpl");
                }
                if (!c.e(i10) && kVar != null && !c.l(i10, 10) && kVar.z() != ga.c.f25398d) {
                    CloseableReference n10 = kVar.n();
                    if (n10 != null) {
                        if (this.f11584f && this.f11583e) {
                            closeableReference = this.f11581c.c(this.f11582d, n10);
                        } else {
                            closeableReference = null;
                        }
                        CloseableReference.z(n10);
                        if (closeableReference != null) {
                            ta.k kVar2 = new ta.k(closeableReference);
                            kVar2.m(kVar);
                            CloseableReference.z(closeableReference);
                            o().c(1.0f);
                            o().b(kVar2, i10);
                            ta.k.i(kVar2);
                            if (za.b.d()) {
                                za.b.b();
                                return;
                            }
                            return;
                        }
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

    public y(ma.w wVar, ma.k kVar, w0 w0Var) {
        this.f11578a = wVar;
        this.f11579b = kVar;
        this.f11580c = w0Var;
    }

    @Override // com.facebook.imagepipeline.producers.w0
    public void b(Consumer consumer, ProducerContext producerContext) {
        CloseableReference closeableReference;
        Map map;
        try {
            if (za.b.d()) {
                za.b.a("EncodedMemoryCacheProducer#produceResults");
            }
            y0 y10 = producerContext.y();
            y10.d(producerContext, "EncodedMemoryCacheProducer");
            CacheKey encodedCacheKey = this.f11579b.getEncodedCacheKey(producerContext.I(), producerContext.a());
            Map map2 = null;
            if (producerContext.I().isCacheEnabled(4)) {
                closeableReference = this.f11578a.get(encodedCacheKey);
            } else {
                closeableReference = null;
            }
            if (closeableReference != null) {
                ta.k kVar = new ta.k(closeableReference);
                if (y10.f(producerContext, "EncodedMemoryCacheProducer")) {
                    map2 = p8.f.of("cached_value_found", "true");
                }
                y10.j(producerContext, "EncodedMemoryCacheProducer", map2);
                y10.b(producerContext, "EncodedMemoryCacheProducer", true);
                producerContext.s("memory_encoded");
                consumer.c(1.0f);
                consumer.b(kVar, 1);
                ta.k.i(kVar);
                CloseableReference.z(closeableReference);
                if (za.b.d()) {
                    za.b.b();
                }
            } else if (producerContext.z0().d() >= ImageRequest.RequestLevel.ENCODED_MEMORY_CACHE.d()) {
                if (y10.f(producerContext, "EncodedMemoryCacheProducer")) {
                    map = p8.f.of("cached_value_found", "false");
                } else {
                    map = null;
                }
                y10.j(producerContext, "EncodedMemoryCacheProducer", map);
                y10.b(producerContext, "EncodedMemoryCacheProducer", false);
                producerContext.m("memory_encoded", "nil-result");
                consumer.b(null, 1);
                CloseableReference.z(closeableReference);
                if (za.b.d()) {
                    za.b.b();
                }
            } else {
                a aVar = new a(consumer, this.f11578a, encodedCacheKey, producerContext.I().isCacheEnabled(8), producerContext.i().G().D());
                if (y10.f(producerContext, "EncodedMemoryCacheProducer")) {
                    map2 = p8.f.of("cached_value_found", "false");
                }
                y10.j(producerContext, "EncodedMemoryCacheProducer", map2);
                this.f11580c.b(aVar, producerContext);
                CloseableReference.z(closeableReference);
                if (za.b.d()) {
                    za.b.b();
                }
            }
        } catch (Throwable th2) {
            if (za.b.d()) {
                za.b.b();
            }
            throw th2;
        }
    }
}
