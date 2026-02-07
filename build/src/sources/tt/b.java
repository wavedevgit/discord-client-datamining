package tt;

import java.util.Collections;
import java.util.HashMap;
import java.util.Locale;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.ConcurrentMap;
import st.a;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class b implements rt.d {

    /* renamed from: g  reason: collision with root package name */
    static final rt.c f50928g = st.a.e("PLUS_SIGN", String.class);

    /* renamed from: h  reason: collision with root package name */
    static final rt.c f50929h = st.a.e("MINUS_SIGN", String.class);

    /* renamed from: i  reason: collision with root package name */
    private static final st.i f50930i;

    /* renamed from: j  reason: collision with root package name */
    private static final char f50931j;

    /* renamed from: k  reason: collision with root package name */
    private static final ConcurrentMap f50932k;

    /* renamed from: l  reason: collision with root package name */
    private static final a f50933l;

    /* renamed from: a  reason: collision with root package name */
    private final Map f50934a;

    /* renamed from: b  reason: collision with root package name */
    private final st.a f50935b;

    /* renamed from: c  reason: collision with root package name */
    private final Locale f50936c;

    /* renamed from: d  reason: collision with root package name */
    private final int f50937d;

    /* renamed from: e  reason: collision with root package name */
    private final int f50938e;

    /* renamed from: f  reason: collision with root package name */
    private final rt.n f50939f;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static class a {

        /* renamed from: a  reason: collision with root package name */
        private final st.j f50940a;

        /* renamed from: b  reason: collision with root package name */
        private final char f50941b;

        /* renamed from: c  reason: collision with root package name */
        private final char f50942c;

        /* renamed from: d  reason: collision with root package name */
        private final String f50943d;

        /* renamed from: e  reason: collision with root package name */
        private final String f50944e;

        a(st.j jVar, char c10, char c11, String str, String str2) {
            this.f50940a = jVar;
            this.f50941b = c10;
            this.f50942c = c11;
            this.f50943d = str;
            this.f50944e = str2;
        }
    }

    static {
        char c10;
        st.i iVar = null;
        int i10 = 0;
        for (st.i iVar2 : pt.d.c().g(st.i.class)) {
            int length = iVar2.a().length;
            if (length > i10) {
                iVar = iVar2;
                i10 = length;
            }
        }
        if (iVar == null) {
            iVar = xt.f.f54862d;
        }
        f50930i = iVar;
        if (Boolean.getBoolean("net.time4j.format.iso.decimal.dot")) {
            c10 = '.';
        } else {
            c10 = ',';
        }
        char c11 = c10;
        f50931j = c11;
        f50932k = new ConcurrentHashMap();
        f50933l = new a(st.j.f50218d, '0', c11, "+", "-");
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public b(st.a aVar, Locale locale) {
        this(aVar, locale, 0, 0, null);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static b d(rt.x xVar, st.a aVar, Locale locale) {
        a.b bVar = new a.b(xVar);
        bVar.d(st.a.f50163f, st.g.SMART);
        bVar.d(st.a.f50164g, st.v.WIDE);
        bVar.d(st.a.f50165h, st.m.FORMAT);
        bVar.b(st.a.f50173p, ' ');
        bVar.f(aVar);
        return new b(bVar.a(), locale).n(locale);
    }

    private static boolean j(Object obj, Object obj2) {
        if (obj == null) {
            if (obj2 == null) {
                return true;
            }
            return false;
        }
        return obj.equals(obj2);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static b k(b bVar, b bVar2) {
        HashMap hashMap = new HashMap();
        hashMap.putAll(bVar2.f50934a);
        hashMap.putAll(bVar.f50934a);
        return new b(new a.b().f(bVar2.f50935b).f(bVar.f50935b).a(), Locale.ROOT, 0, 0, null, hashMap).n(bVar.f50936c);
    }

    @Override // rt.d
    public Object a(rt.c cVar) {
        if (this.f50934a.containsKey(cVar.name())) {
            return cVar.type().cast(this.f50934a.get(cVar.name()));
        }
        return this.f50935b.a(cVar);
    }

    @Override // rt.d
    public Object b(rt.c cVar, Object obj) {
        if (this.f50934a.containsKey(cVar.name())) {
            return cVar.type().cast(this.f50934a.get(cVar.name()));
        }
        return this.f50935b.b(cVar, obj);
    }

    @Override // rt.d
    public boolean c(rt.c cVar) {
        if (this.f50934a.containsKey(cVar.name())) {
            return true;
        }
        return this.f50935b.c(cVar);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public st.a e() {
        return this.f50935b;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof b) {
            b bVar = (b) obj;
            if (this.f50935b.equals(bVar.f50935b) && this.f50936c.equals(bVar.f50936c) && this.f50937d == bVar.f50937d && this.f50938e == bVar.f50938e && j(this.f50939f, bVar.f50939f) && this.f50934a.equals(bVar.f50934a)) {
                return true;
            }
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public rt.n f() {
        return this.f50939f;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int g() {
        return this.f50937d;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public Locale h() {
        return this.f50936c;
    }

    public int hashCode() {
        return (this.f50935b.hashCode() * 7) + (this.f50934a.hashCode() * 37);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int i() {
        return this.f50938e;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public b l(st.a aVar) {
        return new b(aVar, this.f50936c, this.f50937d, this.f50938e, this.f50939f, this.f50934a);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public b m(rt.c cVar, Object obj) {
        HashMap hashMap = new HashMap(this.f50934a);
        if (obj == null) {
            hashMap.remove(cVar.name());
        } else {
            hashMap.put(cVar.name(), obj);
        }
        return new b(this.f50935b, this.f50936c, this.f50937d, this.f50938e, this.f50939f, hashMap);
    }

    b n(Locale locale) {
        String str;
        String str2;
        a.b bVar = new a.b();
        bVar.f(this.f50935b);
        String a10 = xt.d.a(locale);
        String country = locale.getCountry();
        if (a10.isEmpty() && country.isEmpty()) {
            locale = Locale.ROOT;
            bVar.d(st.a.f50169l, st.j.f50218d);
            bVar.b(st.a.f50172o, f50931j);
            str = "+";
            str2 = "-";
        } else {
            if (!country.isEmpty()) {
                a10 = a10 + "_" + country;
            }
            a aVar = (a) f50932k.get(a10);
            if (aVar == null) {
                try {
                    st.i iVar = f50930i;
                    aVar = new a(iVar.d(locale), iVar.f(locale), iVar.b(locale), iVar.c(locale), iVar.e(locale));
                } catch (RuntimeException unused) {
                    aVar = f50933l;
                }
                a aVar2 = (a) f50932k.putIfAbsent(a10, aVar);
                if (aVar2 != null) {
                    aVar = aVar2;
                }
            }
            bVar.d(st.a.f50169l, aVar.f50940a);
            bVar.b(st.a.f50170m, aVar.f50941b);
            bVar.b(st.a.f50172o, aVar.f50942c);
            str = aVar.f50943d;
            str2 = aVar.f50944e;
        }
        Locale locale2 = locale;
        bVar.h(locale2);
        HashMap hashMap = new HashMap(this.f50934a);
        hashMap.put(f50928g.name(), str);
        hashMap.put(f50929h.name(), str2);
        return new b(bVar.a(), locale2, this.f50937d, this.f50938e, this.f50939f, hashMap);
    }

    public String toString() {
        return b.class.getName() + "[attributes=" + this.f50935b + ",locale=" + this.f50936c + ",level=" + this.f50937d + ",section=" + this.f50938e + ",print-condition=" + this.f50939f + ",other=" + this.f50934a + ']';
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public b(st.a aVar, Locale locale, int i10, int i11, rt.n nVar) {
        if (aVar != null) {
            this.f50935b = aVar;
            this.f50936c = locale == null ? Locale.ROOT : locale;
            this.f50937d = i10;
            this.f50938e = i11;
            this.f50939f = nVar;
            this.f50934a = Collections.EMPTY_MAP;
            return;
        }
        throw new NullPointerException("Missing format attributes.");
    }

    private b(st.a aVar, Locale locale, int i10, int i11, rt.n nVar, Map map) {
        if (aVar != null) {
            this.f50935b = aVar;
            this.f50936c = locale == null ? Locale.ROOT : locale;
            this.f50937d = i10;
            this.f50938e = i11;
            this.f50939f = nVar;
            this.f50934a = Collections.unmodifiableMap(map);
            return;
        }
        throw new NullPointerException("Missing format attributes.");
    }
}
