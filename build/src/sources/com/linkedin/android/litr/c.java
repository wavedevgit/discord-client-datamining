package com.linkedin.android.litr;

import android.text.TextUtils;
import android.util.Log;
import java.io.File;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.Iterator;
import java.util.List;
import pl.e;
import ul.f;
import xl.g;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
class c implements Runnable {

    /* renamed from: u  reason: collision with root package name */
    private static final String f17341u = "c";

    /* renamed from: d  reason: collision with root package name */
    List f17342d;

    /* renamed from: i  reason: collision with root package name */
    int f17344i;

    /* renamed from: r  reason: collision with root package name */
    private final List f17348r;

    /* renamed from: s  reason: collision with root package name */
    private final String f17349s;

    /* renamed from: t  reason: collision with root package name */
    private final a f17350t;

    /* renamed from: e  reason: collision with root package name */
    float f17343e = 0.0f;

    /* renamed from: o  reason: collision with root package name */
    wl.d f17345o = new wl.d();

    /* renamed from: p  reason: collision with root package name */
    xl.d f17346p = new xl.d();

    /* renamed from: q  reason: collision with root package name */
    nl.b f17347q = new nl.b();

    /* JADX INFO: Access modifiers changed from: package-private */
    public c(String str, List list, int i10, a aVar) {
        this.f17349s = str;
        this.f17348r = list;
        this.f17344i = i10;
        this.f17350t = aVar;
    }

    private void h() {
        for (b bVar : this.f17348r) {
            bVar.c().seekTo(bVar.c().getSelection().b(), 0);
        }
    }

    private void k() {
        if (this.f17342d != null) {
            for (int i10 = 0; i10 < this.f17342d.size(); i10++) {
                this.f17347q.d(i10, ((wl.c) this.f17342d.get(i10)).f());
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
                Log.e(f17341u, "cancel: ", e10);
            }
        } finally {
            this.f17350t.b(this.f17349s, this.f17347q.b());
        }
    }

    void b() {
        int size = this.f17348r.size();
        this.f17342d = new ArrayList(size);
        if (size >= 1) {
            for (int i10 = 0; i10 < size; i10++) {
                b bVar = (b) this.f17348r.get(i10);
                wl.c a10 = this.f17345o.a(bVar.f(), bVar.h(), bVar.c(), bVar.a(), bVar.e(), bVar.b(), bVar.d(), bVar.g());
                this.f17342d.add(a10);
                this.f17347q.e(i10, a10.c(), a10.d());
            }
            return;
        }
        throw new e(e.a.NO_TRACKS_FOUND);
    }

    void c() {
        List<b> list = this.f17348r;
        if (list != null) {
            for (b bVar : list) {
                try {
                    String a10 = bVar.d().a();
                    if (!TextUtils.isEmpty(a10)) {
                        new File(a10).delete();
                    }
                } catch (Exception e10) {
                    Log.e(f17341u, "deleteOutputFiles: ", e10);
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
                Log.e(f17341u, "error: ", e10);
            }
        } finally {
            this.f17350t.d(this.f17349s, th2, this.f17347q.b());
        }
    }

    void e() {
        for (int i10 = 0; i10 < this.f17348r.size(); i10++) {
            b bVar = (b) this.f17348r.get(i10);
            this.f17347q.a(bVar.c().getTrackFormat(bVar.f()));
            this.f17347q.d(i10, bVar.g());
        }
    }

    boolean f() {
        boolean z10;
        boolean z11 = true;
        for (int i10 = 0; i10 < this.f17342d.size(); i10++) {
            long currentTimeMillis = System.currentTimeMillis();
            if (((wl.c) this.f17342d.get(i10)).g() == 4) {
                z10 = true;
            } else {
                z10 = false;
            }
            z11 &= z10;
            this.f17347q.c(i10, System.currentTimeMillis() - currentTimeMillis);
        }
        float f10 = 0.0f;
        for (wl.c cVar : this.f17342d) {
            f10 += cVar.e();
        }
        float size = f10 / this.f17342d.size();
        int i11 = this.f17344i;
        if ((i11 == 0 && size != this.f17343e) || (i11 != 0 && size >= this.f17343e + (1.0f / i11))) {
            this.f17350t.e(this.f17349s, size);
            this.f17343e = size;
        }
        return z11;
    }

    void g() {
        if (this.f17342d != null) {
            for (int i10 = 0; i10 < this.f17342d.size(); i10++) {
                try {
                    ((wl.c) this.f17342d.get(i10)).i();
                } catch (Exception e10) {
                    Log.e(f17341u, "release: Exception when stopping track transcoder: ", e10);
                }
            }
        }
        HashSet hashSet = new HashSet();
        HashSet hashSet2 = new HashSet();
        for (b bVar : this.f17348r) {
            hashSet.add(bVar.c());
            hashSet2.add(bVar.d());
        }
        Iterator it = hashSet.iterator();
        while (it.hasNext()) {
            try {
                ((ul.e) it.next()).release();
            } catch (Exception e11) {
                Log.e(f17341u, "release: Exception when releasing media source: ", e11);
            }
        }
        Iterator it2 = hashSet2.iterator();
        while (it2.hasNext()) {
            ((f) it2.next()).release();
        }
    }

    void i() {
        for (wl.c cVar : this.f17342d) {
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
        this.f17350t.f(this.f17349s);
        this.f17343e = 0.0f;
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
            this.f17350t.c(this.f17349s, this.f17347q.b());
        }
    }

    void l() {
        long e10 = g.e(this.f17348r);
        long j10 = ((float) e10) * 1.1f;
        long a10 = this.f17346p.a();
        if (a10 != -1 && a10 < j10) {
            throw new pl.a(e10, a10);
        }
    }

    @Override // java.lang.Runnable
    public void run() {
        try {
            j();
        } catch (RuntimeException e10) {
            Log.e(f17341u, "Transformation job error", e10);
            if (e10.getCause() instanceof InterruptedException) {
                a();
            } else {
                d(e10);
            }
        } catch (pl.d e11) {
            Log.e(f17341u, "Transformation job error", e11);
            e11.a(this.f17349s);
            d(e11);
        }
    }
}
