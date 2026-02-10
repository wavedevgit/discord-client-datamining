package ta;

import android.graphics.Bitmap;
import com.facebook.common.references.CloseableReference;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class b extends a implements f {

    /* renamed from: t  reason: collision with root package name */
    private static boolean f48642t = false;

    /* renamed from: o  reason: collision with root package name */
    private CloseableReference f48643o;

    /* renamed from: p  reason: collision with root package name */
    private volatile Bitmap f48644p;

    /* renamed from: q  reason: collision with root package name */
    private final o f48645q;

    /* renamed from: r  reason: collision with root package name */
    private final int f48646r;

    /* renamed from: s  reason: collision with root package name */
    private final int f48647s;

    /* JADX INFO: Access modifiers changed from: protected */
    public b(Bitmap bitmap, t8.c cVar, o oVar, int i10, int i11) {
        this.f48644p = (Bitmap) p8.j.g(bitmap);
        this.f48643o = CloseableReference.G0(this.f48644p, (t8.c) p8.j.g(cVar));
        this.f48645q = oVar;
        this.f48646r = i10;
        this.f48647s = i11;
    }

    private synchronized CloseableReference C0() {
        CloseableReference closeableReference;
        closeableReference = this.f48643o;
        this.f48643o = null;
        this.f48644p = null;
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
        return f48642t;
    }

    @Override // ta.a, ta.e
    public o J1() {
        return this.f48645q;
    }

    @Override // ta.d
    public Bitmap Q1() {
        return this.f48644p;
    }

    @Override // ta.f
    public synchronized CloseableReference U() {
        return CloseableReference.n(this.f48643o);
    }

    @Override // ta.f
    public int c1() {
        return this.f48647s;
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
        if (this.f48646r % 180 == 0 && (i10 = this.f48647s) != 5 && i10 != 7) {
            return E0(this.f48644p);
        }
        return F0(this.f48644p);
    }

    @Override // ta.e, com.facebook.imagepipeline.image.ImageInfo
    public int getWidth() {
        int i10;
        if (this.f48646r % 180 == 0 && (i10 = this.f48647s) != 5 && i10 != 7) {
            return F0(this.f48644p);
        }
        return E0(this.f48644p);
    }

    @Override // ta.e
    public synchronized boolean isClosed() {
        boolean z10;
        if (this.f48643o == null) {
            z10 = true;
        } else {
            z10 = false;
        }
        return z10;
    }

    @Override // ta.f
    public int q1() {
        return this.f48646r;
    }

    @Override // ta.e
    public int w() {
        return db.d.j(this.f48644p);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public b(CloseableReference closeableReference, o oVar, int i10, int i11) {
        CloseableReference closeableReference2 = (CloseableReference) p8.j.g(closeableReference.m());
        this.f48643o = closeableReference2;
        this.f48644p = (Bitmap) closeableReference2.J();
        this.f48645q = oVar;
        this.f48646r = i10;
        this.f48647s = i11;
    }
}
