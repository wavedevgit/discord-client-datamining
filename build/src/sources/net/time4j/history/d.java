package net.time4j.history;

import java.io.InvalidObjectException;
import java.io.ObjectInputStream;
import java.io.Serializable;
import java.text.ParseException;
import java.util.ArrayList;
import java.util.Collections;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Locale;
import java.util.Map;
import java.util.Set;
import net.time4j.f0;
import pt.a0;
import pt.p;
import qt.t;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class d implements Serializable {
    public static final pt.c A = qt.a.e("YEAR_DEFINITION", tt.a.class);
    public static final d B;
    public static final d C;
    public static final d D;
    private static final long E;
    private static final d F;
    private static final d G;
    private static final Map H;
    private static final long serialVersionUID = 4100690610730913643L;

    /* renamed from: d  reason: collision with root package name */
    private final transient ut.b f40016d;

    /* renamed from: e  reason: collision with root package name */
    private final transient List f40017e;

    /* renamed from: i  reason: collision with root package name */
    private final transient net.time4j.history.a f40018i;

    /* renamed from: o  reason: collision with root package name */
    private final transient o f40019o;

    /* renamed from: p  reason: collision with root package name */
    private final transient g f40020p;

    /* renamed from: q  reason: collision with root package name */
    private final transient p f40021q;

    /* renamed from: r  reason: collision with root package name */
    private final transient p f40022r;

    /* renamed from: s  reason: collision with root package name */
    private final transient t f40023s;

    /* renamed from: t  reason: collision with root package name */
    private final transient p f40024t;

    /* renamed from: u  reason: collision with root package name */
    private final transient p f40025u;

    /* renamed from: v  reason: collision with root package name */
    private final transient t f40026v;

    /* renamed from: w  reason: collision with root package name */
    private final transient t f40027w;

    /* renamed from: x  reason: collision with root package name */
    private final transient t f40028x;

    /* renamed from: y  reason: collision with root package name */
    private final transient p f40029y;

    /* renamed from: z  reason: collision with root package name */
    private final transient Set f40030z;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static /* synthetic */ class a {

        /* renamed from: a  reason: collision with root package name */
        static final /* synthetic */ int[] f40031a;

        /* renamed from: b  reason: collision with root package name */
        static final /* synthetic */ int[] f40032b;

        /* renamed from: c  reason: collision with root package name */
        static final /* synthetic */ int[] f40033c;

        static {
            int[] iArr = new int[tt.a.values().length];
            f40033c = iArr;
            try {
                iArr[tt.a.DUAL_DATING.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                f40033c[tt.a.AFTER_NEW_YEAR.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                f40033c[tt.a.BEFORE_NEW_YEAR.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            int[] iArr2 = new int[j.values().length];
            f40032b = iArr2;
            try {
                iArr2[j.HISPANIC.ordinal()] = 1;
            } catch (NoSuchFieldError unused4) {
            }
            try {
                f40032b[j.BYZANTINE.ordinal()] = 2;
            } catch (NoSuchFieldError unused5) {
            }
            try {
                f40032b[j.AB_URBE_CONDITA.ordinal()] = 3;
            } catch (NoSuchFieldError unused6) {
            }
            int[] iArr3 = new int[ut.b.values().length];
            f40031a = iArr3;
            try {
                iArr3[ut.b.PROLEPTIC_GREGORIAN.ordinal()] = 1;
            } catch (NoSuchFieldError unused7) {
            }
            try {
                f40031a[ut.b.PROLEPTIC_JULIAN.ordinal()] = 2;
            } catch (NoSuchFieldError unused8) {
            }
            try {
                f40031a[ut.b.PROLEPTIC_BYZANTINE.ordinal()] = 3;
            } catch (NoSuchFieldError unused9) {
            }
            try {
                f40031a[ut.b.SWEDEN.ordinal()] = 4;
            } catch (NoSuchFieldError unused10) {
            }
            try {
                f40031a[ut.b.INTRODUCTION_ON_1582_10_15.ordinal()] = 5;
            } catch (NoSuchFieldError unused11) {
            }
            try {
                f40031a[ut.b.SINGLE_CUTOVER_DATE.ordinal()] = 6;
            } catch (NoSuchFieldError unused12) {
            }
        }
    }

    static {
        ut.b bVar = ut.b.PROLEPTIC_GREGORIAN;
        c cVar = c.f40012d;
        B = new d(bVar, Collections.singletonList(new f(Long.MIN_VALUE, cVar, cVar)));
        ut.b bVar2 = ut.b.PROLEPTIC_JULIAN;
        c cVar2 = c.f40013e;
        d dVar = new d(bVar2, Collections.singletonList(new f(Long.MIN_VALUE, cVar2, cVar2)));
        C = dVar;
        ut.b bVar3 = ut.b.PROLEPTIC_BYZANTINE;
        List singletonList = Collections.singletonList(new f(Long.MIN_VALUE, cVar2, cVar2));
        n nVar = n.f40067i;
        D = new d(bVar3, singletonList, null, new o(nVar, Integer.MAX_VALUE), g.c((f0) f0.r0().P()));
        long longValue = ((Long) f0.H0(1582, 10, 15).v(a0.MODIFIED_JULIAN_DATE)).longValue();
        E = longValue;
        F = F(longValue);
        ArrayList arrayList = new ArrayList();
        c cVar3 = c.f40014i;
        arrayList.add(new f(-57959L, cVar2, cVar3));
        arrayList.add(new f(-53575L, cVar3, cVar2));
        arrayList.add(new f(-38611L, cVar2, cVar));
        d dVar2 = new d(ut.b.SWEDEN, Collections.unmodifiableList(arrayList));
        G = dVar2;
        HashMap hashMap = new HashMap();
        j jVar = j.AD;
        f0 d10 = dVar.d(h.i(jVar, 988, 3, 1));
        f0 d11 = dVar.d(h.i(jVar, 1382, 12, 24));
        f0 d12 = dVar.d(h.i(jVar, 1421, 12, 24));
        f0 d13 = dVar.d(h.i(jVar, 1699, 12, 31));
        d E2 = E();
        n nVar2 = n.f40065d;
        o f10 = nVar2.f(1383);
        n nVar3 = n.f40068o;
        hashMap.put("ES", E2.K(f10.b(nVar3.f(1556))).J(g.f(d11)));
        hashMap.put("PT", E().K(nVar2.f(1422).b(nVar3.f(1556))).J(g.f(d12)));
        hashMap.put("FR", G(f0.H0(1582, 12, 20)).K(n.f40069p.f(1567)));
        hashMap.put("DE", E().K(nVar3.f(1544)));
        hashMap.put("DE-BAYERN", G(f0.H0(1583, 10, 16)).K(nVar3.f(1544)));
        hashMap.put("DE-PREUSSEN", G(f0.H0(1610, 9, 2)).K(nVar3.f(1559)));
        hashMap.put("DE-PROTESTANT", G(f0.H0(1700, 3, 1)).K(nVar3.f(1559)));
        hashMap.put("NL", G(f0.H0(1583, 1, 1)));
        hashMap.put("AT", G(f0.H0(1584, 1, 17)));
        hashMap.put("CH", G(f0.H0(1584, 1, 22)));
        hashMap.put("HU", G(f0.H0(1587, 11, 1)));
        d G2 = G(f0.H0(1700, 3, 1));
        n nVar4 = n.f40071r;
        hashMap.put("DK", G2.K(nVar4.f(1623)));
        hashMap.put("NO", G(f0.H0(1700, 3, 1)).K(nVar4.f(1623)));
        hashMap.put("IT", E().K(nVar3.f(1583)));
        hashMap.put("IT-FLORENCE", E().K(nVar4.f(1749)));
        hashMap.put("IT-PISA", E().K(n.f40072s.f(1749)));
        d E3 = E();
        n nVar5 = n.f40066e;
        hashMap.put("IT-VENICE", E3.K(nVar5.f(1798)));
        hashMap.put("GB", G(f0.H0(1752, 9, 14)).K(nVar3.f(1087).b(nVar2.f(1155)).b(nVar4.f(1752))));
        hashMap.put("GB-SCT", G(f0.H0(1752, 9, 14)).K(nVar3.f(1087).b(nVar2.f(1155)).b(nVar4.f(1600))));
        hashMap.put("RU", G(f0.H0(1918, 2, 14)).K(nVar2.f(988).b(nVar5.f(1493)).b(nVar.f(1700))).J(g.b(d10, d13)));
        hashMap.put("SE", dVar2);
        H = Collections.unmodifiableMap(hashMap);
    }

    private d(ut.b bVar, List list) {
        this(bVar, list, null, null, g.f40041d);
    }

    private boolean A(h hVar) {
        int a10 = hVar.e().a(hVar.g());
        if (this == D) {
            if (a10 < -5508 || ((a10 == -5508 && hVar.f() < 9) || a10 > 999979465)) {
                return true;
            }
            return false;
        } else if (this == C) {
            if (Math.abs(a10) > 999979465) {
                return true;
            }
            return false;
        } else if (this == B) {
            if (Math.abs(a10) > 999999999) {
                return true;
            }
            return false;
        } else if (a10 < -44 || a10 > 9999) {
            return true;
        } else {
            return false;
        }
    }

    public static d D(Locale locale) {
        d dVar;
        String country = locale.getCountry();
        if (!locale.getVariant().isEmpty()) {
            country = country + "-" + locale.getVariant();
            dVar = (d) H.get(country);
        } else {
            dVar = null;
        }
        if (dVar == null) {
            dVar = (d) H.get(country);
        }
        if (dVar == null) {
            return E();
        }
        return dVar;
    }

    public static d E() {
        return F;
    }

    private static d F(long j10) {
        ut.b bVar;
        if (j10 == E) {
            bVar = ut.b.INTRODUCTION_ON_1582_10_15;
        } else {
            bVar = ut.b.SINGLE_CUTOVER_DATE;
        }
        return new d(bVar, Collections.singletonList(new f(j10, c.f40013e, c.f40012d)));
    }

    public static d G(f0 f0Var) {
        if (f0Var.equals(f0.r0().P())) {
            return C;
        }
        if (f0Var.equals(f0.r0().Q())) {
            return B;
        }
        long longValue = ((Long) f0Var.v(a0.MODIFIED_JULIAN_DATE)).longValue();
        c(longValue);
        if (longValue == E) {
            return F;
        }
        return F(longValue);
    }

    public static d H() {
        return G;
    }

    private static void c(long j10) {
        if (j10 >= E) {
            return;
        }
        throw new IllegalArgumentException("Gregorian calendar did not exist before 1582-10-15");
    }

    public static d j(String str) {
        d H2;
        int i10;
        int i11;
        if (str.startsWith("historic-")) {
            String[] split = str.substring(9).split(":");
            if (split.length != 0) {
                ut.b valueOf = ut.b.valueOf(split[0]);
                switch (a.f40031a[valueOf.ordinal()]) {
                    case 1:
                        return B;
                    case 2:
                        return C;
                    case 3:
                        return D;
                    case 4:
                        H2 = H();
                        i10 = 1;
                        break;
                    case 5:
                        if (r(split, str).equals(f0.H0(1582, 10, 15))) {
                            H2 = E();
                            i10 = 2;
                            break;
                        } else {
                            throw new IllegalArgumentException("Inconsistent cutover date: " + str);
                        }
                    case 6:
                        H2 = G(r(split, str));
                        i10 = 2;
                        break;
                    default:
                        throw new UnsupportedOperationException(valueOf.name());
                }
                String[] split2 = split[i10].split("=");
                if (split2[0].equals("ancient-julian-leap-years")) {
                    String str2 = split2[1];
                    String substring = str2.substring(1, str2.length() - 1);
                    if (!substring.isEmpty()) {
                        String[] split3 = substring.split(",");
                        int[] iArr = new int[split3.length];
                        for (int i12 = 0; i12 < split3.length; i12++) {
                            iArr[i12] = 1 - Integer.parseInt(split3[i12]);
                        }
                        H2 = H2.I(net.time4j.history.a.f(iArr));
                    }
                }
                String[] split4 = split[i10 + 1].split("=");
                if (split4[0].equals("new-year-strategy")) {
                    String str3 = split4[1];
                    o oVar = null;
                    for (String str4 : str3.substring(1, str3.length() - 1).split(",")) {
                        String[] split5 = str4.split("->");
                        n valueOf2 = n.valueOf(split5[0]);
                        if (split5.length == 2) {
                            i11 = Integer.parseInt(split5[1]);
                        } else {
                            i11 = Integer.MAX_VALUE;
                        }
                        if (oVar == null) {
                            if (valueOf2 != n.f40065d || i11 != 567) {
                                oVar = valueOf2.f(i11);
                            }
                        } else {
                            oVar = oVar.b(valueOf2.f(i11));
                        }
                    }
                    H2 = H2.K(oVar);
                }
                String[] split6 = split[i10 + 2].split("=");
                if (split6[0].equals("era-preference")) {
                    String str5 = split6[1];
                    String substring2 = str5.substring(1, str5.length() - 1);
                    if (!substring2.equals("default")) {
                        String[] split7 = substring2.split(",");
                        try {
                            j valueOf3 = j.valueOf(split7[0].substring(5));
                            f0 i13 = rt.l.i(split7[1].substring(7));
                            f0 i14 = rt.l.i(split7[2].substring(5));
                            int i15 = a.f40032b[valueOf3.ordinal()];
                            if (i15 != 1) {
                                if (i15 != 2) {
                                    if (i15 == 3) {
                                        return H2.J(g.a(i13, i14));
                                    }
                                    throw new IllegalArgumentException("BC/AD not allowed as era preference: " + str);
                                }
                                return H2.J(g.b(i13, i14));
                            }
                            return H2.J(g.e(i13, i14));
                        } catch (ParseException unused) {
                            throw new IllegalArgumentException("Invalid date syntax: " + str);
                        }
                    }
                }
                return H2;
            }
            throw new IllegalArgumentException("Invalid variant description.");
        }
        throw new IllegalArgumentException("Variant does not start with \"historic-\": " + str);
    }

    private static f0 r(String[] strArr, String str) {
        String[] split = strArr[1].split("=");
        if (split.length == 2) {
            if (split[0].equals("cutover")) {
                try {
                    return (f0) rt.l.f49151m.D(split[1]);
                } catch (ParseException unused) {
                }
            }
            throw new IllegalArgumentException("Invalid cutover definition: " + str);
        }
        throw new IllegalArgumentException("Invalid syntax in variant description: " + str);
    }

    private void readObject(ObjectInputStream objectInputStream) {
        throw new InvalidObjectException("Serialization proxy required.");
    }

    private b t() {
        net.time4j.history.a aVar = this.f40018i;
        if (aVar != null) {
            return aVar.d();
        }
        return c.f40013e;
    }

    private Object writeReplace() {
        return new SPX(this, 3);
    }

    private static boolean z(Object obj, Object obj2) {
        if (obj == null) {
            if (obj2 == null) {
                return true;
            }
            return false;
        }
        return obj.equals(obj2);
    }

    public boolean B(h hVar) {
        b k10;
        if (hVar == null || A(hVar) || (k10 = k(hVar)) == null || !k10.f(hVar)) {
            return false;
        }
        return true;
    }

    public t C() {
        return this.f40026v;
    }

    public d I(net.time4j.history.a aVar) {
        if (aVar != null) {
            if (!y()) {
                return this;
            }
            return new d(this.f40016d, this.f40017e, aVar, this.f40019o, this.f40020p);
        }
        throw new NullPointerException("Missing ancient julian leap years.");
    }

    public d J(g gVar) {
        if (!gVar.equals(this.f40020p) && y()) {
            return new d(this.f40016d, this.f40017e, this.f40018i, this.f40019o, gVar);
        }
        return this;
    }

    public d K(o oVar) {
        if (oVar.equals(o.f40075d)) {
            if (this.f40019o != null) {
                return new d(this.f40016d, this.f40017e, this.f40018i, null, this.f40020p);
            }
        } else if (y()) {
            return new d(this.f40016d, this.f40017e, this.f40018i, oVar, this.f40020p);
        }
        return this;
    }

    public p L(tt.a aVar) {
        int i10 = a.f40033c[aVar.ordinal()];
        if (i10 != 1) {
            if (i10 != 2) {
                if (i10 == 3) {
                    return this.f40025u;
                }
                throw new UnsupportedOperationException(aVar.name());
            }
            return this.f40024t;
        }
        return this.f40023s;
    }

    public t M() {
        return this.f40023s;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public h a(h hVar) {
        b k10 = k(hVar);
        if (k10 == null) {
            return hVar;
        }
        int d10 = k10.d(hVar);
        if (d10 < hVar.d()) {
            return h.i(hVar.e(), hVar.g(), hVar.f(), d10);
        }
        return hVar;
    }

    public p b() {
        return this.f40029y;
    }

    public f0 d(h hVar) {
        if (!A(hVar)) {
            b k10 = k(hVar);
            if (k10 != null) {
                return f0.M0(k10.a(hVar), a0.MODIFIED_JULIAN_DATE);
            }
            throw new IllegalArgumentException("Invalid historic date: " + hVar);
        }
        throw new IllegalArgumentException("Out of supported range: " + hVar);
    }

    public h e(f0 f0Var) {
        h hVar;
        long longValue = ((Long) f0Var.v(a0.MODIFIED_JULIAN_DATE)).longValue();
        int size = this.f40017e.size() - 1;
        while (true) {
            if (size >= 0) {
                f fVar = (f) this.f40017e.get(size);
                if (longValue >= fVar.f40037a) {
                    hVar = fVar.f40038b.e(longValue);
                    break;
                }
                size--;
            } else {
                hVar = null;
                break;
            }
        }
        if (hVar == null) {
            hVar = t().e(longValue);
        }
        j d10 = this.f40020p.d(hVar, f0Var);
        if (d10 != hVar.e()) {
            hVar = h.i(d10, d10.d(hVar.e(), hVar.g()), hVar.f(), hVar.d());
        }
        if (!A(hVar)) {
            return hVar;
        }
        throw new IllegalArgumentException("Out of supported range: " + hVar);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof d) {
            d dVar = (d) obj;
            if (this.f40016d == dVar.f40016d && z(this.f40018i, dVar.f40018i) && z(this.f40019o, dVar.f40019o) && this.f40020p.equals(dVar.f40020p)) {
                if (this.f40016d != ut.b.SINGLE_CUTOVER_DATE || ((f) this.f40017e.get(0)).f40037a == ((f) dVar.f40017e.get(0)).f40037a) {
                    return true;
                }
                return false;
            }
        }
        return false;
    }

    public p f() {
        return this.f40021q;
    }

    public p g() {
        return this.f40027w;
    }

    public p h() {
        return this.f40028x;
    }

    public int hashCode() {
        ut.b bVar = this.f40016d;
        if (bVar == ut.b.SINGLE_CUTOVER_DATE) {
            long j10 = ((f) this.f40017e.get(0)).f40037a;
            return (int) (j10 ^ (j10 << 32));
        }
        return bVar.hashCode();
    }

    public p i() {
        return this.f40022r;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public b k(h hVar) {
        for (int size = this.f40017e.size() - 1; size >= 0; size--) {
            f fVar = (f) this.f40017e.get(size);
            if (hVar.compareTo(fVar.f40039c) >= 0) {
                return fVar.f40038b;
            }
            if (hVar.compareTo(fVar.f40040d) > 0) {
                return null;
            }
        }
        return t();
    }

    public net.time4j.history.a l() {
        net.time4j.history.a aVar = this.f40018i;
        if (aVar != null) {
            return aVar;
        }
        throw new UnsupportedOperationException("No historic julian leap years were defined.");
    }

    public h m(j jVar, int i10) {
        h d10 = v().d(jVar, i10);
        if (B(d10)) {
            j d11 = this.f40020p.d(d10, d(d10));
            if (d11 != jVar) {
                return h.i(d11, d11.d(d10.e(), d10.g()), d10.f(), d10.d());
            }
            return d10;
        }
        throw new IllegalArgumentException("Cannot determine valid New Year: " + jVar + "-" + i10);
    }

    public Set n() {
        return this.f40030z;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public g o() {
        return this.f40020p;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public List p() {
        return this.f40017e;
    }

    public f0 q() {
        List list = this.f40017e;
        long j10 = ((f) list.get(list.size() - 1)).f40037a;
        if (j10 != Long.MIN_VALUE) {
            return f0.M0(j10, a0.MODIFIED_JULIAN_DATE);
        }
        throw new UnsupportedOperationException("Proleptic history without any gregorian reform date.");
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public ut.b s() {
        return this.f40016d;
    }

    public String toString() {
        return "ChronoHistory[" + w() + "]";
    }

    public int u(j jVar, int i10) {
        h d10;
        h hVar;
        try {
            o oVar = this.f40019o;
            int i11 = 1;
            if (oVar == null) {
                d10 = h.i(jVar, i10, 1, 1);
                hVar = h.i(jVar, i10, 12, 31);
            } else {
                d10 = oVar.d(jVar, i10);
                if (jVar == j.BC) {
                    if (i10 == 1) {
                        hVar = this.f40019o.d(j.AD, 1);
                    } else {
                        hVar = this.f40019o.d(jVar, i10 - 1);
                    }
                } else {
                    h d11 = this.f40019o.d(jVar, i10 + 1);
                    if (jVar == j.BYZANTINE) {
                        hVar = this.f40019o.d(j.AD, jVar.a(i10));
                        if (hVar.compareTo(d10) > 0) {
                        }
                    }
                    hVar = d11;
                }
                i11 = 0;
            }
            return (int) (net.time4j.f.f39933s.e(d(d10), d(hVar)) + i11);
        } catch (RuntimeException unused) {
            return -1;
        }
    }

    public o v() {
        o oVar = this.f40019o;
        if (oVar == null) {
            return o.f40075d;
        }
        return oVar;
    }

    public String w() {
        StringBuilder sb2 = new StringBuilder(64);
        sb2.append("historic-");
        sb2.append(this.f40016d.name());
        int i10 = a.f40031a[this.f40016d.ordinal()];
        if (i10 != 1 && i10 != 2 && i10 != 3) {
            if (i10 == 5 || i10 == 6) {
                sb2.append(":cutover=");
                sb2.append(q());
            }
            sb2.append(":ancient-julian-leap-years=");
            net.time4j.history.a aVar = this.f40018i;
            if (aVar != null) {
                int[] e10 = aVar.e();
                sb2.append('[');
                sb2.append(e10[0]);
                for (int i11 = 1; i11 < e10.length; i11++) {
                    sb2.append(',');
                    sb2.append(e10[i11]);
                }
                sb2.append(']');
            } else {
                sb2.append("[]");
            }
            sb2.append(":new-year-strategy=");
            sb2.append(v());
            sb2.append(":era-preference=");
            sb2.append(o());
        } else {
            sb2.append(":no-cutover");
        }
        return sb2.toString();
    }

    public boolean x() {
        if (this.f40018i != null) {
            return true;
        }
        return false;
    }

    public boolean y() {
        List list = this.f40017e;
        if (((f) list.get(list.size() - 1)).f40037a > Long.MIN_VALUE) {
            return true;
        }
        return false;
    }

    private d(ut.b bVar, List list, net.time4j.history.a aVar, o oVar, g gVar) {
        if (list.isEmpty()) {
            throw new IllegalArgumentException("At least one cutover event must be present in chronological history.");
        }
        if (bVar == null) {
            throw new NullPointerException("Missing historic variant.");
        }
        if (gVar != null) {
            this.f40016d = bVar;
            this.f40017e = list;
            this.f40018i = aVar;
            this.f40019o = oVar;
            this.f40020p = gVar;
            i iVar = new i(this);
            this.f40021q = iVar;
            k kVar = new k(this);
            this.f40022r = kVar;
            l lVar = new l('y', 1, 999999999, this, 2);
            this.f40023s = lVar;
            l lVar2 = new l((char) 0, 1, 999999999, this, 6);
            this.f40024t = lVar2;
            l lVar3 = new l((char) 0, 1, 999999999, this, 7);
            this.f40025u = lVar3;
            l lVar4 = new l('M', 1, 12, this, 3);
            this.f40026v = lVar4;
            l lVar5 = new l('d', 1, 31, this, 4);
            this.f40027w = lVar5;
            l lVar6 = new l('D', 1, 365, this, 5);
            this.f40028x = lVar6;
            l lVar7 = new l((char) 0, 1, 10000000, this, 8);
            this.f40029y = lVar7;
            HashSet hashSet = new HashSet();
            hashSet.add(iVar);
            hashSet.add(kVar);
            hashSet.add(lVar);
            hashSet.add(lVar2);
            hashSet.add(lVar3);
            hashSet.add(lVar4);
            hashSet.add(lVar5);
            hashSet.add(lVar6);
            hashSet.add(lVar7);
            this.f40030z = Collections.unmodifiableSet(hashSet);
            return;
        }
        throw new NullPointerException("Missing era preference.");
    }
}
