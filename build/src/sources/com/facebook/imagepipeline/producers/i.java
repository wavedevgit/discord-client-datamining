package com.facebook.imagepipeline.producers;

import com.facebook.cache.common.CacheKey;
import com.facebook.common.references.CloseableReference;
import com.facebook.imagepipeline.request.ImageRequest;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class i implements w0 {

    /* renamed from: a  reason: collision with root package name */
    private final ma.w f10813a;

    /* renamed from: b  reason: collision with root package name */
    private final ma.k f10814b;

    /* renamed from: c  reason: collision with root package name */
    private final w0 f10815c;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public class a extends s {

        /* renamed from: c  reason: collision with root package name */
        final /* synthetic */ CacheKey f10816c;

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ boolean f10817d;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        a(Consumer consumer, CacheKey cacheKey, boolean z10) {
            super(consumer);
            this.f10816c = cacheKey;
            this.f10817d = z10;
        }

        @Override // com.facebook.imagepipeline.producers.c
        /* renamed from: p */
        public void h(CloseableReference closeableReference, int i10) {
            CloseableReference closeableReference2;
            try {
                if (za.b.d()) {
                    za.b.a("BitmapMemoryCacheProducer#onNewResultImpl");
                }
                boolean d10 = c.d(i10);
                CloseableReference closeableReference3 = null;
                if (closeableReference == null) {
                    if (d10) {
                        o().b(null, i10);
                    }
                    if (za.b.d()) {
                        za.b.b();
                        return;
                    }
                    return;
                }
                if (!((ta.e) closeableReference.J()).l2() && !c.m(i10, 8)) {
                    if (!d10 && (closeableReference2 = i.this.f10813a.get(this.f10816c)) != null) {
                        ta.o F1 = ((ta.e) closeableReference.J()).F1();
                        ta.o F12 = ((ta.e) closeableReference2.J()).F1();
                        if (!F12.a() && F12.c() < F1.c()) {
                            CloseableReference.z(closeableReference2);
                        } else {
                            o().b(closeableReference2, i10);
                            CloseableReference.z(closeableReference2);
                            if (za.b.d()) {
                                za.b.b();
                                return;
                            }
                            return;
                        }
                    }
                    if (this.f10817d) {
                        closeableReference3 = i.this.f10813a.c(this.f10816c, closeableReference);
                    }
                    if (d10) {
                        o().c(1.0f);
                    }
                    Consumer o10 = o();
                    if (closeableReference3 != null) {
                        closeableReference = closeableReference3;
                    }
                    o10.b(closeableReference, i10);
                    CloseableReference.z(closeableReference3);
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

    public i(ma.w wVar, ma.k kVar, w0 w0Var) {
        this.f10813a = wVar;
        this.f10814b = kVar;
        this.f10815c = w0Var;
    }

    private static void f(ta.l lVar, ProducerContext producerContext) {
        producerContext.J(lVar.getExtras());
    }

    @Override // com.facebook.imagepipeline.producers.w0
    public void b(Consumer consumer, ProducerContext producerContext) {
        CloseableReference closeableReference;
        Map map;
        Map map2;
        try {
            if (za.b.d()) {
                za.b.a("BitmapMemoryCacheProducer#produceResults");
            }
            y0 y10 = producerContext.y();
            y10.d(producerContext, e());
            CacheKey bitmapCacheKey = this.f10814b.getBitmapCacheKey(producerContext.I(), producerContext.a());
            Map map3 = null;
            if (producerContext.I().isCacheEnabled(1)) {
                closeableReference = this.f10813a.get(bitmapCacheKey);
            } else {
                closeableReference = null;
            }
            if (closeableReference != null) {
                f((ta.l) closeableReference.J(), producerContext);
                boolean a10 = ((ta.e) closeableReference.J()).F1().a();
                if (a10) {
                    String e10 = e();
                    if (y10.f(producerContext, e())) {
                        map2 = p8.f.of("cached_value_found", "true");
                    } else {
                        map2 = null;
                    }
                    y10.j(producerContext, e10, map2);
                    y10.b(producerContext, e(), true);
                    producerContext.m("memory_bitmap", d());
                    consumer.c(1.0f);
                }
                consumer.b(closeableReference, c.k(a10));
                closeableReference.close();
                if (a10) {
                    if (za.b.d()) {
                        za.b.b();
                        return;
                    }
                    return;
                }
            }
            if (producerContext.C0().d() >= ImageRequest.RequestLevel.BITMAP_MEMORY_CACHE.d()) {
                String e11 = e();
                if (y10.f(producerContext, e())) {
                    map = p8.f.of("cached_value_found", "false");
                } else {
                    map = null;
                }
                y10.j(producerContext, e11, map);
                y10.b(producerContext, e(), false);
                producerContext.m("memory_bitmap", d());
                consumer.b(null, 1);
                if (za.b.d()) {
                    za.b.b();
                    return;
                }
                return;
            }
            Consumer g10 = g(consumer, bitmapCacheKey, producerContext.I().isCacheEnabled(2));
            String e12 = e();
            if (y10.f(producerContext, e())) {
                map3 = p8.f.of("cached_value_found", "false");
            }
            y10.j(producerContext, e12, map3);
            if (za.b.d()) {
                za.b.a("mInputProducer.produceResult");
            }
            this.f10815c.b(g10, producerContext);
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
