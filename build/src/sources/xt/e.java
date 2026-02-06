package xt;

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
    private static final ConcurrentMap f54803e = new ConcurrentHashMap(32);

    /* renamed from: f  reason: collision with root package name */
    private static final ReferenceQueue f54804f = new ReferenceQueue();

    /* renamed from: a  reason: collision with root package name */
    private final e f54805a;

    /* renamed from: b  reason: collision with root package name */
    private final Map f54806b;

    /* renamed from: c  reason: collision with root package name */
    private final String f54807c;

    /* renamed from: d  reason: collision with root package name */
    private final Locale f54808d;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static class a extends SoftReference {

        /* renamed from: a  reason: collision with root package name */
        private b f54809a;

        a(e eVar, b bVar) {
            super(eVar, e.f54804f);
            this.f54809a = bVar;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static class b {

        /* renamed from: a  reason: collision with root package name */
        private final String f54810a;

        /* renamed from: b  reason: collision with root package name */
        private final Locale f54811b;

        b(String str, Locale locale) {
            this.f54810a = str;
            this.f54811b = locale;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (obj instanceof b) {
                b bVar = (b) obj;
                if (this.f54810a.equals(bVar.f54810a) && this.f54811b.equals(bVar.f54811b)) {
                    return true;
                }
            }
            return false;
        }

        public int hashCode() {
            return (this.f54810a.hashCode() << 3) ^ this.f54811b.hashCode();
        }

        public String toString() {
            return this.f54810a + "/" + this.f54811b;
        }
    }

    private e(g gVar, String str, Locale locale) {
        int i10;
        this.f54805a = null;
        this.f54807c = str;
        this.f54808d = locale;
        HashMap hashMap = new HashMap();
        while (true) {
            String g10 = gVar.g();
            if (g10 != null) {
                String trim = g10.trim();
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
                this.f54806b = Collections.unmodifiableMap(hashMap);
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
                a aVar = (a) f54803e.get(bVar);
                if (aVar != null && (eVar = (e) aVar.get()) != null) {
                    return eVar;
                }
                while (true) {
                    Reference poll = f54804f.poll();
                    if (poll == null) {
                        break;
                    }
                    f54803e.remove(((a) poll).f54809a);
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
                    f54803e.putIfAbsent(bVar, new a(eVar2, bVar));
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
        InputStream e10 = pt.d.c().e(pt.d.c().f(substring, e.class, j10), true);
        g gVar = null;
        if (e10 == null) {
            try {
                e10 = pt.d.c().d(e.class, j10, true);
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
            while (((String) eVar.f54806b.get(str)) == null) {
                eVar = eVar.f54805a;
                if (eVar == null) {
                    return false;
                }
            }
            return true;
        }
        throw new NullPointerException("Missing resource key.");
    }

    public Set d() {
        return this.f54806b.keySet();
    }

    public Locale e() {
        return this.f54808d;
    }

    public String f(String str) {
        if (str != null) {
            e eVar = this;
            do {
                String str2 = (String) eVar.f54806b.get(str);
                if (str2 != null) {
                    return str2;
                }
                eVar = eVar.f54805a;
            } while (eVar != null);
            throw new MissingResourceException("Cannot find property resource for: " + j(this.f54807c, this.f54808d) + "=>" + str, e.class.getName(), str);
        }
        throw new NullPointerException("Missing resource key.");
    }

    public Set g() {
        HashSet hashSet = new HashSet(this.f54806b.keySet());
        e eVar = this;
        while (true) {
            eVar = eVar.f54805a;
            if (eVar != null) {
                hashSet.addAll(eVar.f54806b.keySet());
            } else {
                return Collections.unmodifiableSet(hashSet);
            }
        }
    }

    private e(e eVar, e eVar2) {
        this.f54805a = eVar2;
        this.f54807c = eVar.f54807c;
        this.f54808d = eVar.f54808d;
        this.f54806b = eVar.f54806b;
    }
}
