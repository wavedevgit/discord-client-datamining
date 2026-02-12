package k8;

import com.facebook.cache.common.CacheKey;
import j8.a;
import j8.c;
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
import k8.e;
import u8.a;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class f implements j, m8.a {

    /* renamed from: r  reason: collision with root package name */
    private static final Class f31618r = f.class;

    /* renamed from: s  reason: collision with root package name */
    private static final long f31619s = TimeUnit.HOURS.toMillis(2);

    /* renamed from: t  reason: collision with root package name */
    private static final long f31620t = TimeUnit.MINUTES.toMillis(30);

    /* renamed from: a  reason: collision with root package name */
    private final long f31621a;

    /* renamed from: b  reason: collision with root package name */
    private final long f31622b;

    /* renamed from: c  reason: collision with root package name */
    private final CountDownLatch f31623c;

    /* renamed from: d  reason: collision with root package name */
    private long f31624d;

    /* renamed from: e  reason: collision with root package name */
    private final j8.c f31625e;

    /* renamed from: f  reason: collision with root package name */
    final Set f31626f;

    /* renamed from: g  reason: collision with root package name */
    private long f31627g;

    /* renamed from: h  reason: collision with root package name */
    private final long f31628h;

    /* renamed from: i  reason: collision with root package name */
    private final u8.a f31629i;

    /* renamed from: j  reason: collision with root package name */
    private final e f31630j;

    /* renamed from: k  reason: collision with root package name */
    private final i f31631k;

    /* renamed from: l  reason: collision with root package name */
    private final j8.a f31632l;

    /* renamed from: m  reason: collision with root package name */
    private final boolean f31633m;

    /* renamed from: n  reason: collision with root package name */
    private final b f31634n;

    /* renamed from: o  reason: collision with root package name */
    private final w8.a f31635o;

    /* renamed from: p  reason: collision with root package name */
    private final Object f31636p = new Object();

    /* renamed from: q  reason: collision with root package name */
    private boolean f31637q;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    class a implements Runnable {
        a() {
        }

        @Override // java.lang.Runnable
        public void run() {
            synchronized (f.this.f31636p) {
                f.this.p();
            }
            f.this.f31637q = true;
            f.this.f31623c.countDown();
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static class b {

        /* renamed from: a  reason: collision with root package name */
        private boolean f31639a = false;

        /* renamed from: b  reason: collision with root package name */
        private long f31640b = -1;

        /* renamed from: c  reason: collision with root package name */
        private long f31641c = -1;

        b() {
        }

        public synchronized long a() {
            return this.f31641c;
        }

        public synchronized long b() {
            return this.f31640b;
        }

        public synchronized void c(long j10, long j11) {
            if (this.f31639a) {
                this.f31640b += j10;
                this.f31641c += j11;
            }
        }

        public synchronized boolean d() {
            return this.f31639a;
        }

        public synchronized void e() {
            this.f31639a = false;
            this.f31641c = -1L;
            this.f31640b = -1L;
        }

        public synchronized void f(long j10, long j11) {
            this.f31641c = j11;
            this.f31640b = j10;
            this.f31639a = true;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static class c {

        /* renamed from: a  reason: collision with root package name */
        public final long f31642a;

        /* renamed from: b  reason: collision with root package name */
        public final long f31643b;

        /* renamed from: c  reason: collision with root package name */
        public final long f31644c;

        public c(long j10, long j11, long j12) {
            this.f31642a = j10;
            this.f31643b = j11;
            this.f31644c = j12;
        }
    }

    public f(e eVar, i iVar, c cVar, j8.c cVar2, j8.a aVar, m8.b bVar, Executor executor, boolean z10) {
        this.f31621a = cVar.f31643b;
        long j10 = cVar.f31644c;
        this.f31622b = j10;
        this.f31624d = j10;
        this.f31629i = u8.a.d();
        this.f31630j = eVar;
        this.f31631k = iVar;
        this.f31627g = -1L;
        this.f31625e = cVar2;
        this.f31628h = cVar.f31642a;
        this.f31632l = aVar;
        this.f31634n = new b();
        this.f31635o = w8.d.a();
        this.f31633m = z10;
        this.f31626f = new HashSet();
        if (bVar != null) {
            bVar.a(this);
        }
        if (z10) {
            this.f31623c = new CountDownLatch(1);
            executor.execute(new a());
            return;
        }
        this.f31623c = new CountDownLatch(0);
    }

    private i8.a l(e.b bVar, CacheKey cacheKey, String str) {
        i8.a a10;
        synchronized (this.f31636p) {
            a10 = bVar.a(cacheKey);
            this.f31626f.add(str);
            this.f31634n.c(a10.size(), 1L);
        }
        return a10;
    }

    private void m(long j10, c.a aVar) {
        try {
            Collection<e.a> n10 = n(this.f31630j.g());
            long b10 = this.f31634n.b();
            long j11 = b10 - j10;
            int i10 = 0;
            long j12 = 0;
            for (e.a aVar2 : n10) {
                if (j12 > j11) {
                    break;
                }
                long h10 = this.f31630j.h(aVar2);
                this.f31626f.remove(aVar2.getId());
                if (h10 > 0) {
                    i10++;
                    j12 += h10;
                    k e10 = k.a().j(aVar2.getId()).g(aVar).i(h10).f(b10 - j12).e(j10);
                    j8.c cVar = this.f31625e;
                    if (cVar != null) {
                        cVar.g(e10);
                    }
                    e10.b();
                }
            }
            this.f31634n.c(-j12, -i10);
            this.f31630j.b();
        } catch (IOException e11) {
            j8.a aVar3 = this.f31632l;
            a.EnumC0418a enumC0418a = a.EnumC0418a.EVICTION;
            Class cls = f31618r;
            aVar3.a(enumC0418a, cls, "evictAboveSize: " + e11.getMessage(), e11);
            throw e11;
        }
    }

    private Collection n(Collection collection) {
        long now = this.f31635o.now() + f31619s;
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
        Collections.sort(arrayList2, this.f31631k.get());
        arrayList.addAll(arrayList2);
        return arrayList;
    }

    private void o() {
        synchronized (this.f31636p) {
            try {
                boolean p10 = p();
                s();
                long b10 = this.f31634n.b();
                if (b10 > this.f31624d && !p10) {
                    this.f31634n.e();
                    p();
                }
                long j10 = this.f31624d;
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
        long now = this.f31635o.now();
        if (this.f31634n.d()) {
            long j10 = this.f31627g;
            if (j10 != -1 && now - j10 <= f31620t) {
                return false;
            }
        }
        return q();
    }

    private boolean q() {
        Set set;
        boolean z10;
        long j10;
        long now = this.f31635o.now();
        long j11 = f31619s + now;
        if (this.f31633m && this.f31626f.isEmpty()) {
            set = this.f31626f;
        } else if (this.f31633m) {
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
            for (e.a aVar : this.f31630j.g()) {
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
                        if (this.f31633m) {
                            p8.j.g(set);
                            set.add(aVar.getId());
                        }
                    }
                    j11 = j10;
                } catch (IOException e10) {
                    e = e10;
                    this.f31632l.a(a.EnumC0418a.GENERIC_IO, f31618r, "calcFileCacheSize: " + e.getMessage(), e);
                    return z10;
                }
            }
            if (z11) {
                this.f31632l.a(a.EnumC0418a.READ_INVALID_ENTRY, f31618r, "Future timestamp found in " + i12 + " files , with a total size of " + i10 + " bytes, and a maximum time delta of " + j13 + "ms", null);
            }
            long j14 = i11;
            if (this.f31634n.a() != j14 || this.f31634n.b() != j12) {
                if (this.f31633m && this.f31626f != set) {
                    p8.j.g(set);
                    this.f31626f.clear();
                    this.f31626f.addAll(set);
                }
                this.f31634n.f(j12, j14);
            }
            this.f31627g = now;
            return true;
        } catch (IOException e11) {
            e = e11;
            z10 = false;
        }
    }

    private e.b r(String str, CacheKey cacheKey) {
        o();
        return this.f31630j.d(str, cacheKey);
    }

    private void s() {
        a.EnumC0693a enumC0693a;
        if (this.f31630j.isExternal()) {
            enumC0693a = a.EnumC0693a.EXTERNAL;
        } else {
            enumC0693a = a.EnumC0693a.INTERNAL;
        }
        if (this.f31629i.f(enumC0693a, this.f31622b - this.f31634n.b())) {
            this.f31624d = this.f31621a;
        } else {
            this.f31624d = this.f31622b;
        }
    }

    @Override // k8.j
    public void a() {
        synchronized (this.f31636p) {
            try {
                this.f31630j.a();
                this.f31626f.clear();
                j8.c cVar = this.f31625e;
                if (cVar != null) {
                    cVar.e();
                }
            } catch (IOException | NullPointerException e10) {
                j8.a aVar = this.f31632l;
                a.EnumC0418a enumC0418a = a.EnumC0418a.EVICTION;
                Class cls = f31618r;
                aVar.a(enumC0418a, cls, "clearAll: " + e10.getMessage(), e10);
            }
            this.f31634n.e();
        }
    }

    @Override // k8.j
    public boolean b(CacheKey cacheKey) {
        String str;
        IOException e10;
        String str2 = null;
        try {
            try {
                synchronized (this.f31636p) {
                    try {
                        List b10 = j8.d.b(cacheKey);
                        int i10 = 0;
                        while (i10 < b10.size()) {
                            String str3 = (String) b10.get(i10);
                            if (this.f31630j.c(str3, cacheKey)) {
                                this.f31626f.add(str3);
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
                            j8.c cVar = this.f31625e;
                            if (cVar != null) {
                                cVar.a(h10);
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

    @Override // k8.j
    public i8.a c(CacheKey cacheKey, j8.i iVar) {
        String a10;
        k d10 = k.a().d(cacheKey);
        j8.c cVar = this.f31625e;
        if (cVar != null) {
            cVar.f(d10);
        }
        synchronized (this.f31636p) {
            a10 = j8.d.a(cacheKey);
        }
        d10.j(a10);
        try {
            try {
                e.b r10 = r(a10, cacheKey);
                try {
                    r10.b(iVar, cacheKey);
                    i8.a l10 = l(r10, cacheKey, a10);
                    d10.i(l10.size()).f(this.f31634n.b());
                    j8.c cVar2 = this.f31625e;
                    if (cVar2 != null) {
                        cVar2.h(d10);
                    }
                    return l10;
                } finally {
                    if (!r10.l()) {
                        q8.a.i(f31618r, "Failed to delete temp file");
                    }
                }
            } catch (IOException e10) {
                d10.h(e10);
                j8.c cVar3 = this.f31625e;
                if (cVar3 != null) {
                    cVar3.d(d10);
                }
                q8.a.j(f31618r, "Failed inserting a file into the cache", e10);
                throw e10;
            }
        } finally {
            d10.b();
        }
    }

    @Override // k8.j
    public i8.a d(CacheKey cacheKey) {
        i8.a aVar;
        k d10 = k.a().d(cacheKey);
        try {
            synchronized (this.f31636p) {
                try {
                    List b10 = j8.d.b(cacheKey);
                    String str = null;
                    aVar = null;
                    for (int i10 = 0; i10 < b10.size(); i10++) {
                        str = (String) b10.get(i10);
                        d10.j(str);
                        aVar = this.f31630j.f(str, cacheKey);
                        if (aVar != null) {
                            break;
                        }
                    }
                    if (aVar == null) {
                        j8.c cVar = this.f31625e;
                        if (cVar != null) {
                            cVar.b(d10);
                        }
                        this.f31626f.remove(str);
                    } else {
                        p8.j.g(str);
                        j8.c cVar2 = this.f31625e;
                        if (cVar2 != null) {
                            cVar2.c(d10);
                        }
                        this.f31626f.add(str);
                    }
                } finally {
                }
            }
            return aVar;
        } catch (IOException e10) {
            this.f31632l.a(a.EnumC0418a.GENERIC_IO, f31618r, "getResource", e10);
            d10.h(e10);
            j8.c cVar3 = this.f31625e;
            if (cVar3 != null) {
                cVar3.a(d10);
            }
            return null;
        } finally {
            d10.b();
        }
    }

    @Override // k8.j
    public boolean e(CacheKey cacheKey) {
        synchronized (this.f31636p) {
            try {
                List b10 = j8.d.b(cacheKey);
                for (int i10 = 0; i10 < b10.size(); i10++) {
                    if (this.f31626f.contains((String) b10.get(i10))) {
                        return true;
                    }
                }
                return false;
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    @Override // k8.j
    public void f(CacheKey cacheKey) {
        synchronized (this.f31636p) {
            try {
                List b10 = j8.d.b(cacheKey);
                for (int i10 = 0; i10 < b10.size(); i10++) {
                    String str = (String) b10.get(i10);
                    this.f31630j.remove(str);
                    this.f31626f.remove(str);
                }
            } catch (IOException e10) {
                j8.a aVar = this.f31632l;
                a.EnumC0418a enumC0418a = a.EnumC0418a.DELETE_FILE;
                Class cls = f31618r;
                aVar.a(enumC0418a, cls, "delete: " + e10.getMessage(), e10);
            }
        }
    }

    @Override // k8.j
    public boolean g(CacheKey cacheKey) {
        synchronized (this.f31636p) {
            if (e(cacheKey)) {
                return true;
            }
            try {
                List b10 = j8.d.b(cacheKey);
                for (int i10 = 0; i10 < b10.size(); i10++) {
                    String str = (String) b10.get(i10);
                    if (this.f31630j.e(str, cacheKey)) {
                        this.f31626f.add(str);
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
