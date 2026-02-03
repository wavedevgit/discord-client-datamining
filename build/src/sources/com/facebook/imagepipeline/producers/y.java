package com.facebook.imagepipeline.producers;

import com.facebook.cache.common.CacheKey;
import com.facebook.common.references.CloseableReference;
import com.facebook.imagepipeline.request.ImageRequest;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class y implements w0 {

    /* renamed from: a  reason: collision with root package name */
    private final la.w f10577a;

    /* renamed from: b  reason: collision with root package name */
    private final la.k f10578b;

    /* renamed from: c  reason: collision with root package name */
    private final w0 f10579c;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    private static class a extends s {

        /* renamed from: c  reason: collision with root package name */
        private final la.w f10580c;

        /* renamed from: d  reason: collision with root package name */
        private final CacheKey f10581d;

        /* renamed from: e  reason: collision with root package name */
        private final boolean f10582e;

        /* renamed from: f  reason: collision with root package name */
        private final boolean f10583f;

        public a(Consumer consumer, la.w wVar, CacheKey cacheKey, boolean z10, boolean z11) {
            super(consumer);
            this.f10580c = wVar;
            this.f10581d = cacheKey;
            this.f10582e = z10;
            this.f10583f = z11;
        }

        @Override // com.facebook.imagepipeline.producers.c
        /* renamed from: p */
        public void h(sa.k kVar, int i10) {
            CloseableReference closeableReference;
            try {
                if (ya.b.d()) {
                    ya.b.a("EncodedMemoryCacheProducer#onNewResultImpl");
                }
                if (!c.e(i10) && kVar != null && !c.l(i10, 10) && kVar.L() != fa.c.f23687d) {
                    CloseableReference x10 = kVar.x();
                    if (x10 != null) {
                        if (this.f10583f && this.f10582e) {
                            closeableReference = this.f10580c.c(this.f10581d, x10);
                        } else {
                            closeableReference = null;
                        }
                        CloseableReference.N(x10);
                        if (closeableReference != null) {
                            sa.k kVar2 = new sa.k(closeableReference);
                            kVar2.n(kVar);
                            CloseableReference.N(closeableReference);
                            o().c(1.0f);
                            o().b(kVar2, i10);
                            sa.k.l(kVar2);
                            if (ya.b.d()) {
                                ya.b.b();
                                return;
                            }
                            return;
                        }
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

    public y(la.w wVar, la.k kVar, w0 w0Var) {
        this.f10577a = wVar;
        this.f10578b = kVar;
        this.f10579c = w0Var;
    }

    @Override // com.facebook.imagepipeline.producers.w0
    public void b(Consumer consumer, ProducerContext producerContext) {
        CloseableReference closeableReference;
        Map map;
        try {
            if (ya.b.d()) {
                ya.b.a("EncodedMemoryCacheProducer#produceResults");
            }
            y0 F = producerContext.F();
            F.d(producerContext, "EncodedMemoryCacheProducer");
            CacheKey encodedCacheKey = this.f10578b.getEncodedCacheKey(producerContext.V(), producerContext.a());
            Map map2 = null;
            if (producerContext.V().isCacheEnabled(4)) {
                closeableReference = this.f10577a.get(encodedCacheKey);
            } else {
                closeableReference = null;
            }
            if (closeableReference != null) {
                sa.k kVar = new sa.k(closeableReference);
                if (F.f(producerContext, "EncodedMemoryCacheProducer")) {
                    map2 = o8.f.of("cached_value_found", "true");
                }
                F.j(producerContext, "EncodedMemoryCacheProducer", map2);
                F.b(producerContext, "EncodedMemoryCacheProducer", true);
                producerContext.E("memory_encoded");
                consumer.c(1.0f);
                consumer.b(kVar, 1);
                sa.k.l(kVar);
                CloseableReference.N(closeableReference);
                if (ya.b.d()) {
                    ya.b.b();
                }
            } else if (producerContext.E0().d() >= ImageRequest.RequestLevel.ENCODED_MEMORY_CACHE.d()) {
                if (F.f(producerContext, "EncodedMemoryCacheProducer")) {
                    map = o8.f.of("cached_value_found", "false");
                } else {
                    map = null;
                }
                F.j(producerContext, "EncodedMemoryCacheProducer", map);
                F.b(producerContext, "EncodedMemoryCacheProducer", false);
                producerContext.n("memory_encoded", "nil-result");
                consumer.b(null, 1);
                CloseableReference.N(closeableReference);
                if (ya.b.d()) {
                    ya.b.b();
                }
            } else {
                a aVar = new a(consumer, this.f10577a, encodedCacheKey, producerContext.V().isCacheEnabled(8), producerContext.l().G().D());
                if (F.f(producerContext, "EncodedMemoryCacheProducer")) {
                    map2 = o8.f.of("cached_value_found", "false");
                }
                F.j(producerContext, "EncodedMemoryCacheProducer", map2);
                this.f10579c.b(aVar, producerContext);
                CloseableReference.N(closeableReference);
                if (ya.b.d()) {
                    ya.b.b();
                }
            }
        } catch (Throwable th2) {
            if (ya.b.d()) {
                ya.b.b();
            }
            throw th2;
        }
    }
}
