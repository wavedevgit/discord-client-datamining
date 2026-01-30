package sa;

import android.graphics.Bitmap;
import com.facebook.common.references.CloseableReference;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class b extends a implements f {

    /* renamed from: t  reason: collision with root package name */
    private static boolean f48876t = false;

    /* renamed from: o  reason: collision with root package name */
    private CloseableReference f48877o;

    /* renamed from: p  reason: collision with root package name */
    private volatile Bitmap f48878p;

    /* renamed from: q  reason: collision with root package name */
    private final o f48879q;

    /* renamed from: r  reason: collision with root package name */
    private final int f48880r;

    /* renamed from: s  reason: collision with root package name */
    private final int f48881s;

    /* JADX INFO: Access modifiers changed from: protected */
    public b(Bitmap bitmap, s8.c cVar, o oVar, int i10, int i11) {
        this.f48878p = (Bitmap) o8.j.g(bitmap);
        this.f48877o = CloseableReference.U0(this.f48878p, (s8.c) o8.j.g(cVar));
        this.f48879q = oVar;
        this.f48880r = i10;
        this.f48881s = i11;
    }

    private synchronized CloseableReference F0() {
        CloseableReference closeableReference;
        closeableReference = this.f48877o;
        this.f48877o = null;
        this.f48878p = null;
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
        return f48876t;
    }

    @Override // sa.a, sa.e
    public o J1() {
        return this.f48879q;
    }

    @Override // sa.d
    public Bitmap N1() {
        return this.f48878p;
    }

    @Override // sa.f
    public synchronized CloseableReference Q() {
        return CloseableReference.E(this.f48877o);
    }

    @Override // sa.f
    public int a1() {
        return this.f48881s;
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
        if (this.f48880r % 180 == 0 && (i10 = this.f48881s) != 5 && i10 != 7) {
            return I0(this.f48878p);
        }
        return J0(this.f48878p);
    }

    @Override // sa.e, com.facebook.imagepipeline.image.ImageInfo
    public int getWidth() {
        int i10;
        if (this.f48880r % 180 == 0 && (i10 = this.f48881s) != 5 && i10 != 7) {
            return J0(this.f48878p);
        }
        return I0(this.f48878p);
    }

    @Override // sa.e
    public synchronized boolean isClosed() {
        boolean z10;
        if (this.f48877o == null) {
            z10 = true;
        } else {
            z10 = false;
        }
        return z10;
    }

    @Override // sa.f
    public int q1() {
        return this.f48880r;
    }

    @Override // sa.e
    public int t() {
        return cb.d.j(this.f48878p);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public b(CloseableReference closeableReference, o oVar, int i10, int i11) {
        CloseableReference closeableReference2 = (CloseableReference) o8.j.g(closeableReference.B());
        this.f48877o = closeableReference2;
        this.f48878p = (Bitmap) closeableReference2.D0();
        this.f48879q = oVar;
        this.f48880r = i10;
        this.f48881s = i11;
    }
}
