package e0;

import a0.d0;
import a0.i1;
import a0.x2;
import android.util.Pair;
import android.util.Rational;
import android.util.Size;
import b0.a;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.HashMap;
import java.util.Iterator;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import x.y0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class k {

    /* renamed from: a  reason: collision with root package name */
    private final d0 f21241a;

    /* renamed from: b  reason: collision with root package name */
    private final int f21242b;

    /* renamed from: c  reason: collision with root package name */
    private final int f21243c;

    /* renamed from: d  reason: collision with root package name */
    private final Rational f21244d;

    /* renamed from: e  reason: collision with root package name */
    private final l f21245e;

    public k(d0 d0Var, Size size) {
        Rational i10;
        this.f21241a = d0Var;
        this.f21242b = d0Var.a();
        this.f21243c = d0Var.c();
        if (size != null) {
            i10 = h(size);
        } else {
            i10 = i(d0Var);
        }
        this.f21244d = i10;
        this.f21245e = new l(d0Var, i10);
    }

    private static LinkedHashMap a(List list, m0.a aVar, Rational rational) {
        return b(o(list), aVar, rational);
    }

    private static LinkedHashMap b(Map map, m0.a aVar, Rational rational) {
        boolean z10 = true;
        if (rational != null && rational.getNumerator() < rational.getDenominator()) {
            z10 = false;
        }
        Rational n10 = n(aVar.b(), z10);
        if (aVar.a() == 0) {
            Rational n11 = n(aVar.b(), z10);
            Iterator it = new ArrayList(map.keySet()).iterator();
            while (it.hasNext()) {
                Rational rational2 = (Rational) it.next();
                if (!rational2.equals(n11)) {
                    map.remove(rational2);
                }
            }
        }
        ArrayList<Rational> arrayList = new ArrayList(map.keySet());
        Collections.sort(arrayList, new a.C0092a(n10, rational));
        LinkedHashMap linkedHashMap = new LinkedHashMap();
        for (Rational rational3 : arrayList) {
            linkedHashMap.put(rational3, (List) map.get(rational3));
        }
        return linkedHashMap;
    }

    private List c(List list, m0.c cVar, int i10) {
        if (cVar.a() == 1) {
            ArrayList arrayList = new ArrayList();
            arrayList.addAll(list);
            arrayList.addAll(this.f21241a.d(i10));
            Collections.sort(arrayList, new b0.d(true));
            return arrayList;
        }
        return list;
    }

    private static void d(LinkedHashMap linkedHashMap, Size size) {
        int b10 = i0.d.b(size);
        for (Rational rational : linkedHashMap.keySet()) {
            List<Size> list = (List) linkedHashMap.get(rational);
            ArrayList arrayList = new ArrayList();
            for (Size size2 : list) {
                if (i0.d.b(size2) <= b10) {
                    arrayList.add(size2);
                }
            }
            list.clear();
            list.addAll(arrayList);
        }
    }

    private static List e(List list, m0.b bVar, int i10, int i11, int i12) {
        if (bVar == null) {
            return list;
        }
        int b10 = b0.c.b(i10);
        boolean z10 = true;
        if (i12 != 1) {
            z10 = false;
        }
        List a10 = bVar.a(new ArrayList(list), b0.c.a(b10, i11, z10));
        if (list.containsAll(a10)) {
            return a10;
        }
        throw new IllegalArgumentException("The returned sizes list of the resolution filter must be a subset of the provided sizes list.");
    }

    private static void f(LinkedHashMap linkedHashMap, m0.d dVar) {
        if (dVar != null) {
            for (Rational rational : linkedHashMap.keySet()) {
                g((List) linkedHashMap.get(rational), dVar);
            }
        }
    }

    private static void g(List list, m0.d dVar) {
        if (!list.isEmpty()) {
            int b10 = dVar.b();
            if (!dVar.equals(m0.d.f36868c)) {
                Size a10 = dVar.a();
                if (b10 != 0) {
                    if (b10 != 1) {
                        if (b10 != 2) {
                            if (b10 != 3) {
                                if (b10 != 4) {
                                    return;
                                }
                                r(list, a10, false);
                                return;
                            }
                            r(list, a10, true);
                            return;
                        }
                        q(list, a10, false);
                        return;
                    }
                    q(list, a10, true);
                    return;
                }
                s(list, a10);
            }
        }
    }

    private Rational h(Size size) {
        return new Rational(size.getWidth(), size.getHeight());
    }

    private Rational i(d0 d0Var) {
        List f10 = d0Var.f(IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER);
        if (f10.isEmpty()) {
            return null;
        }
        Size size = (Size) Collections.max(f10, new b0.d());
        return new Rational(size.getWidth(), size.getHeight());
    }

    private List j(List list, int i10) {
        List l10 = l(list, i10);
        if (l10 == null) {
            l10 = this.f21241a.f(i10);
        }
        ArrayList arrayList = new ArrayList(l10);
        Collections.sort(arrayList, new b0.d(true));
        if (arrayList.isEmpty()) {
            y0.l("SupportedOutputSizesCollector", "The retrieved supported resolutions from camera info internal is empty. Format is " + i10 + ".");
        }
        return arrayList;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static List k(List list) {
        ArrayList arrayList = new ArrayList();
        arrayList.add(b0.a.f6309a);
        arrayList.add(b0.a.f6311c);
        Iterator it = list.iterator();
        while (it.hasNext()) {
            Size size = (Size) it.next();
            Rational rational = new Rational(size.getWidth(), size.getHeight());
            if (!arrayList.contains(rational)) {
                Iterator it2 = arrayList.iterator();
                while (true) {
                    if (it2.hasNext()) {
                        if (b0.a.a(size, (Rational) it2.next())) {
                            break;
                        }
                    } else {
                        arrayList.add(rational);
                        break;
                    }
                }
            }
        }
        return arrayList;
    }

    private List l(List list, int i10) {
        Size[] sizeArr;
        if (list != null) {
            Iterator it = list.iterator();
            while (it.hasNext()) {
                Pair pair = (Pair) it.next();
                if (((Integer) pair.first).intValue() == i10) {
                    sizeArr = (Size[]) pair.second;
                    break;
                }
            }
        }
        sizeArr = null;
        if (sizeArr == null) {
            return null;
        }
        return Arrays.asList(sizeArr);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static Rational n(int i10, boolean z10) {
        if (i10 == -1) {
            return null;
        }
        if (i10 != 0) {
            if (i10 != 1) {
                y0.c("SupportedOutputSizesCollector", "Undefined target aspect ratio: " + i10);
                return null;
            } else if (z10) {
                return b0.a.f6311c;
            } else {
                return b0.a.f6312d;
            }
        } else if (z10) {
            return b0.a.f6309a;
        } else {
            return b0.a.f6310b;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static Map o(List list) {
        HashMap hashMap = new HashMap();
        for (Rational rational : k(list)) {
            hashMap.put(rational, new ArrayList());
        }
        Iterator it = list.iterator();
        while (it.hasNext()) {
            Size size = (Size) it.next();
            for (Rational rational2 : hashMap.keySet()) {
                if (b0.a.a(size, rational2)) {
                    ((List) hashMap.get(rational2)).add(size);
                }
            }
        }
        return hashMap;
    }

    public static List p(m0.c cVar, List list, Size size, int i10, Rational rational, int i11, int i12) {
        LinkedHashMap a10 = a(list, cVar.b(), rational);
        if (size != null) {
            d(a10, size);
        }
        f(a10, cVar.d());
        ArrayList arrayList = new ArrayList();
        for (List<Size> list2 : a10.values()) {
            for (Size size2 : list2) {
                if (!arrayList.contains(size2)) {
                    arrayList.add(size2);
                }
            }
        }
        return e(arrayList, cVar.c(), i10, i11, i12);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static void q(List list, Size size, boolean z10) {
        ArrayList arrayList = new ArrayList();
        for (int size2 = list.size() - 1; size2 >= 0; size2--) {
            Size size3 = (Size) list.get(size2);
            if (size3.getWidth() >= size.getWidth() && size3.getHeight() >= size.getHeight()) {
                break;
            }
            arrayList.add(0, size3);
        }
        list.removeAll(arrayList);
        Collections.reverse(list);
        if (z10) {
            list.addAll(arrayList);
        }
    }

    private static void r(List list, Size size, boolean z10) {
        ArrayList arrayList = new ArrayList();
        for (int i10 = 0; i10 < list.size(); i10++) {
            Size size2 = (Size) list.get(i10);
            if (size2.getWidth() <= size.getWidth() && size2.getHeight() <= size.getHeight()) {
                break;
            }
            arrayList.add(0, size2);
        }
        list.removeAll(arrayList);
        if (z10) {
            list.addAll(arrayList);
        }
    }

    private static void s(List list, Size size) {
        boolean contains = list.contains(size);
        list.clear();
        if (contains) {
            list.add(size);
        }
    }

    public List m(x2 x2Var) {
        i1 i1Var = (i1) x2Var;
        List D = i1Var.D(null);
        if (D != null) {
            return D;
        }
        m0.c o10 = i1Var.o(null);
        List j10 = j(i1Var.l(null), x2Var.getInputFormat());
        if (o10 == null) {
            return this.f21245e.f(j10, x2Var);
        }
        Size i10 = ((i1) x2Var).i(null);
        int z10 = i1Var.z(0);
        if (!x2Var.P(false)) {
            j10 = c(j10, o10, x2Var.getInputFormat());
        }
        return p(i1Var.m(), j10, i10, z10, this.f21244d, this.f21242b, this.f21243c);
    }
}
