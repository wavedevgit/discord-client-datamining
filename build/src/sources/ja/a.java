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
    private final ka.a f30869a;

    /* renamed from: b  reason: collision with root package name */
    private final e f30870b;

    /* renamed from: c  reason: collision with root package name */
    private final ha.c f30871c;

    /* renamed from: d  reason: collision with root package name */
    private final Rect f30872d;

    /* renamed from: e  reason: collision with root package name */
    private final int[] f30873e;

    /* renamed from: f  reason: collision with root package name */
    private final int[] f30874f;

    /* renamed from: g  reason: collision with root package name */
    private final int f30875g;

    /* renamed from: h  reason: collision with root package name */
    private final ha.b[] f30876h;

    /* renamed from: i  reason: collision with root package name */
    private final Rect f30877i = new Rect();

    /* renamed from: j  reason: collision with root package name */
    private final Rect f30878j = new Rect();

    /* renamed from: k  reason: collision with root package name */
    private final boolean f30879k;

    /* renamed from: l  reason: collision with root package name */
    private final Paint f30880l;

    /* renamed from: m  reason: collision with root package name */
    private Bitmap f30881m;

    public a(ka.a aVar, e eVar, Rect rect, boolean z10) {
        this.f30869a = aVar;
        this.f30870b = eVar;
        ha.c d10 = eVar.d();
        this.f30871c = d10;
        int[] A = d10.A();
        this.f30873e = A;
        aVar.a(A);
        this.f30875g = aVar.c(A);
        this.f30874f = aVar.b(A);
        this.f30872d = m(d10, rect);
        this.f30879k = z10;
        this.f30876h = new ha.b[d10.a()];
        for (int i10 = 0; i10 < this.f30871c.a(); i10++) {
            this.f30876h[i10] = this.f30871c.c(i10);
        }
        Paint paint = new Paint();
        this.f30880l = paint;
        paint.setXfermode(new PorterDuffXfermode(PorterDuff.Mode.CLEAR));
    }

    private synchronized void l() {
        Bitmap bitmap = this.f30881m;
        if (bitmap != null) {
            bitmap.recycle();
            this.f30881m = null;
        }
    }

    private static Rect m(ha.c cVar, Rect rect) {
        if (rect == null) {
            return new Rect(0, 0, cVar.getWidth(), cVar.getHeight());
        }
        return new Rect(0, 0, Math.min(rect.width(), cVar.getWidth()), Math.min(rect.height(), cVar.getHeight()));
    }

    private void n(Canvas canvas, float f10, float f11, ha.b bVar) {
        if (bVar.f27015g == b.EnumC0359b.DISPOSE_TO_BACKGROUND) {
            int ceil = (int) Math.ceil(bVar.f27010b * f10);
            int ceil2 = (int) Math.ceil(bVar.f27011c * f11);
            canvas.drawRect(new Rect(ceil, ceil2, ((int) Math.ceil(bVar.f27012d * f10)) + ceil, ((int) Math.ceil(bVar.f27013e * f11)) + ceil2), this.f30880l);
        }
    }

    private synchronized Bitmap o(int i10, int i11) {
        try {
            Bitmap bitmap = this.f30881m;
            if (bitmap != null) {
                if (bitmap.getWidth() >= i10) {
                    if (this.f30881m.getHeight() < i11) {
                    }
                }
                l();
            }
            if (this.f30881m == null) {
                this.f30881m = Bitmap.createBitmap(i10, i11, Bitmap.Config.ARGB_8888);
            }
            this.f30881m.eraseColor(0);
        } catch (Throwable th2) {
            throw th2;
        }
        return this.f30881m;
    }

    private void p(Canvas canvas, ha.d dVar) {
        int width;
        int height;
        int b10;
        int c10;
        if (this.f30879k) {
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
            this.f30881m = o10;
            dVar.a(width, height, o10);
            canvas.save();
            canvas.translate(b10, c10);
            canvas.drawBitmap(this.f30881m, 0.0f, 0.0f, (Paint) null);
            canvas.restore();
        }
    }

    private void q(Canvas canvas, ha.d dVar) {
        double width = this.f30872d.width() / this.f30871c.getWidth();
        double height = this.f30872d.height() / this.f30871c.getHeight();
        int round = (int) Math.round(dVar.getWidth() * width);
        int round2 = (int) Math.round(dVar.getHeight() * height);
        int b10 = (int) (dVar.b() * width);
        int c10 = (int) (dVar.c() * height);
        synchronized (this) {
            try {
                int width2 = this.f30872d.width();
                int height2 = this.f30872d.height();
                o(width2, height2);
                Bitmap bitmap = this.f30881m;
                if (bitmap != null) {
                    dVar.a(round, round2, bitmap);
                }
                this.f30877i.set(0, 0, width2, height2);
                this.f30878j.set(b10, c10, width2 + b10, height2 + c10);
                Bitmap bitmap2 = this.f30881m;
                if (bitmap2 != null) {
                    canvas.drawBitmap(bitmap2, this.f30877i, this.f30878j, (Paint) null);
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    private void r(Canvas canvas, ha.d dVar, ha.b bVar, ha.b bVar2) {
        Rect rect = this.f30872d;
        if (rect != null && rect.width() > 0 && this.f30872d.height() > 0) {
            float width = canvas.getWidth() / this.f30872d.width();
            if (bVar2 != null) {
                n(canvas, width, width, bVar2);
            }
            int width2 = dVar.getWidth();
            int height = dVar.getHeight();
            Rect rect2 = new Rect(0, 0, width2, height);
            int b10 = (int) (dVar.b() * width);
            int c10 = (int) (dVar.c() * width);
            Rect rect3 = new Rect(b10, c10, ((int) (width2 * width)) + b10, ((int) (height * width)) + c10);
            if (bVar.f27014f == b.a.NO_BLEND) {
                canvas.drawRect(rect3, this.f30880l);
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
        int width = this.f30871c.getWidth();
        int height = this.f30871c.getHeight();
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
        if (bVar.f27014f == b.a.NO_BLEND) {
            canvas.drawRect(rect2, this.f30880l);
        }
        synchronized (this) {
            Bitmap o10 = o(width2, height2);
            dVar.a(width2, height2, o10);
            canvas.drawBitmap(o10, rect, rect2, (Paint) null);
        }
    }

    @Override // ha.a
    public int a() {
        return this.f30871c.a();
    }

    @Override // ha.a
    public int b() {
        return this.f30871c.b();
    }

    @Override // ha.a
    public ha.b c(int i10) {
        return this.f30876h[i10];
    }

    @Override // ha.a
    public int d() {
        return this.f30875g;
    }

    @Override // ha.a
    public void e(int i10, Canvas canvas) {
        ha.d z10 = this.f30871c.z(i10);
        try {
            if (z10.getWidth() > 0 && z10.getHeight() > 0) {
                if (this.f30871c.x()) {
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
        if (m(this.f30871c, rect).equals(this.f30872d)) {
            return this;
        }
        return new a(this.f30869a, this.f30870b, rect, this.f30879k);
    }

    @Override // ha.a
    public int g(int i10) {
        return this.f30873e[i10];
    }

    @Override // ha.a
    public int getHeight() {
        return this.f30871c.getHeight();
    }

    @Override // ha.a
    public int getWidth() {
        return this.f30871c.getWidth();
    }

    @Override // ha.a
    public int h() {
        return this.f30872d.height();
    }

    @Override // ha.a
    public void i(int i10, Canvas canvas) {
        ha.b c10;
        ha.d z10 = this.f30871c.z(i10);
        ha.b c11 = this.f30871c.c(i10);
        if (i10 == 0) {
            c10 = null;
        } else {
            c10 = this.f30871c.c(i10 - 1);
        }
        try {
            if (z10.getWidth() > 0 && z10.getHeight() > 0) {
                if (this.f30871c.x()) {
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
        return this.f30872d.width();
    }

    @Override // ha.a
    public e k() {
        return this.f30870b;
    }
}
