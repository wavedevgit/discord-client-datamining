package rl;

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
import ml.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class d implements f {

    /* renamed from: i  reason: collision with root package name */
    private static final String f48874i = "d";

    /* renamed from: a  reason: collision with root package name */
    LinkedList f48875a;

    /* renamed from: b  reason: collision with root package name */
    boolean f48876b;

    /* renamed from: c  reason: collision with root package name */
    MediaMuxer f48877c;

    /* renamed from: d  reason: collision with root package name */
    private MediaFormat[] f48878d;

    /* renamed from: e  reason: collision with root package name */
    private ParcelFileDescriptor f48879e;

    /* renamed from: f  reason: collision with root package name */
    private String f48880f;

    /* renamed from: g  reason: collision with root package name */
    private int f48881g;

    /* renamed from: h  reason: collision with root package name */
    private int f48882h;

    public d(Context context, Uri uri, int i10, int i11, int i12) {
        MediaMuxer mediaMuxer;
        try {
            if (Build.VERSION.SDK_INT >= 26) {
                ParcelFileDescriptor openFileDescriptor = context.getContentResolver().openFileDescriptor(uri, "rwt");
                this.f48879e = openFileDescriptor;
                if (openFileDescriptor != null) {
                    c.a();
                    mediaMuxer = b.a(this.f48879e.getFileDescriptor(), i12);
                } else {
                    throw new IOException("Inaccessible URI " + uri);
                }
            } else if ("file".equalsIgnoreCase(uri.getScheme()) && uri.getPath() != null) {
                mediaMuxer = new MediaMuxer(uri.getPath(), i12);
            } else {
                throw new ml.c(c.a.UNSUPPORTED_URI_TYPE, uri, i12, new Throwable());
            }
            d(mediaMuxer, i10, i11);
        } catch (IOException e10) {
            e();
            throw new ml.c(c.a.IO_FAILUE, uri, i12, e10);
        } catch (IllegalArgumentException e11) {
            throw new ml.c(c.a.INVALID_PARAMS, uri, i12, e11);
        }
    }

    private void d(MediaMuxer mediaMuxer, int i10, int i11) {
        this.f48882h = i10;
        this.f48877c = mediaMuxer;
        mediaMuxer.setOrientationHint(i11);
        this.f48881g = 0;
        this.f48876b = false;
        this.f48875a = new LinkedList();
        this.f48878d = new MediaFormat[i10];
    }

    private void e() {
        try {
            ParcelFileDescriptor parcelFileDescriptor = this.f48879e;
            if (parcelFileDescriptor != null) {
                parcelFileDescriptor.close();
                this.f48879e = null;
            }
        } catch (IOException unused) {
        }
    }

    @Override // rl.f
    public String a() {
        String str = this.f48880f;
        if (str != null) {
            return str;
        }
        return "";
    }

    @Override // rl.f
    public void b(int i10, ByteBuffer byteBuffer, MediaCodec.BufferInfo bufferInfo) {
        if (this.f48876b) {
            if (byteBuffer == null) {
                Log.e(f48874i, "Trying to write a null buffer, skipping");
                return;
            } else {
                this.f48877c.writeSampleData(i10, byteBuffer, bufferInfo);
                return;
            }
        }
        this.f48875a.addLast(new g(i10, byteBuffer, bufferInfo));
    }

    @Override // rl.f
    public int c(MediaFormat mediaFormat, int i10) {
        this.f48878d[i10] = mediaFormat;
        int i11 = this.f48881g + 1;
        this.f48881g = i11;
        if (i11 == this.f48882h) {
            Log.d(f48874i, "All tracks added, starting MediaMuxer, writing out " + this.f48875a.size() + " queued samples");
            for (MediaFormat mediaFormat2 : this.f48878d) {
                this.f48877c.addTrack(mediaFormat2);
            }
            this.f48877c.start();
            this.f48876b = true;
            while (!this.f48875a.isEmpty()) {
                g gVar = (g) this.f48875a.removeFirst();
                this.f48877c.writeSampleData(gVar.c(), gVar.a(), gVar.b());
            }
        }
        return i10;
    }

    @Override // rl.f
    public void release() {
        try {
            this.f48877c.release();
        } finally {
            e();
        }
    }
}
