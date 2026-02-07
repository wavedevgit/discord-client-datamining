package r3;

import android.app.ActivityManager;
import android.content.Context;
import android.content.Intent;
import android.database.Cursor;
import android.os.CancellationSignal;
import android.os.Looper;
import android.util.Log;
import java.io.File;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.BitSet;
import java.util.Collections;
import java.util.HashSet;
import java.util.Iterator;
import java.util.LinkedHashMap;
import java.util.LinkedHashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.TreeMap;
import java.util.concurrent.Callable;
import java.util.concurrent.Executor;
import java.util.concurrent.TimeUnit;
import java.util.concurrent.locks.Lock;
import java.util.concurrent.locks.ReentrantReadWriteLock;
import kotlin.collections.CollectionsKt;
import kotlin.collections.o0;
import kotlin.collections.x0;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Lambda;
import x3.h;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class u {

    /* renamed from: o  reason: collision with root package name */
    public static final c f48618o = new c(null);

    /* renamed from: a  reason: collision with root package name */
    protected volatile x3.g f48619a;

    /* renamed from: b  reason: collision with root package name */
    private Executor f48620b;

    /* renamed from: c  reason: collision with root package name */
    private Executor f48621c;

    /* renamed from: d  reason: collision with root package name */
    private x3.h f48622d;

    /* renamed from: f  reason: collision with root package name */
    private boolean f48624f;

    /* renamed from: g  reason: collision with root package name */
    private boolean f48625g;

    /* renamed from: h  reason: collision with root package name */
    protected List f48626h;

    /* renamed from: k  reason: collision with root package name */
    private r3.c f48629k;

    /* renamed from: m  reason: collision with root package name */
    private final Map f48631m;

    /* renamed from: n  reason: collision with root package name */
    private final Map f48632n;

    /* renamed from: e  reason: collision with root package name */
    private final o f48623e = g();

    /* renamed from: i  reason: collision with root package name */
    private Map f48627i = new LinkedHashMap();

    /* renamed from: j  reason: collision with root package name */
    private final ReentrantReadWriteLock f48628j = new ReentrantReadWriteLock();

    /* renamed from: l  reason: collision with root package name */
    private final ThreadLocal f48630l = new ThreadLocal();

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class a {

        /* renamed from: a  reason: collision with root package name */
        private final Context f48633a;

        /* renamed from: b  reason: collision with root package name */
        private final Class f48634b;

        /* renamed from: c  reason: collision with root package name */
        private final String f48635c;

        /* renamed from: d  reason: collision with root package name */
        private final List f48636d;

        /* renamed from: e  reason: collision with root package name */
        private final List f48637e;

        /* renamed from: f  reason: collision with root package name */
        private List f48638f;

        /* renamed from: g  reason: collision with root package name */
        private Executor f48639g;

        /* renamed from: h  reason: collision with root package name */
        private Executor f48640h;

        /* renamed from: i  reason: collision with root package name */
        private h.c f48641i;

        /* renamed from: j  reason: collision with root package name */
        private boolean f48642j;

        /* renamed from: k  reason: collision with root package name */
        private d f48643k;

        /* renamed from: l  reason: collision with root package name */
        private Intent f48644l;

        /* renamed from: m  reason: collision with root package name */
        private boolean f48645m;

        /* renamed from: n  reason: collision with root package name */
        private boolean f48646n;

        /* renamed from: o  reason: collision with root package name */
        private long f48647o;

        /* renamed from: p  reason: collision with root package name */
        private TimeUnit f48648p;

        /* renamed from: q  reason: collision with root package name */
        private final e f48649q;

        /* renamed from: r  reason: collision with root package name */
        private Set f48650r;

        /* renamed from: s  reason: collision with root package name */
        private Set f48651s;

        /* renamed from: t  reason: collision with root package name */
        private String f48652t;

        /* renamed from: u  reason: collision with root package name */
        private File f48653u;

        /* renamed from: v  reason: collision with root package name */
        private Callable f48654v;

        public a(Context context, Class klass, String str) {
            Intrinsics.checkNotNullParameter(context, "context");
            Intrinsics.checkNotNullParameter(klass, "klass");
            this.f48633a = context;
            this.f48634b = klass;
            this.f48635c = str;
            this.f48636d = new ArrayList();
            this.f48637e = new ArrayList();
            this.f48638f = new ArrayList();
            this.f48643k = d.AUTOMATIC;
            this.f48645m = true;
            this.f48647o = -1L;
            this.f48649q = new e();
            this.f48650r = new LinkedHashSet();
        }

        public a a(b callback) {
            Intrinsics.checkNotNullParameter(callback, "callback");
            this.f48636d.add(callback);
            return this;
        }

        public a b(s3.b... migrations) {
            Intrinsics.checkNotNullParameter(migrations, "migrations");
            if (this.f48651s == null) {
                this.f48651s = new HashSet();
            }
            for (s3.b bVar : migrations) {
                Set set = this.f48651s;
                Intrinsics.checkNotNull(set);
                set.add(Integer.valueOf(bVar.f49705a));
                Set set2 = this.f48651s;
                Intrinsics.checkNotNull(set2);
                set2.add(Integer.valueOf(bVar.f49706b));
            }
            this.f48649q.b((s3.b[]) Arrays.copyOf(migrations, migrations.length));
            return this;
        }

        public a c() {
            this.f48642j = true;
            return this;
        }

        public u d() {
            int i10;
            int i11;
            Executor executor = this.f48639g;
            if (executor == null && this.f48640h == null) {
                Executor f10 = l.c.f();
                this.f48640h = f10;
                this.f48639g = f10;
            } else if (executor != null && this.f48640h == null) {
                this.f48640h = executor;
            } else if (executor == null) {
                this.f48639g = this.f48640h;
            }
            Set<Number> set = this.f48651s;
            if (set != null) {
                Intrinsics.checkNotNull(set);
                for (Number number : set) {
                    int intValue = number.intValue();
                    if (this.f48650r.contains(Integer.valueOf(intValue))) {
                        throw new IllegalArgumentException(("Inconsistency detected. A Migration was supplied to addMigration(Migration... migrations) that has a start or end version equal to a start version supplied to fallbackToDestructiveMigrationFrom(int... startVersions). Start version: " + intValue).toString());
                    }
                }
            }
            r3.e eVar = this.f48641i;
            if (eVar == null) {
                eVar = new y3.f();
            }
            if (eVar != null) {
                if (this.f48647o > 0) {
                    if (this.f48635c != null) {
                        long j10 = this.f48647o;
                        TimeUnit timeUnit = this.f48648p;
                        if (timeUnit != null) {
                            Executor executor2 = this.f48639g;
                            if (executor2 != null) {
                                eVar = new r3.e(eVar, new r3.c(j10, timeUnit, executor2));
                            } else {
                                throw new IllegalArgumentException("Required value was null.");
                            }
                        } else {
                            throw new IllegalArgumentException("Required value was null.");
                        }
                    } else {
                        throw new IllegalArgumentException("Cannot create auto-closing database for an in-memory database.");
                    }
                }
                String str = this.f48652t;
                if (str != null || this.f48653u != null || this.f48654v != null) {
                    if (this.f48635c != null) {
                        int i12 = 0;
                        if (str == null) {
                            i10 = 0;
                        } else {
                            i10 = 1;
                        }
                        File file = this.f48653u;
                        if (file == null) {
                            i11 = 0;
                        } else {
                            i11 = 1;
                        }
                        Callable callable = this.f48654v;
                        if (callable != null) {
                            i12 = 1;
                        }
                        if (i10 + i11 + i12 == 1) {
                            eVar = new z(str, file, callable, eVar);
                        } else {
                            throw new IllegalArgumentException("More than one of createFromAsset(), createFromInputStream(), and createFromFile() were called on this Builder, but the database can only be created using one of the three configurations.");
                        }
                    } else {
                        throw new IllegalArgumentException("Cannot create from asset or file for an in-memory database.");
                    }
                }
            } else {
                eVar = null;
            }
            z zVar = eVar;
            if (zVar != null) {
                Context context = this.f48633a;
                String str2 = this.f48635c;
                e eVar2 = this.f48649q;
                List list = this.f48636d;
                boolean z10 = this.f48642j;
                d e10 = this.f48643k.e(context);
                Executor executor3 = this.f48639g;
                if (executor3 != null) {
                    Executor executor4 = this.f48640h;
                    if (executor4 != null) {
                        r3.f fVar = new r3.f(context, str2, zVar, eVar2, list, z10, e10, executor3, executor4, this.f48644l, this.f48645m, this.f48646n, this.f48650r, this.f48652t, this.f48653u, this.f48654v, null, this.f48637e, this.f48638f);
                        u uVar = (u) t.b(this.f48634b, "_Impl");
                        uVar.r(fVar);
                        return uVar;
                    }
                    throw new IllegalArgumentException("Required value was null.");
                }
                throw new IllegalArgumentException("Required value was null.");
            }
            throw new IllegalArgumentException("Required value was null.");
        }

        public a e() {
            this.f48645m = false;
            this.f48646n = true;
            return this;
        }

        public a f(h.c cVar) {
            this.f48641i = cVar;
            return this;
        }

        public a g(Executor executor) {
            Intrinsics.checkNotNullParameter(executor, "executor");
            this.f48639g = executor;
            return this;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static abstract class b {
        public void a(x3.g db2) {
            Intrinsics.checkNotNullParameter(db2, "db");
        }

        public void b(x3.g db2) {
            Intrinsics.checkNotNullParameter(db2, "db");
        }

        public void c(x3.g db2) {
            Intrinsics.checkNotNullParameter(db2, "db");
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class c {
        public /* synthetic */ c(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private c() {
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public enum d {
        AUTOMATIC,
        TRUNCATE,
        WRITE_AHEAD_LOGGING;

        private final boolean d(ActivityManager activityManager) {
            return x3.c.b(activityManager);
        }

        public final d e(Context context) {
            Intrinsics.checkNotNullParameter(context, "context");
            if (this != AUTOMATIC) {
                return this;
            }
            Object systemService = context.getSystemService("activity");
            Intrinsics.checkNotNull(systemService, "null cannot be cast to non-null type android.app.ActivityManager");
            if (!d((ActivityManager) systemService)) {
                return WRITE_AHEAD_LOGGING;
            }
            return TRUNCATE;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class e {

        /* renamed from: a  reason: collision with root package name */
        private final Map f48659a = new LinkedHashMap();

        private final void a(s3.b bVar) {
            int i10 = bVar.f49705a;
            int i11 = bVar.f49706b;
            Map map = this.f48659a;
            Integer valueOf = Integer.valueOf(i10);
            Object obj = map.get(valueOf);
            if (obj == null) {
                obj = new TreeMap();
                map.put(valueOf, obj);
            }
            TreeMap treeMap = (TreeMap) obj;
            if (treeMap.containsKey(Integer.valueOf(i11))) {
                Log.w("ROOM", "Overriding migration " + treeMap.get(Integer.valueOf(i11)) + " with " + bVar);
            }
            treeMap.put(Integer.valueOf(i11), bVar);
        }

        private final List e(List list, boolean z10, int i10, int i11) {
            Set<Integer> keySet;
            boolean z11;
            do {
                if (z10) {
                    if (i10 >= i11) {
                        return list;
                    }
                } else if (i10 <= i11) {
                    return list;
                }
                TreeMap treeMap = (TreeMap) this.f48659a.get(Integer.valueOf(i10));
                if (treeMap == null) {
                    return null;
                }
                if (z10) {
                    keySet = treeMap.descendingKeySet();
                } else {
                    keySet = treeMap.keySet();
                }
                for (Integer targetVersion : keySet) {
                    if (z10) {
                        int i12 = i10 + 1;
                        Intrinsics.checkNotNullExpressionValue(targetVersion, "targetVersion");
                        int intValue = targetVersion.intValue();
                        if (i12 <= intValue && intValue <= i11) {
                            Object obj = treeMap.get(targetVersion);
                            Intrinsics.checkNotNull(obj);
                            list.add(obj);
                            i10 = targetVersion.intValue();
                            z11 = true;
                            continue;
                            break;
                        }
                    } else {
                        Intrinsics.checkNotNullExpressionValue(targetVersion, "targetVersion");
                        int intValue2 = targetVersion.intValue();
                        if (i11 <= intValue2 && intValue2 < i10) {
                            Object obj2 = treeMap.get(targetVersion);
                            Intrinsics.checkNotNull(obj2);
                            list.add(obj2);
                            i10 = targetVersion.intValue();
                            z11 = true;
                            continue;
                            break;
                        }
                    }
                }
                z11 = false;
                continue;
            } while (z11);
            return null;
        }

        public void b(s3.b... migrations) {
            Intrinsics.checkNotNullParameter(migrations, "migrations");
            for (s3.b bVar : migrations) {
                a(bVar);
            }
        }

        public final boolean c(int i10, int i11) {
            Map f10 = f();
            if (f10.containsKey(Integer.valueOf(i10))) {
                Map map = (Map) f10.get(Integer.valueOf(i10));
                if (map == null) {
                    map = o0.i();
                }
                return map.containsKey(Integer.valueOf(i11));
            }
            return false;
        }

        public List d(int i10, int i11) {
            boolean z10;
            if (i10 == i11) {
                return CollectionsKt.l();
            }
            if (i11 > i10) {
                z10 = true;
            } else {
                z10 = false;
            }
            return e(new ArrayList(), z10, i10, i11);
        }

        public Map f() {
            return this.f48659a;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static abstract class f {
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class g extends Lambda implements Function1 {
        g() {
            super(1);
        }

        @Override // kotlin.jvm.functions.Function1
        /* renamed from: a */
        public final Object invoke(x3.g it) {
            Intrinsics.checkNotNullParameter(it, "it");
            u.this.s();
            return null;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class h extends Lambda implements Function1 {
        h() {
            super(1);
        }

        @Override // kotlin.jvm.functions.Function1
        /* renamed from: a */
        public final Object invoke(x3.g it) {
            Intrinsics.checkNotNullParameter(it, "it");
            u.this.t();
            return null;
        }
    }

    public u() {
        Map synchronizedMap = Collections.synchronizedMap(new LinkedHashMap());
        Intrinsics.checkNotNullExpressionValue(synchronizedMap, "synchronizedMap(mutableMapOf())");
        this.f48631m = synchronizedMap;
        this.f48632n = new LinkedHashMap();
    }

    private final Object B(Class cls, x3.h hVar) {
        if (cls.isInstance(hVar)) {
            return hVar;
        }
        if (hVar instanceof r3.g) {
            return B(cls, ((r3.g) hVar).getDelegate());
        }
        return null;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final void s() {
        c();
        x3.g writableDatabase = m().getWritableDatabase();
        l().t(writableDatabase);
        if (writableDatabase.c2()) {
            writableDatabase.l0();
        } else {
            writableDatabase.H();
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final void t() {
        m().getWritableDatabase().v0();
        if (!q()) {
            l().l();
        }
    }

    public static /* synthetic */ Cursor y(u uVar, x3.j jVar, CancellationSignal cancellationSignal, int i10, Object obj) {
        if (obj == null) {
            if ((i10 & 2) != 0) {
                cancellationSignal = null;
            }
            return uVar.x(jVar, cancellationSignal);
        }
        throw new UnsupportedOperationException("Super calls with default arguments not supported in this target, function: query");
    }

    public void A() {
        m().getWritableDatabase().j0();
    }

    public void c() {
        if (this.f48624f || !v()) {
            return;
        }
        throw new IllegalStateException("Cannot access database on the main thread since it may potentially lock the UI for a long period of time.");
    }

    public void d() {
        if (!q() && this.f48630l.get() != null) {
            throw new IllegalStateException("Cannot access database on a different coroutine context inherited from a suspending transaction.");
        }
    }

    public void e() {
        c();
        r3.c cVar = this.f48629k;
        if (cVar == null) {
            s();
        } else {
            cVar.g(new g());
        }
    }

    public x3.k f(String sql) {
        Intrinsics.checkNotNullParameter(sql, "sql");
        c();
        d();
        return m().getWritableDatabase().k1(sql);
    }

    protected abstract o g();

    protected abstract x3.h h(r3.f fVar);

    public void i() {
        r3.c cVar = this.f48629k;
        if (cVar == null) {
            t();
        } else {
            cVar.g(new h());
        }
    }

    public List j(Map autoMigrationSpecs) {
        Intrinsics.checkNotNullParameter(autoMigrationSpecs, "autoMigrationSpecs");
        return CollectionsKt.l();
    }

    public final Lock k() {
        ReentrantReadWriteLock.ReadLock readLock = this.f48628j.readLock();
        Intrinsics.checkNotNullExpressionValue(readLock, "readWriteLock.readLock()");
        return readLock;
    }

    public o l() {
        return this.f48623e;
    }

    public x3.h m() {
        x3.h hVar = this.f48622d;
        if (hVar == null) {
            Intrinsics.throwUninitializedPropertyAccessException("internalOpenHelper");
            return null;
        }
        return hVar;
    }

    public Executor n() {
        Executor executor = this.f48620b;
        if (executor == null) {
            Intrinsics.throwUninitializedPropertyAccessException("internalQueryExecutor");
            return null;
        }
        return executor;
    }

    public Set o() {
        return x0.d();
    }

    protected Map p() {
        return o0.i();
    }

    public boolean q() {
        return m().getWritableDatabase().R1();
    }

    public void r(r3.f configuration) {
        boolean z10;
        Intrinsics.checkNotNullParameter(configuration, "configuration");
        this.f48622d = h(configuration);
        Set o10 = o();
        BitSet bitSet = new BitSet();
        Iterator it = o10.iterator();
        while (true) {
            int i10 = -1;
            if (it.hasNext()) {
                Class cls = (Class) it.next();
                int size = configuration.f48559r.size() - 1;
                if (size >= 0) {
                    while (true) {
                        int i11 = size - 1;
                        if (cls.isAssignableFrom(configuration.f48559r.get(size).getClass())) {
                            bitSet.set(size);
                            i10 = size;
                            break;
                        } else if (i11 < 0) {
                            break;
                        } else {
                            size = i11;
                        }
                    }
                }
                if (i10 >= 0) {
                    this.f48627i.put(cls, configuration.f48559r.get(i10));
                } else {
                    throw new IllegalArgumentException(("A required auto migration spec (" + cls.getCanonicalName() + ") is missing in the database configuration.").toString());
                }
            } else {
                int size2 = configuration.f48559r.size() - 1;
                if (size2 >= 0) {
                    while (true) {
                        int i12 = size2 - 1;
                        if (bitSet.get(size2)) {
                            if (i12 < 0) {
                                break;
                            }
                            size2 = i12;
                        } else {
                            throw new IllegalArgumentException("Unexpected auto migration specs found. Annotate AutoMigrationSpec implementation with @ProvidedAutoMigrationSpec annotation or remove this spec from the builder.");
                        }
                    }
                }
                for (s3.b bVar : j(this.f48627i)) {
                    if (!configuration.f48545d.c(bVar.f49705a, bVar.f49706b)) {
                        configuration.f48545d.b(bVar);
                    }
                }
                y yVar = (y) B(y.class, m());
                if (yVar != null) {
                    yVar.k(configuration);
                }
                r3.d dVar = (r3.d) B(r3.d.class, m());
                if (dVar != null) {
                    this.f48629k = dVar.f48515e;
                    l().o(dVar.f48515e);
                }
                if (configuration.f48548g == d.WRITE_AHEAD_LOGGING) {
                    z10 = true;
                } else {
                    z10 = false;
                }
                m().setWriteAheadLoggingEnabled(z10);
                this.f48626h = configuration.f48546e;
                this.f48620b = configuration.f48549h;
                this.f48621c = new c0(configuration.f48550i);
                this.f48624f = configuration.f48547f;
                this.f48625g = z10;
                if (configuration.f48551j != null) {
                    if (configuration.f48543b != null) {
                        l().p(configuration.f48542a, configuration.f48543b, configuration.f48551j);
                    } else {
                        throw new IllegalArgumentException("Required value was null.");
                    }
                }
                Map p10 = p();
                BitSet bitSet2 = new BitSet();
                for (Map.Entry entry : p10.entrySet()) {
                    Class cls2 = (Class) entry.getKey();
                    for (Class cls3 : (List) entry.getValue()) {
                        int size3 = configuration.f48558q.size() - 1;
                        if (size3 >= 0) {
                            while (true) {
                                int i13 = size3 - 1;
                                if (cls3.isAssignableFrom(configuration.f48558q.get(size3).getClass())) {
                                    bitSet2.set(size3);
                                    break;
                                } else if (i13 < 0) {
                                    break;
                                } else {
                                    size3 = i13;
                                }
                            }
                        }
                        size3 = -1;
                        if (size3 >= 0) {
                            this.f48632n.put(cls3, configuration.f48558q.get(size3));
                        } else {
                            throw new IllegalArgumentException(("A required type converter (" + cls3 + ") for " + cls2.getCanonicalName() + " is missing in the database configuration.").toString());
                        }
                    }
                }
                int size4 = configuration.f48558q.size() - 1;
                if (size4 < 0) {
                    return;
                }
                while (true) {
                    int i14 = size4 - 1;
                    if (bitSet2.get(size4)) {
                        if (i14 >= 0) {
                            size4 = i14;
                        } else {
                            return;
                        }
                    } else {
                        throw new IllegalArgumentException("Unexpected type converter " + configuration.f48558q.get(size4) + ". Annotate TypeConverter class with @ProvidedTypeConverter annotation or remove this converter from the builder.");
                    }
                }
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public void u(x3.g db2) {
        Intrinsics.checkNotNullParameter(db2, "db");
        l().i(db2);
    }

    public final boolean v() {
        if (Looper.getMainLooper().getThread() == Thread.currentThread()) {
            return true;
        }
        return false;
    }

    public boolean w() {
        Boolean bool;
        boolean isOpen;
        r3.c cVar = this.f48629k;
        if (cVar != null) {
            isOpen = cVar.l();
        } else {
            x3.g gVar = this.f48619a;
            if (gVar != null) {
                isOpen = gVar.isOpen();
            } else {
                bool = null;
                return Intrinsics.areEqual(bool, Boolean.TRUE);
            }
        }
        bool = Boolean.valueOf(isOpen);
        return Intrinsics.areEqual(bool, Boolean.TRUE);
    }

    public Cursor x(x3.j query, CancellationSignal cancellationSignal) {
        Intrinsics.checkNotNullParameter(query, "query");
        c();
        d();
        if (cancellationSignal != null) {
            return m().getWritableDatabase().N(query, cancellationSignal);
        }
        return m().getWritableDatabase().S0(query);
    }

    public Object z(Callable body) {
        Intrinsics.checkNotNullParameter(body, "body");
        e();
        try {
            Object call = body.call();
            A();
            return call;
        } finally {
            i();
        }
    }
}
