package e0;

import a0.d0;
import a0.i1;
import a0.x2;
import android.util.Rational;
import android.util.Size;
import b0.a;
import java.util.ArrayList;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
class l {

    /* renamed from: a  reason: collision with root package name */
    private final int f22518a;

    /* renamed from: b  reason: collision with root package name */
    private final int f22519b;

    /* renamed from: c  reason: collision with root package name */
    private final Rational f22520c;

    /* renamed from: d  reason: collision with root package name */
    private final boolean f22521d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public l(d0 d0Var, Rational rational) {
        this.f22518a = d0Var.a();
        this.f22519b = d0Var.c();
        this.f22520c = rational;
        boolean z10 = true;
        if (rational != null && rational.getNumerator() < rational.getDenominator()) {
            z10 = false;
        }
        this.f22521d = z10;
    }

    private static Size a(Size size, int i10, int i11, int i12) {
        if (size != null && e(i10, i11, i12)) {
            return new Size(size.getHeight(), size.getWidth());
        }
        return size;
    }

    private static Rational b(Size size, List list) {
        if (size == null) {
            return null;
        }
        for (Rational rational : k.k(list)) {
            if (b0.a.a(size, rational)) {
                return rational;
            }
        }
        return new Rational(size.getWidth(), size.getHeight());
    }

    private Rational c(i1 i1Var, List list) {
        if (i1Var.v()) {
            return k.n(i1Var.x(), this.f22521d);
        }
        Size d10 = d(i1Var);
        if (d10 != null) {
            return b(d10, list);
        }
        return null;
    }

    private Size d(i1 i1Var) {
        return a(i1Var.J(null), i1Var.z(0), this.f22519b, this.f22518a);
    }

    private static boolean e(int i10, int i11, int i12) {
        boolean z10;
        int b10 = b0.c.b(i10);
        if (1 == i11) {
            z10 = true;
        } else {
            z10 = false;
        }
        int a10 = b0.c.a(b10, i12, z10);
        if (a10 != 90 && a10 != 270) {
            return false;
        }
        return true;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public List f(List list, x2 x2Var) {
        if (list.isEmpty()) {
            return list;
        }
        ArrayList<Size> arrayList = new ArrayList(list);
        Collections.sort(arrayList, new b0.d(true));
        ArrayList arrayList2 = new ArrayList();
        i1 i1Var = (i1) x2Var;
        Size i10 = i1Var.i(null);
        Size size = (Size) arrayList.get(0);
        if (i10 == null || i0.d.b(size) < i0.d.b(i10)) {
            i10 = size;
        }
        Size d10 = d(i1Var);
        Size size2 = i0.d.f28339c;
        int b10 = i0.d.b(size2);
        if (i0.d.b(i10) < b10) {
            size2 = i0.d.f28337a;
        } else if (d10 != null && i0.d.b(d10) < b10) {
            size2 = d10;
        }
        for (Size size3 : arrayList) {
            if (i0.d.b(size3) <= i0.d.b(i10) && i0.d.b(size3) >= i0.d.b(size2) && !arrayList2.contains(size3)) {
                arrayList2.add(size3);
            }
        }
        if (!arrayList2.isEmpty()) {
            Rational c10 = c(i1Var, arrayList2);
            if (d10 == null) {
                d10 = i1Var.F(null);
            }
            ArrayList arrayList3 = new ArrayList();
            new HashMap();
            if (c10 == null) {
                arrayList3.addAll(arrayList2);
                if (d10 != null) {
                    k.q(arrayList3, d10, true);
                    return arrayList3;
                }
            } else {
                Map o10 = k.o(arrayList2);
                if (d10 != null) {
                    for (Rational rational : o10.keySet()) {
                        k.q((List) o10.get(rational), d10, true);
                    }
                }
                ArrayList<Rational> arrayList4 = new ArrayList(o10.keySet());
                Collections.sort(arrayList4, new a.C0105a(c10, this.f22520c));
                for (Rational rational2 : arrayList4) {
                    for (Size size4 : (List) o10.get(rational2)) {
                        if (!arrayList3.contains(size4)) {
                            arrayList3.add(size4);
                        }
                    }
                }
            }
            return arrayList3;
        }
        throw new IllegalArgumentException("All supported output sizes are filtered out according to current resolution selection settings. \nminSize = " + size2 + "\nmaxSize = " + i10 + "\ninitial size list: " + arrayList);
    }
}
