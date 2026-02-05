package net.time4j.tz;

import android.util.TimeUtils;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import java.io.Serializable;
import java.lang.ref.ReferenceQueue;
import java.lang.ref.SoftReference;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.Comparator;
import java.util.HashSet;
import java.util.LinkedList;
import java.util.List;
import java.util.Locale;
import java.util.Map;
import java.util.Set;
import java.util.TimeZone;
import java.util.concurrent.ConcurrentMap;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class l implements Serializable {
    private static final ConcurrentMap A;
    private static final ReferenceQueue B;
    private static final LinkedList C;
    private static final ConcurrentMap D;
    static final s E;
    private static final l F;

    /* renamed from: d  reason: collision with root package name */
    private static final String f40221d = System.getProperty("line.separator");

    /* renamed from: e  reason: collision with root package name */
    private static final String f40222e = System.getProperty("net.time4j.tz.repository.version");

    /* renamed from: i  reason: collision with root package name */
    private static final Comparator f40223i = new a();

    /* renamed from: o  reason: collision with root package name */
    public static final o f40224o;

    /* renamed from: p  reason: collision with root package name */
    public static final o f40225p;

    /* renamed from: q  reason: collision with root package name */
    private static final boolean f40226q;

    /* renamed from: r  reason: collision with root package name */
    private static final boolean f40227r;

    /* renamed from: s  reason: collision with root package name */
    private static volatile e f40228s;

    /* renamed from: t  reason: collision with root package name */
    private static volatile l f40229t;

    /* renamed from: u  reason: collision with root package name */
    private static volatile boolean f40230u;

    /* renamed from: v  reason: collision with root package name */
    private static int f40231v;

    /* renamed from: w  reason: collision with root package name */
    private static final Map f40232w;

    /* renamed from: x  reason: collision with root package name */
    private static final Map f40233x;

    /* renamed from: y  reason: collision with root package name */
    private static final r f40234y;

    /* renamed from: z  reason: collision with root package name */
    private static final r f40235z;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static class a implements Comparator {
        a() {
        }

        @Override // java.util.Comparator
        /* renamed from: a */
        public int compare(k kVar, k kVar2) {
            return kVar.a().compareTo(kVar2.a());
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static class b {
        public static void a() {
            synchronized (l.class) {
                while (l.B.poll() != null) {
                }
                l.C.clear();
            }
            e unused = l.f40228s = new e();
            l.A.clear();
            if (l.f40227r) {
                l unused2 = l.f40229t = l.f();
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static class c extends SoftReference {

        /* renamed from: a  reason: collision with root package name */
        private final String f40236a;

        c(l lVar, ReferenceQueue referenceQueue) {
            super(lVar, referenceQueue);
            this.f40236a = lVar.z().a();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static class d implements r, s {
        private d() {
        }

        @Override // net.time4j.tz.r
        public s a() {
            return this;
        }

        @Override // net.time4j.tz.s
        public Set b(Locale locale, boolean z10) {
            return Collections.EMPTY_SET;
        }

        @Override // net.time4j.tz.r
        public Map c() {
            return Collections.EMPTY_MAP;
        }

        @Override // net.time4j.tz.s
        public String d(boolean z10, Locale locale) {
            if (z10) {
                return "GMT";
            }
            return "GMT±hh:mm";
        }

        @Override // net.time4j.tz.r
        public String e() {
            return TimeUtils.getTimeZoneDatabaseVersion();
        }

        @Override // net.time4j.tz.s
        public String f(String str, net.time4j.tz.d dVar, Locale locale) {
            if (locale != null) {
                if (str.isEmpty()) {
                    return "";
                }
                TimeZone R = h.R(str);
                if (!R.getID().equals(str)) {
                    return "";
                }
                return R.getDisplayName(dVar.d(), !dVar.a(), locale);
            }
            throw new NullPointerException("Missing locale.");
        }

        @Override // net.time4j.tz.r
        public Set g() {
            HashSet hashSet = new HashSet();
            hashSet.addAll(Arrays.asList(TimeZone.getAvailableIDs()));
            return hashSet;
        }

        @Override // net.time4j.tz.r
        public String getLocation() {
            return "";
        }

        @Override // net.time4j.tz.r
        public String getName() {
            return "java.util.TimeZone";
        }

        @Override // net.time4j.tz.r
        public String h() {
            return "";
        }

        @Override // net.time4j.tz.r
        public m load(String str) {
            return null;
        }

        /* synthetic */ d(a aVar) {
            this();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static class e {

        /* renamed from: a  reason: collision with root package name */
        private final List f40237a;

        /* renamed from: b  reason: collision with root package name */
        private final List f40238b;

        e() {
            ArrayList arrayList = new ArrayList((int) IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET);
            ArrayList arrayList2 = new ArrayList((int) IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET);
            arrayList.add(p.f40286v);
            for (Map.Entry entry : l.D.entrySet()) {
                r rVar = (r) entry.getValue();
                if (rVar != l.f40234y || l.f40235z == l.f40234y) {
                    for (String str : rVar.g()) {
                        k P = l.P(str);
                        if (!arrayList.contains(P)) {
                            arrayList.add(P);
                        }
                    }
                    arrayList2.addAll(arrayList);
                    for (String str2 : rVar.c().keySet()) {
                        k P2 = l.P(str2);
                        if (!arrayList2.contains(P2)) {
                            arrayList2.add(P2);
                        }
                    }
                }
            }
            Collections.sort(arrayList, l.f40223i);
            Collections.sort(arrayList2, l.f40223i);
            this.f40237a = Collections.unmodifiableList(arrayList);
            this.f40238b = Collections.unmodifiableList(arrayList2);
        }
    }

    /* JADX WARN: Removed duplicated region for block: B:50:0x019c  */
    /* JADX WARN: Removed duplicated region for block: B:51:0x01a3  */
    /* JADX WARN: Removed duplicated region for block: B:54:0x01a9  */
    static {
        /*
            Method dump skipped, instructions count: 437
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: net.time4j.tz.l.<clinit>():void");
    }

    public static Set C(Locale locale, boolean z10, String str) {
        r D2 = D(str);
        if (D2 == null) {
            return Collections.EMPTY_SET;
        }
        s a10 = D2.a();
        if (a10 == null) {
            a10 = E;
        }
        HashSet hashSet = new HashSet();
        for (String str2 : a10.b(locale, z10)) {
            hashSet.add(P(str2));
        }
        return Collections.unmodifiableSet(hashSet);
    }

    private static r D(String str) {
        if (!str.isEmpty()) {
            if (str.equals("DEFAULT")) {
                return f40235z;
            }
            return (r) D.get(str);
        }
        throw new IllegalArgumentException("Missing zone model provider.");
    }

    private static l F(k kVar, String str, boolean z10) {
        l lVar;
        String str2;
        String str3;
        ConcurrentMap concurrentMap = A;
        c cVar = (c) concurrentMap.get(str);
        if (cVar != null) {
            lVar = (l) cVar.get();
            if (lVar == null) {
                concurrentMap.remove(cVar.f40236a);
            }
        } else {
            lVar = null;
        }
        if (lVar != null) {
            return lVar;
        }
        String str4 = "";
        int length = str.length();
        boolean z11 = false;
        int i10 = 0;
        while (true) {
            if (i10 < length) {
                if (str.charAt(i10) == '~') {
                    str4 = str.substring(0, i10);
                    str2 = str.substring(i10 + 1);
                    break;
                }
                i10++;
            } else {
                str2 = str;
                break;
            }
        }
        if (str2.isEmpty()) {
            if (!z10) {
                return null;
            }
            throw new IllegalArgumentException("Timezone key is empty.");
        }
        r rVar = f40235z;
        if (str4.isEmpty() || str4.equals("DEFAULT")) {
            z11 = true;
        }
        if (!z11 && (rVar = (r) D.get(str4)) == null) {
            if (!z10) {
                return null;
            }
            if (str4.equals("TZDB")) {
                str3 = "TZDB provider not available: ";
            } else {
                str3 = "Timezone model provider not registered: ";
            }
            throw new IllegalArgumentException(str3 + str);
        }
        if (kVar == null) {
            if (z11) {
                kVar = P(str2);
                if (kVar instanceof p) {
                    return ((p) kVar).n();
                }
            } else {
                kVar = new net.time4j.tz.e(str);
            }
        }
        if (rVar == f40234y) {
            h hVar = new h(kVar, str2);
            if (!hVar.T() || str2.equals("GMT") || str2.startsWith("UT") || str2.equals("Z")) {
                lVar = hVar;
            }
        } else {
            m load = rVar.load(str2);
            if (load == null) {
                lVar = H(rVar, kVar, str2);
            } else {
                lVar = new net.time4j.tz.c(kVar, load);
            }
        }
        if (lVar == null) {
            if (!z10) {
                return null;
            }
            if (TimeZone.getDefault().getID().equals(str)) {
                return new h(new net.time4j.tz.e(str));
            }
            throw new IllegalArgumentException("Unknown timezone: " + str);
        }
        if (f40230u) {
            c cVar2 = (c) A.putIfAbsent(str, new c(lVar, B));
            if (cVar2 == null) {
                synchronized (l.class) {
                    try {
                        C.addFirst(lVar);
                        while (true) {
                            LinkedList linkedList = C;
                            if (linkedList.size() >= f40231v) {
                                linkedList.removeLast();
                            }
                        }
                    } catch (Throwable th2) {
                        throw th2;
                    }
                }
                return lVar;
            }
            l lVar2 = (l) cVar2.get();
            if (lVar2 != null) {
                return lVar2;
            }
        }
        return lVar;
    }

    private static l G(k kVar, boolean z10) {
        if (kVar instanceof p) {
            return ((p) kVar).n();
        }
        return F(kVar, kVar.a(), z10);
    }

    private static l H(r rVar, k kVar, String str) {
        Map c10 = rVar.c();
        String str2 = str;
        m mVar = null;
        while (mVar == null) {
            str2 = (String) c10.get(str2);
            if (str2 == null) {
                break;
            }
            mVar = rVar.load(str2);
        }
        if (mVar == null) {
            String h10 = rVar.h();
            if (h10.isEmpty()) {
                return null;
            }
            if (!h10.equals(rVar.getName())) {
                return new net.time4j.tz.a(kVar, M(h10 + "~" + str));
            }
            throw new IllegalArgumentException("Circular zone model provider fallback: " + rVar.getName());
        }
        return new net.time4j.tz.c(kVar, mVar);
    }

    private static List L(ClassLoader classLoader, String... strArr) {
        ArrayList arrayList = new ArrayList();
        for (String str : strArr) {
            Class<?> cls = Class.forName("net.time4j.tz.olson." + str, true, classLoader);
            if (k.class.isAssignableFrom(cls)) {
                arrayList.add(cls);
            }
        }
        return Collections.unmodifiableList(arrayList);
    }

    public static l M(String str) {
        return F(null, str, true);
    }

    public static l N(k kVar) {
        return G(kVar, true);
    }

    public static l O() {
        if (f40227r && f40229t != null) {
            return f40229t;
        }
        return F;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static k P(String str) {
        k kVar = (k) f40232w.get(str);
        if (kVar == null) {
            if (str.startsWith("GMT")) {
                str = "UTC" + str.substring(3);
            }
            p w10 = p.w(str, false);
            if (w10 == null) {
                return new net.time4j.tz.e(str);
            }
            return w10;
        }
        return kVar;
    }

    static /* synthetic */ l f() {
        return v();
    }

    private static r r(r rVar, r rVar2) {
        String e10 = rVar.e();
        if (!e10.isEmpty()) {
            String str = f40222e;
            if (e10.equals(str) || (str == null && (rVar2 == null || e10.compareTo(rVar2.e()) > 0 || (e10.compareTo(rVar2.e()) == 0 && !rVar.getLocation().contains("{java.home}"))))) {
                return rVar;
            }
        }
        return rVar2;
    }

    private static void s(Map map) {
        p pVar = p.f40286v;
        map.put("Etc/GMT", pVar);
        map.put("Etc/Greenwich", pVar);
        map.put("Etc/Universal", pVar);
        map.put("Etc/Zulu", pVar);
        map.put("Etc/GMT+0", pVar);
        map.put("Etc/GMT-0", pVar);
        map.put("Etc/GMT0", pVar);
        map.put("Etc/UTC", pVar);
        map.put("Etc/UCT", pVar);
        map.put("Etc/GMT-14", p.t(50400));
        map.put("Etc/GMT-13", p.t(46800));
        map.put("Etc/GMT-12", p.t(43200));
        map.put("Etc/GMT-11", p.t(39600));
        map.put("Etc/GMT-10", p.t(36000));
        map.put("Etc/GMT-9", p.t(32400));
        map.put("Etc/GMT-8", p.t(28800));
        map.put("Etc/GMT-7", p.t(25200));
        map.put("Etc/GMT-6", p.t(21600));
        map.put("Etc/GMT-5", p.t(18000));
        map.put("Etc/GMT-4", p.t(14400));
        map.put("Etc/GMT-3", p.t(10800));
        map.put("Etc/GMT-2", p.t(7200));
        map.put("Etc/GMT-1", p.t(3600));
        map.put("Etc/GMT+1", p.t(-3600));
        map.put("Etc/GMT+2", p.t(-7200));
        map.put("Etc/GMT+3", p.t(-10800));
        map.put("Etc/GMT+4", p.t(-14400));
        map.put("Etc/GMT+5", p.t(-18000));
        map.put("Etc/GMT+6", p.t(-21600));
        map.put("Etc/GMT+7", p.t(-25200));
        map.put("Etc/GMT+8", p.t(-28800));
        map.put("Etc/GMT+9", p.t(-32400));
        map.put("Etc/GMT+10", p.t(-36000));
        map.put("Etc/GMT+11", p.t(-39600));
        map.put("Etc/GMT+12", p.t(-43200));
    }

    public static List t() {
        return f40228s.f40237a;
    }

    public static List u(String str) {
        if (str.equals("INCLUDE_ALIAS")) {
            return f40228s.f40238b;
        }
        r D2 = D(str);
        if (D2 == null) {
            return Collections.EMPTY_LIST;
        }
        ArrayList arrayList = new ArrayList();
        for (String str2 : D2.g()) {
            arrayList.add(P(str2));
        }
        Collections.sort(arrayList, f40223i);
        return Collections.unmodifiableList(arrayList);
    }

    private static l v() {
        String id2 = TimeZone.getDefault().getID();
        l F2 = F(null, id2, false);
        if (F2 == null) {
            return new h(new net.time4j.tz.e(id2));
        }
        return F2;
    }

    public static String x(k kVar, net.time4j.tz.d dVar, Locale locale) {
        String str;
        String a10 = kVar.a();
        int indexOf = a10.indexOf(126);
        r rVar = f40235z;
        if (indexOf >= 0) {
            String substring = a10.substring(0, indexOf);
            if (substring.equals("DEFAULT") || (rVar = (r) D.get(substring)) != null) {
                str = a10.substring(indexOf + 1);
            }
            return a10;
        }
        str = a10;
        s a11 = rVar.a();
        if (a11 == null) {
            a11 = E;
        }
        String f10 = a11.f(str, dVar, locale);
        if (f10.isEmpty()) {
            s sVar = E;
            if (a11 != sVar) {
                f10 = sVar.f(str, dVar, locale);
            }
            if (f10.isEmpty()) {
                return a10;
            }
        }
        return f10;
    }

    public abstract p A(nt.a aVar, nt.g gVar);

    public abstract p B(nt.f fVar);

    public abstract o E();

    public abstract boolean I(nt.f fVar);

    public abstract boolean J();

    public abstract boolean K(nt.a aVar, nt.g gVar);

    public abstract l Q(o oVar);

    public String w(net.time4j.tz.d dVar, Locale locale) {
        return x(z(), dVar, locale);
    }

    public abstract m y();

    public abstract k z();
}
