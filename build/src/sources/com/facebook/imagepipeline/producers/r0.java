package com.facebook.imagepipeline.producers;

import android.net.Uri;
import com.facebook.cache.common.CacheKey;
import com.facebook.common.internal.Supplier;
import com.facebook.common.references.CloseableReference;
import com.facebook.imagepipeline.common.BytesRange;
import com.facebook.imagepipeline.request.ImageRequest;
import com.facebook.imagepipeline.request.ImageRequestBuilder;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.util.Map;
import java.util.concurrent.CancellationException;
import java.util.concurrent.atomic.AtomicBoolean;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class r0 implements w0 {

    /* renamed from: a  reason: collision with root package name */
    private final Supplier f10802a;

    /* renamed from: b  reason: collision with root package name */
    private final la.k f10803b;

    /* renamed from: c  reason: collision with root package name */
    private final r8.i f10804c;

    /* renamed from: d  reason: collision with root package name */
    private final r8.a f10805d;

    /* renamed from: e  reason: collision with root package name */
    private final w0 f10806e;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public class a implements u4.d {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ y0 f10807a;

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ ProducerContext f10808b;

        /* renamed from: c  reason: collision with root package name */
        final /* synthetic */ Consumer f10809c;

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ CacheKey f10810d;

        a(y0 y0Var, ProducerContext producerContext, Consumer consumer, CacheKey cacheKey) {
            this.f10807a = y0Var;
            this.f10808b = producerContext;
            this.f10809c = consumer;
            this.f10810d = cacheKey;
        }

        @Override // u4.d
        /* renamed from: b */
        public Void a(u4.f fVar) {
            if (r0.g(fVar)) {
                this.f10807a.c(this.f10808b, "PartialDiskCacheProducer", null);
                this.f10809c.a();
            } else if (fVar.n()) {
                this.f10807a.k(this.f10808b, "PartialDiskCacheProducer", fVar.i(), null);
                r0.this.i(this.f10809c, this.f10808b, this.f10810d, null);
            } else {
                sa.k kVar = (sa.k) fVar.j();
                if (kVar != null) {
                    y0 y0Var = this.f10807a;
                    ProducerContext producerContext = this.f10808b;
                    y0Var.j(producerContext, "PartialDiskCacheProducer", r0.f(y0Var, producerContext, true, kVar.P()));
                    BytesRange g10 = BytesRange.g(kVar.P() - 1);
                    kVar.w1(g10);
                    int P = kVar.P();
                    ImageRequest I = this.f10808b.I();
                    if (g10.c(I.getBytesRange())) {
                        this.f10808b.m("disk", "partial");
                        this.f10807a.b(this.f10808b, "PartialDiskCacheProducer", true);
                        this.f10809c.b(kVar, 9);
                    } else {
                        this.f10809c.b(kVar, 8);
                        r0.this.i(this.f10809c, new d1(ImageRequestBuilder.b(I).z(BytesRange.d(P - 1)).a(), this.f10808b), this.f10810d, kVar);
                    }
                } else {
                    y0 y0Var2 = this.f10807a;
                    ProducerContext producerContext2 = this.f10808b;
                    y0Var2.j(producerContext2, "PartialDiskCacheProducer", r0.f(y0Var2, producerContext2, false, 0));
                    r0.this.i(this.f10809c, this.f10808b, this.f10810d, kVar);
                }
            }
            return null;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public class b extends f {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ AtomicBoolean f10812a;

        b(AtomicBoolean atomicBoolean) {
            this.f10812a = atomicBoolean;
        }

        @Override // com.facebook.imagepipeline.producers.x0
        public void b() {
            this.f10812a.set(true);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static class c extends s {

        /* renamed from: c  reason: collision with root package name */
        private final Supplier f10814c;

        /* renamed from: d  reason: collision with root package name */
        private final CacheKey f10815d;

        /* renamed from: e  reason: collision with root package name */
        private final r8.i f10816e;

        /* renamed from: f  reason: collision with root package name */
        private final r8.a f10817f;

        /* renamed from: g  reason: collision with root package name */
        private final sa.k f10818g;

        /* renamed from: h  reason: collision with root package name */
        private final boolean f10819h;

        private void p(InputStream inputStream, OutputStream outputStream, int i10) {
            byte[] bArr = (byte[]) this.f10817f.get(16384);
            int i11 = i10;
            while (i11 > 0) {
                try {
                    int read = inputStream.read(bArr, 0, Math.min(16384, i11));
                    if (read < 0) {
                        break;
                    } else if (read > 0) {
                        outputStream.write(bArr, 0, read);
                        i11 -= read;
                    }
                } finally {
                    this.f10817f.release(bArr);
                }
            }
            if (i11 <= 0) {
                return;
            }
            throw new IOException(String.format(null, "Failed to read %d bytes - finished %d short", Integer.valueOf(i10), Integer.valueOf(i11)));
        }

        private r8.k q(sa.k kVar, sa.k kVar2) {
            int i10 = ((BytesRange) o8.j.g(kVar2.p())).f10324a;
            r8.k e10 = this.f10816e.e(kVar2.P() + i10);
            p(kVar.I(), e10, i10);
            p(kVar2.I(), e10, kVar2.P());
            return e10;
        }

        private void s(r8.k kVar) {
            sa.k kVar2;
            Throwable th2;
            CloseableReference K0 = CloseableReference.K0(kVar.a());
            try {
                kVar2 = new sa.k(K0);
                try {
                    kVar2.O0();
                    o().b(kVar2, 1);
                    sa.k.k(kVar2);
                    CloseableReference.z(K0);
                } catch (Throwable th3) {
                    th2 = th3;
                    sa.k.k(kVar2);
                    CloseableReference.z(K0);
                    throw th2;
                }
            } catch (Throwable th4) {
                kVar2 = null;
                th2 = th4;
            }
        }

        @Override // com.facebook.imagepipeline.producers.c
        /* renamed from: r */
        public void h(sa.k kVar, int i10) {
            if (com.facebook.imagepipeline.producers.c.e(i10)) {
                return;
            }
            if (this.f10818g != null && kVar != null && kVar.p() != null) {
                try {
                    try {
                        s(q(this.f10818g, kVar));
                    } catch (IOException e10) {
                        p8.a.n("PartialDiskCacheProducer", "Error while merging image data", e10);
                        o().onFailure(e10);
                    }
                    ((na.b) this.f10814c.get()).b().s(this.f10815d);
                } finally {
                    kVar.close();
                    this.f10818g.close();
                }
            } else if (this.f10819h && com.facebook.imagepipeline.producers.c.m(i10, 8) && com.facebook.imagepipeline.producers.c.d(i10) && kVar != null && kVar.z() != fa.c.f23013d) {
                ((na.b) this.f10814c.get()).b().p(this.f10815d, kVar);
                o().b(kVar, i10);
            } else {
                o().b(kVar, i10);
            }
        }

        private c(Consumer consumer, Supplier supplier, CacheKey cacheKey, r8.i iVar, r8.a aVar, sa.k kVar, boolean z10) {
            super(consumer);
            this.f10814c = supplier;
            this.f10815d = cacheKey;
            this.f10816e = iVar;
            this.f10817f = aVar;
            this.f10818g = kVar;
            this.f10819h = z10;
        }
    }

    public r0(Supplier supplier, la.k kVar, r8.i iVar, r8.a aVar, w0 w0Var) {
        this.f10802a = supplier;
        this.f10803b = kVar;
        this.f10804c = iVar;
        this.f10805d = aVar;
        this.f10806e = w0Var;
    }

    private static Uri e(ImageRequest imageRequest) {
        return imageRequest.getSourceUri().buildUpon().appendQueryParameter("fresco_partial", "true").build();
    }

    static Map f(y0 y0Var, ProducerContext producerContext, boolean z10, int i10) {
        if (!y0Var.f(producerContext, "PartialDiskCacheProducer")) {
            return null;
        }
        if (z10) {
            return o8.f.of("cached_value_found", String.valueOf(z10), "encodedImageSize", String.valueOf(i10));
        }
        return o8.f.of("cached_value_found", String.valueOf(z10));
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static boolean g(u4.f fVar) {
        if (!fVar.l()) {
            if (!fVar.n() || !(fVar.i() instanceof CancellationException)) {
                return false;
            }
            return true;
        }
        return true;
    }

    private u4.d h(Consumer consumer, ProducerContext producerContext, CacheKey cacheKey) {
        return new a(producerContext.y(), producerContext, consumer, cacheKey);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void i(Consumer consumer, ProducerContext producerContext, CacheKey cacheKey, sa.k kVar) {
        this.f10806e.b(new c(consumer, this.f10802a, cacheKey, this.f10804c, this.f10805d, kVar, producerContext.I().isCacheEnabled(32)), producerContext);
    }

    private void j(AtomicBoolean atomicBoolean, ProducerContext producerContext) {
        producerContext.g(new b(atomicBoolean));
    }

    @Override // com.facebook.imagepipeline.producers.w0
    public void b(Consumer consumer, ProducerContext producerContext) {
        ImageRequest I = producerContext.I();
        boolean isCacheEnabled = producerContext.I().isCacheEnabled(16);
        boolean isCacheEnabled2 = producerContext.I().isCacheEnabled(32);
        if (!isCacheEnabled && !isCacheEnabled2) {
            this.f10806e.b(consumer, producerContext);
            return;
        }
        y0 y10 = producerContext.y();
        y10.d(producerContext, "PartialDiskCacheProducer");
        CacheKey encodedCacheKey = this.f10803b.getEncodedCacheKey(I, e(I), producerContext.a());
        if (!isCacheEnabled) {
            y10.j(producerContext, "PartialDiskCacheProducer", f(y10, producerContext, false, 0));
            i(consumer, producerContext, encodedCacheKey, null);
            return;
        }
        AtomicBoolean atomicBoolean = new AtomicBoolean(false);
        ((na.b) this.f10802a.get()).b().m(encodedCacheKey, atomicBoolean).e(h(consumer, producerContext, encodedCacheKey));
        j(atomicBoolean, producerContext);
    }
}
