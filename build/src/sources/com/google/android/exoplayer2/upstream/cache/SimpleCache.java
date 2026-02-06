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
    private static final HashSet f13303l = new HashSet();

    /* renamed from: a  reason: collision with root package name */
    private final File f13304a;

    /* renamed from: b  reason: collision with root package name */
    private final d f13305b;

    /* renamed from: c  reason: collision with root package name */
    private final h f13306c;

    /* renamed from: d  reason: collision with root package name */
    private final f f13307d;

    /* renamed from: e  reason: collision with root package name */
    private final HashMap f13308e;

    /* renamed from: f  reason: collision with root package name */
    private final Random f13309f;

    /* renamed from: g  reason: collision with root package name */
    private final boolean f13310g;

    /* renamed from: h  reason: collision with root package name */
    private long f13311h;

    /* renamed from: i  reason: collision with root package name */
    private long f13312i;

    /* renamed from: j  reason: collision with root package name */
    private boolean f13313j;

    /* renamed from: k  reason: collision with root package name */
    private a.C0168a f13314k;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    class a extends Thread {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ ConditionVariable f13315d;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        a(String str, ConditionVariable conditionVariable) {
            super(str);
            this.f13315d = conditionVariable;
        }

        @Override // java.lang.Thread, java.lang.Runnable
        public void run() {
            synchronized (SimpleCache.this) {
                this.f13315d.open();
                SimpleCache.this.p();
                SimpleCache.this.f13305b.f();
            }
        }
    }

    public SimpleCache(File file, d dVar, pc.b bVar) {
        this(file, dVar, bVar, null, false, false);
    }

    private void k(j jVar) {
        this.f13306c.m(jVar.f37066d).a(jVar);
        this.f13312i += jVar.f37068i;
        t(jVar);
    }

    private static void m(File file) {
        if (!file.mkdirs() && !file.isDirectory()) {
            String str = "Failed to create cache directory: " + file;
            y.c("SimpleCache", str);
            throw new a.C0168a(str);
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
        g g10 = this.f13306c.g(str);
        if (g10 == null) {
            return j.i(str, j10, j11);
        }
        while (true) {
            d10 = g10.d(j10, j11);
            if (!d10.f37069o || d10.f37070p.length() == d10.f37068i) {
                break;
            }
            y();
        }
        return d10;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void p() {
        if (!this.f13304a.exists()) {
            try {
                m(this.f13304a);
            } catch (a.C0168a e10) {
                this.f13314k = e10;
                return;
            }
        }
        File[] listFiles = this.f13304a.listFiles();
        if (listFiles == null) {
            String str = "Failed to list cache directory files: " + this.f13304a;
            y.c("SimpleCache", str);
            this.f13314k = new a.C0168a(str);
            return;
        }
        long r10 = r(listFiles);
        this.f13311h = r10;
        if (r10 == -1) {
            try {
                this.f13311h = n(this.f13304a);
            } catch (IOException e11) {
                String str2 = "Failed to create cache UID: " + this.f13304a;
                y.d("SimpleCache", str2, e11);
                this.f13314k = new a.C0168a(str2, e11);
                return;
            }
        }
        try {
            this.f13306c.n(this.f13311h);
            f fVar = this.f13307d;
            if (fVar != null) {
                fVar.e(this.f13311h);
                Map b10 = this.f13307d.b();
                q(this.f13304a, true, listFiles, b10);
                this.f13307d.g(b10.keySet());
            } else {
                q(this.f13304a, true, listFiles, null);
            }
            this.f13306c.r();
            try {
                this.f13306c.s();
            } catch (IOException e12) {
                y.d("SimpleCache", "Storing index file failed", e12);
            }
        } catch (IOException e13) {
            String str3 = "Failed to initialize cache indices: " + this.f13304a;
            y.d("SimpleCache", str3, e13);
            this.f13314k = new a.C0168a(str3, e13);
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
                        j10 = eVar.f13347a;
                        j11 = eVar.f13348b;
                    } else {
                        j10 = -1;
                        j11 = -9223372036854775807L;
                    }
                    j g10 = j.g(file2, j10, j11, this.f13306c);
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
            add = f13303l.add(file.getAbsoluteFile());
        }
        return add;
    }

    private void t(j jVar) {
        ArrayList arrayList = (ArrayList) this.f13308e.get(jVar.f37066d);
        if (arrayList != null) {
            for (int size = arrayList.size() - 1; size >= 0; size--) {
                ((a.b) arrayList.get(size)).c(this, jVar);
            }
        }
        this.f13305b.c(this, jVar);
    }

    private void u(me.c cVar) {
        ArrayList arrayList = (ArrayList) this.f13308e.get(cVar.f37066d);
        if (arrayList != null) {
            for (int size = arrayList.size() - 1; size >= 0; size--) {
                ((a.b) arrayList.get(size)).d(this, cVar);
            }
        }
        this.f13305b.d(this, cVar);
    }

    private void v(j jVar, me.c cVar) {
        ArrayList arrayList = (ArrayList) this.f13308e.get(jVar.f37066d);
        if (arrayList != null) {
            for (int size = arrayList.size() - 1; size >= 0; size--) {
                ((a.b) arrayList.get(size)).a(this, jVar, cVar);
            }
        }
        this.f13305b.a(this, jVar, cVar);
    }

    private static long w(String str) {
        return Long.parseLong(str.substring(0, str.indexOf(46)), 16);
    }

    private void x(me.c cVar) {
        g g10 = this.f13306c.g(cVar.f37066d);
        if (g10 != null && g10.j(cVar)) {
            this.f13312i -= cVar.f37068i;
            if (this.f13307d != null) {
                String name = cVar.f37070p.getName();
                try {
                    this.f13307d.f(name);
                } catch (IOException unused) {
                    y.i("SimpleCache", "Failed to remove file index entry for: " + name);
                }
            }
            this.f13306c.p(g10.f13353b);
            u(cVar);
        }
    }

    private void y() {
        ArrayList arrayList = new ArrayList();
        for (g gVar : this.f13306c.h()) {
            Iterator it = gVar.e().iterator();
            while (it.hasNext()) {
                me.c cVar = (me.c) it.next();
                if (cVar.f37070p.length() != cVar.f37068i) {
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
        if (!this.f13310g) {
            return jVar;
        }
        String name = ((File) ne.a.e(jVar.f37070p)).getName();
        long j10 = jVar.f37068i;
        long currentTimeMillis = System.currentTimeMillis();
        f fVar = this.f13307d;
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
        j k10 = this.f13306c.g(str).k(jVar, currentTimeMillis, z10);
        v(jVar, k10);
        return k10;
    }

    @Override // com.google.android.exoplayer2.upstream.cache.a
    public synchronized File a(String str, long j10, long j11) {
        Throwable th2;
        try {
            try {
                ne.a.g(!this.f13313j);
                l();
                g g10 = this.f13306c.g(str);
                ne.a.e(g10);
                ne.a.g(g10.g(j10, j11));
                if (!this.f13304a.exists()) {
                    try {
                        m(this.f13304a);
                        y();
                    } catch (Throwable th3) {
                        th2 = th3;
                        throw th2;
                    }
                }
                this.f13305b.e(this, str, j10, j11);
                File file = new File(this.f13304a, Integer.toString(this.f13309f.nextInt(10)));
                if (!file.exists()) {
                    m(file);
                }
                return j.k(file, g10.f13352a, j10, System.currentTimeMillis());
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
        ne.a.g(!this.f13313j);
        return this.f13306c.j(str);
    }

    @Override // com.google.android.exoplayer2.upstream.cache.a
    public synchronized me.c c(String str, long j10, long j11) {
        try {
            try {
                ne.a.g(!this.f13313j);
                l();
                j o10 = o(str, j10, j11);
                if (o10.f37069o) {
                    return z(str, o10);
                } else if (this.f13306c.m(str).i(j10, o10.f37068i)) {
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
        ne.a.g(!this.f13313j);
        x(cVar);
    }

    @Override // com.google.android.exoplayer2.upstream.cache.a
    public synchronized void e(me.c cVar) {
        ne.a.g(!this.f13313j);
        g gVar = (g) ne.a.e(this.f13306c.g(cVar.f37066d));
        gVar.l(cVar.f37067e);
        this.f13306c.p(gVar.f13353b);
        notifyAll();
    }

    @Override // com.google.android.exoplayer2.upstream.cache.a
    public synchronized void f(String str, me.e eVar) {
        ne.a.g(!this.f13313j);
        l();
        this.f13306c.e(str, eVar);
        try {
            this.f13306c.s();
        } catch (IOException e10) {
            throw new a.C0168a(e10);
        }
    }

    /* JADX WARN: Unsupported multi-entry loop pattern (BACK_EDGE: B:19:? -> B:10:0x001e). Please submit an issue!!! */
    @Override // com.google.android.exoplayer2.upstream.cache.a
    public synchronized me.c g(String str, long j10, long j11) {
        try {
            ne.a.g(!this.f13313j);
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
        ne.a.g(!this.f13313j);
        if (!file.exists()) {
            return;
        }
        if (j10 == 0) {
            file.delete();
            return;
        }
        j jVar = (j) ne.a.e(j.h(file, j10, this.f13306c));
        g gVar = (g) ne.a.e(this.f13306c.g(jVar.f37066d));
        ne.a.g(gVar.g(jVar.f37067e, jVar.f37068i));
        long d10 = me.d.d(gVar.c());
        if (d10 != -1) {
            if (jVar.f37067e + jVar.f37068i > d10) {
                z10 = false;
            }
            ne.a.g(z10);
        }
        if (this.f13307d != null) {
            try {
                this.f13307d.h(file.getName(), jVar.f37068i, jVar.f37071q);
            } catch (IOException e10) {
                throw new a.C0168a(e10);
            }
        }
        k(jVar);
        try {
            this.f13306c.s();
            notifyAll();
        } catch (IOException e11) {
            throw new a.C0168a(e11);
        }
    }

    public synchronized void l() {
        a.C0168a c0168a = this.f13314k;
        if (c0168a != null) {
            throw c0168a;
        }
    }

    public SimpleCache(File file, d dVar, pc.b bVar, byte[] bArr, boolean z10, boolean z11) {
        this(file, dVar, new h(bVar, file, bArr, z10, z11), (bVar == null || z11) ? null : new f(bVar));
    }

    SimpleCache(File file, d dVar, h hVar, f fVar) {
        if (s(file)) {
            this.f13304a = file;
            this.f13305b = dVar;
            this.f13306c = hVar;
            this.f13307d = fVar;
            this.f13308e = new HashMap();
            this.f13309f = new Random();
            this.f13310g = dVar.b();
            this.f13311h = -1L;
            ConditionVariable conditionVariable = new ConditionVariable();
            new a("ExoPlayer:SimpleCacheInit", conditionVariable).start();
            conditionVariable.block();
            return;
        }
        throw new IllegalStateException("Another SimpleCache instance uses the folder: " + file);
    }
}
