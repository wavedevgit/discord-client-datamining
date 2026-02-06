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
    private final Matrix f38596a = new Matrix();

    /* renamed from: b  reason: collision with root package name */
    private final Path f38597b = new Path();

    /* renamed from: c  reason: collision with root package name */
    private final com.airbnb.lottie.n f38598c;

    /* renamed from: d  reason: collision with root package name */
    private final t5.b f38599d;

    /* renamed from: e  reason: collision with root package name */
    private final String f38600e;

    /* renamed from: f  reason: collision with root package name */
    private final boolean f38601f;

    /* renamed from: g  reason: collision with root package name */
    private final o5.a f38602g;

    /* renamed from: h  reason: collision with root package name */
    private final o5.a f38603h;

    /* renamed from: i  reason: collision with root package name */
    private final o5.p f38604i;

    /* renamed from: j  reason: collision with root package name */
    private d f38605j;

    public p(com.airbnb.lottie.n nVar, t5.b bVar, s5.m mVar) {
        this.f38598c = nVar;
        this.f38599d = bVar;
        this.f38600e = mVar.c();
        this.f38601f = mVar.f();
        o5.a a10 = mVar.b().a();
        this.f38602g = a10;
        bVar.i(a10);
        a10.a(this);
        o5.a a11 = mVar.d().a();
        this.f38603h = a11;
        bVar.i(a11);
        a11.a(this);
        o5.p b10 = mVar.e().b();
        this.f38604i = b10;
        b10.a(bVar);
        b10.b(this);
    }

    @Override // o5.a.b
    public void a() {
        this.f38598c.invalidateSelf();
    }

    @Override // n5.c
    public void b(List list, List list2) {
        this.f38605j.b(list, list2);
    }

    @Override // q5.f
    public void c(q5.e eVar, int i10, List list, q5.e eVar2) {
        x5.i.k(eVar, i10, list, eVar2, this);
        for (int i11 = 0; i11 < this.f38605j.j().size(); i11++) {
            c cVar = (c) this.f38605j.j().get(i11);
            if (cVar instanceof k) {
                x5.i.k(eVar, i10, list, eVar2, (k) cVar);
            }
        }
    }

    @Override // q5.f
    public void d(Object obj, y5.c cVar) {
        if (!this.f38604i.c(obj, cVar)) {
            if (obj == a0.f35785u) {
                this.f38602g.o(cVar);
            } else if (obj == a0.f35786v) {
                this.f38603h.o(cVar);
            }
        }
    }

    @Override // n5.e
    public void e(RectF rectF, Matrix matrix, boolean z10) {
        this.f38605j.e(rectF, matrix, z10);
    }

    @Override // n5.j
    public void f(ListIterator listIterator) {
        if (this.f38605j != null) {
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
        this.f38605j = new d(this.f38598c, this.f38599d, "Repeater", this.f38601f, arrayList, null);
    }

    @Override // n5.e
    public void g(Canvas canvas, Matrix matrix, int i10) {
        float floatValue = ((Float) this.f38602g.h()).floatValue();
        float floatValue2 = ((Float) this.f38603h.h()).floatValue();
        float floatValue3 = ((Float) this.f38604i.i().h()).floatValue() / 100.0f;
        float floatValue4 = ((Float) this.f38604i.e().h()).floatValue() / 100.0f;
        for (int i11 = ((int) floatValue) - 1; i11 >= 0; i11--) {
            this.f38596a.set(matrix);
            float f10 = i11;
            this.f38596a.preConcat(this.f38604i.g(f10 + floatValue2));
            this.f38605j.g(canvas, this.f38596a, (int) (i10 * x5.i.i(floatValue3, floatValue4, f10 / floatValue)));
        }
    }

    @Override // n5.c
    public String getName() {
        return this.f38600e;
    }

    @Override // n5.m
    public Path t() {
        Path t10 = this.f38605j.t();
        this.f38597b.reset();
        float floatValue = ((Float) this.f38602g.h()).floatValue();
        float floatValue2 = ((Float) this.f38603h.h()).floatValue();
        for (int i10 = ((int) floatValue) - 1; i10 >= 0; i10--) {
            this.f38596a.set(this.f38604i.g(i10 + floatValue2));
            this.f38597b.addPath(t10, this.f38596a);
        }
        return this.f38597b;
    }
}
