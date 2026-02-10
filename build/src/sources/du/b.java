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
    static final bu.c f21935g = cu.a.e("PLUS_SIGN", String.class);

    /* renamed from: h  reason: collision with root package name */
    static final bu.c f21936h = cu.a.e("MINUS_SIGN", String.class);

    /* renamed from: i  reason: collision with root package name */
    private static final cu.i f21937i;

    /* renamed from: j  reason: collision with root package name */
    private static final char f21938j;

    /* renamed from: k  reason: collision with root package name */
    private static final ConcurrentMap f21939k;

    /* renamed from: l  reason: collision with root package name */
    private static final a f21940l;

    /* renamed from: a  reason: collision with root package name */
    private final Map f21941a;

    /* renamed from: b  reason: collision with root package name */
    private final cu.a f21942b;

    /* renamed from: c  reason: collision with root package name */
    private final Locale f21943c;

    /* renamed from: d  reason: collision with root package name */
    private final int f21944d;

    /* renamed from: e  reason: collision with root package name */
    private final int f21945e;

    /* renamed from: f  reason: collision with root package name */
    private final bu.n f21946f;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static class a {

        /* renamed from: a  reason: collision with root package name */
        private final cu.j f21947a;

        /* renamed from: b  reason: collision with root package name */
        private final char f21948b;

        /* renamed from: c  reason: collision with root package name */
        private final char f21949c;

        /* renamed from: d  reason: collision with root package name */
        private final String f21950d;

        /* renamed from: e  reason: collision with root package name */
        private final String f21951e;

        a(cu.j jVar, char c10, char c11, String str, String str2) {
            this.f21947a = jVar;
            this.f21948b = c10;
            this.f21949c = c11;
            this.f21950d = str;
            this.f21951e = str2;
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
            iVar = hu.f.f27719d;
        }
        f21937i = iVar;
        if (Boolean.getBoolean("net.time4j.format.iso.decimal.dot")) {
            c10 = '.';
        } else {
            c10 = ',';
        }
        char c11 = c10;
        f21938j = c11;
        f21939k = new ConcurrentHashMap();
        f21940l = new a(cu.j.f21168d, '0', c11, "+", "-");
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public b(cu.a aVar, Locale locale) {
        this(aVar, locale, 0, 0, null);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static b d(bu.x xVar, cu.a aVar, Locale locale) {
        a.b bVar = new a.b(xVar);
        bVar.d(cu.a.f21113f, cu.g.SMART);
        bVar.d(cu.a.f21114g, cu.v.WIDE);
        bVar.d(cu.a.f21115h, cu.m.FORMAT);
        bVar.b(cu.a.f21123p, ' ');
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
        hashMap.putAll(bVar2.f21941a);
        hashMap.putAll(bVar.f21941a);
        return new b(new a.b().f(bVar2.f21942b).f(bVar.f21942b).a(), Locale.ROOT, 0, 0, null, hashMap).n(bVar.f21943c);
    }

    @Override // bu.d
    public boolean a(bu.c cVar) {
        if (this.f21941a.containsKey(cVar.name())) {
            return true;
        }
        return this.f21942b.a(cVar);
    }

    @Override // bu.d
    public Object b(bu.c cVar, Object obj) {
        if (this.f21941a.containsKey(cVar.name())) {
            return cVar.type().cast(this.f21941a.get(cVar.name()));
        }
        return this.f21942b.b(cVar, obj);
    }

    @Override // bu.d
    public Object c(bu.c cVar) {
        if (this.f21941a.containsKey(cVar.name())) {
            return cVar.type().cast(this.f21941a.get(cVar.name()));
        }
        return this.f21942b.c(cVar);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public cu.a e() {
        return this.f21942b;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof b) {
            b bVar = (b) obj;
            if (this.f21942b.equals(bVar.f21942b) && this.f21943c.equals(bVar.f21943c) && this.f21944d == bVar.f21944d && this.f21945e == bVar.f21945e && j(this.f21946f, bVar.f21946f) && this.f21941a.equals(bVar.f21941a)) {
                return true;
            }
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public bu.n f() {
        return this.f21946f;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int g() {
        return this.f21944d;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public Locale h() {
        return this.f21943c;
    }

    public int hashCode() {
        return (this.f21942b.hashCode() * 7) + (this.f21941a.hashCode() * 37);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int i() {
        return this.f21945e;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public b l(cu.a aVar) {
        return new b(aVar, this.f21943c, this.f21944d, this.f21945e, this.f21946f, this.f21941a);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public b m(bu.c cVar, Object obj) {
        HashMap hashMap = new HashMap(this.f21941a);
        if (obj == null) {
            hashMap.remove(cVar.name());
        } else {
            hashMap.put(cVar.name(), obj);
        }
        return new b(this.f21942b, this.f21943c, this.f21944d, this.f21945e, this.f21946f, hashMap);
    }

    b n(Locale locale) {
        String str;
        String str2;
        a.b bVar = new a.b();
        bVar.f(this.f21942b);
        String a10 = hu.d.a(locale);
        String country = locale.getCountry();
        if (a10.isEmpty() && country.isEmpty()) {
            locale = Locale.ROOT;
            bVar.d(cu.a.f21119l, cu.j.f21168d);
            bVar.b(cu.a.f21122o, f21938j);
            str = "+";
            str2 = "-";
        } else {
            if (!country.isEmpty()) {
                a10 = a10 + "_" + country;
            }
            a aVar = (a) f21939k.get(a10);
            if (aVar == null) {
                try {
                    cu.i iVar = f21937i;
                    aVar = new a(iVar.d(locale), iVar.f(locale), iVar.b(locale), iVar.c(locale), iVar.e(locale));
                } catch (RuntimeException unused) {
                    aVar = f21940l;
                }
                a aVar2 = (a) f21939k.putIfAbsent(a10, aVar);
                if (aVar2 != null) {
                    aVar = aVar2;
                }
            }
            bVar.d(cu.a.f21119l, aVar.f21947a);
            bVar.b(cu.a.f21120m, aVar.f21948b);
            bVar.b(cu.a.f21122o, aVar.f21949c);
            str = aVar.f21950d;
            str2 = aVar.f21951e;
        }
        Locale locale2 = locale;
        bVar.h(locale2);
        HashMap hashMap = new HashMap(this.f21941a);
        hashMap.put(f21935g.name(), str);
        hashMap.put(f21936h.name(), str2);
        return new b(bVar.a(), locale2, this.f21944d, this.f21945e, this.f21946f, hashMap);
    }

    public String toString() {
        return b.class.getName() + "[attributes=" + this.f21942b + ",locale=" + this.f21943c + ",level=" + this.f21944d + ",section=" + this.f21945e + ",print-condition=" + this.f21946f + ",other=" + this.f21941a + ']';
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public b(cu.a aVar, Locale locale, int i10, int i11, bu.n nVar) {
        if (aVar != null) {
            this.f21942b = aVar;
            this.f21943c = locale == null ? Locale.ROOT : locale;
            this.f21944d = i10;
            this.f21945e = i11;
            this.f21946f = nVar;
            this.f21941a = Collections.EMPTY_MAP;
            return;
        }
        throw new NullPointerException("Missing format attributes.");
    }

    private b(cu.a aVar, Locale locale, int i10, int i11, bu.n nVar, Map map) {
        if (aVar != null) {
            this.f21942b = aVar;
            this.f21943c = locale == null ? Locale.ROOT : locale;
            this.f21944d = i10;
            this.f21945e = i11;
            this.f21946f = nVar;
            this.f21941a = Collections.unmodifiableMap(map);
            return;
        }
        throw new NullPointerException("Missing format attributes.");
    }
}
