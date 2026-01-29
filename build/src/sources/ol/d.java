package ol;

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
import jl.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class d implements f {

    /* renamed from: i  reason: collision with root package name */
    private static final String f44390i = "d";

    /* renamed from: a  reason: collision with root package name */
    LinkedList f44391a;

    /* renamed from: b  reason: collision with root package name */
    boolean f44392b;

    /* renamed from: c  reason: collision with root package name */
    MediaMuxer f44393c;

    /* renamed from: d  reason: collision with root package name */
    private MediaFormat[] f44394d;

    /* renamed from: e  reason: collision with root package name */
    private ParcelFileDescriptor f44395e;

    /* renamed from: f  reason: collision with root package name */
    private String f44396f;

    /* renamed from: g  reason: collision with root package name */
    private int f44397g;

    /* renamed from: h  reason: collision with root package name */
    private int f44398h;

    public d(Context context, Uri uri, int i10, int i11, int i12) {
        MediaMuxer mediaMuxer;
        try {
            if (Build.VERSION.SDK_INT >= 26) {
                ParcelFileDescriptor openFileDescriptor = context.getContentResolver().openFileDescriptor(uri, "rwt");
                this.f44395e = openFileDescriptor;
                if (openFileDescriptor != null) {
                    c.a();
                    mediaMuxer = b.a(this.f44395e.getFileDescriptor(), i12);
                } else {
                    throw new IOException("Inaccessible URI " + uri);
                }
            } else if ("file".equalsIgnoreCase(uri.getScheme()) && uri.getPath() != null) {
                mediaMuxer = new MediaMuxer(uri.getPath(), i12);
            } else {
                throw new jl.c(c.a.UNSUPPORTED_URI_TYPE, uri, i12, new Throwable());
            }
            d(mediaMuxer, i10, i11);
        } catch (IOException e10) {
            e();
            throw new jl.c(c.a.IO_FAILUE, uri, i12, e10);
        } catch (IllegalArgumentException e11) {
            throw new jl.c(c.a.INVALID_PARAMS, uri, i12, e11);
        }
    }

    private void d(MediaMuxer mediaMuxer, int i10, int i11) {
        this.f44398h = i10;
        this.f44393c = mediaMuxer;
        mediaMuxer.setOrientationHint(i11);
        this.f44397g = 0;
        this.f44392b = false;
        this.f44391a = new LinkedList();
        this.f44394d = new MediaFormat[i10];
    }

    private void e() {
        try {
            ParcelFileDescriptor parcelFileDescriptor = this.f44395e;
            if (parcelFileDescriptor != null) {
                parcelFileDescriptor.close();
                this.f44395e = null;
            }
        } catch (IOException unused) {
        }
    }

    @Override // ol.f
    public String a() {
        String str = this.f44396f;
        if (str != null) {
            return str;
        }
        return "";
    }

    @Override // ol.f
    public void b(int i10, ByteBuffer byteBuffer, MediaCodec.BufferInfo bufferInfo) {
        if (this.f44392b) {
            if (byteBuffer == null) {
                Log.e(f44390i, "Trying to write a null buffer, skipping");
                return;
            } else {
                this.f44393c.writeSampleData(i10, byteBuffer, bufferInfo);
                return;
            }
        }
        this.f44391a.addLast(new g(i10, byteBuffer, bufferInfo));
    }

    @Override // ol.f
    public int c(MediaFormat mediaFormat, int i10) {
        this.f44394d[i10] = mediaFormat;
        int i11 = this.f44397g + 1;
        this.f44397g = i11;
        if (i11 == this.f44398h) {
            Log.d(f44390i, "All tracks added, starting MediaMuxer, writing out " + this.f44391a.size() + " queued samples");
            for (MediaFormat mediaFormat2 : this.f44394d) {
                this.f44393c.addTrack(mediaFormat2);
            }
            this.f44393c.start();
            this.f44392b = true;
            while (!this.f44391a.isEmpty()) {
                g gVar = (g) this.f44391a.removeFirst();
                this.f44393c.writeSampleData(gVar.c(), gVar.a(), gVar.b());
            }
        }
        return i10;
    }

    @Override // ol.f
    public void release() {
        try {
            this.f44393c.release();
        } finally {
            e();
        }
    }
}
