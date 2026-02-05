package sa;

import android.graphics.Bitmap;
import com.facebook.common.references.CloseableReference;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class b extends a implements f {

    /* renamed from: t  reason: collision with root package name */
    private static boolean f49486t = false;

    /* renamed from: o  reason: collision with root package name */
    private CloseableReference f49487o;

    /* renamed from: p  reason: collision with root package name */
    private volatile Bitmap f49488p;

    /* renamed from: q  reason: collision with root package name */
    private final o f49489q;

    /* renamed from: r  reason: collision with root package name */
    private final int f49490r;

    /* renamed from: s  reason: collision with root package name */
    private final int f49491s;

    /* JADX INFO: Access modifiers changed from: protected */
    public b(Bitmap bitmap, s8.c cVar, o oVar, int i10, int i11) {
        this.f49488p = (Bitmap) o8.j.g(bitmap);
        this.f49487o = CloseableReference.V0(this.f49488p, (s8.c) o8.j.g(cVar));
        this.f49489q = oVar;
        this.f49490r = i10;
        this.f49491s = i11;
    }

    private synchronized CloseableReference F0() {
        CloseableReference closeableReference;
        closeableReference = this.f49487o;
        this.f49487o = null;
        this.f49488p = null;
        return closeableReference;
    }

    private static int I0(Bitmap bitmap) {
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

    public static boolean N0() {
        return f49486t;
    }

    @Override // sa.a, sa.e
    public o J1() {
        return this.f49489q;
    }

    @Override // sa.d
    public Bitmap N1() {
        return this.f49488p;
    }

    @Override // sa.f
    public synchronized CloseableReference Q() {
        return CloseableReference.E(this.f49487o);
    }

    @Override // sa.f
    public int b1() {
        return this.f49491s;
    }

    @Override // sa.e, java.io.Closeable, java.lang.AutoCloseable
    public void close() {
        CloseableReference F0 = F0();
        if (F0 != null) {
            F0.close();
        }
    }

    @Override // sa.e, com.facebook.imagepipeline.image.ImageInfo
    public int getHeight() {
        int i10;
        if (this.f49490r % 180 == 0 && (i10 = this.f49491s) != 5 && i10 != 7) {
            return I0(this.f49488p);
        }
        return K0(this.f49488p);
    }

    @Override // sa.e, com.facebook.imagepipeline.image.ImageInfo
    public int getWidth() {
        int i10;
        if (this.f49490r % 180 == 0 && (i10 = this.f49491s) != 5 && i10 != 7) {
            return K0(this.f49488p);
        }
        return I0(this.f49488p);
    }

    @Override // sa.e
    public synchronized boolean isClosed() {
        boolean z10;
        if (this.f49487o == null) {
            z10 = true;
        } else {
            z10 = false;
        }
        return z10;
    }

    @Override // sa.f
    public int q1() {
        return this.f49490r;
    }

    @Override // sa.e
    public int u() {
        return cb.d.j(this.f49488p);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public b(CloseableReference closeableReference, o oVar, int i10, int i11) {
        CloseableReference closeableReference2 = (CloseableReference) o8.j.g(closeableReference.m());
        this.f49487o = closeableReference2;
        this.f49488p = (Bitmap) closeableReference2.E0();
        this.f49489q = oVar;
        this.f49490r = i10;
        this.f49491s = i11;
    }
}
