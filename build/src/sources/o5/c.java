package o5;

import android.graphics.Color;
import android.graphics.Paint;
import o5.a;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class c implements a.b {

    /* renamed from: a  reason: collision with root package name */
    private final a.b f41540a;

    /* renamed from: b  reason: collision with root package name */
    private final o5.a f41541b;

    /* renamed from: c  reason: collision with root package name */
    private final o5.a f41542c;

    /* renamed from: d  reason: collision with root package name */
    private final o5.a f41543d;

    /* renamed from: e  reason: collision with root package name */
    private final o5.a f41544e;

    /* renamed from: f  reason: collision with root package name */
    private final o5.a f41545f;

    /* renamed from: g  reason: collision with root package name */
    private boolean f41546g = true;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class a extends y5.c {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ y5.c f41547d;

        a(y5.c cVar) {
            this.f41547d = cVar;
        }

        @Override // y5.c
        /* renamed from: d */
        public Float a(y5.b bVar) {
            Float f10 = (Float) this.f41547d.a(bVar);
            if (f10 == null) {
                return null;
            }
            return Float.valueOf(f10.floatValue() * 2.55f);
        }
    }

    public c(a.b bVar, t5.b bVar2, v5.j jVar) {
        this.f41540a = bVar;
        o5.a a10 = jVar.a().a();
        this.f41541b = a10;
        a10.a(this);
        bVar2.i(a10);
        o5.a a11 = jVar.d().a();
        this.f41542c = a11;
        a11.a(this);
        bVar2.i(a11);
        o5.a a12 = jVar.b().a();
        this.f41543d = a12;
        a12.a(this);
        bVar2.i(a12);
        o5.a a13 = jVar.c().a();
        this.f41544e = a13;
        a13.a(this);
        bVar2.i(a13);
        o5.a a14 = jVar.e().a();
        this.f41545f = a14;
        a14.a(this);
        bVar2.i(a14);
    }

    @Override // o5.a.b
    public void a() {
        this.f41546g = true;
        this.f41540a.a();
    }

    public void b(Paint paint) {
        if (!this.f41546g) {
            return;
        }
        this.f41546g = false;
        double floatValue = ((Float) this.f41543d.h()).floatValue() * 0.017453292519943295d;
        float floatValue2 = ((Float) this.f41544e.h()).floatValue();
        float sin = ((float) Math.sin(floatValue)) * floatValue2;
        float cos = ((float) Math.cos(floatValue + 3.141592653589793d)) * floatValue2;
        int intValue = ((Integer) this.f41541b.h()).intValue();
        paint.setShadowLayer(((Float) this.f41545f.h()).floatValue(), sin, cos, Color.argb(Math.round(((Float) this.f41542c.h()).floatValue()), Color.red(intValue), Color.green(intValue), Color.blue(intValue)));
    }

    public void c(y5.c cVar) {
        this.f41541b.o(cVar);
    }

    public void d(y5.c cVar) {
        this.f41543d.o(cVar);
    }

    public void e(y5.c cVar) {
        this.f41544e.o(cVar);
    }

    public void f(y5.c cVar) {
        if (cVar == null) {
            this.f41542c.o(null);
        } else {
            this.f41542c.o(new a(cVar));
        }
    }

    public void g(y5.c cVar) {
        this.f41545f.o(cVar);
    }
}
