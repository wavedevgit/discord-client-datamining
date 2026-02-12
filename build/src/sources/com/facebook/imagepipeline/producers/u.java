package com.facebook.imagepipeline.producers;

import com.facebook.cache.common.CacheKey;
import com.facebook.common.internal.Supplier;
import com.facebook.imagepipeline.producers.t;
import com.facebook.imagepipeline.request.ImageRequest;
import java.util.Map;
import java.util.concurrent.CancellationException;
import java.util.concurrent.atomic.AtomicBoolean;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class u implements w0 {

    /* renamed from: a  reason: collision with root package name */
    private final Supplier f11547a;

    /* renamed from: b  reason: collision with root package name */
    private final ma.k f11548b;

    /* renamed from: c  reason: collision with root package name */
    private final w0 f11549c;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public class a implements u4.d {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ y0 f11550a;

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ ProducerContext f11551b;

        /* renamed from: c  reason: collision with root package name */
        final /* synthetic */ Consumer f11552c;

        a(y0 y0Var, ProducerContext producerContext, Consumer consumer) {
            this.f11550a = y0Var;
            this.f11551b = producerContext;
            this.f11552c = consumer;
        }

        @Override // u4.d
        /* renamed from: b */
        public Void a(u4.f fVar) {
            if (u.f(fVar)) {
                this.f11550a.c(this.f11551b, "DiskCacheProducer", null);
                this.f11552c.a();
            } else if (fVar.n()) {
                this.f11550a.k(this.f11551b, "DiskCacheProducer", fVar.i(), null);
                u.this.f11549c.b(this.f11552c, this.f11551b);
            } else {
                ta.k kVar = (ta.k) fVar.j();
                if (kVar != null) {
                    y0 y0Var = this.f11550a;
                    ProducerContext producerContext = this.f11551b;
                    y0Var.j(producerContext, "DiskCacheProducer", u.e(y0Var, producerContext, true, kVar.Q()));
                    this.f11550a.b(this.f11551b, "DiskCacheProducer", true);
                    this.f11551b.s("disk");
                    this.f11552c.c(1.0f);
                    this.f11552c.b(kVar, 1);
                    kVar.close();
                } else {
                    y0 y0Var2 = this.f11550a;
                    ProducerContext producerContext2 = this.f11551b;
                    y0Var2.j(producerContext2, "DiskCacheProducer", u.e(y0Var2, producerContext2, false, 0));
                    u.this.f11549c.b(this.f11552c, this.f11551b);
                }
            }
            return null;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public class b extends f {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ AtomicBoolean f11554a;

        b(AtomicBoolean atomicBoolean) {
            this.f11554a = atomicBoolean;
        }

        @Override // com.facebook.imagepipeline.producers.x0
        public void b() {
            this.f11554a.set(true);
        }
    }

    public u(Supplier supplier, ma.k kVar, w0 w0Var) {
        this.f11547a = supplier;
        this.f11548b = kVar;
        this.f11549c = w0Var;
    }

    static Map e(y0 y0Var, ProducerContext producerContext, boolean z10, int i10) {
        if (!y0Var.f(producerContext, "DiskCacheProducer")) {
            return null;
        }
        if (z10) {
            return p8.f.of("cached_value_found", String.valueOf(z10), "encodedImageSize", String.valueOf(i10));
        }
        return p8.f.of("cached_value_found", String.valueOf(z10));
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static boolean f(u4.f fVar) {
        if (!fVar.l()) {
            if (!fVar.n() || !(fVar.i() instanceof CancellationException)) {
                return false;
            }
            return true;
        }
        return true;
    }

    private void g(Consumer consumer, ProducerContext producerContext) {
        if (producerContext.z0().d() >= ImageRequest.RequestLevel.DISK_CACHE.d()) {
            producerContext.m("disk", "nil-result_read");
            consumer.b(null, 1);
            return;
        }
        this.f11549c.b(consumer, producerContext);
    }

    private u4.d h(Consumer consumer, ProducerContext producerContext) {
        return new a(producerContext.y(), producerContext, consumer);
    }

    private void i(AtomicBoolean atomicBoolean, ProducerContext producerContext) {
        producerContext.h(new b(atomicBoolean));
    }

    @Override // com.facebook.imagepipeline.producers.w0
    public void b(Consumer consumer, ProducerContext producerContext) {
        ImageRequest I = producerContext.I();
        if (!producerContext.I().isCacheEnabled(16)) {
            g(consumer, producerContext);
            return;
        }
        producerContext.y().d(producerContext, "DiskCacheProducer");
        CacheKey encodedCacheKey = this.f11548b.getEncodedCacheKey(I, producerContext.a());
        oa.b bVar = (oa.b) this.f11547a.get();
        ma.j a10 = t.a(I, bVar.a(), bVar.b(), bVar.c());
        if (a10 == null) {
            y0 y10 = producerContext.y();
            y10.k(producerContext, "DiskCacheProducer", new t.a("Got no disk cache for CacheChoice: " + Integer.valueOf(I.getCacheChoice().ordinal()).toString()), null);
            g(consumer, producerContext);
            return;
        }
        AtomicBoolean atomicBoolean = new AtomicBoolean(false);
        a10.m(encodedCacheKey, atomicBoolean).e(h(consumer, producerContext));
        i(atomicBoolean, producerContext);
    }
}
