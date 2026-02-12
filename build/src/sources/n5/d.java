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
public class d implements e, m, a.b, r5.f {

    /* renamed from: a  reason: collision with root package name */
    private final Paint f36847a;

    /* renamed from: b  reason: collision with root package name */
    private final RectF f36848b;

    /* renamed from: c  reason: collision with root package name */
    private final Matrix f36849c;

    /* renamed from: d  reason: collision with root package name */
    private final Path f36850d;

    /* renamed from: e  reason: collision with root package name */
    private final RectF f36851e;

    /* renamed from: f  reason: collision with root package name */
    private final String f36852f;

    /* renamed from: g  reason: collision with root package name */
    private final boolean f36853g;

    /* renamed from: h  reason: collision with root package name */
    private final List f36854h;

    /* renamed from: i  reason: collision with root package name */
    private final com.airbnb.lottie.n f36855i;

    /* renamed from: j  reason: collision with root package name */
    private List f36856j;

    /* renamed from: k  reason: collision with root package name */
    private o5.p f36857k;

    public d(com.airbnb.lottie.n nVar, u5.b bVar, t5.q qVar, l5.i iVar) {
        this(nVar, bVar, qVar.c(), qVar.d(), g(nVar, iVar, bVar, qVar.b()), i(qVar.b()));
    }

    private static List g(com.airbnb.lottie.n nVar, l5.i iVar, u5.b bVar, List list) {
        ArrayList arrayList = new ArrayList(list.size());
        for (int i10 = 0; i10 < list.size(); i10++) {
            c a10 = ((t5.c) list.get(i10)).a(nVar, iVar, bVar);
            if (a10 != null) {
                arrayList.add(a10);
            }
        }
        return arrayList;
    }

    static s5.n i(List list) {
        for (int i10 = 0; i10 < list.size(); i10++) {
            t5.c cVar = (t5.c) list.get(i10);
            if (cVar instanceof s5.n) {
                return (s5.n) cVar;
            }
        }
        return null;
    }

    private boolean m() {
        int i10 = 0;
        for (int i11 = 0; i11 < this.f36854h.size(); i11++) {
            if ((this.f36854h.get(i11) instanceof e) && (i10 = i10 + 1) >= 2) {
                return true;
            }
        }
        return false;
    }

    @Override // o5.a.b
    public void a() {
        this.f36855i.invalidateSelf();
    }

    @Override // n5.c
    public void b(List list, List list2) {
        ArrayList arrayList = new ArrayList(list.size() + this.f36854h.size());
        arrayList.addAll(list);
        for (int size = this.f36854h.size() - 1; size >= 0; size--) {
            c cVar = (c) this.f36854h.get(size);
            cVar.b(arrayList, this.f36854h.subList(0, size));
            arrayList.add(cVar);
        }
    }

    @Override // r5.f
    public void d(Object obj, z5.c cVar) {
        o5.p pVar = this.f36857k;
        if (pVar != null) {
            pVar.c(obj, cVar);
        }
    }

    @Override // r5.f
    public void e(r5.e eVar, int i10, List list, r5.e eVar2) {
        if (eVar.g(getName(), i10) || "__container".equals(getName())) {
            if (!"__container".equals(getName())) {
                eVar2 = eVar2.a(getName());
                if (eVar.c(getName(), i10)) {
                    list.add(eVar2.i(this));
                }
            }
            if (eVar.h(getName(), i10)) {
                int e10 = i10 + eVar.e(getName(), i10);
                for (int i11 = 0; i11 < this.f36854h.size(); i11++) {
                    c cVar = (c) this.f36854h.get(i11);
                    if (cVar instanceof r5.f) {
                        ((r5.f) cVar).e(eVar, e10, list, eVar2);
                    }
                }
            }
        }
    }

    @Override // n5.e
    public void f(RectF rectF, Matrix matrix, boolean z10) {
        this.f36849c.set(matrix);
        o5.p pVar = this.f36857k;
        if (pVar != null) {
            this.f36849c.preConcat(pVar.f());
        }
        this.f36851e.set(0.0f, 0.0f, 0.0f, 0.0f);
        for (int size = this.f36854h.size() - 1; size >= 0; size--) {
            c cVar = (c) this.f36854h.get(size);
            if (cVar instanceof e) {
                ((e) cVar).f(this.f36851e, this.f36849c, z10);
                rectF.union(this.f36851e);
            }
        }
    }

    @Override // n5.c
    public String getName() {
        return this.f36852f;
    }

    @Override // n5.e
    public void h(Canvas canvas, Matrix matrix, int i10) {
        boolean z10;
        int intValue;
        if (!this.f36853g) {
            this.f36849c.set(matrix);
            o5.p pVar = this.f36857k;
            if (pVar != null) {
                this.f36849c.preConcat(pVar.f());
                if (this.f36857k.h() == null) {
                    intValue = 100;
                } else {
                    intValue = ((Integer) this.f36857k.h().h()).intValue();
                }
                i10 = (int) ((((intValue / 100.0f) * i10) / 255.0f) * 255.0f);
            }
            if (this.f36855i.f0() && m() && i10 != 255) {
                z10 = true;
            } else {
                z10 = false;
            }
            if (z10) {
                this.f36848b.set(0.0f, 0.0f, 0.0f, 0.0f);
                f(this.f36848b, this.f36849c, true);
                this.f36847a.setAlpha(i10);
                y5.j.n(canvas, this.f36848b, this.f36847a);
            }
            if (z10) {
                i10 = 255;
            }
            for (int size = this.f36854h.size() - 1; size >= 0; size--) {
                Object obj = this.f36854h.get(size);
                if (obj instanceof e) {
                    ((e) obj).h(canvas, this.f36849c, i10);
                }
            }
            if (z10) {
                canvas.restore();
            }
        }
    }

    public List j() {
        return this.f36854h;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public List k() {
        if (this.f36856j == null) {
            this.f36856j = new ArrayList();
            for (int i10 = 0; i10 < this.f36854h.size(); i10++) {
                c cVar = (c) this.f36854h.get(i10);
                if (cVar instanceof m) {
                    this.f36856j.add((m) cVar);
                }
            }
        }
        return this.f36856j;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public Matrix l() {
        o5.p pVar = this.f36857k;
        if (pVar != null) {
            return pVar.f();
        }
        this.f36849c.reset();
        return this.f36849c;
    }

    @Override // n5.m
    public Path t() {
        this.f36849c.reset();
        o5.p pVar = this.f36857k;
        if (pVar != null) {
            this.f36849c.set(pVar.f());
        }
        this.f36850d.reset();
        if (this.f36853g) {
            return this.f36850d;
        }
        for (int size = this.f36854h.size() - 1; size >= 0; size--) {
            c cVar = (c) this.f36854h.get(size);
            if (cVar instanceof m) {
                this.f36850d.addPath(((m) cVar).t(), this.f36849c);
            }
        }
        return this.f36850d;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public d(com.airbnb.lottie.n nVar, u5.b bVar, String str, boolean z10, List list, s5.n nVar2) {
        this.f36847a = new m5.a();
        this.f36848b = new RectF();
        this.f36849c = new Matrix();
        this.f36850d = new Path();
        this.f36851e = new RectF();
        this.f36852f = str;
        this.f36855i = nVar;
        this.f36853g = z10;
        this.f36854h = list;
        if (nVar2 != null) {
            o5.p b10 = nVar2.b();
            this.f36857k = b10;
            b10.a(bVar);
            this.f36857k.b(this);
        }
        ArrayList arrayList = new ArrayList();
        for (int size = list.size() - 1; size >= 0; size--) {
            c cVar = (c) list.get(size);
            if (cVar instanceof j) {
                arrayList.add((j) cVar);
            }
        }
        for (int size2 = arrayList.size() - 1; size2 >= 0; size2--) {
            ((j) arrayList.get(size2)).g(list.listIterator(list.size()));
        }
    }
}
