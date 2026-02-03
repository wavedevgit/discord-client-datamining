package sa;

import android.graphics.Bitmap;
import com.facebook.common.references.CloseableReference;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class b extends a implements f {

    /* renamed from: t  reason: collision with root package name */
    private static boolean f49340t = false;

    /* renamed from: o  reason: collision with root package name */
    private CloseableReference f49341o;

    /* renamed from: p  reason: collision with root package name */
    private volatile Bitmap f49342p;

    /* renamed from: q  reason: collision with root package name */
    private final o f49343q;

    /* renamed from: r  reason: collision with root package name */
    private final int f49344r;

    /* renamed from: s  reason: collision with root package name */
    private final int f49345s;

    /* JADX INFO: Access modifiers changed from: protected */
    public b(Bitmap bitmap, s8.c cVar, o oVar, int i10, int i11) {
        this.f49342p = (Bitmap) o8.j.g(bitmap);
        this.f49341o = CloseableReference.V0(this.f49342p, (s8.c) o8.j.g(cVar));
        this.f49343q = oVar;
        this.f49344r = i10;
        this.f49345s = i11;
    }

    private synchronized CloseableReference F0() {
        CloseableReference closeableReference;
        closeableReference = this.f49341o;
        this.f49341o = null;
        this.f49342p = null;
        return closeableReference;
    }

    private static int I0(Bitmap bitmap) {
        if (bitmap == null) {
            return 0;
        }
        return bitmap.getHeight();
    }

    private static int J0(Bitmap bitmap) {
        if (bitmap == null) {
            return 0;
        }
        return bitmap.getWidth();
    }

    public static boolean M0() {
        return f49340t;
    }

    @Override // sa.a, sa.e
    public o J1() {
        return this.f49343q;
    }

    @Override // sa.d
    public Bitmap N1() {
        return this.f49342p;
    }

    @Override // sa.f
    public synchronized CloseableReference Q() {
        return CloseableReference.E(this.f49341o);
    }

    @Override // sa.f
    public int b1() {
        return this.f49345s;
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
        if (this.f49344r % 180 == 0 && (i10 = this.f49345s) != 5 && i10 != 7) {
            return I0(this.f49342p);
        }
        return J0(this.f49342p);
    }

    @Override // sa.e, com.facebook.imagepipeline.image.ImageInfo
    public int getWidth() {
        int i10;
        if (this.f49344r % 180 == 0 && (i10 = this.f49345s) != 5 && i10 != 7) {
            return J0(this.f49342p);
        }
        return I0(this.f49342p);
    }

    @Override // sa.e
    public synchronized boolean isClosed() {
        boolean z10;
        if (this.f49341o == null) {
            z10 = true;
        } else {
            z10 = false;
        }
        return z10;
    }

    @Override // sa.f
    public int q1() {
        return this.f49344r;
    }

    @Override // sa.e
    public int t() {
        return cb.d.j(this.f49342p);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public b(CloseableReference closeableReference, o oVar, int i10, int i11) {
        CloseableReference closeableReference2 = (CloseableReference) o8.j.g(closeableReference.B());
        this.f49341o = closeableReference2;
        this.f49342p = (Bitmap) closeableReference2.C0();
        this.f49343q = oVar;
        this.f49344r = i10;
        this.f49345s = i11;
    }
}
