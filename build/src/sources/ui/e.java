package ui;

import android.app.Application;
import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.content.IntentFilter;
import android.util.Log;
import com.facebook.react.devsupport.StackTraceHelper;
import com.google.firebase.FirebaseCommonRegistrar;
import com.google.firebase.components.ComponentDiscoveryService;
import com.google.firebase.concurrent.ExecutorsRegistrar;
import com.google.firebase.provider.FirebaseInitProvider;
import gf.c;
import hf.o;
import hf.q;
import java.nio.charset.Charset;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.concurrent.CopyOnWriteArrayList;
import java.util.concurrent.atomic.AtomicBoolean;
import java.util.concurrent.atomic.AtomicReference;
import xi.n;
import xi.w;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class e {

    /* renamed from: k  reason: collision with root package name */
    private static final Object f50752k = new Object();

    /* renamed from: l  reason: collision with root package name */
    static final Map f50753l = new u0.a();

    /* renamed from: a  reason: collision with root package name */
    private final Context f50754a;

    /* renamed from: b  reason: collision with root package name */
    private final String f50755b;

    /* renamed from: c  reason: collision with root package name */
    private final k f50756c;

    /* renamed from: d  reason: collision with root package name */
    private final n f50757d;

    /* renamed from: g  reason: collision with root package name */
    private final w f50760g;

    /* renamed from: h  reason: collision with root package name */
    private final ij.b f50761h;

    /* renamed from: e  reason: collision with root package name */
    private final AtomicBoolean f50758e = new AtomicBoolean(false);

    /* renamed from: f  reason: collision with root package name */
    private final AtomicBoolean f50759f = new AtomicBoolean();

    /* renamed from: i  reason: collision with root package name */
    private final List f50762i = new CopyOnWriteArrayList();

    /* renamed from: j  reason: collision with root package name */
    private final List f50763j = new CopyOnWriteArrayList();

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public interface a {
        void a(boolean z10);
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static class b implements c.a {

        /* renamed from: a  reason: collision with root package name */
        private static AtomicReference f50764a = new AtomicReference();

        private b() {
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static void c(Context context) {
            if (com.google.android.gms.common.util.k.a() && (context.getApplicationContext() instanceof Application)) {
                Application application = (Application) context.getApplicationContext();
                if (f50764a.get() == null) {
                    b bVar = new b();
                    if (p0.d.a(f50764a, null, bVar)) {
                        gf.c.c(application);
                        gf.c.b().a(bVar);
                    }
                }
            }
        }

        @Override // gf.c.a
        public void a(boolean z10) {
            synchronized (e.f50752k) {
                try {
                    Iterator it = new ArrayList(e.f50753l.values()).iterator();
                    while (it.hasNext()) {
                        e eVar = (e) it.next();
                        if (eVar.f50758e.get()) {
                            eVar.v(z10);
                        }
                    }
                } catch (Throwable th2) {
                    throw th2;
                }
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static class c extends BroadcastReceiver {

        /* renamed from: b  reason: collision with root package name */
        private static AtomicReference f50765b = new AtomicReference();

        /* renamed from: a  reason: collision with root package name */
        private final Context f50766a;

        public c(Context context) {
            this.f50766a = context;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static void b(Context context) {
            if (f50765b.get() == null) {
                c cVar = new c(context);
                if (p0.d.a(f50765b, null, cVar)) {
                    context.registerReceiver(cVar, new IntentFilter("android.intent.action.USER_UNLOCKED"));
                }
            }
        }

        public void c() {
            this.f50766a.unregisterReceiver(this);
        }

        @Override // android.content.BroadcastReceiver
        public void onReceive(Context context, Intent intent) {
            synchronized (e.f50752k) {
                try {
                    for (e eVar : e.f50753l.values()) {
                        eVar.o();
                    }
                } catch (Throwable th2) {
                    throw th2;
                }
            }
            c();
        }
    }

    protected e(final Context context, String str, k kVar) {
        this.f50754a = (Context) q.l(context);
        this.f50755b = q.f(str);
        this.f50756c = (k) q.l(kVar);
        l b10 = FirebaseInitProvider.b();
        rj.c.b("Firebase");
        rj.c.b("ComponentDiscovery");
        List b11 = xi.f.c(context, ComponentDiscoveryService.class).b();
        rj.c.a();
        rj.c.b("Runtime");
        n.b f10 = n.k(yi.k.INSTANCE).d(b11).c(new FirebaseCommonRegistrar()).c(new ExecutorsRegistrar()).b(xi.c.q(context, Context.class, new Class[0])).b(xi.c.q(this, e.class, new Class[0])).b(xi.c.q(kVar, k.class, new Class[0])).f(new rj.b());
        if (w1.j.a(context) && FirebaseInitProvider.c()) {
            f10.b(xi.c.q(b10, l.class, new Class[0]));
        }
        n e10 = f10.e();
        this.f50757d = e10;
        rj.c.a();
        this.f50760g = new w(new ij.b() { // from class: ui.c
            @Override // ij.b
            public final Object get() {
                return e.b(e.this, context);
            }
        });
        this.f50761h = e10.g(gj.f.class);
        g(new a() { // from class: ui.d
            @Override // ui.e.a
            public final void a(boolean z10) {
                e.a(e.this, z10);
            }
        });
        rj.c.a();
    }

    public static /* synthetic */ void a(e eVar, boolean z10) {
        if (!z10) {
            ((gj.f) eVar.f50761h.get()).h();
        } else {
            eVar.getClass();
        }
    }

    public static /* synthetic */ nj.a b(e eVar, Context context) {
        return new nj.a(context, eVar.n(), (fj.c) eVar.f50757d.a(fj.c.class));
    }

    private void h() {
        q.o(!this.f50759f.get(), "FirebaseApp was deleted");
    }

    public static e k() {
        e eVar;
        synchronized (f50752k) {
            try {
                eVar = (e) f50753l.get("[DEFAULT]");
                if (eVar != null) {
                    ((gj.f) eVar.f50761h.get()).h();
                } else {
                    throw new IllegalStateException("Default FirebaseApp is not initialized in this process " + com.google.android.gms.common.util.l.a() + ". Make sure to call FirebaseApp.initializeApp(Context) first.");
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
        return eVar;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void o() {
        if (!w1.j.a(this.f50754a)) {
            Log.i("FirebaseApp", "Device in Direct Boot Mode: postponing initialization of Firebase APIs for app " + l());
            c.b(this.f50754a);
            return;
        }
        Log.i("FirebaseApp", "Device unlocked: initializing all Firebase APIs for app " + l());
        this.f50757d.n(t());
        ((gj.f) this.f50761h.get()).h();
    }

    public static e p(Context context) {
        synchronized (f50752k) {
            try {
                if (f50753l.containsKey("[DEFAULT]")) {
                    return k();
                }
                k a10 = k.a(context);
                if (a10 == null) {
                    Log.w("FirebaseApp", "Default FirebaseApp failed to initialize because no default options were found. This usually means that com.google.gms:google-services was not applied to your gradle project.");
                    return null;
                }
                return q(context, a10);
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    public static e q(Context context, k kVar) {
        return r(context, kVar, "[DEFAULT]");
    }

    public static e r(Context context, k kVar, String str) {
        e eVar;
        b.c(context);
        String u10 = u(str);
        if (context.getApplicationContext() != null) {
            context = context.getApplicationContext();
        }
        synchronized (f50752k) {
            Map map = f50753l;
            q.o(!map.containsKey(u10), "FirebaseApp name " + u10 + " already exists!");
            q.m(context, "Application context cannot be null.");
            eVar = new e(context, u10, kVar);
            map.put(u10, eVar);
        }
        eVar.o();
        return eVar;
    }

    private static String u(String str) {
        return str.trim();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void v(boolean z10) {
        Log.d("FirebaseApp", "Notifying background state change listeners.");
        for (a aVar : this.f50762i) {
            aVar.a(z10);
        }
    }

    public boolean equals(Object obj) {
        if (!(obj instanceof e)) {
            return false;
        }
        return this.f50755b.equals(((e) obj).l());
    }

    public void g(a aVar) {
        h();
        if (this.f50758e.get() && gf.c.b().d()) {
            aVar.a(true);
        }
        this.f50762i.add(aVar);
    }

    public int hashCode() {
        return this.f50755b.hashCode();
    }

    public Object i(Class cls) {
        h();
        return this.f50757d.a(cls);
    }

    public Context j() {
        h();
        return this.f50754a;
    }

    public String l() {
        h();
        return this.f50755b;
    }

    public k m() {
        h();
        return this.f50756c;
    }

    public String n() {
        return com.google.android.gms.common.util.c.b(l().getBytes(Charset.defaultCharset())) + "+" + com.google.android.gms.common.util.c.b(m().c().getBytes(Charset.defaultCharset()));
    }

    public boolean s() {
        h();
        return ((nj.a) this.f50760g.get()).b();
    }

    public boolean t() {
        return "[DEFAULT]".equals(l());
    }

    public String toString() {
        return o.c(this).a(StackTraceHelper.NAME_KEY, this.f50755b).a("options", this.f50756c).toString();
    }
}
