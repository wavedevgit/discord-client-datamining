package com.facebook.imagepipeline.producers;

import com.facebook.cache.common.CacheKey;
import com.facebook.common.references.CloseableReference;
import com.facebook.imagepipeline.request.ImageRequest;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class i implements w0 {

    /* renamed from: a  reason: collision with root package name */
    private final la.w f11792a;

    /* renamed from: b  reason: collision with root package name */
    private final la.k f11793b;

    /* renamed from: c  reason: collision with root package name */
    private final w0 f11794c;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public class a extends s {

        /* renamed from: c  reason: collision with root package name */
        final /* synthetic */ CacheKey f11795c;

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ boolean f11796d;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        a(Consumer consumer, CacheKey cacheKey, boolean z10) {
            super(consumer);
            this.f11795c = cacheKey;
            this.f11796d = z10;
        }

        @Override // com.facebook.imagepipeline.producers.c
        /* renamed from: p */
        public void h(CloseableReference closeableReference, int i10) {
            CloseableReference closeableReference2;
            try {
                if (ya.b.d()) {
                    ya.b.a("BitmapMemoryCacheProducer#onNewResultImpl");
                }
                boolean d10 = c.d(i10);
                CloseableReference closeableReference3 = null;
                if (closeableReference == null) {
                    if (d10) {
                        o().b(null, i10);
                    }
                    if (ya.b.d()) {
                        ya.b.b();
                        return;
                    }
                    return;
                }
                if (!((sa.e) closeableReference.D0()).l2() && !c.m(i10, 8)) {
                    if (!d10 && (closeableReference2 = i.this.f11792a.get(this.f11795c)) != null) {
                        sa.o J1 = ((sa.e) closeableReference.D0()).J1();
                        sa.o J12 = ((sa.e) closeableReference2.D0()).J1();
                        if (!J12.a() && J12.c() < J1.c()) {
                            CloseableReference.N(closeableReference2);
                        } else {
                            o().b(closeableReference2, i10);
                            CloseableReference.N(closeableReference2);
                            if (ya.b.d()) {
                                ya.b.b();
                                return;
                            }
                            return;
                        }
                    }
                    if (this.f11796d) {
                        closeableReference3 = i.this.f11792a.c(this.f11795c, closeableReference);
                    }
                    if (d10) {
                        o().c(1.0f);
                    }
                    Consumer o10 = o();
                    if (closeableReference3 != null) {
                        closeableReference = closeableReference3;
                    }
                    o10.b(closeableReference, i10);
                    CloseableReference.N(closeableReference3);
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

    public i(la.w wVar, la.k kVar, w0 w0Var) {
        this.f11792a = wVar;
        this.f11793b = kVar;
        this.f11794c = w0Var;
    }

    private static void f(sa.l lVar, ProducerContext producerContext) {
        producerContext.A0(lVar.getExtras());
    }

    @Override // com.facebook.imagepipeline.producers.w0
    public void b(Consumer consumer, ProducerContext producerContext) {
        CloseableReference closeableReference;
        Map map;
        Map map2;
        try {
            if (ya.b.d()) {
                ya.b.a("BitmapMemoryCacheProducer#produceResults");
            }
            y0 F = producerContext.F();
            F.d(producerContext, e());
            CacheKey bitmapCacheKey = this.f11793b.getBitmapCacheKey(producerContext.V(), producerContext.a());
            Map map3 = null;
            if (producerContext.V().isCacheEnabled(1)) {
                closeableReference = this.f11792a.get(bitmapCacheKey);
            } else {
                closeableReference = null;
            }
            if (closeableReference != null) {
                f((sa.l) closeableReference.D0(), producerContext);
                boolean a10 = ((sa.e) closeableReference.D0()).J1().a();
                if (a10) {
                    String e10 = e();
                    if (F.f(producerContext, e())) {
                        map2 = o8.f.of("cached_value_found", "true");
                    } else {
                        map2 = null;
                    }
                    F.j(producerContext, e10, map2);
                    F.b(producerContext, e(), true);
                    producerContext.n("memory_bitmap", d());
                    consumer.c(1.0f);
                }
                consumer.b(closeableReference, c.k(a10));
                closeableReference.close();
                if (a10) {
                    if (ya.b.d()) {
                        ya.b.b();
                        return;
                    }
                    return;
                }
            }
            if (producerContext.E0().d() >= ImageRequest.RequestLevel.BITMAP_MEMORY_CACHE.d()) {
                String e11 = e();
                if (F.f(producerContext, e())) {
                    map = o8.f.of("cached_value_found", "false");
                } else {
                    map = null;
                }
                F.j(producerContext, e11, map);
                F.b(producerContext, e(), false);
                producerContext.n("memory_bitmap", d());
                consumer.b(null, 1);
                if (ya.b.d()) {
                    ya.b.b();
                    return;
                }
                return;
            }
            Consumer g10 = g(consumer, bitmapCacheKey, producerContext.V().isCacheEnabled(2));
            String e12 = e();
            if (F.f(producerContext, e())) {
                map3 = o8.f.of("cached_value_found", "false");
            }
            F.j(producerContext, e12, map3);
            if (ya.b.d()) {
                ya.b.a("mInputProducer.produceResult");
            }
            this.f11794c.b(g10, producerContext);
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

    protected String d() {
        return "pipe_bg";
    }

    protected String e() {
        return "BitmapMemoryCacheProducer";
    }

    protected Consumer g(Consumer consumer, CacheKey cacheKey, boolean z10) {
        return new a(consumer, cacheKey, z10);
    }
}
