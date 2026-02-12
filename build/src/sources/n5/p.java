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
    private final Matrix f36946a = new Matrix();

    /* renamed from: b  reason: collision with root package name */
    private final Path f36947b = new Path();

    /* renamed from: c  reason: collision with root package name */
    private final com.airbnb.lottie.n f36948c;

    /* renamed from: d  reason: collision with root package name */
    private final u5.b f36949d;

    /* renamed from: e  reason: collision with root package name */
    private final String f36950e;

    /* renamed from: f  reason: collision with root package name */
    private final boolean f36951f;

    /* renamed from: g  reason: collision with root package name */
    private final o5.a f36952g;

    /* renamed from: h  reason: collision with root package name */
    private final o5.a f36953h;

    /* renamed from: i  reason: collision with root package name */
    private final o5.p f36954i;

    /* renamed from: j  reason: collision with root package name */
    private d f36955j;

    public p(com.airbnb.lottie.n nVar, u5.b bVar, t5.m mVar) {
        this.f36948c = nVar;
        this.f36949d = bVar;
        this.f36950e = mVar.c();
        this.f36951f = mVar.f();
        o5.d a10 = mVar.b().a();
        this.f36952g = a10;
        bVar.i(a10);
        a10.a(this);
        o5.d a11 = mVar.d().a();
        this.f36953h = a11;
        bVar.i(a11);
        a11.a(this);
        o5.p b10 = mVar.e().b();
        this.f36954i = b10;
        b10.a(bVar);
        b10.b(this);
    }

    @Override // o5.a.b
    public void a() {
        this.f36948c.invalidateSelf();
    }

    @Override // n5.c
    public void b(List list, List list2) {
        this.f36955j.b(list, list2);
    }

    @Override // r5.f
    public void d(Object obj, z5.c cVar) {
        if (!this.f36954i.c(obj, cVar)) {
            if (obj == b0.f35566u) {
                this.f36952g.o(cVar);
            } else if (obj == b0.f35567v) {
                this.f36953h.o(cVar);
            }
        }
    }

    @Override // r5.f
    public void e(r5.e eVar, int i10, List list, r5.e eVar2) {
        y5.i.k(eVar, i10, list, eVar2, this);
        for (int i11 = 0; i11 < this.f36955j.j().size(); i11++) {
            c cVar = (c) this.f36955j.j().get(i11);
            if (cVar instanceof k) {
                y5.i.k(eVar, i10, list, eVar2, (k) cVar);
            }
        }
    }

    @Override // n5.e
    public void f(RectF rectF, Matrix matrix, boolean z10) {
        this.f36955j.f(rectF, matrix, z10);
    }

    @Override // n5.j
    public void g(ListIterator listIterator) {
        if (this.f36955j != null) {
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
        this.f36955j = new d(this.f36948c, this.f36949d, "Repeater", this.f36951f, arrayList, null);
    }

    @Override // n5.c
    public String getName() {
        return this.f36950e;
    }

    @Override // n5.e
    public void h(Canvas canvas, Matrix matrix, int i10) {
        float floatValue = ((Float) this.f36952g.h()).floatValue();
        float floatValue2 = ((Float) this.f36953h.h()).floatValue();
        float floatValue3 = ((Float) this.f36954i.i().h()).floatValue() / 100.0f;
        float floatValue4 = ((Float) this.f36954i.e().h()).floatValue() / 100.0f;
        for (int i11 = ((int) floatValue) - 1; i11 >= 0; i11--) {
            this.f36946a.set(matrix);
            float f10 = i11;
            this.f36946a.preConcat(this.f36954i.g(f10 + floatValue2));
            this.f36955j.h(canvas, this.f36946a, (int) (i10 * y5.i.i(floatValue3, floatValue4, f10 / floatValue)));
        }
    }

    @Override // n5.m
    public Path t() {
        Path t10 = this.f36955j.t();
        this.f36947b.reset();
        float floatValue = ((Float) this.f36952g.h()).floatValue();
        float floatValue2 = ((Float) this.f36953h.h()).floatValue();
        for (int i10 = ((int) floatValue) - 1; i10 >= 0; i10--) {
            this.f36946a.set(this.f36954i.g(i10 + floatValue2));
            this.f36947b.addPath(t10, this.f36946a);
        }
        return this.f36947b;
    }
}
