package net.time4j;

import java.io.InvalidObjectException;
import java.io.ObjectInputStream;
import java.text.ParsePosition;
import java.util.ArrayList;
import java.util.Collections;
import java.util.HashSet;
import java.util.Iterator;
import java.util.LinkedHashSet;
import java.util.Locale;
import java.util.Map;
import java.util.Set;
import java.util.SortedMap;
import java.util.TreeMap;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class k {

    /* renamed from: d  reason: collision with root package name */
    private static final SortedMap f40097d;

    /* renamed from: e  reason: collision with root package name */
    private static k f40098e;

    /* renamed from: f  reason: collision with root package name */
    private static final pt.c f40099f;

    /* renamed from: a  reason: collision with root package name */
    private final transient Locale f40100a;

    /* renamed from: b  reason: collision with root package name */
    private final transient String f40101b;

    /* renamed from: c  reason: collision with root package name */
    private final transient SortedMap f40102c;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static /* synthetic */ class a {

        /* renamed from: a  reason: collision with root package name */
        static final /* synthetic */ int[] f40103a;

        static {
            int[] iArr = new int[qt.v.values().length];
            f40103a = iArr;
            try {
                iArr[qt.v.WIDE.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                f40103a[qt.v.NARROW.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static class b extends pt.e implements qt.t, pt.z {
        private static final long serialVersionUID = 5589976208326940032L;

        /* renamed from: d  reason: collision with root package name */
        private final transient boolean f40104d;

        /* renamed from: e  reason: collision with root package name */
        private final transient k f40105e;

        /* JADX INFO: Access modifiers changed from: package-private */
        public b(boolean z10, Locale locale, String str) {
            this(z10, k.r(locale, str));
        }

        private boolean F(char c10, char c11) {
            if (c10 >= 'a' && c10 <= 'z') {
                c10 = (char) (c10 - ' ');
            }
            if (c11 >= 'a' && c11 <= 'z') {
                c11 = (char) (c11 - ' ');
            }
            if (c10 >= 'A' && c10 <= 'Z') {
                if (c10 == c11) {
                    return true;
                }
                return false;
            }
            Locale M = M();
            return String.valueOf(c10).toUpperCase(M).equals(String.valueOf(c11).toUpperCase(M));
        }

        private String T(CharSequence charSequence, ParsePosition parsePosition, pt.d dVar, qt.m mVar) {
            String str;
            Map map;
            String str2;
            String str3;
            String str4;
            boolean z10;
            String k10;
            qt.m mVar2 = mVar;
            ArrayList arrayList = new ArrayList();
            String str5 = "pm";
            String str6 = "am";
            if (this.f40104d) {
                arrayList.add("am");
                arrayList.add("pm");
                arrayList.add("midnight");
                arrayList.add("noon");
            } else {
                arrayList.addAll(new LinkedHashSet(this.f40105e.f40102c.values()));
                if (this.f40105e.p()) {
                    arrayList.add("midnight");
                    arrayList.add("noon");
                }
            }
            Map q10 = this.f40105e.p() ? k.q(M(), G()) : null;
            qt.v vVar = (qt.v) dVar.a(qt.a.f48092g, qt.v.WIDE);
            boolean booleanValue = ((Boolean) dVar.a(qt.a.f48094i, Boolean.TRUE)).booleanValue();
            boolean booleanValue2 = ((Boolean) dVar.a(qt.a.f48095j, Boolean.FALSE)).booleanValue();
            int index = parsePosition.getIndex();
            int length = charSequence.length();
            Iterator it = arrayList.iterator();
            String str7 = null;
            int i10 = 0;
            while (it.hasNext()) {
                boolean z11 = booleanValue2;
                String str8 = (String) it.next();
                Iterator it2 = it;
                if (this.f40105e.p()) {
                    if (this.f40104d) {
                        k10 = k.k(q10, vVar, mVar2, str8);
                        if (!q10.containsKey(k10)) {
                            if (str8.equals("midnight")) {
                                k10 = k.k(q10, vVar, mVar2, str6);
                            } else if (str8.equals("noon")) {
                                k10 = k.k(q10, vVar, mVar2, str5);
                            }
                        }
                    } else {
                        k10 = k.k(q10, vVar, mVar2, str8);
                    }
                    str = q10.containsKey(k10) ? (String) q10.get(k10) : null;
                } else {
                    str = str8;
                }
                if (str != null) {
                    int length2 = str.length();
                    map = q10;
                    int i11 = index;
                    int i12 = 0;
                    boolean z12 = true;
                    while (z12 && i12 < length2) {
                        String str9 = str5;
                        int i13 = index + i12;
                        if (i13 >= length) {
                            str4 = str6;
                            z12 = false;
                        } else {
                            str4 = str6;
                            char charAt = charSequence.charAt(i13);
                            char charAt2 = str.charAt(i12);
                            if (booleanValue) {
                                z10 = F(charAt, charAt2);
                            } else {
                                z10 = charAt == charAt2;
                            }
                            if (z10) {
                                i11++;
                            }
                            z12 = z10;
                        }
                        i12++;
                        str5 = str9;
                        str6 = str4;
                    }
                    str2 = str5;
                    str3 = str6;
                    if (z11 || length2 == 1) {
                        length2 = i11 - index;
                        if (i10 >= length2) {
                            if (str7 != null && i10 == length2) {
                                if (!this.f40104d) {
                                    str7 = str7 + "|" + str8;
                                }
                                str7 = null;
                            }
                        }
                        str7 = str8;
                        i10 = length2;
                    } else if (z12) {
                        if (str7 != null) {
                            if (this.f40104d) {
                                i10 = length2;
                                str7 = null;
                            } else {
                                str7 = str7 + "|" + str8;
                                i10 = length2;
                            }
                        }
                        str7 = str8;
                        i10 = length2;
                    }
                } else {
                    map = q10;
                    str2 = str5;
                    str3 = str6;
                }
                mVar2 = mVar;
                it = it2;
                booleanValue2 = z11;
                q10 = map;
                str5 = str2;
                str6 = str3;
            }
            if (str7 == null) {
                parsePosition.setErrorIndex(index);
                return str7;
            }
            parsePosition.setIndex(index + i10);
            return str7;
        }

        private void readObject(ObjectInputStream objectInputStream) {
            throw new InvalidObjectException("Serialization proxy required.");
        }

        private Object writeReplace() {
            return new SPX(this, 7);
        }

        @Override // pt.p
        public boolean B() {
            return true;
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        public String G() {
            return this.f40105e.f40101b;
        }

        @Override // pt.z
        /* renamed from: H */
        public pt.p a(pt.q qVar) {
            return null;
        }

        @Override // pt.z
        /* renamed from: I */
        public pt.p h(pt.q qVar) {
            return null;
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        public Object J() {
            return this.f40105e.f40102c;
        }

        @Override // pt.p
        /* renamed from: K */
        public String e() {
            if (!this.f40104d) {
                return (String) this.f40105e.f40102c.get((g0) this.f40105e.f40102c.lastKey());
            }
            return "pm";
        }

        @Override // pt.p
        /* renamed from: L */
        public String A() {
            if (!this.f40104d) {
                return (String) this.f40105e.f40102c.get((g0) this.f40105e.f40102c.firstKey());
            }
            return "am";
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        public Locale M() {
            return this.f40105e.f40100a;
        }

        @Override // pt.z
        /* renamed from: N */
        public String k(pt.q qVar) {
            return e();
        }

        @Override // pt.z
        /* renamed from: O */
        public String r(pt.q qVar) {
            return A();
        }

        @Override // pt.z
        /* renamed from: P */
        public String y(pt.q qVar) {
            String str;
            g0 g0Var = (g0) qVar.v(g0.A);
            if (this.f40104d) {
                return k.n(g0Var);
            }
            if (this.f40105e.p()) {
                Map q10 = k.q(M(), G());
                if (g0Var.B0()) {
                    str = "midnight";
                } else if (g0Var.C0(g0.G0(12))) {
                    str = "noon";
                } else {
                    str = null;
                }
                if (str != null && q10.containsKey(k.k(q10, qt.v.ABBREVIATED, qt.m.FORMAT, str))) {
                    return str;
                }
            }
            return (String) this.f40105e.f40102c.get(this.f40105e.o(g0Var));
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        public boolean Q() {
            return this.f40104d;
        }

        @Override // pt.z
        /* renamed from: R */
        public boolean p(pt.q qVar, String str) {
            return false;
        }

        @Override // qt.t
        /* renamed from: S */
        public String t(CharSequence charSequence, ParsePosition parsePosition, pt.d dVar) {
            int index = parsePosition.getIndex();
            pt.c cVar = qt.a.f48093h;
            qt.m mVar = qt.m.FORMAT;
            qt.m mVar2 = (qt.m) dVar.a(cVar, mVar);
            String T = T(charSequence, parsePosition, dVar, mVar2);
            if (T == null && ((Boolean) dVar.a(qt.a.f48096k, Boolean.TRUE)).booleanValue()) {
                parsePosition.setErrorIndex(-1);
                parsePosition.setIndex(index);
                if (mVar2 == mVar) {
                    mVar = qt.m.STANDALONE;
                }
                return T(charSequence, parsePosition, dVar, mVar);
            }
            return T;
        }

        @Override // pt.z
        /* renamed from: U */
        public pt.q x(pt.q qVar, String str, boolean z10) {
            throw new IllegalArgumentException("Day period element cannot be set.");
        }

        /* JADX INFO: Access modifiers changed from: protected */
        @Override // pt.e
        public pt.z c(pt.x xVar) {
            if (xVar.E(g0.A)) {
                return this;
            }
            return null;
        }

        @Override // pt.e, pt.p
        public char d() {
            if (this.f40104d) {
                return 'b';
            }
            return 'B';
        }

        @Override // pt.p
        public Class getType() {
            return String.class;
        }

        @Override // pt.e
        protected boolean j(pt.e eVar) {
            return this.f40105e.equals(((b) eVar).f40105e);
        }

        @Override // qt.t
        public void s(pt.o oVar, Appendable appendable, pt.d dVar) {
            String str;
            qt.v vVar = (qt.v) dVar.a(qt.a.f48092g, qt.v.WIDE);
            qt.m mVar = (qt.m) dVar.a(qt.a.f48093h, qt.m.FORMAT);
            if (this.f40104d) {
                str = (String) this.f40105e.l(vVar, mVar).apply(oVar);
            } else {
                str = (String) this.f40105e.j(vVar, mVar).apply(oVar);
            }
            appendable.append(str);
        }

        @Override // pt.e
        public String toString() {
            StringBuilder sb2 = new StringBuilder(32);
            sb2.append(name());
            sb2.append('@');
            sb2.append(this.f40105e);
            return sb2.toString();
        }

        @Override // pt.p
        public boolean z() {
            return false;
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        public b(boolean z10, k kVar) {
            super(z10 ? "FIXED_DAY_PERIOD" : "APPROXIMATE_DAY_PERIOD");
            this.f40104d = z10;
            this.f40105e = kVar;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static class c implements pt.s {
        private static k e(Locale locale, pt.d dVar) {
            if (dVar.b(k.f40099f)) {
                return (k) dVar.c(k.f40099f);
            }
            return k.r(locale, (String) dVar.a(qt.a.f48087b, "iso8601"));
        }

        private static int f(pt.q qVar) {
            net.time4j.c cVar = g0.C;
            if (qVar.m(cVar)) {
                int intValue = ((Integer) qVar.v(cVar)).intValue();
                if (intValue == 12) {
                    return 0;
                }
                return intValue;
            }
            l0 l0Var = g0.E;
            if (qVar.m(l0Var)) {
                return ((Integer) qVar.v(l0Var)).intValue();
            }
            return -1;
        }

        @Override // pt.s
        public Set a(Locale locale, pt.d dVar) {
            k e10 = e(locale, dVar);
            HashSet hashSet = new HashSet();
            hashSet.add(new b(false, e10));
            if (!dVar.b(k.f40099f)) {
                hashSet.add(new b(true, e10));
            }
            return Collections.unmodifiableSet(hashSet);
        }

        @Override // pt.s
        public boolean b(pt.p pVar) {
            return pVar instanceof b;
        }

        @Override // pt.s
        public boolean c(Class cls) {
            return g0.class.isAssignableFrom(cls);
        }

        /* JADX WARN: Removed duplicated region for block: B:56:0x00ec  */
        /* JADX WARN: Removed duplicated region for block: B:78:0x012c A[LOOP:0: B:14:0x003f->B:78:0x012c, LOOP_END] */
        /* JADX WARN: Removed duplicated region for block: B:91:0x011b A[EDGE_INSN: B:91:0x011b->B:73:0x011b ?: BREAK  , SYNTHETIC] */
        /* JADX WARN: Removed duplicated region for block: B:94:0x0116 A[SYNTHETIC] */
        @Override // pt.s
        /*
            Code decompiled incorrectly, please refer to instructions dump.
            To view partially-correct add '--show-bad-code' argument
        */
        public pt.q d(pt.q r17, java.util.Locale r18, pt.d r19) {
            /*
                Method dump skipped, instructions count: 361
                To view this dump add '--comments-level debug' option
            */
            throw new UnsupportedOperationException("Method not decompiled: net.time4j.k.c.d(pt.q, java.util.Locale, pt.d):pt.q");
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public class d implements pt.t {

        /* renamed from: a  reason: collision with root package name */
        private final boolean f40106a;

        /* renamed from: b  reason: collision with root package name */
        private final qt.v f40107b;

        /* renamed from: c  reason: collision with root package name */
        private final qt.m f40108c;

        d(boolean z10, qt.v vVar, qt.m mVar) {
            if (vVar != null) {
                if (mVar != null) {
                    this.f40106a = z10;
                    this.f40107b = vVar;
                    this.f40108c = mVar;
                    return;
                }
                throw new NullPointerException("Missing output context.");
            }
            throw new NullPointerException("Missing text width.");
        }

        @Override // pt.t
        /* renamed from: a */
        public String apply(pt.o oVar) {
            g0 g0Var = (g0) oVar.v(g0.A);
            k kVar = k.this;
            Locale locale = kVar.f40100a;
            if (this.f40106a) {
                String n10 = k.n(g0Var);
                if (kVar.p()) {
                    Map q10 = k.q(locale, kVar.f40101b);
                    String k10 = k.k(q10, this.f40107b, this.f40108c, n10);
                    if (!q10.containsKey(k10)) {
                        if (n10.equals("midnight")) {
                            k10 = k.k(q10, this.f40107b, this.f40108c, "am");
                        } else if (n10.equals("noon")) {
                            k10 = k.k(q10, this.f40107b, this.f40108c, "pm");
                        }
                    }
                    if (q10.containsKey(k10)) {
                        return (String) q10.get(k10);
                    }
                } else {
                    return n10;
                }
            } else if (kVar.p()) {
                Map q11 = k.q(locale, kVar.f40101b);
                if (g0Var.B0()) {
                    String k11 = k.k(q11, this.f40107b, this.f40108c, "midnight");
                    if (q11.containsKey(k11)) {
                        return (String) q11.get(k11);
                    }
                } else if (g0Var.C0(g0.G0(12))) {
                    String k12 = k.k(q11, this.f40107b, this.f40108c, "noon");
                    if (q11.containsKey(k12)) {
                        return (String) q11.get(k12);
                    }
                }
                String k13 = k.k(q11, this.f40107b, this.f40108c, (String) kVar.f40102c.get(kVar.o(g0Var)));
                if (q11.containsKey(k13)) {
                    return (String) q11.get(k13);
                }
            } else {
                return (String) kVar.f40102c.get(kVar.o(g0Var));
            }
            z zVar = (z) g0Var.v(g0.B);
            if (locale == null) {
                locale = Locale.ROOT;
            }
            return zVar.a(locale);
        }
    }

    static {
        TreeMap treeMap = new TreeMap();
        treeMap.put(g0.F0(), "am");
        treeMap.put(g0.G0(12), "pm");
        SortedMap unmodifiableSortedMap = Collections.unmodifiableSortedMap(treeMap);
        f40097d = unmodifiableSortedMap;
        f40098e = new k(Locale.ROOT, "iso8601", unmodifiableSortedMap);
        f40099f = qt.a.e("CUSTOM_DAY_PERIOD", k.class);
    }

    private k(Locale locale, String str, SortedMap sortedMap) {
        this.f40100a = locale;
        this.f40101b = str;
        this.f40102c = Collections.unmodifiableSortedMap(sortedMap);
    }

    private static boolean a(String str) {
        if (str.charAt(0) != 'T' || str.length() != 5 || !Character.isDigit(str.charAt(1))) {
            return false;
        }
        return true;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static String k(Map map, qt.v vVar, qt.m mVar, String str) {
        if (vVar == qt.v.SHORT) {
            vVar = qt.v.ABBREVIATED;
        }
        String str2 = t(vVar, mVar) + str;
        if (!map.containsKey(str2)) {
            if (mVar == qt.m.STANDALONE) {
                qt.v vVar2 = qt.v.ABBREVIATED;
                if (vVar == vVar2) {
                    return k(map, vVar, qt.m.FORMAT, str);
                }
                return k(map, vVar2, mVar, str);
            }
            qt.v vVar3 = qt.v.ABBREVIATED;
            if (vVar != vVar3) {
                return k(map, vVar3, mVar, str);
            }
        }
        return str2;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static String n(g0 g0Var) {
        int intValue = ((Integer) g0Var.v(g0.I)).intValue();
        if (intValue != 0 && intValue != 1440) {
            if (intValue < 720) {
                return "am";
            }
            if (intValue == 720) {
                return "noon";
            }
            return "pm";
        }
        return "midnight";
    }

    /* JADX INFO: Access modifiers changed from: private */
    public boolean p() {
        if (this.f40100a != null) {
            return true;
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static Map q(Locale locale, String str) {
        Map m10 = qt.b.c(str, locale).m();
        if (!str.equals("iso8601") && !"true".equals(m10.get("hasDayPeriods"))) {
            return qt.b.d(locale).m();
        }
        return m10;
    }

    static k r(Locale locale, String str) {
        String language = locale.getLanguage();
        if (language.equals("nn")) {
            locale = new Locale("nb");
        }
        Map q10 = q(locale, str);
        TreeMap treeMap = new TreeMap();
        for (String str2 : q10.keySet()) {
            if (a(str2)) {
                int parseInt = Integer.parseInt(str2.substring(1, 3));
                int parseInt2 = Integer.parseInt(str2.substring(3, 5));
                g0 F0 = g0.F0();
                if (parseInt == 24) {
                    if (parseInt2 != 0) {
                        throw new IllegalStateException("Invalid time key: " + str2);
                    }
                } else if (parseInt >= 0 && parseInt < 24 && parseInt2 >= 0 && parseInt2 < 60) {
                    F0 = (g0) F0.K((parseInt * 60) + parseInt2, g.f39967e);
                } else {
                    throw new IllegalStateException("Invalid time key: " + str2);
                }
                treeMap.put(F0, q10.get(str2));
            }
        }
        if (!treeMap.isEmpty() && !language.isEmpty()) {
            Iterator it = treeMap.keySet().iterator();
            String str3 = "";
            while (it.hasNext()) {
                String str4 = (String) treeMap.get((g0) it.next());
                if (str4.equals(str3)) {
                    it.remove();
                } else {
                    str3 = str4;
                }
            }
            return new k(locale, str, treeMap);
        }
        return f40098e;
    }

    public static k s(Map map) {
        if (!map.isEmpty()) {
            TreeMap treeMap = new TreeMap(map);
            for (g0 g0Var : map.keySet()) {
                if (g0Var.h() == 24) {
                    treeMap.put(g0.F0(), map.get(g0Var));
                    treeMap.remove(g0Var);
                } else if (((String) map.get(g0Var)).isEmpty()) {
                    throw new IllegalArgumentException("Map has empty label: " + map);
                }
            }
            return new k(null, "", treeMap);
        }
        throw new IllegalArgumentException("Label map is empty.");
    }

    private static String t(qt.v vVar, qt.m mVar) {
        char c10;
        int i10 = a.f40103a[vVar.ordinal()];
        if (i10 != 1) {
            if (i10 != 2) {
                c10 = 'a';
            } else {
                c10 = 'n';
            }
        } else {
            c10 = 'w';
        }
        if (mVar == qt.m.STANDALONE) {
            c10 = Character.toUpperCase(c10);
        }
        return "P(" + c10 + ")_";
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof k) {
            k kVar = (k) obj;
            Locale locale = this.f40100a;
            if (locale == null) {
                if (kVar.f40100a != null) {
                    return false;
                }
            } else if (!locale.equals(kVar.f40100a)) {
                return false;
            }
            if (this.f40102c.equals(kVar.f40102c) && this.f40101b.equals(kVar.f40101b)) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return this.f40102c.hashCode();
    }

    public pt.t j(qt.v vVar, qt.m mVar) {
        return new d(false, vVar, mVar);
    }

    public pt.t l(qt.v vVar, qt.m mVar) {
        return new d(true, vVar, mVar);
    }

    public g0 m(g0 g0Var) {
        if (g0Var.h() == 24) {
            g0Var = g0.F0();
        }
        for (g0 g0Var2 : this.f40102c.keySet()) {
            if (g0Var.y0(g0Var2)) {
                return g0Var2;
            }
        }
        return (g0) this.f40102c.firstKey();
    }

    public g0 o(g0 g0Var) {
        if (g0Var.h() == 24) {
            g0Var = g0.F0();
        }
        g0 g0Var2 = (g0) this.f40102c.lastKey();
        for (g0 g0Var3 : this.f40102c.keySet()) {
            if (g0Var.C0(g0Var3)) {
                return g0Var3;
            }
            if (g0Var.y0(g0Var3)) {
                break;
            }
            g0Var2 = g0Var3;
        }
        return g0Var2;
    }

    public String toString() {
        StringBuilder sb2 = new StringBuilder(64);
        sb2.append("DayPeriod[");
        if (p()) {
            sb2.append("locale=");
            sb2.append(this.f40100a);
            sb2.append(',');
            if (!this.f40101b.equals("iso8601")) {
                sb2.append(",calendar-type=");
                sb2.append(this.f40101b);
                sb2.append(',');
            }
        }
        sb2.append(this.f40102c);
        sb2.append(']');
        return sb2.toString();
    }
}
