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
    private final Paint f37415a;

    /* renamed from: b  reason: collision with root package name */
    private final RectF f37416b;

    /* renamed from: c  reason: collision with root package name */
    private final Matrix f37417c;

    /* renamed from: d  reason: collision with root package name */
    private final Path f37418d;

    /* renamed from: e  reason: collision with root package name */
    private final RectF f37419e;

    /* renamed from: f  reason: collision with root package name */
    private final String f37420f;

    /* renamed from: g  reason: collision with root package name */
    private final boolean f37421g;

    /* renamed from: h  reason: collision with root package name */
    private final List f37422h;

    /* renamed from: i  reason: collision with root package name */
    private final com.airbnb.lottie.n f37423i;

    /* renamed from: j  reason: collision with root package name */
    private List f37424j;

    /* renamed from: k  reason: collision with root package name */
    private o5.p f37425k;

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
        for (int i11 = 0; i11 < this.f37422h.size(); i11++) {
            if ((this.f37422h.get(i11) instanceof e) && (i10 = i10 + 1) >= 2) {
                return true;
            }
        }
        return false;
    }

    @Override // o5.a.b
    public void a() {
        this.f37423i.invalidateSelf();
    }

    @Override // n5.c
    public void b(List list, List list2) {
        ArrayList arrayList = new ArrayList(list.size() + this.f37422h.size());
        arrayList.addAll(list);
        for (int size = this.f37422h.size() - 1; size >= 0; size--) {
            c cVar = (c) this.f37422h.get(size);
            cVar.b(arrayList, this.f37422h.subList(0, size));
            arrayList.add(cVar);
        }
    }

    @Override // r5.f
    public void d(Object obj, z5.c cVar) {
        o5.p pVar = this.f37425k;
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
                for (int i11 = 0; i11 < this.f37422h.size(); i11++) {
                    c cVar = (c) this.f37422h.get(i11);
                    if (cVar instanceof r5.f) {
                        ((r5.f) cVar).e(eVar, e10, list, eVar2);
                    }
                }
            }
        }
    }

    @Override // n5.e
    public void f(RectF rectF, Matrix matrix, boolean z10) {
        this.f37417c.set(matrix);
        o5.p pVar = this.f37425k;
        if (pVar != null) {
            this.f37417c.preConcat(pVar.f());
        }
        this.f37419e.set(0.0f, 0.0f, 0.0f, 0.0f);
        for (int size = this.f37422h.size() - 1; size >= 0; size--) {
            c cVar = (c) this.f37422h.get(size);
            if (cVar instanceof e) {
                ((e) cVar).f(this.f37419e, this.f37417c, z10);
                rectF.union(this.f37419e);
            }
        }
    }

    @Override // n5.c
    public String getName() {
        return this.f37420f;
    }

    @Override // n5.e
    public void h(Canvas canvas, Matrix matrix, int i10) {
        boolean z10;
        int intValue;
        if (!this.f37421g) {
            this.f37417c.set(matrix);
            o5.p pVar = this.f37425k;
            if (pVar != null) {
                this.f37417c.preConcat(pVar.f());
                if (this.f37425k.h() == null) {
                    intValue = 100;
                } else {
                    intValue = ((Integer) this.f37425k.h().h()).intValue();
                }
                i10 = (int) ((((intValue / 100.0f) * i10) / 255.0f) * 255.0f);
            }
            if (this.f37423i.f0() && m() && i10 != 255) {
                z10 = true;
            } else {
                z10 = false;
            }
            if (z10) {
                this.f37416b.set(0.0f, 0.0f, 0.0f, 0.0f);
                f(this.f37416b, this.f37417c, true);
                this.f37415a.setAlpha(i10);
                y5.j.n(canvas, this.f37416b, this.f37415a);
            }
            if (z10) {
                i10 = 255;
            }
            for (int size = this.f37422h.size() - 1; size >= 0; size--) {
                Object obj = this.f37422h.get(size);
                if (obj instanceof e) {
                    ((e) obj).h(canvas, this.f37417c, i10);
                }
            }
            if (z10) {
                canvas.restore();
            }
        }
    }

    public List j() {
        return this.f37422h;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public List k() {
        if (this.f37424j == null) {
            this.f37424j = new ArrayList();
            for (int i10 = 0; i10 < this.f37422h.size(); i10++) {
                c cVar = (c) this.f37422h.get(i10);
                if (cVar instanceof m) {
                    this.f37424j.add((m) cVar);
                }
            }
        }
        return this.f37424j;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public Matrix l() {
        o5.p pVar = this.f37425k;
        if (pVar != null) {
            return pVar.f();
        }
        this.f37417c.reset();
        return this.f37417c;
    }

    @Override // n5.m
    public Path t() {
        this.f37417c.reset();
        o5.p pVar = this.f37425k;
        if (pVar != null) {
            this.f37417c.set(pVar.f());
        }
        this.f37418d.reset();
        if (this.f37421g) {
            return this.f37418d;
        }
        for (int size = this.f37422h.size() - 1; size >= 0; size--) {
            c cVar = (c) this.f37422h.get(size);
            if (cVar instanceof m) {
                this.f37418d.addPath(((m) cVar).t(), this.f37417c);
            }
        }
        return this.f37418d;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public d(com.airbnb.lottie.n nVar, u5.b bVar, String str, boolean z10, List list, s5.n nVar2) {
        this.f37415a = new m5.a();
        this.f37416b = new RectF();
        this.f37417c = new Matrix();
        this.f37418d = new Path();
        this.f37419e = new RectF();
        this.f37420f = str;
        this.f37423i = nVar;
        this.f37421g = z10;
        this.f37422h = list;
        if (nVar2 != null) {
            o5.p b10 = nVar2.b();
            this.f37425k = b10;
            b10.a(bVar);
            this.f37425k.b(this);
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
