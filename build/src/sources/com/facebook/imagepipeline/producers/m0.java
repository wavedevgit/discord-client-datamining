package com.facebook.imagepipeline.producers;

import android.content.ContentResolver;
import android.graphics.Bitmap;
import android.media.ThumbnailUtils;
import android.os.CancellationSignal;
import android.util.Size;
import com.facebook.common.references.CloseableReference;
import com.facebook.imagepipeline.request.ImageRequest;
import java.io.File;
import java.util.Map;
import java.util.concurrent.Executor;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class m0 implements w0 {

    /* renamed from: a  reason: collision with root package name */
    private final Executor f10728a;

    /* renamed from: b  reason: collision with root package name */
    private final ContentResolver f10729b;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    class a extends e1 {

        /* renamed from: q  reason: collision with root package name */
        final /* synthetic */ y0 f10730q;

        /* renamed from: r  reason: collision with root package name */
        final /* synthetic */ ProducerContext f10731r;

        /* renamed from: s  reason: collision with root package name */
        final /* synthetic */ ImageRequest f10732s;

        /* renamed from: t  reason: collision with root package name */
        final /* synthetic */ CancellationSignal f10733t;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        a(Consumer consumer, y0 y0Var, ProducerContext producerContext, String str, y0 y0Var2, ProducerContext producerContext2, ImageRequest imageRequest, CancellationSignal cancellationSignal) {
            super(consumer, y0Var, producerContext, str);
            this.f10730q = y0Var2;
            this.f10731r = producerContext2;
            this.f10732s = imageRequest;
            this.f10733t = cancellationSignal;
        }

        /* JADX INFO: Access modifiers changed from: protected */
        @Override // com.facebook.imagepipeline.producers.e1, m8.h
        public void d() {
            super.d();
            this.f10733t.cancel();
        }

        /* JADX INFO: Access modifiers changed from: protected */
        @Override // com.facebook.imagepipeline.producers.e1, m8.h
        public void e(Exception exc) {
            super.e(exc);
            this.f10730q.b(this.f10731r, "LocalThumbnailBitmapSdk29Producer", false);
            this.f10731r.m("local", "thumbnail_bitmap");
        }

        /* JADX INFO: Access modifiers changed from: protected */
        @Override // m8.h
        /* renamed from: j */
        public void b(CloseableReference closeableReference) {
            CloseableReference.z(closeableReference);
        }

        /* JADX INFO: Access modifiers changed from: protected */
        @Override // com.facebook.imagepipeline.producers.e1
        /* renamed from: k */
        public Map i(CloseableReference closeableReference) {
            boolean z10;
            if (closeableReference != null) {
                z10 = true;
            } else {
                z10 = false;
            }
            return o8.f.of("createdThumbnail", String.valueOf(z10));
        }

        /* JADX INFO: Access modifiers changed from: protected */
        @Override // m8.h
        /* renamed from: l */
        public CloseableReference c() {
            String str;
            Bitmap bitmap;
            Size size = new Size(this.f10732s.getPreferredWidth(), this.f10732s.getPreferredHeight());
            try {
                str = m0.this.e(this.f10732s);
            } catch (IllegalArgumentException unused) {
                str = null;
            }
            if (str != null) {
                if (q8.a.c(q8.a.b(str))) {
                    bitmap = ThumbnailUtils.createVideoThumbnail(new File(str), size, this.f10733t);
                } else {
                    bitmap = ThumbnailUtils.createImageThumbnail(new File(str), size, this.f10733t);
                }
            } else {
                bitmap = null;
            }
            if (bitmap == null) {
                bitmap = m0.this.f10729b.loadThumbnail(this.f10732s.getSourceUri(), size, this.f10733t);
            }
            if (bitmap == null) {
                return null;
            }
            sa.f o12 = sa.f.o1(bitmap, ka.e.a(), sa.n.f49898d, 0);
            this.f10731r.p("image_format", "thumbnail");
            o12.J(this.f10731r.getExtras());
            return CloseableReference.K0(o12);
        }

        /* JADX INFO: Access modifiers changed from: protected */
        @Override // com.facebook.imagepipeline.producers.e1, m8.h
        /* renamed from: m */
        public void f(CloseableReference closeableReference) {
            boolean z10;
            super.f(closeableReference);
            y0 y0Var = this.f10730q;
            ProducerContext producerContext = this.f10731r;
            if (closeableReference != null) {
                z10 = true;
            } else {
                z10 = false;
            }
            y0Var.b(producerContext, "LocalThumbnailBitmapSdk29Producer", z10);
            this.f10731r.m("local", "thumbnail_bitmap");
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    class b extends f {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ e1 f10735a;

        b(e1 e1Var) {
            this.f10735a = e1Var;
        }

        @Override // com.facebook.imagepipeline.producers.x0
        public void b() {
            this.f10735a.a();
        }
    }

    public m0(Executor executor, ContentResolver contentResolver) {
        this.f10728a = executor;
        this.f10729b = contentResolver;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public String e(ImageRequest imageRequest) {
        return w8.f.e(this.f10729b, imageRequest.getSourceUri());
    }

    @Override // com.facebook.imagepipeline.producers.w0
    public void b(Consumer consumer, ProducerContext producerContext) {
        y0 y10 = producerContext.y();
        ImageRequest I = producerContext.I();
        producerContext.m("local", "thumbnail_bitmap");
        a aVar = new a(consumer, y10, producerContext, "LocalThumbnailBitmapSdk29Producer", y10, producerContext, I, new CancellationSignal());
        producerContext.g(new b(aVar));
        this.f10728a.execute(aVar);
    }
}
