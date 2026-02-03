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
    private static final String f17859u = "c";

    /* renamed from: d  reason: collision with root package name */
    List f17860d;

    /* renamed from: i  reason: collision with root package name */
    int f17862i;

    /* renamed from: r  reason: collision with root package name */
    private final List f17866r;

    /* renamed from: s  reason: collision with root package name */
    private final String f17867s;

    /* renamed from: t  reason: collision with root package name */
    private final a f17868t;

    /* renamed from: e  reason: collision with root package name */
    float f17861e = 0.0f;

    /* renamed from: o  reason: collision with root package name */
    ql.d f17863o = new ql.d();

    /* renamed from: p  reason: collision with root package name */
    rl.d f17864p = new rl.d();

    /* renamed from: q  reason: collision with root package name */
    hl.b f17865q = new hl.b();

    /* JADX INFO: Access modifiers changed from: package-private */
    public c(String str, List list, int i10, a aVar) {
        this.f17867s = str;
        this.f17866r = list;
        this.f17862i = i10;
        this.f17868t = aVar;
    }

    private void h() {
        for (b bVar : this.f17866r) {
            bVar.c().seekTo(bVar.c().getSelection().b(), 0);
        }
    }

    private void k() {
        if (this.f17860d != null) {
            for (int i10 = 0; i10 < this.f17860d.size(); i10++) {
                this.f17865q.d(i10, ((ql.c) this.f17860d.get(i10)).f());
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
                Log.e(f17859u, "cancel: ", e10);
            }
        } finally {
            this.f17868t.b(this.f17867s, this.f17865q.b());
        }
    }

    void b() {
        int size = this.f17866r.size();
        this.f17860d = new ArrayList(size);
        if (size >= 1) {
            for (int i10 = 0; i10 < size; i10++) {
                b bVar = (b) this.f17866r.get(i10);
                ql.c a10 = this.f17863o.a(bVar.f(), bVar.h(), bVar.c(), bVar.a(), bVar.e(), bVar.b(), bVar.d(), bVar.g());
                this.f17860d.add(a10);
                this.f17865q.e(i10, a10.c(), a10.d());
            }
            return;
        }
        throw new e(e.a.NO_TRACKS_FOUND);
    }

    void c() {
        List<b> list = this.f17866r;
        if (list != null) {
            for (b bVar : list) {
                try {
                    String a10 = bVar.d().a();
                    if (!TextUtils.isEmpty(a10)) {
                        new File(a10).delete();
                    }
                } catch (Exception e10) {
                    Log.e(f17859u, "deleteOutputFiles: ", e10);
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
                Log.e(f17859u, "error: ", e10);
            }
        } finally {
            this.f17868t.d(this.f17867s, th2, this.f17865q.b());
        }
    }

    void e() {
        for (int i10 = 0; i10 < this.f17866r.size(); i10++) {
            b bVar = (b) this.f17866r.get(i10);
            this.f17865q.a(bVar.c().getTrackFormat(bVar.f()));
            this.f17865q.d(i10, bVar.g());
        }
    }

    boolean f() {
        boolean z10;
        boolean z11 = true;
        for (int i10 = 0; i10 < this.f17860d.size(); i10++) {
            long currentTimeMillis = System.currentTimeMillis();
            if (((ql.c) this.f17860d.get(i10)).g() == 4) {
                z10 = true;
            } else {
                z10 = false;
            }
            z11 &= z10;
            this.f17865q.c(i10, System.currentTimeMillis() - currentTimeMillis);
        }
        float f10 = 0.0f;
        for (ql.c cVar : this.f17860d) {
            f10 += cVar.e();
        }
        float size = f10 / this.f17860d.size();
        int i11 = this.f17862i;
        if ((i11 == 0 && size != this.f17861e) || (i11 != 0 && size >= this.f17861e + (1.0f / i11))) {
            this.f17868t.e(this.f17867s, size);
            this.f17861e = size;
        }
        return z11;
    }

    void g() {
        if (this.f17860d != null) {
            for (int i10 = 0; i10 < this.f17860d.size(); i10++) {
                try {
                    ((ql.c) this.f17860d.get(i10)).i();
                } catch (Exception e10) {
                    Log.e(f17859u, "release: Exception when stopping track transcoder: ", e10);
                }
            }
        }
        HashSet hashSet = new HashSet();
        HashSet hashSet2 = new HashSet();
        for (b bVar : this.f17866r) {
            hashSet.add(bVar.c());
            hashSet2.add(bVar.d());
        }
        Iterator it = hashSet.iterator();
        while (it.hasNext()) {
            try {
                ((ol.e) it.next()).release();
            } catch (Exception e11) {
                Log.e(f17859u, "release: Exception when releasing media source: ", e11);
            }
        }
        Iterator it2 = hashSet2.iterator();
        while (it2.hasNext()) {
            ((f) it2.next()).release();
        }
    }

    void i() {
        for (ql.c cVar : this.f17860d) {
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
        this.f17868t.f(this.f17867s);
        this.f17861e = 0.0f;
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
            this.f17868t.c(this.f17867s, this.f17865q.b());
        }
    }

    void l() {
        long e10 = g.e(this.f17866r);
        long j10 = ((float) e10) * 1.1f;
        long a10 = this.f17864p.a();
        if (a10 != -1 && a10 < j10) {
            throw new jl.a(e10, a10);
        }
    }

    @Override // java.lang.Runnable
    public void run() {
        try {
            j();
        } catch (RuntimeException e10) {
            Log.e(f17859u, "Transformation job error", e10);
            if (e10.getCause() instanceof InterruptedException) {
                a();
            } else {
                d(e10);
            }
        } catch (jl.d e11) {
            Log.e(f17859u, "Transformation job error", e11);
            e11.a(this.f17867s);
            d(e11);
        }
    }
}
