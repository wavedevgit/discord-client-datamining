package ta;

import android.graphics.Bitmap;
import com.facebook.common.references.CloseableReference;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class b extends a implements f {

    /* renamed from: t  reason: collision with root package name */
    private static boolean f49211t = false;

    /* renamed from: o  reason: collision with root package name */
    private CloseableReference f49212o;

    /* renamed from: p  reason: collision with root package name */
    private volatile Bitmap f49213p;

    /* renamed from: q  reason: collision with root package name */
    private final o f49214q;

    /* renamed from: r  reason: collision with root package name */
    private final int f49215r;

    /* renamed from: s  reason: collision with root package name */
    private final int f49216s;

    /* JADX INFO: Access modifiers changed from: protected */
    public b(Bitmap bitmap, t8.c cVar, o oVar, int i10, int i11) {
        this.f49213p = (Bitmap) p8.j.g(bitmap);
        this.f49212o = CloseableReference.G0(this.f49213p, (t8.c) p8.j.g(cVar));
        this.f49214q = oVar;
        this.f49215r = i10;
        this.f49216s = i11;
    }

    private synchronized CloseableReference C0() {
        CloseableReference closeableReference;
        closeableReference = this.f49212o;
        this.f49212o = null;
        this.f49213p = null;
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
        return f49211t;
    }

    @Override // ta.a, ta.e
    public o J1() {
        return this.f49214q;
    }

    @Override // ta.d
    public Bitmap Q1() {
        return this.f49213p;
    }

    @Override // ta.f
    public synchronized CloseableReference U() {
        return CloseableReference.n(this.f49212o);
    }

    @Override // ta.f
    public int c1() {
        return this.f49216s;
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
        if (this.f49215r % 180 == 0 && (i10 = this.f49216s) != 5 && i10 != 7) {
            return E0(this.f49213p);
        }
        return F0(this.f49213p);
    }

    @Override // ta.e, com.facebook.imagepipeline.image.ImageInfo
    public int getWidth() {
        int i10;
        if (this.f49215r % 180 == 0 && (i10 = this.f49216s) != 5 && i10 != 7) {
            return F0(this.f49213p);
        }
        return E0(this.f49213p);
    }

    @Override // ta.e
    public synchronized boolean isClosed() {
        boolean z10;
        if (this.f49212o == null) {
            z10 = true;
        } else {
            z10 = false;
        }
        return z10;
    }

    @Override // ta.f
    public int q1() {
        return this.f49215r;
    }

    @Override // ta.e
    public int w() {
        return db.d.j(this.f49213p);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public b(CloseableReference closeableReference, o oVar, int i10, int i11) {
        CloseableReference closeableReference2 = (CloseableReference) p8.j.g(closeableReference.m());
        this.f49212o = closeableReference2;
        this.f49213p = (Bitmap) closeableReference2.J();
        this.f49214q = oVar;
        this.f49215r = i10;
        this.f49216s = i11;
    }
}
