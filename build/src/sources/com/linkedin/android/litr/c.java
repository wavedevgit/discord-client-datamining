package com.linkedin.android.litr;

import android.text.TextUtils;
import android.util.Log;
import java.io.File;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.Iterator;
import java.util.List;
import ml.e;
import rl.f;
import ul.g;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
class c implements Runnable {

    /* renamed from: u  reason: collision with root package name */
    private static final String f17221u = "c";

    /* renamed from: d  reason: collision with root package name */
    List f17222d;

    /* renamed from: i  reason: collision with root package name */
    int f17224i;

    /* renamed from: r  reason: collision with root package name */
    private final List f17228r;

    /* renamed from: s  reason: collision with root package name */
    private final String f17229s;

    /* renamed from: t  reason: collision with root package name */
    private final a f17230t;

    /* renamed from: e  reason: collision with root package name */
    float f17223e = 0.0f;

    /* renamed from: o  reason: collision with root package name */
    tl.d f17225o = new tl.d();

    /* renamed from: p  reason: collision with root package name */
    ul.d f17226p = new ul.d();

    /* renamed from: q  reason: collision with root package name */
    kl.b f17227q = new kl.b();

    /* JADX INFO: Access modifiers changed from: package-private */
    public c(String str, List list, int i10, a aVar) {
        this.f17229s = str;
        this.f17228r = list;
        this.f17224i = i10;
        this.f17230t = aVar;
    }

    private void h() {
        for (b bVar : this.f17228r) {
            bVar.c().seekTo(bVar.c().getSelection().b(), 0);
        }
    }

    private void k() {
        if (this.f17222d != null) {
            for (int i10 = 0; i10 < this.f17222d.size(); i10++) {
                this.f17227q.d(i10, ((tl.c) this.f17222d.get(i10)).f());
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
                Log.e(f17221u, "cancel: ", e10);
            }
        } finally {
            this.f17230t.b(this.f17229s, this.f17227q.b());
        }
    }

    void b() {
        int size = this.f17228r.size();
        this.f17222d = new ArrayList(size);
        if (size >= 1) {
            for (int i10 = 0; i10 < size; i10++) {
                b bVar = (b) this.f17228r.get(i10);
                tl.c a10 = this.f17225o.a(bVar.f(), bVar.h(), bVar.c(), bVar.a(), bVar.e(), bVar.b(), bVar.d(), bVar.g());
                this.f17222d.add(a10);
                this.f17227q.e(i10, a10.c(), a10.d());
            }
            return;
        }
        throw new e(e.a.NO_TRACKS_FOUND);
    }

    void c() {
        List<b> list = this.f17228r;
        if (list != null) {
            for (b bVar : list) {
                try {
                    String a10 = bVar.d().a();
                    if (!TextUtils.isEmpty(a10)) {
                        new File(a10).delete();
                    }
                } catch (Exception e10) {
                    Log.e(f17221u, "deleteOutputFiles: ", e10);
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
                Log.e(f17221u, "error: ", e10);
            }
        } finally {
            this.f17230t.d(this.f17229s, th2, this.f17227q.b());
        }
    }

    void e() {
        for (int i10 = 0; i10 < this.f17228r.size(); i10++) {
            b bVar = (b) this.f17228r.get(i10);
            this.f17227q.a(bVar.c().getTrackFormat(bVar.f()));
            this.f17227q.d(i10, bVar.g());
        }
    }

    boolean f() {
        boolean z10;
        boolean z11 = true;
        for (int i10 = 0; i10 < this.f17222d.size(); i10++) {
            long currentTimeMillis = System.currentTimeMillis();
            if (((tl.c) this.f17222d.get(i10)).g() == 4) {
                z10 = true;
            } else {
                z10 = false;
            }
            z11 &= z10;
            this.f17227q.c(i10, System.currentTimeMillis() - currentTimeMillis);
        }
        float f10 = 0.0f;
        for (tl.c cVar : this.f17222d) {
            f10 += cVar.e();
        }
        float size = f10 / this.f17222d.size();
        int i11 = this.f17224i;
        if ((i11 == 0 && size != this.f17223e) || (i11 != 0 && size >= this.f17223e + (1.0f / i11))) {
            this.f17230t.e(this.f17229s, size);
            this.f17223e = size;
        }
        return z11;
    }

    void g() {
        if (this.f17222d != null) {
            for (int i10 = 0; i10 < this.f17222d.size(); i10++) {
                try {
                    ((tl.c) this.f17222d.get(i10)).i();
                } catch (Exception e10) {
                    Log.e(f17221u, "release: Exception when stopping track transcoder: ", e10);
                }
            }
        }
        HashSet hashSet = new HashSet();
        HashSet hashSet2 = new HashSet();
        for (b bVar : this.f17228r) {
            hashSet.add(bVar.c());
            hashSet2.add(bVar.d());
        }
        Iterator it = hashSet.iterator();
        while (it.hasNext()) {
            try {
                ((rl.e) it.next()).release();
            } catch (Exception e11) {
                Log.e(f17221u, "release: Exception when releasing media source: ", e11);
            }
        }
        Iterator it2 = hashSet2.iterator();
        while (it2.hasNext()) {
            ((f) it2.next()).release();
        }
    }

    void i() {
        for (tl.c cVar : this.f17222d) {
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
        this.f17230t.f(this.f17229s);
        this.f17223e = 0.0f;
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
            this.f17230t.c(this.f17229s, this.f17227q.b());
        }
    }

    void l() {
        long e10 = g.e(this.f17228r);
        long j10 = ((float) e10) * 1.1f;
        long a10 = this.f17226p.a();
        if (a10 != -1 && a10 < j10) {
            throw new ml.a(e10, a10);
        }
    }

    @Override // java.lang.Runnable
    public void run() {
        try {
            j();
        } catch (RuntimeException e10) {
            Log.e(f17221u, "Transformation job error", e10);
            if (e10.getCause() instanceof InterruptedException) {
                a();
            } else {
                d(e10);
            }
        } catch (ml.d e11) {
            Log.e(f17221u, "Transformation job error", e11);
            e11.a(this.f17229s);
            d(e11);
        }
    }
}
