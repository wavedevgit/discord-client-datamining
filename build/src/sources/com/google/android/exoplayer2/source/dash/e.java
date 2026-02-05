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
    private final le.b f12839d;

    /* renamed from: e  reason: collision with root package name */
    private final b f12840e;

    /* renamed from: q  reason: collision with root package name */
    private ud.c f12844q;

    /* renamed from: r  reason: collision with root package name */
    private long f12845r;

    /* renamed from: s  reason: collision with root package name */
    private boolean f12846s;

    /* renamed from: t  reason: collision with root package name */
    private boolean f12847t;

    /* renamed from: u  reason: collision with root package name */
    private boolean f12848u;

    /* renamed from: p  reason: collision with root package name */
    private final TreeMap f12843p = new TreeMap();

    /* renamed from: o  reason: collision with root package name */
    private final Handler f12842o = w0.x(this);

    /* renamed from: i  reason: collision with root package name */
    private final id.b f12841i = new id.b();

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        public final long f12849a;

        /* renamed from: b  reason: collision with root package name */
        public final long f12850b;

        public a(long j10, long j11) {
            this.f12849a = j10;
            this.f12850b = j11;
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
        private final l0 f12851a;

        /* renamed from: b  reason: collision with root package name */
        private final x f12852b = new x();

        /* renamed from: c  reason: collision with root package name */
        private final gd.c f12853c = new gd.c();

        /* renamed from: d  reason: collision with root package name */
        private long f12854d = -9223372036854775807L;

        c(le.b bVar) {
            this.f12851a = l0.l(bVar);
        }

        private gd.c g() {
            this.f12853c.h();
            if (this.f12851a.R(this.f12852b, this.f12853c, 0, false) == -4) {
                this.f12853c.v();
                return this.f12853c;
            }
            return null;
        }

        private void k(long j10, long j11) {
            e.this.f12842o.sendMessage(e.this.f12842o.obtainMessage(1, new a(j10, j11)));
        }

        private void l() {
            while (this.f12851a.K(false)) {
                gd.c g10 = g();
                if (g10 != null) {
                    long j10 = g10.f47563p;
                    Metadata a10 = e.this.f12841i.a(g10);
                    if (a10 != null) {
                        id.a aVar = (id.a) a10.d(0);
                        if (e.h(aVar.f27312d, aVar.f27313e)) {
                            m(j10, aVar);
                        }
                    }
                }
            }
            this.f12851a.s();
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
            this.f12851a.b(format);
        }

        @Override // tc.b0
        public int c(j jVar, int i10, boolean z10, int i11) {
            return this.f12851a.a(jVar, i10, z10);
        }

        @Override // tc.b0
        public void d(long j10, int i10, int i11, int i12, b0.a aVar) {
            this.f12851a.d(j10, i10, i11, i12, aVar);
            l();
        }

        @Override // tc.b0
        public void e(h0 h0Var, int i10, int i11) {
            this.f12851a.f(h0Var, i10);
        }

        public boolean h(long j10) {
            return e.this.j(j10);
        }

        public void i(f fVar) {
            long j10 = this.f12854d;
            if (j10 == -9223372036854775807L || fVar.f49571h > j10) {
                this.f12854d = fVar.f49571h;
            }
            e.this.m(fVar);
        }

        public boolean j(f fVar) {
            boolean z10;
            long j10 = this.f12854d;
            if (j10 != -9223372036854775807L && j10 < fVar.f49570g) {
                z10 = true;
            } else {
                z10 = false;
            }
            return e.this.n(z10);
        }

        public void n() {
            this.f12851a.S();
        }
    }

    public e(ud.c cVar, b bVar, le.b bVar2) {
        this.f12844q = cVar;
        this.f12840e = bVar;
        this.f12839d = bVar2;
    }

    private Map.Entry e(long j10) {
        return this.f12843p.ceilingEntry(Long.valueOf(j10));
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static long f(id.a aVar) {
        try {
            return w0.R0(w0.E(aVar.f27316p));
        } catch (lc.l0 unused) {
            return -9223372036854775807L;
        }
    }

    private void g(long j10, long j11) {
        Long l10 = (Long) this.f12843p.get(Long.valueOf(j11));
        if (l10 == null) {
            this.f12843p.put(Long.valueOf(j11), Long.valueOf(j10));
        } else if (l10.longValue() > j10) {
            this.f12843p.put(Long.valueOf(j11), Long.valueOf(j10));
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
        if (!this.f12846s) {
            return;
        }
        this.f12847t = true;
        this.f12846s = false;
        this.f12840e.b();
    }

    private void l() {
        this.f12840e.a(this.f12845r);
    }

    private void p() {
        Iterator it = this.f12843p.entrySet().iterator();
        while (it.hasNext()) {
            if (((Long) ((Map.Entry) it.next()).getKey()).longValue() < this.f12844q.f51283h) {
                it.remove();
            }
        }
    }

    @Override // android.os.Handler.Callback
    public boolean handleMessage(Message message) {
        if (this.f12848u) {
            return true;
        }
        if (message.what != 1) {
            return false;
        }
        a aVar = (a) message.obj;
        g(aVar.f12849a, aVar.f12850b);
        return true;
    }

    boolean j(long j10) {
        ud.c cVar = this.f12844q;
        boolean z10 = false;
        if (!cVar.f51279d) {
            return false;
        }
        if (this.f12847t) {
            return true;
        }
        Map.Entry e10 = e(cVar.f51283h);
        if (e10 != null && ((Long) e10.getValue()).longValue() < j10) {
            this.f12845r = ((Long) e10.getKey()).longValue();
            l();
            z10 = true;
        }
        if (z10) {
            i();
        }
        return z10;
    }

    public c k() {
        return new c(this.f12839d);
    }

    void m(f fVar) {
        this.f12846s = true;
    }

    boolean n(boolean z10) {
        if (!this.f12844q.f51279d) {
            return false;
        }
        if (this.f12847t) {
            return true;
        }
        if (!z10) {
            return false;
        }
        i();
        return true;
    }

    public void o() {
        this.f12848u = true;
        this.f12842o.removeCallbacksAndMessages(null);
    }

    public void q(ud.c cVar) {
        this.f12847t = false;
        this.f12845r = -9223372036854775807L;
        this.f12844q = cVar;
        p();
    }
}
