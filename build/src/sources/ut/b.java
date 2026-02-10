package ut;

import java.util.Collections;
import java.util.HashMap;
import java.util.Locale;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.ConcurrentMap;
import tt.a;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class b implements st.d {

    /* renamed from: g  reason: collision with root package name */
    static final st.c f51833g = tt.a.e("PLUS_SIGN", String.class);

    /* renamed from: h  reason: collision with root package name */
    static final st.c f51834h = tt.a.e("MINUS_SIGN", String.class);

    /* renamed from: i  reason: collision with root package name */
    private static final tt.i f51835i;

    /* renamed from: j  reason: collision with root package name */
    private static final char f51836j;

    /* renamed from: k  reason: collision with root package name */
    private static final ConcurrentMap f51837k;

    /* renamed from: l  reason: collision with root package name */
    private static final a f51838l;

    /* renamed from: a  reason: collision with root package name */
    private final Map f51839a;

    /* renamed from: b  reason: collision with root package name */
    private final tt.a f51840b;

    /* renamed from: c  reason: collision with root package name */
    private final Locale f51841c;

    /* renamed from: d  reason: collision with root package name */
    private final int f51842d;

    /* renamed from: e  reason: collision with root package name */
    private final int f51843e;

    /* renamed from: f  reason: collision with root package name */
    private final st.n f51844f;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static class a {

        /* renamed from: a  reason: collision with root package name */
        private final tt.j f51845a;

        /* renamed from: b  reason: collision with root package name */
        private final char f51846b;

        /* renamed from: c  reason: collision with root package name */
        private final char f51847c;

        /* renamed from: d  reason: collision with root package name */
        private final String f51848d;

        /* renamed from: e  reason: collision with root package name */
        private final String f51849e;

        a(tt.j jVar, char c10, char c11, String str, String str2) {
            this.f51845a = jVar;
            this.f51846b = c10;
            this.f51847c = c11;
            this.f51848d = str;
            this.f51849e = str2;
        }
    }

    static {
        char c10;
        tt.i iVar = null;
        int i10 = 0;
        for (tt.i iVar2 : qt.d.c().g(tt.i.class)) {
            int length = iVar2.a().length;
            if (length > i10) {
                iVar = iVar2;
                i10 = length;
            }
        }
        if (iVar == null) {
            iVar = yt.f.f55797d;
        }
        f51835i = iVar;
        if (Boolean.getBoolean("net.time4j.format.iso.decimal.dot")) {
            c10 = '.';
        } else {
            c10 = ',';
        }
        char c11 = c10;
        f51836j = c11;
        f51837k = new ConcurrentHashMap();
        f51838l = new a(tt.j.f51062d, '0', c11, "+", "-");
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public b(tt.a aVar, Locale locale) {
        this(aVar, locale, 0, 0, null);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static b d(st.x xVar, tt.a aVar, Locale locale) {
        a.b bVar = new a.b(xVar);
        bVar.d(tt.a.f51007f, tt.g.SMART);
        bVar.d(tt.a.f51008g, tt.v.WIDE);
        bVar.d(tt.a.f51009h, tt.m.FORMAT);
        bVar.b(tt.a.f51017p, ' ');
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
        hashMap.putAll(bVar2.f51839a);
        hashMap.putAll(bVar.f51839a);
        return new b(new a.b().f(bVar2.f51840b).f(bVar.f51840b).a(), Locale.ROOT, 0, 0, null, hashMap).n(bVar.f51841c);
    }

    @Override // st.d
    public Object a(st.c cVar) {
        if (this.f51839a.containsKey(cVar.name())) {
            return cVar.type().cast(this.f51839a.get(cVar.name()));
        }
        return this.f51840b.a(cVar);
    }

    @Override // st.d
    public Object b(st.c cVar, Object obj) {
        if (this.f51839a.containsKey(cVar.name())) {
            return cVar.type().cast(this.f51839a.get(cVar.name()));
        }
        return this.f51840b.b(cVar, obj);
    }

    @Override // st.d
    public boolean c(st.c cVar) {
        if (this.f51839a.containsKey(cVar.name())) {
            return true;
        }
        return this.f51840b.c(cVar);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public tt.a e() {
        return this.f51840b;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof b) {
            b bVar = (b) obj;
            if (this.f51840b.equals(bVar.f51840b) && this.f51841c.equals(bVar.f51841c) && this.f51842d == bVar.f51842d && this.f51843e == bVar.f51843e && j(this.f51844f, bVar.f51844f) && this.f51839a.equals(bVar.f51839a)) {
                return true;
            }
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public st.n f() {
        return this.f51844f;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int g() {
        return this.f51842d;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public Locale h() {
        return this.f51841c;
    }

    public int hashCode() {
        return (this.f51840b.hashCode() * 7) + (this.f51839a.hashCode() * 37);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int i() {
        return this.f51843e;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public b l(tt.a aVar) {
        return new b(aVar, this.f51841c, this.f51842d, this.f51843e, this.f51844f, this.f51839a);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public b m(st.c cVar, Object obj) {
        HashMap hashMap = new HashMap(this.f51839a);
        if (obj == null) {
            hashMap.remove(cVar.name());
        } else {
            hashMap.put(cVar.name(), obj);
        }
        return new b(this.f51840b, this.f51841c, this.f51842d, this.f51843e, this.f51844f, hashMap);
    }

    b n(Locale locale) {
        String str;
        String str2;
        a.b bVar = new a.b();
        bVar.f(this.f51840b);
        String a10 = yt.d.a(locale);
        String country = locale.getCountry();
        if (a10.isEmpty() && country.isEmpty()) {
            locale = Locale.ROOT;
            bVar.d(tt.a.f51013l, tt.j.f51062d);
            bVar.b(tt.a.f51016o, f51836j);
            str = "+";
            str2 = "-";
        } else {
            if (!country.isEmpty()) {
                a10 = a10 + "_" + country;
            }
            a aVar = (a) f51837k.get(a10);
            if (aVar == null) {
                try {
                    tt.i iVar = f51835i;
                    aVar = new a(iVar.d(locale), iVar.f(locale), iVar.b(locale), iVar.c(locale), iVar.e(locale));
                } catch (RuntimeException unused) {
                    aVar = f51838l;
                }
                a aVar2 = (a) f51837k.putIfAbsent(a10, aVar);
                if (aVar2 != null) {
                    aVar = aVar2;
                }
            }
            bVar.d(tt.a.f51013l, aVar.f51845a);
            bVar.b(tt.a.f51014m, aVar.f51846b);
            bVar.b(tt.a.f51016o, aVar.f51847c);
            str = aVar.f51848d;
            str2 = aVar.f51849e;
        }
        Locale locale2 = locale;
        bVar.h(locale2);
        HashMap hashMap = new HashMap(this.f51839a);
        hashMap.put(f51833g.name(), str);
        hashMap.put(f51834h.name(), str2);
        return new b(bVar.a(), locale2, this.f51842d, this.f51843e, this.f51844f, hashMap);
    }

    public String toString() {
        return b.class.getName() + "[attributes=" + this.f51840b + ",locale=" + this.f51841c + ",level=" + this.f51842d + ",section=" + this.f51843e + ",print-condition=" + this.f51844f + ",other=" + this.f51839a + ']';
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public b(tt.a aVar, Locale locale, int i10, int i11, st.n nVar) {
        if (aVar != null) {
            this.f51840b = aVar;
            this.f51841c = locale == null ? Locale.ROOT : locale;
            this.f51842d = i10;
            this.f51843e = i11;
            this.f51844f = nVar;
            this.f51839a = Collections.EMPTY_MAP;
            return;
        }
        throw new NullPointerException("Missing format attributes.");
    }

    private b(tt.a aVar, Locale locale, int i10, int i11, st.n nVar, Map map) {
        if (aVar != null) {
            this.f51840b = aVar;
            this.f51841c = locale == null ? Locale.ROOT : locale;
            this.f51842d = i10;
            this.f51843e = i11;
            this.f51844f = nVar;
            this.f51839a = Collections.unmodifiableMap(map);
            return;
        }
        throw new NullPointerException("Missing format attributes.");
    }
}
