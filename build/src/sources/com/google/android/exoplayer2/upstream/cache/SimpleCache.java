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
    private static final HashSet f13366l = new HashSet();

    /* renamed from: a  reason: collision with root package name */
    private final File f13367a;

    /* renamed from: b  reason: collision with root package name */
    private final d f13368b;

    /* renamed from: c  reason: collision with root package name */
    private final h f13369c;

    /* renamed from: d  reason: collision with root package name */
    private final f f13370d;

    /* renamed from: e  reason: collision with root package name */
    private final HashMap f13371e;

    /* renamed from: f  reason: collision with root package name */
    private final Random f13372f;

    /* renamed from: g  reason: collision with root package name */
    private final boolean f13373g;

    /* renamed from: h  reason: collision with root package name */
    private long f13374h;

    /* renamed from: i  reason: collision with root package name */
    private long f13375i;

    /* renamed from: j  reason: collision with root package name */
    private boolean f13376j;

    /* renamed from: k  reason: collision with root package name */
    private a.C0175a f13377k;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    class a extends Thread {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ ConditionVariable f13378d;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        a(String str, ConditionVariable conditionVariable) {
            super(str);
            this.f13378d = conditionVariable;
        }

        @Override // java.lang.Thread, java.lang.Runnable
        public void run() {
            synchronized (SimpleCache.this) {
                this.f13378d.open();
                SimpleCache.this.p();
                SimpleCache.this.f13368b.f();
            }
        }
    }

    public SimpleCache(File file, d dVar, pc.b bVar) {
        this(file, dVar, bVar, null, false, false);
    }

    private void k(j jVar) {
        this.f13369c.m(jVar.f37484d).a(jVar);
        this.f13375i += jVar.f37486i;
        t(jVar);
    }

    private static void m(File file) {
        if (!file.mkdirs() && !file.isDirectory()) {
            String str = "Failed to create cache directory: " + file;
            y.c("SimpleCache", str);
            throw new a.C0175a(str);
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
        g g10 = this.f13369c.g(str);
        if (g10 == null) {
            return j.i(str, j10, j11);
        }
        while (true) {
            d10 = g10.d(j10, j11);
            if (!d10.f37487o || d10.f37488p.length() == d10.f37486i) {
                break;
            }
            y();
        }
        return d10;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void p() {
        if (!this.f13367a.exists()) {
            try {
                m(this.f13367a);
            } catch (a.C0175a e10) {
                this.f13377k = e10;
                return;
            }
        }
        File[] listFiles = this.f13367a.listFiles();
        if (listFiles == null) {
            String str = "Failed to list cache directory files: " + this.f13367a;
            y.c("SimpleCache", str);
            this.f13377k = new a.C0175a(str);
            return;
        }
        long r10 = r(listFiles);
        this.f13374h = r10;
        if (r10 == -1) {
            try {
                this.f13374h = n(this.f13367a);
            } catch (IOException e11) {
                String str2 = "Failed to create cache UID: " + this.f13367a;
                y.d("SimpleCache", str2, e11);
                this.f13377k = new a.C0175a(str2, e11);
                return;
            }
        }
        try {
            this.f13369c.n(this.f13374h);
            f fVar = this.f13370d;
            if (fVar != null) {
                fVar.e(this.f13374h);
                Map b10 = this.f13370d.b();
                q(this.f13367a, true, listFiles, b10);
                this.f13370d.g(b10.keySet());
            } else {
                q(this.f13367a, true, listFiles, null);
            }
            this.f13369c.r();
            try {
                this.f13369c.s();
            } catch (IOException e12) {
                y.d("SimpleCache", "Storing index file failed", e12);
            }
        } catch (IOException e13) {
            String str3 = "Failed to initialize cache indices: " + this.f13367a;
            y.d("SimpleCache", str3, e13);
            this.f13377k = new a.C0175a(str3, e13);
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
                        j10 = eVar.f13410a;
                        j11 = eVar.f13411b;
                    } else {
                        j10 = -1;
                        j11 = -9223372036854775807L;
                    }
                    j g10 = j.g(file2, j10, j11, this.f13369c);
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
            add = f13366l.add(file.getAbsoluteFile());
        }
        return add;
    }

    private void t(j jVar) {
        ArrayList arrayList = (ArrayList) this.f13371e.get(jVar.f37484d);
        if (arrayList != null) {
            for (int size = arrayList.size() - 1; size >= 0; size--) {
                ((a.b) arrayList.get(size)).c(this, jVar);
            }
        }
        this.f13368b.c(this, jVar);
    }

    private void u(me.c cVar) {
        ArrayList arrayList = (ArrayList) this.f13371e.get(cVar.f37484d);
        if (arrayList != null) {
            for (int size = arrayList.size() - 1; size >= 0; size--) {
                ((a.b) arrayList.get(size)).d(this, cVar);
            }
        }
        this.f13368b.d(this, cVar);
    }

    private void v(j jVar, me.c cVar) {
        ArrayList arrayList = (ArrayList) this.f13371e.get(jVar.f37484d);
        if (arrayList != null) {
            for (int size = arrayList.size() - 1; size >= 0; size--) {
                ((a.b) arrayList.get(size)).a(this, jVar, cVar);
            }
        }
        this.f13368b.a(this, jVar, cVar);
    }

    private static long w(String str) {
        return Long.parseLong(str.substring(0, str.indexOf(46)), 16);
    }

    private void x(me.c cVar) {
        g g10 = this.f13369c.g(cVar.f37484d);
        if (g10 != null && g10.j(cVar)) {
            this.f13375i -= cVar.f37486i;
            if (this.f13370d != null) {
                String name = cVar.f37488p.getName();
                try {
                    this.f13370d.f(name);
                } catch (IOException unused) {
                    y.i("SimpleCache", "Failed to remove file index entry for: " + name);
                }
            }
            this.f13369c.p(g10.f13416b);
            u(cVar);
        }
    }

    private void y() {
        ArrayList arrayList = new ArrayList();
        for (g gVar : this.f13369c.h()) {
            Iterator it = gVar.e().iterator();
            while (it.hasNext()) {
                me.c cVar = (me.c) it.next();
                if (cVar.f37488p.length() != cVar.f37486i) {
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
        if (!this.f13373g) {
            return jVar;
        }
        String name = ((File) ne.a.e(jVar.f37488p)).getName();
        long j10 = jVar.f37486i;
        long currentTimeMillis = System.currentTimeMillis();
        f fVar = this.f13370d;
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
        j k10 = this.f13369c.g(str).k(jVar, currentTimeMillis, z10);
        v(jVar, k10);
        return k10;
    }

    @Override // com.google.android.exoplayer2.upstream.cache.a
    public synchronized File a(String str, long j10, long j11) {
        Throwable th2;
        try {
            try {
                ne.a.g(!this.f13376j);
                l();
                g g10 = this.f13369c.g(str);
                ne.a.e(g10);
                ne.a.g(g10.g(j10, j11));
                if (!this.f13367a.exists()) {
                    try {
                        m(this.f13367a);
                        y();
                    } catch (Throwable th3) {
                        th2 = th3;
                        throw th2;
                    }
                }
                this.f13368b.e(this, str, j10, j11);
                File file = new File(this.f13367a, Integer.toString(this.f13372f.nextInt(10)));
                if (!file.exists()) {
                    m(file);
                }
                return j.l(file, g10.f13415a, j10, System.currentTimeMillis());
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
        ne.a.g(!this.f13376j);
        return this.f13369c.j(str);
    }

    @Override // com.google.android.exoplayer2.upstream.cache.a
    public synchronized me.c c(String str, long j10, long j11) {
        try {
            try {
                ne.a.g(!this.f13376j);
                l();
                j o10 = o(str, j10, j11);
                if (o10.f37487o) {
                    return z(str, o10);
                } else if (this.f13369c.m(str).i(j10, o10.f37486i)) {
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
        ne.a.g(!this.f13376j);
        x(cVar);
    }

    @Override // com.google.android.exoplayer2.upstream.cache.a
    public synchronized void e(me.c cVar) {
        ne.a.g(!this.f13376j);
        g gVar = (g) ne.a.e(this.f13369c.g(cVar.f37484d));
        gVar.l(cVar.f37485e);
        this.f13369c.p(gVar.f13416b);
        notifyAll();
    }

    @Override // com.google.android.exoplayer2.upstream.cache.a
    public synchronized void f(String str, me.e eVar) {
        ne.a.g(!this.f13376j);
        l();
        this.f13369c.e(str, eVar);
        try {
            this.f13369c.s();
        } catch (IOException e10) {
            throw new a.C0175a(e10);
        }
    }

    /* JADX WARN: Unsupported multi-entry loop pattern (BACK_EDGE: B:19:? -> B:10:0x001e). Please submit an issue!!! */
    @Override // com.google.android.exoplayer2.upstream.cache.a
    public synchronized me.c g(String str, long j10, long j11) {
        try {
            ne.a.g(!this.f13376j);
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
        ne.a.g(!this.f13376j);
        if (!file.exists()) {
            return;
        }
        if (j10 == 0) {
            file.delete();
            return;
        }
        j jVar = (j) ne.a.e(j.h(file, j10, this.f13369c));
        g gVar = (g) ne.a.e(this.f13369c.g(jVar.f37484d));
        ne.a.g(gVar.g(jVar.f37485e, jVar.f37486i));
        long d10 = me.d.d(gVar.c());
        if (d10 != -1) {
            if (jVar.f37485e + jVar.f37486i > d10) {
                z10 = false;
            }
            ne.a.g(z10);
        }
        if (this.f13370d != null) {
            try {
                this.f13370d.h(file.getName(), jVar.f37486i, jVar.f37489q);
            } catch (IOException e10) {
                throw new a.C0175a(e10);
            }
        }
        k(jVar);
        try {
            this.f13369c.s();
            notifyAll();
        } catch (IOException e11) {
            throw new a.C0175a(e11);
        }
    }

    public synchronized void l() {
        a.C0175a c0175a = this.f13377k;
        if (c0175a != null) {
            throw c0175a;
        }
    }

    public SimpleCache(File file, d dVar, pc.b bVar, byte[] bArr, boolean z10, boolean z11) {
        this(file, dVar, new h(bVar, file, bArr, z10, z11), (bVar == null || z11) ? null : new f(bVar));
    }

    SimpleCache(File file, d dVar, h hVar, f fVar) {
        if (s(file)) {
            this.f13367a = file;
            this.f13368b = dVar;
            this.f13369c = hVar;
            this.f13370d = fVar;
            this.f13371e = new HashMap();
            this.f13372f = new Random();
            this.f13373g = dVar.b();
            this.f13374h = -1L;
            ConditionVariable conditionVariable = new ConditionVariable();
            new a("ExoPlayer:SimpleCacheInit", conditionVariable).start();
            conditionVariable.block();
            return;
        }
        throw new IllegalStateException("Another SimpleCache instance uses the folder: " + file);
    }
}
