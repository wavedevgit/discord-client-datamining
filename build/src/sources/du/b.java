package du;

import cu.a;
import java.util.Collections;
import java.util.HashMap;
import java.util.Locale;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.ConcurrentMap;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class b implements bu.d {

    /* renamed from: g  reason: collision with root package name */
    static final bu.c f21936g = cu.a.e("PLUS_SIGN", String.class);

    /* renamed from: h  reason: collision with root package name */
    static final bu.c f21937h = cu.a.e("MINUS_SIGN", String.class);

    /* renamed from: i  reason: collision with root package name */
    private static final cu.i f21938i;

    /* renamed from: j  reason: collision with root package name */
    private static final char f21939j;

    /* renamed from: k  reason: collision with root package name */
    private static final ConcurrentMap f21940k;

    /* renamed from: l  reason: collision with root package name */
    private static final a f21941l;

    /* renamed from: a  reason: collision with root package name */
    private final Map f21942a;

    /* renamed from: b  reason: collision with root package name */
    private final cu.a f21943b;

    /* renamed from: c  reason: collision with root package name */
    private final Locale f21944c;

    /* renamed from: d  reason: collision with root package name */
    private final int f21945d;

    /* renamed from: e  reason: collision with root package name */
    private final int f21946e;

    /* renamed from: f  reason: collision with root package name */
    private final bu.n f21947f;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static class a {

        /* renamed from: a  reason: collision with root package name */
        private final cu.j f21948a;

        /* renamed from: b  reason: collision with root package name */
        private final char f21949b;

        /* renamed from: c  reason: collision with root package name */
        private final char f21950c;

        /* renamed from: d  reason: collision with root package name */
        private final String f21951d;

        /* renamed from: e  reason: collision with root package name */
        private final String f21952e;

        a(cu.j jVar, char c10, char c11, String str, String str2) {
            this.f21948a = jVar;
            this.f21949b = c10;
            this.f21950c = c11;
            this.f21951d = str;
            this.f21952e = str2;
        }
    }

    static {
        char c10;
        cu.i iVar = null;
        int i10 = 0;
        for (cu.i iVar2 : zt.d.c().g(cu.i.class)) {
            int length = iVar2.a().length;
            if (length > i10) {
                iVar = iVar2;
                i10 = length;
            }
        }
        if (iVar == null) {
            iVar = hu.f.f28288d;
        }
        f21938i = iVar;
        if (Boolean.getBoolean("net.time4j.format.iso.decimal.dot")) {
            c10 = '.';
        } else {
            c10 = ',';
        }
        char c11 = c10;
        f21939j = c11;
        f21940k = new ConcurrentHashMap();
        f21941l = new a(cu.j.f21169d, '0', c11, "+", "-");
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public b(cu.a aVar, Locale locale) {
        this(aVar, locale, 0, 0, null);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static b d(bu.x xVar, cu.a aVar, Locale locale) {
        a.b bVar = new a.b(xVar);
        bVar.d(cu.a.f21114f, cu.g.SMART);
        bVar.d(cu.a.f21115g, cu.v.WIDE);
        bVar.d(cu.a.f21116h, cu.m.FORMAT);
        bVar.b(cu.a.f21124p, ' ');
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
        hashMap.putAll(bVar2.f21942a);
        hashMap.putAll(bVar.f21942a);
        return new b(new a.b().f(bVar2.f21943b).f(bVar.f21943b).a(), Locale.ROOT, 0, 0, null, hashMap).n(bVar.f21944c);
    }

    @Override // bu.d
    public boolean a(bu.c cVar) {
        if (this.f21942a.containsKey(cVar.name())) {
            return true;
        }
        return this.f21943b.a(cVar);
    }

    @Override // bu.d
    public Object b(bu.c cVar, Object obj) {
        if (this.f21942a.containsKey(cVar.name())) {
            return cVar.type().cast(this.f21942a.get(cVar.name()));
        }
        return this.f21943b.b(cVar, obj);
    }

    @Override // bu.d
    public Object c(bu.c cVar) {
        if (this.f21942a.containsKey(cVar.name())) {
            return cVar.type().cast(this.f21942a.get(cVar.name()));
        }
        return this.f21943b.c(cVar);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public cu.a e() {
        return this.f21943b;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof b) {
            b bVar = (b) obj;
            if (this.f21943b.equals(bVar.f21943b) && this.f21944c.equals(bVar.f21944c) && this.f21945d == bVar.f21945d && this.f21946e == bVar.f21946e && j(this.f21947f, bVar.f21947f) && this.f21942a.equals(bVar.f21942a)) {
                return true;
            }
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public bu.n f() {
        return this.f21947f;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int g() {
        return this.f21945d;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public Locale h() {
        return this.f21944c;
    }

    public int hashCode() {
        return (this.f21943b.hashCode() * 7) + (this.f21942a.hashCode() * 37);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int i() {
        return this.f21946e;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public b l(cu.a aVar) {
        return new b(aVar, this.f21944c, this.f21945d, this.f21946e, this.f21947f, this.f21942a);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public b m(bu.c cVar, Object obj) {
        HashMap hashMap = new HashMap(this.f21942a);
        if (obj == null) {
            hashMap.remove(cVar.name());
        } else {
            hashMap.put(cVar.name(), obj);
        }
        return new b(this.f21943b, this.f21944c, this.f21945d, this.f21946e, this.f21947f, hashMap);
    }

    b n(Locale locale) {
        String str;
        String str2;
        a.b bVar = new a.b();
        bVar.f(this.f21943b);
        String a10 = hu.d.a(locale);
        String country = locale.getCountry();
        if (a10.isEmpty() && country.isEmpty()) {
            locale = Locale.ROOT;
            bVar.d(cu.a.f21120l, cu.j.f21169d);
            bVar.b(cu.a.f21123o, f21939j);
            str = "+";
            str2 = "-";
        } else {
            if (!country.isEmpty()) {
                a10 = a10 + "_" + country;
            }
            a aVar = (a) f21940k.get(a10);
            if (aVar == null) {
                try {
                    cu.i iVar = f21938i;
                    aVar = new a(iVar.d(locale), iVar.f(locale), iVar.b(locale), iVar.c(locale), iVar.e(locale));
                } catch (RuntimeException unused) {
                    aVar = f21941l;
                }
                a aVar2 = (a) f21940k.putIfAbsent(a10, aVar);
                if (aVar2 != null) {
                    aVar = aVar2;
                }
            }
            bVar.d(cu.a.f21120l, aVar.f21948a);
            bVar.b(cu.a.f21121m, aVar.f21949b);
            bVar.b(cu.a.f21123o, aVar.f21950c);
            str = aVar.f21951d;
            str2 = aVar.f21952e;
        }
        Locale locale2 = locale;
        bVar.h(locale2);
        HashMap hashMap = new HashMap(this.f21942a);
        hashMap.put(f21936g.name(), str);
        hashMap.put(f21937h.name(), str2);
        return new b(bVar.a(), locale2, this.f21945d, this.f21946e, this.f21947f, hashMap);
    }

    public String toString() {
        return b.class.getName() + "[attributes=" + this.f21943b + ",locale=" + this.f21944c + ",level=" + this.f21945d + ",section=" + this.f21946e + ",print-condition=" + this.f21947f + ",other=" + this.f21942a + ']';
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public b(cu.a aVar, Locale locale, int i10, int i11, bu.n nVar) {
        if (aVar != null) {
            this.f21943b = aVar;
            this.f21944c = locale == null ? Locale.ROOT : locale;
            this.f21945d = i10;
            this.f21946e = i11;
            this.f21947f = nVar;
            this.f21942a = Collections.EMPTY_MAP;
            return;
        }
        throw new NullPointerException("Missing format attributes.");
    }

    private b(cu.a aVar, Locale locale, int i10, int i11, bu.n nVar, Map map) {
        if (aVar != null) {
            this.f21943b = aVar;
            this.f21944c = locale == null ? Locale.ROOT : locale;
            this.f21945d = i10;
            this.f21946e = i11;
            this.f21947f = nVar;
            this.f21942a = Collections.unmodifiableMap(map);
            return;
        }
        throw new NullPointerException("Missing format attributes.");
    }
}
