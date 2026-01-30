package o5;

import android.graphics.Color;
import android.graphics.Paint;
import o5.a;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class c implements a.b {

    /* renamed from: a  reason: collision with root package name */
    private final a.b f42435a;

    /* renamed from: b  reason: collision with root package name */
    private final o5.a f42436b;

    /* renamed from: c  reason: collision with root package name */
    private final o5.a f42437c;

    /* renamed from: d  reason: collision with root package name */
    private final o5.a f42438d;

    /* renamed from: e  reason: collision with root package name */
    private final o5.a f42439e;

    /* renamed from: f  reason: collision with root package name */
    private final o5.a f42440f;

    /* renamed from: g  reason: collision with root package name */
    private boolean f42441g = true;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class a extends y5.c {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ y5.c f42442d;

        a(y5.c cVar) {
            this.f42442d = cVar;
        }

        @Override // y5.c
        /* renamed from: d */
        public Float a(y5.b bVar) {
            Float f10 = (Float) this.f42442d.a(bVar);
            if (f10 == null) {
                return null;
            }
            return Float.valueOf(f10.floatValue() * 2.55f);
        }
    }

    public c(a.b bVar, t5.b bVar2, v5.j jVar) {
        this.f42435a = bVar;
        o5.a a10 = jVar.a().a();
        this.f42436b = a10;
        a10.a(this);
        bVar2.i(a10);
        o5.a a11 = jVar.d().a();
        this.f42437c = a11;
        a11.a(this);
        bVar2.i(a11);
        o5.a a12 = jVar.b().a();
        this.f42438d = a12;
        a12.a(this);
        bVar2.i(a12);
        o5.a a13 = jVar.c().a();
        this.f42439e = a13;
        a13.a(this);
        bVar2.i(a13);
        o5.a a14 = jVar.e().a();
        this.f42440f = a14;
        a14.a(this);
        bVar2.i(a14);
    }

    @Override // o5.a.b
    public void a() {
        this.f42441g = true;
        this.f42435a.a();
    }

    public void b(Paint paint) {
        if (!this.f42441g) {
            return;
        }
        this.f42441g = false;
        double floatValue = ((Float) this.f42438d.h()).floatValue() * 0.017453292519943295d;
        float floatValue2 = ((Float) this.f42439e.h()).floatValue();
        float sin = ((float) Math.sin(floatValue)) * floatValue2;
        float cos = ((float) Math.cos(floatValue + 3.141592653589793d)) * floatValue2;
        int intValue = ((Integer) this.f42436b.h()).intValue();
        paint.setShadowLayer(((Float) this.f42440f.h()).floatValue(), sin, cos, Color.argb(Math.round(((Float) this.f42437c.h()).floatValue()), Color.red(intValue), Color.green(intValue), Color.blue(intValue)));
    }

    public void c(y5.c cVar) {
        this.f42436b.o(cVar);
    }

    public void d(y5.c cVar) {
        this.f42438d.o(cVar);
    }

    public void e(y5.c cVar) {
        this.f42439e.o(cVar);
    }

    public void f(y5.c cVar) {
        if (cVar == null) {
            this.f42437c.o(null);
        } else {
            this.f42437c.o(new a(cVar));
        }
    }

    public void g(y5.c cVar) {
        this.f42440f.o(cVar);
    }
}
