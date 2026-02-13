package wa;

import android.graphics.Bitmap;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class o implements d {

    /* renamed from: a  reason: collision with root package name */
    protected final v f52986a = new e();

    /* renamed from: b  reason: collision with root package name */
    private final int f52987b;

    /* renamed from: c  reason: collision with root package name */
    private int f52988c;

    /* renamed from: d  reason: collision with root package name */
    private final a0 f52989d;

    /* renamed from: e  reason: collision with root package name */
    private int f52990e;

    public o(int i10, int i11, a0 a0Var, s8.d dVar) {
        this.f52987b = i10;
        this.f52988c = i11;
        this.f52989d = a0Var;
        if (dVar != null) {
            dVar.a(this);
        }
    }

    private Bitmap g(int i10) {
        this.f52989d.d(i10);
        return Bitmap.createBitmap(1, i10, Bitmap.Config.ALPHA_8);
    }

    private synchronized void j(int i10) {
        Bitmap bitmap;
        while (this.f52990e > i10 && (bitmap = (Bitmap) this.f52986a.pop()) != null) {
            int a10 = this.f52986a.a(bitmap);
            this.f52990e -= a10;
            this.f52989d.b(a10);
        }
    }

    @Override // s8.f
    /* renamed from: h */
    public synchronized Bitmap get(int i10) {
        try {
            int i11 = this.f52990e;
            int i12 = this.f52987b;
            if (i11 > i12) {
                j(i12);
            }
            Bitmap bitmap = (Bitmap) this.f52986a.get(i10);
            if (bitmap != null) {
                int a10 = this.f52986a.a(bitmap);
                this.f52990e -= a10;
                this.f52989d.e(a10);
                return bitmap;
            }
            return g(i10);
        } catch (Throwable th2) {
            throw th2;
        }
    }

    @Override // s8.f, t8.c
    /* renamed from: i */
    public void release(Bitmap bitmap) {
        int a10 = this.f52986a.a(bitmap);
        if (a10 <= this.f52988c) {
            this.f52989d.c(a10);
            this.f52986a.put(bitmap);
            synchronized (this) {
                this.f52990e += a10;
            }
        }
    }
}
