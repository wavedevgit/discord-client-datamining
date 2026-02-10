package ov;

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
import ov.c;
import ov.i;
import ov.j;
import ov.k;
import ov.l;
import ov.p;
import ov.t;
import rv.x;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class h implements tv.h {

    /* renamed from: p  reason: collision with root package name */
    private static final Set f42770p = new LinkedHashSet(Arrays.asList(rv.b.class, rv.i.class, rv.g.class, rv.j.class, x.class, rv.p.class, rv.m.class));

    /* renamed from: q  reason: collision with root package name */
    private static final Map f42771q;

    /* renamed from: a  reason: collision with root package name */
    private CharSequence f42772a;

    /* renamed from: d  reason: collision with root package name */
    private boolean f42775d;

    /* renamed from: h  reason: collision with root package name */
    private boolean f42779h;

    /* renamed from: i  reason: collision with root package name */
    private final List f42780i;

    /* renamed from: j  reason: collision with root package name */
    private final sv.c f42781j;

    /* renamed from: k  reason: collision with root package name */
    private final List f42782k;

    /* renamed from: l  reason: collision with root package name */
    private final g f42783l;

    /* renamed from: b  reason: collision with root package name */
    private int f42773b = 0;

    /* renamed from: c  reason: collision with root package name */
    private int f42774c = 0;

    /* renamed from: e  reason: collision with root package name */
    private int f42776e = 0;

    /* renamed from: f  reason: collision with root package name */
    private int f42777f = 0;

    /* renamed from: g  reason: collision with root package name */
    private int f42778g = 0;

    /* renamed from: m  reason: collision with root package name */
    private final Map f42784m = new LinkedHashMap();

    /* renamed from: n  reason: collision with root package name */
    private List f42785n = new ArrayList();

    /* renamed from: o  reason: collision with root package name */
    private Set f42786o = new LinkedHashSet();

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static class a implements tv.g {

        /* renamed from: a  reason: collision with root package name */
        private final tv.d f42787a;

        public a(tv.d dVar) {
            this.f42787a = dVar;
        }

        @Override // tv.g
        public CharSequence a() {
            tv.d dVar = this.f42787a;
            if (!(dVar instanceof r)) {
                return null;
            }
            CharSequence i10 = ((r) dVar).i();
            if (i10.length() == 0) {
                return null;
            }
            return i10;
        }

        @Override // tv.g
        public tv.d b() {
            return this.f42787a;
        }
    }

    static {
        HashMap hashMap = new HashMap();
        hashMap.put(rv.b.class, new c.a());
        hashMap.put(rv.i.class, new j.a());
        hashMap.put(rv.g.class, new i.a());
        hashMap.put(rv.j.class, new k.b());
        hashMap.put(x.class, new t.a());
        hashMap.put(rv.p.class, new p.a());
        hashMap.put(rv.m.class, new l.a());
        f42771q = Collections.unmodifiableMap(hashMap);
    }

    public h(List list, sv.c cVar, List list2) {
        this.f42780i = list;
        this.f42781j = cVar;
        this.f42782k = list2;
        g gVar = new g();
        this.f42783l = gVar;
        e(gVar);
    }

    private void e(tv.d dVar) {
        this.f42785n.add(dVar);
        this.f42786o.add(dVar);
    }

    private tv.d f(tv.d dVar) {
        while (!d().c(dVar.f())) {
            l(d());
        }
        d().f().b(dVar.f());
        e(dVar);
        return dVar;
    }

    private void g(r rVar) {
        for (rv.o oVar : rVar.j()) {
            rVar.f().i(oVar);
            String n10 = oVar.n();
            if (!this.f42784m.containsKey(n10)) {
                this.f42784m.put(n10, oVar);
            }
        }
    }

    private void h() {
        CharSequence subSequence;
        if (this.f42775d) {
            CharSequence charSequence = this.f42772a;
            CharSequence subSequence2 = charSequence.subSequence(this.f42773b + 1, charSequence.length());
            int a10 = qv.d.a(this.f42774c);
            StringBuilder sb2 = new StringBuilder(subSequence2.length() + a10);
            for (int i10 = 0; i10 < a10; i10++) {
                sb2.append(' ');
            }
            sb2.append(subSequence2);
            subSequence = sb2.toString();
        } else {
            CharSequence charSequence2 = this.f42772a;
            subSequence = charSequence2.subSequence(this.f42773b, charSequence2.length());
        }
        d().g(subSequence);
    }

    private void i() {
        if (this.f42772a.charAt(this.f42773b) == '\t') {
            this.f42773b++;
            int i10 = this.f42774c;
            this.f42774c = i10 + qv.d.a(i10);
            return;
        }
        this.f42773b++;
        this.f42774c++;
    }

    public static List j(List list, Set set) {
        ArrayList arrayList = new ArrayList();
        arrayList.addAll(list);
        Iterator it = set.iterator();
        while (it.hasNext()) {
            arrayList.add(f42771q.get((Class) it.next()));
        }
        return arrayList;
    }

    private void k() {
        List list = this.f42785n;
        list.remove(list.size() - 1);
    }

    private void l(tv.d dVar) {
        if (d() == dVar) {
            k();
        }
        if (dVar instanceof r) {
            g((r) dVar);
        }
        dVar.h();
    }

    private rv.e m() {
        n(this.f42785n);
        u();
        return this.f42783l.f();
    }

    private void n(List list) {
        for (int size = list.size() - 1; size >= 0; size--) {
            l((tv.d) list.get(size));
        }
    }

    private d o(tv.d dVar) {
        a aVar = new a(dVar);
        for (tv.e eVar : this.f42780i) {
            tv.f a10 = eVar.a(this, aVar);
            if (a10 instanceof d) {
                return (d) a10;
            }
        }
        return null;
    }

    private void p() {
        int i10 = this.f42773b;
        int i11 = this.f42774c;
        this.f42779h = true;
        int length = this.f42772a.length();
        while (true) {
            if (i10 >= length) {
                break;
            }
            char charAt = this.f42772a.charAt(i10);
            if (charAt != '\t') {
                if (charAt != ' ') {
                    this.f42779h = false;
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
        this.f42776e = i10;
        this.f42777f = i11;
        this.f42778g = i11 - this.f42774c;
    }

    public static Set q() {
        return f42770p;
    }

    /* JADX WARN: Code restructure failed: missing block: B:50:0x00f7, code lost:
        w(r10.f42776e);
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
        throw new UnsupportedOperationException("Method not decompiled: ov.h.r(java.lang.CharSequence):void");
    }

    private void t() {
        tv.d d10 = d();
        k();
        this.f42786o.remove(d10);
        if (d10 instanceof r) {
            g((r) d10);
        }
        d10.f().l();
    }

    private void u() {
        sv.a a10 = this.f42781j.a(new m(this.f42782k, this.f42784m));
        for (tv.d dVar : this.f42786o) {
            dVar.e(a10);
        }
    }

    private void v(int i10) {
        int i11;
        int i12 = this.f42777f;
        if (i10 >= i12) {
            this.f42773b = this.f42776e;
            this.f42774c = i12;
        }
        int length = this.f42772a.length();
        while (true) {
            i11 = this.f42774c;
            if (i11 >= i10 || this.f42773b == length) {
                break;
            }
            i();
        }
        if (i11 > i10) {
            this.f42773b--;
            this.f42774c = i10;
            this.f42775d = true;
            return;
        }
        this.f42775d = false;
    }

    private void w(int i10) {
        int i11 = this.f42776e;
        if (i10 >= i11) {
            this.f42773b = i11;
            this.f42774c = this.f42777f;
        }
        int length = this.f42772a.length();
        while (true) {
            int i12 = this.f42773b;
            if (i12 >= i10 || i12 == length) {
                break;
            }
            i();
        }
        this.f42775d = false;
    }

    @Override // tv.h
    public int a() {
        return this.f42778g;
    }

    @Override // tv.h
    public boolean b() {
        return this.f42779h;
    }

    @Override // tv.h
    public int c() {
        return this.f42776e;
    }

    @Override // tv.h
    public tv.d d() {
        List list = this.f42785n;
        return (tv.d) list.get(list.size() - 1);
    }

    @Override // tv.h
    public int getColumn() {
        return this.f42774c;
    }

    @Override // tv.h
    public int getIndex() {
        return this.f42773b;
    }

    @Override // tv.h
    public CharSequence getLine() {
        return this.f42772a;
    }

    public rv.e s(String str) {
        int i10 = 0;
        while (true) {
            int c10 = qv.d.c(str, i10);
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
