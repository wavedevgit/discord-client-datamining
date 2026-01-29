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
    private final Supplier f11921a;

    /* renamed from: b  reason: collision with root package name */
    private final la.k f11922b;

    /* renamed from: c  reason: collision with root package name */
    private final r8.i f11923c;

    /* renamed from: d  reason: collision with root package name */
    private final r8.a f11924d;

    /* renamed from: e  reason: collision with root package name */
    private final w0 f11925e;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public class a implements u4.d {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ y0 f11926a;

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ ProducerContext f11927b;

        /* renamed from: c  reason: collision with root package name */
        final /* synthetic */ Consumer f11928c;

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ CacheKey f11929d;

        a(y0 y0Var, ProducerContext producerContext, Consumer consumer, CacheKey cacheKey) {
            this.f11926a = y0Var;
            this.f11927b = producerContext;
            this.f11928c = consumer;
            this.f11929d = cacheKey;
        }

        @Override // u4.d
        /* renamed from: b */
        public Void a(u4.f fVar) {
            if (r0.g(fVar)) {
                this.f11926a.c(this.f11927b, "PartialDiskCacheProducer", null);
                this.f11928c.a();
            } else if (fVar.n()) {
                this.f11926a.k(this.f11927b, "PartialDiskCacheProducer", fVar.i(), null);
                r0.this.i(this.f11928c, this.f11927b, this.f11929d, null);
            } else {
                sa.k kVar = (sa.k) fVar.j();
                if (kVar != null) {
                    y0 y0Var = this.f11926a;
                    ProducerContext producerContext = this.f11927b;
                    y0Var.j(producerContext, "PartialDiskCacheProducer", r0.f(y0Var, producerContext, true, kVar.C0()));
                    BytesRange g10 = BytesRange.g(kVar.C0() - 1);
                    kVar.x1(g10);
                    int C0 = kVar.C0();
                    ImageRequest V = this.f11927b.V();
                    if (g10.c(V.getBytesRange())) {
                        this.f11927b.n("disk", "partial");
                        this.f11926a.b(this.f11927b, "PartialDiskCacheProducer", true);
                        this.f11928c.b(kVar, 9);
                    } else {
                        this.f11928c.b(kVar, 8);
                        r0.this.i(this.f11928c, new d1(ImageRequestBuilder.b(V).z(BytesRange.d(C0 - 1)).a(), this.f11927b), this.f11929d, kVar);
                    }
                } else {
                    y0 y0Var2 = this.f11926a;
                    ProducerContext producerContext2 = this.f11927b;
                    y0Var2.j(producerContext2, "PartialDiskCacheProducer", r0.f(y0Var2, producerContext2, false, 0));
                    r0.this.i(this.f11928c, this.f11927b, this.f11929d, kVar);
                }
            }
            return null;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public class b extends f {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ AtomicBoolean f11931a;

        b(AtomicBoolean atomicBoolean) {
            this.f11931a = atomicBoolean;
        }

        @Override // com.facebook.imagepipeline.producers.x0
        public void b() {
            this.f11931a.set(true);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static class c extends s {

        /* renamed from: c  reason: collision with root package name */
        private final Supplier f11933c;

        /* renamed from: d  reason: collision with root package name */
        private final CacheKey f11934d;

        /* renamed from: e  reason: collision with root package name */
        private final r8.i f11935e;

        /* renamed from: f  reason: collision with root package name */
        private final r8.a f11936f;

        /* renamed from: g  reason: collision with root package name */
        private final sa.k f11937g;

        /* renamed from: h  reason: collision with root package name */
        private final boolean f11938h;

        private void p(InputStream inputStream, OutputStream outputStream, int i10) {
            byte[] bArr = (byte[]) this.f11936f.get(16384);
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
                    this.f11936f.release(bArr);
                }
            }
            if (i11 <= 0) {
                return;
            }
            throw new IOException(String.format(null, "Failed to read %d bytes - finished %d short", Integer.valueOf(i10), Integer.valueOf(i11)));
        }

        private r8.k q(sa.k kVar, sa.k kVar2) {
            int i10 = ((BytesRange) o8.j.g(kVar2.B())).f11443a;
            r8.k e10 = this.f11935e.e(kVar2.C0() + i10);
            p(kVar.V(), e10, i10);
            p(kVar2.V(), e10, kVar2.C0());
            return e10;
        }

        private void s(r8.k kVar) {
            sa.k kVar2;
            Throwable th2;
            CloseableReference J0 = CloseableReference.J0(kVar.a());
            try {
                kVar2 = new sa.k(J0);
                try {
                    kVar2.U0();
                    o().b(kVar2, 1);
                    sa.k.l(kVar2);
                    CloseableReference.N(J0);
                } catch (Throwable th3) {
                    th2 = th3;
                    sa.k.l(kVar2);
                    CloseableReference.N(J0);
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
            if (this.f11937g != null && kVar != null && kVar.B() != null) {
                try {
                    try {
                        s(q(this.f11937g, kVar));
                    } catch (IOException e10) {
                        p8.a.n("PartialDiskCacheProducer", "Error while merging image data", e10);
                        o().onFailure(e10);
                    }
                    ((na.b) this.f11933c.get()).b().s(this.f11934d);
                } finally {
                    kVar.close();
                    this.f11937g.close();
                }
            } else if (this.f11938h && com.facebook.imagepipeline.producers.c.m(i10, 8) && com.facebook.imagepipeline.producers.c.d(i10) && kVar != null && kVar.L() != fa.c.f24884d) {
                ((na.b) this.f11933c.get()).b().p(this.f11934d, kVar);
                o().b(kVar, i10);
            } else {
                o().b(kVar, i10);
            }
        }

        private c(Consumer consumer, Supplier supplier, CacheKey cacheKey, r8.i iVar, r8.a aVar, sa.k kVar, boolean z10) {
            super(consumer);
            this.f11933c = supplier;
            this.f11934d = cacheKey;
            this.f11935e = iVar;
            this.f11936f = aVar;
            this.f11937g = kVar;
            this.f11938h = z10;
        }
    }

    public r0(Supplier supplier, la.k kVar, r8.i iVar, r8.a aVar, w0 w0Var) {
        this.f11921a = supplier;
        this.f11922b = kVar;
        this.f11923c = iVar;
        this.f11924d = aVar;
        this.f11925e = w0Var;
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
        return new a(producerContext.F(), producerContext, consumer, cacheKey);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void i(Consumer consumer, ProducerContext producerContext, CacheKey cacheKey, sa.k kVar) {
        this.f11925e.b(new c(consumer, this.f11921a, cacheKey, this.f11923c, this.f11924d, kVar, producerContext.V().isCacheEnabled(32)), producerContext);
    }

    private void j(AtomicBoolean atomicBoolean, ProducerContext producerContext) {
        producerContext.h(new b(atomicBoolean));
    }

    @Override // com.facebook.imagepipeline.producers.w0
    public void b(Consumer consumer, ProducerContext producerContext) {
        ImageRequest V = producerContext.V();
        boolean isCacheEnabled = producerContext.V().isCacheEnabled(16);
        boolean isCacheEnabled2 = producerContext.V().isCacheEnabled(32);
        if (!isCacheEnabled && !isCacheEnabled2) {
            this.f11925e.b(consumer, producerContext);
            return;
        }
        y0 F = producerContext.F();
        F.d(producerContext, "PartialDiskCacheProducer");
        CacheKey encodedCacheKey = this.f11922b.getEncodedCacheKey(V, e(V), producerContext.a());
        if (!isCacheEnabled) {
            F.j(producerContext, "PartialDiskCacheProducer", f(F, producerContext, false, 0));
            i(consumer, producerContext, encodedCacheKey, null);
            return;
        }
        AtomicBoolean atomicBoolean = new AtomicBoolean(false);
        ((na.b) this.f11921a.get()).b().m(encodedCacheKey, atomicBoolean).e(h(consumer, producerContext, encodedCacheKey));
        j(atomicBoolean, producerContext);
    }
}
