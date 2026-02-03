package n0;

import a0.d0;
import a0.e0;
import a0.i1;
import a0.q1;
import a0.x2;
import android.graphics.Rect;
import android.graphics.RectF;
import android.util.Pair;
import android.util.Rational;
import android.util.Size;
import b0.q;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collection;
import java.util.Collections;
import java.util.Comparator;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Iterator;
import java.util.LinkedHashSet;
import java.util.List;
import java.util.Map;
import java.util.Objects;
import java.util.Set;
import x.y0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class b {

    /* renamed from: h  reason: collision with root package name */
    private static final double f39475h = Math.sqrt(2.3703703703703702d);

    /* renamed from: a  reason: collision with root package name */
    private final Size f39476a;

    /* renamed from: b  reason: collision with root package name */
    private final Rational f39477b;

    /* renamed from: c  reason: collision with root package name */
    private final Rational f39478c;

    /* renamed from: d  reason: collision with root package name */
    private final Set f39479d;

    /* renamed from: e  reason: collision with root package name */
    private final e0.k f39480e;

    /* renamed from: f  reason: collision with root package name */
    private final d0 f39481f;

    /* renamed from: g  reason: collision with root package name */
    private final Map f39482g;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class a implements Comparator {

        /* renamed from: d  reason: collision with root package name */
        private final Rational f39483d;

        /* renamed from: e  reason: collision with root package name */
        private final boolean f39484e;

        a(Rational rational, boolean z10) {
            this.f39483d = rational;
            this.f39484e = z10;
        }

        @Override // java.util.Comparator
        /* renamed from: a */
        public int compare(Rational rational, Rational rational2) {
            float c10 = b.c(rational, this.f39483d);
            float c11 = b.c(rational2, this.f39483d);
            if (this.f39484e) {
                return Float.compare(c11, c10);
            }
            return Float.compare(c10, c11);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public b(e0 e0Var, Set set) {
        this(q.m(e0Var.f().d()), e0Var.m(), set);
    }

    private static boolean A(Collection collection, Size size) {
        Iterator it = collection.iterator();
        while (it.hasNext()) {
            if (!y((Size) it.next(), size)) {
                return true;
            }
        }
        return false;
    }

    private boolean B(Rational rational, Size size) {
        if (!this.f39477b.equals(rational) && !b0.a.a(size, rational)) {
            return b(this.f39477b.floatValue(), rational.floatValue(), N(size).floatValue());
        }
        return false;
    }

    private boolean C(Size size, Size size2) {
        return B(N(size), size2);
    }

    private boolean D() {
        for (Size size : l()) {
            if (!b0.a.a(size, this.f39478c)) {
                return true;
            }
        }
        return false;
    }

    private static List E(List list) {
        if (list.isEmpty()) {
            return list;
        }
        return new ArrayList(new LinkedHashSet(list));
    }

    static Rect F(Rect rect) {
        return new Rect(rect.top, rect.left, rect.bottom, rect.right);
    }

    private List G(List list, boolean z10) {
        Map x10 = x(list);
        ArrayList<Rational> arrayList = new ArrayList(x10.keySet());
        K(arrayList);
        ArrayList arrayList2 = new ArrayList();
        for (Rational rational : arrayList) {
            if (!rational.equals(b0.a.f6125c) && !rational.equals(b0.a.f6123a)) {
                List list2 = (List) x10.get(rational);
                Objects.requireNonNull(list2);
                arrayList2.addAll(I(rational, list2, z10));
            }
        }
        return arrayList2;
    }

    private List H(List list) {
        ArrayList arrayList = new ArrayList();
        if (D()) {
            arrayList.addAll(I(this.f39477b, list, false));
        }
        arrayList.addAll(I(this.f39478c, list, false));
        arrayList.addAll(G(list, false));
        if (arrayList.isEmpty()) {
            y0.l("ResolutionsMerger", "Failed to find a parent resolution that does not result in double-cropping, this might due to camera not supporting 4:3 and 16:9resolutions or a strict ResolutionSelector settings. Starting resolution selection process with resolutions that might have a smaller FOV.");
            arrayList.addAll(G(list, true));
        }
        y0.a("ResolutionsMerger", "Parent resolutions: " + arrayList);
        return arrayList;
    }

    private List I(Rational rational, List list, boolean z10) {
        List<Size> g10 = g(rational, list);
        L(g10);
        HashSet hashSet = new HashSet(g10);
        for (x2 x2Var : this.f39479d) {
            List v10 = v(x2Var);
            if (!z10) {
                v10 = d(rational, v10);
            }
            if (v10.isEmpty()) {
                return new ArrayList();
            }
            g10 = f(v10, g10);
            hashSet.retainAll(p(v10, g10));
        }
        ArrayList arrayList = new ArrayList();
        for (Size size : g10) {
            if (!hashSet.contains(size)) {
                arrayList.add(size);
            }
        }
        return arrayList;
    }

    private boolean J() {
        boolean z10;
        m0.c o10;
        Iterator it = this.f39479d.iterator();
        while (true) {
            z10 = false;
            if (!it.hasNext()) {
                break;
            }
            x2 x2Var = (x2) it.next();
            if (!x2Var.P(false) && (x2Var instanceof i1) && (o10 = ((i1) x2Var).o(null)) != null) {
                z10 = true;
                if (o10.a() == 1) {
                    break;
                }
            }
        }
        return z10;
    }

    private void K(List list) {
        Collections.sort(list, new a(M(this.f39476a), true));
    }

    static void L(List list) {
        Collections.sort(list, new b0.d(true));
    }

    private static Rational M(Size size) {
        return new Rational(size.getWidth(), size.getHeight());
    }

    private static Rational N(Size size) {
        Rational rational = b0.a.f6123a;
        if (b0.a.a(size, rational)) {
            return rational;
        }
        Rational rational2 = b0.a.f6125c;
        if (b0.a.a(size, rational2)) {
            return rational2;
        }
        return M(size);
    }

    private boolean b(float f10, float f11, float f12) {
        int i10;
        int i11 = (f10 > f11 ? 1 : (f10 == f11 ? 0 : -1));
        if (i11 != 0 && f11 != f12) {
            if (i11 > 0) {
                if (f11 >= f12) {
                    return false;
                }
                return true;
            } else if (i10 > 0) {
                return true;
            }
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static float c(Rational rational, Rational rational2) {
        float floatValue = rational.floatValue();
        float floatValue2 = rational2.floatValue();
        if (floatValue > floatValue2) {
            return floatValue2 / floatValue;
        }
        return floatValue / floatValue2;
    }

    private List d(Rational rational, List list) {
        ArrayList arrayList = new ArrayList();
        Iterator it = list.iterator();
        while (it.hasNext()) {
            Size size = (Size) it.next();
            if (!B(rational, size)) {
                arrayList.add(size);
            }
        }
        return arrayList;
    }

    private static List e(List list) {
        Rational rational;
        HashMap hashMap = new HashMap();
        ArrayList arrayList = new ArrayList();
        Iterator it = list.iterator();
        while (it.hasNext()) {
            Size size = (Size) it.next();
            Iterator it2 = hashMap.keySet().iterator();
            while (true) {
                if (it2.hasNext()) {
                    rational = (Rational) it2.next();
                    if (b0.a.a(size, rational)) {
                        break;
                    }
                } else {
                    rational = null;
                    break;
                }
            }
            if (rational != null) {
                Size size2 = (Size) hashMap.get(rational);
                Objects.requireNonNull(size2);
                if (size.getHeight() <= size2.getHeight()) {
                    if (size.getWidth() <= size2.getWidth()) {
                        if (size.getWidth() == size2.getWidth() && size.getHeight() == size2.getHeight()) {
                        }
                    }
                }
            } else {
                rational = M(size);
            }
            arrayList.add(size);
            hashMap.put(rational, size);
        }
        return arrayList;
    }

    static List f(Collection collection, List list) {
        if (!collection.isEmpty() && !list.isEmpty()) {
            ArrayList arrayList = new ArrayList();
            Iterator it = list.iterator();
            while (it.hasNext()) {
                Size size = (Size) it.next();
                if (A(collection, size)) {
                    arrayList.add(size);
                }
            }
            return arrayList;
        }
        return new ArrayList();
    }

    static List g(Rational rational, List list) {
        ArrayList arrayList = new ArrayList();
        Iterator it = list.iterator();
        while (it.hasNext()) {
            Size size = (Size) it.next();
            if (b0.a.a(size, rational)) {
                arrayList.add(size);
            }
        }
        return arrayList;
    }

    private static Rational h(Size size) {
        if (size.getWidth() / size.getHeight() > f39475h) {
            return b0.a.f6125c;
        }
        return b0.a.f6123a;
    }

    private List i() {
        return this.f39481f.d(34);
    }

    private List j() {
        return this.f39481f.f(34);
    }

    private static Rect k(Rational rational, Size size) {
        RectF rectF;
        RectF rectF2;
        int width = size.getWidth();
        int height = size.getHeight();
        Rational M = M(size);
        if (rational.floatValue() == M.floatValue()) {
            rectF2 = new RectF(0.0f, 0.0f, width, height);
        } else {
            if (rational.floatValue() > M.floatValue()) {
                float f10 = width;
                float floatValue = f10 / rational.floatValue();
                float f11 = (height - floatValue) / 2.0f;
                rectF = new RectF(0.0f, f11, f10, floatValue + f11);
            } else {
                float f12 = height;
                float floatValue2 = rational.floatValue() * f12;
                float f13 = (width - floatValue2) / 2.0f;
                rectF = new RectF(f13, 0.0f, floatValue2 + f13, f12);
            }
            rectF2 = rectF;
        }
        Rect rect = new Rect();
        rectF2.round(rect);
        return rect;
    }

    private Set l() {
        HashSet hashSet = new HashSet();
        for (x2 x2Var : this.f39479d) {
            hashSet.addAll(v(x2Var));
        }
        return hashSet;
    }

    static Rect m(Size size, Size size2) {
        return k(M(size2), size);
    }

    private static Rational n(Rational rational) {
        Rational rational2 = b0.a.f6123a;
        if (rational.equals(rational2)) {
            return b0.a.f6125c;
        }
        if (rational.equals(b0.a.f6125c)) {
            return rational2;
        }
        throw new IllegalArgumentException("Invalid sensor aspect-ratio: " + rational);
    }

    static List p(Collection collection, List list) {
        if (!collection.isEmpty() && !list.isEmpty()) {
            List<Size> E = E(list);
            ArrayList arrayList = new ArrayList();
            for (Size size : E) {
                if (z(collection, size)) {
                    arrayList.add(size);
                }
            }
            if (!arrayList.isEmpty()) {
                arrayList.remove(arrayList.size() - 1);
            }
            return arrayList;
        }
        return new ArrayList();
    }

    private Pair t(Rect rect, x2 x2Var, boolean z10) {
        Size q10;
        if (z10) {
            q10 = r(q.m(rect), x2Var);
        } else {
            Size m10 = q.m(rect);
            q10 = q(m10, x2Var);
            rect = m(m10, q10);
        }
        return new Pair(rect, q10);
    }

    private static Rational u(Size size) {
        Rational h10 = h(size);
        y0.a("ResolutionsMerger", "The closer aspect ratio to the sensor size (" + size + ") is " + h10 + ".");
        return h10;
    }

    private List v(x2 x2Var) {
        if (this.f39479d.contains(x2Var)) {
            if (this.f39482g.containsKey(x2Var)) {
                List list = (List) this.f39482g.get(x2Var);
                Objects.requireNonNull(list);
                return list;
            }
            List e10 = e(this.f39480e.m(x2Var));
            this.f39482g.put(x2Var, e10);
            return e10;
        }
        throw new IllegalArgumentException("Invalid child config: " + x2Var);
    }

    private static List w(List list) {
        Iterator it = list.iterator();
        while (it.hasNext()) {
            Pair pair = (Pair) it.next();
            if (((Integer) pair.first).equals(34)) {
                return Arrays.asList((Size[]) pair.second);
            }
        }
        return new ArrayList();
    }

    private Map x(List list) {
        List list2;
        HashMap hashMap = new HashMap();
        Rational rational = b0.a.f6123a;
        hashMap.put(rational, new ArrayList());
        Rational rational2 = b0.a.f6125c;
        hashMap.put(rational2, new ArrayList());
        ArrayList arrayList = new ArrayList();
        arrayList.add(rational);
        arrayList.add(rational2);
        Iterator it = list.iterator();
        while (it.hasNext()) {
            Size size = (Size) it.next();
            if (size.getHeight() > 0) {
                Iterator it2 = arrayList.iterator();
                while (true) {
                    if (it2.hasNext()) {
                        Rational rational3 = (Rational) it2.next();
                        if (b0.a.a(size, rational3)) {
                            list2 = (List) hashMap.get(rational3);
                            break;
                        }
                    } else {
                        list2 = null;
                        break;
                    }
                }
                if (list2 == null) {
                    list2 = new ArrayList();
                    Rational M = M(size);
                    arrayList.add(M);
                    hashMap.put(M, list2);
                }
                list2.add(size);
            }
        }
        return hashMap;
    }

    static boolean y(Size size, Size size2) {
        if (size.getHeight() <= size2.getHeight() && size.getWidth() <= size2.getWidth()) {
            return false;
        }
        return true;
    }

    private static boolean z(Collection collection, Size size) {
        Iterator it = collection.iterator();
        while (it.hasNext()) {
            if (y((Size) it.next(), size)) {
                return false;
            }
        }
        return true;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public List o(q1 q1Var) {
        List j10 = j();
        if (J()) {
            ArrayList arrayList = new ArrayList(j10);
            arrayList.addAll(i());
            j10 = arrayList;
        }
        List list = (List) q1Var.e(i1.f91q, null);
        if (list != null) {
            j10 = w(list);
        }
        return H(j10);
    }

    Size q(Size size, x2 x2Var) {
        List<Size> v10 = v(x2Var);
        for (Size size2 : v10) {
            if (!C(size, size2) && !y(size2, size)) {
                return size2;
            }
        }
        for (Size size3 : v10) {
            if (!y(size3, size)) {
                return size3;
            }
        }
        return size;
    }

    Size r(Size size, x2 x2Var) {
        for (Size size2 : v(x2Var)) {
            Size m10 = q.m(m(size2, size));
            if (!y(m10, size)) {
                return m10;
            }
        }
        return size;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public Pair s(x2 x2Var, Rect rect, int i10, boolean z10) {
        boolean z11;
        if (q.i(i10)) {
            rect = F(rect);
            z11 = true;
        } else {
            z11 = false;
        }
        Pair t10 = t(rect, x2Var, z10);
        Rect rect2 = (Rect) t10.first;
        Size size = (Size) t10.second;
        if (z11) {
            size = q.n(size);
            rect2 = F(rect2);
        }
        return new Pair(rect2, size);
    }

    private b(Size size, d0 d0Var, Set set) {
        this(size, d0Var, set, new e0.k(d0Var, size));
    }

    b(Size size, d0 d0Var, Set set, e0.k kVar) {
        this.f39482g = new HashMap();
        this.f39476a = size;
        Rational u10 = u(size);
        this.f39477b = u10;
        this.f39478c = n(u10);
        this.f39481f = d0Var;
        this.f39479d = set;
        this.f39480e = kVar;
    }
}
