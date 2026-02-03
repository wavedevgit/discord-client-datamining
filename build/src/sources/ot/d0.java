package ot;

import java.util.ArrayList;
import java.util.Collections;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Locale;
import java.util.Set;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.ConcurrentMap;
import ot.g0;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class d0 implements h {

    /* renamed from: r  reason: collision with root package name */
    private static final ConcurrentMap f44632r = new ConcurrentHashMap();

    /* renamed from: s  reason: collision with root package name */
    private static final ConcurrentMap f44633s = new ConcurrentHashMap();

    /* renamed from: d  reason: collision with root package name */
    private final boolean f44634d;

    /* renamed from: e  reason: collision with root package name */
    private final h f44635e;

    /* renamed from: i  reason: collision with root package name */
    private final Set f44636i;

    /* renamed from: o  reason: collision with root package name */
    private final nt.g f44637o;

    /* renamed from: p  reason: collision with root package name */
    private final Locale f44638p;

    /* renamed from: q  reason: collision with root package name */
    private final int f44639q;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static class a {

        /* renamed from: a  reason: collision with root package name */
        private final g0 f44640a;

        /* renamed from: b  reason: collision with root package name */
        private final g0 f44641b;

        a(g0 g0Var, g0 g0Var2) {
            this.f44640a = g0Var;
            this.f44641b = g0Var2;
        }

        void a(CharSequence charSequence, int i10, List list, List list2, int[] iArr) {
            String f10 = this.f44640a.f(charSequence, i10);
            int length = f10.length();
            iArr[0] = i10 + length;
            String f11 = this.f44641b.f(charSequence, i10);
            int length2 = f11.length();
            iArr[1] = i10 + length2;
            if (length2 > length) {
                list2.addAll(this.f44641b.b(f11));
            } else if (length2 < length) {
                list.addAll(this.f44640a.b(f10));
            } else if (length > 0) {
                list.addAll(this.f44640a.b(f10));
                list2.addAll(this.f44641b.b(f11));
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public d0(boolean z10) {
        this.f44634d = z10;
        this.f44635e = new n(z10);
        this.f44636i = null;
        this.f44637o = nt.g.SMART;
        this.f44638p = Locale.ROOT;
        this.f44639q = 0;
    }

    private g0 b(Locale locale, boolean z10) {
        net.time4j.tz.d i10 = i(z10);
        g0.b bVar = null;
        for (net.time4j.tz.k kVar : net.time4j.tz.l.t()) {
            String x10 = net.time4j.tz.l.x(kVar, i10, locale);
            if (!x10.equals(kVar.a())) {
                bVar = g0.d(bVar, x10, kVar);
            }
        }
        return new g0(bVar);
    }

    private static List c(List list) {
        if (list.size() > 1) {
            ArrayList arrayList = new ArrayList(list);
            int size = list.size();
            for (int i10 = 1; i10 < size; i10++) {
                net.time4j.tz.k kVar = (net.time4j.tz.k) list.get(i10);
                if (kVar.a().startsWith("WINDOWS~")) {
                    arrayList.remove(kVar);
                }
            }
            if (!arrayList.isEmpty()) {
                return arrayList;
            }
        }
        return list;
    }

    private String h(CharSequence charSequence, int i10, int i11) {
        StringBuilder sb2 = new StringBuilder();
        for (int i12 = i10; i12 < i11; i12++) {
            char charAt = charSequence.charAt(i12);
            if (!Character.isLetter(charAt) && (this.f44634d || i12 <= i10 || Character.isDigit(charAt))) {
                break;
            }
            sb2.append(charAt);
        }
        return sb2.toString().trim();
    }

    private net.time4j.tz.d i(boolean z10) {
        if (z10) {
            if (this.f44634d) {
                return net.time4j.tz.d.SHORT_DAYLIGHT_TIME;
            }
            return net.time4j.tz.d.LONG_DAYLIGHT_TIME;
        } else if (this.f44634d) {
            return net.time4j.tz.d.SHORT_STANDARD_TIME;
        } else {
            return net.time4j.tz.d.LONG_STANDARD_TIME;
        }
    }

    private List j(List list, Locale locale, nt.g gVar) {
        boolean z10;
        String str;
        HashMap hashMap = new HashMap();
        hashMap.put("DEFAULT", new ArrayList());
        Iterator it = list.iterator();
        while (true) {
            z10 = false;
            if (!it.hasNext()) {
                break;
            }
            String a10 = ((net.time4j.tz.k) it.next()).a();
            Set set = this.f44636i;
            int indexOf = a10.indexOf(126);
            if (indexOf < 0) {
                str = "DEFAULT";
            } else {
                str = a10.substring(0, indexOf);
            }
            if (set == null) {
                set = net.time4j.tz.l.C(locale, gVar.d(), str);
            }
            Iterator it2 = set.iterator();
            while (true) {
                if (it2.hasNext()) {
                    net.time4j.tz.k kVar = (net.time4j.tz.k) it2.next();
                    if (kVar.a().equals(a10)) {
                        List list2 = (List) hashMap.get(str);
                        if (list2 == null) {
                            list2 = new ArrayList();
                            hashMap.put(str, list2);
                        }
                        list2.add(kVar);
                    }
                }
            }
        }
        List list3 = (List) hashMap.get("DEFAULT");
        if (list3.isEmpty()) {
            hashMap.remove("DEFAULT");
            Iterator it3 = hashMap.keySet().iterator();
            while (true) {
                if (!it3.hasNext()) {
                    break;
                }
                List list4 = (List) hashMap.get((String) it3.next());
                if (!list4.isEmpty()) {
                    z10 = true;
                    list = list4;
                    break;
                }
            }
            if (!z10) {
                return Collections.EMPTY_LIST;
            }
            return list;
        }
        return list3;
    }

    private static String k(List list) {
        StringBuilder sb2 = new StringBuilder(list.size() * 16);
        sb2.append('{');
        Iterator it = list.iterator();
        boolean z10 = true;
        while (it.hasNext()) {
            net.time4j.tz.k kVar = (net.time4j.tz.k) it.next();
            if (z10) {
                z10 = false;
            } else {
                sb2.append(',');
            }
            sb2.append(kVar.a());
        }
        sb2.append('}');
        return sb2.toString();
    }

    @Override // ot.h
    public int a(mt.o oVar, Appendable appendable, mt.d dVar, Set set, boolean z10) {
        Locale locale;
        int i10;
        if (oVar.l()) {
            net.time4j.tz.k t10 = oVar.t();
            if (t10 instanceof net.time4j.tz.p) {
                return this.f44635e.a(oVar, appendable, dVar, set, z10);
            }
            if (oVar instanceof kt.f) {
                net.time4j.tz.l N = net.time4j.tz.l.N(t10);
                net.time4j.tz.d i11 = i(N.I((kt.f) kt.f.class.cast(oVar)));
                if (z10) {
                    locale = this.f44638p;
                } else {
                    locale = (Locale) dVar.b(nt.a.f42028c, Locale.ROOT);
                }
                String w10 = N.w(i11, locale);
                if (appendable instanceof CharSequence) {
                    i10 = ((CharSequence) appendable).length();
                } else {
                    i10 = -1;
                }
                appendable.append(w10);
                int length = w10.length();
                if (i10 != -1 && length > 0 && set != null) {
                    set.add(new g(b0.TIMEZONE_ID, i10, i10 + length));
                }
                return length;
            }
            throw new IllegalArgumentException("Cannot extract timezone name from: " + oVar);
        }
        throw new IllegalArgumentException("Cannot extract timezone name from: " + oVar);
    }

    @Override // ot.h
    public h d(c cVar, mt.d dVar, int i10) {
        return new d0(this.f44634d, this.f44635e, this.f44636i, (nt.g) dVar.b(nt.a.f42031f, nt.g.SMART), (Locale) dVar.b(nt.a.f42028c, Locale.ROOT), ((Integer) dVar.b(nt.a.f42044s, 0)).intValue());
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof d0) {
            d0 d0Var = (d0) obj;
            if (this.f44634d == d0Var.f44634d) {
                Set set = this.f44636i;
                Set set2 = d0Var.f44636i;
                if (set != null ? set.equals(set2) : set2 == null) {
                    return true;
                }
            }
        }
        return false;
    }

    @Override // ot.h
    public boolean f() {
        return false;
    }

    /* JADX WARN: Code restructure failed: missing block: B:94:0x0215, code lost:
        if (r2 != false) goto L89;
     */
    /* JADX WARN: Removed duplicated region for block: B:38:0x00c3  */
    /* JADX WARN: Removed duplicated region for block: B:40:0x00dd  */
    /* JADX WARN: Type inference failed for: r9v3 */
    /* JADX WARN: Type inference failed for: r9v4, types: [boolean] */
    /* JADX WARN: Type inference failed for: r9v5 */
    @Override // ot.h
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public void g(java.lang.CharSequence r18, ot.s r19, mt.d r20, ot.t r21, boolean r22) {
        /*
            Method dump skipped, instructions count: 635
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: ot.d0.g(java.lang.CharSequence, ot.s, mt.d, ot.t, boolean):void");
    }

    @Override // ot.h
    public mt.p getElement() {
        return b0.TIMEZONE_ID;
    }

    public int hashCode() {
        int hashCode;
        Set set = this.f44636i;
        if (set == null) {
            hashCode = 0;
        } else {
            hashCode = set.hashCode();
        }
        return hashCode + (this.f44634d ? 1 : 0);
    }

    public String toString() {
        StringBuilder sb2 = new StringBuilder(64);
        sb2.append(d0.class.getName());
        sb2.append("[abbreviated=");
        sb2.append(this.f44634d);
        sb2.append(", preferredZones=");
        sb2.append(this.f44636i);
        sb2.append(']');
        return sb2.toString();
    }

    private d0(boolean z10, h hVar, Set set, nt.g gVar, Locale locale, int i10) {
        this.f44634d = z10;
        this.f44635e = hVar;
        this.f44636i = set;
        this.f44637o = gVar;
        this.f44638p = locale;
        this.f44639q = i10;
    }

    @Override // ot.h
    public h e(mt.p pVar) {
        return this;
    }
}
