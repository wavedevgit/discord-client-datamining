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
    private final Executor f10737a;

    /* renamed from: b  reason: collision with root package name */
    private final ContentResolver f10738b;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    class a extends e1 {

        /* renamed from: q  reason: collision with root package name */
        final /* synthetic */ y0 f10739q;

        /* renamed from: r  reason: collision with root package name */
        final /* synthetic */ ProducerContext f10740r;

        /* renamed from: s  reason: collision with root package name */
        final /* synthetic */ ImageRequest f10741s;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        a(Consumer consumer, y0 y0Var, ProducerContext producerContext, String str, y0 y0Var2, ProducerContext producerContext2, ImageRequest imageRequest) {
            super(consumer, y0Var, producerContext, str);
            this.f10739q = y0Var2;
            this.f10740r = producerContext2;
            this.f10741s = imageRequest;
        }

        /* JADX INFO: Access modifiers changed from: protected */
        @Override // com.facebook.imagepipeline.producers.e1, m8.h
        public void e(Exception exc) {
            super.e(exc);
            this.f10739q.b(this.f10740r, "VideoThumbnailProducer", false);
            this.f10740r.m("local", MediaStreamTrack.VIDEO_TRACK_KIND);
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
            try {
                str = n0.this.i(this.f10741s);
            } catch (IllegalArgumentException unused) {
                str = null;
            }
            if (str != null) {
                bitmap = ThumbnailUtils.createVideoThumbnail(str, n0.g(this.f10741s));
            } else {
                bitmap = null;
            }
            if (bitmap == null) {
                bitmap = n0.h(n0.this.f10738b, this.f10741s.getSourceUri());
            }
            if (bitmap == null) {
                return null;
            }
            sa.f o12 = sa.f.o1(bitmap, ka.e.a(), sa.n.f49850d, 0);
            this.f10740r.p("image_format", "thumbnail");
            o12.J(this.f10740r.getExtras());
            return CloseableReference.K0(o12);
        }

        /* JADX INFO: Access modifiers changed from: protected */
        @Override // com.facebook.imagepipeline.producers.e1, m8.h
        /* renamed from: m */
        public void f(CloseableReference closeableReference) {
            boolean z10;
            super.f(closeableReference);
            y0 y0Var = this.f10739q;
            ProducerContext producerContext = this.f10740r;
            if (closeableReference != null) {
                z10 = true;
            } else {
                z10 = false;
            }
            y0Var.b(producerContext, "VideoThumbnailProducer", z10);
            this.f10740r.m("local", MediaStreamTrack.VIDEO_TRACK_KIND);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    class b extends f {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ e1 f10743a;

        b(e1 e1Var) {
            this.f10743a = e1Var;
        }

        @Override // com.facebook.imagepipeline.producers.x0
        public void b() {
            this.f10743a.a();
        }
    }

    public n0(Executor executor, ContentResolver contentResolver) {
        this.f10737a = executor;
        this.f10738b = contentResolver;
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
            o8.j.g(openFileDescriptor);
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
        return w8.f.e(this.f10738b, imageRequest.getSourceUri());
    }

    @Override // com.facebook.imagepipeline.producers.w0
    public void b(Consumer consumer, ProducerContext producerContext) {
        y0 y10 = producerContext.y();
        ImageRequest I = producerContext.I();
        producerContext.m("local", MediaStreamTrack.VIDEO_TRACK_KIND);
        a aVar = new a(consumer, y10, producerContext, "VideoThumbnailProducer", y10, producerContext, I);
        producerContext.g(new b(aVar));
        this.f10737a.execute(aVar);
    }
}
