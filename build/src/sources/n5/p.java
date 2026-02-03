package n5;

import android.graphics.Canvas;
import android.graphics.Matrix;
import android.graphics.Path;
import android.graphics.RectF;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.ListIterator;
import l5.a0;
import o5.a;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class p implements e, m, j, a.b, k {

    /* renamed from: a  reason: collision with root package name */
    private final Matrix f39742a = new Matrix();

    /* renamed from: b  reason: collision with root package name */
    private final Path f39743b = new Path();

    /* renamed from: c  reason: collision with root package name */
    private final com.airbnb.lottie.n f39744c;

    /* renamed from: d  reason: collision with root package name */
    private final t5.b f39745d;

    /* renamed from: e  reason: collision with root package name */
    private final String f39746e;

    /* renamed from: f  reason: collision with root package name */
    private final boolean f39747f;

    /* renamed from: g  reason: collision with root package name */
    private final o5.a f39748g;

    /* renamed from: h  reason: collision with root package name */
    private final o5.a f39749h;

    /* renamed from: i  reason: collision with root package name */
    private final o5.p f39750i;

    /* renamed from: j  reason: collision with root package name */
    private d f39751j;

    public p(com.airbnb.lottie.n nVar, t5.b bVar, s5.m mVar) {
        this.f39744c = nVar;
        this.f39745d = bVar;
        this.f39746e = mVar.c();
        this.f39747f = mVar.f();
        o5.a a10 = mVar.b().a();
        this.f39748g = a10;
        bVar.i(a10);
        a10.a(this);
        o5.a a11 = mVar.d().a();
        this.f39749h = a11;
        bVar.i(a11);
        a11.a(this);
        o5.p b10 = mVar.e().b();
        this.f39750i = b10;
        b10.a(bVar);
        b10.b(this);
    }

    @Override // o5.a.b
    public void a() {
        this.f39744c.invalidateSelf();
    }

    @Override // n5.c
    public void b(List list, List list2) {
        this.f39751j.b(list, list2);
    }

    @Override // q5.f
    public void c(q5.e eVar, int i10, List list, q5.e eVar2) {
        x5.i.k(eVar, i10, list, eVar2, this);
        for (int i11 = 0; i11 < this.f39751j.j().size(); i11++) {
            c cVar = (c) this.f39751j.j().get(i11);
            if (cVar instanceof k) {
                x5.i.k(eVar, i10, list, eVar2, (k) cVar);
            }
        }
    }

    @Override // q5.f
    public void d(Object obj, y5.c cVar) {
        if (!this.f39750i.c(obj, cVar)) {
            if (obj == a0.f36996u) {
                this.f39748g.o(cVar);
            } else if (obj == a0.f36997v) {
                this.f39749h.o(cVar);
            }
        }
    }

    @Override // n5.e
    public void e(RectF rectF, Matrix matrix, boolean z10) {
        this.f39751j.e(rectF, matrix, z10);
    }

    @Override // n5.j
    public void f(ListIterator listIterator) {
        if (this.f39751j != null) {
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
        this.f39751j = new d(this.f39744c, this.f39745d, "Repeater", this.f39747f, arrayList, null);
    }

    @Override // n5.e
    public void g(Canvas canvas, Matrix matrix, int i10) {
        float floatValue = ((Float) this.f39748g.h()).floatValue();
        float floatValue2 = ((Float) this.f39749h.h()).floatValue();
        float floatValue3 = ((Float) this.f39750i.i().h()).floatValue() / 100.0f;
        float floatValue4 = ((Float) this.f39750i.e().h()).floatValue() / 100.0f;
        for (int i11 = ((int) floatValue) - 1; i11 >= 0; i11--) {
            this.f39742a.set(matrix);
            float f10 = i11;
            this.f39742a.preConcat(this.f39750i.g(f10 + floatValue2));
            this.f39751j.g(canvas, this.f39742a, (int) (i10 * x5.i.i(floatValue3, floatValue4, f10 / floatValue)));
        }
    }

    @Override // n5.c
    public String getName() {
        return this.f39746e;
    }

    @Override // n5.m
    public Path q() {
        Path q10 = this.f39751j.q();
        this.f39743b.reset();
        float floatValue = ((Float) this.f39748g.h()).floatValue();
        float floatValue2 = ((Float) this.f39749h.h()).floatValue();
        for (int i10 = ((int) floatValue) - 1; i10 >= 0; i10--) {
            this.f39742a.set(this.f39750i.g(i10 + floatValue2));
            this.f39743b.addPath(q10, this.f39742a);
        }
        return this.f39743b;
    }
}
