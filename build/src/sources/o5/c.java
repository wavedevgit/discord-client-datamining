package o5;

import android.graphics.Color;
import android.graphics.Matrix;
import android.graphics.Paint;
import o5.a;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class c implements a.b {

    /* renamed from: a  reason: collision with root package name */
    private final u5.b f38596a;

    /* renamed from: b  reason: collision with root package name */
    private final a.b f38597b;

    /* renamed from: c  reason: collision with root package name */
    private final o5.a f38598c;

    /* renamed from: d  reason: collision with root package name */
    private final d f38599d;

    /* renamed from: e  reason: collision with root package name */
    private final d f38600e;

    /* renamed from: f  reason: collision with root package name */
    private final d f38601f;

    /* renamed from: g  reason: collision with root package name */
    private final d f38602g;

    /* renamed from: h  reason: collision with root package name */
    private float f38603h = Float.NaN;

    /* renamed from: i  reason: collision with root package name */
    private float f38604i = Float.NaN;

    /* renamed from: j  reason: collision with root package name */
    private float f38605j = Float.NaN;

    /* renamed from: k  reason: collision with root package name */
    private int f38606k = 0;

    /* renamed from: l  reason: collision with root package name */
    private final float[] f38607l = new float[9];

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public class a extends z5.c {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ z5.c f38608d;

        a(z5.c cVar) {
            this.f38608d = cVar;
        }

        @Override // z5.c
        /* renamed from: d */
        public Float a(z5.b bVar) {
            Float f10 = (Float) this.f38608d.a(bVar);
            if (f10 == null) {
                return null;
            }
            return Float.valueOf(f10.floatValue() * 2.55f);
        }
    }

    public c(a.b bVar, u5.b bVar2, w5.j jVar) {
        this.f38597b = bVar;
        this.f38596a = bVar2;
        o5.a a10 = jVar.a().a();
        this.f38598c = a10;
        a10.a(this);
        bVar2.i(a10);
        d a11 = jVar.d().a();
        this.f38599d = a11;
        a11.a(this);
        bVar2.i(a11);
        d a12 = jVar.b().a();
        this.f38600e = a12;
        a12.a(this);
        bVar2.i(a12);
        d a13 = jVar.c().a();
        this.f38601f = a13;
        a13.a(this);
        bVar2.i(a13);
        d a14 = jVar.e().a();
        this.f38602g = a14;
        a14.a(this);
        bVar2.i(a14);
    }

    @Override // o5.a.b
    public void a() {
        this.f38597b.a();
    }

    public void b(Paint paint, Matrix matrix, int i10) {
        float floatValue = ((Float) this.f38601f.h()).floatValue();
        double q10 = this.f38600e.q() * 0.017453292f;
        float sin = ((float) Math.sin(q10)) * floatValue;
        float cos = ((float) Math.cos(q10 + 3.141592653589793d)) * floatValue;
        this.f38596a.f50458x.f().getValues(this.f38607l);
        float[] fArr = this.f38607l;
        float f10 = fArr[0];
        float f11 = fArr[4];
        matrix.getValues(fArr);
        float[] fArr2 = this.f38607l;
        float f12 = fArr2[0] / f10;
        float f13 = sin * f12;
        float f14 = cos * (fArr2[4] / f11);
        int intValue = ((Integer) this.f38598c.h()).intValue();
        int argb = Color.argb(Math.round((((Float) this.f38599d.h()).floatValue() * i10) / 255.0f), Color.red(intValue), Color.green(intValue), Color.blue(intValue));
        float max = Math.max(((Float) this.f38602g.h()).floatValue() * f12 * 0.33f, Float.MIN_VALUE);
        if (this.f38603h == max && this.f38604i == f13 && this.f38605j == f14 && this.f38606k == argb) {
            return;
        }
        this.f38603h = max;
        this.f38604i = f13;
        this.f38605j = f14;
        this.f38606k = argb;
        paint.setShadowLayer(max, f13, f14, argb);
    }

    public void c(z5.c cVar) {
        this.f38598c.o(cVar);
    }

    public void d(z5.c cVar) {
        this.f38600e.o(cVar);
    }

    public void e(z5.c cVar) {
        this.f38601f.o(cVar);
    }

    public void f(z5.c cVar) {
        if (cVar == null) {
            this.f38599d.o(null);
        } else {
            this.f38599d.o(new a(cVar));
        }
    }

    public void g(z5.c cVar) {
        this.f38602g.o(cVar);
    }
}
