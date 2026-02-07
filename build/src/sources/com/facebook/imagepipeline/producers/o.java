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
    public static final a f10746m = new a(null);

    /* renamed from: a  reason: collision with root package name */
    private final r8.a f10747a;

    /* renamed from: b  reason: collision with root package name */
    private final Executor f10748b;

    /* renamed from: c  reason: collision with root package name */
    private final qa.c f10749c;

    /* renamed from: d  reason: collision with root package name */
    private final qa.e f10750d;

    /* renamed from: e  reason: collision with root package name */
    private final DownsampleMode f10751e;

    /* renamed from: f  reason: collision with root package name */
    private final boolean f10752f;

    /* renamed from: g  reason: collision with root package name */
    private final boolean f10753g;

    /* renamed from: h  reason: collision with root package name */
    private final w0 f10754h;

    /* renamed from: i  reason: collision with root package name */
    private final int f10755i;

    /* renamed from: j  reason: collision with root package name */
    private final na.a f10756j;

    /* renamed from: k  reason: collision with root package name */
    private final Runnable f10757k;

    /* renamed from: l  reason: collision with root package name */
    private final Supplier f10758l;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        /* JADX INFO: Access modifiers changed from: private */
        public final boolean b(sa.k kVar, ImageDecodeOptions imageDecodeOptions) {
            if (kVar.getWidth() * kVar.getHeight() * cb.d.h(imageDecodeOptions.f10334h) > 104857600) {
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
        final /* synthetic */ o f10759k;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public b(o oVar, Consumer consumer, ProducerContext producerContext, boolean z10, int i10) {
            super(oVar, consumer, producerContext, z10, i10);
            Intrinsics.checkNotNullParameter(consumer, "consumer");
            Intrinsics.checkNotNullParameter(producerContext, "producerContext");
            this.f10759k = oVar;
        }

        @Override // com.facebook.imagepipeline.producers.o.d
        protected synchronized boolean I(sa.k kVar, int i10) {
            boolean I;
            if (com.facebook.imagepipeline.producers.c.e(i10)) {
                I = false;
            } else {
                I = super.I(kVar, i10);
            }
            return I;
        }

        @Override // com.facebook.imagepipeline.producers.o.d
        protected int w(sa.k encodedImage) {
            Intrinsics.checkNotNullParameter(encodedImage, "encodedImage");
            return encodedImage.P();
        }

        @Override // com.facebook.imagepipeline.producers.o.d
        protected sa.o y() {
            sa.o d10 = sa.n.d(0, false, false);
            Intrinsics.checkNotNullExpressionValue(d10, "of(...)");
            return d10;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    private final class c extends d {

        /* renamed from: k  reason: collision with root package name */
        private final qa.f f10760k;

        /* renamed from: l  reason: collision with root package name */
        private final qa.e f10761l;

        /* renamed from: m  reason: collision with root package name */
        final /* synthetic */ o f10762m;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public c(o oVar, Consumer consumer, ProducerContext producerContext, qa.f progressiveJpegParser, qa.e progressiveJpegConfig, boolean z10, int i10) {
            super(oVar, consumer, producerContext, z10, i10);
            Intrinsics.checkNotNullParameter(consumer, "consumer");
            Intrinsics.checkNotNullParameter(producerContext, "producerContext");
            Intrinsics.checkNotNullParameter(progressiveJpegParser, "progressiveJpegParser");
            Intrinsics.checkNotNullParameter(progressiveJpegConfig, "progressiveJpegConfig");
            this.f10762m = oVar;
            this.f10760k = progressiveJpegParser;
            this.f10761l = progressiveJpegConfig;
            H(0);
        }

        @Override // com.facebook.imagepipeline.producers.o.d
        protected synchronized boolean I(sa.k kVar, int i10) {
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
                if (!com.facebook.imagepipeline.producers.c.m(i10, 4) && sa.k.L0(kVar) && kVar.z() == fa.b.f22997b) {
                    if (!this.f10760k.g(kVar)) {
                        return false;
                    }
                    int d10 = this.f10760k.d();
                    if (d10 <= x()) {
                        return false;
                    }
                    if (d10 < this.f10761l.a(x()) && !this.f10760k.e()) {
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
        protected int w(sa.k encodedImage) {
            Intrinsics.checkNotNullParameter(encodedImage, "encodedImage");
            return this.f10760k.c();
        }

        @Override // com.facebook.imagepipeline.producers.o.d
        protected sa.o y() {
            sa.o b10 = this.f10761l.b(this.f10760k.d());
            Intrinsics.checkNotNullExpressionValue(b10, "getQualityInfo(...)");
            return b10;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public abstract class d extends s {

        /* renamed from: c  reason: collision with root package name */
        private final ProducerContext f10763c;

        /* renamed from: d  reason: collision with root package name */
        private final String f10764d;

        /* renamed from: e  reason: collision with root package name */
        private final y0 f10765e;

        /* renamed from: f  reason: collision with root package name */
        private final ImageDecodeOptions f10766f;

        /* renamed from: g  reason: collision with root package name */
        private boolean f10767g;

        /* renamed from: h  reason: collision with root package name */
        private final e0 f10768h;

        /* renamed from: i  reason: collision with root package name */
        private int f10769i;

        /* renamed from: j  reason: collision with root package name */
        final /* synthetic */ o f10770j;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
        public static final class a extends f {

            /* renamed from: b  reason: collision with root package name */
            final /* synthetic */ boolean f10772b;

            a(boolean z10) {
                this.f10772b = z10;
            }

            @Override // com.facebook.imagepipeline.producers.f, com.facebook.imagepipeline.producers.x0
            public void a() {
                if (d.this.f10763c.z()) {
                    d.this.f10768h.h();
                }
            }

            @Override // com.facebook.imagepipeline.producers.x0
            public void b() {
                if (this.f10772b) {
                    d.this.z();
                }
            }
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public d(final o oVar, Consumer consumer, ProducerContext producerContext, boolean z10, final int i10) {
            super(consumer);
            Intrinsics.checkNotNullParameter(consumer, "consumer");
            Intrinsics.checkNotNullParameter(producerContext, "producerContext");
            this.f10770j = oVar;
            this.f10763c = producerContext;
            this.f10764d = "ProgressiveDecoder";
            this.f10765e = producerContext.y();
            ImageDecodeOptions imageDecodeOptions = producerContext.I().getImageDecodeOptions();
            Intrinsics.checkNotNullExpressionValue(imageDecodeOptions, "getImageDecodeOptions(...)");
            this.f10766f = imageDecodeOptions;
            this.f10768h = new e0(oVar.f(), new e0.d() { // from class: com.facebook.imagepipeline.producers.p
                @Override // com.facebook.imagepipeline.producers.e0.d
                public final void a(sa.k kVar, int i11) {
                    o.d.q(o.d.this, oVar, i10, kVar, i11);
                }
            }, imageDecodeOptions.f10327a);
            producerContext.g(new a(z10));
        }

        private final void A(Throwable th2) {
            D(true);
            o().onFailure(th2);
        }

        private final void B(sa.e eVar, int i10) {
            CloseableReference b10 = this.f10770j.c().b(eVar);
            try {
                D(com.facebook.imagepipeline.producers.c.d(i10));
                o().b(b10, i10);
            } finally {
                CloseableReference.z(b10);
            }
        }

        private final sa.e C(sa.k kVar, int i10, sa.o oVar) {
            boolean z10;
            if (this.f10770j.h() != null && ((Boolean) this.f10770j.i().get()).booleanValue()) {
                z10 = true;
            } else {
                z10 = false;
            }
            try {
                return this.f10770j.g().a(kVar, i10, oVar, this.f10766f);
            } catch (OutOfMemoryError e10) {
                if (z10) {
                    Runnable h10 = this.f10770j.h();
                    if (h10 != null) {
                        h10.run();
                    }
                    System.gc();
                    return this.f10770j.g().a(kVar, i10, oVar, this.f10766f);
                }
                throw e10;
            }
        }

        private final void D(boolean z10) {
            synchronized (this) {
                if (z10) {
                    if (!this.f10767g) {
                        o().c(1.0f);
                        this.f10767g = true;
                        Unit unit = Unit.f32056a;
                        this.f10768h.c();
                    }
                }
            }
        }

        private final void E(sa.k kVar) {
            if (kVar.z() != fa.b.f22997b) {
                return;
            }
            kVar.T1(za.a.c(kVar, cb.d.h(this.f10766f.f10334h), 104857600));
        }

        private final void G(sa.k kVar, sa.e eVar, int i10) {
            this.f10763c.p("encoded_width", Integer.valueOf(kVar.getWidth()));
            this.f10763c.p("encoded_height", Integer.valueOf(kVar.getHeight()));
            this.f10763c.p("encoded_size", Integer.valueOf(kVar.P()));
            this.f10763c.p("image_color_space", kVar.s());
            if (eVar instanceof sa.d) {
                this.f10763c.p("bitmap_config", String.valueOf(((sa.d) eVar).M1().getConfig()));
            }
            if (eVar != null) {
                eVar.J(this.f10763c.getExtras());
            }
            this.f10763c.p("last_scan_num", Integer.valueOf(i10));
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final void q(d this$0, o this$1, int i10, sa.k kVar, int i11) {
            String str;
            Intrinsics.checkNotNullParameter(this$0, "this$0");
            Intrinsics.checkNotNullParameter(this$1, "this$1");
            if (kVar != null) {
                ImageRequest I = this$0.f10763c.I();
                this$0.f10763c.p("image_format", kVar.z().a());
                Uri sourceUri = I.getSourceUri();
                if (sourceUri != null) {
                    str = sourceUri.toString();
                } else {
                    str = null;
                }
                kVar.V1(str);
                DownsampleMode downsampleOverride = I.getDownsampleOverride();
                if (downsampleOverride == null) {
                    downsampleOverride = this$1.e();
                }
                boolean m10 = com.facebook.imagepipeline.producers.c.m(i11, 16);
                if ((downsampleOverride == DownsampleMode.f10362d || (downsampleOverride == DownsampleMode.f10363e && !m10)) && (this$1.d() || !w8.f.p(I.getSourceUri()))) {
                    RotationOptions rotationOptions = I.getRotationOptions();
                    Intrinsics.checkNotNullExpressionValue(rotationOptions, "getRotationOptions(...)");
                    kVar.T1(za.a.b(rotationOptions, I.getResizeOptions(), kVar, i10));
                }
                if (this$0.f10763c.k().G().i()) {
                    this$0.E(kVar);
                }
                this$0.u(kVar, i11, this$0.f10769i);
            }
        }

        /* JADX WARN: Removed duplicated region for block: B:49:0x0138  */
        /*
            Code decompiled incorrectly, please refer to instructions dump.
            To view partially-correct add '--show-bad-code' argument
        */
        private final void u(sa.k r17, int r18, int r19) {
            /*
                Method dump skipped, instructions count: 425
                To view this dump add '--comments-level debug' option
            */
            throw new UnsupportedOperationException("Method not decompiled: com.facebook.imagepipeline.producers.o.d.u(sa.k, int, int):void");
        }

        private final Map v(sa.e eVar, long j10, sa.o oVar, boolean z10, String str, String str2, String str3, String str4) {
            Map extras;
            Object obj;
            String str5 = null;
            if (!this.f10765e.f(this.f10763c, "DecodeProducer")) {
                return null;
            }
            String valueOf = String.valueOf(j10);
            String valueOf2 = String.valueOf(oVar.b());
            String valueOf3 = String.valueOf(z10);
            if (eVar != null && (extras = eVar.getExtras()) != null && (obj = extras.get("non_fatal_decode_error")) != null) {
                str5 = obj.toString();
            }
            if (eVar instanceof sa.f) {
                String str6 = str5;
                Bitmap M1 = ((sa.f) eVar).M1();
                Intrinsics.checkNotNullExpressionValue(M1, "getUnderlyingBitmap(...)");
                String str7 = M1.getWidth() + "x" + M1.getHeight();
                HashMap hashMap = new HashMap(8);
                hashMap.put("bitmapSize", str7);
                hashMap.put("queueTime", valueOf);
                hashMap.put("hasGoodQuality", valueOf2);
                hashMap.put("isFinal", valueOf3);
                hashMap.put("encodedImageSize", str2);
                hashMap.put("imageFormat", str);
                hashMap.put("requestedImageSize", str3);
                hashMap.put("sampleSize", str4);
                int byteCount = M1.getByteCount();
                StringBuilder sb2 = new StringBuilder();
                sb2.append(byteCount);
                hashMap.put("byteCount", sb2.toString());
                if (str6 != null) {
                    hashMap.put("non_fatal_decode_error", str6);
                }
                return o8.f.a(hashMap);
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
            return o8.f.a(hashMap2);
        }

        /* JADX INFO: Access modifiers changed from: private */
        public final void z() {
            D(true);
            o().a();
        }

        @Override // com.facebook.imagepipeline.producers.c
        /* renamed from: F */
        public void h(sa.k kVar, int i10) {
            if (!ya.b.d()) {
                boolean d10 = com.facebook.imagepipeline.producers.c.d(i10);
                if (d10) {
                    if (kVar == null) {
                        boolean areEqual = Intrinsics.areEqual(this.f10763c.Y("cached_value_found"), Boolean.TRUE);
                        if (!this.f10763c.k().G().h() || this.f10763c.E0() == ImageRequest.RequestLevel.FULL_FETCH || areEqual) {
                            A(new w8.a("Encoded image is null."));
                            return;
                        }
                    } else if (!kVar.K0()) {
                        A(new w8.a("Encoded image is not valid."));
                        return;
                    }
                }
                if (I(kVar, i10)) {
                    boolean m10 = com.facebook.imagepipeline.producers.c.m(i10, 4);
                    if (!d10 && !m10 && !this.f10763c.z()) {
                        return;
                    }
                    this.f10768h.h();
                    return;
                }
                return;
            }
            ya.b.a("DecodeProducer#onNewResultImpl");
            try {
                boolean d11 = com.facebook.imagepipeline.producers.c.d(i10);
                if (d11) {
                    if (kVar == null) {
                        boolean areEqual2 = Intrinsics.areEqual(this.f10763c.Y("cached_value_found"), Boolean.TRUE);
                        if (this.f10763c.k().G().h()) {
                            if (this.f10763c.E0() != ImageRequest.RequestLevel.FULL_FETCH) {
                                if (areEqual2) {
                                }
                            }
                        }
                        A(new w8.a("Encoded image is null."));
                        ya.b.b();
                        return;
                    } else if (!kVar.K0()) {
                        A(new w8.a("Encoded image is not valid."));
                        ya.b.b();
                        return;
                    }
                }
                if (!I(kVar, i10)) {
                    ya.b.b();
                    return;
                }
                boolean m11 = com.facebook.imagepipeline.producers.c.m(i10, 4);
                if (d11 || m11 || this.f10763c.z()) {
                    this.f10768h.h();
                }
                Unit unit = Unit.f32056a;
                ya.b.b();
            } catch (Throwable th2) {
                ya.b.b();
                throw th2;
            }
        }

        protected final void H(int i10) {
            this.f10769i = i10;
        }

        protected boolean I(sa.k kVar, int i10) {
            return this.f10768h.k(kVar, i10);
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

        protected abstract int w(sa.k kVar);

        protected final int x() {
            return this.f10769i;
        }

        protected abstract sa.o y();
    }

    public o(r8.a byteArrayPool, Executor executor, qa.c imageDecoder, qa.e progressiveJpegConfig, DownsampleMode downsampleMode, boolean z10, boolean z11, w0 inputProducer, int i10, na.a closeableReferenceFactory, Runnable runnable, Supplier recoverFromDecoderOOM) {
        Intrinsics.checkNotNullParameter(byteArrayPool, "byteArrayPool");
        Intrinsics.checkNotNullParameter(executor, "executor");
        Intrinsics.checkNotNullParameter(imageDecoder, "imageDecoder");
        Intrinsics.checkNotNullParameter(progressiveJpegConfig, "progressiveJpegConfig");
        Intrinsics.checkNotNullParameter(downsampleMode, "downsampleMode");
        Intrinsics.checkNotNullParameter(inputProducer, "inputProducer");
        Intrinsics.checkNotNullParameter(closeableReferenceFactory, "closeableReferenceFactory");
        Intrinsics.checkNotNullParameter(recoverFromDecoderOOM, "recoverFromDecoderOOM");
        this.f10747a = byteArrayPool;
        this.f10748b = executor;
        this.f10749c = imageDecoder;
        this.f10750d = progressiveJpegConfig;
        this.f10751e = downsampleMode;
        this.f10752f = z10;
        this.f10753g = z11;
        this.f10754h = inputProducer;
        this.f10755i = i10;
        this.f10756j = closeableReferenceFactory;
        this.f10757k = runnable;
        this.f10758l = recoverFromDecoderOOM;
    }

    @Override // com.facebook.imagepipeline.producers.w0
    public void b(Consumer consumer, ProducerContext context) {
        Consumer cVar;
        o oVar;
        ProducerContext producerContext;
        Consumer cVar2;
        Intrinsics.checkNotNullParameter(consumer, "consumer");
        Intrinsics.checkNotNullParameter(context, "context");
        if (!ya.b.d()) {
            ImageRequest I = context.I();
            if (!w8.f.p(I.getSourceUri()) && !ImageRequestBuilder.s(I.getSourceUri())) {
                cVar2 = new b(this, consumer, context, this.f10753g, this.f10755i);
                oVar = this;
                producerContext = context;
            } else {
                oVar = this;
                producerContext = context;
                cVar2 = new c(oVar, consumer, producerContext, new qa.f(oVar.f10747a), oVar.f10750d, oVar.f10753g, oVar.f10755i);
            }
            oVar.f10754h.b(cVar2, producerContext);
            return;
        }
        ya.b.a("DecodeProducer#produceResults");
        try {
            ImageRequest I2 = context.I();
            if (!w8.f.p(I2.getSourceUri()) && !ImageRequestBuilder.s(I2.getSourceUri())) {
                cVar = new b(this, consumer, context, this.f10753g, this.f10755i);
            } else {
                cVar = new c(this, consumer, context, new qa.f(this.f10747a), this.f10750d, this.f10753g, this.f10755i);
            }
            this.f10754h.b(cVar, context);
            Unit unit = Unit.f32056a;
            ya.b.b();
        } catch (Throwable th2) {
            ya.b.b();
            throw th2;
        }
    }

    public final na.a c() {
        return this.f10756j;
    }

    public final boolean d() {
        return this.f10752f;
    }

    public final DownsampleMode e() {
        return this.f10751e;
    }

    public final Executor f() {
        return this.f10748b;
    }

    public final qa.c g() {
        return this.f10749c;
    }

    public final Runnable h() {
        return this.f10757k;
    }

    public final Supplier i() {
        return this.f10758l;
    }
}
