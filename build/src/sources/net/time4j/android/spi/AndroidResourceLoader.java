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
import nt.o;
import nt.u;
import nt.x;
import nt.y;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class AndroidResourceLoader extends kt.d {

    /* renamed from: f  reason: collision with root package name */
    private static final Map f40279f;

    /* renamed from: g  reason: collision with root package name */
    private static final Set f40280g;

    /* renamed from: d  reason: collision with root package name */
    private Context f40281d = null;

    /* renamed from: e  reason: collision with root package name */
    private List f40282e = Collections.EMPTY_LIST;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static /* synthetic */ class a {

        /* renamed from: a  reason: collision with root package name */
        static final /* synthetic */ int[] f40283a;

        static {
            int[] iArr = new int[nt.e.values().length];
            f40283a = iArr;
            try {
                iArr[nt.e.FULL.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                f40283a[nt.e.LONG.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                f40283a[nt.e.MEDIUM.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public class b implements pt.c {
        private b() {
        }

        private pt.c a() {
            return c.f40285a;
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

        @Override // nt.f
        public String b(nt.e eVar, Locale locale) {
            return a().b(eVar, locale);
        }

        @Override // nt.f
        public String e(nt.e eVar, nt.e eVar2, Locale locale) {
            return a().e(eVar, eVar2, locale);
        }

        @Override // nt.f
        public String f(nt.e eVar, Locale locale) {
            return h(eVar, locale, false);
        }

        @Override // pt.c
        public String h(nt.e eVar, Locale locale, boolean z10) {
            String str;
            boolean z11;
            String str2;
            String h10 = a().h(eVar, locale, z10);
            if (Locale.getDefault().equals(locale)) {
                nt.e eVar2 = nt.e.SHORT;
                if (eVar != eVar2) {
                    str = a().f(eVar2, locale);
                } else {
                    str = h10;
                }
                if (str.indexOf(97) == -1) {
                    z11 = true;
                } else {
                    z11 = false;
                }
                boolean is24HourFormat = DateFormat.is24HourFormat(AndroidResourceLoader.this.f40281d);
                if (is24HourFormat != z11) {
                    if (is24HourFormat) {
                        return c(h10).replace("  ", " ").trim();
                    }
                    if (locale.getLanguage().equals("en")) {
                        str2 = "b";
                    } else {
                        str2 = "B";
                    }
                    int i10 = a.f40283a[eVar.ordinal()];
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
            return h10;
        }

        /* synthetic */ b(AndroidResourceLoader androidResourceLoader, a aVar) {
            this();
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class c {

        /* renamed from: a  reason: collision with root package name */
        private static final st.c f40285a;

        /* renamed from: b  reason: collision with root package name */
        private static final Iterable f40286b;

        /* renamed from: c  reason: collision with root package name */
        private static final Iterable f40287c;

        /* renamed from: d  reason: collision with root package name */
        private static final Iterable f40288d;

        static {
            st.c cVar = new st.c();
            f40285a = cVar;
            f40286b = Collections.singleton(st.f.f49649d);
            f40287c = Collections.singletonList(new st.i());
            f40288d = Collections.unmodifiableList(Arrays.asList(cVar, new net.time4j.calendar.service.b()));
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static final class d implements Iterable {
        private d() {
        }

        @Override // java.lang.Iterable
        public Iterator iterator() {
            return l.f40290b.iterator();
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
            return m.f40293c.iterator();
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
            return c.f40286b.iterator();
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
            return l.f40289a.iterator();
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
            return c.f40288d.iterator();
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
            return c.f40287c.iterator();
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
            return m.f40292b.iterator();
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
            return m.f40291a.iterator();
        }

        /* synthetic */ k(a aVar) {
            this();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static final class l {

        /* renamed from: a  reason: collision with root package name */
        private static final Iterable f40289a = Collections.singleton(new st.a());

        /* renamed from: b  reason: collision with root package name */
        private static final Iterable f40290b = Arrays.asList(new st.b(), new net.time4j.calendar.service.c());
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static final class m {

        /* renamed from: a  reason: collision with root package name */
        private static final Iterable f40291a;

        /* renamed from: b  reason: collision with root package name */
        private static final Iterable f40292b;

        /* renamed from: c  reason: collision with root package name */
        private static final Iterable f40293c;

        static {
            tt.c cVar;
            Set singleton = Collections.singleton(new ut.a());
            f40291a = singleton;
            f40292b = Collections.singleton(new ut.b());
            Iterator it = singleton.iterator();
            while (true) {
                if (it.hasNext()) {
                    r rVar = (r) it.next();
                    if (rVar instanceof tt.c) {
                        cVar = (tt.c) tt.c.class.cast(rVar);
                        break;
                    }
                } else {
                    cVar = null;
                    break;
                }
            }
            if (cVar == null) {
                f40293c = Collections.EMPTY_LIST;
            } else {
                f40293c = Collections.singleton(cVar);
            }
        }
    }

    static {
        HashMap hashMap = new HashMap();
        hashMap.put(u.class, new h(null));
        hashMap.put(r.class, new k(null));
        hashMap.put(s.class, new j(null));
        hashMap.put(tt.c.class, new e(null));
        hashMap.put(mt.s.class, new d(null));
        hashMap.put(nt.i.class, new f(null));
        hashMap.put(o.class, new g(null));
        hashMap.put(x.class, Collections.singleton(new st.h()));
        hashMap.put(y.class, new i(null));
        hashMap.put(tt.e.class, Collections.singleton(new net.time4j.android.spi.a()));
        f40279f = Collections.unmodifiableMap(hashMap);
        HashSet hashSet = new HashSet();
        hashSet.add("i18n");
        hashSet.add("calendar");
        hashSet.add("olson");
        hashSet.add("tzdata");
        f40280g = Collections.unmodifiableSet(hashSet);
    }

    private static Object i(Object obj) {
        return obj;
    }

    @Override // kt.d
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
            Context context = this.f40281d;
            if (context != null) {
                return context.getAssets().open(uri.toString());
            }
            throw new IllegalStateException("'ApplicationStarter.initialize(context)' must be called first at app start.");
        } catch (IOException | RuntimeException unused) {
            return null;
        }
    }

    @Override // kt.d
    public URI f(String str, Class cls, String str2) {
        try {
            if (f40280g.contains(str)) {
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

    @Override // kt.d
    public Iterable g(Class cls) {
        Object obj = (Iterable) f40279f.get(cls);
        if (obj == null) {
            if (cls == nt.f.class) {
                obj = this.f40282e;
            } else {
                return ServiceLoader.load(cls, cls.getClassLoader());
            }
        }
        return (Iterable) i(obj);
    }

    public void j(Context context, jt.b bVar) {
        if (context != null) {
            this.f40281d = context;
            this.f40282e = Collections.singletonList(new b(this, null));
            return;
        }
        throw new NullPointerException("Missing Android-context.");
    }
}
