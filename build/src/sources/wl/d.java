package wl;

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
import rl.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class d implements f {

    /* renamed from: i  reason: collision with root package name */
    private static final String f52903i = "d";

    /* renamed from: a  reason: collision with root package name */
    LinkedList f52904a;

    /* renamed from: b  reason: collision with root package name */
    boolean f52905b;

    /* renamed from: c  reason: collision with root package name */
    MediaMuxer f52906c;

    /* renamed from: d  reason: collision with root package name */
    private MediaFormat[] f52907d;

    /* renamed from: e  reason: collision with root package name */
    private ParcelFileDescriptor f52908e;

    /* renamed from: f  reason: collision with root package name */
    private String f52909f;

    /* renamed from: g  reason: collision with root package name */
    private int f52910g;

    /* renamed from: h  reason: collision with root package name */
    private int f52911h;

    public d(Context context, Uri uri, int i10, int i11, int i12) {
        MediaMuxer mediaMuxer;
        try {
            if (Build.VERSION.SDK_INT >= 26) {
                ParcelFileDescriptor openFileDescriptor = context.getContentResolver().openFileDescriptor(uri, "rwt");
                this.f52908e = openFileDescriptor;
                if (openFileDescriptor != null) {
                    c.a();
                    mediaMuxer = b.a(this.f52908e.getFileDescriptor(), i12);
                } else {
                    throw new IOException("Inaccessible URI " + uri);
                }
            } else if ("file".equalsIgnoreCase(uri.getScheme()) && uri.getPath() != null) {
                mediaMuxer = new MediaMuxer(uri.getPath(), i12);
            } else {
                throw new rl.c(c.a.UNSUPPORTED_URI_TYPE, uri, i12, new Throwable());
            }
            d(mediaMuxer, i10, i11);
        } catch (IOException e10) {
            e();
            throw new rl.c(c.a.IO_FAILUE, uri, i12, e10);
        } catch (IllegalArgumentException e11) {
            throw new rl.c(c.a.INVALID_PARAMS, uri, i12, e11);
        }
    }

    private void d(MediaMuxer mediaMuxer, int i10, int i11) {
        this.f52911h = i10;
        this.f52906c = mediaMuxer;
        mediaMuxer.setOrientationHint(i11);
        this.f52910g = 0;
        this.f52905b = false;
        this.f52904a = new LinkedList();
        this.f52907d = new MediaFormat[i10];
    }

    private void e() {
        try {
            ParcelFileDescriptor parcelFileDescriptor = this.f52908e;
            if (parcelFileDescriptor != null) {
                parcelFileDescriptor.close();
                this.f52908e = null;
            }
        } catch (IOException unused) {
        }
    }

    @Override // wl.f
    public String a() {
        String str = this.f52909f;
        if (str != null) {
            return str;
        }
        return "";
    }

    @Override // wl.f
    public void b(int i10, ByteBuffer byteBuffer, MediaCodec.BufferInfo bufferInfo) {
        if (this.f52905b) {
            if (byteBuffer == null) {
                Log.e(f52903i, "Trying to write a null buffer, skipping");
                return;
            } else {
                this.f52906c.writeSampleData(i10, byteBuffer, bufferInfo);
                return;
            }
        }
        this.f52904a.addLast(new g(i10, byteBuffer, bufferInfo));
    }

    @Override // wl.f
    public int c(MediaFormat mediaFormat, int i10) {
        this.f52907d[i10] = mediaFormat;
        int i11 = this.f52910g + 1;
        this.f52910g = i11;
        if (i11 == this.f52911h) {
            Log.d(f52903i, "All tracks added, starting MediaMuxer, writing out " + this.f52904a.size() + " queued samples");
            for (MediaFormat mediaFormat2 : this.f52907d) {
                this.f52906c.addTrack(mediaFormat2);
            }
            this.f52906c.start();
            this.f52905b = true;
            while (!this.f52904a.isEmpty()) {
                g gVar = (g) this.f52904a.removeFirst();
                this.f52906c.writeSampleData(gVar.c(), gVar.a(), gVar.b());
            }
        }
        return i10;
    }

    @Override // wl.f
    public void release() {
        try {
            this.f52906c.release();
        } finally {
            e();
        }
    }
}
