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
    public static final c f48570o = new c(null);

    /* renamed from: a  reason: collision with root package name */
    protected volatile x3.g f48571a;

    /* renamed from: b  reason: collision with root package name */
    private Executor f48572b;

    /* renamed from: c  reason: collision with root package name */
    private Executor f48573c;

    /* renamed from: d  reason: collision with root package name */
    private x3.h f48574d;

    /* renamed from: f  reason: collision with root package name */
    private boolean f48576f;

    /* renamed from: g  reason: collision with root package name */
    private boolean f48577g;

    /* renamed from: h  reason: collision with root package name */
    protected List f48578h;

    /* renamed from: k  reason: collision with root package name */
    private r3.c f48581k;

    /* renamed from: m  reason: collision with root package name */
    private final Map f48583m;

    /* renamed from: n  reason: collision with root package name */
    private final Map f48584n;

    /* renamed from: e  reason: collision with root package name */
    private final o f48575e = g();

    /* renamed from: i  reason: collision with root package name */
    private Map f48579i = new LinkedHashMap();

    /* renamed from: j  reason: collision with root package name */
    private final ReentrantReadWriteLock f48580j = new ReentrantReadWriteLock();

    /* renamed from: l  reason: collision with root package name */
    private final ThreadLocal f48582l = new ThreadLocal();

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class a {

        /* renamed from: a  reason: collision with root package name */
        private final Context f48585a;

        /* renamed from: b  reason: collision with root package name */
        private final Class f48586b;

        /* renamed from: c  reason: collision with root package name */
        private final String f48587c;

        /* renamed from: d  reason: collision with root package name */
        private final List f48588d;

        /* renamed from: e  reason: collision with root package name */
        private final List f48589e;

        /* renamed from: f  reason: collision with root package name */
        private List f48590f;

        /* renamed from: g  reason: collision with root package name */
        private Executor f48591g;

        /* renamed from: h  reason: collision with root package name */
        private Executor f48592h;

        /* renamed from: i  reason: collision with root package name */
        private h.c f48593i;

        /* renamed from: j  reason: collision with root package name */
        private boolean f48594j;

        /* renamed from: k  reason: collision with root package name */
        private d f48595k;

        /* renamed from: l  reason: collision with root package name */
        private Intent f48596l;

        /* renamed from: m  reason: collision with root package name */
        private boolean f48597m;

        /* renamed from: n  reason: collision with root package name */
        private boolean f48598n;

        /* renamed from: o  reason: collision with root package name */
        private long f48599o;

        /* renamed from: p  reason: collision with root package name */
        private TimeUnit f48600p;

        /* renamed from: q  reason: collision with root package name */
        private final e f48601q;

        /* renamed from: r  reason: collision with root package name */
        private Set f48602r;

        /* renamed from: s  reason: collision with root package name */
        private Set f48603s;

        /* renamed from: t  reason: collision with root package name */
        private String f48604t;

        /* renamed from: u  reason: collision with root package name */
        private File f48605u;

        /* renamed from: v  reason: collision with root package name */
        private Callable f48606v;

        public a(Context context, Class klass, String str) {
            Intrinsics.checkNotNullParameter(context, "context");
            Intrinsics.checkNotNullParameter(klass, "klass");
            this.f48585a = context;
            this.f48586b = klass;
            this.f48587c = str;
            this.f48588d = new ArrayList();
            this.f48589e = new ArrayList();
            this.f48590f = new ArrayList();
            this.f48595k = d.AUTOMATIC;
            this.f48597m = true;
            this.f48599o = -1L;
            this.f48601q = new e();
            this.f48602r = new LinkedHashSet();
        }

        public a a(b callback) {
            Intrinsics.checkNotNullParameter(callback, "callback");
            this.f48588d.add(callback);
            return this;
        }

        public a b(s3.b... migrations) {
            Intrinsics.checkNotNullParameter(migrations, "migrations");
            if (this.f48603s == null) {
                this.f48603s = new HashSet();
            }
            for (s3.b bVar : migrations) {
                Set set = this.f48603s;
                Intrinsics.checkNotNull(set);
                set.add(Integer.valueOf(bVar.f49657a));
                Set set2 = this.f48603s;
                Intrinsics.checkNotNull(set2);
                set2.add(Integer.valueOf(bVar.f49658b));
            }
            this.f48601q.b((s3.b[]) Arrays.copyOf(migrations, migrations.length));
            return this;
        }

        public a c() {
            this.f48594j = true;
            return this;
        }

        public u d() {
            int i10;
            int i11;
            Executor executor = this.f48591g;
            if (executor == null && this.f48592h == null) {
                Executor f10 = l.c.f();
                this.f48592h = f10;
                this.f48591g = f10;
            } else if (executor != null && this.f48592h == null) {
                this.f48592h = executor;
            } else if (executor == null) {
                this.f48591g = this.f48592h;
            }
            Set<Number> set = this.f48603s;
            if (set != null) {
                Intrinsics.checkNotNull(set);
                for (Number number : set) {
                    int intValue = number.intValue();
                    if (this.f48602r.contains(Integer.valueOf(intValue))) {
                        throw new IllegalArgumentException(("Inconsistency detected. A Migration was supplied to addMigration(Migration... migrations) that has a start or end version equal to a start version supplied to fallbackToDestructiveMigrationFrom(int... startVersions). Start version: " + intValue).toString());
                    }
                }
            }
            r3.e eVar = this.f48593i;
            if (eVar == null) {
                eVar = new y3.f();
            }
            if (eVar != null) {
                if (this.f48599o > 0) {
                    if (this.f48587c != null) {
                        long j10 = this.f48599o;
                        TimeUnit timeUnit = this.f48600p;
                        if (timeUnit != null) {
                            Executor executor2 = this.f48591g;
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
                String str = this.f48604t;
                if (str != null || this.f48605u != null || this.f48606v != null) {
                    if (this.f48587c != null) {
                        int i12 = 0;
                        if (str == null) {
                            i10 = 0;
                        } else {
                            i10 = 1;
                        }
                        File file = this.f48605u;
                        if (file == null) {
                            i11 = 0;
                        } else {
                            i11 = 1;
                        }
                        Callable callable = this.f48606v;
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
                Context context = this.f48585a;
                String str2 = this.f48587c;
                e eVar2 = this.f48601q;
                List list = this.f48588d;
                boolean z10 = this.f48594j;
                d e10 = this.f48595k.e(context);
                Executor executor3 = this.f48591g;
                if (executor3 != null) {
                    Executor executor4 = this.f48592h;
                    if (executor4 != null) {
                        r3.f fVar = new r3.f(context, str2, zVar, eVar2, list, z10, e10, executor3, executor4, this.f48596l, this.f48597m, this.f48598n, this.f48602r, this.f48604t, this.f48605u, this.f48606v, null, this.f48589e, this.f48590f);
                        u uVar = (u) t.b(this.f48586b, "_Impl");
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
            this.f48597m = false;
            this.f48598n = true;
            return this;
        }

        public a f(h.c cVar) {
            this.f48593i = cVar;
            return this;
        }

        public a g(Executor executor) {
            Intrinsics.checkNotNullParameter(executor, "executor");
            this.f48591g = executor;
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
        private final Map f48611a = new LinkedHashMap();

        private final void a(s3.b bVar) {
            int i10 = bVar.f49657a;
            int i11 = bVar.f49658b;
            Map map = this.f48611a;
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
                TreeMap treeMap = (TreeMap) this.f48611a.get(Integer.valueOf(i10));
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
            return this.f48611a;
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
        this.f48583m = synchronizedMap;
        this.f48584n = new LinkedHashMap();
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
        if (this.f48576f || !v()) {
            return;
        }
        throw new IllegalStateException("Cannot access database on the main thread since it may potentially lock the UI for a long period of time.");
    }

    public void d() {
        if (!q() && this.f48582l.get() != null) {
            throw new IllegalStateException("Cannot access database on a different coroutine context inherited from a suspending transaction.");
        }
    }

    public void e() {
        c();
        r3.c cVar = this.f48581k;
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
        r3.c cVar = this.f48581k;
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
        ReentrantReadWriteLock.ReadLock readLock = this.f48580j.readLock();
        Intrinsics.checkNotNullExpressionValue(readLock, "readWriteLock.readLock()");
        return readLock;
    }

    public o l() {
        return this.f48575e;
    }

    public x3.h m() {
        x3.h hVar = this.f48574d;
        if (hVar == null) {
            Intrinsics.throwUninitializedPropertyAccessException("internalOpenHelper");
            return null;
        }
        return hVar;
    }

    public Executor n() {
        Executor executor = this.f48572b;
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
        this.f48574d = h(configuration);
        Set o10 = o();
        BitSet bitSet = new BitSet();
        Iterator it = o10.iterator();
        while (true) {
            int i10 = -1;
            if (it.hasNext()) {
                Class cls = (Class) it.next();
                int size = configuration.f48511r.size() - 1;
                if (size >= 0) {
                    while (true) {
                        int i11 = size - 1;
                        if (cls.isAssignableFrom(configuration.f48511r.get(size).getClass())) {
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
                    this.f48579i.put(cls, configuration.f48511r.get(i10));
                } else {
                    throw new IllegalArgumentException(("A required auto migration spec (" + cls.getCanonicalName() + ") is missing in the database configuration.").toString());
                }
            } else {
                int size2 = configuration.f48511r.size() - 1;
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
                for (s3.b bVar : j(this.f48579i)) {
                    if (!configuration.f48497d.c(bVar.f49657a, bVar.f49658b)) {
                        configuration.f48497d.b(bVar);
                    }
                }
                y yVar = (y) B(y.class, m());
                if (yVar != null) {
                    yVar.k(configuration);
                }
                r3.d dVar = (r3.d) B(r3.d.class, m());
                if (dVar != null) {
                    this.f48581k = dVar.f48467e;
                    l().o(dVar.f48467e);
                }
                if (configuration.f48500g == d.WRITE_AHEAD_LOGGING) {
                    z10 = true;
                } else {
                    z10 = false;
                }
                m().setWriteAheadLoggingEnabled(z10);
                this.f48578h = configuration.f48498e;
                this.f48572b = configuration.f48501h;
                this.f48573c = new c0(configuration.f48502i);
                this.f48576f = configuration.f48499f;
                this.f48577g = z10;
                if (configuration.f48503j != null) {
                    if (configuration.f48495b != null) {
                        l().p(configuration.f48494a, configuration.f48495b, configuration.f48503j);
                    } else {
                        throw new IllegalArgumentException("Required value was null.");
                    }
                }
                Map p10 = p();
                BitSet bitSet2 = new BitSet();
                for (Map.Entry entry : p10.entrySet()) {
                    Class cls2 = (Class) entry.getKey();
                    for (Class cls3 : (List) entry.getValue()) {
                        int size3 = configuration.f48510q.size() - 1;
                        if (size3 >= 0) {
                            while (true) {
                                int i13 = size3 - 1;
                                if (cls3.isAssignableFrom(configuration.f48510q.get(size3).getClass())) {
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
                            this.f48584n.put(cls3, configuration.f48510q.get(size3));
                        } else {
                            throw new IllegalArgumentException(("A required type converter (" + cls3 + ") for " + cls2.getCanonicalName() + " is missing in the database configuration.").toString());
                        }
                    }
                }
                int size4 = configuration.f48510q.size() - 1;
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
                        throw new IllegalArgumentException("Unexpected type converter " + configuration.f48510q.get(size4) + ". Annotate TypeConverter class with @ProvidedTypeConverter annotation or remove this converter from the builder.");
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
        r3.c cVar = this.f48581k;
        if (cVar != null) {
            isOpen = cVar.l();
        } else {
            x3.g gVar = this.f48571a;
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
