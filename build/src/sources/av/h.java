package av;

import av.c;
import av.i;
import av.j;
import av.k;
import av.l;
import av.p;
import av.t;
import dv.x;
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
public class h implements fv.h {

    /* renamed from: p  reason: collision with root package name */
    private static final Set f6981p = new LinkedHashSet(Arrays.asList(dv.b.class, dv.i.class, dv.g.class, dv.j.class, x.class, dv.p.class, dv.m.class));

    /* renamed from: q  reason: collision with root package name */
    private static final Map f6982q;

    /* renamed from: a  reason: collision with root package name */
    private CharSequence f6983a;

    /* renamed from: d  reason: collision with root package name */
    private boolean f6986d;

    /* renamed from: h  reason: collision with root package name */
    private boolean f6990h;

    /* renamed from: i  reason: collision with root package name */
    private final List f6991i;

    /* renamed from: j  reason: collision with root package name */
    private final ev.c f6992j;

    /* renamed from: k  reason: collision with root package name */
    private final List f6993k;

    /* renamed from: l  reason: collision with root package name */
    private final g f6994l;

    /* renamed from: b  reason: collision with root package name */
    private int f6984b = 0;

    /* renamed from: c  reason: collision with root package name */
    private int f6985c = 0;

    /* renamed from: e  reason: collision with root package name */
    private int f6987e = 0;

    /* renamed from: f  reason: collision with root package name */
    private int f6988f = 0;

    /* renamed from: g  reason: collision with root package name */
    private int f6989g = 0;

    /* renamed from: m  reason: collision with root package name */
    private final Map f6995m = new LinkedHashMap();

    /* renamed from: n  reason: collision with root package name */
    private List f6996n = new ArrayList();

    /* renamed from: o  reason: collision with root package name */
    private Set f6997o = new LinkedHashSet();

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static class a implements fv.g {

        /* renamed from: a  reason: collision with root package name */
        private final fv.d f6998a;

        public a(fv.d dVar) {
            this.f6998a = dVar;
        }

        @Override // fv.g
        public CharSequence a() {
            fv.d dVar = this.f6998a;
            if (!(dVar instanceof r)) {
                return null;
            }
            CharSequence i10 = ((r) dVar).i();
            if (i10.length() == 0) {
                return null;
            }
            return i10;
        }

        @Override // fv.g
        public fv.d b() {
            return this.f6998a;
        }
    }

    static {
        HashMap hashMap = new HashMap();
        hashMap.put(dv.b.class, new c.a());
        hashMap.put(dv.i.class, new j.a());
        hashMap.put(dv.g.class, new i.a());
        hashMap.put(dv.j.class, new k.b());
        hashMap.put(x.class, new t.a());
        hashMap.put(dv.p.class, new p.a());
        hashMap.put(dv.m.class, new l.a());
        f6982q = Collections.unmodifiableMap(hashMap);
    }

    public h(List list, ev.c cVar, List list2) {
        this.f6991i = list;
        this.f6992j = cVar;
        this.f6993k = list2;
        g gVar = new g();
        this.f6994l = gVar;
        e(gVar);
    }

    private void e(fv.d dVar) {
        this.f6996n.add(dVar);
        this.f6997o.add(dVar);
    }

    private fv.d f(fv.d dVar) {
        while (!d().f(dVar.d())) {
            l(d());
        }
        d().d().b(dVar.d());
        e(dVar);
        return dVar;
    }

    private void g(r rVar) {
        for (dv.o oVar : rVar.j()) {
            rVar.d().i(oVar);
            String n10 = oVar.n();
            if (!this.f6995m.containsKey(n10)) {
                this.f6995m.put(n10, oVar);
            }
        }
    }

    private void h() {
        CharSequence subSequence;
        if (this.f6986d) {
            CharSequence charSequence = this.f6983a;
            CharSequence subSequence2 = charSequence.subSequence(this.f6984b + 1, charSequence.length());
            int a10 = cv.d.a(this.f6985c);
            StringBuilder sb2 = new StringBuilder(subSequence2.length() + a10);
            for (int i10 = 0; i10 < a10; i10++) {
                sb2.append(' ');
            }
            sb2.append(subSequence2);
            subSequence = sb2.toString();
        } else {
            CharSequence charSequence2 = this.f6983a;
            subSequence = charSequence2.subSequence(this.f6984b, charSequence2.length());
        }
        d().e(subSequence);
    }

    private void i() {
        if (this.f6983a.charAt(this.f6984b) == '\t') {
            this.f6984b++;
            int i10 = this.f6985c;
            this.f6985c = i10 + cv.d.a(i10);
            return;
        }
        this.f6984b++;
        this.f6985c++;
    }

    public static List j(List list, Set set) {
        ArrayList arrayList = new ArrayList();
        arrayList.addAll(list);
        Iterator it = set.iterator();
        while (it.hasNext()) {
            arrayList.add(f6982q.get((Class) it.next()));
        }
        return arrayList;
    }

    private void k() {
        List list = this.f6996n;
        list.remove(list.size() - 1);
    }

    private void l(fv.d dVar) {
        if (d() == dVar) {
            k();
        }
        if (dVar instanceof r) {
            g((r) dVar);
        }
        dVar.g();
    }

    private dv.e m() {
        n(this.f6996n);
        u();
        return this.f6994l.d();
    }

    private void n(List list) {
        for (int size = list.size() - 1; size >= 0; size--) {
            l((fv.d) list.get(size));
        }
    }

    private d o(fv.d dVar) {
        a aVar = new a(dVar);
        for (fv.e eVar : this.f6991i) {
            fv.f a10 = eVar.a(this, aVar);
            if (a10 instanceof d) {
                return (d) a10;
            }
        }
        return null;
    }

    private void p() {
        int i10 = this.f6984b;
        int i11 = this.f6985c;
        this.f6990h = true;
        int length = this.f6983a.length();
        while (true) {
            if (i10 >= length) {
                break;
            }
            char charAt = this.f6983a.charAt(i10);
            if (charAt != '\t') {
                if (charAt != ' ') {
                    this.f6990h = false;
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
        this.f6987e = i10;
        this.f6988f = i11;
        this.f6989g = i11 - this.f6985c;
    }

    public static Set q() {
        return f6981p;
    }

    /* JADX WARN: Code restructure failed: missing block: B:50:0x00f7, code lost:
        w(r10.f6987e);
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
        throw new UnsupportedOperationException("Method not decompiled: av.h.r(java.lang.CharSequence):void");
    }

    private void t() {
        fv.d d10 = d();
        k();
        this.f6997o.remove(d10);
        if (d10 instanceof r) {
            g((r) d10);
        }
        d10.d().l();
    }

    private void u() {
        ev.a a10 = this.f6992j.a(new m(this.f6993k, this.f6995m));
        for (fv.d dVar : this.f6997o) {
            dVar.h(a10);
        }
    }

    private void v(int i10) {
        int i11;
        int i12 = this.f6988f;
        if (i10 >= i12) {
            this.f6984b = this.f6987e;
            this.f6985c = i12;
        }
        int length = this.f6983a.length();
        while (true) {
            i11 = this.f6985c;
            if (i11 >= i10 || this.f6984b == length) {
                break;
            }
            i();
        }
        if (i11 > i10) {
            this.f6984b--;
            this.f6985c = i10;
            this.f6986d = true;
            return;
        }
        this.f6986d = false;
    }

    private void w(int i10) {
        int i11 = this.f6987e;
        if (i10 >= i11) {
            this.f6984b = i11;
            this.f6985c = this.f6988f;
        }
        int length = this.f6983a.length();
        while (true) {
            int i12 = this.f6984b;
            if (i12 >= i10 || i12 == length) {
                break;
            }
            i();
        }
        this.f6986d = false;
    }

    @Override // fv.h
    public int a() {
        return this.f6989g;
    }

    @Override // fv.h
    public boolean b() {
        return this.f6990h;
    }

    @Override // fv.h
    public int c() {
        return this.f6987e;
    }

    @Override // fv.h
    public fv.d d() {
        List list = this.f6996n;
        return (fv.d) list.get(list.size() - 1);
    }

    @Override // fv.h
    public int getColumn() {
        return this.f6985c;
    }

    @Override // fv.h
    public int getIndex() {
        return this.f6984b;
    }

    @Override // fv.h
    public CharSequence getLine() {
        return this.f6983a;
    }

    public dv.e s(String str) {
        int i10 = 0;
        while (true) {
            int c10 = cv.d.c(str, i10);
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
