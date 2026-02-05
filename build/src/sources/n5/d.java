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
    private final Paint f39142a;

    /* renamed from: b  reason: collision with root package name */
    private final RectF f39143b;

    /* renamed from: c  reason: collision with root package name */
    private final Matrix f39144c;

    /* renamed from: d  reason: collision with root package name */
    private final Path f39145d;

    /* renamed from: e  reason: collision with root package name */
    private final RectF f39146e;

    /* renamed from: f  reason: collision with root package name */
    private final String f39147f;

    /* renamed from: g  reason: collision with root package name */
    private final boolean f39148g;

    /* renamed from: h  reason: collision with root package name */
    private final List f39149h;

    /* renamed from: i  reason: collision with root package name */
    private final com.airbnb.lottie.n f39150i;

    /* renamed from: j  reason: collision with root package name */
    private List f39151j;

    /* renamed from: k  reason: collision with root package name */
    private o5.p f39152k;

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
        for (int i11 = 0; i11 < this.f39149h.size(); i11++) {
            if ((this.f39149h.get(i11) instanceof e) && (i10 = i10 + 1) >= 2) {
                return true;
            }
        }
        return false;
    }

    @Override // o5.a.b
    public void a() {
        this.f39150i.invalidateSelf();
    }

    @Override // n5.c
    public void b(List list, List list2) {
        ArrayList arrayList = new ArrayList(list.size() + this.f39149h.size());
        arrayList.addAll(list);
        for (int size = this.f39149h.size() - 1; size >= 0; size--) {
            c cVar = (c) this.f39149h.get(size);
            cVar.b(arrayList, this.f39149h.subList(0, size));
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
                for (int i11 = 0; i11 < this.f39149h.size(); i11++) {
                    c cVar = (c) this.f39149h.get(i11);
                    if (cVar instanceof q5.f) {
                        ((q5.f) cVar).c(eVar, e10, list, eVar2);
                    }
                }
            }
        }
    }

    @Override // q5.f
    public void d(Object obj, y5.c cVar) {
        o5.p pVar = this.f39152k;
        if (pVar != null) {
            pVar.c(obj, cVar);
        }
    }

    @Override // n5.e
    public void e(RectF rectF, Matrix matrix, boolean z10) {
        this.f39144c.set(matrix);
        o5.p pVar = this.f39152k;
        if (pVar != null) {
            this.f39144c.preConcat(pVar.f());
        }
        this.f39146e.set(0.0f, 0.0f, 0.0f, 0.0f);
        for (int size = this.f39149h.size() - 1; size >= 0; size--) {
            c cVar = (c) this.f39149h.get(size);
            if (cVar instanceof e) {
                ((e) cVar).e(this.f39146e, this.f39144c, z10);
                rectF.union(this.f39146e);
            }
        }
    }

    @Override // n5.e
    public void g(Canvas canvas, Matrix matrix, int i10) {
        boolean z10;
        int intValue;
        if (!this.f39148g) {
            this.f39144c.set(matrix);
            o5.p pVar = this.f39152k;
            if (pVar != null) {
                this.f39144c.preConcat(pVar.f());
                if (this.f39152k.h() == null) {
                    intValue = 100;
                } else {
                    intValue = ((Integer) this.f39152k.h().h()).intValue();
                }
                i10 = (int) ((((intValue / 100.0f) * i10) / 255.0f) * 255.0f);
            }
            if (this.f39150i.g0() && m() && i10 != 255) {
                z10 = true;
            } else {
                z10 = false;
            }
            if (z10) {
                this.f39143b.set(0.0f, 0.0f, 0.0f, 0.0f);
                e(this.f39143b, this.f39144c, true);
                this.f39142a.setAlpha(i10);
                x5.j.m(canvas, this.f39143b, this.f39142a);
            }
            if (z10) {
                i10 = 255;
            }
            for (int size = this.f39149h.size() - 1; size >= 0; size--) {
                Object obj = this.f39149h.get(size);
                if (obj instanceof e) {
                    ((e) obj).g(canvas, this.f39144c, i10);
                }
            }
            if (z10) {
                canvas.restore();
            }
        }
    }

    @Override // n5.c
    public String getName() {
        return this.f39147f;
    }

    public List j() {
        return this.f39149h;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public List k() {
        if (this.f39151j == null) {
            this.f39151j = new ArrayList();
            for (int i10 = 0; i10 < this.f39149h.size(); i10++) {
                c cVar = (c) this.f39149h.get(i10);
                if (cVar instanceof m) {
                    this.f39151j.add((m) cVar);
                }
            }
        }
        return this.f39151j;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public Matrix l() {
        o5.p pVar = this.f39152k;
        if (pVar != null) {
            return pVar.f();
        }
        this.f39144c.reset();
        return this.f39144c;
    }

    @Override // n5.m
    public Path r() {
        this.f39144c.reset();
        o5.p pVar = this.f39152k;
        if (pVar != null) {
            this.f39144c.set(pVar.f());
        }
        this.f39145d.reset();
        if (this.f39148g) {
            return this.f39145d;
        }
        for (int size = this.f39149h.size() - 1; size >= 0; size--) {
            c cVar = (c) this.f39149h.get(size);
            if (cVar instanceof m) {
                this.f39145d.addPath(((m) cVar).r(), this.f39144c);
            }
        }
        return this.f39145d;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public d(com.airbnb.lottie.n nVar, t5.b bVar, String str, boolean z10, List list, r5.l lVar) {
        this.f39142a = new m5.a();
        this.f39143b = new RectF();
        this.f39144c = new Matrix();
        this.f39145d = new Path();
        this.f39146e = new RectF();
        this.f39147f = str;
        this.f39150i = nVar;
        this.f39148g = z10;
        this.f39149h = list;
        if (lVar != null) {
            o5.p b10 = lVar.b();
            this.f39152k = b10;
            b10.a(bVar);
            this.f39152k.b(this);
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
