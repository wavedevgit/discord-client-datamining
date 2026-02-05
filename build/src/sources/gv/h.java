package gv;

import gv.c;
import gv.i;
import gv.j;
import gv.k;
import gv.l;
import gv.p;
import gv.t;
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
import jv.x;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class h implements lv.h {

    /* renamed from: p  reason: collision with root package name */
    private static final Set f25435p = new LinkedHashSet(Arrays.asList(jv.b.class, jv.i.class, jv.g.class, jv.j.class, x.class, jv.p.class, jv.m.class));

    /* renamed from: q  reason: collision with root package name */
    private static final Map f25436q;

    /* renamed from: a  reason: collision with root package name */
    private CharSequence f25437a;

    /* renamed from: d  reason: collision with root package name */
    private boolean f25440d;

    /* renamed from: h  reason: collision with root package name */
    private boolean f25444h;

    /* renamed from: i  reason: collision with root package name */
    private final List f25445i;

    /* renamed from: j  reason: collision with root package name */
    private final kv.c f25446j;

    /* renamed from: k  reason: collision with root package name */
    private final List f25447k;

    /* renamed from: l  reason: collision with root package name */
    private final g f25448l;

    /* renamed from: b  reason: collision with root package name */
    private int f25438b = 0;

    /* renamed from: c  reason: collision with root package name */
    private int f25439c = 0;

    /* renamed from: e  reason: collision with root package name */
    private int f25441e = 0;

    /* renamed from: f  reason: collision with root package name */
    private int f25442f = 0;

    /* renamed from: g  reason: collision with root package name */
    private int f25443g = 0;

    /* renamed from: m  reason: collision with root package name */
    private final Map f25449m = new LinkedHashMap();

    /* renamed from: n  reason: collision with root package name */
    private List f25450n = new ArrayList();

    /* renamed from: o  reason: collision with root package name */
    private Set f25451o = new LinkedHashSet();

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static class a implements lv.g {

        /* renamed from: a  reason: collision with root package name */
        private final lv.d f25452a;

        public a(lv.d dVar) {
            this.f25452a = dVar;
        }

        @Override // lv.g
        public CharSequence a() {
            lv.d dVar = this.f25452a;
            if (!(dVar instanceof r)) {
                return null;
            }
            CharSequence i10 = ((r) dVar).i();
            if (i10.length() == 0) {
                return null;
            }
            return i10;
        }

        @Override // lv.g
        public lv.d b() {
            return this.f25452a;
        }
    }

    static {
        HashMap hashMap = new HashMap();
        hashMap.put(jv.b.class, new c.a());
        hashMap.put(jv.i.class, new j.a());
        hashMap.put(jv.g.class, new i.a());
        hashMap.put(jv.j.class, new k.b());
        hashMap.put(x.class, new t.a());
        hashMap.put(jv.p.class, new p.a());
        hashMap.put(jv.m.class, new l.a());
        f25436q = Collections.unmodifiableMap(hashMap);
    }

    public h(List list, kv.c cVar, List list2) {
        this.f25445i = list;
        this.f25446j = cVar;
        this.f25447k = list2;
        g gVar = new g();
        this.f25448l = gVar;
        e(gVar);
    }

    private void e(lv.d dVar) {
        this.f25450n.add(dVar);
        this.f25451o.add(dVar);
    }

    private lv.d f(lv.d dVar) {
        while (!d().h(dVar.c())) {
            l(d());
        }
        d().c().b(dVar.c());
        e(dVar);
        return dVar;
    }

    private void g(r rVar) {
        for (jv.o oVar : rVar.j()) {
            rVar.c().i(oVar);
            String n10 = oVar.n();
            if (!this.f25449m.containsKey(n10)) {
                this.f25449m.put(n10, oVar);
            }
        }
    }

    private void h() {
        CharSequence subSequence;
        if (this.f25440d) {
            CharSequence charSequence = this.f25437a;
            CharSequence subSequence2 = charSequence.subSequence(this.f25438b + 1, charSequence.length());
            int a10 = iv.d.a(this.f25439c);
            StringBuilder sb2 = new StringBuilder(subSequence2.length() + a10);
            for (int i10 = 0; i10 < a10; i10++) {
                sb2.append(' ');
            }
            sb2.append(subSequence2);
            subSequence = sb2.toString();
        } else {
            CharSequence charSequence2 = this.f25437a;
            subSequence = charSequence2.subSequence(this.f25438b, charSequence2.length());
        }
        d().e(subSequence);
    }

    private void i() {
        if (this.f25437a.charAt(this.f25438b) == '\t') {
            this.f25438b++;
            int i10 = this.f25439c;
            this.f25439c = i10 + iv.d.a(i10);
            return;
        }
        this.f25438b++;
        this.f25439c++;
    }

    public static List j(List list, Set set) {
        ArrayList arrayList = new ArrayList();
        arrayList.addAll(list);
        Iterator it = set.iterator();
        while (it.hasNext()) {
            arrayList.add(f25436q.get((Class) it.next()));
        }
        return arrayList;
    }

    private void k() {
        List list = this.f25450n;
        list.remove(list.size() - 1);
    }

    private void l(lv.d dVar) {
        if (d() == dVar) {
            k();
        }
        if (dVar instanceof r) {
            g((r) dVar);
        }
        dVar.f();
    }

    private jv.e m() {
        n(this.f25450n);
        u();
        return this.f25448l.c();
    }

    private void n(List list) {
        for (int size = list.size() - 1; size >= 0; size--) {
            l((lv.d) list.get(size));
        }
    }

    private d o(lv.d dVar) {
        a aVar = new a(dVar);
        for (lv.e eVar : this.f25445i) {
            lv.f a10 = eVar.a(this, aVar);
            if (a10 instanceof d) {
                return (d) a10;
            }
        }
        return null;
    }

    private void p() {
        int i10 = this.f25438b;
        int i11 = this.f25439c;
        this.f25444h = true;
        int length = this.f25437a.length();
        while (true) {
            if (i10 >= length) {
                break;
            }
            char charAt = this.f25437a.charAt(i10);
            if (charAt != '\t') {
                if (charAt != ' ') {
                    this.f25444h = false;
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
        this.f25441e = i10;
        this.f25442f = i11;
        this.f25443g = i11 - this.f25439c;
    }

    public static Set q() {
        return f25435p;
    }

    /* JADX WARN: Code restructure failed: missing block: B:50:0x00f7, code lost:
        w(r10.f25441e);
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
        throw new UnsupportedOperationException("Method not decompiled: gv.h.r(java.lang.CharSequence):void");
    }

    private void t() {
        lv.d d10 = d();
        k();
        this.f25451o.remove(d10);
        if (d10 instanceof r) {
            g((r) d10);
        }
        d10.c().l();
    }

    private void u() {
        kv.a a10 = this.f25446j.a(new m(this.f25447k, this.f25449m));
        for (lv.d dVar : this.f25451o) {
            dVar.d(a10);
        }
    }

    private void v(int i10) {
        int i11;
        int i12 = this.f25442f;
        if (i10 >= i12) {
            this.f25438b = this.f25441e;
            this.f25439c = i12;
        }
        int length = this.f25437a.length();
        while (true) {
            i11 = this.f25439c;
            if (i11 >= i10 || this.f25438b == length) {
                break;
            }
            i();
        }
        if (i11 > i10) {
            this.f25438b--;
            this.f25439c = i10;
            this.f25440d = true;
            return;
        }
        this.f25440d = false;
    }

    private void w(int i10) {
        int i11 = this.f25441e;
        if (i10 >= i11) {
            this.f25438b = i11;
            this.f25439c = this.f25442f;
        }
        int length = this.f25437a.length();
        while (true) {
            int i12 = this.f25438b;
            if (i12 >= i10 || i12 == length) {
                break;
            }
            i();
        }
        this.f25440d = false;
    }

    @Override // lv.h
    public int a() {
        return this.f25443g;
    }

    @Override // lv.h
    public boolean b() {
        return this.f25444h;
    }

    @Override // lv.h
    public int c() {
        return this.f25441e;
    }

    @Override // lv.h
    public lv.d d() {
        List list = this.f25450n;
        return (lv.d) list.get(list.size() - 1);
    }

    @Override // lv.h
    public int getColumn() {
        return this.f25439c;
    }

    @Override // lv.h
    public int getIndex() {
        return this.f25438b;
    }

    @Override // lv.h
    public CharSequence getLine() {
        return this.f25437a;
    }

    public jv.e s(String str) {
        int i10 = 0;
        while (true) {
            int c10 = iv.d.c(str, i10);
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
