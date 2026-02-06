package sa;

import android.graphics.Bitmap;
import com.facebook.common.references.CloseableReference;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class b extends a implements f {

    /* renamed from: t  reason: collision with root package name */
    private static boolean f49821t = false;

    /* renamed from: o  reason: collision with root package name */
    private CloseableReference f49822o;

    /* renamed from: p  reason: collision with root package name */
    private volatile Bitmap f49823p;

    /* renamed from: q  reason: collision with root package name */
    private final o f49824q;

    /* renamed from: r  reason: collision with root package name */
    private final int f49825r;

    /* renamed from: s  reason: collision with root package name */
    private final int f49826s;

    /* JADX INFO: Access modifiers changed from: protected */
    public b(Bitmap bitmap, s8.c cVar, o oVar, int i10, int i11) {
        this.f49823p = (Bitmap) o8.j.g(bitmap);
        this.f49822o = CloseableReference.O0(this.f49823p, (s8.c) o8.j.g(cVar));
        this.f49824q = oVar;
        this.f49825r = i10;
        this.f49826s = i11;
    }

    private synchronized CloseableReference F0() {
        CloseableReference closeableReference;
        closeableReference = this.f49822o;
        this.f49822o = null;
        this.f49823p = null;
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
        return f49821t;
    }

    @Override // sa.a, sa.e
    public o I1() {
        return this.f49824q;
    }

    @Override // sa.d
    public Bitmap M1() {
        return this.f49823p;
    }

    @Override // sa.f
    public synchronized CloseableReference T() {
        return CloseableReference.n(this.f49822o);
    }

    @Override // sa.f
    public int a1() {
        return this.f49826s;
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
        if (this.f49825r % 180 == 0 && (i10 = this.f49826s) != 5 && i10 != 7) {
            return I0(this.f49823p);
        }
        return J0(this.f49823p);
    }

    @Override // sa.e, com.facebook.imagepipeline.image.ImageInfo
    public int getWidth() {
        int i10;
        if (this.f49825r % 180 == 0 && (i10 = this.f49826s) != 5 && i10 != 7) {
            return J0(this.f49823p);
        }
        return I0(this.f49823p);
    }

    @Override // sa.e
    public synchronized boolean isClosed() {
        boolean z10;
        if (this.f49822o == null) {
            z10 = true;
        } else {
            z10 = false;
        }
        return z10;
    }

    @Override // sa.f
    public int p1() {
        return this.f49825r;
    }

    @Override // sa.e
    public int w() {
        return cb.d.j(this.f49823p);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public b(CloseableReference closeableReference, o oVar, int i10, int i11) {
        CloseableReference closeableReference2 = (CloseableReference) o8.j.g(closeableReference.m());
        this.f49822o = closeableReference2;
        this.f49823p = (Bitmap) closeableReference2.J();
        this.f49824q = oVar;
        this.f49825r = i10;
        this.f49826s = i11;
    }
}
