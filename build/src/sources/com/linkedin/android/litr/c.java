package com.linkedin.android.litr;

import android.text.TextUtils;
import android.util.Log;
import java.io.File;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.Iterator;
import java.util.List;
import rl.e;
import wl.f;
import zl.g;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
class c implements Runnable {

    /* renamed from: u  reason: collision with root package name */
    private static final String f18090u = "c";

    /* renamed from: d  reason: collision with root package name */
    List f18091d;

    /* renamed from: i  reason: collision with root package name */
    int f18093i;

    /* renamed from: r  reason: collision with root package name */
    private final List f18097r;

    /* renamed from: s  reason: collision with root package name */
    private final String f18098s;

    /* renamed from: t  reason: collision with root package name */
    private final a f18099t;

    /* renamed from: e  reason: collision with root package name */
    float f18092e = 0.0f;

    /* renamed from: o  reason: collision with root package name */
    yl.d f18094o = new yl.d();

    /* renamed from: p  reason: collision with root package name */
    zl.d f18095p = new zl.d();

    /* renamed from: q  reason: collision with root package name */
    pl.b f18096q = new pl.b();

    /* JADX INFO: Access modifiers changed from: package-private */
    public c(String str, List list, int i10, a aVar) {
        this.f18098s = str;
        this.f18097r = list;
        this.f18093i = i10;
        this.f18099t = aVar;
    }

    private void h() {
        for (b bVar : this.f18097r) {
            bVar.c().seekTo(bVar.c().getSelection().b(), 0);
        }
    }

    private void k() {
        if (this.f18091d != null) {
            for (int i10 = 0; i10 < this.f18091d.size(); i10++) {
                this.f18096q.d(i10, ((yl.c) this.f18091d.get(i10)).f());
            }
        }
    }

    void a() {
        try {
            try {
                k();
                g();
                c();
            } catch (Exception e10) {
                Log.e(f18090u, "cancel: ", e10);
            }
        } finally {
            this.f18099t.b(this.f18098s, this.f18096q.b());
        }
    }

    void b() {
        int size = this.f18097r.size();
        this.f18091d = new ArrayList(size);
        if (size >= 1) {
            for (int i10 = 0; i10 < size; i10++) {
                b bVar = (b) this.f18097r.get(i10);
                yl.c a10 = this.f18094o.a(bVar.f(), bVar.h(), bVar.c(), bVar.a(), bVar.e(), bVar.b(), bVar.d(), bVar.g());
                this.f18091d.add(a10);
                this.f18096q.e(i10, a10.c(), a10.d());
            }
            return;
        }
        throw new e(e.a.NO_TRACKS_FOUND);
    }

    void c() {
        List<b> list = this.f18097r;
        if (list != null) {
            for (b bVar : list) {
                try {
                    String a10 = bVar.d().a();
                    if (!TextUtils.isEmpty(a10)) {
                        new File(a10).delete();
                    }
                } catch (Exception e10) {
                    Log.e(f18090u, "deleteOutputFiles: ", e10);
                }
            }
        }
    }

    protected void d(Throwable th2) {
        try {
            try {
                k();
                g();
                c();
            } catch (Exception e10) {
                Log.e(f18090u, "error: ", e10);
            }
        } finally {
            this.f18099t.d(this.f18098s, th2, this.f18096q.b());
        }
    }

    void e() {
        for (int i10 = 0; i10 < this.f18097r.size(); i10++) {
            b bVar = (b) this.f18097r.get(i10);
            this.f18096q.a(bVar.c().getTrackFormat(bVar.f()));
            this.f18096q.d(i10, bVar.g());
        }
    }

    boolean f() {
        boolean z10;
        boolean z11 = true;
        for (int i10 = 0; i10 < this.f18091d.size(); i10++) {
            long currentTimeMillis = System.currentTimeMillis();
            if (((yl.c) this.f18091d.get(i10)).g() == 4) {
                z10 = true;
            } else {
                z10 = false;
            }
            z11 &= z10;
            this.f18096q.c(i10, System.currentTimeMillis() - currentTimeMillis);
        }
        float f10 = 0.0f;
        for (yl.c cVar : this.f18091d) {
            f10 += cVar.e();
        }
        float size = f10 / this.f18091d.size();
        int i11 = this.f18093i;
        if ((i11 == 0 && size != this.f18092e) || (i11 != 0 && size >= this.f18092e + (1.0f / i11))) {
            this.f18099t.e(this.f18098s, size);
            this.f18092e = size;
        }
        return z11;
    }

    void g() {
        if (this.f18091d != null) {
            for (int i10 = 0; i10 < this.f18091d.size(); i10++) {
                try {
                    ((yl.c) this.f18091d.get(i10)).i();
                } catch (Exception e10) {
                    Log.e(f18090u, "release: Exception when stopping track transcoder: ", e10);
                }
            }
        }
        HashSet hashSet = new HashSet();
        HashSet hashSet2 = new HashSet();
        for (b bVar : this.f18097r) {
            hashSet.add(bVar.c());
            hashSet2.add(bVar.d());
        }
        Iterator it = hashSet.iterator();
        while (it.hasNext()) {
            try {
                ((wl.e) it.next()).release();
            } catch (Exception e11) {
                Log.e(f18090u, "release: Exception when releasing media source: ", e11);
            }
        }
        Iterator it2 = hashSet2.iterator();
        while (it2.hasNext()) {
            ((f) it2.next()).release();
        }
    }

    void i() {
        for (yl.c cVar : this.f18091d) {
            cVar.h();
        }
    }

    void j() {
        boolean f10;
        e();
        l();
        b();
        i();
        h();
        this.f18099t.f(this.f18098s);
        this.f18092e = 0.0f;
        while (true) {
            f10 = f();
            if (Thread.interrupted()) {
                a();
                f10 = false;
                break;
            } else if (f10) {
                break;
            }
        }
        if (f10) {
            k();
            g();
            this.f18099t.c(this.f18098s, this.f18096q.b());
        }
    }

    void l() {
        long e10 = g.e(this.f18097r);
        long j10 = ((float) e10) * 1.1f;
        long a10 = this.f18095p.a();
        if (a10 != -1 && a10 < j10) {
            throw new rl.a(e10, a10);
        }
    }

    @Override // java.lang.Runnable
    public void run() {
        try {
            j();
        } catch (RuntimeException e10) {
            Log.e(f18090u, "Transformation job error", e10);
            if (e10.getCause() instanceof InterruptedException) {
                a();
            } else {
                d(e10);
            }
        } catch (rl.d e11) {
            Log.e(f18090u, "Transformation job error", e11);
            e11.a(this.f18098s);
            d(e11);
        }
    }
}
