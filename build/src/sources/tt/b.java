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
    static final rt.c f50880g = st.a.e("PLUS_SIGN", String.class);

    /* renamed from: h  reason: collision with root package name */
    static final rt.c f50881h = st.a.e("MINUS_SIGN", String.class);

    /* renamed from: i  reason: collision with root package name */
    private static final st.i f50882i;

    /* renamed from: j  reason: collision with root package name */
    private static final char f50883j;

    /* renamed from: k  reason: collision with root package name */
    private static final ConcurrentMap f50884k;

    /* renamed from: l  reason: collision with root package name */
    private static final a f50885l;

    /* renamed from: a  reason: collision with root package name */
    private final Map f50886a;

    /* renamed from: b  reason: collision with root package name */
    private final st.a f50887b;

    /* renamed from: c  reason: collision with root package name */
    private final Locale f50888c;

    /* renamed from: d  reason: collision with root package name */
    private final int f50889d;

    /* renamed from: e  reason: collision with root package name */
    private final int f50890e;

    /* renamed from: f  reason: collision with root package name */
    private final rt.n f50891f;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static class a {

        /* renamed from: a  reason: collision with root package name */
        private final st.j f50892a;

        /* renamed from: b  reason: collision with root package name */
        private final char f50893b;

        /* renamed from: c  reason: collision with root package name */
        private final char f50894c;

        /* renamed from: d  reason: collision with root package name */
        private final String f50895d;

        /* renamed from: e  reason: collision with root package name */
        private final String f50896e;

        a(st.j jVar, char c10, char c11, String str, String str2) {
            this.f50892a = jVar;
            this.f50893b = c10;
            this.f50894c = c11;
            this.f50895d = str;
            this.f50896e = str2;
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
            iVar = xt.f.f54814d;
        }
        f50882i = iVar;
        if (Boolean.getBoolean("net.time4j.format.iso.decimal.dot")) {
            c10 = '.';
        } else {
            c10 = ',';
        }
        char c11 = c10;
        f50883j = c11;
        f50884k = new ConcurrentHashMap();
        f50885l = new a(st.j.f50170d, '0', c11, "+", "-");
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public b(st.a aVar, Locale locale) {
        this(aVar, locale, 0, 0, null);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static b d(rt.x xVar, st.a aVar, Locale locale) {
        a.b bVar = new a.b(xVar);
        bVar.d(st.a.f50115f, st.g.SMART);
        bVar.d(st.a.f50116g, st.v.WIDE);
        bVar.d(st.a.f50117h, st.m.FORMAT);
        bVar.b(st.a.f50125p, ' ');
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
        hashMap.putAll(bVar2.f50886a);
        hashMap.putAll(bVar.f50886a);
        return new b(new a.b().f(bVar2.f50887b).f(bVar.f50887b).a(), Locale.ROOT, 0, 0, null, hashMap).n(bVar.f50888c);
    }

    @Override // rt.d
    public Object a(rt.c cVar) {
        if (this.f50886a.containsKey(cVar.name())) {
            return cVar.type().cast(this.f50886a.get(cVar.name()));
        }
        return this.f50887b.a(cVar);
    }

    @Override // rt.d
    public Object b(rt.c cVar, Object obj) {
        if (this.f50886a.containsKey(cVar.name())) {
            return cVar.type().cast(this.f50886a.get(cVar.name()));
        }
        return this.f50887b.b(cVar, obj);
    }

    @Override // rt.d
    public boolean c(rt.c cVar) {
        if (this.f50886a.containsKey(cVar.name())) {
            return true;
        }
        return this.f50887b.c(cVar);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public st.a e() {
        return this.f50887b;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof b) {
            b bVar = (b) obj;
            if (this.f50887b.equals(bVar.f50887b) && this.f50888c.equals(bVar.f50888c) && this.f50889d == bVar.f50889d && this.f50890e == bVar.f50890e && j(this.f50891f, bVar.f50891f) && this.f50886a.equals(bVar.f50886a)) {
                return true;
            }
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public rt.n f() {
        return this.f50891f;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int g() {
        return this.f50889d;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public Locale h() {
        return this.f50888c;
    }

    public int hashCode() {
        return (this.f50887b.hashCode() * 7) + (this.f50886a.hashCode() * 37);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int i() {
        return this.f50890e;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public b l(st.a aVar) {
        return new b(aVar, this.f50888c, this.f50889d, this.f50890e, this.f50891f, this.f50886a);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public b m(rt.c cVar, Object obj) {
        HashMap hashMap = new HashMap(this.f50886a);
        if (obj == null) {
            hashMap.remove(cVar.name());
        } else {
            hashMap.put(cVar.name(), obj);
        }
        return new b(this.f50887b, this.f50888c, this.f50889d, this.f50890e, this.f50891f, hashMap);
    }

    b n(Locale locale) {
        String str;
        String str2;
        a.b bVar = new a.b();
        bVar.f(this.f50887b);
        String a10 = xt.d.a(locale);
        String country = locale.getCountry();
        if (a10.isEmpty() && country.isEmpty()) {
            locale = Locale.ROOT;
            bVar.d(st.a.f50121l, st.j.f50170d);
            bVar.b(st.a.f50124o, f50883j);
            str = "+";
            str2 = "-";
        } else {
            if (!country.isEmpty()) {
                a10 = a10 + "_" + country;
            }
            a aVar = (a) f50884k.get(a10);
            if (aVar == null) {
                try {
                    st.i iVar = f50882i;
                    aVar = new a(iVar.d(locale), iVar.f(locale), iVar.b(locale), iVar.c(locale), iVar.e(locale));
                } catch (RuntimeException unused) {
                    aVar = f50885l;
                }
                a aVar2 = (a) f50884k.putIfAbsent(a10, aVar);
                if (aVar2 != null) {
                    aVar = aVar2;
                }
            }
            bVar.d(st.a.f50121l, aVar.f50892a);
            bVar.b(st.a.f50122m, aVar.f50893b);
            bVar.b(st.a.f50124o, aVar.f50894c);
            str = aVar.f50895d;
            str2 = aVar.f50896e;
        }
        Locale locale2 = locale;
        bVar.h(locale2);
        HashMap hashMap = new HashMap(this.f50886a);
        hashMap.put(f50880g.name(), str);
        hashMap.put(f50881h.name(), str2);
        return new b(bVar.a(), locale2, this.f50889d, this.f50890e, this.f50891f, hashMap);
    }

    public String toString() {
        return b.class.getName() + "[attributes=" + this.f50887b + ",locale=" + this.f50888c + ",level=" + this.f50889d + ",section=" + this.f50890e + ",print-condition=" + this.f50891f + ",other=" + this.f50886a + ']';
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public b(st.a aVar, Locale locale, int i10, int i11, rt.n nVar) {
        if (aVar != null) {
            this.f50887b = aVar;
            this.f50888c = locale == null ? Locale.ROOT : locale;
            this.f50889d = i10;
            this.f50890e = i11;
            this.f50891f = nVar;
            this.f50886a = Collections.EMPTY_MAP;
            return;
        }
        throw new NullPointerException("Missing format attributes.");
    }

    private b(st.a aVar, Locale locale, int i10, int i11, rt.n nVar, Map map) {
        if (aVar != null) {
            this.f50887b = aVar;
            this.f50888c = locale == null ? Locale.ROOT : locale;
            this.f50889d = i10;
            this.f50890e = i11;
            this.f50891f = nVar;
            this.f50886a = Collections.unmodifiableMap(map);
            return;
        }
        throw new NullPointerException("Missing format attributes.");
    }
}
