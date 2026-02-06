package com.facebook.imagepipeline.producers;

import com.facebook.cache.common.CacheKey;
import com.facebook.common.references.CloseableReference;
import com.facebook.imagepipeline.request.ImageRequest;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class y implements w0 {

    /* renamed from: a  reason: collision with root package name */
    private final la.w f10861a;

    /* renamed from: b  reason: collision with root package name */
    private final la.k f10862b;

    /* renamed from: c  reason: collision with root package name */
    private final w0 f10863c;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    private static class a extends s {

        /* renamed from: c  reason: collision with root package name */
        private final la.w f10864c;

        /* renamed from: d  reason: collision with root package name */
        private final CacheKey f10865d;

        /* renamed from: e  reason: collision with root package name */
        private final boolean f10866e;

        /* renamed from: f  reason: collision with root package name */
        private final boolean f10867f;

        public a(Consumer consumer, la.w wVar, CacheKey cacheKey, boolean z10, boolean z11) {
            super(consumer);
            this.f10864c = wVar;
            this.f10865d = cacheKey;
            this.f10866e = z10;
            this.f10867f = z11;
        }

        @Override // com.facebook.imagepipeline.producers.c
        /* renamed from: p */
        public void h(sa.k kVar, int i10) {
            CloseableReference closeableReference;
            try {
                if (ya.b.d()) {
                    ya.b.a("EncodedMemoryCacheProducer#onNewResultImpl");
                }
                if (!c.e(i10) && kVar != null && !c.l(i10, 10) && kVar.z() != fa.c.f23013d) {
                    CloseableReference n10 = kVar.n();
                    if (n10 != null) {
                        if (this.f10867f && this.f10866e) {
                            closeableReference = this.f10864c.c(this.f10865d, n10);
                        } else {
                            closeableReference = null;
                        }
                        CloseableReference.z(n10);
                        if (closeableReference != null) {
                            sa.k kVar2 = new sa.k(closeableReference);
                            kVar2.m(kVar);
                            CloseableReference.z(closeableReference);
                            o().c(1.0f);
                            o().b(kVar2, i10);
                            sa.k.k(kVar2);
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
        this.f10861a = wVar;
        this.f10862b = kVar;
        this.f10863c = w0Var;
    }

    @Override // com.facebook.imagepipeline.producers.w0
    public void b(Consumer consumer, ProducerContext producerContext) {
        CloseableReference closeableReference;
        Map map;
        try {
            if (ya.b.d()) {
                ya.b.a("EncodedMemoryCacheProducer#produceResults");
            }
            y0 y10 = producerContext.y();
            y10.d(producerContext, "EncodedMemoryCacheProducer");
            CacheKey encodedCacheKey = this.f10862b.getEncodedCacheKey(producerContext.I(), producerContext.a());
            Map map2 = null;
            if (producerContext.I().isCacheEnabled(4)) {
                closeableReference = this.f10861a.get(encodedCacheKey);
            } else {
                closeableReference = null;
            }
            if (closeableReference != null) {
                sa.k kVar = new sa.k(closeableReference);
                if (y10.f(producerContext, "EncodedMemoryCacheProducer")) {
                    map2 = o8.f.of("cached_value_found", "true");
                }
                y10.j(producerContext, "EncodedMemoryCacheProducer", map2);
                y10.b(producerContext, "EncodedMemoryCacheProducer", true);
                producerContext.s("memory_encoded");
                consumer.c(1.0f);
                consumer.b(kVar, 1);
                sa.k.k(kVar);
                CloseableReference.z(closeableReference);
                if (ya.b.d()) {
                    ya.b.b();
                }
            } else if (producerContext.E0().d() >= ImageRequest.RequestLevel.ENCODED_MEMORY_CACHE.d()) {
                if (y10.f(producerContext, "EncodedMemoryCacheProducer")) {
                    map = o8.f.of("cached_value_found", "false");
                } else {
                    map = null;
                }
                y10.j(producerContext, "EncodedMemoryCacheProducer", map);
                y10.b(producerContext, "EncodedMemoryCacheProducer", false);
                producerContext.m("memory_encoded", "nil-result");
                consumer.b(null, 1);
                CloseableReference.z(closeableReference);
                if (ya.b.d()) {
                    ya.b.b();
                }
            } else {
                a aVar = new a(consumer, this.f10861a, encodedCacheKey, producerContext.I().isCacheEnabled(8), producerContext.k().G().D());
                if (y10.f(producerContext, "EncodedMemoryCacheProducer")) {
                    map2 = o8.f.of("cached_value_found", "false");
                }
                y10.j(producerContext, "EncodedMemoryCacheProducer", map2);
                this.f10863c.b(aVar, producerContext);
                CloseableReference.z(closeableReference);
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
