package n5;

import android.graphics.Canvas;
import android.graphics.Matrix;
import android.graphics.Path;
import android.graphics.RectF;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.ListIterator;
import l5.b0;
import o5.a;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class p implements e, m, j, a.b, k {

    /* renamed from: a  reason: collision with root package name */
    private final Matrix f36945a = new Matrix();

    /* renamed from: b  reason: collision with root package name */
    private final Path f36946b = new Path();

    /* renamed from: c  reason: collision with root package name */
    private final com.airbnb.lottie.n f36947c;

    /* renamed from: d  reason: collision with root package name */
    private final u5.b f36948d;

    /* renamed from: e  reason: collision with root package name */
    private final String f36949e;

    /* renamed from: f  reason: collision with root package name */
    private final boolean f36950f;

    /* renamed from: g  reason: collision with root package name */
    private final o5.a f36951g;

    /* renamed from: h  reason: collision with root package name */
    private final o5.a f36952h;

    /* renamed from: i  reason: collision with root package name */
    private final o5.p f36953i;

    /* renamed from: j  reason: collision with root package name */
    private d f36954j;

    public p(com.airbnb.lottie.n nVar, u5.b bVar, t5.m mVar) {
        this.f36947c = nVar;
        this.f36948d = bVar;
        this.f36949e = mVar.c();
        this.f36950f = mVar.f();
        o5.d a10 = mVar.b().a();
        this.f36951g = a10;
        bVar.i(a10);
        a10.a(this);
        o5.d a11 = mVar.d().a();
        this.f36952h = a11;
        bVar.i(a11);
        a11.a(this);
        o5.p b10 = mVar.e().b();
        this.f36953i = b10;
        b10.a(bVar);
        b10.b(this);
    }

    @Override // o5.a.b
    public void a() {
        this.f36947c.invalidateSelf();
    }

    @Override // n5.c
    public void b(List list, List list2) {
        this.f36954j.b(list, list2);
    }

    @Override // r5.f
    public void d(Object obj, z5.c cVar) {
        if (!this.f36953i.c(obj, cVar)) {
            if (obj == b0.f35565u) {
                this.f36951g.o(cVar);
            } else if (obj == b0.f35566v) {
                this.f36952h.o(cVar);
            }
        }
    }

    @Override // r5.f
    public void e(r5.e eVar, int i10, List list, r5.e eVar2) {
        y5.i.k(eVar, i10, list, eVar2, this);
        for (int i11 = 0; i11 < this.f36954j.j().size(); i11++) {
            c cVar = (c) this.f36954j.j().get(i11);
            if (cVar instanceof k) {
                y5.i.k(eVar, i10, list, eVar2, (k) cVar);
            }
        }
    }

    @Override // n5.e
    public void f(RectF rectF, Matrix matrix, boolean z10) {
        this.f36954j.f(rectF, matrix, z10);
    }

    @Override // n5.j
    public void g(ListIterator listIterator) {
        if (this.f36954j != null) {
            return;
        }
        while (listIterator.hasPrevious() && listIterator.previous() != this) {
        }
        ArrayList arrayList = new ArrayList();
        while (listIterator.hasPrevious()) {
            arrayList.add((c) listIterator.previous());
            listIterator.remove();
        }
        Collections.reverse(arrayList);
        this.f36954j = new d(this.f36947c, this.f36948d, "Repeater", this.f36950f, arrayList, null);
    }

    @Override // n5.c
    public String getName() {
        return this.f36949e;
    }

    @Override // n5.e
    public void h(Canvas canvas, Matrix matrix, int i10) {
        float floatValue = ((Float) this.f36951g.h()).floatValue();
        float floatValue2 = ((Float) this.f36952h.h()).floatValue();
        float floatValue3 = ((Float) this.f36953i.i().h()).floatValue() / 100.0f;
        float floatValue4 = ((Float) this.f36953i.e().h()).floatValue() / 100.0f;
        for (int i11 = ((int) floatValue) - 1; i11 >= 0; i11--) {
            this.f36945a.set(matrix);
            float f10 = i11;
            this.f36945a.preConcat(this.f36953i.g(f10 + floatValue2));
            this.f36954j.h(canvas, this.f36945a, (int) (i10 * y5.i.i(floatValue3, floatValue4, f10 / floatValue)));
        }
    }

    @Override // n5.m
    public Path t() {
        Path t10 = this.f36954j.t();
        this.f36946b.reset();
        float floatValue = ((Float) this.f36951g.h()).floatValue();
        float floatValue2 = ((Float) this.f36952h.h()).floatValue();
        for (int i10 = ((int) floatValue) - 1; i10 >= 0; i10--) {
            this.f36945a.set(this.f36953i.g(i10 + floatValue2));
            this.f36946b.addPath(t10, this.f36945a);
        }
        return this.f36946b;
    }
}
