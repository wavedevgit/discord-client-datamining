package com.google.android.exoplayer2.source.dash;

import android.os.Handler;
import android.os.Message;
import com.google.android.exoplayer2.Format;
import com.google.android.exoplayer2.metadata.Metadata;
import java.util.Iterator;
import java.util.Map;
import java.util.TreeMap;
import mc.x;
import me.j;
import oe.h0;
import oe.w0;
import rd.l0;
import td.f;
import uc.b0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class e implements Handler.Callback {

    /* renamed from: d  reason: collision with root package name */
    private final me.b f12940d;

    /* renamed from: e  reason: collision with root package name */
    private final b f12941e;

    /* renamed from: q  reason: collision with root package name */
    private vd.c f12945q;

    /* renamed from: r  reason: collision with root package name */
    private long f12946r;

    /* renamed from: s  reason: collision with root package name */
    private boolean f12947s;

    /* renamed from: t  reason: collision with root package name */
    private boolean f12948t;

    /* renamed from: u  reason: collision with root package name */
    private boolean f12949u;

    /* renamed from: p  reason: collision with root package name */
    private final TreeMap f12944p = new TreeMap();

    /* renamed from: o  reason: collision with root package name */
    private final Handler f12943o = w0.x(this);

    /* renamed from: i  reason: collision with root package name */
    private final jd.b f12942i = new jd.b();

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        public final long f12950a;

        /* renamed from: b  reason: collision with root package name */
        public final long f12951b;

        public a(long j10, long j11) {
            this.f12950a = j10;
            this.f12951b = j11;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public interface b {
        void a(long j10);

        void b();
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public final class c implements b0 {

        /* renamed from: a  reason: collision with root package name */
        private final l0 f12952a;

        /* renamed from: b  reason: collision with root package name */
        private final x f12953b = new x();

        /* renamed from: c  reason: collision with root package name */
        private final hd.c f12954c = new hd.c();

        /* renamed from: d  reason: collision with root package name */
        private long f12955d = -9223372036854775807L;

        c(me.b bVar) {
            this.f12952a = l0.l(bVar);
        }

        private hd.c g() {
            this.f12954c.h();
            if (this.f12952a.R(this.f12953b, this.f12954c, 0, false) == -4) {
                this.f12954c.v();
                return this.f12954c;
            }
            return null;
        }

        private void k(long j10, long j11) {
            e.this.f12943o.sendMessage(e.this.f12943o.obtainMessage(1, new a(j10, j11)));
        }

        private void l() {
            while (this.f12952a.K(false)) {
                hd.c g10 = g();
                if (g10 != null) {
                    long j10 = g10.f47777p;
                    Metadata a10 = e.this.f12942i.a(g10);
                    if (a10 != null) {
                        jd.a aVar = (jd.a) a10.d(0);
                        if (e.h(aVar.f30102d, aVar.f30103e)) {
                            m(j10, aVar);
                        }
                    }
                }
            }
            this.f12952a.s();
        }

        private void m(long j10, jd.a aVar) {
            long f10 = e.f(aVar);
            if (f10 == -9223372036854775807L) {
                return;
            }
            k(j10, f10);
        }

        @Override // uc.b0
        public void a(long j10, int i10, int i11, int i12, b0.a aVar) {
            this.f12952a.a(j10, i10, i11, i12, aVar);
            l();
        }

        @Override // uc.b0
        public int b(j jVar, int i10, boolean z10, int i11) {
            return this.f12952a.f(jVar, i10, z10);
        }

        @Override // uc.b0
        public void c(Format format) {
            this.f12952a.c(format);
        }

        @Override // uc.b0
        public void d(h0 h0Var, int i10, int i11) {
            this.f12952a.e(h0Var, i10);
        }

        public boolean h(long j10) {
            return e.this.j(j10);
        }

        public void i(f fVar) {
            long j10 = this.f12955d;
            if (j10 == -9223372036854775807L || fVar.f50781h > j10) {
                this.f12955d = fVar.f50781h;
            }
            e.this.m(fVar);
        }

        public boolean j(f fVar) {
            boolean z10;
            long j10 = this.f12955d;
            if (j10 != -9223372036854775807L && j10 < fVar.f50780g) {
                z10 = true;
            } else {
                z10 = false;
            }
            return e.this.n(z10);
        }

        public void n() {
            this.f12952a.S();
        }
    }

    public e(vd.c cVar, b bVar, me.b bVar2) {
        this.f12945q = cVar;
        this.f12941e = bVar;
        this.f12940d = bVar2;
    }

    private Map.Entry e(long j10) {
        return this.f12944p.ceilingEntry(Long.valueOf(j10));
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static long f(jd.a aVar) {
        try {
            return w0.R0(w0.E(aVar.f30106p));
        } catch (mc.l0 unused) {
            return -9223372036854775807L;
        }
    }

    private void g(long j10, long j11) {
        Long l10 = (Long) this.f12944p.get(Long.valueOf(j11));
        if (l10 == null) {
            this.f12944p.put(Long.valueOf(j11), Long.valueOf(j10));
        } else if (l10.longValue() > j10) {
            this.f12944p.put(Long.valueOf(j11), Long.valueOf(j10));
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static boolean h(String str, String str2) {
        if ("urn:mpeg:dash:event:2012".equals(str)) {
            if ("1".equals(str2) || "2".equals(str2) || "3".equals(str2)) {
                return true;
            }
            return false;
        }
        return false;
    }

    private void i() {
        if (!this.f12947s) {
            return;
        }
        this.f12948t = true;
        this.f12947s = false;
        this.f12941e.b();
    }

    private void l() {
        this.f12941e.a(this.f12946r);
    }

    private void p() {
        Iterator it = this.f12944p.entrySet().iterator();
        while (it.hasNext()) {
            if (((Long) ((Map.Entry) it.next()).getKey()).longValue() < this.f12945q.f52232h) {
                it.remove();
            }
        }
    }

    @Override // android.os.Handler.Callback
    public boolean handleMessage(Message message) {
        if (this.f12949u) {
            return true;
        }
        if (message.what != 1) {
            return false;
        }
        a aVar = (a) message.obj;
        g(aVar.f12950a, aVar.f12951b);
        return true;
    }

    boolean j(long j10) {
        vd.c cVar = this.f12945q;
        boolean z10 = false;
        if (!cVar.f52228d) {
            return false;
        }
        if (this.f12948t) {
            return true;
        }
        Map.Entry e10 = e(cVar.f52232h);
        if (e10 != null && ((Long) e10.getValue()).longValue() < j10) {
            this.f12946r = ((Long) e10.getKey()).longValue();
            l();
            z10 = true;
        }
        if (z10) {
            i();
        }
        return z10;
    }

    public c k() {
        return new c(this.f12940d);
    }

    void m(f fVar) {
        this.f12947s = true;
    }

    boolean n(boolean z10) {
        if (!this.f12945q.f52228d) {
            return false;
        }
        if (this.f12948t) {
            return true;
        }
        if (!z10) {
            return false;
        }
        i();
        return true;
    }

    public void o() {
        this.f12949u = true;
        this.f12943o.removeCallbacksAndMessages(null);
    }

    public void q(vd.c cVar) {
        this.f12948t = false;
        this.f12946r = -9223372036854775807L;
        this.f12945q = cVar;
        p();
    }
}
