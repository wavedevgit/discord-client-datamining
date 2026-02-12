package wa;

import android.graphics.Bitmap;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class o implements d {

    /* renamed from: a  reason: collision with root package name */
    protected final v f52418a = new e();

    /* renamed from: b  reason: collision with root package name */
    private final int f52419b;

    /* renamed from: c  reason: collision with root package name */
    private int f52420c;

    /* renamed from: d  reason: collision with root package name */
    private final a0 f52421d;

    /* renamed from: e  reason: collision with root package name */
    private int f52422e;

    public o(int i10, int i11, a0 a0Var, s8.d dVar) {
        this.f52419b = i10;
        this.f52420c = i11;
        this.f52421d = a0Var;
        if (dVar != null) {
            dVar.a(this);
        }
    }

    private Bitmap g(int i10) {
        this.f52421d.d(i10);
        return Bitmap.createBitmap(1, i10, Bitmap.Config.ALPHA_8);
    }

    private synchronized void j(int i10) {
        Bitmap bitmap;
        while (this.f52422e > i10 && (bitmap = (Bitmap) this.f52418a.pop()) != null) {
            int a10 = this.f52418a.a(bitmap);
            this.f52422e -= a10;
            this.f52421d.b(a10);
        }
    }

    @Override // s8.f
    /* renamed from: h */
    public synchronized Bitmap get(int i10) {
        try {
            int i11 = this.f52422e;
            int i12 = this.f52419b;
            if (i11 > i12) {
                j(i12);
            }
            Bitmap bitmap = (Bitmap) this.f52418a.get(i10);
            if (bitmap != null) {
                int a10 = this.f52418a.a(bitmap);
                this.f52422e -= a10;
                this.f52421d.e(a10);
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
        int a10 = this.f52418a.a(bitmap);
        if (a10 <= this.f52420c) {
            this.f52421d.c(a10);
            this.f52418a.put(bitmap);
            synchronized (this) {
                this.f52422e += a10;
            }
        }
    }
}
