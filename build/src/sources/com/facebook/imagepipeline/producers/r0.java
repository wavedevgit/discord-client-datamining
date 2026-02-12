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
    private final Supplier f11520a;

    /* renamed from: b  reason: collision with root package name */
    private final ma.k f11521b;

    /* renamed from: c  reason: collision with root package name */
    private final s8.i f11522c;

    /* renamed from: d  reason: collision with root package name */
    private final s8.a f11523d;

    /* renamed from: e  reason: collision with root package name */
    private final w0 f11524e;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public class a implements u4.d {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ y0 f11525a;

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ ProducerContext f11526b;

        /* renamed from: c  reason: collision with root package name */
        final /* synthetic */ Consumer f11527c;

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ CacheKey f11528d;

        a(y0 y0Var, ProducerContext producerContext, Consumer consumer, CacheKey cacheKey) {
            this.f11525a = y0Var;
            this.f11526b = producerContext;
            this.f11527c = consumer;
            this.f11528d = cacheKey;
        }

        @Override // u4.d
        /* renamed from: b */
        public Void a(u4.f fVar) {
            if (r0.g(fVar)) {
                this.f11525a.c(this.f11526b, "PartialDiskCacheProducer", null);
                this.f11527c.a();
            } else if (fVar.n()) {
                this.f11525a.k(this.f11526b, "PartialDiskCacheProducer", fVar.i(), null);
                r0.this.i(this.f11527c, this.f11526b, this.f11528d, null);
            } else {
                ta.k kVar = (ta.k) fVar.j();
                if (kVar != null) {
                    y0 y0Var = this.f11525a;
                    ProducerContext producerContext = this.f11526b;
                    y0Var.j(producerContext, "PartialDiskCacheProducer", r0.f(y0Var, producerContext, true, kVar.Q()));
                    BytesRange g10 = BytesRange.g(kVar.Q() - 1);
                    kVar.V0(g10);
                    int Q = kVar.Q();
                    ImageRequest I = this.f11526b.I();
                    if (g10.c(I.getBytesRange())) {
                        this.f11526b.m("disk", "partial");
                        this.f11525a.b(this.f11526b, "PartialDiskCacheProducer", true);
                        this.f11527c.b(kVar, 9);
                    } else {
                        this.f11527c.b(kVar, 8);
                        r0.this.i(this.f11527c, new d1(ImageRequestBuilder.b(I).z(BytesRange.d(Q - 1)).a(), this.f11526b), this.f11528d, kVar);
                    }
                } else {
                    y0 y0Var2 = this.f11525a;
                    ProducerContext producerContext2 = this.f11526b;
                    y0Var2.j(producerContext2, "PartialDiskCacheProducer", r0.f(y0Var2, producerContext2, false, 0));
                    r0.this.i(this.f11527c, this.f11526b, this.f11528d, kVar);
                }
            }
            return null;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public class b extends f {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ AtomicBoolean f11530a;

        b(AtomicBoolean atomicBoolean) {
            this.f11530a = atomicBoolean;
        }

        @Override // com.facebook.imagepipeline.producers.x0
        public void b() {
            this.f11530a.set(true);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static class c extends s {

        /* renamed from: c  reason: collision with root package name */
        private final Supplier f11532c;

        /* renamed from: d  reason: collision with root package name */
        private final CacheKey f11533d;

        /* renamed from: e  reason: collision with root package name */
        private final s8.i f11534e;

        /* renamed from: f  reason: collision with root package name */
        private final s8.a f11535f;

        /* renamed from: g  reason: collision with root package name */
        private final ta.k f11536g;

        /* renamed from: h  reason: collision with root package name */
        private final boolean f11537h;

        private void p(InputStream inputStream, OutputStream outputStream, int i10) {
            byte[] bArr = (byte[]) this.f11535f.get(16384);
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
                    this.f11535f.release(bArr);
                }
            }
            if (i11 <= 0) {
                return;
            }
            throw new IOException(String.format(null, "Failed to read %d bytes - finished %d short", Integer.valueOf(i10), Integer.valueOf(i11)));
        }

        private s8.k q(ta.k kVar, ta.k kVar2) {
            int i10 = ((BytesRange) p8.j.g(kVar2.p())).f11042a;
            s8.k e10 = this.f11534e.e(kVar2.Q() + i10);
            p(kVar.I(), e10, i10);
            p(kVar2.I(), e10, kVar2.Q());
            return e10;
        }

        private void s(s8.k kVar) {
            ta.k kVar2;
            Throwable th2;
            CloseableReference E0 = CloseableReference.E0(kVar.a());
            try {
                kVar2 = new ta.k(E0);
                try {
                    kVar2.L0();
                    o().b(kVar2, 1);
                    ta.k.i(kVar2);
                    CloseableReference.z(E0);
                } catch (Throwable th3) {
                    th2 = th3;
                    ta.k.i(kVar2);
                    CloseableReference.z(E0);
                    throw th2;
                }
            } catch (Throwable th4) {
                kVar2 = null;
                th2 = th4;
            }
        }

        @Override // com.facebook.imagepipeline.producers.c
        /* renamed from: r */
        public void h(ta.k kVar, int i10) {
            if (com.facebook.imagepipeline.producers.c.e(i10)) {
                return;
            }
            if (this.f11536g != null && kVar != null && kVar.p() != null) {
                try {
                    try {
                        s(q(this.f11536g, kVar));
                    } catch (IOException e10) {
                        q8.a.n("PartialDiskCacheProducer", "Error while merging image data", e10);
                        o().onFailure(e10);
                    }
                    ((oa.b) this.f11532c.get()).b().s(this.f11533d);
                } finally {
                    kVar.close();
                    this.f11536g.close();
                }
            } else if (this.f11537h && com.facebook.imagepipeline.producers.c.m(i10, 8) && com.facebook.imagepipeline.producers.c.d(i10) && kVar != null && kVar.z() != ga.c.f25399d) {
                ((oa.b) this.f11532c.get()).b().p(this.f11533d, kVar);
                o().b(kVar, i10);
            } else {
                o().b(kVar, i10);
            }
        }

        private c(Consumer consumer, Supplier supplier, CacheKey cacheKey, s8.i iVar, s8.a aVar, ta.k kVar, boolean z10) {
            super(consumer);
            this.f11532c = supplier;
            this.f11533d = cacheKey;
            this.f11534e = iVar;
            this.f11535f = aVar;
            this.f11536g = kVar;
            this.f11537h = z10;
        }
    }

    public r0(Supplier supplier, ma.k kVar, s8.i iVar, s8.a aVar, w0 w0Var) {
        this.f11520a = supplier;
        this.f11521b = kVar;
        this.f11522c = iVar;
        this.f11523d = aVar;
        this.f11524e = w0Var;
    }

    private static Uri e(ImageRequest imageRequest) {
        return imageRequest.getSourceUri().buildUpon().appendQueryParameter("fresco_partial", "true").build();
    }

    static Map f(y0 y0Var, ProducerContext producerContext, boolean z10, int i10) {
        if (!y0Var.f(producerContext, "PartialDiskCacheProducer")) {
            return null;
        }
        if (z10) {
            return p8.f.of("cached_value_found", String.valueOf(z10), "encodedImageSize", String.valueOf(i10));
        }
        return p8.f.of("cached_value_found", String.valueOf(z10));
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
    public void i(Consumer consumer, ProducerContext producerContext, CacheKey cacheKey, ta.k kVar) {
        this.f11524e.b(new c(consumer, this.f11520a, cacheKey, this.f11522c, this.f11523d, kVar, producerContext.I().isCacheEnabled(32)), producerContext);
    }

    private void j(AtomicBoolean atomicBoolean, ProducerContext producerContext) {
        producerContext.h(new b(atomicBoolean));
    }

    @Override // com.facebook.imagepipeline.producers.w0
    public void b(Consumer consumer, ProducerContext producerContext) {
        ImageRequest I = producerContext.I();
        boolean isCacheEnabled = producerContext.I().isCacheEnabled(16);
        boolean isCacheEnabled2 = producerContext.I().isCacheEnabled(32);
        if (!isCacheEnabled && !isCacheEnabled2) {
            this.f11524e.b(consumer, producerContext);
            return;
        }
        y0 y10 = producerContext.y();
        y10.d(producerContext, "PartialDiskCacheProducer");
        CacheKey encodedCacheKey = this.f11521b.getEncodedCacheKey(I, e(I), producerContext.a());
        if (!isCacheEnabled) {
            y10.j(producerContext, "PartialDiskCacheProducer", f(y10, producerContext, false, 0));
            i(consumer, producerContext, encodedCacheKey, null);
            return;
        }
        AtomicBoolean atomicBoolean = new AtomicBoolean(false);
        ((oa.b) this.f11520a.get()).b().m(encodedCacheKey, atomicBoolean).e(h(consumer, producerContext, encodedCacheKey));
        j(atomicBoolean, producerContext);
    }
}
