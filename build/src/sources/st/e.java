package st;

import java.io.IOException;
import java.io.InputStream;
import java.lang.ref.Reference;
import java.lang.ref.ReferenceQueue;
import java.lang.ref.SoftReference;
import java.util.ArrayList;
import java.util.Collections;
import java.util.HashMap;
import java.util.HashSet;
import java.util.LinkedList;
import java.util.List;
import java.util.Locale;
import java.util.Map;
import java.util.MissingResourceException;
import java.util.Set;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.ConcurrentMap;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class e {

    /* renamed from: e  reason: collision with root package name */
    private static final ConcurrentMap f49638e = new ConcurrentHashMap(32);

    /* renamed from: f  reason: collision with root package name */
    private static final ReferenceQueue f49639f = new ReferenceQueue();

    /* renamed from: a  reason: collision with root package name */
    private final e f49640a;

    /* renamed from: b  reason: collision with root package name */
    private final Map f49641b;

    /* renamed from: c  reason: collision with root package name */
    private final String f49642c;

    /* renamed from: d  reason: collision with root package name */
    private final Locale f49643d;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static class a extends SoftReference {

        /* renamed from: a  reason: collision with root package name */
        private b f49644a;

        a(e eVar, b bVar) {
            super(eVar, e.f49639f);
            this.f49644a = bVar;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static class b {

        /* renamed from: a  reason: collision with root package name */
        private final String f49645a;

        /* renamed from: b  reason: collision with root package name */
        private final Locale f49646b;

        b(String str, Locale locale) {
            this.f49645a = str;
            this.f49646b = locale;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (obj instanceof b) {
                b bVar = (b) obj;
                if (this.f49645a.equals(bVar.f49645a) && this.f49646b.equals(bVar.f49646b)) {
                    return true;
                }
            }
            return false;
        }

        public int hashCode() {
            return (this.f49645a.hashCode() << 3) ^ this.f49646b.hashCode();
        }

        public String toString() {
            return this.f49645a + "/" + this.f49646b;
        }
    }

    private e(g gVar, String str, Locale locale) {
        int i10;
        this.f49640a = null;
        this.f49642c = str;
        this.f49643d = locale;
        HashMap hashMap = new HashMap();
        while (true) {
            String h10 = gVar.h();
            if (h10 != null) {
                String trim = h10.trim();
                if (!trim.isEmpty() && trim.charAt(0) != '#') {
                    int length = trim.length();
                    int i11 = 0;
                    while (true) {
                        if (i11 < length) {
                            if (trim.charAt(i11) == '=' && (i10 = i11 + 1) < length) {
                                hashMap.put(trim.substring(0, i11), trim.substring(i10));
                                break;
                            }
                            i11++;
                        } else {
                            break;
                        }
                    }
                }
            } else {
                this.f49641b = Collections.unmodifiableMap(hashMap);
                return;
            }
        }
    }

    public static List c(Locale locale) {
        String a10 = d.a(locale);
        String country = locale.getCountry();
        String variant = locale.getVariant();
        LinkedList linkedList = new LinkedList();
        if (!variant.isEmpty()) {
            linkedList.add(new Locale(a10, country, variant));
        }
        if (!country.isEmpty()) {
            linkedList.add(new Locale(a10, country, ""));
        }
        if (!a10.isEmpty()) {
            linkedList.add(new Locale(a10, "", ""));
            if (a10.equals("nn")) {
                linkedList.add(new Locale("nb", "", ""));
            }
        }
        linkedList.add(Locale.ROOT);
        return linkedList;
    }

    public static e h(String str, Locale locale) {
        e eVar;
        if (!str.isEmpty()) {
            if (locale != null) {
                b bVar = new b(str, locale);
                a aVar = (a) f49638e.get(bVar);
                if (aVar != null && (eVar = (e) aVar.get()) != null) {
                    return eVar;
                }
                while (true) {
                    Reference poll = f49639f.poll();
                    if (poll == null) {
                        break;
                    }
                    f49638e.remove(((a) poll).f49644a);
                }
                ArrayList arrayList = new ArrayList();
                for (Locale locale2 : c(locale)) {
                    try {
                        e i10 = i(str, locale2);
                        if (i10 != null) {
                            arrayList.add(i10);
                        }
                    } catch (IOException e10) {
                        throw new IllegalStateException(e10);
                    }
                }
                if (!arrayList.isEmpty()) {
                    for (int size = arrayList.size() - 1; size >= 1; size--) {
                        int i11 = size - 1;
                        arrayList.set(i11, ((e) arrayList.get(i11)).k((e) arrayList.get(size)));
                    }
                    e eVar2 = (e) arrayList.get(0);
                    f49638e.putIfAbsent(bVar, new a(eVar2, bVar));
                    return eVar2;
                }
                throw new MissingResourceException("Cannot find resource bundle for: " + j(str, locale), e.class.getName(), "");
            }
            throw new NullPointerException("Missing locale.");
        }
        throw new IllegalArgumentException("Base name must not be empty.");
    }

    private static e i(String str, Locale locale) {
        int indexOf = str.indexOf(47);
        String substring = str.substring(0, indexOf);
        String j10 = j(str.substring(indexOf + 1), locale);
        InputStream e10 = kt.d.c().e(kt.d.c().f(substring, e.class, j10), true);
        g gVar = null;
        if (e10 == null) {
            try {
                e10 = kt.d.c().d(e.class, j10, true);
            } catch (IOException unused) {
                return null;
            }
        }
        if (e10 == null) {
            return null;
        }
        try {
            g gVar2 = new g(e10);
            try {
                e eVar = new e(gVar2, str, locale);
                gVar2.close();
                return eVar;
            } catch (Throwable th2) {
                th = th2;
                gVar = gVar2;
                if (gVar != null) {
                    gVar.close();
                }
                throw th;
            }
        } catch (Throwable th3) {
            th = th3;
        }
    }

    private static String j(String str, Locale locale) {
        String a10 = d.a(locale);
        String country = locale.getCountry();
        String variant = locale.getVariant();
        StringBuilder sb2 = new StringBuilder(str.length() + 20);
        sb2.append(str.replace('.', '/'));
        if (!a10.isEmpty()) {
            sb2.append('_');
            sb2.append(a10);
            if (!variant.isEmpty()) {
                sb2.append('_');
                sb2.append(country);
                sb2.append('_');
                sb2.append(variant);
            } else if (!country.isEmpty()) {
                sb2.append('_');
                sb2.append(country);
            }
        }
        sb2.append(".properties");
        return sb2.toString();
    }

    private e k(e eVar) {
        if (eVar == null) {
            return this;
        }
        return new e(this, eVar);
    }

    public boolean b(String str) {
        if (str != null) {
            e eVar = this;
            while (((String) eVar.f49641b.get(str)) == null) {
                eVar = eVar.f49640a;
                if (eVar == null) {
                    return false;
                }
            }
            return true;
        }
        throw new NullPointerException("Missing resource key.");
    }

    public Set d() {
        return this.f49641b.keySet();
    }

    public Locale e() {
        return this.f49643d;
    }

    public String f(String str) {
        if (str != null) {
            e eVar = this;
            do {
                String str2 = (String) eVar.f49641b.get(str);
                if (str2 != null) {
                    return str2;
                }
                eVar = eVar.f49640a;
            } while (eVar != null);
            throw new MissingResourceException("Cannot find property resource for: " + j(this.f49642c, this.f49643d) + "=>" + str, e.class.getName(), str);
        }
        throw new NullPointerException("Missing resource key.");
    }

    public Set g() {
        HashSet hashSet = new HashSet(this.f49641b.keySet());
        e eVar = this;
        while (true) {
            eVar = eVar.f49640a;
            if (eVar != null) {
                hashSet.addAll(eVar.f49641b.keySet());
            } else {
                return Collections.unmodifiableSet(hashSet);
            }
        }
    }

    private e(e eVar, e eVar2) {
        this.f49640a = eVar2;
        this.f49642c = eVar.f49642c;
        this.f49643d = eVar.f49643d;
        this.f49641b = eVar.f49641b;
    }
}
