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
import st.a0;
import st.p;
import tt.t;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class d implements Serializable {
    public static final st.c A = tt.a.e("YEAR_DEFINITION", wt.a.class);
    public static final d B;
    public static final d C;
    public static final d D;
    private static final long E;
    private static final d F;
    private static final d G;
    private static final Map H;
    private static final long serialVersionUID = 4100690610730913643L;

    /* renamed from: d  reason: collision with root package name */
    private final transient xt.b f38511d;

    /* renamed from: e  reason: collision with root package name */
    private final transient List f38512e;

    /* renamed from: i  reason: collision with root package name */
    private final transient net.time4j.history.a f38513i;

    /* renamed from: o  reason: collision with root package name */
    private final transient o f38514o;

    /* renamed from: p  reason: collision with root package name */
    private final transient g f38515p;

    /* renamed from: q  reason: collision with root package name */
    private final transient p f38516q;

    /* renamed from: r  reason: collision with root package name */
    private final transient p f38517r;

    /* renamed from: s  reason: collision with root package name */
    private final transient t f38518s;

    /* renamed from: t  reason: collision with root package name */
    private final transient p f38519t;

    /* renamed from: u  reason: collision with root package name */
    private final transient p f38520u;

    /* renamed from: v  reason: collision with root package name */
    private final transient t f38521v;

    /* renamed from: w  reason: collision with root package name */
    private final transient t f38522w;

    /* renamed from: x  reason: collision with root package name */
    private final transient t f38523x;

    /* renamed from: y  reason: collision with root package name */
    private final transient p f38524y;

    /* renamed from: z  reason: collision with root package name */
    private final transient Set f38525z;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static /* synthetic */ class a {

        /* renamed from: a  reason: collision with root package name */
        static final /* synthetic */ int[] f38526a;

        /* renamed from: b  reason: collision with root package name */
        static final /* synthetic */ int[] f38527b;

        /* renamed from: c  reason: collision with root package name */
        static final /* synthetic */ int[] f38528c;

        static {
            int[] iArr = new int[wt.a.values().length];
            f38528c = iArr;
            try {
                iArr[wt.a.DUAL_DATING.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                f38528c[wt.a.AFTER_NEW_YEAR.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                f38528c[wt.a.BEFORE_NEW_YEAR.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            int[] iArr2 = new int[j.values().length];
            f38527b = iArr2;
            try {
                iArr2[j.HISPANIC.ordinal()] = 1;
            } catch (NoSuchFieldError unused4) {
            }
            try {
                f38527b[j.BYZANTINE.ordinal()] = 2;
            } catch (NoSuchFieldError unused5) {
            }
            try {
                f38527b[j.AB_URBE_CONDITA.ordinal()] = 3;
            } catch (NoSuchFieldError unused6) {
            }
            int[] iArr3 = new int[xt.b.values().length];
            f38526a = iArr3;
            try {
                iArr3[xt.b.PROLEPTIC_GREGORIAN.ordinal()] = 1;
            } catch (NoSuchFieldError unused7) {
            }
            try {
                f38526a[xt.b.PROLEPTIC_JULIAN.ordinal()] = 2;
            } catch (NoSuchFieldError unused8) {
            }
            try {
                f38526a[xt.b.PROLEPTIC_BYZANTINE.ordinal()] = 3;
            } catch (NoSuchFieldError unused9) {
            }
            try {
                f38526a[xt.b.SWEDEN.ordinal()] = 4;
            } catch (NoSuchFieldError unused10) {
            }
            try {
                f38526a[xt.b.INTRODUCTION_ON_1582_10_15.ordinal()] = 5;
            } catch (NoSuchFieldError unused11) {
            }
            try {
                f38526a[xt.b.SINGLE_CUTOVER_DATE.ordinal()] = 6;
            } catch (NoSuchFieldError unused12) {
            }
        }
    }

    static {
        xt.b bVar = xt.b.PROLEPTIC_GREGORIAN;
        c cVar = c.f38507d;
        B = new d(bVar, Collections.singletonList(new f(Long.MIN_VALUE, cVar, cVar)));
        xt.b bVar2 = xt.b.PROLEPTIC_JULIAN;
        c cVar2 = c.f38508e;
        d dVar = new d(bVar2, Collections.singletonList(new f(Long.MIN_VALUE, cVar2, cVar2)));
        C = dVar;
        xt.b bVar3 = xt.b.PROLEPTIC_BYZANTINE;
        List singletonList = Collections.singletonList(new f(Long.MIN_VALUE, cVar2, cVar2));
        n nVar = n.f38562i;
        D = new d(bVar3, singletonList, null, new o(nVar, Integer.MAX_VALUE), g.c((f0) f0.r0().P()));
        long longValue = ((Long) f0.H0(1582, 10, 15).t(a0.MODIFIED_JULIAN_DATE)).longValue();
        E = longValue;
        F = F(longValue);
        ArrayList arrayList = new ArrayList();
        c cVar3 = c.f38509i;
        arrayList.add(new f(-57959L, cVar2, cVar3));
        arrayList.add(new f(-53575L, cVar3, cVar2));
        arrayList.add(new f(-38611L, cVar2, cVar));
        d dVar2 = new d(xt.b.SWEDEN, Collections.unmodifiableList(arrayList));
        G = dVar2;
        HashMap hashMap = new HashMap();
        j jVar = j.AD;
        f0 d10 = dVar.d(h.i(jVar, 988, 3, 1));
        f0 d11 = dVar.d(h.i(jVar, 1382, 12, 24));
        f0 d12 = dVar.d(h.i(jVar, 1421, 12, 24));
        f0 d13 = dVar.d(h.i(jVar, 1699, 12, 31));
        d E2 = E();
        n nVar2 = n.f38560d;
        o f10 = nVar2.f(1383);
        n nVar3 = n.f38563o;
        hashMap.put("ES", E2.K(f10.b(nVar3.f(1556))).J(g.f(d11)));
        hashMap.put("PT", E().K(nVar2.f(1422).b(nVar3.f(1556))).J(g.f(d12)));
        hashMap.put("FR", G(f0.H0(1582, 12, 20)).K(n.f38564p.f(1567)));
        hashMap.put("DE", E().K(nVar3.f(1544)));
        hashMap.put("DE-BAYERN", G(f0.H0(1583, 10, 16)).K(nVar3.f(1544)));
        hashMap.put("DE-PREUSSEN", G(f0.H0(1610, 9, 2)).K(nVar3.f(1559)));
        hashMap.put("DE-PROTESTANT", G(f0.H0(1700, 3, 1)).K(nVar3.f(1559)));
        hashMap.put("NL", G(f0.H0(1583, 1, 1)));
        hashMap.put("AT", G(f0.H0(1584, 1, 17)));
        hashMap.put("CH", G(f0.H0(1584, 1, 22)));
        hashMap.put("HU", G(f0.H0(1587, 11, 1)));
        d G2 = G(f0.H0(1700, 3, 1));
        n nVar4 = n.f38566r;
        hashMap.put("DK", G2.K(nVar4.f(1623)));
        hashMap.put("NO", G(f0.H0(1700, 3, 1)).K(nVar4.f(1623)));
        hashMap.put("IT", E().K(nVar3.f(1583)));
        hashMap.put("IT-FLORENCE", E().K(nVar4.f(1749)));
        hashMap.put("IT-PISA", E().K(n.f38567s.f(1749)));
        d E3 = E();
        n nVar5 = n.f38561e;
        hashMap.put("IT-VENICE", E3.K(nVar5.f(1798)));
        hashMap.put("GB", G(f0.H0(1752, 9, 14)).K(nVar3.f(1087).b(nVar2.f(1155)).b(nVar4.f(1752))));
        hashMap.put("GB-SCT", G(f0.H0(1752, 9, 14)).K(nVar3.f(1087).b(nVar2.f(1155)).b(nVar4.f(1600))));
        hashMap.put("RU", G(f0.H0(1918, 2, 14)).K(nVar2.f(988).b(nVar5.f(1493)).b(nVar.f(1700))).J(g.b(d10, d13)));
        hashMap.put("SE", dVar2);
        H = Collections.unmodifiableMap(hashMap);
    }

    private d(xt.b bVar, List list) {
        this(bVar, list, null, null, g.f38536d);
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
        xt.b bVar;
        if (j10 == E) {
            bVar = xt.b.INTRODUCTION_ON_1582_10_15;
        } else {
            bVar = xt.b.SINGLE_CUTOVER_DATE;
        }
        return new d(bVar, Collections.singletonList(new f(j10, c.f38508e, c.f38507d)));
    }

    public static d G(f0 f0Var) {
        if (f0Var.equals(f0.r0().P())) {
            return C;
        }
        if (f0Var.equals(f0.r0().Q())) {
            return B;
        }
        long longValue = ((Long) f0Var.t(a0.MODIFIED_JULIAN_DATE)).longValue();
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
                xt.b valueOf = xt.b.valueOf(split[0]);
                switch (a.f38526a[valueOf.ordinal()]) {
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
                            if (valueOf2 != n.f38560d || i11 != 567) {
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
                            f0 i13 = ut.l.i(split7[1].substring(7));
                            f0 i14 = ut.l.i(split7[2].substring(5));
                            int i15 = a.f38527b[valueOf3.ordinal()];
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
                    return (f0) ut.l.f51967m.D(split[1]);
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
        net.time4j.history.a aVar = this.f38513i;
        if (aVar != null) {
            return aVar.d();
        }
        return c.f38508e;
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
        return this.f38521v;
    }

    public d I(net.time4j.history.a aVar) {
        if (aVar != null) {
            if (!y()) {
                return this;
            }
            return new d(this.f38511d, this.f38512e, aVar, this.f38514o, this.f38515p);
        }
        throw new NullPointerException("Missing ancient julian leap years.");
    }

    public d J(g gVar) {
        if (!gVar.equals(this.f38515p) && y()) {
            return new d(this.f38511d, this.f38512e, this.f38513i, this.f38514o, gVar);
        }
        return this;
    }

    public d K(o oVar) {
        if (oVar.equals(o.f38570d)) {
            if (this.f38514o != null) {
                return new d(this.f38511d, this.f38512e, this.f38513i, null, this.f38515p);
            }
        } else if (y()) {
            return new d(this.f38511d, this.f38512e, this.f38513i, oVar, this.f38515p);
        }
        return this;
    }

    public p L(wt.a aVar) {
        int i10 = a.f38528c[aVar.ordinal()];
        if (i10 != 1) {
            if (i10 != 2) {
                if (i10 == 3) {
                    return this.f38520u;
                }
                throw new UnsupportedOperationException(aVar.name());
            }
            return this.f38519t;
        }
        return this.f38518s;
    }

    public t M() {
        return this.f38518s;
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
        return this.f38524y;
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
        long longValue = ((Long) f0Var.t(a0.MODIFIED_JULIAN_DATE)).longValue();
        int size = this.f38512e.size() - 1;
        while (true) {
            if (size >= 0) {
                f fVar = (f) this.f38512e.get(size);
                if (longValue >= fVar.f38532a) {
                    hVar = fVar.f38533b.e(longValue);
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
        j d10 = this.f38515p.d(hVar, f0Var);
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
            if (this.f38511d == dVar.f38511d && z(this.f38513i, dVar.f38513i) && z(this.f38514o, dVar.f38514o) && this.f38515p.equals(dVar.f38515p)) {
                if (this.f38511d != xt.b.SINGLE_CUTOVER_DATE || ((f) this.f38512e.get(0)).f38532a == ((f) dVar.f38512e.get(0)).f38532a) {
                    return true;
                }
                return false;
            }
        }
        return false;
    }

    public p f() {
        return this.f38516q;
    }

    public p g() {
        return this.f38522w;
    }

    public p h() {
        return this.f38523x;
    }

    public int hashCode() {
        xt.b bVar = this.f38511d;
        if (bVar == xt.b.SINGLE_CUTOVER_DATE) {
            long j10 = ((f) this.f38512e.get(0)).f38532a;
            return (int) (j10 ^ (j10 << 32));
        }
        return bVar.hashCode();
    }

    public p i() {
        return this.f38517r;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public b k(h hVar) {
        for (int size = this.f38512e.size() - 1; size >= 0; size--) {
            f fVar = (f) this.f38512e.get(size);
            if (hVar.compareTo(fVar.f38534c) >= 0) {
                return fVar.f38533b;
            }
            if (hVar.compareTo(fVar.f38535d) > 0) {
                return null;
            }
        }
        return t();
    }

    public net.time4j.history.a l() {
        net.time4j.history.a aVar = this.f38513i;
        if (aVar != null) {
            return aVar;
        }
        throw new UnsupportedOperationException("No historic julian leap years were defined.");
    }

    public h m(j jVar, int i10) {
        h d10 = v().d(jVar, i10);
        if (B(d10)) {
            j d11 = this.f38515p.d(d10, d(d10));
            if (d11 != jVar) {
                return h.i(d11, d11.d(d10.e(), d10.g()), d10.f(), d10.d());
            }
            return d10;
        }
        throw new IllegalArgumentException("Cannot determine valid New Year: " + jVar + "-" + i10);
    }

    public Set n() {
        return this.f38525z;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public g o() {
        return this.f38515p;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public List p() {
        return this.f38512e;
    }

    public f0 q() {
        List list = this.f38512e;
        long j10 = ((f) list.get(list.size() - 1)).f38532a;
        if (j10 != Long.MIN_VALUE) {
            return f0.M0(j10, a0.MODIFIED_JULIAN_DATE);
        }
        throw new UnsupportedOperationException("Proleptic history without any gregorian reform date.");
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public xt.b s() {
        return this.f38511d;
    }

    public String toString() {
        return "ChronoHistory[" + w() + "]";
    }

    public int u(j jVar, int i10) {
        h d10;
        h hVar;
        try {
            o oVar = this.f38514o;
            int i11 = 1;
            if (oVar == null) {
                d10 = h.i(jVar, i10, 1, 1);
                hVar = h.i(jVar, i10, 12, 31);
            } else {
                d10 = oVar.d(jVar, i10);
                if (jVar == j.BC) {
                    if (i10 == 1) {
                        hVar = this.f38514o.d(j.AD, 1);
                    } else {
                        hVar = this.f38514o.d(jVar, i10 - 1);
                    }
                } else {
                    h d11 = this.f38514o.d(jVar, i10 + 1);
                    if (jVar == j.BYZANTINE) {
                        hVar = this.f38514o.d(j.AD, jVar.a(i10));
                        if (hVar.compareTo(d10) > 0) {
                        }
                    }
                    hVar = d11;
                }
                i11 = 0;
            }
            return (int) (net.time4j.f.f38428s.e(d(d10), d(hVar)) + i11);
        } catch (RuntimeException unused) {
            return -1;
        }
    }

    public o v() {
        o oVar = this.f38514o;
        if (oVar == null) {
            return o.f38570d;
        }
        return oVar;
    }

    public String w() {
        StringBuilder sb2 = new StringBuilder(64);
        sb2.append("historic-");
        sb2.append(this.f38511d.name());
        int i10 = a.f38526a[this.f38511d.ordinal()];
        if (i10 != 1 && i10 != 2 && i10 != 3) {
            if (i10 == 5 || i10 == 6) {
                sb2.append(":cutover=");
                sb2.append(q());
            }
            sb2.append(":ancient-julian-leap-years=");
            net.time4j.history.a aVar = this.f38513i;
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
        if (this.f38513i != null) {
            return true;
        }
        return false;
    }

    public boolean y() {
        List list = this.f38512e;
        if (((f) list.get(list.size() - 1)).f38532a > Long.MIN_VALUE) {
            return true;
        }
        return false;
    }

    private d(xt.b bVar, List list, net.time4j.history.a aVar, o oVar, g gVar) {
        if (list.isEmpty()) {
            throw new IllegalArgumentException("At least one cutover event must be present in chronological history.");
        }
        if (bVar == null) {
            throw new NullPointerException("Missing historic variant.");
        }
        if (gVar != null) {
            this.f38511d = bVar;
            this.f38512e = list;
            this.f38513i = aVar;
            this.f38514o = oVar;
            this.f38515p = gVar;
            i iVar = new i(this);
            this.f38516q = iVar;
            k kVar = new k(this);
            this.f38517r = kVar;
            l lVar = new l('y', 1, 999999999, this, 2);
            this.f38518s = lVar;
            l lVar2 = new l((char) 0, 1, 999999999, this, 6);
            this.f38519t = lVar2;
            l lVar3 = new l((char) 0, 1, 999999999, this, 7);
            this.f38520u = lVar3;
            l lVar4 = new l('M', 1, 12, this, 3);
            this.f38521v = lVar4;
            l lVar5 = new l('d', 1, 31, this, 4);
            this.f38522w = lVar5;
            l lVar6 = new l('D', 1, 365, this, 5);
            this.f38523x = lVar6;
            l lVar7 = new l((char) 0, 1, 10000000, this, 8);
            this.f38524y = lVar7;
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
            this.f38525z = Collections.unmodifiableSet(hashSet);
            return;
        }
        throw new NullPointerException("Missing era preference.");
    }
}
