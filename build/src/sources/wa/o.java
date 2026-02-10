package wa;

import android.graphics.Bitmap;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class o implements d {

    /* renamed from: a  reason: collision with root package name */
    protected final v f53388a = new e();

    /* renamed from: b  reason: collision with root package name */
    private final int f53389b;

    /* renamed from: c  reason: collision with root package name */
    private int f53390c;

    /* renamed from: d  reason: collision with root package name */
    private final a0 f53391d;

    /* renamed from: e  reason: collision with root package name */
    private int f53392e;

    public o(int i10, int i11, a0 a0Var, s8.d dVar) {
        this.f53389b = i10;
        this.f53390c = i11;
        this.f53391d = a0Var;
        if (dVar != null) {
            dVar.a(this);
        }
    }

    private Bitmap g(int i10) {
        this.f53391d.d(i10);
        return Bitmap.createBitmap(1, i10, Bitmap.Config.ALPHA_8);
    }

    private synchronized void j(int i10) {
        Bitmap bitmap;
        while (this.f53392e > i10 && (bitmap = (Bitmap) this.f53388a.pop()) != null) {
            int a10 = this.f53388a.a(bitmap);
            this.f53392e -= a10;
            this.f53391d.b(a10);
        }
    }

    @Override // s8.f
    /* renamed from: h */
    public synchronized Bitmap get(int i10) {
        try {
            int i11 = this.f53392e;
            int i12 = this.f53389b;
            if (i11 > i12) {
                j(i12);
            }
            Bitmap bitmap = (Bitmap) this.f53388a.get(i10);
            if (bitmap != null) {
                int a10 = this.f53388a.a(bitmap);
                this.f53392e -= a10;
                this.f53391d.e(a10);
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
        int a10 = this.f53388a.a(bitmap);
        if (a10 <= this.f53390c) {
            this.f53391d.c(a10);
            this.f53388a.put(bitmap);
            synchronized (this) {
                this.f53392e += a10;
            }
        }
    }
}
