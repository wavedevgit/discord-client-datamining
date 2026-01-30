package va;

import android.graphics.Bitmap;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class o implements d {

    /* renamed from: a  reason: collision with root package name */
    protected final v f50810a = new e();

    /* renamed from: b  reason: collision with root package name */
    private final int f50811b;

    /* renamed from: c  reason: collision with root package name */
    private int f50812c;

    /* renamed from: d  reason: collision with root package name */
    private final a0 f50813d;

    /* renamed from: e  reason: collision with root package name */
    private int f50814e;

    public o(int i10, int i11, a0 a0Var, r8.d dVar) {
        this.f50811b = i10;
        this.f50812c = i11;
        this.f50813d = a0Var;
        if (dVar != null) {
            dVar.a(this);
        }
    }

    private Bitmap g(int i10) {
        this.f50813d.d(i10);
        return Bitmap.createBitmap(1, i10, Bitmap.Config.ALPHA_8);
    }

    private synchronized void j(int i10) {
        Bitmap bitmap;
        while (this.f50814e > i10 && (bitmap = (Bitmap) this.f50810a.pop()) != null) {
            int a10 = this.f50810a.a(bitmap);
            this.f50814e -= a10;
            this.f50813d.b(a10);
        }
    }

    @Override // r8.f
    /* renamed from: h */
    public synchronized Bitmap get(int i10) {
        try {
            int i11 = this.f50814e;
            int i12 = this.f50811b;
            if (i11 > i12) {
                j(i12);
            }
            Bitmap bitmap = (Bitmap) this.f50810a.get(i10);
            if (bitmap != null) {
                int a10 = this.f50810a.a(bitmap);
                this.f50814e -= a10;
                this.f50813d.e(a10);
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
        int a10 = this.f50810a.a(bitmap);
        if (a10 <= this.f50812c) {
            this.f50813d.c(a10);
            this.f50810a.put(bitmap);
            synchronized (this) {
                this.f50814e += a10;
            }
        }
    }
}
