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
    private final me.b f13517d;

    /* renamed from: e  reason: collision with root package name */
    private final b f13518e;

    /* renamed from: q  reason: collision with root package name */
    private vd.c f13522q;

    /* renamed from: r  reason: collision with root package name */
    private long f13523r;

    /* renamed from: s  reason: collision with root package name */
    private boolean f13524s;

    /* renamed from: t  reason: collision with root package name */
    private boolean f13525t;

    /* renamed from: u  reason: collision with root package name */
    private boolean f13526u;

    /* renamed from: p  reason: collision with root package name */
    private final TreeMap f13521p = new TreeMap();

    /* renamed from: o  reason: collision with root package name */
    private final Handler f13520o = w0.x(this);

    /* renamed from: i  reason: collision with root package name */
    private final jd.b f13519i = new jd.b();

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        public final long f13527a;

        /* renamed from: b  reason: collision with root package name */
        public final long f13528b;

        public a(long j10, long j11) {
            this.f13527a = j10;
            this.f13528b = j11;
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
        private final l0 f13529a;

        /* renamed from: b  reason: collision with root package name */
        private final x f13530b = new x();

        /* renamed from: c  reason: collision with root package name */
        private final hd.c f13531c = new hd.c();

        /* renamed from: d  reason: collision with root package name */
        private long f13532d = -9223372036854775807L;

        c(me.b bVar) {
            this.f13529a = l0.l(bVar);
        }

        private hd.c g() {
            this.f13531c.h();
            if (this.f13529a.R(this.f13530b, this.f13531c, 0, false) == -4) {
                this.f13531c.v();
                return this.f13531c;
            }
            return null;
        }

        private void k(long j10, long j11) {
            e.this.f13520o.sendMessage(e.this.f13520o.obtainMessage(1, new a(j10, j11)));
        }

        private void l() {
            while (this.f13529a.K(false)) {
                hd.c g10 = g();
                if (g10 != null) {
                    long j10 = g10.f46231p;
                    Metadata a10 = e.this.f13519i.a(g10);
                    if (a10 != null) {
                        jd.a aVar = (jd.a) a10.d(0);
                        if (e.h(aVar.f30902d, aVar.f30903e)) {
                            m(j10, aVar);
                        }
                    }
                }
            }
            this.f13529a.s();
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
            this.f13529a.a(j10, i10, i11, i12, aVar);
            l();
        }

        @Override // uc.b0
        public int b(j jVar, int i10, boolean z10, int i11) {
            return this.f13529a.f(jVar, i10, z10);
        }

        @Override // uc.b0
        public void c(Format format) {
            this.f13529a.c(format);
        }

        @Override // uc.b0
        public void d(h0 h0Var, int i10, int i11) {
            this.f13529a.e(h0Var, i10);
        }

        public boolean h(long j10) {
            return e.this.j(j10);
        }

        public void i(f fVar) {
            long j10 = this.f13532d;
            if (j10 == -9223372036854775807L || fVar.f48713h > j10) {
                this.f13532d = fVar.f48713h;
            }
            e.this.m(fVar);
        }

        public boolean j(f fVar) {
            boolean z10;
            long j10 = this.f13532d;
            if (j10 != -9223372036854775807L && j10 < fVar.f48712g) {
                z10 = true;
            } else {
                z10 = false;
            }
            return e.this.n(z10);
        }

        public void n() {
            this.f13529a.S();
        }
    }

    public e(vd.c cVar, b bVar, me.b bVar2) {
        this.f13522q = cVar;
        this.f13518e = bVar;
        this.f13517d = bVar2;
    }

    private Map.Entry e(long j10) {
        return this.f13521p.ceilingEntry(Long.valueOf(j10));
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static long f(jd.a aVar) {
        try {
            return w0.R0(w0.E(aVar.f30906p));
        } catch (mc.l0 unused) {
            return -9223372036854775807L;
        }
    }

    private void g(long j10, long j11) {
        Long l10 = (Long) this.f13521p.get(Long.valueOf(j11));
        if (l10 == null) {
            this.f13521p.put(Long.valueOf(j11), Long.valueOf(j10));
        } else if (l10.longValue() > j10) {
            this.f13521p.put(Long.valueOf(j11), Long.valueOf(j10));
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
        if (!this.f13524s) {
            return;
        }
        this.f13525t = true;
        this.f13524s = false;
        this.f13518e.b();
    }

    private void l() {
        this.f13518e.a(this.f13523r);
    }

    private void p() {
        Iterator it = this.f13521p.entrySet().iterator();
        while (it.hasNext()) {
            if (((Long) ((Map.Entry) it.next()).getKey()).longValue() < this.f13522q.f51474h) {
                it.remove();
            }
        }
    }

    @Override // android.os.Handler.Callback
    public boolean handleMessage(Message message) {
        if (this.f13526u) {
            return true;
        }
        if (message.what != 1) {
            return false;
        }
        a aVar = (a) message.obj;
        g(aVar.f13527a, aVar.f13528b);
        return true;
    }

    boolean j(long j10) {
        vd.c cVar = this.f13522q;
        boolean z10 = false;
        if (!cVar.f51470d) {
            return false;
        }
        if (this.f13525t) {
            return true;
        }
        Map.Entry e10 = e(cVar.f51474h);
        if (e10 != null && ((Long) e10.getValue()).longValue() < j10) {
            this.f13523r = ((Long) e10.getKey()).longValue();
            l();
            z10 = true;
        }
        if (z10) {
            i();
        }
        return z10;
    }

    public c k() {
        return new c(this.f13517d);
    }

    void m(f fVar) {
        this.f13524s = true;
    }

    boolean n(boolean z10) {
        if (!this.f13522q.f51470d) {
            return false;
        }
        if (this.f13525t) {
            return true;
        }
        if (!z10) {
            return false;
        }
        i();
        return true;
    }

    public void o() {
        this.f13526u = true;
        this.f13520o.removeCallbacksAndMessages(null);
    }

    public void q(vd.c cVar) {
        this.f13525t = false;
        this.f13523r = -9223372036854775807L;
        this.f13522q = cVar;
        p();
    }
}
