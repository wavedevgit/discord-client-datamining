package hf;

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
import java.util.Objects;
import java.util.Set;
import java.util.concurrent.Executor;
import java.util.concurrent.atomic.AtomicInteger;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class c {
    protected InterfaceC0382c A;
    private IInterface B;
    private a1 D;
    private final a F;
    private final b G;
    private final int H;
    private final String I;
    private volatile String J;

    /* renamed from: d  reason: collision with root package name */
    private int f25967d;

    /* renamed from: e  reason: collision with root package name */
    private long f25968e;

    /* renamed from: i  reason: collision with root package name */
    private long f25969i;

    /* renamed from: o  reason: collision with root package name */
    private int f25970o;

    /* renamed from: p  reason: collision with root package name */
    private long f25971p;

    /* renamed from: r  reason: collision with root package name */
    m1 f25973r;

    /* renamed from: s  reason: collision with root package name */
    private final Context f25974s;

    /* renamed from: t  reason: collision with root package name */
    private final Looper f25975t;

    /* renamed from: u  reason: collision with root package name */
    private final h f25976u;

    /* renamed from: v  reason: collision with root package name */
    private final com.google.android.gms.common.g f25977v;

    /* renamed from: w  reason: collision with root package name */
    final Handler f25978w;

    /* renamed from: z  reason: collision with root package name */
    private l f25981z;
    private static final com.google.android.gms.common.d[] P = new com.google.android.gms.common.d[0];
    public static final String[] O = {"service_esmobile", "service_googleme"};

    /* renamed from: q  reason: collision with root package name */
    private volatile String f25972q = null;

    /* renamed from: x  reason: collision with root package name */
    private final Object f25979x = new Object();

    /* renamed from: y  reason: collision with root package name */
    private final Object f25980y = new Object();
    private final ArrayList C = new ArrayList();
    private int E = 1;
    private com.google.android.gms.common.b K = null;
    private boolean L = false;
    private volatile d1 M = null;
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

    /* renamed from: hf.c$c  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public interface InterfaceC0382c {
        void a(com.google.android.gms.common.b bVar);
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    protected class d implements InterfaceC0382c {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ c f25982a;

        public d(c cVar) {
            Objects.requireNonNull(cVar);
            this.f25982a = cVar;
        }

        @Override // hf.c.InterfaceC0382c
        public final void a(com.google.android.gms.common.b bVar) {
            if (bVar.h()) {
                c cVar = this.f25982a;
                cVar.m(null, cVar.B());
                return;
            }
            c cVar2 = this.f25982a;
            if (cVar2.c0() != null) {
                cVar2.c0().h(bVar);
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
        this.f25974s = context;
        q.m(looper, "Looper must not be null");
        this.f25975t = looper;
        q.m(hVar, "Supervisor must not be null");
        this.f25976u = hVar;
        q.m(gVar, "API availability must not be null");
        this.f25977v = gVar;
        this.f25978w = new x0(this, looper);
        this.H = i10;
        this.F = aVar;
        this.G = bVar;
        this.I = str;
    }

    private final void g0(int i10, IInterface iInterface) {
        boolean z10;
        boolean z11;
        m1 m1Var;
        int c10;
        m1 m1Var2;
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
        synchronized (this.f25979x) {
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
                        a1 a1Var = this.D;
                        if (a1Var != null && (m1Var2 = this.f25973r) != null) {
                            String a10 = m1Var2.a();
                            String b10 = m1Var2.b();
                            StringBuilder sb2 = new StringBuilder(String.valueOf(a10).length() + 70 + String.valueOf(b10).length());
                            sb2.append("Calling connect() while still connected, missing disconnect() for ");
                            sb2.append(a10);
                            sb2.append(" on ");
                            sb2.append(b10);
                            Log.e("GmsClient", sb2.toString());
                            h hVar = this.f25976u;
                            String a11 = this.f25973r.a();
                            q.l(a11);
                            hVar.d(a11, this.f25973r.b(), 4225, a1Var, R(), this.f25973r.c());
                            this.N.incrementAndGet();
                        }
                        a1 a1Var2 = new a1(this, this.N.get());
                        this.D = a1Var2;
                        if (this.E == 3 && A() != null) {
                            m1Var = new m1(x().getPackageName(), A(), true, 4225, false);
                        } else {
                            m1Var = new m1(F(), E(), false, 4225, H());
                        }
                        this.f25973r = m1Var;
                        if (m1Var.c() && n() < 17895000) {
                            throw new IllegalStateException("Internal Error, the minimum apk version of this BaseGmsClient is too low to support dynamic lookup. Start service action: ".concat(String.valueOf(this.f25973r.a())));
                        }
                        h hVar2 = this.f25976u;
                        String a12 = this.f25973r.a();
                        q.l(a12);
                        com.google.android.gms.common.b c11 = hVar2.c(new h1(a12, this.f25973r.b(), 4225, this.f25973r.c()), a1Var2, R(), v());
                        if (!c11.h()) {
                            String a13 = this.f25973r.a();
                            String b11 = this.f25973r.b();
                            StringBuilder sb3 = new StringBuilder(String.valueOf(a13).length() + 34 + String.valueOf(b11).length());
                            sb3.append("unable to connect to service: ");
                            sb3.append(a13);
                            sb3.append(" on ");
                            sb3.append(b11);
                            Log.w("GmsClient", sb3.toString());
                            if (c11.c() == -1) {
                                c10 = 16;
                            } else {
                                c10 = c11.c();
                            }
                            if (c11.e() != null) {
                                bundle = new Bundle();
                                bundle.putParcelable("pendingIntent", c11.e());
                            }
                            S(c10, bundle, this.N.get());
                        }
                    }
                } else {
                    a1 a1Var3 = this.D;
                    if (a1Var3 != null) {
                        h hVar3 = this.f25976u;
                        String a14 = this.f25973r.a();
                        q.l(a14);
                        hVar3.d(a14, this.f25973r.b(), 4225, a1Var3, R(), this.f25973r.c());
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
        synchronized (this.f25979x) {
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

    public hf.e G() {
        d1 d1Var = this.M;
        if (d1Var == null) {
            return null;
        }
        return d1Var.f26007o;
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
        this.f25969i = System.currentTimeMillis();
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public void K(com.google.android.gms.common.b bVar) {
        this.f25970o = bVar.c();
        this.f25971p = System.currentTimeMillis();
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public void L(int i10) {
        this.f25967d = i10;
        this.f25968e = System.currentTimeMillis();
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public void M(int i10, IBinder iBinder, Bundle bundle, int i11) {
        b1 b1Var = new b1(this, i10, iBinder, bundle);
        Handler handler = this.f25978w;
        handler.sendMessage(handler.obtainMessage(1, i11, -1, b1Var));
    }

    public boolean N() {
        return false;
    }

    public void O(String str) {
        this.J = str;
    }

    public void P(int i10) {
        int i11 = this.N.get();
        Handler handler = this.f25978w;
        handler.sendMessage(handler.obtainMessage(6, i11, i10));
    }

    public boolean Q() {
        return false;
    }

    protected final String R() {
        String str = this.I;
        if (str == null) {
            return this.f25974s.getClass().getName();
        }
        return str;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final void S(int i10, Bundle bundle, int i11) {
        c1 c1Var = new c1(this, i10, bundle);
        Handler handler = this.f25978w;
        handler.sendMessage(handler.obtainMessage(7, i11, -1, c1Var));
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final /* synthetic */ void T(d1 d1Var) {
        s h10;
        this.M = d1Var;
        if (Q()) {
            hf.e eVar = d1Var.f26007o;
            r b10 = r.b();
            if (eVar == null) {
                h10 = null;
            } else {
                h10 = eVar.h();
            }
            b10.c(h10);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final /* synthetic */ void U(int i10, IInterface iInterface) {
        g0(i10, null);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final /* synthetic */ boolean V(int i10, int i11, IInterface iInterface) {
        synchronized (this.f25979x) {
            try {
                if (this.E != i10) {
                    return false;
                }
                g0(i11, iInterface);
                return true;
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final /* synthetic */ void W(int i10) {
        int i11;
        int i12;
        synchronized (this.f25979x) {
            i11 = this.E;
        }
        if (i11 == 3) {
            this.L = true;
            i12 = 5;
        } else {
            i12 = 4;
        }
        Handler handler = this.f25978w;
        handler.sendMessage(handler.obtainMessage(i12, this.N.get(), 16));
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final /* synthetic */ boolean X() {
        if (this.L || TextUtils.isEmpty(D()) || TextUtils.isEmpty(A())) {
            return false;
        }
        try {
            Class.forName(D());
            return true;
        } catch (ClassNotFoundException unused) {
            return false;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final /* synthetic */ Object Y() {
        return this.f25980y;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final /* synthetic */ void Z(l lVar) {
        this.f25981z = lVar;
    }

    public boolean a() {
        boolean z10;
        synchronized (this.f25979x) {
            if (this.E == 4) {
                z10 = true;
            } else {
                z10 = false;
            }
        }
        return z10;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final /* synthetic */ ArrayList a0() {
        return this.C;
    }

    public void b(InterfaceC0382c interfaceC0382c) {
        q.m(interfaceC0382c, "Connection progress callbacks cannot be null.");
        this.A = interfaceC0382c;
        g0(2, null);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final /* synthetic */ a b0() {
        return this.F;
    }

    public void c(String str) {
        this.f25972q = str;
        l();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final /* synthetic */ b c0() {
        return this.G;
    }

    public boolean d() {
        boolean z10;
        synchronized (this.f25979x) {
            int i10 = this.E;
            z10 = true;
            if (i10 != 2 && i10 != 3) {
                z10 = false;
            }
        }
        return z10;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final /* synthetic */ com.google.android.gms.common.b d0() {
        return this.K;
    }

    public String e() {
        m1 m1Var;
        if (a() && (m1Var = this.f25973r) != null) {
            return m1Var.b();
        }
        throw new RuntimeException("Failed to connect when checking package");
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final /* synthetic */ void e0(com.google.android.gms.common.b bVar) {
        this.K = bVar;
    }

    public boolean f() {
        return true;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final /* synthetic */ boolean f0() {
        return this.L;
    }

    public void g(e eVar) {
        eVar.a();
    }

    public boolean h() {
        return false;
    }

    public void l() {
        this.N.incrementAndGet();
        ArrayList arrayList = this.C;
        synchronized (arrayList) {
            try {
                int size = arrayList.size();
                for (int i10 = 0; i10 < size; i10++) {
                    ((y0) arrayList.get(i10)).d();
                }
                arrayList.clear();
            } catch (Throwable th2) {
                throw th2;
            }
        }
        synchronized (this.f25980y) {
            this.f25981z = null;
        }
        g0(1, null);
    }

    public void m(j jVar, Set set) {
        String str;
        Bundle z10 = z();
        if (Build.VERSION.SDK_INT < 31) {
            str = this.J;
        } else {
            str = this.J;
        }
        String str2 = str;
        int i10 = this.H;
        int i11 = com.google.android.gms.common.g.f13915a;
        Scope[] scopeArr = f.f26014z;
        Bundle bundle = new Bundle();
        com.google.android.gms.common.d[] dVarArr = f.A;
        f fVar = new f(6, i10, i11, null, null, scopeArr, bundle, null, dVarArr, dVarArr, true, 0, false, str2);
        fVar.f26018o = this.f25974s.getPackageName();
        fVar.f26021r = z10;
        if (set != null) {
            fVar.f26020q = (Scope[]) set.toArray(new Scope[0]);
        }
        if (h()) {
            Account t10 = t();
            if (t10 == null) {
                t10 = new Account("<<default account>>", "com.google");
            }
            fVar.f26022s = t10;
            if (jVar != null) {
                fVar.f26019p = jVar.asBinder();
            }
        } else if (N()) {
            fVar.f26022s = t();
        }
        fVar.f26023t = P;
        fVar.f26024u = u();
        if (Q()) {
            fVar.f26027x = true;
        }
        try {
            synchronized (this.f25980y) {
                try {
                    l lVar = this.f25981z;
                    if (lVar != null) {
                        lVar.S(new z0(this, this.N.get()), fVar);
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

    public abstract int n();

    public final com.google.android.gms.common.d[] o() {
        d1 d1Var = this.M;
        if (d1Var == null) {
            return null;
        }
        return d1Var.f26005e;
    }

    public String p() {
        return this.f25972q;
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
        return this.f25974s;
    }

    public int y() {
        return this.H;
    }

    protected Bundle z() {
        return new Bundle();
    }
}
