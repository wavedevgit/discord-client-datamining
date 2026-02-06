package n5;

import android.graphics.Canvas;
import android.graphics.Matrix;
import android.graphics.Paint;
import android.graphics.Path;
import android.graphics.RectF;
import java.util.ArrayList;
import java.util.List;
import o5.a;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class d implements e, m, a.b, q5.f {

    /* renamed from: a  reason: collision with root package name */
    private final Paint f38497a;

    /* renamed from: b  reason: collision with root package name */
    private final RectF f38498b;

    /* renamed from: c  reason: collision with root package name */
    private final Matrix f38499c;

    /* renamed from: d  reason: collision with root package name */
    private final Path f38500d;

    /* renamed from: e  reason: collision with root package name */
    private final RectF f38501e;

    /* renamed from: f  reason: collision with root package name */
    private final String f38502f;

    /* renamed from: g  reason: collision with root package name */
    private final boolean f38503g;

    /* renamed from: h  reason: collision with root package name */
    private final List f38504h;

    /* renamed from: i  reason: collision with root package name */
    private final com.airbnb.lottie.n f38505i;

    /* renamed from: j  reason: collision with root package name */
    private List f38506j;

    /* renamed from: k  reason: collision with root package name */
    private o5.p f38507k;

    public d(com.airbnb.lottie.n nVar, t5.b bVar, s5.q qVar, l5.i iVar) {
        this(nVar, bVar, qVar.c(), qVar.d(), f(nVar, iVar, bVar, qVar.b()), i(qVar.b()));
    }

    private static List f(com.airbnb.lottie.n nVar, l5.i iVar, t5.b bVar, List list) {
        ArrayList arrayList = new ArrayList(list.size());
        for (int i10 = 0; i10 < list.size(); i10++) {
            c a10 = ((s5.c) list.get(i10)).a(nVar, iVar, bVar);
            if (a10 != null) {
                arrayList.add(a10);
            }
        }
        return arrayList;
    }

    static r5.l i(List list) {
        for (int i10 = 0; i10 < list.size(); i10++) {
            s5.c cVar = (s5.c) list.get(i10);
            if (cVar instanceof r5.l) {
                return (r5.l) cVar;
            }
        }
        return null;
    }

    private boolean m() {
        int i10 = 0;
        for (int i11 = 0; i11 < this.f38504h.size(); i11++) {
            if ((this.f38504h.get(i11) instanceof e) && (i10 = i10 + 1) >= 2) {
                return true;
            }
        }
        return false;
    }

    @Override // o5.a.b
    public void a() {
        this.f38505i.invalidateSelf();
    }

    @Override // n5.c
    public void b(List list, List list2) {
        ArrayList arrayList = new ArrayList(list.size() + this.f38504h.size());
        arrayList.addAll(list);
        for (int size = this.f38504h.size() - 1; size >= 0; size--) {
            c cVar = (c) this.f38504h.get(size);
            cVar.b(arrayList, this.f38504h.subList(0, size));
            arrayList.add(cVar);
        }
    }

    @Override // q5.f
    public void c(q5.e eVar, int i10, List list, q5.e eVar2) {
        if (eVar.g(getName(), i10) || "__container".equals(getName())) {
            if (!"__container".equals(getName())) {
                eVar2 = eVar2.a(getName());
                if (eVar.c(getName(), i10)) {
                    list.add(eVar2.i(this));
                }
            }
            if (eVar.h(getName(), i10)) {
                int e10 = i10 + eVar.e(getName(), i10);
                for (int i11 = 0; i11 < this.f38504h.size(); i11++) {
                    c cVar = (c) this.f38504h.get(i11);
                    if (cVar instanceof q5.f) {
                        ((q5.f) cVar).c(eVar, e10, list, eVar2);
                    }
                }
            }
        }
    }

    @Override // q5.f
    public void d(Object obj, y5.c cVar) {
        o5.p pVar = this.f38507k;
        if (pVar != null) {
            pVar.c(obj, cVar);
        }
    }

    @Override // n5.e
    public void e(RectF rectF, Matrix matrix, boolean z10) {
        this.f38499c.set(matrix);
        o5.p pVar = this.f38507k;
        if (pVar != null) {
            this.f38499c.preConcat(pVar.f());
        }
        this.f38501e.set(0.0f, 0.0f, 0.0f, 0.0f);
        for (int size = this.f38504h.size() - 1; size >= 0; size--) {
            c cVar = (c) this.f38504h.get(size);
            if (cVar instanceof e) {
                ((e) cVar).e(this.f38501e, this.f38499c, z10);
                rectF.union(this.f38501e);
            }
        }
    }

    @Override // n5.e
    public void g(Canvas canvas, Matrix matrix, int i10) {
        boolean z10;
        int intValue;
        if (!this.f38503g) {
            this.f38499c.set(matrix);
            o5.p pVar = this.f38507k;
            if (pVar != null) {
                this.f38499c.preConcat(pVar.f());
                if (this.f38507k.h() == null) {
                    intValue = 100;
                } else {
                    intValue = ((Integer) this.f38507k.h().h()).intValue();
                }
                i10 = (int) ((((intValue / 100.0f) * i10) / 255.0f) * 255.0f);
            }
            if (this.f38505i.g0() && m() && i10 != 255) {
                z10 = true;
            } else {
                z10 = false;
            }
            if (z10) {
                this.f38498b.set(0.0f, 0.0f, 0.0f, 0.0f);
                e(this.f38498b, this.f38499c, true);
                this.f38497a.setAlpha(i10);
                x5.j.m(canvas, this.f38498b, this.f38497a);
            }
            if (z10) {
                i10 = 255;
            }
            for (int size = this.f38504h.size() - 1; size >= 0; size--) {
                Object obj = this.f38504h.get(size);
                if (obj instanceof e) {
                    ((e) obj).g(canvas, this.f38499c, i10);
                }
            }
            if (z10) {
                canvas.restore();
            }
        }
    }

    @Override // n5.c
    public String getName() {
        return this.f38502f;
    }

    public List j() {
        return this.f38504h;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public List k() {
        if (this.f38506j == null) {
            this.f38506j = new ArrayList();
            for (int i10 = 0; i10 < this.f38504h.size(); i10++) {
                c cVar = (c) this.f38504h.get(i10);
                if (cVar instanceof m) {
                    this.f38506j.add((m) cVar);
                }
            }
        }
        return this.f38506j;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public Matrix l() {
        o5.p pVar = this.f38507k;
        if (pVar != null) {
            return pVar.f();
        }
        this.f38499c.reset();
        return this.f38499c;
    }

    @Override // n5.m
    public Path t() {
        this.f38499c.reset();
        o5.p pVar = this.f38507k;
        if (pVar != null) {
            this.f38499c.set(pVar.f());
        }
        this.f38500d.reset();
        if (this.f38503g) {
            return this.f38500d;
        }
        for (int size = this.f38504h.size() - 1; size >= 0; size--) {
            c cVar = (c) this.f38504h.get(size);
            if (cVar instanceof m) {
                this.f38500d.addPath(((m) cVar).t(), this.f38499c);
            }
        }
        return this.f38500d;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public d(com.airbnb.lottie.n nVar, t5.b bVar, String str, boolean z10, List list, r5.l lVar) {
        this.f38497a = new m5.a();
        this.f38498b = new RectF();
        this.f38499c = new Matrix();
        this.f38500d = new Path();
        this.f38501e = new RectF();
        this.f38502f = str;
        this.f38505i = nVar;
        this.f38503g = z10;
        this.f38504h = list;
        if (lVar != null) {
            o5.p b10 = lVar.b();
            this.f38507k = b10;
            b10.a(bVar);
            this.f38507k.b(this);
        }
        ArrayList arrayList = new ArrayList();
        for (int size = list.size() - 1; size >= 0; size--) {
            c cVar = (c) list.get(size);
            if (cVar instanceof j) {
                arrayList.add((j) cVar);
            }
        }
        for (int size2 = arrayList.size() - 1; size2 >= 0; size2--) {
            ((j) arrayList.get(size2)).f(list.listIterator(list.size()));
        }
    }
}
