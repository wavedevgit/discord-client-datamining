package xv;

import aw.x;
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
import xv.c;
import xv.i;
import xv.j;
import xv.k;
import xv.l;
import xv.p;
import xv.t;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class h implements cw.h {

    /* renamed from: p  reason: collision with root package name */
    private static final Set f55193p = new LinkedHashSet(Arrays.asList(aw.b.class, aw.i.class, aw.g.class, aw.j.class, x.class, aw.p.class, aw.m.class));

    /* renamed from: q  reason: collision with root package name */
    private static final Map f55194q;

    /* renamed from: a  reason: collision with root package name */
    private CharSequence f55195a;

    /* renamed from: d  reason: collision with root package name */
    private boolean f55198d;

    /* renamed from: h  reason: collision with root package name */
    private boolean f55202h;

    /* renamed from: i  reason: collision with root package name */
    private final List f55203i;

    /* renamed from: j  reason: collision with root package name */
    private final bw.c f55204j;

    /* renamed from: k  reason: collision with root package name */
    private final List f55205k;

    /* renamed from: l  reason: collision with root package name */
    private final g f55206l;

    /* renamed from: b  reason: collision with root package name */
    private int f55196b = 0;

    /* renamed from: c  reason: collision with root package name */
    private int f55197c = 0;

    /* renamed from: e  reason: collision with root package name */
    private int f55199e = 0;

    /* renamed from: f  reason: collision with root package name */
    private int f55200f = 0;

    /* renamed from: g  reason: collision with root package name */
    private int f55201g = 0;

    /* renamed from: m  reason: collision with root package name */
    private final Map f55207m = new LinkedHashMap();

    /* renamed from: n  reason: collision with root package name */
    private List f55208n = new ArrayList();

    /* renamed from: o  reason: collision with root package name */
    private Set f55209o = new LinkedHashSet();

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static class a implements cw.g {

        /* renamed from: a  reason: collision with root package name */
        private final cw.d f55210a;

        public a(cw.d dVar) {
            this.f55210a = dVar;
        }

        @Override // cw.g
        public CharSequence a() {
            cw.d dVar = this.f55210a;
            if (!(dVar instanceof r)) {
                return null;
            }
            CharSequence i10 = ((r) dVar).i();
            if (i10.length() == 0) {
                return null;
            }
            return i10;
        }

        @Override // cw.g
        public cw.d b() {
            return this.f55210a;
        }
    }

    static {
        HashMap hashMap = new HashMap();
        hashMap.put(aw.b.class, new c.a());
        hashMap.put(aw.i.class, new j.a());
        hashMap.put(aw.g.class, new i.a());
        hashMap.put(aw.j.class, new k.b());
        hashMap.put(x.class, new t.a());
        hashMap.put(aw.p.class, new p.a());
        hashMap.put(aw.m.class, new l.a());
        f55194q = Collections.unmodifiableMap(hashMap);
    }

    public h(List list, bw.c cVar, List list2) {
        this.f55203i = list;
        this.f55204j = cVar;
        this.f55205k = list2;
        g gVar = new g();
        this.f55206l = gVar;
        e(gVar);
    }

    private void e(cw.d dVar) {
        this.f55208n.add(dVar);
        this.f55209o.add(dVar);
    }

    private cw.d f(cw.d dVar) {
        while (!d().a(dVar.d())) {
            l(d());
        }
        d().d().b(dVar.d());
        e(dVar);
        return dVar;
    }

    private void g(r rVar) {
        for (aw.o oVar : rVar.j()) {
            rVar.d().i(oVar);
            String n10 = oVar.n();
            if (!this.f55207m.containsKey(n10)) {
                this.f55207m.put(n10, oVar);
            }
        }
    }

    private void h() {
        CharSequence subSequence;
        if (this.f55198d) {
            CharSequence charSequence = this.f55195a;
            CharSequence subSequence2 = charSequence.subSequence(this.f55196b + 1, charSequence.length());
            int a10 = zv.d.a(this.f55197c);
            StringBuilder sb2 = new StringBuilder(subSequence2.length() + a10);
            for (int i10 = 0; i10 < a10; i10++) {
                sb2.append(' ');
            }
            sb2.append(subSequence2);
            subSequence = sb2.toString();
        } else {
            CharSequence charSequence2 = this.f55195a;
            subSequence = charSequence2.subSequence(this.f55196b, charSequence2.length());
        }
        d().e(subSequence);
    }

    private void i() {
        if (this.f55195a.charAt(this.f55196b) == '\t') {
            this.f55196b++;
            int i10 = this.f55197c;
            this.f55197c = i10 + zv.d.a(i10);
            return;
        }
        this.f55196b++;
        this.f55197c++;
    }

    public static List j(List list, Set set) {
        ArrayList arrayList = new ArrayList();
        arrayList.addAll(list);
        Iterator it = set.iterator();
        while (it.hasNext()) {
            arrayList.add(f55194q.get((Class) it.next()));
        }
        return arrayList;
    }

    private void k() {
        List list = this.f55208n;
        list.remove(list.size() - 1);
    }

    private void l(cw.d dVar) {
        if (d() == dVar) {
            k();
        }
        if (dVar instanceof r) {
            g((r) dVar);
        }
        dVar.f();
    }

    private aw.e m() {
        n(this.f55208n);
        u();
        return this.f55206l.d();
    }

    private void n(List list) {
        for (int size = list.size() - 1; size >= 0; size--) {
            l((cw.d) list.get(size));
        }
    }

    private d o(cw.d dVar) {
        a aVar = new a(dVar);
        for (cw.e eVar : this.f55203i) {
            cw.f a10 = eVar.a(this, aVar);
            if (a10 instanceof d) {
                return (d) a10;
            }
        }
        return null;
    }

    private void p() {
        int i10 = this.f55196b;
        int i11 = this.f55197c;
        this.f55202h = true;
        int length = this.f55195a.length();
        while (true) {
            if (i10 >= length) {
                break;
            }
            char charAt = this.f55195a.charAt(i10);
            if (charAt != '\t') {
                if (charAt != ' ') {
                    this.f55202h = false;
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
        this.f55199e = i10;
        this.f55200f = i11;
        this.f55201g = i11 - this.f55197c;
    }

    public static Set q() {
        return f55193p;
    }

    /* JADX WARN: Code restructure failed: missing block: B:50:0x00f7, code lost:
        w(r10.f55199e);
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
        throw new UnsupportedOperationException("Method not decompiled: xv.h.r(java.lang.CharSequence):void");
    }

    private void t() {
        cw.d d10 = d();
        k();
        this.f55209o.remove(d10);
        if (d10 instanceof r) {
            g((r) d10);
        }
        d10.d().l();
    }

    private void u() {
        bw.a a10 = this.f55204j.a(new m(this.f55205k, this.f55207m));
        for (cw.d dVar : this.f55209o) {
            dVar.h(a10);
        }
    }

    private void v(int i10) {
        int i11;
        int i12 = this.f55200f;
        if (i10 >= i12) {
            this.f55196b = this.f55199e;
            this.f55197c = i12;
        }
        int length = this.f55195a.length();
        while (true) {
            i11 = this.f55197c;
            if (i11 >= i10 || this.f55196b == length) {
                break;
            }
            i();
        }
        if (i11 > i10) {
            this.f55196b--;
            this.f55197c = i10;
            this.f55198d = true;
            return;
        }
        this.f55198d = false;
    }

    private void w(int i10) {
        int i11 = this.f55199e;
        if (i10 >= i11) {
            this.f55196b = i11;
            this.f55197c = this.f55200f;
        }
        int length = this.f55195a.length();
        while (true) {
            int i12 = this.f55196b;
            if (i12 >= i10 || i12 == length) {
                break;
            }
            i();
        }
        this.f55198d = false;
    }

    @Override // cw.h
    public int a() {
        return this.f55201g;
    }

    @Override // cw.h
    public boolean b() {
        return this.f55202h;
    }

    @Override // cw.h
    public int c() {
        return this.f55199e;
    }

    @Override // cw.h
    public cw.d d() {
        List list = this.f55208n;
        return (cw.d) list.get(list.size() - 1);
    }

    @Override // cw.h
    public int getColumn() {
        return this.f55197c;
    }

    @Override // cw.h
    public int getIndex() {
        return this.f55196b;
    }

    @Override // cw.h
    public CharSequence getLine() {
        return this.f55195a;
    }

    public aw.e s(String str) {
        int i10 = 0;
        while (true) {
            int c10 = zv.d.c(str, i10);
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
