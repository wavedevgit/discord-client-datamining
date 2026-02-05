package net.time4j.android.spi;

import android.content.Context;
import android.text.format.DateFormat;
import java.io.IOException;
import java.io.InputStream;
import java.net.URI;
import java.net.URISyntaxException;
import java.net.URL;
import java.net.URLConnection;
import java.util.Arrays;
import java.util.Collections;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Iterator;
import java.util.List;
import java.util.Locale;
import java.util.Map;
import java.util.ServiceLoader;
import java.util.Set;
import net.time4j.tz.r;
import net.time4j.tz.s;
import qt.o;
import qt.u;
import qt.x;
import qt.y;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class AndroidResourceLoader extends nt.d {

    /* renamed from: f  reason: collision with root package name */
    private static final Map f39739f;

    /* renamed from: g  reason: collision with root package name */
    private static final Set f39740g;

    /* renamed from: d  reason: collision with root package name */
    private Context f39741d = null;

    /* renamed from: e  reason: collision with root package name */
    private List f39742e = Collections.EMPTY_LIST;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static /* synthetic */ class a {

        /* renamed from: a  reason: collision with root package name */
        static final /* synthetic */ int[] f39743a;

        static {
            int[] iArr = new int[qt.e.values().length];
            f39743a = iArr;
            try {
                iArr[qt.e.FULL.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                f39743a[qt.e.LONG.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                f39743a[qt.e.MEDIUM.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public class b implements st.c {
        private b() {
        }

        private st.c b() {
            return c.f39745a;
        }

        private String c(String str) {
            StringBuilder sb2 = new StringBuilder();
            int length = str.length();
            int i10 = 0;
            while (i10 < length) {
                char charAt = str.charAt(i10);
                if (charAt == '\'') {
                    sb2.append(charAt);
                    while (true) {
                        i10++;
                        if (i10 >= length) {
                            break;
                        }
                        char charAt2 = str.charAt(i10);
                        if (charAt2 == '\'') {
                            sb2.append(charAt2);
                            int i11 = i10 + 1;
                            if (i11 < length && str.charAt(i11) == '\'') {
                                i10 = i11;
                            }
                        }
                        sb2.append(charAt2);
                    }
                } else if (charAt == 'h') {
                    sb2.append('H');
                } else if (charAt != 'a') {
                    sb2.append(charAt);
                }
                i10++;
            }
            return sb2.toString();
        }

        @Override // st.c
        public String a(qt.e eVar, Locale locale, boolean z10) {
            String str;
            boolean z11;
            String str2;
            String a10 = b().a(eVar, locale, z10);
            if (Locale.getDefault().equals(locale)) {
                qt.e eVar2 = qt.e.SHORT;
                if (eVar != eVar2) {
                    str = b().k(eVar2, locale);
                } else {
                    str = a10;
                }
                if (str.indexOf(97) == -1) {
                    z11 = true;
                } else {
                    z11 = false;
                }
                boolean is24HourFormat = DateFormat.is24HourFormat(AndroidResourceLoader.this.f39741d);
                if (is24HourFormat != z11) {
                    if (is24HourFormat) {
                        return c(a10).replace("  ", " ").trim();
                    }
                    if (locale.getLanguage().equals("en")) {
                        str2 = "b";
                    } else {
                        str2 = "B";
                    }
                    int i10 = a.f39743a[eVar.ordinal()];
                    if (i10 != 1) {
                        if (i10 != 2) {
                            if (i10 != 3) {
                                return "h:mm " + str2;
                            }
                            return "h:mm:ss " + str2;
                        }
                        return "h:mm:ss " + str2 + " z";
                    }
                    return "h:mm:ss " + str2 + " zzzz";
                }
            }
            return a10;
        }

        @Override // qt.f
        public String e(qt.e eVar, Locale locale) {
            return b().e(eVar, locale);
        }

        @Override // qt.f
        public String f(qt.e eVar, qt.e eVar2, Locale locale) {
            return b().f(eVar, eVar2, locale);
        }

        @Override // qt.f
        public String k(qt.e eVar, Locale locale) {
            return a(eVar, locale, false);
        }

        /* synthetic */ b(AndroidResourceLoader androidResourceLoader, a aVar) {
            this();
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class c {

        /* renamed from: a  reason: collision with root package name */
        private static final vt.c f39745a;

        /* renamed from: b  reason: collision with root package name */
        private static final Iterable f39746b;

        /* renamed from: c  reason: collision with root package name */
        private static final Iterable f39747c;

        /* renamed from: d  reason: collision with root package name */
        private static final Iterable f39748d;

        static {
            vt.c cVar = new vt.c();
            f39745a = cVar;
            f39746b = Collections.singleton(vt.f.f52414d);
            f39747c = Collections.singletonList(new vt.i());
            f39748d = Collections.unmodifiableList(Arrays.asList(cVar, new net.time4j.calendar.service.b()));
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static final class d implements Iterable {
        private d() {
        }

        @Override // java.lang.Iterable
        public Iterator iterator() {
            return l.f39750b.iterator();
        }

        /* synthetic */ d(a aVar) {
            this();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static final class e implements Iterable {
        private e() {
        }

        @Override // java.lang.Iterable
        public Iterator iterator() {
            return m.f39753c.iterator();
        }

        /* synthetic */ e(a aVar) {
            this();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static final class f implements Iterable {
        private f() {
        }

        @Override // java.lang.Iterable
        public Iterator iterator() {
            return c.f39746b.iterator();
        }

        /* synthetic */ f(a aVar) {
            this();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static final class g implements Iterable {
        private g() {
        }

        @Override // java.lang.Iterable
        public Iterator iterator() {
            return l.f39749a.iterator();
        }

        /* synthetic */ g(a aVar) {
            this();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static final class h implements Iterable {
        private h() {
        }

        @Override // java.lang.Iterable
        public Iterator iterator() {
            return c.f39748d.iterator();
        }

        /* synthetic */ h(a aVar) {
            this();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static final class i implements Iterable {
        private i() {
        }

        @Override // java.lang.Iterable
        public Iterator iterator() {
            return c.f39747c.iterator();
        }

        /* synthetic */ i(a aVar) {
            this();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static final class j implements Iterable {
        private j() {
        }

        @Override // java.lang.Iterable
        public Iterator iterator() {
            return m.f39752b.iterator();
        }

        /* synthetic */ j(a aVar) {
            this();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static final class k implements Iterable {
        private k() {
        }

        @Override // java.lang.Iterable
        public Iterator iterator() {
            return m.f39751a.iterator();
        }

        /* synthetic */ k(a aVar) {
            this();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static final class l {

        /* renamed from: a  reason: collision with root package name */
        private static final Iterable f39749a = Collections.singleton(new vt.a());

        /* renamed from: b  reason: collision with root package name */
        private static final Iterable f39750b = Arrays.asList(new vt.b(), new net.time4j.calendar.service.c());
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static final class m {

        /* renamed from: a  reason: collision with root package name */
        private static final Iterable f39751a;

        /* renamed from: b  reason: collision with root package name */
        private static final Iterable f39752b;

        /* renamed from: c  reason: collision with root package name */
        private static final Iterable f39753c;

        static {
            wt.c cVar;
            Set singleton = Collections.singleton(new xt.a());
            f39751a = singleton;
            f39752b = Collections.singleton(new xt.b());
            Iterator it = singleton.iterator();
            while (true) {
                if (it.hasNext()) {
                    r rVar = (r) it.next();
                    if (rVar instanceof wt.c) {
                        cVar = (wt.c) wt.c.class.cast(rVar);
                        break;
                    }
                } else {
                    cVar = null;
                    break;
                }
            }
            if (cVar == null) {
                f39753c = Collections.EMPTY_LIST;
            } else {
                f39753c = Collections.singleton(cVar);
            }
        }
    }

    static {
        HashMap hashMap = new HashMap();
        hashMap.put(u.class, new h(null));
        hashMap.put(r.class, new k(null));
        hashMap.put(s.class, new j(null));
        hashMap.put(wt.c.class, new e(null));
        hashMap.put(pt.s.class, new d(null));
        hashMap.put(qt.i.class, new f(null));
        hashMap.put(o.class, new g(null));
        hashMap.put(x.class, Collections.singleton(new vt.h()));
        hashMap.put(y.class, new i(null));
        hashMap.put(wt.e.class, Collections.singleton(new net.time4j.android.spi.a()));
        f39739f = Collections.unmodifiableMap(hashMap);
        HashSet hashSet = new HashSet();
        hashSet.add("i18n");
        hashSet.add("calendar");
        hashSet.add("olson");
        hashSet.add("tzdata");
        f39740g = Collections.unmodifiableSet(hashSet);
    }

    private static Object i(Object obj) {
        return obj;
    }

    @Override // nt.d
    public InputStream e(URI uri, boolean z10) {
        if (uri == null) {
            return null;
        }
        try {
            if (uri.isAbsolute()) {
                URLConnection openConnection = uri.toURL().openConnection();
                openConnection.setUseCaches(false);
                return openConnection.getInputStream();
            }
            Context context = this.f39741d;
            if (context != null) {
                return context.getAssets().open(uri.toString());
            }
            throw new IllegalStateException("'ApplicationStarter.initialize(context)' must be called first at app start.");
        } catch (IOException | RuntimeException unused) {
            return null;
        }
    }

    @Override // nt.d
    public URI f(String str, Class cls, String str2) {
        try {
            if (f39740g.contains(str)) {
                return new URI("net/time4j/" + str + '/' + str2);
            }
            URL resource = cls.getClassLoader().getResource(str2);
            if (resource != null) {
                return resource.toURI();
            }
            return null;
        } catch (URISyntaxException unused) {
            return null;
        }
    }

    @Override // nt.d
    public Iterable g(Class cls) {
        Object obj = (Iterable) f39739f.get(cls);
        if (obj == null) {
            if (cls == qt.f.class) {
                obj = this.f39742e;
            } else {
                return ServiceLoader.load(cls, cls.getClassLoader());
            }
        }
        return (Iterable) i(obj);
    }

    public void j(Context context, mt.b bVar) {
        if (context != null) {
            this.f39741d = context;
            this.f39742e = Collections.singletonList(new b(this, null));
            return;
        }
        throw new NullPointerException("Missing Android-context.");
    }
}
