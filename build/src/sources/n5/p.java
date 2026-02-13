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
    private final Matrix f37514a = new Matrix();

    /* renamed from: b  reason: collision with root package name */
    private final Path f37515b = new Path();

    /* renamed from: c  reason: collision with root package name */
    private final com.airbnb.lottie.n f37516c;

    /* renamed from: d  reason: collision with root package name */
    private final u5.b f37517d;

    /* renamed from: e  reason: collision with root package name */
    private final String f37518e;

    /* renamed from: f  reason: collision with root package name */
    private final boolean f37519f;

    /* renamed from: g  reason: collision with root package name */
    private final o5.a f37520g;

    /* renamed from: h  reason: collision with root package name */
    private final o5.a f37521h;

    /* renamed from: i  reason: collision with root package name */
    private final o5.p f37522i;

    /* renamed from: j  reason: collision with root package name */
    private d f37523j;

    public p(com.airbnb.lottie.n nVar, u5.b bVar, t5.m mVar) {
        this.f37516c = nVar;
        this.f37517d = bVar;
        this.f37518e = mVar.c();
        this.f37519f = mVar.f();
        o5.d a10 = mVar.b().a();
        this.f37520g = a10;
        bVar.i(a10);
        a10.a(this);
        o5.d a11 = mVar.d().a();
        this.f37521h = a11;
        bVar.i(a11);
        a11.a(this);
        o5.p b10 = mVar.e().b();
        this.f37522i = b10;
        b10.a(bVar);
        b10.b(this);
    }

    @Override // o5.a.b
    public void a() {
        this.f37516c.invalidateSelf();
    }

    @Override // n5.c
    public void b(List list, List list2) {
        this.f37523j.b(list, list2);
    }

    @Override // r5.f
    public void d(Object obj, z5.c cVar) {
        if (!this.f37522i.c(obj, cVar)) {
            if (obj == b0.f36134u) {
                this.f37520g.o(cVar);
            } else if (obj == b0.f36135v) {
                this.f37521h.o(cVar);
            }
        }
    }

    @Override // r5.f
    public void e(r5.e eVar, int i10, List list, r5.e eVar2) {
        y5.i.k(eVar, i10, list, eVar2, this);
        for (int i11 = 0; i11 < this.f37523j.j().size(); i11++) {
            c cVar = (c) this.f37523j.j().get(i11);
            if (cVar instanceof k) {
                y5.i.k(eVar, i10, list, eVar2, (k) cVar);
            }
        }
    }

    @Override // n5.e
    public void f(RectF rectF, Matrix matrix, boolean z10) {
        this.f37523j.f(rectF, matrix, z10);
    }

    @Override // n5.j
    public void g(ListIterator listIterator) {
        if (this.f37523j != null) {
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
        this.f37523j = new d(this.f37516c, this.f37517d, "Repeater", this.f37519f, arrayList, null);
    }

    @Override // n5.c
    public String getName() {
        return this.f37518e;
    }

    @Override // n5.e
    public void h(Canvas canvas, Matrix matrix, int i10) {
        float floatValue = ((Float) this.f37520g.h()).floatValue();
        float floatValue2 = ((Float) this.f37521h.h()).floatValue();
        float floatValue3 = ((Float) this.f37522i.i().h()).floatValue() / 100.0f;
        float floatValue4 = ((Float) this.f37522i.e().h()).floatValue() / 100.0f;
        for (int i11 = ((int) floatValue) - 1; i11 >= 0; i11--) {
            this.f37514a.set(matrix);
            float f10 = i11;
            this.f37514a.preConcat(this.f37522i.g(f10 + floatValue2));
            this.f37523j.h(canvas, this.f37514a, (int) (i10 * y5.i.i(floatValue3, floatValue4, f10 / floatValue)));
        }
    }

    @Override // n5.m
    public Path t() {
        Path t10 = this.f37523j.t();
        this.f37515b.reset();
        float floatValue = ((Float) this.f37520g.h()).floatValue();
        float floatValue2 = ((Float) this.f37521h.h()).floatValue();
        for (int i10 = ((int) floatValue) - 1; i10 >= 0; i10--) {
            this.f37514a.set(this.f37522i.g(i10 + floatValue2));
            this.f37515b.addPath(t10, this.f37514a);
        }
        return this.f37515b;
    }
}
