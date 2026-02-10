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
    private final Executor f11445a;

    /* renamed from: b  reason: collision with root package name */
    private final ContentResolver f11446b;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    class a extends e1 {

        /* renamed from: q  reason: collision with root package name */
        final /* synthetic */ y0 f11447q;

        /* renamed from: r  reason: collision with root package name */
        final /* synthetic */ ProducerContext f11448r;

        /* renamed from: s  reason: collision with root package name */
        final /* synthetic */ ImageRequest f11449s;

        /* renamed from: t  reason: collision with root package name */
        final /* synthetic */ CancellationSignal f11450t;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        a(Consumer consumer, y0 y0Var, ProducerContext producerContext, String str, y0 y0Var2, ProducerContext producerContext2, ImageRequest imageRequest, CancellationSignal cancellationSignal) {
            super(consumer, y0Var, producerContext, str);
            this.f11447q = y0Var2;
            this.f11448r = producerContext2;
            this.f11449s = imageRequest;
            this.f11450t = cancellationSignal;
        }

        /* JADX INFO: Access modifiers changed from: protected */
        @Override // com.facebook.imagepipeline.producers.e1, n8.h
        public void d() {
            super.d();
            this.f11450t.cancel();
        }

        /* JADX INFO: Access modifiers changed from: protected */
        @Override // com.facebook.imagepipeline.producers.e1, n8.h
        public void e(Exception exc) {
            super.e(exc);
            this.f11447q.b(this.f11448r, "LocalThumbnailBitmapSdk29Producer", false);
            this.f11448r.m("local", "thumbnail_bitmap");
        }

        /* JADX INFO: Access modifiers changed from: protected */
        @Override // n8.h
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
            return p8.f.of("createdThumbnail", String.valueOf(z10));
        }

        /* JADX INFO: Access modifiers changed from: protected */
        @Override // n8.h
        /* renamed from: l */
        public CloseableReference c() {
            String str;
            Bitmap bitmap;
            Size size = new Size(this.f11449s.getPreferredWidth(), this.f11449s.getPreferredHeight());
            try {
                str = m0.this.e(this.f11449s);
            } catch (IllegalArgumentException unused) {
                str = null;
            }
            if (str != null) {
                if (r8.a.c(r8.a.b(str))) {
                    bitmap = ThumbnailUtils.createVideoThumbnail(new File(str), size, this.f11450t);
                } else {
                    bitmap = ThumbnailUtils.createImageThumbnail(new File(str), size, this.f11450t);
                }
            } else {
                bitmap = null;
            }
            if (bitmap == null) {
                bitmap = m0.this.f11446b.loadThumbnail(this.f11449s.getSourceUri(), size, this.f11450t);
            }
            if (bitmap == null) {
                return null;
            }
            ta.f N = ta.f.N(bitmap, la.e.a(), ta.n.f48671d, 0);
            this.f11448r.p("image_format", "thumbnail");
            N.J(this.f11448r.getExtras());
            return CloseableReference.E0(N);
        }

        /* JADX INFO: Access modifiers changed from: protected */
        @Override // com.facebook.imagepipeline.producers.e1, n8.h
        /* renamed from: m */
        public void f(CloseableReference closeableReference) {
            boolean z10;
            super.f(closeableReference);
            y0 y0Var = this.f11447q;
            ProducerContext producerContext = this.f11448r;
            if (closeableReference != null) {
                z10 = true;
            } else {
                z10 = false;
            }
            y0Var.b(producerContext, "LocalThumbnailBitmapSdk29Producer", z10);
            this.f11448r.m("local", "thumbnail_bitmap");
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    class b extends f {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ e1 f11452a;

        b(e1 e1Var) {
            this.f11452a = e1Var;
        }

        @Override // com.facebook.imagepipeline.producers.x0
        public void b() {
            this.f11452a.a();
        }
    }

    public m0(Executor executor, ContentResolver contentResolver) {
        this.f11445a = executor;
        this.f11446b = contentResolver;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public String e(ImageRequest imageRequest) {
        return x8.f.e(this.f11446b, imageRequest.getSourceUri());
    }

    @Override // com.facebook.imagepipeline.producers.w0
    public void b(Consumer consumer, ProducerContext producerContext) {
        y0 y10 = producerContext.y();
        ImageRequest I = producerContext.I();
        producerContext.m("local", "thumbnail_bitmap");
        a aVar = new a(consumer, y10, producerContext, "LocalThumbnailBitmapSdk29Producer", y10, producerContext, I, new CancellationSignal());
        producerContext.h(new b(aVar));
        this.f11445a.execute(aVar);
    }
}
