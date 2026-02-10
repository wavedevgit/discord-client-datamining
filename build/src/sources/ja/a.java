package ja;

import android.graphics.Bitmap;
import android.graphics.Canvas;
import android.graphics.Paint;
import android.graphics.PorterDuff;
import android.graphics.PorterDuffXfermode;
import android.graphics.Rect;
import ha.b;
import ha.e;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class a implements ha.a {

    /* renamed from: a  reason: collision with root package name */
    private final ka.a f30069a;

    /* renamed from: b  reason: collision with root package name */
    private final e f30070b;

    /* renamed from: c  reason: collision with root package name */
    private final ha.c f30071c;

    /* renamed from: d  reason: collision with root package name */
    private final Rect f30072d;

    /* renamed from: e  reason: collision with root package name */
    private final int[] f30073e;

    /* renamed from: f  reason: collision with root package name */
    private final int[] f30074f;

    /* renamed from: g  reason: collision with root package name */
    private final int f30075g;

    /* renamed from: h  reason: collision with root package name */
    private final ha.b[] f30076h;

    /* renamed from: i  reason: collision with root package name */
    private final Rect f30077i = new Rect();

    /* renamed from: j  reason: collision with root package name */
    private final Rect f30078j = new Rect();

    /* renamed from: k  reason: collision with root package name */
    private final boolean f30079k;

    /* renamed from: l  reason: collision with root package name */
    private final Paint f30080l;

    /* renamed from: m  reason: collision with root package name */
    private Bitmap f30081m;

    public a(ka.a aVar, e eVar, Rect rect, boolean z10) {
        this.f30069a = aVar;
        this.f30070b = eVar;
        ha.c d10 = eVar.d();
        this.f30071c = d10;
        int[] A = d10.A();
        this.f30073e = A;
        aVar.a(A);
        this.f30075g = aVar.c(A);
        this.f30074f = aVar.b(A);
        this.f30072d = m(d10, rect);
        this.f30079k = z10;
        this.f30076h = new ha.b[d10.a()];
        for (int i10 = 0; i10 < this.f30071c.a(); i10++) {
            this.f30076h[i10] = this.f30071c.c(i10);
        }
        Paint paint = new Paint();
        this.f30080l = paint;
        paint.setXfermode(new PorterDuffXfermode(PorterDuff.Mode.CLEAR));
    }

    private synchronized void l() {
        Bitmap bitmap = this.f30081m;
        if (bitmap != null) {
            bitmap.recycle();
            this.f30081m = null;
        }
    }

    private static Rect m(ha.c cVar, Rect rect) {
        if (rect == null) {
            return new Rect(0, 0, cVar.getWidth(), cVar.getHeight());
        }
        return new Rect(0, 0, Math.min(rect.width(), cVar.getWidth()), Math.min(rect.height(), cVar.getHeight()));
    }

    private void n(Canvas canvas, float f10, float f11, ha.b bVar) {
        if (bVar.f25797g == b.EnumC0380b.DISPOSE_TO_BACKGROUND) {
            int ceil = (int) Math.ceil(bVar.f25792b * f10);
            int ceil2 = (int) Math.ceil(bVar.f25793c * f11);
            canvas.drawRect(new Rect(ceil, ceil2, ((int) Math.ceil(bVar.f25794d * f10)) + ceil, ((int) Math.ceil(bVar.f25795e * f11)) + ceil2), this.f30080l);
        }
    }

    private synchronized Bitmap o(int i10, int i11) {
        try {
            Bitmap bitmap = this.f30081m;
            if (bitmap != null) {
                if (bitmap.getWidth() >= i10) {
                    if (this.f30081m.getHeight() < i11) {
                    }
                }
                l();
            }
            if (this.f30081m == null) {
                this.f30081m = Bitmap.createBitmap(i10, i11, Bitmap.Config.ARGB_8888);
            }
            this.f30081m.eraseColor(0);
        } catch (Throwable th2) {
            throw th2;
        }
        return this.f30081m;
    }

    private void p(Canvas canvas, ha.d dVar) {
        int width;
        int height;
        int b10;
        int c10;
        if (this.f30079k) {
            float max = Math.max(dVar.getWidth() / Math.min(dVar.getWidth(), canvas.getWidth()), dVar.getHeight() / Math.min(dVar.getHeight(), canvas.getHeight()));
            width = (int) (dVar.getWidth() / max);
            height = (int) (dVar.getHeight() / max);
            b10 = (int) (dVar.b() / max);
            c10 = (int) (dVar.c() / max);
        } else {
            width = dVar.getWidth();
            height = dVar.getHeight();
            b10 = dVar.b();
            c10 = dVar.c();
        }
        synchronized (this) {
            Bitmap o10 = o(width, height);
            this.f30081m = o10;
            dVar.a(width, height, o10);
            canvas.save();
            canvas.translate(b10, c10);
            canvas.drawBitmap(this.f30081m, 0.0f, 0.0f, (Paint) null);
            canvas.restore();
        }
    }

    private void q(Canvas canvas, ha.d dVar) {
        double width = this.f30072d.width() / this.f30071c.getWidth();
        double height = this.f30072d.height() / this.f30071c.getHeight();
        int round = (int) Math.round(dVar.getWidth() * width);
        int round2 = (int) Math.round(dVar.getHeight() * height);
        int b10 = (int) (dVar.b() * width);
        int c10 = (int) (dVar.c() * height);
        synchronized (this) {
            try {
                int width2 = this.f30072d.width();
                int height2 = this.f30072d.height();
                o(width2, height2);
                Bitmap bitmap = this.f30081m;
                if (bitmap != null) {
                    dVar.a(round, round2, bitmap);
                }
                this.f30077i.set(0, 0, width2, height2);
                this.f30078j.set(b10, c10, width2 + b10, height2 + c10);
                Bitmap bitmap2 = this.f30081m;
                if (bitmap2 != null) {
                    canvas.drawBitmap(bitmap2, this.f30077i, this.f30078j, (Paint) null);
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    private void r(Canvas canvas, ha.d dVar, ha.b bVar, ha.b bVar2) {
        Rect rect = this.f30072d;
        if (rect != null && rect.width() > 0 && this.f30072d.height() > 0) {
            float width = canvas.getWidth() / this.f30072d.width();
            if (bVar2 != null) {
                n(canvas, width, width, bVar2);
            }
            int width2 = dVar.getWidth();
            int height = dVar.getHeight();
            Rect rect2 = new Rect(0, 0, width2, height);
            int b10 = (int) (dVar.b() * width);
            int c10 = (int) (dVar.c() * width);
            Rect rect3 = new Rect(b10, c10, ((int) (width2 * width)) + b10, ((int) (height * width)) + c10);
            if (bVar.f25796f == b.a.NO_BLEND) {
                canvas.drawRect(rect3, this.f30080l);
            }
            synchronized (this) {
                Bitmap o10 = o(width2, height);
                dVar.a(width2, height, o10);
                canvas.drawBitmap(o10, rect2, rect3, (Paint) null);
            }
        }
    }

    private void s(Canvas canvas, ha.d dVar, ha.b bVar, ha.b bVar2) {
        float f10;
        float f11;
        float f12;
        float f13;
        int width = this.f30071c.getWidth();
        int height = this.f30071c.getHeight();
        float f14 = width;
        float f15 = height;
        int width2 = dVar.getWidth();
        int height2 = dVar.getHeight();
        int b10 = dVar.b();
        int c10 = dVar.c();
        if (f14 <= canvas.getWidth() && f15 <= canvas.getHeight()) {
            f12 = 1.0f;
            f13 = 1.0f;
        } else {
            int min = Math.min(canvas.getWidth(), width);
            int min2 = Math.min(canvas.getHeight(), height);
            float f16 = f14 / f15;
            if (min > min2) {
                f11 = min;
                f10 = f11 / f16;
            } else {
                f10 = min2;
                f11 = f10 * f16;
            }
            f12 = f11 / f14;
            f13 = f10 / f15;
            width2 = (int) Math.ceil(dVar.getWidth() * f12);
            height2 = (int) Math.ceil(dVar.getHeight() * f13);
            b10 = (int) Math.ceil(dVar.b() * f12);
            c10 = (int) Math.ceil(dVar.c() * f13);
        }
        Rect rect = new Rect(0, 0, width2, height2);
        Rect rect2 = new Rect(b10, c10, b10 + width2, c10 + height2);
        if (bVar2 != null) {
            n(canvas, f12, f13, bVar2);
        }
        if (bVar.f25796f == b.a.NO_BLEND) {
            canvas.drawRect(rect2, this.f30080l);
        }
        synchronized (this) {
            Bitmap o10 = o(width2, height2);
            dVar.a(width2, height2, o10);
            canvas.drawBitmap(o10, rect, rect2, (Paint) null);
        }
    }

    @Override // ha.a
    public int a() {
        return this.f30071c.a();
    }

    @Override // ha.a
    public int b() {
        return this.f30071c.b();
    }

    @Override // ha.a
    public ha.b c(int i10) {
        return this.f30076h[i10];
    }

    @Override // ha.a
    public int d() {
        return this.f30075g;
    }

    @Override // ha.a
    public void e(int i10, Canvas canvas) {
        ha.d z10 = this.f30071c.z(i10);
        try {
            if (z10.getWidth() > 0 && z10.getHeight() > 0) {
                if (this.f30071c.x()) {
                    q(canvas, z10);
                } else {
                    p(canvas, z10);
                }
                z10.dispose();
            }
        } finally {
            z10.dispose();
        }
    }

    @Override // ha.a
    public ha.a f(Rect rect) {
        if (m(this.f30071c, rect).equals(this.f30072d)) {
            return this;
        }
        return new a(this.f30069a, this.f30070b, rect, this.f30079k);
    }

    @Override // ha.a
    public int g(int i10) {
        return this.f30073e[i10];
    }

    @Override // ha.a
    public int getHeight() {
        return this.f30071c.getHeight();
    }

    @Override // ha.a
    public int getWidth() {
        return this.f30071c.getWidth();
    }

    @Override // ha.a
    public int h() {
        return this.f30072d.height();
    }

    @Override // ha.a
    public void i(int i10, Canvas canvas) {
        ha.b c10;
        ha.d z10 = this.f30071c.z(i10);
        ha.b c11 = this.f30071c.c(i10);
        if (i10 == 0) {
            c10 = null;
        } else {
            c10 = this.f30071c.c(i10 - 1);
        }
        try {
            if (z10.getWidth() > 0 && z10.getHeight() > 0) {
                if (this.f30071c.x()) {
                    s(canvas, z10, c11, c10);
                } else {
                    r(canvas, z10, c11, c10);
                }
                z10.dispose();
            }
        } finally {
            z10.dispose();
        }
    }

    @Override // ha.a
    public int j() {
        return this.f30072d.width();
    }

    @Override // ha.a
    public e k() {
        return this.f30070b;
    }
}
