package com.facebook.imagepipeline.producers;

import com.facebook.cache.common.CacheKey;
import com.facebook.common.references.CloseableReference;
import com.facebook.imagepipeline.request.ImageRequest;
import com.facebook.imagepipeline.request.Postprocessor;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class t0 implements w0 {

    /* renamed from: a  reason: collision with root package name */
    private final ma.w f10962a;

    /* renamed from: b  reason: collision with root package name */
    private final ma.k f10963b;

    /* renamed from: c  reason: collision with root package name */
    private final w0 f10964c;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static class a extends s {

        /* renamed from: c  reason: collision with root package name */
        private final CacheKey f10965c;

        /* renamed from: d  reason: collision with root package name */
        private final boolean f10966d;

        /* renamed from: e  reason: collision with root package name */
        private final ma.w f10967e;

        /* renamed from: f  reason: collision with root package name */
        private final boolean f10968f;

        public a(Consumer consumer, CacheKey cacheKey, boolean z10, ma.w wVar, boolean z11) {
            super(consumer);
            this.f10965c = cacheKey;
            this.f10966d = z10;
            this.f10967e = wVar;
            this.f10968f = z11;
        }

        /* JADX INFO: Access modifiers changed from: protected */
        @Override // com.facebook.imagepipeline.producers.c
        /* renamed from: p */
        public void h(CloseableReference closeableReference, int i10) {
            CloseableReference closeableReference2 = null;
            if (closeableReference == null) {
                if (c.d(i10)) {
                    o().b(null, i10);
                }
            } else if (c.e(i10) && !this.f10966d) {
            } else {
                if (this.f10968f) {
                    closeableReference2 = this.f10967e.c(this.f10965c, closeableReference);
                }
                try {
                    o().c(1.0f);
                    Consumer o10 = o();
                    if (closeableReference2 != null) {
                        closeableReference = closeableReference2;
                    }
                    o10.b(closeableReference, i10);
                } finally {
                    CloseableReference.z(closeableReference2);
                }
            }
        }
    }

    public t0(ma.w wVar, ma.k kVar, w0 w0Var) {
        this.f10962a = wVar;
        this.f10963b = kVar;
        this.f10964c = w0Var;
    }

    @Override // com.facebook.imagepipeline.producers.w0
    public void b(Consumer consumer, ProducerContext producerContext) {
        CloseableReference closeableReference;
        y0 y10 = producerContext.y();
        ImageRequest I = producerContext.I();
        Object a10 = producerContext.a();
        Postprocessor postprocessor = I.getPostprocessor();
        if (postprocessor != null && postprocessor.getPostprocessorCacheKey() != null) {
            y10.d(producerContext, c());
            CacheKey postprocessedBitmapCacheKey = this.f10963b.getPostprocessedBitmapCacheKey(I, a10);
            Map map = null;
            if (producerContext.I().isCacheEnabled(1)) {
                closeableReference = this.f10962a.get(postprocessedBitmapCacheKey);
            } else {
                closeableReference = null;
            }
            if (closeableReference != null) {
                String c10 = c();
                if (y10.f(producerContext, c())) {
                    map = p8.f.of("cached_value_found", "true");
                }
                y10.j(producerContext, c10, map);
                y10.b(producerContext, "PostprocessedBitmapMemoryCacheProducer", true);
                producerContext.m("memory_bitmap", "postprocessed");
                consumer.c(1.0f);
                consumer.b(closeableReference, 1);
                closeableReference.close();
                return;
            }
            a aVar = new a(consumer, postprocessedBitmapCacheKey, false, this.f10962a, producerContext.I().isCacheEnabled(2));
            String c11 = c();
            if (y10.f(producerContext, c())) {
                map = p8.f.of("cached_value_found", "false");
            }
            y10.j(producerContext, c11, map);
            this.f10964c.b(aVar, producerContext);
            return;
        }
        this.f10964c.b(consumer, producerContext);
    }

    protected String c() {
        return "PostprocessedBitmapMemoryCacheProducer";
    }
}
