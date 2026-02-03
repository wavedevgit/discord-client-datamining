package bv;

import bv.c;
import bv.i;
import bv.j;
import bv.k;
import bv.l;
import bv.p;
import bv.t;
import ev.x;
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
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class h implements gv.h {

    /* renamed from: p  reason: collision with root package name */
    private static final Set f7795p = new LinkedHashSet(Arrays.asList(ev.b.class, ev.i.class, ev.g.class, ev.j.class, x.class, ev.p.class, ev.m.class));

    /* renamed from: q  reason: collision with root package name */
    private static final Map f7796q;

    /* renamed from: a  reason: collision with root package name */
    private CharSequence f7797a;

    /* renamed from: d  reason: collision with root package name */
    private boolean f7800d;

    /* renamed from: h  reason: collision with root package name */
    private boolean f7804h;

    /* renamed from: i  reason: collision with root package name */
    private final List f7805i;

    /* renamed from: j  reason: collision with root package name */
    private final fv.c f7806j;

    /* renamed from: k  reason: collision with root package name */
    private final List f7807k;

    /* renamed from: l  reason: collision with root package name */
    private final g f7808l;

    /* renamed from: b  reason: collision with root package name */
    private int f7798b = 0;

    /* renamed from: c  reason: collision with root package name */
    private int f7799c = 0;

    /* renamed from: e  reason: collision with root package name */
    private int f7801e = 0;

    /* renamed from: f  reason: collision with root package name */
    private int f7802f = 0;

    /* renamed from: g  reason: collision with root package name */
    private int f7803g = 0;

    /* renamed from: m  reason: collision with root package name */
    private final Map f7809m = new LinkedHashMap();

    /* renamed from: n  reason: collision with root package name */
    private List f7810n = new ArrayList();

    /* renamed from: o  reason: collision with root package name */
    private Set f7811o = new LinkedHashSet();

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static class a implements gv.g {

        /* renamed from: a  reason: collision with root package name */
        private final gv.d f7812a;

        public a(gv.d dVar) {
            this.f7812a = dVar;
        }

        @Override // gv.g
        public CharSequence a() {
            gv.d dVar = this.f7812a;
            if (!(dVar instanceof r)) {
                return null;
            }
            CharSequence i10 = ((r) dVar).i();
            if (i10.length() == 0) {
                return null;
            }
            return i10;
        }

        @Override // gv.g
        public gv.d b() {
            return this.f7812a;
        }
    }

    static {
        HashMap hashMap = new HashMap();
        hashMap.put(ev.b.class, new c.a());
        hashMap.put(ev.i.class, new j.a());
        hashMap.put(ev.g.class, new i.a());
        hashMap.put(ev.j.class, new k.b());
        hashMap.put(x.class, new t.a());
        hashMap.put(ev.p.class, new p.a());
        hashMap.put(ev.m.class, new l.a());
        f7796q = Collections.unmodifiableMap(hashMap);
    }

    public h(List list, fv.c cVar, List list2) {
        this.f7805i = list;
        this.f7806j = cVar;
        this.f7807k = list2;
        g gVar = new g();
        this.f7808l = gVar;
        e(gVar);
    }

    private void e(gv.d dVar) {
        this.f7810n.add(dVar);
        this.f7811o.add(dVar);
    }

    private gv.d f(gv.d dVar) {
        while (!d().h(dVar.d())) {
            l(d());
        }
        d().d().b(dVar.d());
        e(dVar);
        return dVar;
    }

    private void g(r rVar) {
        for (ev.o oVar : rVar.j()) {
            rVar.d().i(oVar);
            String n10 = oVar.n();
            if (!this.f7809m.containsKey(n10)) {
                this.f7809m.put(n10, oVar);
            }
        }
    }

    private void h() {
        CharSequence subSequence;
        if (this.f7800d) {
            CharSequence charSequence = this.f7797a;
            CharSequence subSequence2 = charSequence.subSequence(this.f7798b + 1, charSequence.length());
            int a10 = dv.d.a(this.f7799c);
            StringBuilder sb2 = new StringBuilder(subSequence2.length() + a10);
            for (int i10 = 0; i10 < a10; i10++) {
                sb2.append(' ');
            }
            sb2.append(subSequence2);
            subSequence = sb2.toString();
        } else {
            CharSequence charSequence2 = this.f7797a;
            subSequence = charSequence2.subSequence(this.f7798b, charSequence2.length());
        }
        d().e(subSequence);
    }

    private void i() {
        if (this.f7797a.charAt(this.f7798b) == '\t') {
            this.f7798b++;
            int i10 = this.f7799c;
            this.f7799c = i10 + dv.d.a(i10);
            return;
        }
        this.f7798b++;
        this.f7799c++;
    }

    public static List j(List list, Set set) {
        ArrayList arrayList = new ArrayList();
        arrayList.addAll(list);
        Iterator it = set.iterator();
        while (it.hasNext()) {
            arrayList.add(f7796q.get((Class) it.next()));
        }
        return arrayList;
    }

    private void k() {
        List list = this.f7810n;
        list.remove(list.size() - 1);
    }

    private void l(gv.d dVar) {
        if (d() == dVar) {
            k();
        }
        if (dVar instanceof r) {
            g((r) dVar);
        }
        dVar.g();
    }

    private ev.e m() {
        n(this.f7810n);
        u();
        return this.f7808l.d();
    }

    private void n(List list) {
        for (int size = list.size() - 1; size >= 0; size--) {
            l((gv.d) list.get(size));
        }
    }

    private d o(gv.d dVar) {
        a aVar = new a(dVar);
        for (gv.e eVar : this.f7805i) {
            gv.f a10 = eVar.a(this, aVar);
            if (a10 instanceof d) {
                return (d) a10;
            }
        }
        return null;
    }

    private void p() {
        int i10 = this.f7798b;
        int i11 = this.f7799c;
        this.f7804h = true;
        int length = this.f7797a.length();
        while (true) {
            if (i10 >= length) {
                break;
            }
            char charAt = this.f7797a.charAt(i10);
            if (charAt != '\t') {
                if (charAt != ' ') {
                    this.f7804h = false;
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
        this.f7801e = i10;
        this.f7802f = i11;
        this.f7803g = i11 - this.f7799c;
    }

    public static Set q() {
        return f7795p;
    }

    /* JADX WARN: Code restructure failed: missing block: B:50:0x00f7, code lost:
        w(r10.f7801e);
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
        throw new UnsupportedOperationException("Method not decompiled: bv.h.r(java.lang.CharSequence):void");
    }

    private void t() {
        gv.d d10 = d();
        k();
        this.f7811o.remove(d10);
        if (d10 instanceof r) {
            g((r) d10);
        }
        d10.d().l();
    }

    private void u() {
        fv.a a10 = this.f7806j.a(new m(this.f7807k, this.f7809m));
        for (gv.d dVar : this.f7811o) {
            dVar.f(a10);
        }
    }

    private void v(int i10) {
        int i11;
        int i12 = this.f7802f;
        if (i10 >= i12) {
            this.f7798b = this.f7801e;
            this.f7799c = i12;
        }
        int length = this.f7797a.length();
        while (true) {
            i11 = this.f7799c;
            if (i11 >= i10 || this.f7798b == length) {
                break;
            }
            i();
        }
        if (i11 > i10) {
            this.f7798b--;
            this.f7799c = i10;
            this.f7800d = true;
            return;
        }
        this.f7800d = false;
    }

    private void w(int i10) {
        int i11 = this.f7801e;
        if (i10 >= i11) {
            this.f7798b = i11;
            this.f7799c = this.f7802f;
        }
        int length = this.f7797a.length();
        while (true) {
            int i12 = this.f7798b;
            if (i12 >= i10 || i12 == length) {
                break;
            }
            i();
        }
        this.f7800d = false;
    }

    @Override // gv.h
    public int a() {
        return this.f7803g;
    }

    @Override // gv.h
    public boolean b() {
        return this.f7804h;
    }

    @Override // gv.h
    public int c() {
        return this.f7801e;
    }

    @Override // gv.h
    public gv.d d() {
        List list = this.f7810n;
        return (gv.d) list.get(list.size() - 1);
    }

    @Override // gv.h
    public int getColumn() {
        return this.f7799c;
    }

    @Override // gv.h
    public int getIndex() {
        return this.f7798b;
    }

    @Override // gv.h
    public CharSequence getLine() {
        return this.f7797a;
    }

    public ev.e s(String str) {
        int i10 = 0;
        while (true) {
            int c10 = dv.d.c(str, i10);
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
