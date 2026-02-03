package com.linkedin.android.litr;

import android.text.TextUtils;
import android.util.Log;
import java.io.File;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.Iterator;
import java.util.List;
import jl.e;
import ol.f;
import rl.g;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
class c implements Runnable {

    /* renamed from: u  reason: collision with root package name */
    private static final String f16827u = "c";

    /* renamed from: d  reason: collision with root package name */
    List f16828d;

    /* renamed from: i  reason: collision with root package name */
    int f16830i;

    /* renamed from: r  reason: collision with root package name */
    private final List f16834r;

    /* renamed from: s  reason: collision with root package name */
    private final String f16835s;

    /* renamed from: t  reason: collision with root package name */
    private final a f16836t;

    /* renamed from: e  reason: collision with root package name */
    float f16829e = 0.0f;

    /* renamed from: o  reason: collision with root package name */
    ql.d f16831o = new ql.d();

    /* renamed from: p  reason: collision with root package name */
    rl.d f16832p = new rl.d();

    /* renamed from: q  reason: collision with root package name */
    hl.b f16833q = new hl.b();

    /* JADX INFO: Access modifiers changed from: package-private */
    public c(String str, List list, int i10, a aVar) {
        this.f16835s = str;
        this.f16834r = list;
        this.f16830i = i10;
        this.f16836t = aVar;
    }

    private void h() {
        for (b bVar : this.f16834r) {
            bVar.c().seekTo(bVar.c().getSelection().b(), 0);
        }
    }

    private void k() {
        if (this.f16828d != null) {
            for (int i10 = 0; i10 < this.f16828d.size(); i10++) {
                this.f16833q.d(i10, ((ql.c) this.f16828d.get(i10)).f());
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
                Log.e(f16827u, "cancel: ", e10);
            }
        } finally {
            this.f16836t.b(this.f16835s, this.f16833q.b());
        }
    }

    void b() {
        int size = this.f16834r.size();
        this.f16828d = new ArrayList(size);
        if (size >= 1) {
            for (int i10 = 0; i10 < size; i10++) {
                b bVar = (b) this.f16834r.get(i10);
                ql.c a10 = this.f16831o.a(bVar.f(), bVar.h(), bVar.c(), bVar.a(), bVar.e(), bVar.b(), bVar.d(), bVar.g());
                this.f16828d.add(a10);
                this.f16833q.e(i10, a10.c(), a10.d());
            }
            return;
        }
        throw new e(e.a.NO_TRACKS_FOUND);
    }

    void c() {
        List<b> list = this.f16834r;
        if (list != null) {
            for (b bVar : list) {
                try {
                    String a10 = bVar.d().a();
                    if (!TextUtils.isEmpty(a10)) {
                        new File(a10).delete();
                    }
                } catch (Exception e10) {
                    Log.e(f16827u, "deleteOutputFiles: ", e10);
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
                Log.e(f16827u, "error: ", e10);
            }
        } finally {
            this.f16836t.d(this.f16835s, th2, this.f16833q.b());
        }
    }

    void e() {
        for (int i10 = 0; i10 < this.f16834r.size(); i10++) {
            b bVar = (b) this.f16834r.get(i10);
            this.f16833q.a(bVar.c().getTrackFormat(bVar.f()));
            this.f16833q.d(i10, bVar.g());
        }
    }

    boolean f() {
        boolean z10;
        boolean z11 = true;
        for (int i10 = 0; i10 < this.f16828d.size(); i10++) {
            long currentTimeMillis = System.currentTimeMillis();
            if (((ql.c) this.f16828d.get(i10)).g() == 4) {
                z10 = true;
            } else {
                z10 = false;
            }
            z11 &= z10;
            this.f16833q.c(i10, System.currentTimeMillis() - currentTimeMillis);
        }
        float f10 = 0.0f;
        for (ql.c cVar : this.f16828d) {
            f10 += cVar.e();
        }
        float size = f10 / this.f16828d.size();
        int i11 = this.f16830i;
        if ((i11 == 0 && size != this.f16829e) || (i11 != 0 && size >= this.f16829e + (1.0f / i11))) {
            this.f16836t.e(this.f16835s, size);
            this.f16829e = size;
        }
        return z11;
    }

    void g() {
        if (this.f16828d != null) {
            for (int i10 = 0; i10 < this.f16828d.size(); i10++) {
                try {
                    ((ql.c) this.f16828d.get(i10)).i();
                } catch (Exception e10) {
                    Log.e(f16827u, "release: Exception when stopping track transcoder: ", e10);
                }
            }
        }
        HashSet hashSet = new HashSet();
        HashSet hashSet2 = new HashSet();
        for (b bVar : this.f16834r) {
            hashSet.add(bVar.c());
            hashSet2.add(bVar.d());
        }
        Iterator it = hashSet.iterator();
        while (it.hasNext()) {
            try {
                ((ol.e) it.next()).release();
            } catch (Exception e11) {
                Log.e(f16827u, "release: Exception when releasing media source: ", e11);
            }
        }
        Iterator it2 = hashSet2.iterator();
        while (it2.hasNext()) {
            ((f) it2.next()).release();
        }
    }

    void i() {
        for (ql.c cVar : this.f16828d) {
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
        this.f16836t.f(this.f16835s);
        this.f16829e = 0.0f;
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
            this.f16836t.c(this.f16835s, this.f16833q.b());
        }
    }

    void l() {
        long e10 = g.e(this.f16834r);
        long j10 = ((float) e10) * 1.1f;
        long a10 = this.f16832p.a();
        if (a10 != -1 && a10 < j10) {
            throw new jl.a(e10, a10);
        }
    }

    @Override // java.lang.Runnable
    public void run() {
        try {
            j();
        } catch (RuntimeException e10) {
            Log.e(f16827u, "Transformation job error", e10);
            if (e10.getCause() instanceof InterruptedException) {
                a();
            } else {
                d(e10);
            }
        } catch (jl.d e11) {
            Log.e(f16827u, "Transformation job error", e11);
            e11.a(this.f16835s);
            d(e11);
        }
    }
}
