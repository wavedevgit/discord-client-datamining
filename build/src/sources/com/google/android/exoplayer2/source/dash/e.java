package com.google.android.exoplayer2.source.dash;

import android.os.Handler;
import android.os.Message;
import com.google.android.exoplayer2.Format;
import com.google.android.exoplayer2.metadata.Metadata;
import java.util.Iterator;
import java.util.Map;
import java.util.TreeMap;
import lc.x;
import le.j;
import ne.h0;
import ne.w0;
import qd.l0;
import sd.f;
import tc.b0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class e implements Handler.Callback {

    /* renamed from: d  reason: collision with root package name */
    private final le.b f13486d;

    /* renamed from: e  reason: collision with root package name */
    private final b f13487e;

    /* renamed from: q  reason: collision with root package name */
    private ud.c f13491q;

    /* renamed from: r  reason: collision with root package name */
    private long f13492r;

    /* renamed from: s  reason: collision with root package name */
    private boolean f13493s;

    /* renamed from: t  reason: collision with root package name */
    private boolean f13494t;

    /* renamed from: u  reason: collision with root package name */
    private boolean f13495u;

    /* renamed from: p  reason: collision with root package name */
    private final TreeMap f13490p = new TreeMap();

    /* renamed from: o  reason: collision with root package name */
    private final Handler f13489o = w0.x(this);

    /* renamed from: i  reason: collision with root package name */
    private final id.b f13488i = new id.b();

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        public final long f13496a;

        /* renamed from: b  reason: collision with root package name */
        public final long f13497b;

        public a(long j10, long j11) {
            this.f13496a = j10;
            this.f13497b = j11;
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
        private final l0 f13498a;

        /* renamed from: b  reason: collision with root package name */
        private final x f13499b = new x();

        /* renamed from: c  reason: collision with root package name */
        private final gd.c f13500c = new gd.c();

        /* renamed from: d  reason: collision with root package name */
        private long f13501d = -9223372036854775807L;

        c(le.b bVar) {
            this.f13498a = l0.l(bVar);
        }

        private gd.c g() {
            this.f13500c.h();
            if (this.f13498a.R(this.f13499b, this.f13500c, 0, false) == -4) {
                this.f13500c.v();
                return this.f13500c;
            }
            return null;
        }

        private void k(long j10, long j11) {
            e.this.f13489o.sendMessage(e.this.f13489o.obtainMessage(1, new a(j10, j11)));
        }

        private void l() {
            while (this.f13498a.K(false)) {
                gd.c g10 = g();
                if (g10 != null) {
                    long j10 = g10.f47349p;
                    Metadata a10 = e.this.f13488i.a(g10);
                    if (a10 != null) {
                        id.a aVar = (id.a) a10.d(0);
                        if (e.h(aVar.f28100d, aVar.f28101e)) {
                            m(j10, aVar);
                        }
                    }
                }
            }
            this.f13498a.s();
        }

        private void m(long j10, id.a aVar) {
            long f10 = e.f(aVar);
            if (f10 == -9223372036854775807L) {
                return;
            }
            k(j10, f10);
        }

        @Override // tc.b0
        public void b(Format format) {
            this.f13498a.b(format);
        }

        @Override // tc.b0
        public int c(j jVar, int i10, boolean z10, int i11) {
            return this.f13498a.a(jVar, i10, z10);
        }

        @Override // tc.b0
        public void d(long j10, int i10, int i11, int i12, b0.a aVar) {
            this.f13498a.d(j10, i10, i11, i12, aVar);
            l();
        }

        @Override // tc.b0
        public void e(h0 h0Var, int i10, int i11) {
            this.f13498a.f(h0Var, i10);
        }

        public boolean h(long j10) {
            return e.this.j(j10);
        }

        public void i(f fVar) {
            long j10 = this.f13501d;
            if (j10 == -9223372036854775807L || fVar.f49015h > j10) {
                this.f13501d = fVar.f49015h;
            }
            e.this.m(fVar);
        }

        public boolean j(f fVar) {
            boolean z10;
            long j10 = this.f13501d;
            if (j10 != -9223372036854775807L && j10 < fVar.f49014g) {
                z10 = true;
            } else {
                z10 = false;
            }
            return e.this.n(z10);
        }

        public void n() {
            this.f13498a.S();
        }
    }

    public e(ud.c cVar, b bVar, le.b bVar2) {
        this.f13491q = cVar;
        this.f13487e = bVar;
        this.f13486d = bVar2;
    }

    private Map.Entry e(long j10) {
        return this.f13490p.ceilingEntry(Long.valueOf(j10));
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static long f(id.a aVar) {
        try {
            return w0.R0(w0.E(aVar.f28104p));
        } catch (lc.l0 unused) {
            return -9223372036854775807L;
        }
    }

    private void g(long j10, long j11) {
        Long l10 = (Long) this.f13490p.get(Long.valueOf(j11));
        if (l10 == null) {
            this.f13490p.put(Long.valueOf(j11), Long.valueOf(j10));
        } else if (l10.longValue() > j10) {
            this.f13490p.put(Long.valueOf(j11), Long.valueOf(j10));
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
        if (!this.f13493s) {
            return;
        }
        this.f13494t = true;
        this.f13493s = false;
        this.f13487e.b();
    }

    private void l() {
        this.f13487e.a(this.f13492r);
    }

    private void p() {
        Iterator it = this.f13490p.entrySet().iterator();
        while (it.hasNext()) {
            if (((Long) ((Map.Entry) it.next()).getKey()).longValue() < this.f13491q.f50227h) {
                it.remove();
            }
        }
    }

    @Override // android.os.Handler.Callback
    public boolean handleMessage(Message message) {
        if (this.f13495u) {
            return true;
        }
        if (message.what != 1) {
            return false;
        }
        a aVar = (a) message.obj;
        g(aVar.f13496a, aVar.f13497b);
        return true;
    }

    boolean j(long j10) {
        ud.c cVar = this.f13491q;
        boolean z10 = false;
        if (!cVar.f50223d) {
            return false;
        }
        if (this.f13494t) {
            return true;
        }
        Map.Entry e10 = e(cVar.f50227h);
        if (e10 != null && ((Long) e10.getValue()).longValue() < j10) {
            this.f13492r = ((Long) e10.getKey()).longValue();
            l();
            z10 = true;
        }
        if (z10) {
            i();
        }
        return z10;
    }

    public c k() {
        return new c(this.f13486d);
    }

    void m(f fVar) {
        this.f13493s = true;
    }

    boolean n(boolean z10) {
        if (!this.f13491q.f50223d) {
            return false;
        }
        if (this.f13494t) {
            return true;
        }
        if (!z10) {
            return false;
        }
        i();
        return true;
    }

    public void o() {
        this.f13495u = true;
        this.f13489o.removeCallbacksAndMessages(null);
    }

    public void q(ud.c cVar) {
        this.f13494t = false;
        this.f13492r = -9223372036854775807L;
        this.f13491q = cVar;
        p();
    }
}
