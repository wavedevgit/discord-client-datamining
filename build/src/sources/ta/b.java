package ta;

import android.graphics.Bitmap;
import com.facebook.common.references.CloseableReference;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class b extends a implements f {

    /* renamed from: t  reason: collision with root package name */
    private static boolean f50710t = false;

    /* renamed from: o  reason: collision with root package name */
    private CloseableReference f50711o;

    /* renamed from: p  reason: collision with root package name */
    private volatile Bitmap f50712p;

    /* renamed from: q  reason: collision with root package name */
    private final o f50713q;

    /* renamed from: r  reason: collision with root package name */
    private final int f50714r;

    /* renamed from: s  reason: collision with root package name */
    private final int f50715s;

    /* JADX INFO: Access modifiers changed from: protected */
    public b(Bitmap bitmap, t8.c cVar, o oVar, int i10, int i11) {
        this.f50712p = (Bitmap) p8.j.g(bitmap);
        this.f50711o = CloseableReference.R0(this.f50712p, (t8.c) p8.j.g(cVar));
        this.f50713q = oVar;
        this.f50714r = i10;
        this.f50715s = i11;
    }

    private synchronized CloseableReference D0() {
        CloseableReference closeableReference;
        closeableReference = this.f50711o;
        this.f50711o = null;
        this.f50712p = null;
        return closeableReference;
    }

    private static int G0(Bitmap bitmap) {
        if (bitmap == null) {
            return 0;
        }
        return bitmap.getHeight();
    }

    private static int H0(Bitmap bitmap) {
        if (bitmap == null) {
            return 0;
        }
        return bitmap.getWidth();
    }

    public static boolean J0() {
        return f50710t;
    }

    @Override // ta.a, ta.e
    public o F1() {
        return this.f50713q;
    }

    @Override // ta.d
    public Bitmap L1() {
        return this.f50712p;
    }

    @Override // ta.f
    public synchronized CloseableReference U() {
        return CloseableReference.n(this.f50711o);
    }

    @Override // ta.f
    public int X0() {
        return this.f50715s;
    }

    @Override // ta.e, java.io.Closeable, java.lang.AutoCloseable
    public void close() {
        CloseableReference D0 = D0();
        if (D0 != null) {
            D0.close();
        }
    }

    @Override // ta.e, com.facebook.imagepipeline.image.ImageInfo
    public int getHeight() {
        int i10;
        if (this.f50714r % 180 == 0 && (i10 = this.f50715s) != 5 && i10 != 7) {
            return G0(this.f50712p);
        }
        return H0(this.f50712p);
    }

    @Override // ta.e, com.facebook.imagepipeline.image.ImageInfo
    public int getWidth() {
        int i10;
        if (this.f50714r % 180 == 0 && (i10 = this.f50715s) != 5 && i10 != 7) {
            return H0(this.f50712p);
        }
        return G0(this.f50712p);
    }

    @Override // ta.e
    public synchronized boolean isClosed() {
        boolean z10;
        if (this.f50711o == null) {
            z10 = true;
        } else {
            z10 = false;
        }
        return z10;
    }

    @Override // ta.f
    public int l1() {
        return this.f50714r;
    }

    @Override // ta.e
    public int w() {
        return db.d.j(this.f50712p);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public b(CloseableReference closeableReference, o oVar, int i10, int i11) {
        CloseableReference closeableReference2 = (CloseableReference) p8.j.g(closeableReference.m());
        this.f50711o = closeableReference2;
        this.f50712p = (Bitmap) closeableReference2.J();
        this.f50713q = oVar;
        this.f50714r = i10;
        this.f50715s = i11;
    }
}
