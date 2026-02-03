package va;

import android.graphics.Bitmap;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class o implements d {

    /* renamed from: a  reason: collision with root package name */
    protected final v f51262a = new e();

    /* renamed from: b  reason: collision with root package name */
    private final int f51263b;

    /* renamed from: c  reason: collision with root package name */
    private int f51264c;

    /* renamed from: d  reason: collision with root package name */
    private final a0 f51265d;

    /* renamed from: e  reason: collision with root package name */
    private int f51266e;

    public o(int i10, int i11, a0 a0Var, r8.d dVar) {
        this.f51263b = i10;
        this.f51264c = i11;
        this.f51265d = a0Var;
        if (dVar != null) {
            dVar.a(this);
        }
    }

    private Bitmap g(int i10) {
        this.f51265d.d(i10);
        return Bitmap.createBitmap(1, i10, Bitmap.Config.ALPHA_8);
    }

    private synchronized void j(int i10) {
        Bitmap bitmap;
        while (this.f51266e > i10 && (bitmap = (Bitmap) this.f51262a.pop()) != null) {
            int a10 = this.f51262a.a(bitmap);
            this.f51266e -= a10;
            this.f51265d.b(a10);
        }
    }

    @Override // r8.f
    /* renamed from: h */
    public synchronized Bitmap get(int i10) {
        try {
            int i11 = this.f51266e;
            int i12 = this.f51263b;
            if (i11 > i12) {
                j(i12);
            }
            Bitmap bitmap = (Bitmap) this.f51262a.get(i10);
            if (bitmap != null) {
                int a10 = this.f51262a.a(bitmap);
                this.f51266e -= a10;
                this.f51265d.e(a10);
                return bitmap;
            }
            return g(i10);
        } catch (Throwable th2) {
            throw th2;
        }
    }

    @Override // r8.f, s8.c
    /* renamed from: i */
    public void release(Bitmap bitmap) {
        int a10 = this.f51262a.a(bitmap);
        if (a10 <= this.f51264c) {
            this.f51265d.c(a10);
            this.f51262a.put(bitmap);
            synchronized (this) {
                this.f51266e += a10;
            }
        }
    }
}
