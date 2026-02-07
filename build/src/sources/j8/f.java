package j8;

import com.facebook.cache.common.CacheKey;
import i8.a;
import i8.c;
import j8.e;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Collections;
import java.util.HashSet;
import java.util.Iterator;
import java.util.List;
import java.util.Set;
import java.util.concurrent.CountDownLatch;
import java.util.concurrent.Executor;
import java.util.concurrent.TimeUnit;
import t8.a;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class f implements j, l8.a {

    /* renamed from: r  reason: collision with root package name */
    private static final Class f29808r = f.class;

    /* renamed from: s  reason: collision with root package name */
    private static final long f29809s = TimeUnit.HOURS.toMillis(2);

    /* renamed from: t  reason: collision with root package name */
    private static final long f29810t = TimeUnit.MINUTES.toMillis(30);

    /* renamed from: a  reason: collision with root package name */
    private final long f29811a;

    /* renamed from: b  reason: collision with root package name */
    private final long f29812b;

    /* renamed from: c  reason: collision with root package name */
    private final CountDownLatch f29813c;

    /* renamed from: d  reason: collision with root package name */
    private long f29814d;

    /* renamed from: e  reason: collision with root package name */
    private final i8.c f29815e;

    /* renamed from: f  reason: collision with root package name */
    final Set f29816f;

    /* renamed from: g  reason: collision with root package name */
    private long f29817g;

    /* renamed from: h  reason: collision with root package name */
    private final long f29818h;

    /* renamed from: i  reason: collision with root package name */
    private final t8.a f29819i;

    /* renamed from: j  reason: collision with root package name */
    private final e f29820j;

    /* renamed from: k  reason: collision with root package name */
    private final i f29821k;

    /* renamed from: l  reason: collision with root package name */
    private final i8.a f29822l;

    /* renamed from: m  reason: collision with root package name */
    private final boolean f29823m;

    /* renamed from: n  reason: collision with root package name */
    private final b f29824n;

    /* renamed from: o  reason: collision with root package name */
    private final v8.a f29825o;

    /* renamed from: p  reason: collision with root package name */
    private final Object f29826p = new Object();

    /* renamed from: q  reason: collision with root package name */
    private boolean f29827q;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    class a implements Runnable {
        a() {
        }

        @Override // java.lang.Runnable
        public void run() {
            synchronized (f.this.f29826p) {
                f.this.p();
            }
            f.this.f29827q = true;
            f.this.f29813c.countDown();
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static class b {

        /* renamed from: a  reason: collision with root package name */
        private boolean f29829a = false;

        /* renamed from: b  reason: collision with root package name */
        private long f29830b = -1;

        /* renamed from: c  reason: collision with root package name */
        private long f29831c = -1;

        b() {
        }

        public synchronized long a() {
            return this.f29831c;
        }

        public synchronized long b() {
            return this.f29830b;
        }

        public synchronized void c(long j10, long j11) {
            if (this.f29829a) {
                this.f29830b += j10;
                this.f29831c += j11;
            }
        }

        public synchronized boolean d() {
            return this.f29829a;
        }

        public synchronized void e() {
            this.f29829a = false;
            this.f29831c = -1L;
            this.f29830b = -1L;
        }

        public synchronized void f(long j10, long j11) {
            this.f29831c = j11;
            this.f29830b = j10;
            this.f29829a = true;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static class c {

        /* renamed from: a  reason: collision with root package name */
        public final long f29832a;

        /* renamed from: b  reason: collision with root package name */
        public final long f29833b;

        /* renamed from: c  reason: collision with root package name */
        public final long f29834c;

        public c(long j10, long j11, long j12) {
            this.f29832a = j10;
            this.f29833b = j11;
            this.f29834c = j12;
        }
    }

    public f(e eVar, i iVar, c cVar, i8.c cVar2, i8.a aVar, l8.b bVar, Executor executor, boolean z10) {
        this.f29811a = cVar.f29833b;
        long j10 = cVar.f29834c;
        this.f29812b = j10;
        this.f29814d = j10;
        this.f29819i = t8.a.d();
        this.f29820j = eVar;
        this.f29821k = iVar;
        this.f29817g = -1L;
        this.f29815e = cVar2;
        this.f29818h = cVar.f29832a;
        this.f29822l = aVar;
        this.f29824n = new b();
        this.f29825o = v8.d.a();
        this.f29823m = z10;
        this.f29816f = new HashSet();
        if (bVar != null) {
            bVar.a(this);
        }
        if (z10) {
            this.f29813c = new CountDownLatch(1);
            executor.execute(new a());
            return;
        }
        this.f29813c = new CountDownLatch(0);
    }

    private h8.a l(e.b bVar, CacheKey cacheKey, String str) {
        h8.a a10;
        synchronized (this.f29826p) {
            a10 = bVar.a(cacheKey);
            this.f29816f.add(str);
            this.f29824n.c(a10.size(), 1L);
        }
        return a10;
    }

    private void m(long j10, c.a aVar) {
        try {
            Collection<e.a> n10 = n(this.f29820j.h());
            long b10 = this.f29824n.b();
            long j11 = b10 - j10;
            int i10 = 0;
            long j12 = 0;
            for (e.a aVar2 : n10) {
                if (j12 > j11) {
                    break;
                }
                long b11 = this.f29820j.b(aVar2);
                this.f29816f.remove(aVar2.getId());
                if (b11 > 0) {
                    i10++;
                    j12 += b11;
                    k e10 = k.a().j(aVar2.getId()).g(aVar).i(b11).f(b10 - j12).e(j10);
                    i8.c cVar = this.f29815e;
                    if (cVar != null) {
                        cVar.g(e10);
                    }
                    e10.b();
                }
            }
            this.f29824n.c(-j12, -i10);
            this.f29820j.c();
        } catch (IOException e11) {
            i8.a aVar3 = this.f29822l;
            a.EnumC0377a enumC0377a = a.EnumC0377a.EVICTION;
            Class cls = f29808r;
            aVar3.a(enumC0377a, cls, "evictAboveSize: " + e11.getMessage(), e11);
            throw e11;
        }
    }

    private Collection n(Collection collection) {
        long now = this.f29825o.now() + f29809s;
        ArrayList arrayList = new ArrayList(collection.size());
        ArrayList arrayList2 = new ArrayList(collection.size());
        Iterator it = collection.iterator();
        while (it.hasNext()) {
            e.a aVar = (e.a) it.next();
            if (aVar.a() > now) {
                arrayList.add(aVar);
            } else {
                arrayList2.add(aVar);
            }
        }
        Collections.sort(arrayList2, this.f29821k.get());
        arrayList.addAll(arrayList2);
        return arrayList;
    }

    private void o() {
        synchronized (this.f29826p) {
            try {
                boolean p10 = p();
                s();
                long b10 = this.f29824n.b();
                if (b10 > this.f29814d && !p10) {
                    this.f29824n.e();
                    p();
                }
                long j10 = this.f29814d;
                if (b10 > j10) {
                    m((j10 * 9) / 10, c.a.CACHE_FULL);
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public boolean p() {
        long now = this.f29825o.now();
        if (this.f29824n.d()) {
            long j10 = this.f29817g;
            if (j10 != -1 && now - j10 <= f29810t) {
                return false;
            }
        }
        return q();
    }

    private boolean q() {
        Set set;
        boolean z10;
        long j10;
        long now = this.f29825o.now();
        long j11 = f29809s + now;
        if (this.f29823m && this.f29816f.isEmpty()) {
            set = this.f29816f;
        } else if (this.f29823m) {
            set = new HashSet();
        } else {
            set = null;
        }
        try {
            long j12 = 0;
            long j13 = -1;
            int i10 = 0;
            boolean z11 = false;
            int i11 = 0;
            int i12 = 0;
            z10 = false;
            for (e.a aVar : this.f29820j.h()) {
                try {
                    i11++;
                    j12 += aVar.getSize();
                    if (aVar.a() > j11) {
                        i12++;
                        i10 = (int) (i10 + aVar.getSize());
                        j10 = j11;
                        j13 = Math.max(aVar.a() - now, j13);
                        z11 = true;
                    } else {
                        j10 = j11;
                        if (this.f29823m) {
                            o8.j.g(set);
                            set.add(aVar.getId());
                        }
                    }
                    j11 = j10;
                } catch (IOException e10) {
                    e = e10;
                    this.f29822l.a(a.EnumC0377a.GENERIC_IO, f29808r, "calcFileCacheSize: " + e.getMessage(), e);
                    return z10;
                }
            }
            if (z11) {
                this.f29822l.a(a.EnumC0377a.READ_INVALID_ENTRY, f29808r, "Future timestamp found in " + i12 + " files , with a total size of " + i10 + " bytes, and a maximum time delta of " + j13 + "ms", null);
            }
            long j14 = i11;
            if (this.f29824n.a() != j14 || this.f29824n.b() != j12) {
                if (this.f29823m && this.f29816f != set) {
                    o8.j.g(set);
                    this.f29816f.clear();
                    this.f29816f.addAll(set);
                }
                this.f29824n.f(j12, j14);
            }
            this.f29817g = now;
            return true;
        } catch (IOException e11) {
            e = e11;
            z10 = false;
        }
    }

    private e.b r(String str, CacheKey cacheKey) {
        o();
        return this.f29820j.e(str, cacheKey);
    }

    private void s() {
        a.EnumC0662a enumC0662a;
        if (this.f29820j.isExternal()) {
            enumC0662a = a.EnumC0662a.EXTERNAL;
        } else {
            enumC0662a = a.EnumC0662a.INTERNAL;
        }
        if (this.f29819i.f(enumC0662a, this.f29812b - this.f29824n.b())) {
            this.f29814d = this.f29811a;
        } else {
            this.f29814d = this.f29812b;
        }
    }

    @Override // j8.j
    public void a() {
        synchronized (this.f29826p) {
            try {
                this.f29820j.a();
                this.f29816f.clear();
                i8.c cVar = this.f29815e;
                if (cVar != null) {
                    cVar.h();
                }
            } catch (IOException | NullPointerException e10) {
                i8.a aVar = this.f29822l;
                a.EnumC0377a enumC0377a = a.EnumC0377a.EVICTION;
                Class cls = f29808r;
                aVar.a(enumC0377a, cls, "clearAll: " + e10.getMessage(), e10);
            }
            this.f29824n.e();
        }
    }

    @Override // j8.j
    public boolean b(CacheKey cacheKey) {
        String str;
        IOException e10;
        String str2 = null;
        try {
            try {
                synchronized (this.f29826p) {
                    try {
                        List b10 = i8.d.b(cacheKey);
                        int i10 = 0;
                        while (i10 < b10.size()) {
                            String str3 = (String) b10.get(i10);
                            if (this.f29820j.d(str3, cacheKey)) {
                                this.f29816f.add(str3);
                                return true;
                            }
                            i10++;
                            str2 = str3;
                        }
                        return false;
                    } catch (Throwable th2) {
                        str = str2;
                        th = th2;
                        try {
                            throw th;
                        } catch (IOException e11) {
                            e10 = e11;
                            k h10 = k.a().d(cacheKey).j(str).h(e10);
                            i8.c cVar = this.f29815e;
                            if (cVar != null) {
                                cVar.d(h10);
                            }
                            h10.b();
                            return false;
                        }
                    }
                }
            } catch (Throwable th3) {
                th = th3;
            }
        } catch (IOException e12) {
            str = null;
            e10 = e12;
        }
    }

    @Override // j8.j
    public h8.a c(CacheKey cacheKey) {
        h8.a aVar;
        k d10 = k.a().d(cacheKey);
        try {
            synchronized (this.f29826p) {
                try {
                    List b10 = i8.d.b(cacheKey);
                    String str = null;
                    aVar = null;
                    for (int i10 = 0; i10 < b10.size(); i10++) {
                        str = (String) b10.get(i10);
                        d10.j(str);
                        aVar = this.f29820j.g(str, cacheKey);
                        if (aVar != null) {
                            break;
                        }
                    }
                    if (aVar == null) {
                        i8.c cVar = this.f29815e;
                        if (cVar != null) {
                            cVar.a(d10);
                        }
                        this.f29816f.remove(str);
                    } else {
                        o8.j.g(str);
                        i8.c cVar2 = this.f29815e;
                        if (cVar2 != null) {
                            cVar2.e(d10);
                        }
                        this.f29816f.add(str);
                    }
                } finally {
                }
            }
            return aVar;
        } catch (IOException e10) {
            this.f29822l.a(a.EnumC0377a.GENERIC_IO, f29808r, "getResource", e10);
            d10.h(e10);
            i8.c cVar3 = this.f29815e;
            if (cVar3 != null) {
                cVar3.d(d10);
            }
            return null;
        } finally {
            d10.b();
        }
    }

    @Override // j8.j
    public h8.a d(CacheKey cacheKey, i8.i iVar) {
        String a10;
        k d10 = k.a().d(cacheKey);
        i8.c cVar = this.f29815e;
        if (cVar != null) {
            cVar.b(d10);
        }
        synchronized (this.f29826p) {
            a10 = i8.d.a(cacheKey);
        }
        d10.j(a10);
        try {
            try {
                e.b r10 = r(a10, cacheKey);
                try {
                    r10.b(iVar, cacheKey);
                    h8.a l10 = l(r10, cacheKey, a10);
                    d10.i(l10.size()).f(this.f29824n.b());
                    i8.c cVar2 = this.f29815e;
                    if (cVar2 != null) {
                        cVar2.f(d10);
                    }
                    return l10;
                } finally {
                    if (!r10.l()) {
                        p8.a.i(f29808r, "Failed to delete temp file");
                    }
                }
            } catch (IOException e10) {
                d10.h(e10);
                i8.c cVar3 = this.f29815e;
                if (cVar3 != null) {
                    cVar3.c(d10);
                }
                p8.a.j(f29808r, "Failed inserting a file into the cache", e10);
                throw e10;
            }
        } finally {
            d10.b();
        }
    }

    @Override // j8.j
    public boolean e(CacheKey cacheKey) {
        synchronized (this.f29826p) {
            try {
                List b10 = i8.d.b(cacheKey);
                for (int i10 = 0; i10 < b10.size(); i10++) {
                    if (this.f29816f.contains((String) b10.get(i10))) {
                        return true;
                    }
                }
                return false;
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    @Override // j8.j
    public void f(CacheKey cacheKey) {
        synchronized (this.f29826p) {
            try {
                List b10 = i8.d.b(cacheKey);
                for (int i10 = 0; i10 < b10.size(); i10++) {
                    String str = (String) b10.get(i10);
                    this.f29820j.remove(str);
                    this.f29816f.remove(str);
                }
            } catch (IOException e10) {
                i8.a aVar = this.f29822l;
                a.EnumC0377a enumC0377a = a.EnumC0377a.DELETE_FILE;
                Class cls = f29808r;
                aVar.a(enumC0377a, cls, "delete: " + e10.getMessage(), e10);
            }
        }
    }

    @Override // j8.j
    public boolean g(CacheKey cacheKey) {
        synchronized (this.f29826p) {
            if (e(cacheKey)) {
                return true;
            }
            try {
                List b10 = i8.d.b(cacheKey);
                for (int i10 = 0; i10 < b10.size(); i10++) {
                    String str = (String) b10.get(i10);
                    if (this.f29820j.f(str, cacheKey)) {
                        this.f29816f.add(str);
                        return true;
                    }
                }
                return false;
            } catch (IOException unused) {
                return false;
            }
        }
    }
}
