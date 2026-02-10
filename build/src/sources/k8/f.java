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
    private static final Class f30759r = f.class;

    /* renamed from: s  reason: collision with root package name */
    private static final long f30760s = TimeUnit.HOURS.toMillis(2);

    /* renamed from: t  reason: collision with root package name */
    private static final long f30761t = TimeUnit.MINUTES.toMillis(30);

    /* renamed from: a  reason: collision with root package name */
    private final long f30762a;

    /* renamed from: b  reason: collision with root package name */
    private final long f30763b;

    /* renamed from: c  reason: collision with root package name */
    private final CountDownLatch f30764c;

    /* renamed from: d  reason: collision with root package name */
    private long f30765d;

    /* renamed from: e  reason: collision with root package name */
    private final j8.c f30766e;

    /* renamed from: f  reason: collision with root package name */
    final Set f30767f;

    /* renamed from: g  reason: collision with root package name */
    private long f30768g;

    /* renamed from: h  reason: collision with root package name */
    private final long f30769h;

    /* renamed from: i  reason: collision with root package name */
    private final u8.a f30770i;

    /* renamed from: j  reason: collision with root package name */
    private final e f30771j;

    /* renamed from: k  reason: collision with root package name */
    private final i f30772k;

    /* renamed from: l  reason: collision with root package name */
    private final j8.a f30773l;

    /* renamed from: m  reason: collision with root package name */
    private final boolean f30774m;

    /* renamed from: n  reason: collision with root package name */
    private final b f30775n;

    /* renamed from: o  reason: collision with root package name */
    private final w8.a f30776o;

    /* renamed from: p  reason: collision with root package name */
    private final Object f30777p = new Object();

    /* renamed from: q  reason: collision with root package name */
    private boolean f30778q;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    class a implements Runnable {
        a() {
        }

        @Override // java.lang.Runnable
        public void run() {
            synchronized (f.this.f30777p) {
                f.this.p();
            }
            f.this.f30778q = true;
            f.this.f30764c.countDown();
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static class b {

        /* renamed from: a  reason: collision with root package name */
        private boolean f30780a = false;

        /* renamed from: b  reason: collision with root package name */
        private long f30781b = -1;

        /* renamed from: c  reason: collision with root package name */
        private long f30782c = -1;

        b() {
        }

        public synchronized long a() {
            return this.f30782c;
        }

        public synchronized long b() {
            return this.f30781b;
        }

        public synchronized void c(long j10, long j11) {
            if (this.f30780a) {
                this.f30781b += j10;
                this.f30782c += j11;
            }
        }

        public synchronized boolean d() {
            return this.f30780a;
        }

        public synchronized void e() {
            this.f30780a = false;
            this.f30782c = -1L;
            this.f30781b = -1L;
        }

        public synchronized void f(long j10, long j11) {
            this.f30782c = j11;
            this.f30781b = j10;
            this.f30780a = true;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static class c {

        /* renamed from: a  reason: collision with root package name */
        public final long f30783a;

        /* renamed from: b  reason: collision with root package name */
        public final long f30784b;

        /* renamed from: c  reason: collision with root package name */
        public final long f30785c;

        public c(long j10, long j11, long j12) {
            this.f30783a = j10;
            this.f30784b = j11;
            this.f30785c = j12;
        }
    }

    public f(e eVar, i iVar, c cVar, j8.c cVar2, j8.a aVar, m8.b bVar, Executor executor, boolean z10) {
        this.f30762a = cVar.f30784b;
        long j10 = cVar.f30785c;
        this.f30763b = j10;
        this.f30765d = j10;
        this.f30770i = u8.a.d();
        this.f30771j = eVar;
        this.f30772k = iVar;
        this.f30768g = -1L;
        this.f30766e = cVar2;
        this.f30769h = cVar.f30783a;
        this.f30773l = aVar;
        this.f30775n = new b();
        this.f30776o = w8.d.a();
        this.f30774m = z10;
        this.f30767f = new HashSet();
        if (bVar != null) {
            bVar.a(this);
        }
        if (z10) {
            this.f30764c = new CountDownLatch(1);
            executor.execute(new a());
            return;
        }
        this.f30764c = new CountDownLatch(0);
    }

    private i8.a l(e.b bVar, CacheKey cacheKey, String str) {
        i8.a a10;
        synchronized (this.f30777p) {
            a10 = bVar.a(cacheKey);
            this.f30767f.add(str);
            this.f30775n.c(a10.size(), 1L);
        }
        return a10;
    }

    private void m(long j10, c.a aVar) {
        try {
            Collection<e.a> n10 = n(this.f30771j.g());
            long b10 = this.f30775n.b();
            long j11 = b10 - j10;
            int i10 = 0;
            long j12 = 0;
            for (e.a aVar2 : n10) {
                if (j12 > j11) {
                    break;
                }
                long h10 = this.f30771j.h(aVar2);
                this.f30767f.remove(aVar2.getId());
                if (h10 > 0) {
                    i10++;
                    j12 += h10;
                    k e10 = k.a().j(aVar2.getId()).g(aVar).i(h10).f(b10 - j12).e(j10);
                    j8.c cVar = this.f30766e;
                    if (cVar != null) {
                        cVar.g(e10);
                    }
                    e10.b();
                }
            }
            this.f30775n.c(-j12, -i10);
            this.f30771j.b();
        } catch (IOException e11) {
            j8.a aVar3 = this.f30773l;
            a.EnumC0450a enumC0450a = a.EnumC0450a.EVICTION;
            Class cls = f30759r;
            aVar3.a(enumC0450a, cls, "evictAboveSize: " + e11.getMessage(), e11);
            throw e11;
        }
    }

    private Collection n(Collection collection) {
        long now = this.f30776o.now() + f30760s;
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
        Collections.sort(arrayList2, this.f30772k.get());
        arrayList.addAll(arrayList2);
        return arrayList;
    }

    private void o() {
        synchronized (this.f30777p) {
            try {
                boolean p10 = p();
                s();
                long b10 = this.f30775n.b();
                if (b10 > this.f30765d && !p10) {
                    this.f30775n.e();
                    p();
                }
                long j10 = this.f30765d;
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
        long now = this.f30776o.now();
        if (this.f30775n.d()) {
            long j10 = this.f30768g;
            if (j10 != -1 && now - j10 <= f30761t) {
                return false;
            }
        }
        return q();
    }

    private boolean q() {
        Set set;
        boolean z10;
        long j10;
        long now = this.f30776o.now();
        long j11 = f30760s + now;
        if (this.f30774m && this.f30767f.isEmpty()) {
            set = this.f30767f;
        } else if (this.f30774m) {
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
            for (e.a aVar : this.f30771j.g()) {
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
                        if (this.f30774m) {
                            p8.j.g(set);
                            set.add(aVar.getId());
                        }
                    }
                    j11 = j10;
                } catch (IOException e10) {
                    e = e10;
                    this.f30773l.a(a.EnumC0450a.GENERIC_IO, f30759r, "calcFileCacheSize: " + e.getMessage(), e);
                    return z10;
                }
            }
            if (z11) {
                this.f30773l.a(a.EnumC0450a.READ_INVALID_ENTRY, f30759r, "Future timestamp found in " + i12 + " files , with a total size of " + i10 + " bytes, and a maximum time delta of " + j13 + "ms", null);
            }
            long j14 = i11;
            if (this.f30775n.a() != j14 || this.f30775n.b() != j12) {
                if (this.f30774m && this.f30767f != set) {
                    p8.j.g(set);
                    this.f30767f.clear();
                    this.f30767f.addAll(set);
                }
                this.f30775n.f(j12, j14);
            }
            this.f30768g = now;
            return true;
        } catch (IOException e11) {
            e = e11;
            z10 = false;
        }
    }

    private e.b r(String str, CacheKey cacheKey) {
        o();
        return this.f30771j.d(str, cacheKey);
    }

    private void s() {
        a.EnumC0711a enumC0711a;
        if (this.f30771j.isExternal()) {
            enumC0711a = a.EnumC0711a.EXTERNAL;
        } else {
            enumC0711a = a.EnumC0711a.INTERNAL;
        }
        if (this.f30770i.f(enumC0711a, this.f30763b - this.f30775n.b())) {
            this.f30765d = this.f30762a;
        } else {
            this.f30765d = this.f30763b;
        }
    }

    @Override // k8.j
    public void a() {
        synchronized (this.f30777p) {
            try {
                this.f30771j.a();
                this.f30767f.clear();
                j8.c cVar = this.f30766e;
                if (cVar != null) {
                    cVar.e();
                }
            } catch (IOException | NullPointerException e10) {
                j8.a aVar = this.f30773l;
                a.EnumC0450a enumC0450a = a.EnumC0450a.EVICTION;
                Class cls = f30759r;
                aVar.a(enumC0450a, cls, "clearAll: " + e10.getMessage(), e10);
            }
            this.f30775n.e();
        }
    }

    @Override // k8.j
    public boolean b(CacheKey cacheKey) {
        String str;
        IOException e10;
        String str2 = null;
        try {
            try {
                synchronized (this.f30777p) {
                    try {
                        List b10 = j8.d.b(cacheKey);
                        int i10 = 0;
                        while (i10 < b10.size()) {
                            String str3 = (String) b10.get(i10);
                            if (this.f30771j.c(str3, cacheKey)) {
                                this.f30767f.add(str3);
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
                            j8.c cVar = this.f30766e;
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
        j8.c cVar = this.f30766e;
        if (cVar != null) {
            cVar.f(d10);
        }
        synchronized (this.f30777p) {
            a10 = j8.d.a(cacheKey);
        }
        d10.j(a10);
        try {
            try {
                e.b r10 = r(a10, cacheKey);
                try {
                    r10.b(iVar, cacheKey);
                    i8.a l10 = l(r10, cacheKey, a10);
                    d10.i(l10.size()).f(this.f30775n.b());
                    j8.c cVar2 = this.f30766e;
                    if (cVar2 != null) {
                        cVar2.h(d10);
                    }
                    return l10;
                } finally {
                    if (!r10.l()) {
                        q8.a.i(f30759r, "Failed to delete temp file");
                    }
                }
            } catch (IOException e10) {
                d10.h(e10);
                j8.c cVar3 = this.f30766e;
                if (cVar3 != null) {
                    cVar3.d(d10);
                }
                q8.a.j(f30759r, "Failed inserting a file into the cache", e10);
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
            synchronized (this.f30777p) {
                try {
                    List b10 = j8.d.b(cacheKey);
                    String str = null;
                    aVar = null;
                    for (int i10 = 0; i10 < b10.size(); i10++) {
                        str = (String) b10.get(i10);
                        d10.j(str);
                        aVar = this.f30771j.f(str, cacheKey);
                        if (aVar != null) {
                            break;
                        }
                    }
                    if (aVar == null) {
                        j8.c cVar = this.f30766e;
                        if (cVar != null) {
                            cVar.b(d10);
                        }
                        this.f30767f.remove(str);
                    } else {
                        p8.j.g(str);
                        j8.c cVar2 = this.f30766e;
                        if (cVar2 != null) {
                            cVar2.c(d10);
                        }
                        this.f30767f.add(str);
                    }
                } finally {
                }
            }
            return aVar;
        } catch (IOException e10) {
            this.f30773l.a(a.EnumC0450a.GENERIC_IO, f30759r, "getResource", e10);
            d10.h(e10);
            j8.c cVar3 = this.f30766e;
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
        synchronized (this.f30777p) {
            try {
                List b10 = j8.d.b(cacheKey);
                for (int i10 = 0; i10 < b10.size(); i10++) {
                    if (this.f30767f.contains((String) b10.get(i10))) {
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
        synchronized (this.f30777p) {
            try {
                List b10 = j8.d.b(cacheKey);
                for (int i10 = 0; i10 < b10.size(); i10++) {
                    String str = (String) b10.get(i10);
                    this.f30771j.remove(str);
                    this.f30767f.remove(str);
                }
            } catch (IOException e10) {
                j8.a aVar = this.f30773l;
                a.EnumC0450a enumC0450a = a.EnumC0450a.DELETE_FILE;
                Class cls = f30759r;
                aVar.a(enumC0450a, cls, "delete: " + e10.getMessage(), e10);
            }
        }
    }

    @Override // k8.j
    public boolean g(CacheKey cacheKey) {
        synchronized (this.f30777p) {
            if (e(cacheKey)) {
                return true;
            }
            try {
                List b10 = j8.d.b(cacheKey);
                for (int i10 = 0; i10 < b10.size(); i10++) {
                    String str = (String) b10.get(i10);
                    if (this.f30771j.e(str, cacheKey)) {
                        this.f30767f.add(str);
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
