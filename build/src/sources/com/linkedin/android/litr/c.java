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
    private static final String f18091u = "c";

    /* renamed from: d  reason: collision with root package name */
    List f18092d;

    /* renamed from: i  reason: collision with root package name */
    int f18094i;

    /* renamed from: r  reason: collision with root package name */
    private final List f18098r;

    /* renamed from: s  reason: collision with root package name */
    private final String f18099s;

    /* renamed from: t  reason: collision with root package name */
    private final a f18100t;

    /* renamed from: e  reason: collision with root package name */
    float f18093e = 0.0f;

    /* renamed from: o  reason: collision with root package name */
    yl.d f18095o = new yl.d();

    /* renamed from: p  reason: collision with root package name */
    zl.d f18096p = new zl.d();

    /* renamed from: q  reason: collision with root package name */
    pl.b f18097q = new pl.b();

    /* JADX INFO: Access modifiers changed from: package-private */
    public c(String str, List list, int i10, a aVar) {
        this.f18099s = str;
        this.f18098r = list;
        this.f18094i = i10;
        this.f18100t = aVar;
    }

    private void h() {
        for (b bVar : this.f18098r) {
            bVar.c().seekTo(bVar.c().getSelection().b(), 0);
        }
    }

    private void k() {
        if (this.f18092d != null) {
            for (int i10 = 0; i10 < this.f18092d.size(); i10++) {
                this.f18097q.d(i10, ((yl.c) this.f18092d.get(i10)).f());
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
                Log.e(f18091u, "cancel: ", e10);
            }
        } finally {
            this.f18100t.b(this.f18099s, this.f18097q.b());
        }
    }

    void b() {
        int size = this.f18098r.size();
        this.f18092d = new ArrayList(size);
        if (size >= 1) {
            for (int i10 = 0; i10 < size; i10++) {
                b bVar = (b) this.f18098r.get(i10);
                yl.c a10 = this.f18095o.a(bVar.f(), bVar.h(), bVar.c(), bVar.a(), bVar.e(), bVar.b(), bVar.d(), bVar.g());
                this.f18092d.add(a10);
                this.f18097q.e(i10, a10.c(), a10.d());
            }
            return;
        }
        throw new e(e.a.NO_TRACKS_FOUND);
    }

    void c() {
        List<b> list = this.f18098r;
        if (list != null) {
            for (b bVar : list) {
                try {
                    String a10 = bVar.d().a();
                    if (!TextUtils.isEmpty(a10)) {
                        new File(a10).delete();
                    }
                } catch (Exception e10) {
                    Log.e(f18091u, "deleteOutputFiles: ", e10);
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
                Log.e(f18091u, "error: ", e10);
            }
        } finally {
            this.f18100t.d(this.f18099s, th2, this.f18097q.b());
        }
    }

    void e() {
        for (int i10 = 0; i10 < this.f18098r.size(); i10++) {
            b bVar = (b) this.f18098r.get(i10);
            this.f18097q.a(bVar.c().getTrackFormat(bVar.f()));
            this.f18097q.d(i10, bVar.g());
        }
    }

    boolean f() {
        boolean z10;
        boolean z11 = true;
        for (int i10 = 0; i10 < this.f18092d.size(); i10++) {
            long currentTimeMillis = System.currentTimeMillis();
            if (((yl.c) this.f18092d.get(i10)).g() == 4) {
                z10 = true;
            } else {
                z10 = false;
            }
            z11 &= z10;
            this.f18097q.c(i10, System.currentTimeMillis() - currentTimeMillis);
        }
        float f10 = 0.0f;
        for (yl.c cVar : this.f18092d) {
            f10 += cVar.e();
        }
        float size = f10 / this.f18092d.size();
        int i11 = this.f18094i;
        if ((i11 == 0 && size != this.f18093e) || (i11 != 0 && size >= this.f18093e + (1.0f / i11))) {
            this.f18100t.e(this.f18099s, size);
            this.f18093e = size;
        }
        return z11;
    }

    void g() {
        if (this.f18092d != null) {
            for (int i10 = 0; i10 < this.f18092d.size(); i10++) {
                try {
                    ((yl.c) this.f18092d.get(i10)).i();
                } catch (Exception e10) {
                    Log.e(f18091u, "release: Exception when stopping track transcoder: ", e10);
                }
            }
        }
        HashSet hashSet = new HashSet();
        HashSet hashSet2 = new HashSet();
        for (b bVar : this.f18098r) {
            hashSet.add(bVar.c());
            hashSet2.add(bVar.d());
        }
        Iterator it = hashSet.iterator();
        while (it.hasNext()) {
            try {
                ((wl.e) it.next()).release();
            } catch (Exception e11) {
                Log.e(f18091u, "release: Exception when releasing media source: ", e11);
            }
        }
        Iterator it2 = hashSet2.iterator();
        while (it2.hasNext()) {
            ((f) it2.next()).release();
        }
    }

    void i() {
        for (yl.c cVar : this.f18092d) {
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
        this.f18100t.f(this.f18099s);
        this.f18093e = 0.0f;
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
            this.f18100t.c(this.f18099s, this.f18097q.b());
        }
    }

    void l() {
        long e10 = g.e(this.f18098r);
        long j10 = ((float) e10) * 1.1f;
        long a10 = this.f18096p.a();
        if (a10 != -1 && a10 < j10) {
            throw new rl.a(e10, a10);
        }
    }

    @Override // java.lang.Runnable
    public void run() {
        try {
            j();
        } catch (RuntimeException e10) {
            Log.e(f18091u, "Transformation job error", e10);
            if (e10.getCause() instanceof InterruptedException) {
                a();
            } else {
                d(e10);
            }
        } catch (rl.d e11) {
            Log.e(f18091u, "Transformation job error", e11);
            e11.a(this.f18099s);
            d(e11);
        }
    }
}
