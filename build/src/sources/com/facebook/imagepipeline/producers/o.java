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
    public static final a f10847m = new a(null);

    /* renamed from: a  reason: collision with root package name */
    private final r8.a f10848a;

    /* renamed from: b  reason: collision with root package name */
    private final Executor f10849b;

    /* renamed from: c  reason: collision with root package name */
    private final qa.c f10850c;

    /* renamed from: d  reason: collision with root package name */
    private final qa.e f10851d;

    /* renamed from: e  reason: collision with root package name */
    private final DownsampleMode f10852e;

    /* renamed from: f  reason: collision with root package name */
    private final boolean f10853f;

    /* renamed from: g  reason: collision with root package name */
    private final boolean f10854g;

    /* renamed from: h  reason: collision with root package name */
    private final w0 f10855h;

    /* renamed from: i  reason: collision with root package name */
    private final int f10856i;

    /* renamed from: j  reason: collision with root package name */
    private final na.a f10857j;

    /* renamed from: k  reason: collision with root package name */
    private final Runnable f10858k;

    /* renamed from: l  reason: collision with root package name */
    private final Supplier f10859l;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        /* JADX INFO: Access modifiers changed from: private */
        public final boolean b(sa.k kVar, ImageDecodeOptions imageDecodeOptions) {
            if (kVar.getWidth() * kVar.getHeight() * cb.d.h(imageDecodeOptions.f10435h) > 104857600) {
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
        final /* synthetic */ o f10860k;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public b(o oVar, Consumer consumer, ProducerContext producerContext, boolean z10, int i10) {
            super(oVar, consumer, producerContext, z10, i10);
            Intrinsics.checkNotNullParameter(consumer, "consumer");
            Intrinsics.checkNotNullParameter(producerContext, "producerContext");
            this.f10860k = oVar;
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
            return encodedImage.C0();
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
        private final qa.f f10861k;

        /* renamed from: l  reason: collision with root package name */
        private final qa.e f10862l;

        /* renamed from: m  reason: collision with root package name */
        final /* synthetic */ o f10863m;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public c(o oVar, Consumer consumer, ProducerContext producerContext, qa.f progressiveJpegParser, qa.e progressiveJpegConfig, boolean z10, int i10) {
            super(oVar, consumer, producerContext, z10, i10);
            Intrinsics.checkNotNullParameter(consumer, "consumer");
            Intrinsics.checkNotNullParameter(producerContext, "producerContext");
            Intrinsics.checkNotNullParameter(progressiveJpegParser, "progressiveJpegParser");
            Intrinsics.checkNotNullParameter(progressiveJpegConfig, "progressiveJpegConfig");
            this.f10863m = oVar;
            this.f10861k = progressiveJpegParser;
            this.f10862l = progressiveJpegConfig;
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
                if (!com.facebook.imagepipeline.producers.c.m(i10, 4) && sa.k.S0(kVar) && kVar.L() == fa.b.f22696b) {
                    if (!this.f10861k.g(kVar)) {
                        return false;
                    }
                    int d10 = this.f10861k.d();
                    if (d10 <= x()) {
                        return false;
                    }
                    if (d10 < this.f10862l.a(x()) && !this.f10861k.e()) {
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
            return this.f10861k.c();
        }

        @Override // com.facebook.imagepipeline.producers.o.d
        protected sa.o y() {
            sa.o b10 = this.f10862l.b(this.f10861k.d());
            Intrinsics.checkNotNullExpressionValue(b10, "getQualityInfo(...)");
            return b10;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public abstract class d extends s {

        /* renamed from: c  reason: collision with root package name */
        private final ProducerContext f10864c;

        /* renamed from: d  reason: collision with root package name */
        private final String f10865d;

        /* renamed from: e  reason: collision with root package name */
        private final y0 f10866e;

        /* renamed from: f  reason: collision with root package name */
        private final ImageDecodeOptions f10867f;

        /* renamed from: g  reason: collision with root package name */
        private boolean f10868g;

        /* renamed from: h  reason: collision with root package name */
        private final e0 f10869h;

        /* renamed from: i  reason: collision with root package name */
        private int f10870i;

        /* renamed from: j  reason: collision with root package name */
        final /* synthetic */ o f10871j;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
        public static final class a extends f {

            /* renamed from: b  reason: collision with root package name */
            final /* synthetic */ boolean f10873b;

            a(boolean z10) {
                this.f10873b = z10;
            }

            @Override // com.facebook.imagepipeline.producers.f, com.facebook.imagepipeline.producers.x0
            public void a() {
                if (d.this.f10864c.L()) {
                    d.this.f10869h.h();
                }
            }

            @Override // com.facebook.imagepipeline.producers.x0
            public void b() {
                if (this.f10873b) {
                    d.this.z();
                }
            }
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public d(final o oVar, Consumer consumer, ProducerContext producerContext, boolean z10, final int i10) {
            super(consumer);
            Intrinsics.checkNotNullParameter(consumer, "consumer");
            Intrinsics.checkNotNullParameter(producerContext, "producerContext");
            this.f10871j = oVar;
            this.f10864c = producerContext;
            this.f10865d = "ProgressiveDecoder";
            this.f10866e = producerContext.F();
            ImageDecodeOptions imageDecodeOptions = producerContext.V().getImageDecodeOptions();
            Intrinsics.checkNotNullExpressionValue(imageDecodeOptions, "getImageDecodeOptions(...)");
            this.f10867f = imageDecodeOptions;
            this.f10869h = new e0(oVar.f(), new e0.d() { // from class: com.facebook.imagepipeline.producers.p
                @Override // com.facebook.imagepipeline.producers.e0.d
                public final void a(sa.k kVar, int i11) {
                    o.d.q(o.d.this, oVar, i10, kVar, i11);
                }
            }, imageDecodeOptions.f10428a);
            producerContext.h(new a(z10));
        }

        private final void A(Throwable th2) {
            D(true);
            o().onFailure(th2);
        }

        private final void B(sa.e eVar, int i10) {
            CloseableReference b10 = this.f10871j.c().b(eVar);
            try {
                D(com.facebook.imagepipeline.producers.c.d(i10));
                o().b(b10, i10);
            } finally {
                CloseableReference.N(b10);
            }
        }

        private final sa.e C(sa.k kVar, int i10, sa.o oVar) {
            boolean z10;
            if (this.f10871j.h() != null && ((Boolean) this.f10871j.i().get()).booleanValue()) {
                z10 = true;
            } else {
                z10 = false;
            }
            try {
                return this.f10871j.g().a(kVar, i10, oVar, this.f10867f);
            } catch (OutOfMemoryError e10) {
                if (z10) {
                    Runnable h10 = this.f10871j.h();
                    if (h10 != null) {
                        h10.run();
                    }
                    System.gc();
                    return this.f10871j.g().a(kVar, i10, oVar, this.f10867f);
                }
                throw e10;
            }
        }

        private final void D(boolean z10) {
            synchronized (this) {
                if (z10) {
                    if (!this.f10868g) {
                        o().c(1.0f);
                        this.f10868g = true;
                        Unit unit = Unit.f31988a;
                        this.f10869h.c();
                    }
                }
            }
        }

        private final void E(sa.k kVar) {
            if (kVar.L() != fa.b.f22696b) {
                return;
            }
            kVar.U1(za.a.c(kVar, cb.d.h(this.f10867f.f10435h), 104857600));
        }

        private final void G(sa.k kVar, sa.e eVar, int i10) {
            this.f10864c.y("encoded_width", Integer.valueOf(kVar.getWidth()));
            this.f10864c.y("encoded_height", Integer.valueOf(kVar.getHeight()));
            this.f10864c.y("encoded_size", Integer.valueOf(kVar.C0()));
            this.f10864c.y("image_color_space", kVar.E());
            if (eVar instanceof sa.d) {
                this.f10864c.y("bitmap_config", String.valueOf(((sa.d) eVar).N1().getConfig()));
            }
            if (eVar != null) {
                eVar.W(this.f10864c.getExtras());
            }
            this.f10864c.y("last_scan_num", Integer.valueOf(i10));
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final void q(d this$0, o this$1, int i10, sa.k kVar, int i11) {
            String str;
            Intrinsics.checkNotNullParameter(this$0, "this$0");
            Intrinsics.checkNotNullParameter(this$1, "this$1");
            if (kVar != null) {
                ImageRequest V = this$0.f10864c.V();
                this$0.f10864c.y("image_format", kVar.L().a());
                Uri sourceUri = V.getSourceUri();
                if (sourceUri != null) {
                    str = sourceUri.toString();
                } else {
                    str = null;
                }
                kVar.W1(str);
                DownsampleMode downsampleOverride = V.getDownsampleOverride();
                if (downsampleOverride == null) {
                    downsampleOverride = this$1.e();
                }
                boolean m10 = com.facebook.imagepipeline.producers.c.m(i11, 16);
                if ((downsampleOverride == DownsampleMode.f10463d || (downsampleOverride == DownsampleMode.f10464e && !m10)) && (this$1.d() || !w8.f.p(V.getSourceUri()))) {
                    RotationOptions rotationOptions = V.getRotationOptions();
                    Intrinsics.checkNotNullExpressionValue(rotationOptions, "getRotationOptions(...)");
                    kVar.U1(za.a.b(rotationOptions, V.getResizeOptions(), kVar, i10));
                }
                if (this$0.f10864c.k().G().i()) {
                    this$0.E(kVar);
                }
                this$0.u(kVar, i11, this$0.f10870i);
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
            if (!this.f10866e.f(this.f10864c, "DecodeProducer")) {
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
                Bitmap N1 = ((sa.f) eVar).N1();
                Intrinsics.checkNotNullExpressionValue(N1, "getUnderlyingBitmap(...)");
                String str7 = N1.getWidth() + "x" + N1.getHeight();
                HashMap hashMap = new HashMap(8);
                hashMap.put("bitmapSize", str7);
                hashMap.put("queueTime", valueOf);
                hashMap.put("hasGoodQuality", valueOf2);
                hashMap.put("isFinal", valueOf3);
                hashMap.put("encodedImageSize", str2);
                hashMap.put("imageFormat", str);
                hashMap.put("requestedImageSize", str3);
                hashMap.put("sampleSize", str4);
                int byteCount = N1.getByteCount();
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
                        boolean areEqual = Intrinsics.areEqual(this.f10864c.D0("cached_value_found"), Boolean.TRUE);
                        if (!this.f10864c.k().G().h() || this.f10864c.E0() == ImageRequest.RequestLevel.FULL_FETCH || areEqual) {
                            A(new w8.a("Encoded image is null."));
                            return;
                        }
                    } else if (!kVar.N0()) {
                        A(new w8.a("Encoded image is not valid."));
                        return;
                    }
                }
                if (I(kVar, i10)) {
                    boolean m10 = com.facebook.imagepipeline.producers.c.m(i10, 4);
                    if (!d10 && !m10 && !this.f10864c.L()) {
                        return;
                    }
                    this.f10869h.h();
                    return;
                }
                return;
            }
            ya.b.a("DecodeProducer#onNewResultImpl");
            try {
                boolean d11 = com.facebook.imagepipeline.producers.c.d(i10);
                if (d11) {
                    if (kVar == null) {
                        boolean areEqual2 = Intrinsics.areEqual(this.f10864c.D0("cached_value_found"), Boolean.TRUE);
                        if (this.f10864c.k().G().h()) {
                            if (this.f10864c.E0() != ImageRequest.RequestLevel.FULL_FETCH) {
                                if (areEqual2) {
                                }
                            }
                        }
                        A(new w8.a("Encoded image is null."));
                        ya.b.b();
                        return;
                    } else if (!kVar.N0()) {
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
                if (d11 || m11 || this.f10864c.L()) {
                    this.f10869h.h();
                }
                Unit unit = Unit.f31988a;
                ya.b.b();
            } catch (Throwable th2) {
                ya.b.b();
                throw th2;
            }
        }

        protected final void H(int i10) {
            this.f10870i = i10;
        }

        protected boolean I(sa.k kVar, int i10) {
            return this.f10869h.k(kVar, i10);
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
            return this.f10870i;
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
        this.f10848a = byteArrayPool;
        this.f10849b = executor;
        this.f10850c = imageDecoder;
        this.f10851d = progressiveJpegConfig;
        this.f10852e = downsampleMode;
        this.f10853f = z10;
        this.f10854g = z11;
        this.f10855h = inputProducer;
        this.f10856i = i10;
        this.f10857j = closeableReferenceFactory;
        this.f10858k = runnable;
        this.f10859l = recoverFromDecoderOOM;
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
            ImageRequest V = context.V();
            if (!w8.f.p(V.getSourceUri()) && !ImageRequestBuilder.s(V.getSourceUri())) {
                cVar2 = new b(this, consumer, context, this.f10854g, this.f10856i);
                oVar = this;
                producerContext = context;
            } else {
                oVar = this;
                producerContext = context;
                cVar2 = new c(oVar, consumer, producerContext, new qa.f(oVar.f10848a), oVar.f10851d, oVar.f10854g, oVar.f10856i);
            }
            oVar.f10855h.b(cVar2, producerContext);
            return;
        }
        ya.b.a("DecodeProducer#produceResults");
        try {
            ImageRequest V2 = context.V();
            if (!w8.f.p(V2.getSourceUri()) && !ImageRequestBuilder.s(V2.getSourceUri())) {
                cVar = new b(this, consumer, context, this.f10854g, this.f10856i);
            } else {
                cVar = new c(this, consumer, context, new qa.f(this.f10848a), this.f10851d, this.f10854g, this.f10856i);
            }
            this.f10855h.b(cVar, context);
            Unit unit = Unit.f31988a;
            ya.b.b();
        } catch (Throwable th2) {
            ya.b.b();
            throw th2;
        }
    }

    public final na.a c() {
        return this.f10857j;
    }

    public final boolean d() {
        return this.f10853f;
    }

    public final DownsampleMode e() {
        return this.f10852e;
    }

    public final Executor f() {
        return this.f10849b;
    }

    public final qa.c g() {
        return this.f10850c;
    }

    public final Runnable h() {
        return this.f10858k;
    }

    public final Supplier i() {
        return this.f10859l;
    }
}
