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
    private final le.b f13857d;

    /* renamed from: e  reason: collision with root package name */
    private final b f13858e;

    /* renamed from: q  reason: collision with root package name */
    private ud.c f13862q;

    /* renamed from: r  reason: collision with root package name */
    private long f13863r;

    /* renamed from: s  reason: collision with root package name */
    private boolean f13864s;

    /* renamed from: t  reason: collision with root package name */
    private boolean f13865t;

    /* renamed from: u  reason: collision with root package name */
    private boolean f13866u;

    /* renamed from: p  reason: collision with root package name */
    private final TreeMap f13861p = new TreeMap();

    /* renamed from: o  reason: collision with root package name */
    private final Handler f13860o = w0.x(this);

    /* renamed from: i  reason: collision with root package name */
    private final id.b f13859i = new id.b();

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        public final long f13867a;

        /* renamed from: b  reason: collision with root package name */
        public final long f13868b;

        public a(long j10, long j11) {
            this.f13867a = j10;
            this.f13868b = j11;
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
        private final l0 f13869a;

        /* renamed from: b  reason: collision with root package name */
        private final x f13870b = new x();

        /* renamed from: c  reason: collision with root package name */
        private final gd.c f13871c = new gd.c();

        /* renamed from: d  reason: collision with root package name */
        private long f13872d = -9223372036854775807L;

        c(le.b bVar) {
            this.f13869a = l0.l(bVar);
        }

        private gd.c g() {
            this.f13871c.h();
            if (this.f13869a.R(this.f13870b, this.f13871c, 0, false) == -4) {
                this.f13871c.v();
                return this.f13871c;
            }
            return null;
        }

        private void k(long j10, long j11) {
            e.this.f13860o.sendMessage(e.this.f13860o.obtainMessage(1, new a(j10, j11)));
        }

        private void l() {
            while (this.f13869a.K(false)) {
                gd.c g10 = g();
                if (g10 != null) {
                    long j10 = g10.f47094p;
                    Metadata a10 = e.this.f13859i.a(g10);
                    if (a10 != null) {
                        id.a aVar = (id.a) a10.d(0);
                        if (e.h(aVar.f28453d, aVar.f28454e)) {
                            m(j10, aVar);
                        }
                    }
                }
            }
            this.f13869a.s();
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
            this.f13869a.b(format);
        }

        @Override // tc.b0
        public int c(j jVar, int i10, boolean z10, int i11) {
            return this.f13869a.a(jVar, i10, z10);
        }

        @Override // tc.b0
        public void d(long j10, int i10, int i11, int i12, b0.a aVar) {
            this.f13869a.d(j10, i10, i11, i12, aVar);
            l();
        }

        @Override // tc.b0
        public void e(h0 h0Var, int i10, int i11) {
            this.f13869a.f(h0Var, i10);
        }

        public boolean h(long j10) {
            return e.this.j(j10);
        }

        public void i(f fVar) {
            long j10 = this.f13872d;
            if (j10 == -9223372036854775807L || fVar.f48961h > j10) {
                this.f13872d = fVar.f48961h;
            }
            e.this.m(fVar);
        }

        public boolean j(f fVar) {
            boolean z10;
            long j10 = this.f13872d;
            if (j10 != -9223372036854775807L && j10 < fVar.f48960g) {
                z10 = true;
            } else {
                z10 = false;
            }
            return e.this.n(z10);
        }

        public void n() {
            this.f13869a.S();
        }
    }

    public e(ud.c cVar, b bVar, le.b bVar2) {
        this.f13862q = cVar;
        this.f13858e = bVar;
        this.f13857d = bVar2;
    }

    private Map.Entry e(long j10) {
        return this.f13861p.ceilingEntry(Long.valueOf(j10));
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static long f(id.a aVar) {
        try {
            return w0.R0(w0.E(aVar.f28457p));
        } catch (lc.l0 unused) {
            return -9223372036854775807L;
        }
    }

    private void g(long j10, long j11) {
        Long l10 = (Long) this.f13861p.get(Long.valueOf(j11));
        if (l10 == null) {
            this.f13861p.put(Long.valueOf(j11), Long.valueOf(j10));
        } else if (l10.longValue() > j10) {
            this.f13861p.put(Long.valueOf(j11), Long.valueOf(j10));
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
        if (!this.f13864s) {
            return;
        }
        this.f13865t = true;
        this.f13864s = false;
        this.f13858e.b();
    }

    private void l() {
        this.f13858e.a(this.f13863r);
    }

    private void p() {
        Iterator it = this.f13861p.entrySet().iterator();
        while (it.hasNext()) {
            if (((Long) ((Map.Entry) it.next()).getKey()).longValue() < this.f13862q.f50171h) {
                it.remove();
            }
        }
    }

    @Override // android.os.Handler.Callback
    public boolean handleMessage(Message message) {
        if (this.f13866u) {
            return true;
        }
        if (message.what != 1) {
            return false;
        }
        a aVar = (a) message.obj;
        g(aVar.f13867a, aVar.f13868b);
        return true;
    }

    boolean j(long j10) {
        ud.c cVar = this.f13862q;
        boolean z10 = false;
        if (!cVar.f50167d) {
            return false;
        }
        if (this.f13865t) {
            return true;
        }
        Map.Entry e10 = e(cVar.f50171h);
        if (e10 != null && ((Long) e10.getValue()).longValue() < j10) {
            this.f13863r = ((Long) e10.getKey()).longValue();
            l();
            z10 = true;
        }
        if (z10) {
            i();
        }
        return z10;
    }

    public c k() {
        return new c(this.f13857d);
    }

    void m(f fVar) {
        this.f13864s = true;
    }

    boolean n(boolean z10) {
        if (!this.f13862q.f50167d) {
            return false;
        }
        if (this.f13865t) {
            return true;
        }
        if (!z10) {
            return false;
        }
        i();
        return true;
    }

    public void o() {
        this.f13866u = true;
        this.f13860o.removeCallbacksAndMessages(null);
    }

    public void q(ud.c cVar) {
        this.f13865t = false;
        this.f13863r = -9223372036854775807L;
        this.f13862q = cVar;
        p();
    }
}
