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
    private static final HashSet f13443l = new HashSet();

    /* renamed from: a  reason: collision with root package name */
    private final File f13444a;

    /* renamed from: b  reason: collision with root package name */
    private final d f13445b;

    /* renamed from: c  reason: collision with root package name */
    private final h f13446c;

    /* renamed from: d  reason: collision with root package name */
    private final f f13447d;

    /* renamed from: e  reason: collision with root package name */
    private final HashMap f13448e;

    /* renamed from: f  reason: collision with root package name */
    private final Random f13449f;

    /* renamed from: g  reason: collision with root package name */
    private final boolean f13450g;

    /* renamed from: h  reason: collision with root package name */
    private long f13451h;

    /* renamed from: i  reason: collision with root package name */
    private long f13452i;

    /* renamed from: j  reason: collision with root package name */
    private boolean f13453j;

    /* renamed from: k  reason: collision with root package name */
    private a.C0195a f13454k;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    class a extends Thread {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ ConditionVariable f13455d;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        a(String str, ConditionVariable conditionVariable) {
            super(str);
            this.f13455d = conditionVariable;
        }

        @Override // java.lang.Thread, java.lang.Runnable
        public void run() {
            synchronized (SimpleCache.this) {
                this.f13455d.open();
                SimpleCache.this.p();
                SimpleCache.this.f13445b.e();
            }
        }
    }

    public SimpleCache(File file, d dVar, qc.b bVar) {
        this(file, dVar, bVar, null, false, false);
    }

    private void k(j jVar) {
        this.f13446c.m(jVar.f38173d).a(jVar);
        this.f13452i += jVar.f38175i;
        t(jVar);
    }

    private static void m(File file) {
        if (!file.mkdirs() && !file.isDirectory()) {
            String str = "Failed to create cache directory: " + file;
            y.c("SimpleCache", str);
            throw new a.C0195a(str);
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
        g g10 = this.f13446c.g(str);
        if (g10 == null) {
            return j.i(str, j10, j11);
        }
        while (true) {
            d10 = g10.d(j10, j11);
            if (!d10.f38176o || d10.f38177p.length() == d10.f38175i) {
                break;
            }
            y();
        }
        return d10;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void p() {
        if (!this.f13444a.exists()) {
            try {
                m(this.f13444a);
            } catch (a.C0195a e10) {
                this.f13454k = e10;
                return;
            }
        }
        File[] listFiles = this.f13444a.listFiles();
        if (listFiles == null) {
            String str = "Failed to list cache directory files: " + this.f13444a;
            y.c("SimpleCache", str);
            this.f13454k = new a.C0195a(str);
            return;
        }
        long r10 = r(listFiles);
        this.f13451h = r10;
        if (r10 == -1) {
            try {
                this.f13451h = n(this.f13444a);
            } catch (IOException e11) {
                String str2 = "Failed to create cache UID: " + this.f13444a;
                y.d("SimpleCache", str2, e11);
                this.f13454k = new a.C0195a(str2, e11);
                return;
            }
        }
        try {
            this.f13446c.n(this.f13451h);
            f fVar = this.f13447d;
            if (fVar != null) {
                fVar.e(this.f13451h);
                Map b10 = this.f13447d.b();
                q(this.f13444a, true, listFiles, b10);
                this.f13447d.g(b10.keySet());
            } else {
                q(this.f13444a, true, listFiles, null);
            }
            this.f13446c.r();
            try {
                this.f13446c.s();
            } catch (IOException e12) {
                y.d("SimpleCache", "Storing index file failed", e12);
            }
        } catch (IOException e13) {
            String str3 = "Failed to initialize cache indices: " + this.f13444a;
            y.d("SimpleCache", str3, e13);
            this.f13454k = new a.C0195a(str3, e13);
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
                        j10 = eVar.f13487a;
                        j11 = eVar.f13488b;
                    } else {
                        j10 = -1;
                        j11 = -9223372036854775807L;
                    }
                    j g10 = j.g(file2, j10, j11, this.f13446c);
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
            add = f13443l.add(file.getAbsoluteFile());
        }
        return add;
    }

    private void t(j jVar) {
        ArrayList arrayList = (ArrayList) this.f13448e.get(jVar.f38173d);
        if (arrayList != null) {
            for (int size = arrayList.size() - 1; size >= 0; size--) {
                ((a.b) arrayList.get(size)).f(this, jVar);
            }
        }
        this.f13445b.f(this, jVar);
    }

    private void u(ne.c cVar) {
        ArrayList arrayList = (ArrayList) this.f13448e.get(cVar.f38173d);
        if (arrayList != null) {
            for (int size = arrayList.size() - 1; size >= 0; size--) {
                ((a.b) arrayList.get(size)).b(this, cVar);
            }
        }
        this.f13445b.b(this, cVar);
    }

    private void v(j jVar, ne.c cVar) {
        ArrayList arrayList = (ArrayList) this.f13448e.get(jVar.f38173d);
        if (arrayList != null) {
            for (int size = arrayList.size() - 1; size >= 0; size--) {
                ((a.b) arrayList.get(size)).c(this, jVar, cVar);
            }
        }
        this.f13445b.c(this, jVar, cVar);
    }

    private static long w(String str) {
        return Long.parseLong(str.substring(0, str.indexOf(46)), 16);
    }

    private void x(ne.c cVar) {
        g g10 = this.f13446c.g(cVar.f38173d);
        if (g10 != null && g10.j(cVar)) {
            this.f13452i -= cVar.f38175i;
            if (this.f13447d != null) {
                String name = cVar.f38177p.getName();
                try {
                    this.f13447d.f(name);
                } catch (IOException unused) {
                    y.i("SimpleCache", "Failed to remove file index entry for: " + name);
                }
            }
            this.f13446c.p(g10.f13493b);
            u(cVar);
        }
    }

    private void y() {
        ArrayList arrayList = new ArrayList();
        for (g gVar : this.f13446c.h()) {
            Iterator it = gVar.e().iterator();
            while (it.hasNext()) {
                ne.c cVar = (ne.c) it.next();
                if (cVar.f38177p.length() != cVar.f38175i) {
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
        if (!this.f13450g) {
            return jVar;
        }
        String name = ((File) oe.a.e(jVar.f38177p)).getName();
        long j10 = jVar.f38175i;
        long currentTimeMillis = System.currentTimeMillis();
        f fVar = this.f13447d;
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
        j k10 = this.f13446c.g(str).k(jVar, currentTimeMillis, z10);
        v(jVar, k10);
        return k10;
    }

    @Override // com.google.android.exoplayer2.upstream.cache.a
    public synchronized File a(String str, long j10, long j11) {
        Throwable th2;
        try {
            try {
                oe.a.g(!this.f13453j);
                l();
                g g10 = this.f13446c.g(str);
                oe.a.e(g10);
                oe.a.g(g10.g(j10, j11));
                if (!this.f13444a.exists()) {
                    try {
                        m(this.f13444a);
                        y();
                    } catch (Throwable th3) {
                        th2 = th3;
                        throw th2;
                    }
                }
                this.f13445b.d(this, str, j10, j11);
                File file = new File(this.f13444a, Integer.toString(this.f13449f.nextInt(10)));
                if (!file.exists()) {
                    m(file);
                }
                return j.l(file, g10.f13492a, j10, System.currentTimeMillis());
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
        oe.a.g(!this.f13453j);
        return this.f13446c.j(str);
    }

    @Override // com.google.android.exoplayer2.upstream.cache.a
    public synchronized ne.c c(String str, long j10, long j11) {
        try {
            try {
                oe.a.g(!this.f13453j);
                l();
                j o10 = o(str, j10, j11);
                if (o10.f38176o) {
                    return z(str, o10);
                } else if (this.f13446c.m(str).i(j10, o10.f38175i)) {
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
        oe.a.g(!this.f13453j);
        l();
        this.f13446c.e(str, eVar);
        try {
            this.f13446c.s();
        } catch (IOException e10) {
            throw new a.C0195a(e10);
        }
    }

    @Override // com.google.android.exoplayer2.upstream.cache.a
    public synchronized void e(ne.c cVar) {
        oe.a.g(!this.f13453j);
        x(cVar);
    }

    /* JADX WARN: Unsupported multi-entry loop pattern (BACK_EDGE: B:19:? -> B:10:0x001e). Please submit an issue!!! */
    @Override // com.google.android.exoplayer2.upstream.cache.a
    public synchronized ne.c f(String str, long j10, long j11) {
        try {
            oe.a.g(!this.f13453j);
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
        oe.a.g(!this.f13453j);
        if (!file.exists()) {
            return;
        }
        if (j10 == 0) {
            file.delete();
            return;
        }
        j jVar = (j) oe.a.e(j.h(file, j10, this.f13446c));
        g gVar = (g) oe.a.e(this.f13446c.g(jVar.f38173d));
        oe.a.g(gVar.g(jVar.f38174e, jVar.f38175i));
        long d10 = ne.d.d(gVar.c());
        if (d10 != -1) {
            if (jVar.f38174e + jVar.f38175i > d10) {
                z10 = false;
            }
            oe.a.g(z10);
        }
        if (this.f13447d != null) {
            try {
                this.f13447d.h(file.getName(), jVar.f38175i, jVar.f38178q);
            } catch (IOException e10) {
                throw new a.C0195a(e10);
            }
        }
        k(jVar);
        try {
            this.f13446c.s();
            notifyAll();
        } catch (IOException e11) {
            throw new a.C0195a(e11);
        }
    }

    @Override // com.google.android.exoplayer2.upstream.cache.a
    public synchronized void h(ne.c cVar) {
        oe.a.g(!this.f13453j);
        g gVar = (g) oe.a.e(this.f13446c.g(cVar.f38173d));
        gVar.l(cVar.f38174e);
        this.f13446c.p(gVar.f13493b);
        notifyAll();
    }

    public synchronized void l() {
        a.C0195a c0195a = this.f13454k;
        if (c0195a != null) {
            throw c0195a;
        }
    }

    public SimpleCache(File file, d dVar, qc.b bVar, byte[] bArr, boolean z10, boolean z11) {
        this(file, dVar, new h(bVar, file, bArr, z10, z11), (bVar == null || z11) ? null : new f(bVar));
    }

    SimpleCache(File file, d dVar, h hVar, f fVar) {
        if (s(file)) {
            this.f13444a = file;
            this.f13445b = dVar;
            this.f13446c = hVar;
            this.f13447d = fVar;
            this.f13448e = new HashMap();
            this.f13449f = new Random();
            this.f13450g = dVar.a();
            this.f13451h = -1L;
            ConditionVariable conditionVariable = new ConditionVariable();
            new a("ExoPlayer:SimpleCacheInit", conditionVariable).start();
            conditionVariable.block();
            return;
        }
        throw new IllegalStateException("Another SimpleCache instance uses the folder: " + file);
    }
}
