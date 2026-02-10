package si;

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
import vi.n;
import vi.w;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class e {

    /* renamed from: k  reason: collision with root package name */
    private static final Object f49817k = new Object();

    /* renamed from: l  reason: collision with root package name */
    static final Map f49818l = new u0.a();

    /* renamed from: a  reason: collision with root package name */
    private final Context f49819a;

    /* renamed from: b  reason: collision with root package name */
    private final String f49820b;

    /* renamed from: c  reason: collision with root package name */
    private final k f49821c;

    /* renamed from: d  reason: collision with root package name */
    private final n f49822d;

    /* renamed from: g  reason: collision with root package name */
    private final w f49825g;

    /* renamed from: h  reason: collision with root package name */
    private final gj.b f49826h;

    /* renamed from: e  reason: collision with root package name */
    private final AtomicBoolean f49823e = new AtomicBoolean(false);

    /* renamed from: f  reason: collision with root package name */
    private final AtomicBoolean f49824f = new AtomicBoolean();

    /* renamed from: i  reason: collision with root package name */
    private final List f49827i = new CopyOnWriteArrayList();

    /* renamed from: j  reason: collision with root package name */
    private final List f49828j = new CopyOnWriteArrayList();

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public interface a {
        void a(boolean z10);
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static class b implements c.a {

        /* renamed from: a  reason: collision with root package name */
        private static AtomicReference f49829a = new AtomicReference();

        private b() {
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static void c(Context context) {
            if (com.google.android.gms.common.util.k.a() && (context.getApplicationContext() instanceof Application)) {
                Application application = (Application) context.getApplicationContext();
                if (f49829a.get() == null) {
                    b bVar = new b();
                    if (p0.d.a(f49829a, null, bVar)) {
                        gf.c.c(application);
                        gf.c.b().a(bVar);
                    }
                }
            }
        }

        @Override // gf.c.a
        public void a(boolean z10) {
            synchronized (e.f49817k) {
                try {
                    Iterator it = new ArrayList(e.f49818l.values()).iterator();
                    while (it.hasNext()) {
                        e eVar = (e) it.next();
                        if (eVar.f49823e.get()) {
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
        private static AtomicReference f49830b = new AtomicReference();

        /* renamed from: a  reason: collision with root package name */
        private final Context f49831a;

        public c(Context context) {
            this.f49831a = context;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static void b(Context context) {
            if (f49830b.get() == null) {
                c cVar = new c(context);
                if (p0.d.a(f49830b, null, cVar)) {
                    context.registerReceiver(cVar, new IntentFilter("android.intent.action.USER_UNLOCKED"));
                }
            }
        }

        public void c() {
            this.f49831a.unregisterReceiver(this);
        }

        @Override // android.content.BroadcastReceiver
        public void onReceive(Context context, Intent intent) {
            synchronized (e.f49817k) {
                try {
                    for (e eVar : e.f49818l.values()) {
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
        this.f49819a = (Context) q.l(context);
        this.f49820b = q.f(str);
        this.f49821c = (k) q.l(kVar);
        l b10 = FirebaseInitProvider.b();
        pj.c.b("Firebase");
        pj.c.b("ComponentDiscovery");
        List b11 = vi.f.c(context, ComponentDiscoveryService.class).b();
        pj.c.a();
        pj.c.b("Runtime");
        n.b f10 = n.k(wi.k.INSTANCE).d(b11).c(new FirebaseCommonRegistrar()).c(new ExecutorsRegistrar()).b(vi.c.q(context, Context.class, new Class[0])).b(vi.c.q(this, e.class, new Class[0])).b(vi.c.q(kVar, k.class, new Class[0])).f(new pj.b());
        if (w1.j.a(context) && FirebaseInitProvider.c()) {
            f10.b(vi.c.q(b10, l.class, new Class[0]));
        }
        n e10 = f10.e();
        this.f49822d = e10;
        pj.c.a();
        this.f49825g = new w(new gj.b() { // from class: si.c
            @Override // gj.b
            public final Object get() {
                return e.b(e.this, context);
            }
        });
        this.f49826h = e10.e(ej.f.class);
        g(new a() { // from class: si.d
            @Override // si.e.a
            public final void a(boolean z10) {
                e.a(e.this, z10);
            }
        });
        pj.c.a();
    }

    public static /* synthetic */ void a(e eVar, boolean z10) {
        if (!z10) {
            ((ej.f) eVar.f49826h.get()).h();
        } else {
            eVar.getClass();
        }
    }

    public static /* synthetic */ lj.a b(e eVar, Context context) {
        return new lj.a(context, eVar.n(), (dj.c) eVar.f49822d.a(dj.c.class));
    }

    private void h() {
        q.o(!this.f49824f.get(), "FirebaseApp was deleted");
    }

    public static e k() {
        e eVar;
        synchronized (f49817k) {
            try {
                eVar = (e) f49818l.get("[DEFAULT]");
                if (eVar != null) {
                    ((ej.f) eVar.f49826h.get()).h();
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
        if (!w1.j.a(this.f49819a)) {
            Log.i("FirebaseApp", "Device in Direct Boot Mode: postponing initialization of Firebase APIs for app " + l());
            c.b(this.f49819a);
            return;
        }
        Log.i("FirebaseApp", "Device unlocked: initializing all Firebase APIs for app " + l());
        this.f49822d.n(t());
        ((ej.f) this.f49826h.get()).h();
    }

    public static e p(Context context) {
        synchronized (f49817k) {
            try {
                if (f49818l.containsKey("[DEFAULT]")) {
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
        synchronized (f49817k) {
            Map map = f49818l;
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
        for (a aVar : this.f49827i) {
            aVar.a(z10);
        }
    }

    public boolean equals(Object obj) {
        if (!(obj instanceof e)) {
            return false;
        }
        return this.f49820b.equals(((e) obj).l());
    }

    public void g(a aVar) {
        h();
        if (this.f49823e.get() && gf.c.b().d()) {
            aVar.a(true);
        }
        this.f49827i.add(aVar);
    }

    public int hashCode() {
        return this.f49820b.hashCode();
    }

    public Object i(Class cls) {
        h();
        return this.f49822d.a(cls);
    }

    public Context j() {
        h();
        return this.f49819a;
    }

    public String l() {
        h();
        return this.f49820b;
    }

    public k m() {
        h();
        return this.f49821c;
    }

    public String n() {
        return com.google.android.gms.common.util.c.b(l().getBytes(Charset.defaultCharset())) + "+" + com.google.android.gms.common.util.c.b(m().c().getBytes(Charset.defaultCharset()));
    }

    public boolean s() {
        h();
        return ((lj.a) this.f49825g.get()).b();
    }

    public boolean t() {
        return "[DEFAULT]".equals(l());
    }

    public String toString() {
        return o.c(this).a(StackTraceHelper.NAME_KEY, this.f49820b).a("options", this.f49821c).toString();
    }
}
