package tl;

import android.content.Context;
import android.media.MediaCodec;
import android.media.MediaFormat;
import android.media.MediaMuxer;
import android.net.Uri;
import android.os.Build;
import android.os.ParcelFileDescriptor;
import android.util.Log;
import java.io.IOException;
import java.nio.ByteBuffer;
import java.util.LinkedList;
import ol.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class d implements f {

    /* renamed from: i  reason: collision with root package name */
    private static final String f50737i = "d";

    /* renamed from: a  reason: collision with root package name */
    LinkedList f50738a;

    /* renamed from: b  reason: collision with root package name */
    boolean f50739b;

    /* renamed from: c  reason: collision with root package name */
    MediaMuxer f50740c;

    /* renamed from: d  reason: collision with root package name */
    private MediaFormat[] f50741d;

    /* renamed from: e  reason: collision with root package name */
    private ParcelFileDescriptor f50742e;

    /* renamed from: f  reason: collision with root package name */
    private String f50743f;

    /* renamed from: g  reason: collision with root package name */
    private int f50744g;

    /* renamed from: h  reason: collision with root package name */
    private int f50745h;

    public d(Context context, Uri uri, int i10, int i11, int i12) {
        MediaMuxer mediaMuxer;
        try {
            if (Build.VERSION.SDK_INT >= 26) {
                ParcelFileDescriptor openFileDescriptor = context.getContentResolver().openFileDescriptor(uri, "rwt");
                this.f50742e = openFileDescriptor;
                if (openFileDescriptor != null) {
                    c.a();
                    mediaMuxer = b.a(this.f50742e.getFileDescriptor(), i12);
                } else {
                    throw new IOException("Inaccessible URI " + uri);
                }
            } else if ("file".equalsIgnoreCase(uri.getScheme()) && uri.getPath() != null) {
                mediaMuxer = new MediaMuxer(uri.getPath(), i12);
            } else {
                throw new ol.c(c.a.UNSUPPORTED_URI_TYPE, uri, i12, new Throwable());
            }
            d(mediaMuxer, i10, i11);
        } catch (IOException e10) {
            e();
            throw new ol.c(c.a.IO_FAILUE, uri, i12, e10);
        } catch (IllegalArgumentException e11) {
            throw new ol.c(c.a.INVALID_PARAMS, uri, i12, e11);
        }
    }

    private void d(MediaMuxer mediaMuxer, int i10, int i11) {
        this.f50745h = i10;
        this.f50740c = mediaMuxer;
        mediaMuxer.setOrientationHint(i11);
        this.f50744g = 0;
        this.f50739b = false;
        this.f50738a = new LinkedList();
        this.f50741d = new MediaFormat[i10];
    }

    private void e() {
        try {
            ParcelFileDescriptor parcelFileDescriptor = this.f50742e;
            if (parcelFileDescriptor != null) {
                parcelFileDescriptor.close();
                this.f50742e = null;
            }
        } catch (IOException unused) {
        }
    }

    @Override // tl.f
    public String a() {
        String str = this.f50743f;
        if (str != null) {
            return str;
        }
        return "";
    }

    @Override // tl.f
    public void b(int i10, ByteBuffer byteBuffer, MediaCodec.BufferInfo bufferInfo) {
        if (this.f50739b) {
            if (byteBuffer == null) {
                Log.e(f50737i, "Trying to write a null buffer, skipping");
                return;
            } else {
                this.f50740c.writeSampleData(i10, byteBuffer, bufferInfo);
                return;
            }
        }
        this.f50738a.addLast(new g(i10, byteBuffer, bufferInfo));
    }

    @Override // tl.f
    public int c(MediaFormat mediaFormat, int i10) {
        this.f50741d[i10] = mediaFormat;
        int i11 = this.f50744g + 1;
        this.f50744g = i11;
        if (i11 == this.f50745h) {
            Log.d(f50737i, "All tracks added, starting MediaMuxer, writing out " + this.f50738a.size() + " queued samples");
            for (MediaFormat mediaFormat2 : this.f50741d) {
                this.f50740c.addTrack(mediaFormat2);
            }
            this.f50740c.start();
            this.f50739b = true;
            while (!this.f50738a.isEmpty()) {
                g gVar = (g) this.f50738a.removeFirst();
                this.f50740c.writeSampleData(gVar.c(), gVar.a(), gVar.b());
            }
        }
        return i10;
    }

    @Override // tl.f
    public void release() {
        try {
            this.f50740c.release();
        } finally {
            e();
        }
    }
}
