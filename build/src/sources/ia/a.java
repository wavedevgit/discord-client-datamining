package ia;

import android.graphics.Bitmap;
import android.graphics.Canvas;
import android.graphics.Paint;
import android.graphics.PorterDuff;
import android.graphics.PorterDuffXfermode;
import android.graphics.Rect;
import ga.b;
import ga.e;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class a implements ga.a {

    /* renamed from: a  reason: collision with root package name */
    private final ja.a f26664a;

    /* renamed from: b  reason: collision with root package name */
    private final e f26665b;

    /* renamed from: c  reason: collision with root package name */
    private final ga.c f26666c;

    /* renamed from: d  reason: collision with root package name */
    private final Rect f26667d;

    /* renamed from: e  reason: collision with root package name */
    private final int[] f26668e;

    /* renamed from: f  reason: collision with root package name */
    private final int[] f26669f;

    /* renamed from: g  reason: collision with root package name */
    private final int f26670g;

    /* renamed from: h  reason: collision with root package name */
    private final ga.b[] f26671h;

    /* renamed from: i  reason: collision with root package name */
    private final Rect f26672i = new Rect();

    /* renamed from: j  reason: collision with root package name */
    private final Rect f26673j = new Rect();

    /* renamed from: k  reason: collision with root package name */
    private final boolean f26674k;

    /* renamed from: l  reason: collision with root package name */
    private final Paint f26675l;

    /* renamed from: m  reason: collision with root package name */
    private Bitmap f26676m;

    public a(ja.a aVar, e eVar, Rect rect, boolean z10) {
        this.f26664a = aVar;
        this.f26665b = eVar;
        ga.c d10 = eVar.d();
        this.f26666c = d10;
        int[] A = d10.A();
        this.f26668e = A;
        aVar.a(A);
        this.f26670g = aVar.c(A);
        this.f26669f = aVar.b(A);
        this.f26667d = m(d10, rect);
        this.f26674k = z10;
        this.f26671h = new ga.b[d10.a()];
        for (int i10 = 0; i10 < this.f26666c.a(); i10++) {
            this.f26671h[i10] = this.f26666c.c(i10);
        }
        Paint paint = new Paint();
        this.f26675l = paint;
        paint.setXfermode(new PorterDuffXfermode(PorterDuff.Mode.CLEAR));
    }

    private synchronized void l() {
        Bitmap bitmap = this.f26676m;
        if (bitmap != null) {
            bitmap.recycle();
            this.f26676m = null;
        }
    }

    private static Rect m(ga.c cVar, Rect rect) {
        if (rect == null) {
            return new Rect(0, 0, cVar.getWidth(), cVar.getHeight());
        }
        return new Rect(0, 0, Math.min(rect.width(), cVar.getWidth()), Math.min(rect.height(), cVar.getHeight()));
    }

    private void n(Canvas canvas, float f10, float f11, ga.b bVar) {
        if (bVar.f24886g == b.EnumC0335b.DISPOSE_TO_BACKGROUND) {
            int ceil = (int) Math.ceil(bVar.f24881b * f10);
            int ceil2 = (int) Math.ceil(bVar.f24882c * f11);
            canvas.drawRect(new Rect(ceil, ceil2, ((int) Math.ceil(bVar.f24883d * f10)) + ceil, ((int) Math.ceil(bVar.f24884e * f11)) + ceil2), this.f26675l);
        }
    }

    private synchronized Bitmap o(int i10, int i11) {
        try {
            Bitmap bitmap = this.f26676m;
            if (bitmap != null) {
                if (bitmap.getWidth() >= i10) {
                    if (this.f26676m.getHeight() < i11) {
                    }
                }
                l();
            }
            if (this.f26676m == null) {
                this.f26676m = Bitmap.createBitmap(i10, i11, Bitmap.Config.ARGB_8888);
            }
            this.f26676m.eraseColor(0);
        } catch (Throwable th2) {
            throw th2;
        }
        return this.f26676m;
    }

    private void p(Canvas canvas, ga.d dVar) {
        int width;
        int height;
        int b10;
        int c10;
        if (this.f26674k) {
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
            this.f26676m = o10;
            dVar.a(width, height, o10);
            canvas.save();
            canvas.translate(b10, c10);
            canvas.drawBitmap(this.f26676m, 0.0f, 0.0f, (Paint) null);
            canvas.restore();
        }
    }

    private void q(Canvas canvas, ga.d dVar) {
        double width = this.f26667d.width() / this.f26666c.getWidth();
        double height = this.f26667d.height() / this.f26666c.getHeight();
        int round = (int) Math.round(dVar.getWidth() * width);
        int round2 = (int) Math.round(dVar.getHeight() * height);
        int b10 = (int) (dVar.b() * width);
        int c10 = (int) (dVar.c() * height);
        synchronized (this) {
            try {
                int width2 = this.f26667d.width();
                int height2 = this.f26667d.height();
                o(width2, height2);
                Bitmap bitmap = this.f26676m;
                if (bitmap != null) {
                    dVar.a(round, round2, bitmap);
                }
                this.f26672i.set(0, 0, width2, height2);
                this.f26673j.set(b10, c10, width2 + b10, height2 + c10);
                Bitmap bitmap2 = this.f26676m;
                if (bitmap2 != null) {
                    canvas.drawBitmap(bitmap2, this.f26672i, this.f26673j, (Paint) null);
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    private void r(Canvas canvas, ga.d dVar, ga.b bVar, ga.b bVar2) {
        Rect rect = this.f26667d;
        if (rect != null && rect.width() > 0 && this.f26667d.height() > 0) {
            float width = canvas.getWidth() / this.f26667d.width();
            if (bVar2 != null) {
                n(canvas, width, width, bVar2);
            }
            int width2 = dVar.getWidth();
            int height = dVar.getHeight();
            Rect rect2 = new Rect(0, 0, width2, height);
            int b10 = (int) (dVar.b() * width);
            int c10 = (int) (dVar.c() * width);
            Rect rect3 = new Rect(b10, c10, ((int) (width2 * width)) + b10, ((int) (height * width)) + c10);
            if (bVar.f24885f == b.a.NO_BLEND) {
                canvas.drawRect(rect3, this.f26675l);
            }
            synchronized (this) {
                Bitmap o10 = o(width2, height);
                dVar.a(width2, height, o10);
                canvas.drawBitmap(o10, rect2, rect3, (Paint) null);
            }
        }
    }

    private void s(Canvas canvas, ga.d dVar, ga.b bVar, ga.b bVar2) {
        float f10;
        float f11;
        float f12;
        float f13;
        int width = this.f26666c.getWidth();
        int height = this.f26666c.getHeight();
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
        if (bVar.f24885f == b.a.NO_BLEND) {
            canvas.drawRect(rect2, this.f26675l);
        }
        synchronized (this) {
            Bitmap o10 = o(width2, height2);
            dVar.a(width2, height2, o10);
            canvas.drawBitmap(o10, rect, rect2, (Paint) null);
        }
    }

    @Override // ga.a
    public int a() {
        return this.f26666c.a();
    }

    @Override // ga.a
    public int b() {
        return this.f26666c.b();
    }

    @Override // ga.a
    public ga.b c(int i10) {
        return this.f26671h[i10];
    }

    @Override // ga.a
    public int d() {
        return this.f26670g;
    }

    @Override // ga.a
    public void e(int i10, Canvas canvas) {
        ga.d z10 = this.f26666c.z(i10);
        try {
            if (z10.getWidth() > 0 && z10.getHeight() > 0) {
                if (this.f26666c.x()) {
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

    @Override // ga.a
    public ga.a f(Rect rect) {
        if (m(this.f26666c, rect).equals(this.f26667d)) {
            return this;
        }
        return new a(this.f26664a, this.f26665b, rect, this.f26674k);
    }

    @Override // ga.a
    public int g(int i10) {
        return this.f26668e[i10];
    }

    @Override // ga.a
    public int getHeight() {
        return this.f26666c.getHeight();
    }

    @Override // ga.a
    public int getWidth() {
        return this.f26666c.getWidth();
    }

    @Override // ga.a
    public int h() {
        return this.f26667d.height();
    }

    @Override // ga.a
    public void i(int i10, Canvas canvas) {
        ga.b c10;
        ga.d z10 = this.f26666c.z(i10);
        ga.b c11 = this.f26666c.c(i10);
        if (i10 == 0) {
            c10 = null;
        } else {
            c10 = this.f26666c.c(i10 - 1);
        }
        try {
            if (z10.getWidth() > 0 && z10.getHeight() > 0) {
                if (this.f26666c.x()) {
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

    @Override // ga.a
    public int j() {
        return this.f26667d.width();
    }

    @Override // ga.a
    public e k() {
        return this.f26665b;
    }
}
