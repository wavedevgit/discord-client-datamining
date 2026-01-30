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
    private static final String f44406i = "d";

    /* renamed from: a  reason: collision with root package name */
    LinkedList f44407a;

    /* renamed from: b  reason: collision with root package name */
    boolean f44408b;

    /* renamed from: c  reason: collision with root package name */
    MediaMuxer f44409c;

    /* renamed from: d  reason: collision with root package name */
    private MediaFormat[] f44410d;

    /* renamed from: e  reason: collision with root package name */
    private ParcelFileDescriptor f44411e;

    /* renamed from: f  reason: collision with root package name */
    private String f44412f;

    /* renamed from: g  reason: collision with root package name */
    private int f44413g;

    /* renamed from: h  reason: collision with root package name */
    private int f44414h;

    public d(Context context, Uri uri, int i10, int i11, int i12) {
        MediaMuxer mediaMuxer;
        try {
            if (Build.VERSION.SDK_INT >= 26) {
                ParcelFileDescriptor openFileDescriptor = context.getContentResolver().openFileDescriptor(uri, "rwt");
                this.f44411e = openFileDescriptor;
                if (openFileDescriptor != null) {
                    c.a();
                    mediaMuxer = b.a(this.f44411e.getFileDescriptor(), i12);
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
        this.f44414h = i10;
        this.f44409c = mediaMuxer;
        mediaMuxer.setOrientationHint(i11);
        this.f44413g = 0;
        this.f44408b = false;
        this.f44407a = new LinkedList();
        this.f44410d = new MediaFormat[i10];
    }

    private void e() {
        try {
            ParcelFileDescriptor parcelFileDescriptor = this.f44411e;
            if (parcelFileDescriptor != null) {
                parcelFileDescriptor.close();
                this.f44411e = null;
            }
        } catch (IOException unused) {
        }
    }

    @Override // ol.f
    public String a() {
        String str = this.f44412f;
        if (str != null) {
            return str;
        }
        return "";
    }

    @Override // ol.f
    public void b(int i10, ByteBuffer byteBuffer, MediaCodec.BufferInfo bufferInfo) {
        if (this.f44408b) {
            if (byteBuffer == null) {
                Log.e(f44406i, "Trying to write a null buffer, skipping");
                return;
            } else {
                this.f44409c.writeSampleData(i10, byteBuffer, bufferInfo);
                return;
            }
        }
        this.f44407a.addLast(new g(i10, byteBuffer, bufferInfo));
    }

    @Override // ol.f
    public int c(MediaFormat mediaFormat, int i10) {
        this.f44410d[i10] = mediaFormat;
        int i11 = this.f44413g + 1;
        this.f44413g = i11;
        if (i11 == this.f44414h) {
            Log.d(f44406i, "All tracks added, starting MediaMuxer, writing out " + this.f44407a.size() + " queued samples");
            for (MediaFormat mediaFormat2 : this.f44410d) {
                this.f44409c.addTrack(mediaFormat2);
            }
            this.f44409c.start();
            this.f44408b = true;
            while (!this.f44407a.isEmpty()) {
                g gVar = (g) this.f44407a.removeFirst();
                this.f44409c.writeSampleData(gVar.c(), gVar.a(), gVar.b());
            }
        }
        return i10;
    }

    @Override // ol.f
    public void release() {
        try {
            this.f44409c.release();
        } finally {
            e();
        }
    }
}
