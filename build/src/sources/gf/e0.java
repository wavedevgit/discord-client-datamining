package gf;

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
import ff.a;
import ff.e;
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
    private final a.f f25600d;

    /* renamed from: e */
    private final b f25601e;

    /* renamed from: f */
    private final v f25602f;

    /* renamed from: i */
    private final int f25605i;

    /* renamed from: j */
    private final u0 f25606j;

    /* renamed from: k */
    private boolean f25607k;

    /* renamed from: o */
    final /* synthetic */ e f25611o;

    /* renamed from: c */
    private final Queue f25599c = new LinkedList();

    /* renamed from: g */
    private final Set f25603g = new HashSet();

    /* renamed from: h */
    private final Map f25604h = new HashMap();

    /* renamed from: l */
    private final List f25608l = new ArrayList();

    /* renamed from: m */
    private com.google.android.gms.common.b f25609m = null;

    /* renamed from: n */
    private int f25610n = 0;

    public e0(e eVar, ff.d dVar) {
        Handler handler;
        Context context;
        Handler handler2;
        this.f25611o = eVar;
        handler = eVar.f25597y;
        a.f y10 = dVar.y(handler.getLooper(), this);
        this.f25600d = y10;
        this.f25601e = dVar.t();
        this.f25602f = new v();
        this.f25605i = dVar.x();
        if (y10.h()) {
            context = eVar.f25588p;
            handler2 = eVar.f25597y;
            this.f25606j = dVar.z(context, handler2);
            return;
        }
        this.f25606j = null;
    }

    public static /* bridge */ /* synthetic */ void B(e0 e0Var, g0 g0Var) {
        if (e0Var.f25608l.contains(g0Var) && !e0Var.f25607k) {
            if (!e0Var.f25600d.a()) {
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
        if (e0Var.f25608l.remove(g0Var)) {
            handler = e0Var.f25611o.f25597y;
            handler.removeMessages(15, g0Var);
            handler2 = e0Var.f25611o.f25597y;
            handler2.removeMessages(16, g0Var);
            dVar = g0Var.f25621b;
            ArrayList arrayList = new ArrayList(e0Var.f25599c.size());
            for (b1 b1Var : e0Var.f25599c) {
                if ((b1Var instanceof m0) && (g10 = ((m0) b1Var).g(e0Var)) != null && com.google.android.gms.common.util.b.b(g10, dVar)) {
                    arrayList.add(b1Var);
                }
            }
            int size = arrayList.size();
            for (int i10 = 0; i10 < size; i10++) {
                b1 b1Var2 = (b1) arrayList.get(i10);
                e0Var.f25599c.remove(b1Var2);
                b1Var2.b(new ff.l(dVar));
            }
        }
    }

    private final com.google.android.gms.common.d c(com.google.android.gms.common.d[] dVarArr) {
        if (dVarArr != null && dVarArr.length != 0) {
            com.google.android.gms.common.d[] o10 = this.f25600d.o();
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
        Iterator it = this.f25603g.iterator();
        if (it.hasNext()) {
            android.support.v4.media.session.b.a(it.next());
            if (hf.o.a(bVar, com.google.android.gms.common.b.f14465q)) {
                this.f25600d.e();
            }
            throw null;
        }
        this.f25603g.clear();
    }

    public final void g(Status status) {
        Handler handler;
        handler = this.f25611o.f25597y;
        hf.q.d(handler);
        h(status, null, false);
    }

    private final void h(Status status, Exception exc, boolean z10) {
        Handler handler;
        boolean z11;
        handler = this.f25611o.f25597y;
        hf.q.d(handler);
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
            Iterator it = this.f25599c.iterator();
            while (it.hasNext()) {
                b1 b1Var = (b1) it.next();
                if (!z10 || b1Var.f25572a == 2) {
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
        ArrayList arrayList = new ArrayList(this.f25599c);
        int size = arrayList.size();
        for (int i10 = 0; i10 < size; i10++) {
            b1 b1Var = (b1) arrayList.get(i10);
            if (this.f25600d.a()) {
                if (p(b1Var)) {
                    this.f25599c.remove(b1Var);
                }
            } else {
                return;
            }
        }
    }

    public final void k() {
        D();
        d(com.google.android.gms.common.b.f14465q);
        o();
        Iterator it = this.f25604h.values().iterator();
        while (it.hasNext()) {
            q0 q0Var = (q0) it.next();
            if (c(q0Var.f25662a.b()) != null) {
                it.remove();
            } else {
                try {
                    q0Var.f25662a.c(this.f25600d, new zg.k());
                } catch (DeadObjectException unused) {
                    f(3);
                    this.f25600d.c("DeadObjectException thrown while calling register listener method.");
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
        hf.h0 h0Var;
        D();
        this.f25607k = true;
        this.f25602f.e(i10, this.f25600d.p());
        b bVar = this.f25601e;
        e eVar = this.f25611o;
        handler = eVar.f25597y;
        handler2 = eVar.f25597y;
        handler.sendMessageDelayed(Message.obtain(handler2, 9, bVar), 5000L);
        b bVar2 = this.f25601e;
        e eVar2 = this.f25611o;
        handler3 = eVar2.f25597y;
        handler4 = eVar2.f25597y;
        handler3.sendMessageDelayed(Message.obtain(handler4, 11, bVar2), 120000L);
        h0Var = this.f25611o.f25590r;
        h0Var.c();
        for (q0 q0Var : this.f25604h.values()) {
            q0Var.f25664c.run();
        }
    }

    private final void m() {
        Handler handler;
        Handler handler2;
        Handler handler3;
        long j10;
        b bVar = this.f25601e;
        handler = this.f25611o.f25597y;
        handler.removeMessages(12, bVar);
        b bVar2 = this.f25601e;
        e eVar = this.f25611o;
        handler2 = eVar.f25597y;
        handler3 = eVar.f25597y;
        Message obtainMessage = handler3.obtainMessage(12, bVar2);
        j10 = this.f25611o.f25584d;
        handler2.sendMessageDelayed(obtainMessage, j10);
    }

    private final void n(b1 b1Var) {
        b1Var.d(this.f25602f, a());
        try {
            b1Var.c(this);
        } catch (DeadObjectException unused) {
            f(1);
            this.f25600d.c("DeadObjectException thrown while running ApiCallRunner.");
        }
    }

    private final void o() {
        Handler handler;
        Handler handler2;
        if (this.f25607k) {
            e eVar = this.f25611o;
            b bVar = this.f25601e;
            handler = eVar.f25597y;
            handler.removeMessages(11, bVar);
            e eVar2 = this.f25611o;
            b bVar2 = this.f25601e;
            handler2 = eVar2.f25597y;
            handler2.removeMessages(9, bVar2);
            this.f25607k = false;
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
        String name = this.f25600d.getClass().getName();
        String name2 = c10.getName();
        long c11 = c10.c();
        Log.w("GoogleApiManager", name + " could not execute call because it requires feature (" + name2 + ", " + c11 + ").");
        z10 = this.f25611o.f25598z;
        if (z10 && m0Var.f(this)) {
            g0 g0Var = new g0(this.f25601e, c10, null);
            int indexOf = this.f25608l.indexOf(g0Var);
            if (indexOf >= 0) {
                g0 g0Var2 = (g0) this.f25608l.get(indexOf);
                handler5 = this.f25611o.f25597y;
                handler5.removeMessages(15, g0Var2);
                e eVar = this.f25611o;
                handler6 = eVar.f25597y;
                handler7 = eVar.f25597y;
                handler6.sendMessageDelayed(Message.obtain(handler7, 15, g0Var2), 5000L);
                return false;
            }
            this.f25608l.add(g0Var);
            e eVar2 = this.f25611o;
            handler = eVar2.f25597y;
            handler2 = eVar2.f25597y;
            handler.sendMessageDelayed(Message.obtain(handler2, 15, g0Var), 5000L);
            e eVar3 = this.f25611o;
            handler3 = eVar3.f25597y;
            handler4 = eVar3.f25597y;
            handler3.sendMessageDelayed(Message.obtain(handler4, 16, g0Var), 120000L);
            com.google.android.gms.common.b bVar = new com.google.android.gms.common.b(2, null);
            if (!q(bVar)) {
                this.f25611o.f(bVar, this.f25605i);
                return false;
            }
            return false;
        }
        m0Var.b(new ff.l(c10));
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
                e eVar = this.f25611o;
                wVar = eVar.f25594v;
                if (wVar != null) {
                    set = eVar.f25595w;
                    if (set.contains(this.f25601e)) {
                        wVar2 = this.f25611o.f25594v;
                        wVar2.s(bVar, this.f25605i);
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
        handler = this.f25611o.f25597y;
        hf.q.d(handler);
        if (this.f25600d.a() && this.f25604h.isEmpty()) {
            if (this.f25602f.g()) {
                if (z10) {
                    m();
                    return false;
                }
                return false;
            }
            this.f25600d.c("Timing out service connection.");
            return true;
        }
        return false;
    }

    public static /* bridge */ /* synthetic */ b w(e0 e0Var) {
        return e0Var.f25601e;
    }

    public static /* bridge */ /* synthetic */ void y(e0 e0Var, Status status) {
        e0Var.g(status);
    }

    public final void D() {
        Handler handler;
        handler = this.f25611o.f25597y;
        hf.q.d(handler);
        this.f25609m = null;
    }

    public final void E() {
        Handler handler;
        hf.h0 h0Var;
        Context context;
        handler = this.f25611o.f25597y;
        hf.q.d(handler);
        if (!this.f25600d.a() && !this.f25600d.d()) {
            try {
                e eVar = this.f25611o;
                h0Var = eVar.f25590r;
                context = eVar.f25588p;
                int b10 = h0Var.b(context, this.f25600d);
                if (b10 != 0) {
                    com.google.android.gms.common.b bVar = new com.google.android.gms.common.b(b10, null);
                    String name = this.f25600d.getClass().getName();
                    String obj = bVar.toString();
                    Log.w("GoogleApiManager", "The service for " + name + " is not available: " + obj);
                    H(bVar, null);
                    return;
                }
                e eVar2 = this.f25611o;
                a.f fVar = this.f25600d;
                i0 i0Var = new i0(eVar2, fVar, this.f25601e);
                if (fVar.h()) {
                    ((u0) hf.q.l(this.f25606j)).Z0(i0Var);
                }
                try {
                    this.f25600d.b(i0Var);
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
        handler = this.f25611o.f25597y;
        hf.q.d(handler);
        if (this.f25600d.a()) {
            if (p(b1Var)) {
                m();
                return;
            } else {
                this.f25599c.add(b1Var);
                return;
            }
        }
        this.f25599c.add(b1Var);
        com.google.android.gms.common.b bVar = this.f25609m;
        if (bVar != null && bVar.f()) {
            H(this.f25609m, null);
        } else {
            E();
        }
    }

    public final void G() {
        this.f25610n++;
    }

    public final void H(com.google.android.gms.common.b bVar, Exception exc) {
        Handler handler;
        hf.h0 h0Var;
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
        handler = this.f25611o.f25597y;
        hf.q.d(handler);
        u0 u0Var = this.f25606j;
        if (u0Var != null) {
            u0Var.a1();
        }
        D();
        h0Var = this.f25611o.f25590r;
        h0Var.c();
        d(bVar);
        if ((this.f25600d instanceof kf.e) && bVar.c() != 24) {
            this.f25611o.f25585e = true;
            e eVar = this.f25611o;
            handler5 = eVar.f25597y;
            handler6 = eVar.f25597y;
            handler5.sendMessageDelayed(handler6.obtainMessage(19), LogThrottleSingleton.RATE_LIMIT_FIVE_MINUTES);
        }
        if (bVar.c() == 4) {
            status = e.B;
            g(status);
        } else if (this.f25599c.isEmpty()) {
            this.f25609m = bVar;
        } else if (exc != null) {
            handler4 = this.f25611o.f25597y;
            hf.q.d(handler4);
            h(null, exc, false);
        } else {
            z10 = this.f25611o.f25598z;
            if (z10) {
                g11 = e.g(this.f25601e, bVar);
                h(g11, null, true);
                if (!this.f25599c.isEmpty() && !q(bVar) && !this.f25611o.f(bVar, this.f25605i)) {
                    if (bVar.c() == 18) {
                        this.f25607k = true;
                    }
                    if (!this.f25607k) {
                        g12 = e.g(this.f25601e, bVar);
                        g(g12);
                        return;
                    }
                    e eVar2 = this.f25611o;
                    b bVar2 = this.f25601e;
                    handler2 = eVar2.f25597y;
                    handler3 = eVar2.f25597y;
                    handler2.sendMessageDelayed(Message.obtain(handler3, 9, bVar2), 5000L);
                    return;
                }
                return;
            }
            g10 = e.g(this.f25601e, bVar);
            g(g10);
        }
    }

    public final void I(com.google.android.gms.common.b bVar) {
        Handler handler;
        handler = this.f25611o.f25597y;
        hf.q.d(handler);
        a.f fVar = this.f25600d;
        String name = fVar.getClass().getName();
        String valueOf = String.valueOf(bVar);
        fVar.c("onSignInFailed for " + name + " with " + valueOf);
        H(bVar, null);
    }

    public final void J() {
        Handler handler;
        handler = this.f25611o.f25597y;
        hf.q.d(handler);
        if (this.f25607k) {
            E();
        }
    }

    public final void K() {
        Handler handler;
        handler = this.f25611o.f25597y;
        hf.q.d(handler);
        g(e.A);
        this.f25602f.f();
        for (i iVar : (i[]) this.f25604h.keySet().toArray(new i[0])) {
            F(new a1(iVar, new zg.k()));
        }
        d(new com.google.android.gms.common.b(4));
        if (this.f25600d.a()) {
            this.f25600d.g(new d0(this));
        }
    }

    public final void L() {
        Handler handler;
        com.google.android.gms.common.f fVar;
        Context context;
        Status status;
        handler = this.f25611o.f25597y;
        hf.q.d(handler);
        if (this.f25607k) {
            o();
            e eVar = this.f25611o;
            fVar = eVar.f25589q;
            context = eVar.f25588p;
            if (fVar.g(context) == 18) {
                status = new Status(21, "Connection timed out waiting for Google Play services update to complete.");
            } else {
                status = new Status(22, "API failed to connect while resuming due to an unknown error.");
            }
            g(status);
            this.f25600d.c("Timing out connection while resuming.");
        }
    }

    public final boolean a() {
        return this.f25600d.h();
    }

    public final boolean b() {
        return r(true);
    }

    @Override // gf.d
    public final void e(Bundle bundle) {
        Handler handler;
        Handler handler2;
        e eVar = this.f25611o;
        Looper myLooper = Looper.myLooper();
        handler = eVar.f25597y;
        if (myLooper != handler.getLooper()) {
            handler2 = this.f25611o.f25597y;
            handler2.post(new a0(this));
            return;
        }
        k();
    }

    @Override // gf.d
    public final void f(int i10) {
        Handler handler;
        Handler handler2;
        e eVar = this.f25611o;
        Looper myLooper = Looper.myLooper();
        handler = eVar.f25597y;
        if (myLooper != handler.getLooper()) {
            handler2 = this.f25611o.f25597y;
            handler2.post(new b0(this, i10));
            return;
        }
        l(i10);
    }

    @Override // gf.k
    public final void i(com.google.android.gms.common.b bVar) {
        H(bVar, null);
    }

    public final int s() {
        return this.f25605i;
    }

    public final int t() {
        return this.f25610n;
    }

    public final a.f v() {
        return this.f25600d;
    }

    public final Map x() {
        return this.f25604h;
    }
}
