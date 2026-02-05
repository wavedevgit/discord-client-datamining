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
    private final a.f f22913d;

    /* renamed from: e */
    private final b f22914e;

    /* renamed from: f */
    private final v f22915f;

    /* renamed from: i */
    private final int f22918i;

    /* renamed from: j */
    private final u0 f22919j;

    /* renamed from: k */
    private boolean f22920k;

    /* renamed from: o */
    final /* synthetic */ e f22924o;

    /* renamed from: c */
    private final Queue f22912c = new LinkedList();

    /* renamed from: g */
    private final Set f22916g = new HashSet();

    /* renamed from: h */
    private final Map f22917h = new HashMap();

    /* renamed from: l */
    private final List f22921l = new ArrayList();

    /* renamed from: m */
    private com.google.android.gms.common.b f22922m = null;

    /* renamed from: n */
    private int f22923n = 0;

    public e0(e eVar, ef.d dVar) {
        Handler handler;
        Context context;
        Handler handler2;
        this.f22924o = eVar;
        handler = eVar.f22910y;
        a.f y10 = dVar.y(handler.getLooper(), this);
        this.f22913d = y10;
        this.f22914e = dVar.t();
        this.f22915f = new v();
        this.f22918i = dVar.x();
        if (y10.g()) {
            context = eVar.f22901p;
            handler2 = eVar.f22910y;
            this.f22919j = dVar.z(context, handler2);
            return;
        }
        this.f22919j = null;
    }

    public static /* bridge */ /* synthetic */ void B(e0 e0Var, g0 g0Var) {
        if (e0Var.f22921l.contains(g0Var) && !e0Var.f22920k) {
            if (!e0Var.f22913d.a()) {
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
        if (e0Var.f22921l.remove(g0Var)) {
            handler = e0Var.f22924o.f22910y;
            handler.removeMessages(15, g0Var);
            handler2 = e0Var.f22924o.f22910y;
            handler2.removeMessages(16, g0Var);
            dVar = g0Var.f22934b;
            ArrayList arrayList = new ArrayList(e0Var.f22912c.size());
            for (b1 b1Var : e0Var.f22912c) {
                if ((b1Var instanceof m0) && (g10 = ((m0) b1Var).g(e0Var)) != null && com.google.android.gms.common.util.b.b(g10, dVar)) {
                    arrayList.add(b1Var);
                }
            }
            int size = arrayList.size();
            for (int i10 = 0; i10 < size; i10++) {
                b1 b1Var2 = (b1) arrayList.get(i10);
                e0Var.f22912c.remove(b1Var2);
                b1Var2.b(new ef.l(dVar));
            }
        }
    }

    private final com.google.android.gms.common.d c(com.google.android.gms.common.d[] dVarArr) {
        if (dVarArr != null && dVarArr.length != 0) {
            com.google.android.gms.common.d[] o10 = this.f22913d.o();
            if (o10 == null) {
                o10 = new com.google.android.gms.common.d[0];
            }
            u0.a aVar = new u0.a(o10.length);
            for (com.google.android.gms.common.d dVar : o10) {
                aVar.put(dVar.getName(), Long.valueOf(dVar.c()));
            }
            for (com.google.android.gms.common.d dVar2 : dVarArr) {
                Long l10 = (Long) aVar.get(dVar2.getName());
                if (l10 == null || l10.longValue() < dVar2.c()) {
                    return dVar2;
                }
            }
        }
        return null;
    }

    private final void d(com.google.android.gms.common.b bVar) {
        Iterator it = this.f22916g.iterator();
        if (it.hasNext()) {
            android.support.v4.media.session.b.a(it.next());
            if (gf.o.a(bVar, com.google.android.gms.common.b.f13792q)) {
                this.f22913d.d();
            }
            throw null;
        }
        this.f22916g.clear();
    }

    public final void g(Status status) {
        Handler handler;
        handler = this.f22924o.f22910y;
        gf.q.d(handler);
        i(status, null, false);
    }

    private final void i(Status status, Exception exc, boolean z10) {
        Handler handler;
        boolean z11;
        handler = this.f22924o.f22910y;
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
            Iterator it = this.f22912c.iterator();
            while (it.hasNext()) {
                b1 b1Var = (b1) it.next();
                if (!z10 || b1Var.f22885a == 2) {
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
        ArrayList arrayList = new ArrayList(this.f22912c);
        int size = arrayList.size();
        for (int i10 = 0; i10 < size; i10++) {
            b1 b1Var = (b1) arrayList.get(i10);
            if (this.f22913d.a()) {
                if (p(b1Var)) {
                    this.f22912c.remove(b1Var);
                }
            } else {
                return;
            }
        }
    }

    public final void k() {
        D();
        d(com.google.android.gms.common.b.f13792q);
        o();
        Iterator it = this.f22917h.values().iterator();
        while (it.hasNext()) {
            q0 q0Var = (q0) it.next();
            if (c(q0Var.f22975a.b()) != null) {
                it.remove();
            } else {
                try {
                    q0Var.f22975a.c(this.f22913d, new xg.k());
                } catch (DeadObjectException unused) {
                    f(3);
                    this.f22913d.b("DeadObjectException thrown while calling register listener method.");
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
        this.f22920k = true;
        this.f22915f.e(i10, this.f22913d.p());
        b bVar = this.f22914e;
        e eVar = this.f22924o;
        handler = eVar.f22910y;
        handler2 = eVar.f22910y;
        handler.sendMessageDelayed(Message.obtain(handler2, 9, bVar), 5000L);
        b bVar2 = this.f22914e;
        e eVar2 = this.f22924o;
        handler3 = eVar2.f22910y;
        handler4 = eVar2.f22910y;
        handler3.sendMessageDelayed(Message.obtain(handler4, 11, bVar2), 120000L);
        h0Var = this.f22924o.f22903r;
        h0Var.c();
        for (q0 q0Var : this.f22917h.values()) {
            q0Var.f22977c.run();
        }
    }

    private final void m() {
        Handler handler;
        Handler handler2;
        Handler handler3;
        long j10;
        b bVar = this.f22914e;
        handler = this.f22924o.f22910y;
        handler.removeMessages(12, bVar);
        b bVar2 = this.f22914e;
        e eVar = this.f22924o;
        handler2 = eVar.f22910y;
        handler3 = eVar.f22910y;
        Message obtainMessage = handler3.obtainMessage(12, bVar2);
        j10 = this.f22924o.f22897d;
        handler2.sendMessageDelayed(obtainMessage, j10);
    }

    private final void n(b1 b1Var) {
        b1Var.d(this.f22915f, a());
        try {
            b1Var.c(this);
        } catch (DeadObjectException unused) {
            f(1);
            this.f22913d.b("DeadObjectException thrown while running ApiCallRunner.");
        }
    }

    private final void o() {
        Handler handler;
        Handler handler2;
        if (this.f22920k) {
            e eVar = this.f22924o;
            b bVar = this.f22914e;
            handler = eVar.f22910y;
            handler.removeMessages(11, bVar);
            e eVar2 = this.f22924o;
            b bVar2 = this.f22914e;
            handler2 = eVar2.f22910y;
            handler2.removeMessages(9, bVar2);
            this.f22920k = false;
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
        String name = this.f22913d.getClass().getName();
        String name2 = c10.getName();
        long c11 = c10.c();
        Log.w("GoogleApiManager", name + " could not execute call because it requires feature (" + name2 + ", " + c11 + ").");
        z10 = this.f22924o.f22911z;
        if (z10 && m0Var.f(this)) {
            g0 g0Var = new g0(this.f22914e, c10, null);
            int indexOf = this.f22921l.indexOf(g0Var);
            if (indexOf >= 0) {
                g0 g0Var2 = (g0) this.f22921l.get(indexOf);
                handler5 = this.f22924o.f22910y;
                handler5.removeMessages(15, g0Var2);
                e eVar = this.f22924o;
                handler6 = eVar.f22910y;
                handler7 = eVar.f22910y;
                handler6.sendMessageDelayed(Message.obtain(handler7, 15, g0Var2), 5000L);
                return false;
            }
            this.f22921l.add(g0Var);
            e eVar2 = this.f22924o;
            handler = eVar2.f22910y;
            handler2 = eVar2.f22910y;
            handler.sendMessageDelayed(Message.obtain(handler2, 15, g0Var), 5000L);
            e eVar3 = this.f22924o;
            handler3 = eVar3.f22910y;
            handler4 = eVar3.f22910y;
            handler3.sendMessageDelayed(Message.obtain(handler4, 16, g0Var), 120000L);
            com.google.android.gms.common.b bVar = new com.google.android.gms.common.b(2, null);
            if (!q(bVar)) {
                this.f22924o.f(bVar, this.f22918i);
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
                e eVar = this.f22924o;
                wVar = eVar.f22907v;
                if (wVar != null) {
                    set = eVar.f22908w;
                    if (set.contains(this.f22914e)) {
                        wVar2 = this.f22924o.f22907v;
                        wVar2.s(bVar, this.f22918i);
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
        handler = this.f22924o.f22910y;
        gf.q.d(handler);
        if (this.f22913d.a() && this.f22917h.isEmpty()) {
            if (this.f22915f.g()) {
                if (z10) {
                    m();
                    return false;
                }
                return false;
            }
            this.f22913d.b("Timing out service connection.");
            return true;
        }
        return false;
    }

    public static /* bridge */ /* synthetic */ b w(e0 e0Var) {
        return e0Var.f22914e;
    }

    public static /* bridge */ /* synthetic */ void y(e0 e0Var, Status status) {
        e0Var.g(status);
    }

    public final void D() {
        Handler handler;
        handler = this.f22924o.f22910y;
        gf.q.d(handler);
        this.f22922m = null;
    }

    public final void E() {
        Handler handler;
        gf.h0 h0Var;
        Context context;
        handler = this.f22924o.f22910y;
        gf.q.d(handler);
        if (!this.f22913d.a() && !this.f22913d.c()) {
            try {
                e eVar = this.f22924o;
                h0Var = eVar.f22903r;
                context = eVar.f22901p;
                int b10 = h0Var.b(context, this.f22913d);
                if (b10 != 0) {
                    com.google.android.gms.common.b bVar = new com.google.android.gms.common.b(b10, null);
                    String name = this.f22913d.getClass().getName();
                    String obj = bVar.toString();
                    Log.w("GoogleApiManager", "The service for " + name + " is not available: " + obj);
                    H(bVar, null);
                    return;
                }
                e eVar2 = this.f22924o;
                a.f fVar = this.f22913d;
                i0 i0Var = new i0(eVar2, fVar, this.f22914e);
                if (fVar.g()) {
                    ((u0) gf.q.l(this.f22919j)).Z0(i0Var);
                }
                try {
                    this.f22913d.e(i0Var);
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
        handler = this.f22924o.f22910y;
        gf.q.d(handler);
        if (this.f22913d.a()) {
            if (p(b1Var)) {
                m();
                return;
            } else {
                this.f22912c.add(b1Var);
                return;
            }
        }
        this.f22912c.add(b1Var);
        com.google.android.gms.common.b bVar = this.f22922m;
        if (bVar != null && bVar.f()) {
            H(this.f22922m, null);
        } else {
            E();
        }
    }

    public final void G() {
        this.f22923n++;
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
        handler = this.f22924o.f22910y;
        gf.q.d(handler);
        u0 u0Var = this.f22919j;
        if (u0Var != null) {
            u0Var.a1();
        }
        D();
        h0Var = this.f22924o.f22903r;
        h0Var.c();
        d(bVar);
        if ((this.f22913d instanceof jf.e) && bVar.c() != 24) {
            this.f22924o.f22898e = true;
            e eVar = this.f22924o;
            handler5 = eVar.f22910y;
            handler6 = eVar.f22910y;
            handler5.sendMessageDelayed(handler6.obtainMessage(19), LogThrottleSingleton.RATE_LIMIT_FIVE_MINUTES);
        }
        if (bVar.c() == 4) {
            status = e.B;
            g(status);
        } else if (this.f22912c.isEmpty()) {
            this.f22922m = bVar;
        } else if (exc != null) {
            handler4 = this.f22924o.f22910y;
            gf.q.d(handler4);
            i(null, exc, false);
        } else {
            z10 = this.f22924o.f22911z;
            if (z10) {
                g11 = e.g(this.f22914e, bVar);
                i(g11, null, true);
                if (!this.f22912c.isEmpty() && !q(bVar) && !this.f22924o.f(bVar, this.f22918i)) {
                    if (bVar.c() == 18) {
                        this.f22920k = true;
                    }
                    if (!this.f22920k) {
                        g12 = e.g(this.f22914e, bVar);
                        g(g12);
                        return;
                    }
                    e eVar2 = this.f22924o;
                    b bVar2 = this.f22914e;
                    handler2 = eVar2.f22910y;
                    handler3 = eVar2.f22910y;
                    handler2.sendMessageDelayed(Message.obtain(handler3, 9, bVar2), 5000L);
                    return;
                }
                return;
            }
            g10 = e.g(this.f22914e, bVar);
            g(g10);
        }
    }

    public final void I(com.google.android.gms.common.b bVar) {
        Handler handler;
        handler = this.f22924o.f22910y;
        gf.q.d(handler);
        a.f fVar = this.f22913d;
        String name = fVar.getClass().getName();
        String valueOf = String.valueOf(bVar);
        fVar.b("onSignInFailed for " + name + " with " + valueOf);
        H(bVar, null);
    }

    public final void J() {
        Handler handler;
        handler = this.f22924o.f22910y;
        gf.q.d(handler);
        if (this.f22920k) {
            E();
        }
    }

    public final void K() {
        Handler handler;
        handler = this.f22924o.f22910y;
        gf.q.d(handler);
        g(e.A);
        this.f22915f.f();
        for (i iVar : (i[]) this.f22917h.keySet().toArray(new i[0])) {
            F(new a1(iVar, new xg.k()));
        }
        d(new com.google.android.gms.common.b(4));
        if (this.f22913d.a()) {
            this.f22913d.m(new d0(this));
        }
    }

    public final void L() {
        Handler handler;
        com.google.android.gms.common.f fVar;
        Context context;
        Status status;
        handler = this.f22924o.f22910y;
        gf.q.d(handler);
        if (this.f22920k) {
            o();
            e eVar = this.f22924o;
            fVar = eVar.f22902q;
            context = eVar.f22901p;
            if (fVar.g(context) == 18) {
                status = new Status(21, "Connection timed out waiting for Google Play services update to complete.");
            } else {
                status = new Status(22, "API failed to connect while resuming due to an unknown error.");
            }
            g(status);
            this.f22913d.b("Timing out connection while resuming.");
        }
    }

    public final boolean a() {
        return this.f22913d.g();
    }

    public final boolean b() {
        return r(true);
    }

    @Override // ff.d
    public final void e(Bundle bundle) {
        Handler handler;
        Handler handler2;
        e eVar = this.f22924o;
        Looper myLooper = Looper.myLooper();
        handler = eVar.f22910y;
        if (myLooper != handler.getLooper()) {
            handler2 = this.f22924o.f22910y;
            handler2.post(new a0(this));
            return;
        }
        k();
    }

    @Override // ff.d
    public final void f(int i10) {
        Handler handler;
        Handler handler2;
        e eVar = this.f22924o;
        Looper myLooper = Looper.myLooper();
        handler = eVar.f22910y;
        if (myLooper != handler.getLooper()) {
            handler2 = this.f22924o.f22910y;
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
        return this.f22918i;
    }

    public final int t() {
        return this.f22923n;
    }

    public final a.f v() {
        return this.f22913d;
    }

    public final Map x() {
        return this.f22917h;
    }
}
