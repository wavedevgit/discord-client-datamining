package wa;

import android.graphics.Bitmap;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class o implements d {

    /* renamed from: a  reason: collision with root package name */
    protected final v f52417a = new e();

    /* renamed from: b  reason: collision with root package name */
    private final int f52418b;

    /* renamed from: c  reason: collision with root package name */
    private int f52419c;

    /* renamed from: d  reason: collision with root package name */
    private final a0 f52420d;

    /* renamed from: e  reason: collision with root package name */
    private int f52421e;

    public o(int i10, int i11, a0 a0Var, s8.d dVar) {
        this.f52418b = i10;
        this.f52419c = i11;
        this.f52420d = a0Var;
        if (dVar != null) {
            dVar.a(this);
        }
    }

    private Bitmap g(int i10) {
        this.f52420d.d(i10);
        return Bitmap.createBitmap(1, i10, Bitmap.Config.ALPHA_8);
    }

    private synchronized void j(int i10) {
        Bitmap bitmap;
        while (this.f52421e > i10 && (bitmap = (Bitmap) this.f52417a.pop()) != null) {
            int a10 = this.f52417a.a(bitmap);
            this.f52421e -= a10;
            this.f52420d.b(a10);
        }
    }

    @Override // s8.f
    /* renamed from: h */
    public synchronized Bitmap get(int i10) {
        try {
            int i11 = this.f52421e;
            int i12 = this.f52418b;
            if (i11 > i12) {
                j(i12);
            }
            Bitmap bitmap = (Bitmap) this.f52417a.get(i10);
            if (bitmap != null) {
                int a10 = this.f52417a.a(bitmap);
                this.f52421e -= a10;
                this.f52420d.e(a10);
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
        int a10 = this.f52417a.a(bitmap);
        if (a10 <= this.f52419c) {
            this.f52420d.c(a10);
            this.f52417a.put(bitmap);
            synchronized (this) {
                this.f52421e += a10;
            }
        }
    }
}
