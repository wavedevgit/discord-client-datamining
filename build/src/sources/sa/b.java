package sa;

import android.graphics.Bitmap;
import com.facebook.common.references.CloseableReference;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class b extends a implements f {

    /* renamed from: t  reason: collision with root package name */
    private static boolean f49869t = false;

    /* renamed from: o  reason: collision with root package name */
    private CloseableReference f49870o;

    /* renamed from: p  reason: collision with root package name */
    private volatile Bitmap f49871p;

    /* renamed from: q  reason: collision with root package name */
    private final o f49872q;

    /* renamed from: r  reason: collision with root package name */
    private final int f49873r;

    /* renamed from: s  reason: collision with root package name */
    private final int f49874s;

    /* JADX INFO: Access modifiers changed from: protected */
    public b(Bitmap bitmap, s8.c cVar, o oVar, int i10, int i11) {
        this.f49871p = (Bitmap) o8.j.g(bitmap);
        this.f49870o = CloseableReference.O0(this.f49871p, (s8.c) o8.j.g(cVar));
        this.f49872q = oVar;
        this.f49873r = i10;
        this.f49874s = i11;
    }

    private synchronized CloseableReference F0() {
        CloseableReference closeableReference;
        closeableReference = this.f49870o;
        this.f49870o = null;
        this.f49871p = null;
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

    public static boolean K0() {
        return f49869t;
    }

    @Override // sa.a, sa.e
    public o I1() {
        return this.f49872q;
    }

    @Override // sa.d
    public Bitmap M1() {
        return this.f49871p;
    }

    @Override // sa.f
    public synchronized CloseableReference T() {
        return CloseableReference.n(this.f49870o);
    }

    @Override // sa.f
    public int a1() {
        return this.f49874s;
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
        if (this.f49873r % 180 == 0 && (i10 = this.f49874s) != 5 && i10 != 7) {
            return I0(this.f49871p);
        }
        return J0(this.f49871p);
    }

    @Override // sa.e, com.facebook.imagepipeline.image.ImageInfo
    public int getWidth() {
        int i10;
        if (this.f49873r % 180 == 0 && (i10 = this.f49874s) != 5 && i10 != 7) {
            return J0(this.f49871p);
        }
        return I0(this.f49871p);
    }

    @Override // sa.e
    public synchronized boolean isClosed() {
        boolean z10;
        if (this.f49870o == null) {
            z10 = true;
        } else {
            z10 = false;
        }
        return z10;
    }

    @Override // sa.f
    public int p1() {
        return this.f49873r;
    }

    @Override // sa.e
    public int w() {
        return cb.d.j(this.f49871p);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public b(CloseableReference closeableReference, o oVar, int i10, int i11) {
        CloseableReference closeableReference2 = (CloseableReference) o8.j.g(closeableReference.m());
        this.f49870o = closeableReference2;
        this.f49871p = (Bitmap) closeableReference2.J();
        this.f49872q = oVar;
        this.f49873r = i10;
        this.f49874s = i11;
    }
}
