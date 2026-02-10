package com.google.android.exoplayer2.upstream.cache;

import android.os.ConditionVariable;
import com.google.android.exoplayer2.upstream.cache.a;
import java.io.File;
import java.io.IOException;
import java.security.SecureRandom;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Iterator;
import java.util.Map;
import java.util.Random;
import oe.y;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class SimpleCache implements com.google.android.exoplayer2.upstream.cache.a {

    /* renamed from: l  reason: collision with root package name */
    private static final HashSet f14020l = new HashSet();

    /* renamed from: a  reason: collision with root package name */
    private final File f14021a;

    /* renamed from: b  reason: collision with root package name */
    private final d f14022b;

    /* renamed from: c  reason: collision with root package name */
    private final h f14023c;

    /* renamed from: d  reason: collision with root package name */
    private final f f14024d;

    /* renamed from: e  reason: collision with root package name */
    private final HashMap f14025e;

    /* renamed from: f  reason: collision with root package name */
    private final Random f14026f;

    /* renamed from: g  reason: collision with root package name */
    private final boolean f14027g;

    /* renamed from: h  reason: collision with root package name */
    private long f14028h;

    /* renamed from: i  reason: collision with root package name */
    private long f14029i;

    /* renamed from: j  reason: collision with root package name */
    private boolean f14030j;

    /* renamed from: k  reason: collision with root package name */
    private a.C0172a f14031k;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    class a extends Thread {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ ConditionVariable f14032d;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        a(String str, ConditionVariable conditionVariable) {
            super(str);
            this.f14032d = conditionVariable;
        }

        @Override // java.lang.Thread, java.lang.Runnable
        public void run() {
            synchronized (SimpleCache.this) {
                this.f14032d.open();
                SimpleCache.this.p();
                SimpleCache.this.f14022b.e();
            }
        }
    }

    public SimpleCache(File file, d dVar, qc.b bVar) {
        this(file, dVar, bVar, null, false, false);
    }

    private void k(j jVar) {
        this.f14023c.m(jVar.f37177d).a(jVar);
        this.f14029i += jVar.f37179i;
        t(jVar);
    }

    private static void m(File file) {
        if (!file.mkdirs() && !file.isDirectory()) {
            String str = "Failed to create cache directory: " + file;
            y.c("SimpleCache", str);
            throw new a.C0172a(str);
        }
    }

    private static long n(File file) {
        long abs;
        long nextLong = new SecureRandom().nextLong();
        if (nextLong == Long.MIN_VALUE) {
            abs = 0;
        } else {
            abs = Math.abs(nextLong);
        }
        String l10 = Long.toString(abs, 16);
        File file2 = new File(file, l10 + ".uid");
        if (file2.createNewFile()) {
            return abs;
        }
        throw new IOException("Failed to create UID file: " + file2);
    }

    private j o(String str, long j10, long j11) {
        j d10;
        g g10 = this.f14023c.g(str);
        if (g10 == null) {
            return j.i(str, j10, j11);
        }
        while (true) {
            d10 = g10.d(j10, j11);
            if (!d10.f37180o || d10.f37181p.length() == d10.f37179i) {
                break;
            }
            y();
        }
        return d10;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void p() {
        if (!this.f14021a.exists()) {
            try {
                m(this.f14021a);
            } catch (a.C0172a e10) {
                this.f14031k = e10;
                return;
            }
        }
        File[] listFiles = this.f14021a.listFiles();
        if (listFiles == null) {
            String str = "Failed to list cache directory files: " + this.f14021a;
            y.c("SimpleCache", str);
            this.f14031k = new a.C0172a(str);
            return;
        }
        long r10 = r(listFiles);
        this.f14028h = r10;
        if (r10 == -1) {
            try {
                this.f14028h = n(this.f14021a);
            } catch (IOException e11) {
                String str2 = "Failed to create cache UID: " + this.f14021a;
                y.d("SimpleCache", str2, e11);
                this.f14031k = new a.C0172a(str2, e11);
                return;
            }
        }
        try {
            this.f14023c.n(this.f14028h);
            f fVar = this.f14024d;
            if (fVar != null) {
                fVar.e(this.f14028h);
                Map b10 = this.f14024d.b();
                q(this.f14021a, true, listFiles, b10);
                this.f14024d.g(b10.keySet());
            } else {
                q(this.f14021a, true, listFiles, null);
            }
            this.f14023c.r();
            try {
                this.f14023c.s();
            } catch (IOException e12) {
                y.d("SimpleCache", "Storing index file failed", e12);
            }
        } catch (IOException e13) {
            String str3 = "Failed to initialize cache indices: " + this.f14021a;
            y.d("SimpleCache", str3, e13);
            this.f14031k = new a.C0172a(str3, e13);
        }
    }

    private void q(File file, boolean z10, File[] fileArr, Map map) {
        e eVar;
        long j10;
        long j11;
        if (fileArr != null && fileArr.length != 0) {
            for (File file2 : fileArr) {
                String name = file2.getName();
                if (z10 && name.indexOf(46) == -1) {
                    q(file2, false, file2.listFiles(), map);
                } else if (!z10 || (!h.o(name) && !name.endsWith(".uid"))) {
                    if (map != null) {
                        eVar = (e) map.remove(name);
                    } else {
                        eVar = null;
                    }
                    if (eVar != null) {
                        j10 = eVar.f14064a;
                        j11 = eVar.f14065b;
                    } else {
                        j10 = -1;
                        j11 = -9223372036854775807L;
                    }
                    j g10 = j.g(file2, j10, j11, this.f14023c);
                    if (g10 != null) {
                        k(g10);
                    } else {
                        file2.delete();
                    }
                }
            }
        } else if (!z10) {
            file.delete();
        }
    }

    private static long r(File[] fileArr) {
        int length = fileArr.length;
        for (int i10 = 0; i10 < length; i10++) {
            File file = fileArr[i10];
            String name = file.getName();
            if (name.endsWith(".uid")) {
                try {
                    return w(name);
                } catch (NumberFormatException unused) {
                    y.c("SimpleCache", "Malformed UID file: " + file);
                    file.delete();
                }
            }
        }
        return -1L;
    }

    private static synchronized boolean s(File file) {
        boolean add;
        synchronized (SimpleCache.class) {
            add = f14020l.add(file.getAbsoluteFile());
        }
        return add;
    }

    private void t(j jVar) {
        ArrayList arrayList = (ArrayList) this.f14025e.get(jVar.f37177d);
        if (arrayList != null) {
            for (int size = arrayList.size() - 1; size >= 0; size--) {
                ((a.b) arrayList.get(size)).f(this, jVar);
            }
        }
        this.f14022b.f(this, jVar);
    }

    private void u(ne.c cVar) {
        ArrayList arrayList = (ArrayList) this.f14025e.get(cVar.f37177d);
        if (arrayList != null) {
            for (int size = arrayList.size() - 1; size >= 0; size--) {
                ((a.b) arrayList.get(size)).b(this, cVar);
            }
        }
        this.f14022b.b(this, cVar);
    }

    private void v(j jVar, ne.c cVar) {
        ArrayList arrayList = (ArrayList) this.f14025e.get(jVar.f37177d);
        if (arrayList != null) {
            for (int size = arrayList.size() - 1; size >= 0; size--) {
                ((a.b) arrayList.get(size)).c(this, jVar, cVar);
            }
        }
        this.f14022b.c(this, jVar, cVar);
    }

    private static long w(String str) {
        return Long.parseLong(str.substring(0, str.indexOf(46)), 16);
    }

    private void x(ne.c cVar) {
        g g10 = this.f14023c.g(cVar.f37177d);
        if (g10 != null && g10.j(cVar)) {
            this.f14029i -= cVar.f37179i;
            if (this.f14024d != null) {
                String name = cVar.f37181p.getName();
                try {
                    this.f14024d.f(name);
                } catch (IOException unused) {
                    y.i("SimpleCache", "Failed to remove file index entry for: " + name);
                }
            }
            this.f14023c.p(g10.f14070b);
            u(cVar);
        }
    }

    private void y() {
        ArrayList arrayList = new ArrayList();
        for (g gVar : this.f14023c.h()) {
            Iterator it = gVar.e().iterator();
            while (it.hasNext()) {
                ne.c cVar = (ne.c) it.next();
                if (cVar.f37181p.length() != cVar.f37179i) {
                    arrayList.add(cVar);
                }
            }
        }
        for (int i10 = 0; i10 < arrayList.size(); i10++) {
            x((ne.c) arrayList.get(i10));
        }
    }

    private j z(String str, j jVar) {
        boolean z10;
        if (!this.f14027g) {
            return jVar;
        }
        String name = ((File) oe.a.e(jVar.f37181p)).getName();
        long j10 = jVar.f37179i;
        long currentTimeMillis = System.currentTimeMillis();
        f fVar = this.f14024d;
        if (fVar != null) {
            try {
                fVar.h(name, j10, currentTimeMillis);
            } catch (IOException unused) {
                y.i("SimpleCache", "Failed to update index with new touch timestamp.");
            }
            z10 = false;
        } else {
            z10 = true;
        }
        j k10 = this.f14023c.g(str).k(jVar, currentTimeMillis, z10);
        v(jVar, k10);
        return k10;
    }

    @Override // com.google.android.exoplayer2.upstream.cache.a
    public synchronized File a(String str, long j10, long j11) {
        Throwable th2;
        try {
            try {
                oe.a.g(!this.f14030j);
                l();
                g g10 = this.f14023c.g(str);
                oe.a.e(g10);
                oe.a.g(g10.g(j10, j11));
                if (!this.f14021a.exists()) {
                    try {
                        m(this.f14021a);
                        y();
                    } catch (Throwable th3) {
                        th2 = th3;
                        throw th2;
                    }
                }
                this.f14022b.d(this, str, j10, j11);
                File file = new File(this.f14021a, Integer.toString(this.f14026f.nextInt(10)));
                if (!file.exists()) {
                    m(file);
                }
                return j.l(file, g10.f14069a, j10, System.currentTimeMillis());
            } catch (Throwable th4) {
                th = th4;
                th2 = th;
                throw th2;
            }
        } catch (Throwable th5) {
            th = th5;
            th2 = th;
            throw th2;
        }
    }

    @Override // com.google.android.exoplayer2.upstream.cache.a
    public synchronized ne.d b(String str) {
        oe.a.g(!this.f14030j);
        return this.f14023c.j(str);
    }

    @Override // com.google.android.exoplayer2.upstream.cache.a
    public synchronized ne.c c(String str, long j10, long j11) {
        try {
            try {
                oe.a.g(!this.f14030j);
                l();
                j o10 = o(str, j10, j11);
                if (o10.f37180o) {
                    return z(str, o10);
                } else if (this.f14023c.m(str).i(j10, o10.f37179i)) {
                    return o10;
                } else {
                    return null;
                }
            } catch (Throwable th2) {
                th = th2;
                throw th;
            }
        } catch (Throwable th3) {
            th = th3;
        }
    }

    @Override // com.google.android.exoplayer2.upstream.cache.a
    public synchronized void d(String str, ne.e eVar) {
        oe.a.g(!this.f14030j);
        l();
        this.f14023c.e(str, eVar);
        try {
            this.f14023c.s();
        } catch (IOException e10) {
            throw new a.C0172a(e10);
        }
    }

    @Override // com.google.android.exoplayer2.upstream.cache.a
    public synchronized void e(ne.c cVar) {
        oe.a.g(!this.f14030j);
        x(cVar);
    }

    /* JADX WARN: Unsupported multi-entry loop pattern (BACK_EDGE: B:19:? -> B:10:0x001e). Please submit an issue!!! */
    @Override // com.google.android.exoplayer2.upstream.cache.a
    public synchronized ne.c f(String str, long j10, long j11) {
        try {
            oe.a.g(!this.f14030j);
            l();
            while (true) {
                ne.c c10 = c(str, j10, j11);
                long j12 = j11;
                long j13 = j10;
                String str2 = str;
                if (c10 != null) {
                    return c10;
                }
                try {
                    wait();
                    str = str2;
                    j10 = j13;
                    j11 = j12;
                } catch (Throwable th2) {
                    th = th2;
                    throw th;
                }
            }
        } catch (Throwable th3) {
            th = th3;
            throw th;
        }
    }

    @Override // com.google.android.exoplayer2.upstream.cache.a
    public synchronized void g(File file, long j10) {
        boolean z10 = true;
        oe.a.g(!this.f14030j);
        if (!file.exists()) {
            return;
        }
        if (j10 == 0) {
            file.delete();
            return;
        }
        j jVar = (j) oe.a.e(j.h(file, j10, this.f14023c));
        g gVar = (g) oe.a.e(this.f14023c.g(jVar.f37177d));
        oe.a.g(gVar.g(jVar.f37178e, jVar.f37179i));
        long d10 = ne.d.d(gVar.c());
        if (d10 != -1) {
            if (jVar.f37178e + jVar.f37179i > d10) {
                z10 = false;
            }
            oe.a.g(z10);
        }
        if (this.f14024d != null) {
            try {
                this.f14024d.h(file.getName(), jVar.f37179i, jVar.f37182q);
            } catch (IOException e10) {
                throw new a.C0172a(e10);
            }
        }
        k(jVar);
        try {
            this.f14023c.s();
            notifyAll();
        } catch (IOException e11) {
            throw new a.C0172a(e11);
        }
    }

    @Override // com.google.android.exoplayer2.upstream.cache.a
    public synchronized void h(ne.c cVar) {
        oe.a.g(!this.f14030j);
        g gVar = (g) oe.a.e(this.f14023c.g(cVar.f37177d));
        gVar.l(cVar.f37178e);
        this.f14023c.p(gVar.f14070b);
        notifyAll();
    }

    public synchronized void l() {
        a.C0172a c0172a = this.f14031k;
        if (c0172a != null) {
            throw c0172a;
        }
    }

    public SimpleCache(File file, d dVar, qc.b bVar, byte[] bArr, boolean z10, boolean z11) {
        this(file, dVar, new h(bVar, file, bArr, z10, z11), (bVar == null || z11) ? null : new f(bVar));
    }

    SimpleCache(File file, d dVar, h hVar, f fVar) {
        if (s(file)) {
            this.f14021a = file;
            this.f14022b = dVar;
            this.f14023c = hVar;
            this.f14024d = fVar;
            this.f14025e = new HashMap();
            this.f14026f = new Random();
            this.f14027g = dVar.a();
            this.f14028h = -1L;
            ConditionVariable conditionVariable = new ConditionVariable();
            new a("ExoPlayer:SimpleCacheInit", conditionVariable).start();
            conditionVariable.block();
            return;
        }
        throw new IllegalStateException("Another SimpleCache instance uses the folder: " + file);
    }
}
