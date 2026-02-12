package ta;

import android.graphics.Bitmap;
import com.facebook.common.references.CloseableReference;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class b extends a implements f {

    /* renamed from: t  reason: collision with root package name */
    private static boolean f48643t = false;

    /* renamed from: o  reason: collision with root package name */
    private CloseableReference f48644o;

    /* renamed from: p  reason: collision with root package name */
    private volatile Bitmap f48645p;

    /* renamed from: q  reason: collision with root package name */
    private final o f48646q;

    /* renamed from: r  reason: collision with root package name */
    private final int f48647r;

    /* renamed from: s  reason: collision with root package name */
    private final int f48648s;

    /* JADX INFO: Access modifiers changed from: protected */
    public b(Bitmap bitmap, t8.c cVar, o oVar, int i10, int i11) {
        this.f48645p = (Bitmap) p8.j.g(bitmap);
        this.f48644o = CloseableReference.G0(this.f48645p, (t8.c) p8.j.g(cVar));
        this.f48646q = oVar;
        this.f48647r = i10;
        this.f48648s = i11;
    }

    private synchronized CloseableReference C0() {
        CloseableReference closeableReference;
        closeableReference = this.f48644o;
        this.f48644o = null;
        this.f48645p = null;
        return closeableReference;
    }

    private static int E0(Bitmap bitmap) {
        if (bitmap == null) {
            return 0;
        }
        return bitmap.getHeight();
    }

    private static int F0(Bitmap bitmap) {
        if (bitmap == null) {
            return 0;
        }
        return bitmap.getWidth();
    }

    public static boolean G0() {
        return f48643t;
    }

    @Override // ta.a, ta.e
    public o J1() {
        return this.f48646q;
    }

    @Override // ta.d
    public Bitmap Q1() {
        return this.f48645p;
    }

    @Override // ta.f
    public synchronized CloseableReference U() {
        return CloseableReference.n(this.f48644o);
    }

    @Override // ta.f
    public int c1() {
        return this.f48648s;
    }

    @Override // ta.e, java.io.Closeable, java.lang.AutoCloseable
    public void close() {
        CloseableReference C0 = C0();
        if (C0 != null) {
            C0.close();
        }
    }

    @Override // ta.e, com.facebook.imagepipeline.image.ImageInfo
    public int getHeight() {
        int i10;
        if (this.f48647r % 180 == 0 && (i10 = this.f48648s) != 5 && i10 != 7) {
            return E0(this.f48645p);
        }
        return F0(this.f48645p);
    }

    @Override // ta.e, com.facebook.imagepipeline.image.ImageInfo
    public int getWidth() {
        int i10;
        if (this.f48647r % 180 == 0 && (i10 = this.f48648s) != 5 && i10 != 7) {
            return F0(this.f48645p);
        }
        return E0(this.f48645p);
    }

    @Override // ta.e
    public synchronized boolean isClosed() {
        boolean z10;
        if (this.f48644o == null) {
            z10 = true;
        } else {
            z10 = false;
        }
        return z10;
    }

    @Override // ta.f
    public int q1() {
        return this.f48647r;
    }

    @Override // ta.e
    public int w() {
        return db.d.j(this.f48645p);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public b(CloseableReference closeableReference, o oVar, int i10, int i11) {
        CloseableReference closeableReference2 = (CloseableReference) p8.j.g(closeableReference.m());
        this.f48644o = closeableReference2;
        this.f48645p = (Bitmap) closeableReference2.J();
        this.f48646q = oVar;
        this.f48647r = i10;
        this.f48648s = i11;
    }
}
