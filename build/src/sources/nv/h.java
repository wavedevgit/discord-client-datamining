package nv;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.HashMap;
import java.util.Iterator;
import java.util.LinkedHashMap;
import java.util.LinkedHashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;
import nv.c;
import nv.i;
import nv.j;
import nv.k;
import nv.l;
import nv.p;
import nv.t;
import qv.x;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class h implements sv.h {

    /* renamed from: p  reason: collision with root package name */
    private static final Set f41242p = new LinkedHashSet(Arrays.asList(qv.b.class, qv.i.class, qv.g.class, qv.j.class, x.class, qv.p.class, qv.m.class));

    /* renamed from: q  reason: collision with root package name */
    private static final Map f41243q;

    /* renamed from: a  reason: collision with root package name */
    private CharSequence f41244a;

    /* renamed from: d  reason: collision with root package name */
    private boolean f41247d;

    /* renamed from: h  reason: collision with root package name */
    private boolean f41251h;

    /* renamed from: i  reason: collision with root package name */
    private final List f41252i;

    /* renamed from: j  reason: collision with root package name */
    private final rv.c f41253j;

    /* renamed from: k  reason: collision with root package name */
    private final List f41254k;

    /* renamed from: l  reason: collision with root package name */
    private final g f41255l;

    /* renamed from: b  reason: collision with root package name */
    private int f41245b = 0;

    /* renamed from: c  reason: collision with root package name */
    private int f41246c = 0;

    /* renamed from: e  reason: collision with root package name */
    private int f41248e = 0;

    /* renamed from: f  reason: collision with root package name */
    private int f41249f = 0;

    /* renamed from: g  reason: collision with root package name */
    private int f41250g = 0;

    /* renamed from: m  reason: collision with root package name */
    private final Map f41256m = new LinkedHashMap();

    /* renamed from: n  reason: collision with root package name */
    private List f41257n = new ArrayList();

    /* renamed from: o  reason: collision with root package name */
    private Set f41258o = new LinkedHashSet();

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static class a implements sv.g {

        /* renamed from: a  reason: collision with root package name */
        private final sv.d f41259a;

        public a(sv.d dVar) {
            this.f41259a = dVar;
        }

        @Override // sv.g
        public CharSequence a() {
            sv.d dVar = this.f41259a;
            if (!(dVar instanceof r)) {
                return null;
            }
            CharSequence i10 = ((r) dVar).i();
            if (i10.length() == 0) {
                return null;
            }
            return i10;
        }

        @Override // sv.g
        public sv.d b() {
            return this.f41259a;
        }
    }

    static {
        HashMap hashMap = new HashMap();
        hashMap.put(qv.b.class, new c.a());
        hashMap.put(qv.i.class, new j.a());
        hashMap.put(qv.g.class, new i.a());
        hashMap.put(qv.j.class, new k.b());
        hashMap.put(x.class, new t.a());
        hashMap.put(qv.p.class, new p.a());
        hashMap.put(qv.m.class, new l.a());
        f41243q = Collections.unmodifiableMap(hashMap);
    }

    public h(List list, rv.c cVar, List list2) {
        this.f41252i = list;
        this.f41253j = cVar;
        this.f41254k = list2;
        g gVar = new g();
        this.f41255l = gVar;
        e(gVar);
    }

    private void e(sv.d dVar) {
        this.f41257n.add(dVar);
        this.f41258o.add(dVar);
    }

    private sv.d f(sv.d dVar) {
        while (!d().h(dVar.e())) {
            l(d());
        }
        d().e().b(dVar.e());
        e(dVar);
        return dVar;
    }

    private void g(r rVar) {
        for (qv.o oVar : rVar.j()) {
            rVar.e().i(oVar);
            String n10 = oVar.n();
            if (!this.f41256m.containsKey(n10)) {
                this.f41256m.put(n10, oVar);
            }
        }
    }

    private void h() {
        CharSequence subSequence;
        if (this.f41247d) {
            CharSequence charSequence = this.f41244a;
            CharSequence subSequence2 = charSequence.subSequence(this.f41245b + 1, charSequence.length());
            int a10 = pv.d.a(this.f41246c);
            StringBuilder sb2 = new StringBuilder(subSequence2.length() + a10);
            for (int i10 = 0; i10 < a10; i10++) {
                sb2.append(' ');
            }
            sb2.append(subSequence2);
            subSequence = sb2.toString();
        } else {
            CharSequence charSequence2 = this.f41244a;
            subSequence = charSequence2.subSequence(this.f41245b, charSequence2.length());
        }
        d().f(subSequence);
    }

    private void i() {
        if (this.f41244a.charAt(this.f41245b) == '\t') {
            this.f41245b++;
            int i10 = this.f41246c;
            this.f41246c = i10 + pv.d.a(i10);
            return;
        }
        this.f41245b++;
        this.f41246c++;
    }

    public static List j(List list, Set set) {
        ArrayList arrayList = new ArrayList();
        arrayList.addAll(list);
        Iterator it = set.iterator();
        while (it.hasNext()) {
            arrayList.add(f41243q.get((Class) it.next()));
        }
        return arrayList;
    }

    private void k() {
        List list = this.f41257n;
        list.remove(list.size() - 1);
    }

    private void l(sv.d dVar) {
        if (d() == dVar) {
            k();
        }
        if (dVar instanceof r) {
            g((r) dVar);
        }
        dVar.g();
    }

    private qv.e m() {
        n(this.f41257n);
        u();
        return this.f41255l.e();
    }

    private void n(List list) {
        for (int size = list.size() - 1; size >= 0; size--) {
            l((sv.d) list.get(size));
        }
    }

    private d o(sv.d dVar) {
        a aVar = new a(dVar);
        for (sv.e eVar : this.f41252i) {
            sv.f a10 = eVar.a(this, aVar);
            if (a10 instanceof d) {
                return (d) a10;
            }
        }
        return null;
    }

    private void p() {
        int i10 = this.f41245b;
        int i11 = this.f41246c;
        this.f41251h = true;
        int length = this.f41244a.length();
        while (true) {
            if (i10 >= length) {
                break;
            }
            char charAt = this.f41244a.charAt(i10);
            if (charAt != '\t') {
                if (charAt != ' ') {
                    this.f41251h = false;
                    break;
                } else {
                    i10++;
                    i11++;
                }
            } else {
                i10++;
                i11 += 4 - (i11 % 4);
            }
        }
        this.f41248e = i10;
        this.f41249f = i11;
        this.f41250g = i11 - this.f41246c;
    }

    public static Set q() {
        return f41242p;
    }

    /* JADX WARN: Code restructure failed: missing block: B:50:0x00f7, code lost:
        w(r10.f41248e);
     */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    private void r(java.lang.CharSequence r11) {
        /*
            Method dump skipped, instructions count: 307
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: nv.h.r(java.lang.CharSequence):void");
    }

    private void t() {
        sv.d d10 = d();
        k();
        this.f41258o.remove(d10);
        if (d10 instanceof r) {
            g((r) d10);
        }
        d10.e().l();
    }

    private void u() {
        rv.a a10 = this.f41253j.a(new m(this.f41254k, this.f41256m));
        for (sv.d dVar : this.f41258o) {
            dVar.b(a10);
        }
    }

    private void v(int i10) {
        int i11;
        int i12 = this.f41249f;
        if (i10 >= i12) {
            this.f41245b = this.f41248e;
            this.f41246c = i12;
        }
        int length = this.f41244a.length();
        while (true) {
            i11 = this.f41246c;
            if (i11 >= i10 || this.f41245b == length) {
                break;
            }
            i();
        }
        if (i11 > i10) {
            this.f41245b--;
            this.f41246c = i10;
            this.f41247d = true;
            return;
        }
        this.f41247d = false;
    }

    private void w(int i10) {
        int i11 = this.f41248e;
        if (i10 >= i11) {
            this.f41245b = i11;
            this.f41246c = this.f41249f;
        }
        int length = this.f41244a.length();
        while (true) {
            int i12 = this.f41245b;
            if (i12 >= i10 || i12 == length) {
                break;
            }
            i();
        }
        this.f41247d = false;
    }

    @Override // sv.h
    public int a() {
        return this.f41250g;
    }

    @Override // sv.h
    public boolean b() {
        return this.f41251h;
    }

    @Override // sv.h
    public int c() {
        return this.f41248e;
    }

    @Override // sv.h
    public sv.d d() {
        List list = this.f41257n;
        return (sv.d) list.get(list.size() - 1);
    }

    @Override // sv.h
    public int getColumn() {
        return this.f41246c;
    }

    @Override // sv.h
    public int getIndex() {
        return this.f41245b;
    }

    @Override // sv.h
    public CharSequence getLine() {
        return this.f41244a;
    }

    public qv.e s(String str) {
        int i10 = 0;
        while (true) {
            int c10 = pv.d.c(str, i10);
            if (c10 == -1) {
                break;
            }
            r(str.substring(i10, c10));
            i10 = c10 + 1;
            if (i10 < str.length() && str.charAt(c10) == '\r' && str.charAt(i10) == '\n') {
                i10 = c10 + 2;
            }
        }
        if (str.length() > 0 && (i10 == 0 || i10 < str.length())) {
            r(str.substring(i10));
        }
        return m();
    }
}
