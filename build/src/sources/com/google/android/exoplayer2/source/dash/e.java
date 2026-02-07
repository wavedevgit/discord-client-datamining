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
    private final le.b f12800d;

    /* renamed from: e  reason: collision with root package name */
    private final b f12801e;

    /* renamed from: q  reason: collision with root package name */
    private ud.c f12805q;

    /* renamed from: r  reason: collision with root package name */
    private long f12806r;

    /* renamed from: s  reason: collision with root package name */
    private boolean f12807s;

    /* renamed from: t  reason: collision with root package name */
    private boolean f12808t;

    /* renamed from: u  reason: collision with root package name */
    private boolean f12809u;

    /* renamed from: p  reason: collision with root package name */
    private final TreeMap f12804p = new TreeMap();

    /* renamed from: o  reason: collision with root package name */
    private final Handler f12803o = w0.x(this);

    /* renamed from: i  reason: collision with root package name */
    private final id.b f12802i = new id.b();

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        public final long f12810a;

        /* renamed from: b  reason: collision with root package name */
        public final long f12811b;

        public a(long j10, long j11) {
            this.f12810a = j10;
            this.f12811b = j11;
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
        private final l0 f12812a;

        /* renamed from: b  reason: collision with root package name */
        private final x f12813b = new x();

        /* renamed from: c  reason: collision with root package name */
        private final gd.c f12814c = new gd.c();

        /* renamed from: d  reason: collision with root package name */
        private long f12815d = -9223372036854775807L;

        c(le.b bVar) {
            this.f12812a = l0.l(bVar);
        }

        private gd.c g() {
            this.f12814c.h();
            if (this.f12812a.R(this.f12813b, this.f12814c, 0, false) == -4) {
                this.f12814c.v();
                return this.f12814c;
            }
            return null;
        }

        private void k(long j10, long j11) {
            e.this.f12803o.sendMessage(e.this.f12803o.obtainMessage(1, new a(j10, j11)));
        }

        private void l() {
            while (this.f12812a.K(false)) {
                gd.c g10 = g();
                if (g10 != null) {
                    long j10 = g10.f46659p;
                    Metadata a10 = e.this.f12802i.a(g10);
                    if (a10 != null) {
                        id.a aVar = (id.a) a10.d(0);
                        if (e.h(aVar.f26697d, aVar.f26698e)) {
                            m(j10, aVar);
                        }
                    }
                }
            }
            this.f12812a.s();
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
            this.f12812a.b(format);
        }

        @Override // tc.b0
        public int c(j jVar, int i10, boolean z10, int i11) {
            return this.f12812a.a(jVar, i10, z10);
        }

        @Override // tc.b0
        public void d(long j10, int i10, int i11, int i12, b0.a aVar) {
            this.f12812a.d(j10, i10, i11, i12, aVar);
            l();
        }

        @Override // tc.b0
        public void e(h0 h0Var, int i10, int i11) {
            this.f12812a.f(h0Var, i10);
        }

        public boolean h(long j10) {
            return e.this.j(j10);
        }

        public void i(f fVar) {
            long j10 = this.f12815d;
            if (j10 == -9223372036854775807L || fVar.f49940h > j10) {
                this.f12815d = fVar.f49940h;
            }
            e.this.m(fVar);
        }

        public boolean j(f fVar) {
            boolean z10;
            long j10 = this.f12815d;
            if (j10 != -9223372036854775807L && j10 < fVar.f49939g) {
                z10 = true;
            } else {
                z10 = false;
            }
            return e.this.n(z10);
        }

        public void n() {
            this.f12812a.S();
        }
    }

    public e(ud.c cVar, b bVar, le.b bVar2) {
        this.f12805q = cVar;
        this.f12801e = bVar;
        this.f12800d = bVar2;
    }

    private Map.Entry e(long j10) {
        return this.f12804p.ceilingEntry(Long.valueOf(j10));
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static long f(id.a aVar) {
        try {
            return w0.R0(w0.E(aVar.f26701p));
        } catch (lc.l0 unused) {
            return -9223372036854775807L;
        }
    }

    private void g(long j10, long j11) {
        Long l10 = (Long) this.f12804p.get(Long.valueOf(j11));
        if (l10 == null) {
            this.f12804p.put(Long.valueOf(j11), Long.valueOf(j10));
        } else if (l10.longValue() > j10) {
            this.f12804p.put(Long.valueOf(j11), Long.valueOf(j10));
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
        if (!this.f12807s) {
            return;
        }
        this.f12808t = true;
        this.f12807s = false;
        this.f12801e.b();
    }

    private void l() {
        this.f12801e.a(this.f12806r);
    }

    private void p() {
        Iterator it = this.f12804p.entrySet().iterator();
        while (it.hasNext()) {
            if (((Long) ((Map.Entry) it.next()).getKey()).longValue() < this.f12805q.f51372h) {
                it.remove();
            }
        }
    }

    @Override // android.os.Handler.Callback
    public boolean handleMessage(Message message) {
        if (this.f12809u) {
            return true;
        }
        if (message.what != 1) {
            return false;
        }
        a aVar = (a) message.obj;
        g(aVar.f12810a, aVar.f12811b);
        return true;
    }

    boolean j(long j10) {
        ud.c cVar = this.f12805q;
        boolean z10 = false;
        if (!cVar.f51368d) {
            return false;
        }
        if (this.f12808t) {
            return true;
        }
        Map.Entry e10 = e(cVar.f51372h);
        if (e10 != null && ((Long) e10.getValue()).longValue() < j10) {
            this.f12806r = ((Long) e10.getKey()).longValue();
            l();
            z10 = true;
        }
        if (z10) {
            i();
        }
        return z10;
    }

    public c k() {
        return new c(this.f12800d);
    }

    void m(f fVar) {
        this.f12807s = true;
    }

    boolean n(boolean z10) {
        if (!this.f12805q.f51368d) {
            return false;
        }
        if (this.f12808t) {
            return true;
        }
        if (!z10) {
            return false;
        }
        i();
        return true;
    }

    public void o() {
        this.f12809u = true;
        this.f12803o.removeCallbacksAndMessages(null);
    }

    public void q(ud.c cVar) {
        this.f12808t = false;
        this.f12806r = -9223372036854775807L;
        this.f12805q = cVar;
        p();
    }
}
