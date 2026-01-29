package ff;

import android.content.Context;
import android.os.Bundle;
import android.os.DeadObjectException;
import android.os.Handler;
import android.os.Looper;
import android.os.Message;
import android.os.RemoteException;
import android.util.Log;
import com.discord.misc.utilities.logThrottle.LogThrottleSingleton;
import com.google.android.gms.common.api.Status;
import ef.a;
import ef.e;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Iterator;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;
import java.util.Queue;
import java.util.Set;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class e0 implements e.a, e.b {

    /* renamed from: d */
    private final a.f f25085d;

    /* renamed from: e */
    private final b f25086e;

    /* renamed from: f */
    private final v f25087f;

    /* renamed from: i */
    private final int f25090i;

    /* renamed from: j */
    private final u0 f25091j;

    /* renamed from: k */
    private boolean f25092k;

    /* renamed from: o */
    final /* synthetic */ e f25096o;

    /* renamed from: c */
    private final Queue f25084c = new LinkedList();

    /* renamed from: g */
    private final Set f25088g = new HashSet();

    /* renamed from: h */
    private final Map f25089h = new HashMap();

    /* renamed from: l */
    private final List f25093l = new ArrayList();

    /* renamed from: m */
    private com.google.android.gms.common.b f25094m = null;

    /* renamed from: n */
    private int f25095n = 0;

    public e0(e eVar, ef.d dVar) {
        Handler handler;
        Context context;
        Handler handler2;
        this.f25096o = eVar;
        handler = eVar.f25082y;
        a.f y10 = dVar.y(handler.getLooper(), this);
        this.f25085d = y10;
        this.f25086e = dVar.t();
        this.f25087f = new v();
        this.f25090i = dVar.x();
        if (y10.g()) {
            context = eVar.f25073p;
            handler2 = eVar.f25082y;
            this.f25091j = dVar.z(context, handler2);
            return;
        }
        this.f25091j = null;
    }

    public static /* bridge */ /* synthetic */ void B(e0 e0Var, g0 g0Var) {
        if (e0Var.f25093l.contains(g0Var) && !e0Var.f25092k) {
            if (!e0Var.f25085d.a()) {
                e0Var.E();
            } else {
                e0Var.j();
            }
        }
    }

    public static /* bridge */ /* synthetic */ void C(e0 e0Var, g0 g0Var) {
        Handler handler;
        Handler handler2;
        com.google.android.gms.common.d dVar;
        com.google.android.gms.common.d[] g10;
        if (e0Var.f25093l.remove(g0Var)) {
            handler = e0Var.f25096o.f25082y;
            handler.removeMessages(15, g0Var);
            handler2 = e0Var.f25096o.f25082y;
            handler2.removeMessages(16, g0Var);
            dVar = g0Var.f25106b;
            ArrayList arrayList = new ArrayList(e0Var.f25084c.size());
            for (b1 b1Var : e0Var.f25084c) {
                if ((b1Var instanceof m0) && (g10 = ((m0) b1Var).g(e0Var)) != null && com.google.android.gms.common.util.b.b(g10, dVar)) {
                    arrayList.add(b1Var);
                }
            }
            int size = arrayList.size();
            for (int i10 = 0; i10 < size; i10++) {
                b1 b1Var2 = (b1) arrayList.get(i10);
                e0Var.f25084c.remove(b1Var2);
                b1Var2.b(new ef.l(dVar));
            }
        }
    }

    private final com.google.android.gms.common.d c(com.google.android.gms.common.d[] dVarArr) {
        if (dVarArr != null && dVarArr.length != 0) {
            com.google.android.gms.common.d[] o10 = this.f25085d.o();
            if (o10 == null) {
                o10 = new com.google.android.gms.common.d[0];
            }
            u0.a aVar = new u0.a(o10.length);
            for (com.google.android.gms.common.d dVar : o10) {
                aVar.put(dVar.getName(), Long.valueOf(dVar.b()));
            }
            for (com.google.android.gms.common.d dVar2 : dVarArr) {
                Long l10 = (Long) aVar.get(dVar2.getName());
                if (l10 == null || l10.longValue() < dVar2.b()) {
                    return dVar2;
                }
            }
        }
        return null;
    }

    private final void d(com.google.android.gms.common.b bVar) {
        Iterator it = this.f25088g.iterator();
        if (it.hasNext()) {
            android.support.v4.media.session.b.a(it.next());
            if (gf.o.a(bVar, com.google.android.gms.common.b.f14802p)) {
                this.f25085d.d();
            }
            throw null;
        }
        this.f25088g.clear();
    }

    public final void g(Status status) {
        Handler handler;
        handler = this.f25096o.f25082y;
        gf.q.d(handler);
        i(status, null, false);
    }

    private final void i(Status status, Exception exc, boolean z10) {
        Handler handler;
        boolean z11;
        handler = this.f25096o.f25082y;
        gf.q.d(handler);
        boolean z12 = true;
        if (status != null) {
            z11 = false;
        } else {
            z11 = true;
        }
        if (exc != null) {
            z12 = false;
        }
        if (z11 != z12) {
            Iterator it = this.f25084c.iterator();
            while (it.hasNext()) {
                b1 b1Var = (b1) it.next();
                if (!z10 || b1Var.f25057a == 2) {
                    if (status != null) {
                        b1Var.a(status);
                    } else {
                        b1Var.b(exc);
                    }
                    it.remove();
                }
            }
            return;
        }
        throw new IllegalArgumentException("Status XOR exception should be null");
    }

    private final void j() {
        ArrayList arrayList = new ArrayList(this.f25084c);
        int size = arrayList.size();
        for (int i10 = 0; i10 < size; i10++) {
            b1 b1Var = (b1) arrayList.get(i10);
            if (this.f25085d.a()) {
                if (p(b1Var)) {
                    this.f25084c.remove(b1Var);
                }
            } else {
                return;
            }
        }
    }

    public final void k() {
        D();
        d(com.google.android.gms.common.b.f14802p);
        o();
        Iterator it = this.f25089h.values().iterator();
        while (it.hasNext()) {
            q0 q0Var = (q0) it.next();
            if (c(q0Var.f25147a.b()) != null) {
                it.remove();
            } else {
                try {
                    q0Var.f25147a.c(this.f25085d, new wg.k());
                } catch (DeadObjectException unused) {
                    f(3);
                    this.f25085d.b("DeadObjectException thrown while calling register listener method.");
                } catch (RemoteException unused2) {
                    it.remove();
                }
            }
        }
        j();
        m();
    }

    public final void l(int i10) {
        Handler handler;
        Handler handler2;
        Handler handler3;
        Handler handler4;
        gf.h0 h0Var;
        D();
        this.f25092k = true;
        this.f25087f.e(i10, this.f25085d.p());
        b bVar = this.f25086e;
        e eVar = this.f25096o;
        handler = eVar.f25082y;
        handler2 = eVar.f25082y;
        handler.sendMessageDelayed(Message.obtain(handler2, 9, bVar), 5000L);
        b bVar2 = this.f25086e;
        e eVar2 = this.f25096o;
        handler3 = eVar2.f25082y;
        handler4 = eVar2.f25082y;
        handler3.sendMessageDelayed(Message.obtain(handler4, 11, bVar2), 120000L);
        h0Var = this.f25096o.f25075r;
        h0Var.c();
        for (q0 q0Var : this.f25089h.values()) {
            q0Var.f25149c.run();
        }
    }

    private final void m() {
        Handler handler;
        Handler handler2;
        Handler handler3;
        long j10;
        b bVar = this.f25086e;
        handler = this.f25096o.f25082y;
        handler.removeMessages(12, bVar);
        b bVar2 = this.f25086e;
        e eVar = this.f25096o;
        handler2 = eVar.f25082y;
        handler3 = eVar.f25082y;
        Message obtainMessage = handler3.obtainMessage(12, bVar2);
        j10 = this.f25096o.f25069d;
        handler2.sendMessageDelayed(obtainMessage, j10);
    }

    private final void n(b1 b1Var) {
        b1Var.d(this.f25087f, a());
        try {
            b1Var.c(this);
        } catch (DeadObjectException unused) {
            f(1);
            this.f25085d.b("DeadObjectException thrown while running ApiCallRunner.");
        }
    }

    private final void o() {
        Handler handler;
        Handler handler2;
        if (this.f25092k) {
            e eVar = this.f25096o;
            b bVar = this.f25086e;
            handler = eVar.f25082y;
            handler.removeMessages(11, bVar);
            e eVar2 = this.f25096o;
            b bVar2 = this.f25086e;
            handler2 = eVar2.f25082y;
            handler2.removeMessages(9, bVar2);
            this.f25092k = false;
        }
    }

    private final boolean p(b1 b1Var) {
        boolean z10;
        Handler handler;
        Handler handler2;
        Handler handler3;
        Handler handler4;
        Handler handler5;
        Handler handler6;
        Handler handler7;
        if (!(b1Var instanceof m0)) {
            n(b1Var);
            return true;
        }
        m0 m0Var = (m0) b1Var;
        com.google.android.gms.common.d c10 = c(m0Var.g(this));
        if (c10 == null) {
            n(b1Var);
            return true;
        }
        String name = this.f25085d.getClass().getName();
        String name2 = c10.getName();
        long b10 = c10.b();
        Log.w("GoogleApiManager", name + " could not execute call because it requires feature (" + name2 + ", " + b10 + ").");
        z10 = this.f25096o.f25083z;
        if (z10 && m0Var.f(this)) {
            g0 g0Var = new g0(this.f25086e, c10, null);
            int indexOf = this.f25093l.indexOf(g0Var);
            if (indexOf >= 0) {
                g0 g0Var2 = (g0) this.f25093l.get(indexOf);
                handler5 = this.f25096o.f25082y;
                handler5.removeMessages(15, g0Var2);
                e eVar = this.f25096o;
                handler6 = eVar.f25082y;
                handler7 = eVar.f25082y;
                handler6.sendMessageDelayed(Message.obtain(handler7, 15, g0Var2), 5000L);
                return false;
            }
            this.f25093l.add(g0Var);
            e eVar2 = this.f25096o;
            handler = eVar2.f25082y;
            handler2 = eVar2.f25082y;
            handler.sendMessageDelayed(Message.obtain(handler2, 15, g0Var), 5000L);
            e eVar3 = this.f25096o;
            handler3 = eVar3.f25082y;
            handler4 = eVar3.f25082y;
            handler3.sendMessageDelayed(Message.obtain(handler4, 16, g0Var), 120000L);
            com.google.android.gms.common.b bVar = new com.google.android.gms.common.b(2, null);
            if (!q(bVar)) {
                this.f25096o.f(bVar, this.f25090i);
                return false;
            }
            return false;
        }
        m0Var.b(new ef.l(c10));
        return true;
    }

    private final boolean q(com.google.android.gms.common.b bVar) {
        Object obj;
        w wVar;
        Set set;
        w wVar2;
        obj = e.C;
        synchronized (obj) {
            try {
                e eVar = this.f25096o;
                wVar = eVar.f25079v;
                if (wVar != null) {
                    set = eVar.f25080w;
                    if (set.contains(this.f25086e)) {
                        wVar2 = this.f25096o.f25079v;
                        wVar2.s(bVar, this.f25090i);
                        return true;
                    }
                }
                return false;
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    private final boolean r(boolean z10) {
        Handler handler;
        handler = this.f25096o.f25082y;
        gf.q.d(handler);
        if (this.f25085d.a() && this.f25089h.isEmpty()) {
            if (this.f25087f.g()) {
                if (z10) {
                    m();
                    return false;
                }
                return false;
            }
            this.f25085d.b("Timing out service connection.");
            return true;
        }
        return false;
    }

    public static /* bridge */ /* synthetic */ b w(e0 e0Var) {
        return e0Var.f25086e;
    }

    public static /* bridge */ /* synthetic */ void y(e0 e0Var, Status status) {
        e0Var.g(status);
    }

    public final void D() {
        Handler handler;
        handler = this.f25096o.f25082y;
        gf.q.d(handler);
        this.f25094m = null;
    }

    public final void E() {
        Handler handler;
        gf.h0 h0Var;
        Context context;
        handler = this.f25096o.f25082y;
        gf.q.d(handler);
        if (!this.f25085d.a() && !this.f25085d.c()) {
            try {
                e eVar = this.f25096o;
                h0Var = eVar.f25075r;
                context = eVar.f25073p;
                int b10 = h0Var.b(context, this.f25085d);
                if (b10 != 0) {
                    com.google.android.gms.common.b bVar = new com.google.android.gms.common.b(b10, null);
                    String name = this.f25085d.getClass().getName();
                    String obj = bVar.toString();
                    Log.w("GoogleApiManager", "The service for " + name + " is not available: " + obj);
                    H(bVar, null);
                    return;
                }
                e eVar2 = this.f25096o;
                a.f fVar = this.f25085d;
                i0 i0Var = new i0(eVar2, fVar, this.f25086e);
                if (fVar.g()) {
                    ((u0) gf.q.l(this.f25091j)).V0(i0Var);
                }
                try {
                    this.f25085d.e(i0Var);
                } catch (SecurityException e10) {
                    H(new com.google.android.gms.common.b(10), e10);
                }
            } catch (IllegalStateException e11) {
                H(new com.google.android.gms.common.b(10), e11);
            }
        }
    }

    public final void F(b1 b1Var) {
        Handler handler;
        handler = this.f25096o.f25082y;
        gf.q.d(handler);
        if (this.f25085d.a()) {
            if (p(b1Var)) {
                m();
                return;
            } else {
                this.f25084c.add(b1Var);
                return;
            }
        }
        this.f25084c.add(b1Var);
        com.google.android.gms.common.b bVar = this.f25094m;
        if (bVar != null && bVar.e()) {
            H(this.f25094m, null);
        } else {
            E();
        }
    }

    public final void G() {
        this.f25095n++;
    }

    public final void H(com.google.android.gms.common.b bVar, Exception exc) {
        Handler handler;
        gf.h0 h0Var;
        boolean z10;
        Status g10;
        Status g11;
        Status g12;
        Handler handler2;
        Handler handler3;
        Handler handler4;
        Status status;
        Handler handler5;
        Handler handler6;
        handler = this.f25096o.f25082y;
        gf.q.d(handler);
        u0 u0Var = this.f25091j;
        if (u0Var != null) {
            u0Var.W0();
        }
        D();
        h0Var = this.f25096o.f25075r;
        h0Var.c();
        d(bVar);
        if ((this.f25085d instanceof jf.e) && bVar.b() != 24) {
            this.f25096o.f25070e = true;
            e eVar = this.f25096o;
            handler5 = eVar.f25082y;
            handler6 = eVar.f25082y;
            handler5.sendMessageDelayed(handler6.obtainMessage(19), LogThrottleSingleton.RATE_LIMIT_FIVE_MINUTES);
        }
        if (bVar.b() == 4) {
            status = e.B;
            g(status);
        } else if (this.f25084c.isEmpty()) {
            this.f25094m = bVar;
        } else if (exc != null) {
            handler4 = this.f25096o.f25082y;
            gf.q.d(handler4);
            i(null, exc, false);
        } else {
            z10 = this.f25096o.f25083z;
            if (z10) {
                g11 = e.g(this.f25086e, bVar);
                i(g11, null, true);
                if (!this.f25084c.isEmpty() && !q(bVar) && !this.f25096o.f(bVar, this.f25090i)) {
                    if (bVar.b() == 18) {
                        this.f25092k = true;
                    }
                    if (!this.f25092k) {
                        g12 = e.g(this.f25086e, bVar);
                        g(g12);
                        return;
                    }
                    e eVar2 = this.f25096o;
                    b bVar2 = this.f25086e;
                    handler2 = eVar2.f25082y;
                    handler3 = eVar2.f25082y;
                    handler2.sendMessageDelayed(Message.obtain(handler3, 9, bVar2), 5000L);
                    return;
                }
                return;
            }
            g10 = e.g(this.f25086e, bVar);
            g(g10);
        }
    }

    public final void I(com.google.android.gms.common.b bVar) {
        Handler handler;
        handler = this.f25096o.f25082y;
        gf.q.d(handler);
        a.f fVar = this.f25085d;
        String name = fVar.getClass().getName();
        String valueOf = String.valueOf(bVar);
        fVar.b("onSignInFailed for " + name + " with " + valueOf);
        H(bVar, null);
    }

    public final void J() {
        Handler handler;
        handler = this.f25096o.f25082y;
        gf.q.d(handler);
        if (this.f25092k) {
            E();
        }
    }

    public final void K() {
        Handler handler;
        handler = this.f25096o.f25082y;
        gf.q.d(handler);
        g(e.A);
        this.f25087f.f();
        for (i iVar : (i[]) this.f25089h.keySet().toArray(new i[0])) {
            F(new a1(iVar, new wg.k()));
        }
        d(new com.google.android.gms.common.b(4));
        if (this.f25085d.a()) {
            this.f25085d.l(new d0(this));
        }
    }

    public final void L() {
        Handler handler;
        com.google.android.gms.common.f fVar;
        Context context;
        Status status;
        handler = this.f25096o.f25082y;
        gf.q.d(handler);
        if (this.f25092k) {
            o();
            e eVar = this.f25096o;
            fVar = eVar.f25074q;
            context = eVar.f25073p;
            if (fVar.g(context) == 18) {
                status = new Status(21, "Connection timed out waiting for Google Play services update to complete.");
            } else {
                status = new Status(22, "API failed to connect while resuming due to an unknown error.");
            }
            g(status);
            this.f25085d.b("Timing out connection while resuming.");
        }
    }

    public final boolean a() {
        return this.f25085d.g();
    }

    public final boolean b() {
        return r(true);
    }

    @Override // ff.d
    public final void e(Bundle bundle) {
        Handler handler;
        Handler handler2;
        e eVar = this.f25096o;
        Looper myLooper = Looper.myLooper();
        handler = eVar.f25082y;
        if (myLooper != handler.getLooper()) {
            handler2 = this.f25096o.f25082y;
            handler2.post(new a0(this));
            return;
        }
        k();
    }

    @Override // ff.d
    public final void f(int i10) {
        Handler handler;
        Handler handler2;
        e eVar = this.f25096o;
        Looper myLooper = Looper.myLooper();
        handler = eVar.f25082y;
        if (myLooper != handler.getLooper()) {
            handler2 = this.f25096o.f25082y;
            handler2.post(new b0(this, i10));
            return;
        }
        l(i10);
    }

    @Override // ff.k
    public final void h(com.google.android.gms.common.b bVar) {
        H(bVar, null);
    }

    public final int s() {
        return this.f25090i;
    }

    public final int t() {
        return this.f25095n;
    }

    public final a.f v() {
        return this.f25085d;
    }

    public final Map x() {
        return this.f25089h;
    }
}
