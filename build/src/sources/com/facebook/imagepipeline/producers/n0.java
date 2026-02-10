package com.facebook.imagepipeline.producers;

import android.content.ContentResolver;
import android.graphics.Bitmap;
import android.media.MediaMetadataRetriever;
import android.media.ThumbnailUtils;
import android.net.Uri;
import android.os.ParcelFileDescriptor;
import com.facebook.common.references.CloseableReference;
import com.facebook.imagepipeline.request.ImageRequest;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.Map;
import java.util.concurrent.Executor;
import org.webrtc.MediaStreamTrack;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class n0 implements w0 {

    /* renamed from: a  reason: collision with root package name */
    private final Executor f10877a;

    /* renamed from: b  reason: collision with root package name */
    private final ContentResolver f10878b;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    class a extends e1 {

        /* renamed from: q  reason: collision with root package name */
        final /* synthetic */ y0 f10879q;

        /* renamed from: r  reason: collision with root package name */
        final /* synthetic */ ProducerContext f10880r;

        /* renamed from: s  reason: collision with root package name */
        final /* synthetic */ ImageRequest f10881s;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        a(Consumer consumer, y0 y0Var, ProducerContext producerContext, String str, y0 y0Var2, ProducerContext producerContext2, ImageRequest imageRequest) {
            super(consumer, y0Var, producerContext, str);
            this.f10879q = y0Var2;
            this.f10880r = producerContext2;
            this.f10881s = imageRequest;
        }

        /* JADX INFO: Access modifiers changed from: protected */
        @Override // com.facebook.imagepipeline.producers.e1, n8.h
        public void e(Exception exc) {
            super.e(exc);
            this.f10879q.b(this.f10880r, "VideoThumbnailProducer", false);
            this.f10880r.m("local", MediaStreamTrack.VIDEO_TRACK_KIND);
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
            try {
                str = n0.this.i(this.f10881s);
            } catch (IllegalArgumentException unused) {
                str = null;
            }
            if (str != null) {
                bitmap = ThumbnailUtils.createVideoThumbnail(str, n0.g(this.f10881s));
            } else {
                bitmap = null;
            }
            if (bitmap == null) {
                bitmap = n0.h(n0.this.f10878b, this.f10881s.getSourceUri());
            }
            if (bitmap == null) {
                return null;
            }
            ta.f N = ta.f.N(bitmap, la.e.a(), ta.n.f50739d, 0);
            this.f10880r.p("image_format", "thumbnail");
            N.J(this.f10880r.getExtras());
            return CloseableReference.H0(N);
        }

        /* JADX INFO: Access modifiers changed from: protected */
        @Override // com.facebook.imagepipeline.producers.e1, n8.h
        /* renamed from: m */
        public void f(CloseableReference closeableReference) {
            boolean z10;
            super.f(closeableReference);
            y0 y0Var = this.f10879q;
            ProducerContext producerContext = this.f10880r;
            if (closeableReference != null) {
                z10 = true;
            } else {
                z10 = false;
            }
            y0Var.b(producerContext, "VideoThumbnailProducer", z10);
            this.f10880r.m("local", MediaStreamTrack.VIDEO_TRACK_KIND);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    class b extends f {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ e1 f10883a;

        b(e1 e1Var) {
            this.f10883a = e1Var;
        }

        @Override // com.facebook.imagepipeline.producers.x0
        public void b() {
            this.f10883a.a();
        }
    }

    public n0(Executor executor, ContentResolver contentResolver) {
        this.f10877a = executor;
        this.f10878b = contentResolver;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static int g(ImageRequest imageRequest) {
        if (imageRequest.getPreferredWidth() <= 96 && imageRequest.getPreferredHeight() <= 96) {
            return 3;
        }
        return 1;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static Bitmap h(ContentResolver contentResolver, Uri uri) {
        MediaMetadataRetriever mediaMetadataRetriever;
        MediaMetadataRetriever mediaMetadataRetriever2 = null;
        try {
            ParcelFileDescriptor openFileDescriptor = contentResolver.openFileDescriptor(uri, "r");
            p8.j.g(openFileDescriptor);
            mediaMetadataRetriever = new MediaMetadataRetriever();
            try {
                mediaMetadataRetriever.setDataSource(openFileDescriptor.getFileDescriptor());
                Bitmap frameAtTime = mediaMetadataRetriever.getFrameAtTime(-1L);
                try {
                    mediaMetadataRetriever.release();
                } catch (IOException unused) {
                }
                return frameAtTime;
            } catch (FileNotFoundException unused2) {
                if (mediaMetadataRetriever != null) {
                    try {
                        mediaMetadataRetriever.release();
                    } catch (IOException unused3) {
                    }
                }
                return null;
            } catch (Throwable th2) {
                th = th2;
                mediaMetadataRetriever2 = mediaMetadataRetriever;
                if (mediaMetadataRetriever2 != null) {
                    try {
                        mediaMetadataRetriever2.release();
                    } catch (IOException unused4) {
                    }
                }
                throw th;
            }
        } catch (FileNotFoundException unused5) {
            mediaMetadataRetriever = null;
        } catch (Throwable th3) {
            th = th3;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public String i(ImageRequest imageRequest) {
        return x8.f.e(this.f10878b, imageRequest.getSourceUri());
    }

    @Override // com.facebook.imagepipeline.producers.w0
    public void b(Consumer consumer, ProducerContext producerContext) {
        y0 y10 = producerContext.y();
        ImageRequest I = producerContext.I();
        producerContext.m("local", MediaStreamTrack.VIDEO_TRACK_KIND);
        a aVar = new a(consumer, y10, producerContext, "VideoThumbnailProducer", y10, producerContext, I);
        producerContext.g(new b(aVar));
        this.f10877a.execute(aVar);
    }
}
