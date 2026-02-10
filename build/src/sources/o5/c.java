package o5;

import android.graphics.Color;
import android.graphics.Matrix;
import android.graphics.Paint;
import o5.a;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class c implements a.b {

    /* renamed from: a  reason: collision with root package name */
    private final u5.b f40270a;

    /* renamed from: b  reason: collision with root package name */
    private final a.b f40271b;

    /* renamed from: c  reason: collision with root package name */
    private final o5.a f40272c;

    /* renamed from: d  reason: collision with root package name */
    private final d f40273d;

    /* renamed from: e  reason: collision with root package name */
    private final d f40274e;

    /* renamed from: f  reason: collision with root package name */
    private final d f40275f;

    /* renamed from: g  reason: collision with root package name */
    private final d f40276g;

    /* renamed from: h  reason: collision with root package name */
    private float f40277h = Float.NaN;

    /* renamed from: i  reason: collision with root package name */
    private float f40278i = Float.NaN;

    /* renamed from: j  reason: collision with root package name */
    private float f40279j = Float.NaN;

    /* renamed from: k  reason: collision with root package name */
    private int f40280k = 0;

    /* renamed from: l  reason: collision with root package name */
    private final float[] f40281l = new float[9];

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public class a extends z5.c {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ z5.c f40282d;

        a(z5.c cVar) {
            this.f40282d = cVar;
        }

        @Override // z5.c
        /* renamed from: d */
        public Float a(z5.b bVar) {
            Float f10 = (Float) this.f40282d.a(bVar);
            if (f10 == null) {
                return null;
            }
            return Float.valueOf(f10.floatValue() * 2.55f);
        }
    }

    public c(a.b bVar, u5.b bVar2, w5.j jVar) {
        this.f40271b = bVar;
        this.f40270a = bVar2;
        o5.a a10 = jVar.a().a();
        this.f40272c = a10;
        a10.a(this);
        bVar2.i(a10);
        d a11 = jVar.d().a();
        this.f40273d = a11;
        a11.a(this);
        bVar2.i(a11);
        d a12 = jVar.b().a();
        this.f40274e = a12;
        a12.a(this);
        bVar2.i(a12);
        d a13 = jVar.c().a();
        this.f40275f = a13;
        a13.a(this);
        bVar2.i(a13);
        d a14 = jVar.e().a();
        this.f40276g = a14;
        a14.a(this);
        bVar2.i(a14);
    }

    @Override // o5.a.b
    public void a() {
        this.f40271b.a();
    }

    public void b(Paint paint, Matrix matrix, int i10) {
        float floatValue = ((Float) this.f40275f.h()).floatValue();
        double q10 = this.f40274e.q() * 0.017453292f;
        float sin = ((float) Math.sin(q10)) * floatValue;
        float cos = ((float) Math.cos(q10 + 3.141592653589793d)) * floatValue;
        this.f40270a.f51279x.f().getValues(this.f40281l);
        float[] fArr = this.f40281l;
        float f10 = fArr[0];
        float f11 = fArr[4];
        matrix.getValues(fArr);
        float[] fArr2 = this.f40281l;
        float f12 = fArr2[0] / f10;
        float f13 = sin * f12;
        float f14 = cos * (fArr2[4] / f11);
        int intValue = ((Integer) this.f40272c.h()).intValue();
        int argb = Color.argb(Math.round((((Float) this.f40273d.h()).floatValue() * i10) / 255.0f), Color.red(intValue), Color.green(intValue), Color.blue(intValue));
        float max = Math.max(((Float) this.f40276g.h()).floatValue() * f12 * 0.33f, Float.MIN_VALUE);
        if (this.f40277h == max && this.f40278i == f13 && this.f40279j == f14 && this.f40280k == argb) {
            return;
        }
        this.f40277h = max;
        this.f40278i = f13;
        this.f40279j = f14;
        this.f40280k = argb;
        paint.setShadowLayer(max, f13, f14, argb);
    }

    public void c(z5.c cVar) {
        this.f40272c.o(cVar);
    }

    public void d(z5.c cVar) {
        this.f40274e.o(cVar);
    }

    public void e(z5.c cVar) {
        this.f40275f.o(cVar);
    }

    public void f(z5.c cVar) {
        if (cVar == null) {
            this.f40273d.o(null);
        } else {
            this.f40273d.o(new a(cVar));
        }
    }

    public void g(z5.c cVar) {
        this.f40276g.o(cVar);
    }
}
