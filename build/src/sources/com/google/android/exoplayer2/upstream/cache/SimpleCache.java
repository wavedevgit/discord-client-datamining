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
import ne.y;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class SimpleCache implements com.google.android.exoplayer2.upstream.cache.a {

    /* renamed from: l  reason: collision with root package name */
    private static final HashSet f12981l = new HashSet();

    /* renamed from: a  reason: collision with root package name */
    private final File f12982a;

    /* renamed from: b  reason: collision with root package name */
    private final d f12983b;

    /* renamed from: c  reason: collision with root package name */
    private final h f12984c;

    /* renamed from: d  reason: collision with root package name */
    private final f f12985d;

    /* renamed from: e  reason: collision with root package name */
    private final HashMap f12986e;

    /* renamed from: f  reason: collision with root package name */
    private final Random f12987f;

    /* renamed from: g  reason: collision with root package name */
    private final boolean f12988g;

    /* renamed from: h  reason: collision with root package name */
    private long f12989h;

    /* renamed from: i  reason: collision with root package name */
    private long f12990i;

    /* renamed from: j  reason: collision with root package name */
    private boolean f12991j;

    /* renamed from: k  reason: collision with root package name */
    private a.C0159a f12992k;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    class a extends Thread {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ ConditionVariable f12993d;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        a(String str, ConditionVariable conditionVariable) {
            super(str);
            this.f12993d = conditionVariable;
        }

        @Override // java.lang.Thread, java.lang.Runnable
        public void run() {
            synchronized (SimpleCache.this) {
                this.f12993d.open();
                SimpleCache.this.p();
                SimpleCache.this.f12983b.f();
            }
        }
    }

    public SimpleCache(File file, d dVar, pc.b bVar) {
        this(file, dVar, bVar, null, false, false);
    }

    private void k(j jVar) {
        this.f12984c.m(jVar.f37822d).a(jVar);
        this.f12990i += jVar.f37824i;
        t(jVar);
    }

    private static void m(File file) {
        if (!file.mkdirs() && !file.isDirectory()) {
            String str = "Failed to create cache directory: " + file;
            y.c("SimpleCache", str);
            throw new a.C0159a(str);
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
        g g10 = this.f12984c.g(str);
        if (g10 == null) {
            return j.i(str, j10, j11);
        }
        while (true) {
            d10 = g10.d(j10, j11);
            if (!d10.f37825o || d10.f37826p.length() == d10.f37824i) {
                break;
            }
            y();
        }
        return d10;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void p() {
        if (!this.f12982a.exists()) {
            try {
                m(this.f12982a);
            } catch (a.C0159a e10) {
                this.f12992k = e10;
                return;
            }
        }
        File[] listFiles = this.f12982a.listFiles();
        if (listFiles == null) {
            String str = "Failed to list cache directory files: " + this.f12982a;
            y.c("SimpleCache", str);
            this.f12992k = new a.C0159a(str);
            return;
        }
        long r10 = r(listFiles);
        this.f12989h = r10;
        if (r10 == -1) {
            try {
                this.f12989h = n(this.f12982a);
            } catch (IOException e11) {
                String str2 = "Failed to create cache UID: " + this.f12982a;
                y.d("SimpleCache", str2, e11);
                this.f12992k = new a.C0159a(str2, e11);
                return;
            }
        }
        try {
            this.f12984c.n(this.f12989h);
            f fVar = this.f12985d;
            if (fVar != null) {
                fVar.e(this.f12989h);
                Map b10 = this.f12985d.b();
                q(this.f12982a, true, listFiles, b10);
                this.f12985d.g(b10.keySet());
            } else {
                q(this.f12982a, true, listFiles, null);
            }
            this.f12984c.r();
            try {
                this.f12984c.s();
            } catch (IOException e12) {
                y.d("SimpleCache", "Storing index file failed", e12);
            }
        } catch (IOException e13) {
            String str3 = "Failed to initialize cache indices: " + this.f12982a;
            y.d("SimpleCache", str3, e13);
            this.f12992k = new a.C0159a(str3, e13);
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
                        j10 = eVar.f13025a;
                        j11 = eVar.f13026b;
                    } else {
                        j10 = -1;
                        j11 = -9223372036854775807L;
                    }
                    j g10 = j.g(file2, j10, j11, this.f12984c);
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
            add = f12981l.add(file.getAbsoluteFile());
        }
        return add;
    }

    private void t(j jVar) {
        ArrayList arrayList = (ArrayList) this.f12986e.get(jVar.f37822d);
        if (arrayList != null) {
            for (int size = arrayList.size() - 1; size >= 0; size--) {
                ((a.b) arrayList.get(size)).c(this, jVar);
            }
        }
        this.f12983b.c(this, jVar);
    }

    private void u(me.c cVar) {
        ArrayList arrayList = (ArrayList) this.f12986e.get(cVar.f37822d);
        if (arrayList != null) {
            for (int size = arrayList.size() - 1; size >= 0; size--) {
                ((a.b) arrayList.get(size)).d(this, cVar);
            }
        }
        this.f12983b.d(this, cVar);
    }

    private void v(j jVar, me.c cVar) {
        ArrayList arrayList = (ArrayList) this.f12986e.get(jVar.f37822d);
        if (arrayList != null) {
            for (int size = arrayList.size() - 1; size >= 0; size--) {
                ((a.b) arrayList.get(size)).a(this, jVar, cVar);
            }
        }
        this.f12983b.a(this, jVar, cVar);
    }

    private static long w(String str) {
        return Long.parseLong(str.substring(0, str.indexOf(46)), 16);
    }

    private void x(me.c cVar) {
        g g10 = this.f12984c.g(cVar.f37822d);
        if (g10 != null && g10.j(cVar)) {
            this.f12990i -= cVar.f37824i;
            if (this.f12985d != null) {
                String name = cVar.f37826p.getName();
                try {
                    this.f12985d.f(name);
                } catch (IOException unused) {
                    y.i("SimpleCache", "Failed to remove file index entry for: " + name);
                }
            }
            this.f12984c.p(g10.f13031b);
            u(cVar);
        }
    }

    private void y() {
        ArrayList arrayList = new ArrayList();
        for (g gVar : this.f12984c.h()) {
            Iterator it = gVar.e().iterator();
            while (it.hasNext()) {
                me.c cVar = (me.c) it.next();
                if (cVar.f37826p.length() != cVar.f37824i) {
                    arrayList.add(cVar);
                }
            }
        }
        for (int i10 = 0; i10 < arrayList.size(); i10++) {
            x((me.c) arrayList.get(i10));
        }
    }

    private j z(String str, j jVar) {
        boolean z10;
        if (!this.f12988g) {
            return jVar;
        }
        String name = ((File) ne.a.e(jVar.f37826p)).getName();
        long j10 = jVar.f37824i;
        long currentTimeMillis = System.currentTimeMillis();
        f fVar = this.f12985d;
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
        j k10 = this.f12984c.g(str).k(jVar, currentTimeMillis, z10);
        v(jVar, k10);
        return k10;
    }

    @Override // com.google.android.exoplayer2.upstream.cache.a
    public synchronized File a(String str, long j10, long j11) {
        Throwable th2;
        try {
            try {
                ne.a.g(!this.f12991j);
                l();
                g g10 = this.f12984c.g(str);
                ne.a.e(g10);
                ne.a.g(g10.g(j10, j11));
                if (!this.f12982a.exists()) {
                    try {
                        m(this.f12982a);
                        y();
                    } catch (Throwable th3) {
                        th2 = th3;
                        throw th2;
                    }
                }
                this.f12983b.e(this, str, j10, j11);
                File file = new File(this.f12982a, Integer.toString(this.f12987f.nextInt(10)));
                if (!file.exists()) {
                    m(file);
                }
                return j.k(file, g10.f13030a, j10, System.currentTimeMillis());
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
    public synchronized me.d b(String str) {
        ne.a.g(!this.f12991j);
        return this.f12984c.j(str);
    }

    @Override // com.google.android.exoplayer2.upstream.cache.a
    public synchronized me.c c(String str, long j10, long j11) {
        try {
            try {
                ne.a.g(!this.f12991j);
                l();
                j o10 = o(str, j10, j11);
                if (o10.f37825o) {
                    return z(str, o10);
                } else if (this.f12984c.m(str).i(j10, o10.f37824i)) {
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
    public synchronized void d(me.c cVar) {
        ne.a.g(!this.f12991j);
        x(cVar);
    }

    @Override // com.google.android.exoplayer2.upstream.cache.a
    public synchronized void e(me.c cVar) {
        ne.a.g(!this.f12991j);
        g gVar = (g) ne.a.e(this.f12984c.g(cVar.f37822d));
        gVar.l(cVar.f37823e);
        this.f12984c.p(gVar.f13031b);
        notifyAll();
    }

    @Override // com.google.android.exoplayer2.upstream.cache.a
    public synchronized void f(String str, me.e eVar) {
        ne.a.g(!this.f12991j);
        l();
        this.f12984c.e(str, eVar);
        try {
            this.f12984c.s();
        } catch (IOException e10) {
            throw new a.C0159a(e10);
        }
    }

    /* JADX WARN: Unsupported multi-entry loop pattern (BACK_EDGE: B:19:? -> B:10:0x001e). Please submit an issue!!! */
    @Override // com.google.android.exoplayer2.upstream.cache.a
    public synchronized me.c g(String str, long j10, long j11) {
        try {
            ne.a.g(!this.f12991j);
            l();
            while (true) {
                me.c c10 = c(str, j10, j11);
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
    public synchronized void h(File file, long j10) {
        boolean z10 = true;
        ne.a.g(!this.f12991j);
        if (!file.exists()) {
            return;
        }
        if (j10 == 0) {
            file.delete();
            return;
        }
        j jVar = (j) ne.a.e(j.h(file, j10, this.f12984c));
        g gVar = (g) ne.a.e(this.f12984c.g(jVar.f37822d));
        ne.a.g(gVar.g(jVar.f37823e, jVar.f37824i));
        long d10 = me.d.d(gVar.c());
        if (d10 != -1) {
            if (jVar.f37823e + jVar.f37824i > d10) {
                z10 = false;
            }
            ne.a.g(z10);
        }
        if (this.f12985d != null) {
            try {
                this.f12985d.h(file.getName(), jVar.f37824i, jVar.f37827q);
            } catch (IOException e10) {
                throw new a.C0159a(e10);
            }
        }
        k(jVar);
        try {
            this.f12984c.s();
            notifyAll();
        } catch (IOException e11) {
            throw new a.C0159a(e11);
        }
    }

    public synchronized void l() {
        a.C0159a c0159a = this.f12992k;
        if (c0159a != null) {
            throw c0159a;
        }
    }

    public SimpleCache(File file, d dVar, pc.b bVar, byte[] bArr, boolean z10, boolean z11) {
        this(file, dVar, new h(bVar, file, bArr, z10, z11), (bVar == null || z11) ? null : new f(bVar));
    }

    SimpleCache(File file, d dVar, h hVar, f fVar) {
        if (s(file)) {
            this.f12982a = file;
            this.f12983b = dVar;
            this.f12984c = hVar;
            this.f12985d = fVar;
            this.f12986e = new HashMap();
            this.f12987f = new Random();
            this.f12988g = dVar.b();
            this.f12989h = -1L;
            ConditionVariable conditionVariable = new ConditionVariable();
            new a("ExoPlayer:SimpleCacheInit", conditionVariable).start();
            conditionVariable.block();
            return;
        }
        throw new IllegalStateException("Another SimpleCache instance uses the folder: " + file);
    }
}
