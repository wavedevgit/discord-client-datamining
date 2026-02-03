package gf;

import android.accounts.Account;
import android.content.Context;
import android.os.Build;
import android.os.Bundle;
import android.os.DeadObjectException;
import android.os.Handler;
import android.os.IBinder;
import android.os.IInterface;
import android.os.Looper;
import android.os.RemoteException;
import android.text.TextUtils;
import android.util.Log;
import com.google.android.gms.common.api.Scope;
import java.util.ArrayList;
import java.util.Set;
import java.util.concurrent.Executor;
import java.util.concurrent.atomic.AtomicInteger;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class c {
    protected InterfaceC0338c A;
    private IInterface B;
    private c1 D;
    private final a F;
    private final b G;
    private final int H;
    private final String I;
    private volatile String J;

    /* renamed from: d  reason: collision with root package name */
    private int f26057d;

    /* renamed from: e  reason: collision with root package name */
    private long f26058e;

    /* renamed from: i  reason: collision with root package name */
    private long f26059i;

    /* renamed from: o  reason: collision with root package name */
    private int f26060o;

    /* renamed from: p  reason: collision with root package name */
    private long f26061p;

    /* renamed from: r  reason: collision with root package name */
    q1 f26063r;

    /* renamed from: s  reason: collision with root package name */
    private final Context f26064s;

    /* renamed from: t  reason: collision with root package name */
    private final Looper f26065t;

    /* renamed from: u  reason: collision with root package name */
    private final h f26066u;

    /* renamed from: v  reason: collision with root package name */
    private final com.google.android.gms.common.g f26067v;

    /* renamed from: w  reason: collision with root package name */
    final Handler f26068w;

    /* renamed from: z  reason: collision with root package name */
    private l f26071z;
    private static final com.google.android.gms.common.d[] P = new com.google.android.gms.common.d[0];
    public static final String[] O = {"service_esmobile", "service_googleme"};

    /* renamed from: q  reason: collision with root package name */
    private volatile String f26062q = null;

    /* renamed from: x  reason: collision with root package name */
    private final Object f26069x = new Object();

    /* renamed from: y  reason: collision with root package name */
    private final Object f26070y = new Object();
    private final ArrayList C = new ArrayList();
    private int E = 1;
    private com.google.android.gms.common.b K = null;
    private boolean L = false;
    private volatile f1 M = null;
    protected AtomicInteger N = new AtomicInteger(0);

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public interface a {
        void e(Bundle bundle);

        void f(int i10);
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public interface b {
        void h(com.google.android.gms.common.b bVar);
    }

    /* renamed from: gf.c$c  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public interface InterfaceC0338c {
        void a(com.google.android.gms.common.b bVar);
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    protected class d implements InterfaceC0338c {
        public d() {
        }

        @Override // gf.c.InterfaceC0338c
        public final void a(com.google.android.gms.common.b bVar) {
            if (bVar.f()) {
                c cVar = c.this;
                cVar.j(null, cVar.B());
            } else if (c.this.G != null) {
                c.this.G.h(bVar);
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public interface e {
        void a();
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public c(Context context, Looper looper, h hVar, com.google.android.gms.common.g gVar, int i10, a aVar, b bVar, String str) {
        q.m(context, "Context must not be null");
        this.f26064s = context;
        q.m(looper, "Looper must not be null");
        this.f26065t = looper;
        q.m(hVar, "Supervisor must not be null");
        this.f26066u = hVar;
        q.m(gVar, "API availability must not be null");
        this.f26067v = gVar;
        this.f26068w = new z0(this, looper);
        this.H = i10;
        this.F = aVar;
        this.G = bVar;
        this.I = str;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static /* bridge */ /* synthetic */ void a0(c cVar, f1 f1Var) {
        s g10;
        cVar.M = f1Var;
        if (cVar.Q()) {
            gf.e eVar = f1Var.f26123o;
            r b10 = r.b();
            if (eVar == null) {
                g10 = null;
            } else {
                g10 = eVar.g();
            }
            b10.c(g10);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static /* bridge */ /* synthetic */ void b0(c cVar, int i10) {
        int i11;
        int i12;
        synchronized (cVar.f26069x) {
            i11 = cVar.E;
        }
        if (i11 == 3) {
            cVar.L = true;
            i12 = 5;
        } else {
            i12 = 4;
        }
        Handler handler = cVar.f26068w;
        handler.sendMessage(handler.obtainMessage(i12, cVar.N.get(), 16));
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static /* bridge */ /* synthetic */ boolean e0(c cVar, int i10, int i11, IInterface iInterface) {
        synchronized (cVar.f26069x) {
            try {
                if (cVar.E != i10) {
                    return false;
                }
                cVar.g0(i11, iInterface);
                return true;
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static /* bridge */ /* synthetic */ boolean f0(c cVar) {
        if (cVar.L || TextUtils.isEmpty(cVar.D()) || TextUtils.isEmpty(cVar.A())) {
            return false;
        }
        try {
            Class.forName(cVar.D());
            return true;
        } catch (ClassNotFoundException unused) {
            return false;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final void g0(int i10, IInterface iInterface) {
        boolean z10;
        boolean z11;
        q1 q1Var;
        int b10;
        q1 q1Var2;
        boolean z12 = false;
        if (i10 != 4) {
            z10 = false;
        } else {
            z10 = true;
        }
        if (iInterface == null) {
            z11 = false;
        } else {
            z11 = true;
        }
        if (z10 == z11) {
            z12 = true;
        }
        q.a(z12);
        synchronized (this.f26069x) {
            try {
                this.E = i10;
                this.B = iInterface;
                Bundle bundle = null;
                if (i10 != 1) {
                    if (i10 != 2 && i10 != 3) {
                        if (i10 == 4) {
                            q.l(iInterface);
                            J(iInterface);
                        }
                    } else {
                        c1 c1Var = this.D;
                        if (c1Var != null && (q1Var2 = this.f26063r) != null) {
                            Log.e("GmsClient", "Calling connect() while still connected, missing disconnect() for " + q1Var2.b() + " on " + q1Var2.a());
                            h hVar = this.f26066u;
                            String b11 = this.f26063r.b();
                            q.l(b11);
                            hVar.e(b11, this.f26063r.a(), 4225, c1Var, V(), this.f26063r.c());
                            this.N.incrementAndGet();
                        }
                        c1 c1Var2 = new c1(this, this.N.get());
                        this.D = c1Var2;
                        if (this.E == 3 && A() != null) {
                            q1Var = new q1(x().getPackageName(), A(), true, 4225, false);
                        } else {
                            q1Var = new q1(F(), E(), false, 4225, H());
                        }
                        this.f26063r = q1Var;
                        if (q1Var.c() && n() < 17895000) {
                            throw new IllegalStateException("Internal Error, the minimum apk version of this BaseGmsClient is too low to support dynamic lookup. Start service action: ".concat(String.valueOf(this.f26063r.b())));
                        }
                        h hVar2 = this.f26066u;
                        String b12 = this.f26063r.b();
                        q.l(b12);
                        com.google.android.gms.common.b c10 = hVar2.c(new j1(b12, this.f26063r.a(), 4225, this.f26063r.c()), c1Var2, V(), v());
                        if (!c10.f()) {
                            Log.w("GmsClient", "unable to connect to service: " + this.f26063r.b() + " on " + this.f26063r.a());
                            if (c10.b() == -1) {
                                b10 = 16;
                            } else {
                                b10 = c10.b();
                            }
                            if (c10.d() != null) {
                                bundle = new Bundle();
                                bundle.putParcelable("pendingIntent", c10.d());
                            }
                            c0(b10, bundle, this.N.get());
                        }
                    }
                } else {
                    c1 c1Var3 = this.D;
                    if (c1Var3 != null) {
                        h hVar3 = this.f26066u;
                        String b13 = this.f26063r.b();
                        q.l(b13);
                        hVar3.e(b13, this.f26063r.a(), 4225, c1Var3, V(), this.f26063r.c());
                        this.D = null;
                    }
                }
            } finally {
            }
        }
    }

    protected String A() {
        return null;
    }

    protected abstract Set B();

    public final IInterface C() {
        IInterface iInterface;
        synchronized (this.f26069x) {
            try {
                if (this.E != 5) {
                    q();
                    IInterface iInterface2 = this.B;
                    q.m(iInterface2, "Client is connected but service is null");
                    iInterface = iInterface2;
                } else {
                    throw new DeadObjectException();
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
        return iInterface;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public abstract String D();

    protected abstract String E();

    protected String F() {
        return "com.google.android.gms";
    }

    public gf.e G() {
        f1 f1Var = this.M;
        if (f1Var == null) {
            return null;
        }
        return f1Var.f26123o;
    }

    protected boolean H() {
        if (n() >= 211700000) {
            return true;
        }
        return false;
    }

    public boolean I() {
        if (this.M != null) {
            return true;
        }
        return false;
    }

    protected void J(IInterface iInterface) {
        this.f26059i = System.currentTimeMillis();
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public void K(com.google.android.gms.common.b bVar) {
        this.f26060o = bVar.b();
        this.f26061p = System.currentTimeMillis();
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public void L(int i10) {
        this.f26057d = i10;
        this.f26058e = System.currentTimeMillis();
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public void M(int i10, IBinder iBinder, Bundle bundle, int i11) {
        this.f26068w.sendMessage(this.f26068w.obtainMessage(1, i11, -1, new d1(this, i10, iBinder, bundle)));
    }

    public boolean N() {
        return false;
    }

    public void O(String str) {
        this.J = str;
    }

    public void P(int i10) {
        this.f26068w.sendMessage(this.f26068w.obtainMessage(6, this.N.get(), i10));
    }

    public boolean Q() {
        return false;
    }

    protected final String V() {
        String str = this.I;
        if (str == null) {
            return this.f26064s.getClass().getName();
        }
        return str;
    }

    public boolean a() {
        boolean z10;
        synchronized (this.f26069x) {
            if (this.E == 4) {
                z10 = true;
            } else {
                z10 = false;
            }
        }
        return z10;
    }

    public void b(String str) {
        this.f26062q = str;
        k();
    }

    public boolean c() {
        boolean z10;
        synchronized (this.f26069x) {
            int i10 = this.E;
            z10 = true;
            if (i10 != 2 && i10 != 3) {
                z10 = false;
            }
        }
        return z10;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final void c0(int i10, Bundle bundle, int i11) {
        this.f26068w.sendMessage(this.f26068w.obtainMessage(7, i11, -1, new e1(this, i10, bundle)));
    }

    public String d() {
        q1 q1Var;
        if (a() && (q1Var = this.f26063r) != null) {
            return q1Var.a();
        }
        throw new RuntimeException("Failed to connect when checking package");
    }

    public void e(InterfaceC0338c interfaceC0338c) {
        q.m(interfaceC0338c, "Connection progress callbacks cannot be null.");
        this.A = interfaceC0338c;
        g0(2, null);
    }

    public boolean f() {
        return true;
    }

    public boolean g() {
        return false;
    }

    public void j(j jVar, Set set) {
        String str;
        Bundle z10 = z();
        if (Build.VERSION.SDK_INT < 31) {
            str = this.J;
        } else {
            str = this.J;
        }
        String str2 = str;
        int i10 = this.H;
        int i11 = com.google.android.gms.common.g.f13414a;
        Scope[] scopeArr = f.f26104z;
        Bundle bundle = new Bundle();
        com.google.android.gms.common.d[] dVarArr = f.A;
        f fVar = new f(6, i10, i11, null, null, scopeArr, bundle, null, dVarArr, dVarArr, true, 0, false, str2);
        fVar.f26108o = this.f26064s.getPackageName();
        fVar.f26111r = z10;
        if (set != null) {
            fVar.f26110q = (Scope[]) set.toArray(new Scope[0]);
        }
        if (g()) {
            Account t10 = t();
            if (t10 == null) {
                t10 = new Account("<<default account>>", "com.google");
            }
            fVar.f26112s = t10;
            if (jVar != null) {
                fVar.f26109p = jVar.asBinder();
            }
        } else if (N()) {
            fVar.f26112s = t();
        }
        fVar.f26113t = P;
        fVar.f26114u = u();
        if (Q()) {
            fVar.f26117x = true;
        }
        try {
            synchronized (this.f26070y) {
                try {
                    l lVar = this.f26071z;
                    if (lVar != null) {
                        lVar.G0(new b1(this, this.N.get()), fVar);
                    } else {
                        Log.w("GmsClient", "mServiceBroker is null, client disconnected");
                    }
                } finally {
                }
            }
        } catch (DeadObjectException e10) {
            Log.w("GmsClient", "IGmsServiceBroker.getService failed", e10);
            P(3);
        } catch (RemoteException e11) {
            e = e11;
            Log.w("GmsClient", "IGmsServiceBroker.getService failed", e);
            M(8, null, null, this.N.get());
        } catch (SecurityException e12) {
            throw e12;
        } catch (RuntimeException e13) {
            e = e13;
            Log.w("GmsClient", "IGmsServiceBroker.getService failed", e);
            M(8, null, null, this.N.get());
        }
    }

    public void k() {
        this.N.incrementAndGet();
        synchronized (this.C) {
            try {
                int size = this.C.size();
                for (int i10 = 0; i10 < size; i10++) {
                    ((a1) this.C.get(i10)).d();
                }
                this.C.clear();
            } catch (Throwable th2) {
                throw th2;
            }
        }
        synchronized (this.f26070y) {
            this.f26071z = null;
        }
        g0(1, null);
    }

    public void l(e eVar) {
        eVar.a();
    }

    public abstract int n();

    public final com.google.android.gms.common.d[] o() {
        f1 f1Var = this.M;
        if (f1Var == null) {
            return null;
        }
        return f1Var.f26121e;
    }

    public String p() {
        return this.f26062q;
    }

    protected final void q() {
        if (a()) {
            return;
        }
        throw new IllegalStateException("Not connected. Call connect() and wait for onConnected() to be called.");
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public abstract IInterface r(IBinder iBinder);

    /* JADX INFO: Access modifiers changed from: protected */
    public boolean s() {
        return false;
    }

    public abstract Account t();

    public com.google.android.gms.common.d[] u() {
        return P;
    }

    protected abstract Executor v();

    public Bundle w() {
        return null;
    }

    public final Context x() {
        return this.f26064s;
    }

    public int y() {
        return this.H;
    }

    protected Bundle z() {
        return new Bundle();
    }
}
