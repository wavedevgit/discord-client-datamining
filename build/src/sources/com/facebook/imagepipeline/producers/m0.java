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
    private final Executor f11476a;

    /* renamed from: b  reason: collision with root package name */
    private final ContentResolver f11477b;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    class a extends e1 {

        /* renamed from: q  reason: collision with root package name */
        final /* synthetic */ y0 f11478q;

        /* renamed from: r  reason: collision with root package name */
        final /* synthetic */ ProducerContext f11479r;

        /* renamed from: s  reason: collision with root package name */
        final /* synthetic */ ImageRequest f11480s;

        /* renamed from: t  reason: collision with root package name */
        final /* synthetic */ CancellationSignal f11481t;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        a(Consumer consumer, y0 y0Var, ProducerContext producerContext, String str, y0 y0Var2, ProducerContext producerContext2, ImageRequest imageRequest, CancellationSignal cancellationSignal) {
            super(consumer, y0Var, producerContext, str);
            this.f11478q = y0Var2;
            this.f11479r = producerContext2;
            this.f11480s = imageRequest;
            this.f11481t = cancellationSignal;
        }

        /* JADX INFO: Access modifiers changed from: protected */
        @Override // com.facebook.imagepipeline.producers.e1, m8.h
        public void d() {
            super.d();
            this.f11481t.cancel();
        }

        /* JADX INFO: Access modifiers changed from: protected */
        @Override // com.facebook.imagepipeline.producers.e1, m8.h
        public void e(Exception exc) {
            super.e(exc);
            this.f11478q.b(this.f11479r, "LocalThumbnailBitmapSdk29Producer", false);
            this.f11479r.n("local", "thumbnail_bitmap");
        }

        /* JADX INFO: Access modifiers changed from: protected */
        @Override // m8.h
        /* renamed from: j */
        public void b(CloseableReference closeableReference) {
            CloseableReference.N(closeableReference);
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
            Size size = new Size(this.f11480s.getPreferredWidth(), this.f11480s.getPreferredHeight());
            try {
                str = m0.this.e(this.f11480s);
            } catch (IllegalArgumentException unused) {
                str = null;
            }
            if (str != null) {
                if (q8.a.c(q8.a.b(str))) {
                    bitmap = ThumbnailUtils.createVideoThumbnail(new File(str), size, this.f11481t);
                } else {
                    bitmap = ThumbnailUtils.createImageThumbnail(new File(str), size, this.f11481t);
                }
            } else {
                bitmap = null;
            }
            if (bitmap == null) {
                bitmap = m0.this.f11477b.loadThumbnail(this.f11480s.getSourceUri(), size, this.f11481t);
            }
            if (bitmap == null) {
                return null;
            }
            sa.f p12 = sa.f.p1(bitmap, ka.e.a(), sa.n.f48959d, 0);
            this.f11479r.B("image_format", "thumbnail");
            p12.t0(this.f11479r.getExtras());
            return CloseableReference.L0(p12);
        }

        /* JADX INFO: Access modifiers changed from: protected */
        @Override // com.facebook.imagepipeline.producers.e1, m8.h
        /* renamed from: m */
        public void f(CloseableReference closeableReference) {
            boolean z10;
            super.f(closeableReference);
            y0 y0Var = this.f11478q;
            ProducerContext producerContext = this.f11479r;
            if (closeableReference != null) {
                z10 = true;
            } else {
                z10 = false;
            }
            y0Var.b(producerContext, "LocalThumbnailBitmapSdk29Producer", z10);
            this.f11479r.n("local", "thumbnail_bitmap");
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    class b extends f {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ e1 f11483a;

        b(e1 e1Var) {
            this.f11483a = e1Var;
        }

        @Override // com.facebook.imagepipeline.producers.x0
        public void b() {
            this.f11483a.a();
        }
    }

    public m0(Executor executor, ContentResolver contentResolver) {
        this.f11476a = executor;
        this.f11477b = contentResolver;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public String e(ImageRequest imageRequest) {
        return w8.f.e(this.f11477b, imageRequest.getSourceUri());
    }

    @Override // com.facebook.imagepipeline.producers.w0
    public void b(Consumer consumer, ProducerContext producerContext) {
        y0 F = producerContext.F();
        ImageRequest V = producerContext.V();
        producerContext.n("local", "thumbnail_bitmap");
        a aVar = new a(consumer, F, producerContext, "LocalThumbnailBitmapSdk29Producer", F, producerContext, V, new CancellationSignal());
        producerContext.h(new b(aVar));
        this.f11476a.execute(aVar);
    }
}
