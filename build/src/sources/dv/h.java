package dv;

import dv.c;
import dv.i;
import dv.j;
import dv.k;
import dv.l;
import dv.p;
import dv.t;
import gv.x;
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
public class h implements iv.h {

    /* renamed from: p  reason: collision with root package name */
    private static final Set f21111p = new LinkedHashSet(Arrays.asList(gv.b.class, gv.i.class, gv.g.class, gv.j.class, x.class, gv.p.class, gv.m.class));

    /* renamed from: q  reason: collision with root package name */
    private static final Map f21112q;

    /* renamed from: a  reason: collision with root package name */
    private CharSequence f21113a;

    /* renamed from: d  reason: collision with root package name */
    private boolean f21116d;

    /* renamed from: h  reason: collision with root package name */
    private boolean f21120h;

    /* renamed from: i  reason: collision with root package name */
    private final List f21121i;

    /* renamed from: j  reason: collision with root package name */
    private final hv.c f21122j;

    /* renamed from: k  reason: collision with root package name */
    private final List f21123k;

    /* renamed from: l  reason: collision with root package name */
    private final g f21124l;

    /* renamed from: b  reason: collision with root package name */
    private int f21114b = 0;

    /* renamed from: c  reason: collision with root package name */
    private int f21115c = 0;

    /* renamed from: e  reason: collision with root package name */
    private int f21117e = 0;

    /* renamed from: f  reason: collision with root package name */
    private int f21118f = 0;

    /* renamed from: g  reason: collision with root package name */
    private int f21119g = 0;

    /* renamed from: m  reason: collision with root package name */
    private final Map f21125m = new LinkedHashMap();

    /* renamed from: n  reason: collision with root package name */
    private List f21126n = new ArrayList();

    /* renamed from: o  reason: collision with root package name */
    private Set f21127o = new LinkedHashSet();

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static class a implements iv.g {

        /* renamed from: a  reason: collision with root package name */
        private final iv.d f21128a;

        public a(iv.d dVar) {
            this.f21128a = dVar;
        }

        @Override // iv.g
        public CharSequence a() {
            iv.d dVar = this.f21128a;
            if (!(dVar instanceof r)) {
                return null;
            }
            CharSequence i10 = ((r) dVar).i();
            if (i10.length() == 0) {
                return null;
            }
            return i10;
        }

        @Override // iv.g
        public iv.d b() {
            return this.f21128a;
        }
    }

    static {
        HashMap hashMap = new HashMap();
        hashMap.put(gv.b.class, new c.a());
        hashMap.put(gv.i.class, new j.a());
        hashMap.put(gv.g.class, new i.a());
        hashMap.put(gv.j.class, new k.b());
        hashMap.put(x.class, new t.a());
        hashMap.put(gv.p.class, new p.a());
        hashMap.put(gv.m.class, new l.a());
        f21112q = Collections.unmodifiableMap(hashMap);
    }

    public h(List list, hv.c cVar, List list2) {
        this.f21121i = list;
        this.f21122j = cVar;
        this.f21123k = list2;
        g gVar = new g();
        this.f21124l = gVar;
        e(gVar);
    }

    private void e(iv.d dVar) {
        this.f21126n.add(dVar);
        this.f21127o.add(dVar);
    }

    private iv.d f(iv.d dVar) {
        while (!d().h(dVar.d())) {
            l(d());
        }
        d().d().b(dVar.d());
        e(dVar);
        return dVar;
    }

    private void g(r rVar) {
        for (gv.o oVar : rVar.j()) {
            rVar.d().i(oVar);
            String n10 = oVar.n();
            if (!this.f21125m.containsKey(n10)) {
                this.f21125m.put(n10, oVar);
            }
        }
    }

    private void h() {
        CharSequence subSequence;
        if (this.f21116d) {
            CharSequence charSequence = this.f21113a;
            CharSequence subSequence2 = charSequence.subSequence(this.f21114b + 1, charSequence.length());
            int a10 = fv.d.a(this.f21115c);
            StringBuilder sb2 = new StringBuilder(subSequence2.length() + a10);
            for (int i10 = 0; i10 < a10; i10++) {
                sb2.append(' ');
            }
            sb2.append(subSequence2);
            subSequence = sb2.toString();
        } else {
            CharSequence charSequence2 = this.f21113a;
            subSequence = charSequence2.subSequence(this.f21114b, charSequence2.length());
        }
        d().e(subSequence);
    }

    private void i() {
        if (this.f21113a.charAt(this.f21114b) == '\t') {
            this.f21114b++;
            int i10 = this.f21115c;
            this.f21115c = i10 + fv.d.a(i10);
            return;
        }
        this.f21114b++;
        this.f21115c++;
    }

    public static List j(List list, Set set) {
        ArrayList arrayList = new ArrayList();
        arrayList.addAll(list);
        Iterator it = set.iterator();
        while (it.hasNext()) {
            arrayList.add(f21112q.get((Class) it.next()));
        }
        return arrayList;
    }

    private void k() {
        List list = this.f21126n;
        list.remove(list.size() - 1);
    }

    private void l(iv.d dVar) {
        if (d() == dVar) {
            k();
        }
        if (dVar instanceof r) {
            g((r) dVar);
        }
        dVar.f();
    }

    private gv.e m() {
        n(this.f21126n);
        u();
        return this.f21124l.d();
    }

    private void n(List list) {
        for (int size = list.size() - 1; size >= 0; size--) {
            l((iv.d) list.get(size));
        }
    }

    private d o(iv.d dVar) {
        a aVar = new a(dVar);
        for (iv.e eVar : this.f21121i) {
            iv.f a10 = eVar.a(this, aVar);
            if (a10 instanceof d) {
                return (d) a10;
            }
        }
        return null;
    }

    private void p() {
        int i10 = this.f21114b;
        int i11 = this.f21115c;
        this.f21120h = true;
        int length = this.f21113a.length();
        while (true) {
            if (i10 >= length) {
                break;
            }
            char charAt = this.f21113a.charAt(i10);
            if (charAt != '\t') {
                if (charAt != ' ') {
                    this.f21120h = false;
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
        this.f21117e = i10;
        this.f21118f = i11;
        this.f21119g = i11 - this.f21115c;
    }

    public static Set q() {
        return f21111p;
    }

    /* JADX WARN: Code restructure failed: missing block: B:50:0x00f7, code lost:
        w(r10.f21117e);
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
        throw new UnsupportedOperationException("Method not decompiled: dv.h.r(java.lang.CharSequence):void");
    }

    private void t() {
        iv.d d10 = d();
        k();
        this.f21127o.remove(d10);
        if (d10 instanceof r) {
            g((r) d10);
        }
        d10.d().l();
    }

    private void u() {
        hv.a a10 = this.f21122j.a(new m(this.f21123k, this.f21125m));
        for (iv.d dVar : this.f21127o) {
            dVar.a(a10);
        }
    }

    private void v(int i10) {
        int i11;
        int i12 = this.f21118f;
        if (i10 >= i12) {
            this.f21114b = this.f21117e;
            this.f21115c = i12;
        }
        int length = this.f21113a.length();
        while (true) {
            i11 = this.f21115c;
            if (i11 >= i10 || this.f21114b == length) {
                break;
            }
            i();
        }
        if (i11 > i10) {
            this.f21114b--;
            this.f21115c = i10;
            this.f21116d = true;
            return;
        }
        this.f21116d = false;
    }

    private void w(int i10) {
        int i11 = this.f21117e;
        if (i10 >= i11) {
            this.f21114b = i11;
            this.f21115c = this.f21118f;
        }
        int length = this.f21113a.length();
        while (true) {
            int i12 = this.f21114b;
            if (i12 >= i10 || i12 == length) {
                break;
            }
            i();
        }
        this.f21116d = false;
    }

    @Override // iv.h
    public int a() {
        return this.f21119g;
    }

    @Override // iv.h
    public boolean b() {
        return this.f21120h;
    }

    @Override // iv.h
    public int c() {
        return this.f21117e;
    }

    @Override // iv.h
    public iv.d d() {
        List list = this.f21126n;
        return (iv.d) list.get(list.size() - 1);
    }

    @Override // iv.h
    public int getColumn() {
        return this.f21115c;
    }

    @Override // iv.h
    public int getIndex() {
        return this.f21114b;
    }

    @Override // iv.h
    public CharSequence getLine() {
        return this.f21113a;
    }

    public gv.e s(String str) {
        int i10 = 0;
        while (true) {
            int c10 = fv.d.c(str, i10);
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
