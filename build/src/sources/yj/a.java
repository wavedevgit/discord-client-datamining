package yj;

import android.graphics.Bitmap;
import android.graphics.Matrix;
import android.media.Image;
import android.os.SystemClock;
import gf.q;
import java.nio.ByteBuffer;
import ng.fc;
import ng.hc;
import sj.h;
import zj.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class a implements h {

    /* renamed from: a  reason: collision with root package name */
    private volatile Bitmap f54783a;

    /* renamed from: b  reason: collision with root package name */
    private volatile ByteBuffer f54784b;

    /* renamed from: c  reason: collision with root package name */
    private volatile b f54785c;

    /* renamed from: d  reason: collision with root package name */
    private final int f54786d;

    /* renamed from: e  reason: collision with root package name */
    private final int f54787e;

    /* renamed from: f  reason: collision with root package name */
    private final int f54788f;

    /* renamed from: g  reason: collision with root package name */
    private final int f54789g;

    /* renamed from: h  reason: collision with root package name */
    private final Matrix f54790h;

    private a(Bitmap bitmap, int i10) {
        this.f54783a = (Bitmap) q.l(bitmap);
        this.f54786d = bitmap.getWidth();
        this.f54787e = bitmap.getHeight();
        m(i10);
        this.f54788f = i10;
        this.f54789g = -1;
        this.f54790h = null;
    }

    public static a a(Bitmap bitmap, int i10) {
        long elapsedRealtime = SystemClock.elapsedRealtime();
        a aVar = new a(bitmap, i10);
        o(-1, 1, elapsedRealtime, bitmap.getHeight(), bitmap.getWidth(), bitmap.getAllocationByteCount(), i10);
        return aVar;
    }

    public static a b(ByteBuffer byteBuffer, int i10, int i11, int i12, int i13) {
        long elapsedRealtime = SystemClock.elapsedRealtime();
        a aVar = new a(byteBuffer, i10, i11, i12, i13);
        o(i13, 3, elapsedRealtime, i11, i10, byteBuffer.limit(), i12);
        return aVar;
    }

    public static a c(Image image, int i10) {
        return n(image, i10, null);
    }

    private static int m(int i10) {
        boolean z10 = true;
        if (i10 != 0 && i10 != 90 && i10 != 180) {
            if (i10 == 270) {
                i10 = 270;
            } else {
                z10 = false;
            }
        }
        q.b(z10, "Invalid rotation. Only 0, 90, 180, 270 are supported currently.");
        return i10;
    }

    private static a n(Image image, int i10, Matrix matrix) {
        Image image2;
        int i11;
        int limit;
        a aVar;
        long elapsedRealtime = SystemClock.elapsedRealtime();
        q.m(image, "Please provide a valid image");
        m(i10);
        boolean z10 = true;
        if (image.getFormat() != 256 && image.getFormat() != 35) {
            z10 = false;
        }
        q.b(z10, "Only JPEG and YUV_420_888 are supported now");
        Image.Plane[] planes = image.getPlanes();
        if (image.getFormat() == 256) {
            limit = image.getPlanes()[0].getBuffer().limit();
            image2 = image;
            i11 = i10;
            aVar = new a(c.f().c(image, i10), 0);
        } else {
            for (Image.Plane plane : planes) {
                if (plane.getBuffer() != null) {
                    plane.getBuffer().rewind();
                }
            }
            image2 = image;
            i11 = i10;
            a aVar2 = new a(image2, image.getWidth(), image.getHeight(), i11, matrix);
            limit = (image2.getPlanes()[0].getBuffer().limit() * 3) / 2;
            aVar = aVar2;
        }
        o(image2.getFormat(), 5, elapsedRealtime, image2.getHeight(), image2.getWidth(), limit, i11);
        return aVar;
    }

    private static void o(int i10, int i11, long j10, int i12, int i13, int i14, int i15) {
        hc.a(fc.b("vision-common"), i10, i11, j10, i12, i13, i14, i15);
    }

    public Bitmap d() {
        return this.f54783a;
    }

    public ByteBuffer e() {
        return this.f54784b;
    }

    public Matrix f() {
        return this.f54790h;
    }

    public int g() {
        return this.f54789g;
    }

    public int h() {
        return this.f54787e;
    }

    public Image i() {
        if (this.f54785c == null) {
            return null;
        }
        return this.f54785c.a();
    }

    public Image.Plane[] j() {
        if (this.f54785c == null) {
            return null;
        }
        return this.f54785c.b();
    }

    public int k() {
        return this.f54788f;
    }

    public int l() {
        return this.f54786d;
    }

    private a(Image image, int i10, int i11, int i12, Matrix matrix) {
        q.l(image);
        this.f54785c = new b(image);
        this.f54786d = i10;
        this.f54787e = i11;
        m(i12);
        this.f54788f = i12;
        this.f54789g = 35;
        this.f54790h = matrix;
    }

    /* JADX WARN: Removed duplicated region for block: B:11:0x0025  */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    private a(java.nio.ByteBuffer r5, int r6, int r7, int r8, int r9) {
        /*
            r4 = this;
            r4.<init>()
            r0 = 842094169(0x32315659, float:1.0322389E-8)
            r1 = 0
            r2 = 1
            if (r9 == r0) goto Lf
            r0 = 17
            if (r9 != r0) goto L11
            r9 = r0
        Lf:
            r0 = r2
            goto L12
        L11:
            r0 = r1
        L12:
            gf.q.a(r0)
            java.lang.Object r0 = gf.q.l(r5)
            java.nio.ByteBuffer r0 = (java.nio.ByteBuffer) r0
            r4.f54784b = r0
            int r0 = r5.limit()
            int r3 = r6 * r7
            if (r0 <= r3) goto L26
            r1 = r2
        L26:
            java.lang.String r0 = "Image dimension, ByteBuffer size and format don't match. Please check if the ByteBuffer is in the decalred format."
            gf.q.b(r1, r0)
            r5.rewind()
            r4.f54786d = r6
            r4.f54787e = r7
            m(r8)
            r4.f54788f = r8
            r4.f54789g = r9
            r5 = 0
            r4.f54790h = r5
            return
        */
        throw new UnsupportedOperationException("Method not decompiled: yj.a.<init>(java.nio.ByteBuffer, int, int, int, int):void");
    }
}
