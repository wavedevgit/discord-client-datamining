package ul;

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
import pl.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class d implements f {

    /* renamed from: i  reason: collision with root package name */
    private static final String f51690i = "d";

    /* renamed from: a  reason: collision with root package name */
    LinkedList f51691a;

    /* renamed from: b  reason: collision with root package name */
    boolean f51692b;

    /* renamed from: c  reason: collision with root package name */
    MediaMuxer f51693c;

    /* renamed from: d  reason: collision with root package name */
    private MediaFormat[] f51694d;

    /* renamed from: e  reason: collision with root package name */
    private ParcelFileDescriptor f51695e;

    /* renamed from: f  reason: collision with root package name */
    private String f51696f;

    /* renamed from: g  reason: collision with root package name */
    private int f51697g;

    /* renamed from: h  reason: collision with root package name */
    private int f51698h;

    public d(Context context, Uri uri, int i10, int i11, int i12) {
        MediaMuxer mediaMuxer;
        try {
            if (Build.VERSION.SDK_INT >= 26) {
                ParcelFileDescriptor openFileDescriptor = context.getContentResolver().openFileDescriptor(uri, "rwt");
                this.f51695e = openFileDescriptor;
                if (openFileDescriptor != null) {
                    c.a();
                    mediaMuxer = b.a(this.f51695e.getFileDescriptor(), i12);
                } else {
                    throw new IOException("Inaccessible URI " + uri);
                }
            } else if ("file".equalsIgnoreCase(uri.getScheme()) && uri.getPath() != null) {
                mediaMuxer = new MediaMuxer(uri.getPath(), i12);
            } else {
                throw new pl.c(c.a.UNSUPPORTED_URI_TYPE, uri, i12, new Throwable());
            }
            d(mediaMuxer, i10, i11);
        } catch (IOException e10) {
            e();
            throw new pl.c(c.a.IO_FAILUE, uri, i12, e10);
        } catch (IllegalArgumentException e11) {
            throw new pl.c(c.a.INVALID_PARAMS, uri, i12, e11);
        }
    }

    private void d(MediaMuxer mediaMuxer, int i10, int i11) {
        this.f51698h = i10;
        this.f51693c = mediaMuxer;
        mediaMuxer.setOrientationHint(i11);
        this.f51697g = 0;
        this.f51692b = false;
        this.f51691a = new LinkedList();
        this.f51694d = new MediaFormat[i10];
    }

    private void e() {
        try {
            ParcelFileDescriptor parcelFileDescriptor = this.f51695e;
            if (parcelFileDescriptor != null) {
                parcelFileDescriptor.close();
                this.f51695e = null;
            }
        } catch (IOException unused) {
        }
    }

    @Override // ul.f
    public String a() {
        String str = this.f51696f;
        if (str != null) {
            return str;
        }
        return "";
    }

    @Override // ul.f
    public void b(int i10, ByteBuffer byteBuffer, MediaCodec.BufferInfo bufferInfo) {
        if (this.f51692b) {
            if (byteBuffer == null) {
                Log.e(f51690i, "Trying to write a null buffer, skipping");
                return;
            } else {
                this.f51693c.writeSampleData(i10, byteBuffer, bufferInfo);
                return;
            }
        }
        this.f51691a.addLast(new g(i10, byteBuffer, bufferInfo));
    }

    @Override // ul.f
    public int c(MediaFormat mediaFormat, int i10) {
        this.f51694d[i10] = mediaFormat;
        int i11 = this.f51697g + 1;
        this.f51697g = i11;
        if (i11 == this.f51698h) {
            Log.d(f51690i, "All tracks added, starting MediaMuxer, writing out " + this.f51691a.size() + " queued samples");
            for (MediaFormat mediaFormat2 : this.f51694d) {
                this.f51693c.addTrack(mediaFormat2);
            }
            this.f51693c.start();
            this.f51692b = true;
            while (!this.f51691a.isEmpty()) {
                g gVar = (g) this.f51691a.removeFirst();
                this.f51693c.writeSampleData(gVar.c(), gVar.a(), gVar.b());
            }
        }
        return i10;
    }

    @Override // ul.f
    public void release() {
        try {
            this.f51693c.release();
        } finally {
            e();
        }
    }
}
