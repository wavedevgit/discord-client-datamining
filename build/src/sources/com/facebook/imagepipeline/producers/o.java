package com.facebook.imagepipeline.producers;

import android.graphics.Bitmap;
import android.net.Uri;
import com.facebook.common.internal.Supplier;
import com.facebook.common.references.CloseableReference;
import com.facebook.imagepipeline.common.ImageDecodeOptions;
import com.facebook.imagepipeline.common.RotationOptions;
import com.facebook.imagepipeline.core.DownsampleMode;
import com.facebook.imagepipeline.producers.e0;
import com.facebook.imagepipeline.producers.o;
import com.facebook.imagepipeline.request.ImageRequest;
import com.facebook.imagepipeline.request.ImageRequestBuilder;
import java.util.HashMap;
import java.util.Map;
import java.util.concurrent.Executor;
import kotlin.Unit;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class o implements w0 {

    /* renamed from: m  reason: collision with root package name */
    public static final a f11463m = new a(null);

    /* renamed from: a  reason: collision with root package name */
    private final s8.a f11464a;

    /* renamed from: b  reason: collision with root package name */
    private final Executor f11465b;

    /* renamed from: c  reason: collision with root package name */
    private final ra.c f11466c;

    /* renamed from: d  reason: collision with root package name */
    private final ra.e f11467d;

    /* renamed from: e  reason: collision with root package name */
    private final DownsampleMode f11468e;

    /* renamed from: f  reason: collision with root package name */
    private final boolean f11469f;

    /* renamed from: g  reason: collision with root package name */
    private final boolean f11470g;

    /* renamed from: h  reason: collision with root package name */
    private final w0 f11471h;

    /* renamed from: i  reason: collision with root package name */
    private final int f11472i;

    /* renamed from: j  reason: collision with root package name */
    private final oa.a f11473j;

    /* renamed from: k  reason: collision with root package name */
    private final Runnable f11474k;

    /* renamed from: l  reason: collision with root package name */
    private final Supplier f11475l;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        /* JADX INFO: Access modifiers changed from: private */
        public final boolean b(ta.k kVar, ImageDecodeOptions imageDecodeOptions) {
            if (kVar.getWidth() * kVar.getHeight() * db.d.h(imageDecodeOptions.f11051h) > 104857600) {
                return true;
            }
            return false;
        }

        private a() {
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    private final class b extends d {

        /* renamed from: k  reason: collision with root package name */
        final /* synthetic */ o f11476k;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public b(o oVar, Consumer consumer, ProducerContext producerContext, boolean z10, int i10) {
            super(oVar, consumer, producerContext, z10, i10);
            Intrinsics.checkNotNullParameter(consumer, "consumer");
            Intrinsics.checkNotNullParameter(producerContext, "producerContext");
            this.f11476k = oVar;
        }

        @Override // com.facebook.imagepipeline.producers.o.d
        protected synchronized boolean I(ta.k kVar, int i10) {
            boolean I;
            if (com.facebook.imagepipeline.producers.c.e(i10)) {
                I = false;
            } else {
                I = super.I(kVar, i10);
            }
            return I;
        }

        @Override // com.facebook.imagepipeline.producers.o.d
        protected int w(ta.k encodedImage) {
            Intrinsics.checkNotNullParameter(encodedImage, "encodedImage");
            return encodedImage.Q();
        }

        @Override // com.facebook.imagepipeline.producers.o.d
        protected ta.o y() {
            ta.o d10 = ta.n.d(0, false, false);
            Intrinsics.checkNotNullExpressionValue(d10, "of(...)");
            return d10;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    private final class c extends d {

        /* renamed from: k  reason: collision with root package name */
        private final ra.f f11477k;

        /* renamed from: l  reason: collision with root package name */
        private final ra.e f11478l;

        /* renamed from: m  reason: collision with root package name */
        final /* synthetic */ o f11479m;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public c(o oVar, Consumer consumer, ProducerContext producerContext, ra.f progressiveJpegParser, ra.e progressiveJpegConfig, boolean z10, int i10) {
            super(oVar, consumer, producerContext, z10, i10);
            Intrinsics.checkNotNullParameter(consumer, "consumer");
            Intrinsics.checkNotNullParameter(producerContext, "producerContext");
            Intrinsics.checkNotNullParameter(progressiveJpegParser, "progressiveJpegParser");
            Intrinsics.checkNotNullParameter(progressiveJpegConfig, "progressiveJpegConfig");
            this.f11479m = oVar;
            this.f11477k = progressiveJpegParser;
            this.f11478l = progressiveJpegConfig;
            H(0);
        }

        @Override // com.facebook.imagepipeline.producers.o.d
        protected synchronized boolean I(ta.k kVar, int i10) {
            if (kVar == null) {
                return false;
            }
            try {
                boolean I = super.I(kVar, i10);
                if (!com.facebook.imagepipeline.producers.c.e(i10)) {
                    if (com.facebook.imagepipeline.producers.c.m(i10, 8)) {
                    }
                    return I;
                }
                if (!com.facebook.imagepipeline.producers.c.m(i10, 4) && ta.k.H0(kVar) && kVar.z() == ga.b.f25382b) {
                    if (!this.f11477k.g(kVar)) {
                        return false;
                    }
                    int d10 = this.f11477k.d();
                    if (d10 <= x()) {
                        return false;
                    }
                    if (d10 < this.f11478l.a(x()) && !this.f11477k.e()) {
                        return false;
                    }
                    H(d10);
                }
                return I;
            } catch (Throwable th2) {
                throw th2;
            }
        }

        @Override // com.facebook.imagepipeline.producers.o.d
        protected int w(ta.k encodedImage) {
            Intrinsics.checkNotNullParameter(encodedImage, "encodedImage");
            return this.f11477k.c();
        }

        @Override // com.facebook.imagepipeline.producers.o.d
        protected ta.o y() {
            ta.o b10 = this.f11478l.b(this.f11477k.d());
            Intrinsics.checkNotNullExpressionValue(b10, "getQualityInfo(...)");
            return b10;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public abstract class d extends s {

        /* renamed from: c  reason: collision with root package name */
        private final ProducerContext f11480c;

        /* renamed from: d  reason: collision with root package name */
        private final String f11481d;

        /* renamed from: e  reason: collision with root package name */
        private final y0 f11482e;

        /* renamed from: f  reason: collision with root package name */
        private final ImageDecodeOptions f11483f;

        /* renamed from: g  reason: collision with root package name */
        private boolean f11484g;

        /* renamed from: h  reason: collision with root package name */
        private final e0 f11485h;

        /* renamed from: i  reason: collision with root package name */
        private int f11486i;

        /* renamed from: j  reason: collision with root package name */
        final /* synthetic */ o f11487j;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
        public static final class a extends f {

            /* renamed from: b  reason: collision with root package name */
            final /* synthetic */ boolean f11489b;

            a(boolean z10) {
                this.f11489b = z10;
            }

            @Override // com.facebook.imagepipeline.producers.f, com.facebook.imagepipeline.producers.x0
            public void a() {
                if (d.this.f11480c.z()) {
                    d.this.f11485h.h();
                }
            }

            @Override // com.facebook.imagepipeline.producers.x0
            public void b() {
                if (this.f11489b) {
                    d.this.z();
                }
            }
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public d(final o oVar, Consumer consumer, ProducerContext producerContext, boolean z10, final int i10) {
            super(consumer);
            Intrinsics.checkNotNullParameter(consumer, "consumer");
            Intrinsics.checkNotNullParameter(producerContext, "producerContext");
            this.f11487j = oVar;
            this.f11480c = producerContext;
            this.f11481d = "ProgressiveDecoder";
            this.f11482e = producerContext.y();
            ImageDecodeOptions imageDecodeOptions = producerContext.I().getImageDecodeOptions();
            Intrinsics.checkNotNullExpressionValue(imageDecodeOptions, "getImageDecodeOptions(...)");
            this.f11483f = imageDecodeOptions;
            this.f11485h = new e0(oVar.f(), new e0.d() { // from class: com.facebook.imagepipeline.producers.p
                @Override // com.facebook.imagepipeline.producers.e0.d
                public final void a(ta.k kVar, int i11) {
                    o.d.q(o.d.this, oVar, i10, kVar, i11);
                }
            }, imageDecodeOptions.f11044a);
            producerContext.h(new a(z10));
        }

        private final void A(Throwable th2) {
            D(true);
            o().onFailure(th2);
        }

        private final void B(ta.e eVar, int i10) {
            CloseableReference b10 = this.f11487j.c().b(eVar);
            try {
                D(com.facebook.imagepipeline.producers.c.d(i10));
                o().b(b10, i10);
            } finally {
                CloseableReference.z(b10);
            }
        }

        private final ta.e C(ta.k kVar, int i10, ta.o oVar) {
            boolean z10;
            if (this.f11487j.h() != null && ((Boolean) this.f11487j.i().get()).booleanValue()) {
                z10 = true;
            } else {
                z10 = false;
            }
            try {
                return this.f11487j.g().a(kVar, i10, oVar, this.f11483f);
            } catch (OutOfMemoryError e10) {
                if (z10) {
                    Runnable h10 = this.f11487j.h();
                    if (h10 != null) {
                        h10.run();
                    }
                    System.gc();
                    return this.f11487j.g().a(kVar, i10, oVar, this.f11483f);
                }
                throw e10;
            }
        }

        private final void D(boolean z10) {
            synchronized (this) {
                if (z10) {
                    if (!this.f11484g) {
                        o().c(1.0f);
                        this.f11484g = true;
                        Unit unit = Unit.f31987a;
                        this.f11485h.c();
                    }
                }
            }
        }

        private final void E(ta.k kVar) {
            if (kVar.z() != ga.b.f25382b) {
                return;
            }
            kVar.w1(ab.a.c(kVar, db.d.h(this.f11483f.f11051h), 104857600));
        }

        private final void G(ta.k kVar, ta.e eVar, int i10) {
            this.f11480c.p("encoded_width", Integer.valueOf(kVar.getWidth()));
            this.f11480c.p("encoded_height", Integer.valueOf(kVar.getHeight()));
            this.f11480c.p("encoded_size", Integer.valueOf(kVar.Q()));
            this.f11480c.p("image_color_space", kVar.s());
            if (eVar instanceof ta.d) {
                this.f11480c.p("bitmap_config", String.valueOf(((ta.d) eVar).Q1().getConfig()));
            }
            if (eVar != null) {
                eVar.J(this.f11480c.getExtras());
            }
            this.f11480c.p("last_scan_num", Integer.valueOf(i10));
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final void q(d this$0, o this$1, int i10, ta.k kVar, int i11) {
            String str;
            Intrinsics.checkNotNullParameter(this$0, "this$0");
            Intrinsics.checkNotNullParameter(this$1, "this$1");
            if (kVar != null) {
                ImageRequest I = this$0.f11480c.I();
                this$0.f11480c.p("image_format", kVar.z().a());
                Uri sourceUri = I.getSourceUri();
                if (sourceUri != null) {
                    str = sourceUri.toString();
                } else {
                    str = null;
                }
                kVar.x1(str);
                DownsampleMode downsampleOverride = I.getDownsampleOverride();
                if (downsampleOverride == null) {
                    downsampleOverride = this$1.e();
                }
                boolean m10 = com.facebook.imagepipeline.producers.c.m(i11, 16);
                if ((downsampleOverride == DownsampleMode.f11079d || (downsampleOverride == DownsampleMode.f11080e && !m10)) && (this$1.d() || !x8.f.p(I.getSourceUri()))) {
                    RotationOptions rotationOptions = I.getRotationOptions();
                    Intrinsics.checkNotNullExpressionValue(rotationOptions, "getRotationOptions(...)");
                    kVar.w1(ab.a.b(rotationOptions, I.getResizeOptions(), kVar, i10));
                }
                if (this$0.f11480c.i().G().i()) {
                    this$0.E(kVar);
                }
                this$0.u(kVar, i11, this$0.f11486i);
            }
        }

        /* JADX WARN: Removed duplicated region for block: B:49:0x0138  */
        /*
            Code decompiled incorrectly, please refer to instructions dump.
            To view partially-correct add '--show-bad-code' argument
        */
        private final void u(ta.k r17, int r18, int r19) {
            /*
                Method dump skipped, instructions count: 425
                To view this dump add '--comments-level debug' option
            */
            throw new UnsupportedOperationException("Method not decompiled: com.facebook.imagepipeline.producers.o.d.u(ta.k, int, int):void");
        }

        private final Map v(ta.e eVar, long j10, ta.o oVar, boolean z10, String str, String str2, String str3, String str4) {
            Map extras;
            Object obj;
            String str5 = null;
            if (!this.f11482e.f(this.f11480c, "DecodeProducer")) {
                return null;
            }
            String valueOf = String.valueOf(j10);
            String valueOf2 = String.valueOf(oVar.b());
            String valueOf3 = String.valueOf(z10);
            if (eVar != null && (extras = eVar.getExtras()) != null && (obj = extras.get("non_fatal_decode_error")) != null) {
                str5 = obj.toString();
            }
            if (eVar instanceof ta.f) {
                String str6 = str5;
                Bitmap Q1 = ((ta.f) eVar).Q1();
                Intrinsics.checkNotNullExpressionValue(Q1, "getUnderlyingBitmap(...)");
                String str7 = Q1.getWidth() + "x" + Q1.getHeight();
                HashMap hashMap = new HashMap(8);
                hashMap.put("bitmapSize", str7);
                hashMap.put("queueTime", valueOf);
                hashMap.put("hasGoodQuality", valueOf2);
                hashMap.put("isFinal", valueOf3);
                hashMap.put("encodedImageSize", str2);
                hashMap.put("imageFormat", str);
                hashMap.put("requestedImageSize", str3);
                hashMap.put("sampleSize", str4);
                int byteCount = Q1.getByteCount();
                StringBuilder sb2 = new StringBuilder();
                sb2.append(byteCount);
                hashMap.put("byteCount", sb2.toString());
                if (str6 != null) {
                    hashMap.put("non_fatal_decode_error", str6);
                }
                return p8.f.a(hashMap);
            }
            String str8 = str5;
            HashMap hashMap2 = new HashMap(7);
            hashMap2.put("queueTime", valueOf);
            hashMap2.put("hasGoodQuality", valueOf2);
            hashMap2.put("isFinal", valueOf3);
            hashMap2.put("encodedImageSize", str2);
            hashMap2.put("imageFormat", str);
            hashMap2.put("requestedImageSize", str3);
            hashMap2.put("sampleSize", str4);
            if (str8 != null) {
                hashMap2.put("non_fatal_decode_error", str8);
            }
            return p8.f.a(hashMap2);
        }

        /* JADX INFO: Access modifiers changed from: private */
        public final void z() {
            D(true);
            o().a();
        }

        @Override // com.facebook.imagepipeline.producers.c
        /* renamed from: F */
        public void h(ta.k kVar, int i10) {
            if (!za.b.d()) {
                boolean d10 = com.facebook.imagepipeline.producers.c.d(i10);
                if (d10) {
                    if (kVar == null) {
                        boolean areEqual = Intrinsics.areEqual(this.f11480c.Z("cached_value_found"), Boolean.TRUE);
                        if (!this.f11480c.i().G().h() || this.f11480c.z0() == ImageRequest.RequestLevel.FULL_FETCH || areEqual) {
                            A(new x8.a("Encoded image is null."));
                            return;
                        }
                    } else if (!kVar.G0()) {
                        A(new x8.a("Encoded image is not valid."));
                        return;
                    }
                }
                if (I(kVar, i10)) {
                    boolean m10 = com.facebook.imagepipeline.producers.c.m(i10, 4);
                    if (!d10 && !m10 && !this.f11480c.z()) {
                        return;
                    }
                    this.f11485h.h();
                    return;
                }
                return;
            }
            za.b.a("DecodeProducer#onNewResultImpl");
            try {
                boolean d11 = com.facebook.imagepipeline.producers.c.d(i10);
                if (d11) {
                    if (kVar == null) {
                        boolean areEqual2 = Intrinsics.areEqual(this.f11480c.Z("cached_value_found"), Boolean.TRUE);
                        if (this.f11480c.i().G().h()) {
                            if (this.f11480c.z0() != ImageRequest.RequestLevel.FULL_FETCH) {
                                if (areEqual2) {
                                }
                            }
                        }
                        A(new x8.a("Encoded image is null."));
                        za.b.b();
                        return;
                    } else if (!kVar.G0()) {
                        A(new x8.a("Encoded image is not valid."));
                        za.b.b();
                        return;
                    }
                }
                if (!I(kVar, i10)) {
                    za.b.b();
                    return;
                }
                boolean m11 = com.facebook.imagepipeline.producers.c.m(i10, 4);
                if (d11 || m11 || this.f11480c.z()) {
                    this.f11485h.h();
                }
                Unit unit = Unit.f31987a;
                za.b.b();
            } catch (Throwable th2) {
                za.b.b();
                throw th2;
            }
        }

        protected final void H(int i10) {
            this.f11486i = i10;
        }

        protected boolean I(ta.k kVar, int i10) {
            return this.f11485h.k(kVar, i10);
        }

        @Override // com.facebook.imagepipeline.producers.s, com.facebook.imagepipeline.producers.c
        public void f() {
            z();
        }

        @Override // com.facebook.imagepipeline.producers.s, com.facebook.imagepipeline.producers.c
        public void g(Throwable t10) {
            Intrinsics.checkNotNullParameter(t10, "t");
            A(t10);
        }

        /* JADX INFO: Access modifiers changed from: protected */
        @Override // com.facebook.imagepipeline.producers.s, com.facebook.imagepipeline.producers.c
        public void i(float f10) {
            super.i(f10 * 0.99f);
        }

        protected abstract int w(ta.k kVar);

        protected final int x() {
            return this.f11486i;
        }

        protected abstract ta.o y();
    }

    public o(s8.a byteArrayPool, Executor executor, ra.c imageDecoder, ra.e progressiveJpegConfig, DownsampleMode downsampleMode, boolean z10, boolean z11, w0 inputProducer, int i10, oa.a closeableReferenceFactory, Runnable runnable, Supplier recoverFromDecoderOOM) {
        Intrinsics.checkNotNullParameter(byteArrayPool, "byteArrayPool");
        Intrinsics.checkNotNullParameter(executor, "executor");
        Intrinsics.checkNotNullParameter(imageDecoder, "imageDecoder");
        Intrinsics.checkNotNullParameter(progressiveJpegConfig, "progressiveJpegConfig");
        Intrinsics.checkNotNullParameter(downsampleMode, "downsampleMode");
        Intrinsics.checkNotNullParameter(inputProducer, "inputProducer");
        Intrinsics.checkNotNullParameter(closeableReferenceFactory, "closeableReferenceFactory");
        Intrinsics.checkNotNullParameter(recoverFromDecoderOOM, "recoverFromDecoderOOM");
        this.f11464a = byteArrayPool;
        this.f11465b = executor;
        this.f11466c = imageDecoder;
        this.f11467d = progressiveJpegConfig;
        this.f11468e = downsampleMode;
        this.f11469f = z10;
        this.f11470g = z11;
        this.f11471h = inputProducer;
        this.f11472i = i10;
        this.f11473j = closeableReferenceFactory;
        this.f11474k = runnable;
        this.f11475l = recoverFromDecoderOOM;
    }

    @Override // com.facebook.imagepipeline.producers.w0
    public void b(Consumer consumer, ProducerContext context) {
        Consumer cVar;
        o oVar;
        ProducerContext producerContext;
        Consumer cVar2;
        Intrinsics.checkNotNullParameter(consumer, "consumer");
        Intrinsics.checkNotNullParameter(context, "context");
        if (!za.b.d()) {
            ImageRequest I = context.I();
            if (!x8.f.p(I.getSourceUri()) && !ImageRequestBuilder.s(I.getSourceUri())) {
                cVar2 = new b(this, consumer, context, this.f11470g, this.f11472i);
                oVar = this;
                producerContext = context;
            } else {
                oVar = this;
                producerContext = context;
                cVar2 = new c(oVar, consumer, producerContext, new ra.f(oVar.f11464a), oVar.f11467d, oVar.f11470g, oVar.f11472i);
            }
            oVar.f11471h.b(cVar2, producerContext);
            return;
        }
        za.b.a("DecodeProducer#produceResults");
        try {
            ImageRequest I2 = context.I();
            if (!x8.f.p(I2.getSourceUri()) && !ImageRequestBuilder.s(I2.getSourceUri())) {
                cVar = new b(this, consumer, context, this.f11470g, this.f11472i);
            } else {
                cVar = new c(this, consumer, context, new ra.f(this.f11464a), this.f11467d, this.f11470g, this.f11472i);
            }
            this.f11471h.b(cVar, context);
            Unit unit = Unit.f31987a;
            za.b.b();
        } catch (Throwable th2) {
            za.b.b();
            throw th2;
        }
    }

    public final oa.a c() {
        return this.f11473j;
    }

    public final boolean d() {
        return this.f11469f;
    }

    public final DownsampleMode e() {
        return this.f11468e;
    }

    public final Executor f() {
        return this.f11465b;
    }

    public final ra.c g() {
        return this.f11466c;
    }

    public final Runnable h() {
        return this.f11474k;
    }

    public final Supplier i() {
        return this.f11475l;
    }
}
