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
    private final Supplier f10969a;

    /* renamed from: b  reason: collision with root package name */
    private final ma.k f10970b;

    /* renamed from: c  reason: collision with root package name */
    private final w0 f10971c;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public class a implements u4.d {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ y0 f10972a;

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ ProducerContext f10973b;

        /* renamed from: c  reason: collision with root package name */
        final /* synthetic */ Consumer f10974c;

        a(y0 y0Var, ProducerContext producerContext, Consumer consumer) {
            this.f10972a = y0Var;
            this.f10973b = producerContext;
            this.f10974c = consumer;
        }

        @Override // u4.d
        /* renamed from: b */
        public Void a(u4.f fVar) {
            if (u.f(fVar)) {
                this.f10972a.c(this.f10973b, "DiskCacheProducer", null);
                this.f10974c.a();
            } else if (fVar.n()) {
                this.f10972a.k(this.f10973b, "DiskCacheProducer", fVar.i(), null);
                u.this.f10971c.b(this.f10974c, this.f10973b);
            } else {
                ta.k kVar = (ta.k) fVar.j();
                if (kVar != null) {
                    y0 y0Var = this.f10972a;
                    ProducerContext producerContext = this.f10973b;
                    y0Var.j(producerContext, "DiskCacheProducer", u.e(y0Var, producerContext, true, kVar.Q()));
                    this.f10972a.b(this.f10973b, "DiskCacheProducer", true);
                    this.f10973b.s("disk");
                    this.f10974c.c(1.0f);
                    this.f10974c.b(kVar, 1);
                    kVar.close();
                } else {
                    y0 y0Var2 = this.f10972a;
                    ProducerContext producerContext2 = this.f10973b;
                    y0Var2.j(producerContext2, "DiskCacheProducer", u.e(y0Var2, producerContext2, false, 0));
                    u.this.f10971c.b(this.f10974c, this.f10973b);
                }
            }
            return null;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public class b extends f {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ AtomicBoolean f10976a;

        b(AtomicBoolean atomicBoolean) {
            this.f10976a = atomicBoolean;
        }

        @Override // com.facebook.imagepipeline.producers.x0
        public void b() {
            this.f10976a.set(true);
        }
    }

    public u(Supplier supplier, ma.k kVar, w0 w0Var) {
        this.f10969a = supplier;
        this.f10970b = kVar;
        this.f10971c = w0Var;
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
        if (producerContext.C0().d() >= ImageRequest.RequestLevel.DISK_CACHE.d()) {
            producerContext.m("disk", "nil-result_read");
            consumer.b(null, 1);
            return;
        }
        this.f10971c.b(consumer, producerContext);
    }

    private u4.d h(Consumer consumer, ProducerContext producerContext) {
        return new a(producerContext.y(), producerContext, consumer);
    }

    private void i(AtomicBoolean atomicBoolean, ProducerContext producerContext) {
        producerContext.g(new b(atomicBoolean));
    }

    @Override // com.facebook.imagepipeline.producers.w0
    public void b(Consumer consumer, ProducerContext producerContext) {
        ImageRequest I = producerContext.I();
        if (!producerContext.I().isCacheEnabled(16)) {
            g(consumer, producerContext);
            return;
        }
        producerContext.y().d(producerContext, "DiskCacheProducer");
        CacheKey encodedCacheKey = this.f10970b.getEncodedCacheKey(I, producerContext.a());
        oa.b bVar = (oa.b) this.f10969a.get();
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
