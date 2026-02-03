package sa;

import android.graphics.Bitmap;
import com.facebook.common.references.CloseableReference;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class b extends a implements f {

    /* renamed from: t  reason: collision with root package name */
    private static boolean f48930t = false;

    /* renamed from: o  reason: collision with root package name */
    private CloseableReference f48931o;

    /* renamed from: p  reason: collision with root package name */
    private volatile Bitmap f48932p;

    /* renamed from: q  reason: collision with root package name */
    private final o f48933q;

    /* renamed from: r  reason: collision with root package name */
    private final int f48934r;

    /* renamed from: s  reason: collision with root package name */
    private final int f48935s;

    /* JADX INFO: Access modifiers changed from: protected */
    public b(Bitmap bitmap, s8.c cVar, o oVar, int i10, int i11) {
        this.f48932p = (Bitmap) o8.j.g(bitmap);
        this.f48931o = CloseableReference.V0(this.f48932p, (s8.c) o8.j.g(cVar));
        this.f48933q = oVar;
        this.f48934r = i10;
        this.f48935s = i11;
    }

    private synchronized CloseableReference G0() {
        CloseableReference closeableReference;
        closeableReference = this.f48931o;
        this.f48931o = null;
        this.f48932p = null;
        return closeableReference;
    }

    private static int J0(Bitmap bitmap) {
        if (bitmap == null) {
            return 0;
        }
        return bitmap.getHeight();
    }

    private static int K0(Bitmap bitmap) {
        if (bitmap == null) {
            return 0;
        }
        return bitmap.getWidth();
    }

    public static boolean L0() {
        return f48930t;
    }

    @Override // sa.a, sa.e
    public o J1() {
        return this.f48933q;
    }

    @Override // sa.d
    public Bitmap N1() {
        return this.f48932p;
    }

    @Override // sa.f
    public synchronized CloseableReference Q() {
        return CloseableReference.E(this.f48931o);
    }

    @Override // sa.f
    public int b1() {
        return this.f48935s;
    }

    @Override // sa.e, java.io.Closeable, java.lang.AutoCloseable
    public void close() {
        CloseableReference G0 = G0();
        if (G0 != null) {
            G0.close();
        }
    }

    @Override // sa.e, com.facebook.imagepipeline.image.ImageInfo
    public int getHeight() {
        int i10;
        if (this.f48934r % 180 == 0 && (i10 = this.f48935s) != 5 && i10 != 7) {
            return J0(this.f48932p);
        }
        return K0(this.f48932p);
    }

    @Override // sa.e, com.facebook.imagepipeline.image.ImageInfo
    public int getWidth() {
        int i10;
        if (this.f48934r % 180 == 0 && (i10 = this.f48935s) != 5 && i10 != 7) {
            return K0(this.f48932p);
        }
        return J0(this.f48932p);
    }

    @Override // sa.e
    public synchronized boolean isClosed() {
        boolean z10;
        if (this.f48931o == null) {
            z10 = true;
        } else {
            z10 = false;
        }
        return z10;
    }

    @Override // sa.f
    public int q1() {
        return this.f48934r;
    }

    @Override // sa.e
    public int t() {
        return cb.d.j(this.f48932p);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public b(CloseableReference closeableReference, o oVar, int i10, int i11) {
        CloseableReference closeableReference2 = (CloseableReference) o8.j.g(closeableReference.B());
        this.f48931o = closeableReference2;
        this.f48932p = (Bitmap) closeableReference2.F0();
        this.f48933q = oVar;
        this.f48934r = i10;
        this.f48935s = i11;
    }
}
