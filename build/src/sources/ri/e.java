package ri;

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
import ff.c;
import gf.o;
import gf.q;
import java.nio.charset.Charset;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.concurrent.CopyOnWriteArrayList;
import java.util.concurrent.atomic.AtomicBoolean;
import java.util.concurrent.atomic.AtomicReference;
import ui.n;
import ui.w;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class e {

    /* renamed from: k  reason: collision with root package name */
    private static final Object f48944k = new Object();

    /* renamed from: l  reason: collision with root package name */
    static final Map f48945l = new u0.a();

    /* renamed from: a  reason: collision with root package name */
    private final Context f48946a;

    /* renamed from: b  reason: collision with root package name */
    private final String f48947b;

    /* renamed from: c  reason: collision with root package name */
    private final k f48948c;

    /* renamed from: d  reason: collision with root package name */
    private final n f48949d;

    /* renamed from: g  reason: collision with root package name */
    private final w f48952g;

    /* renamed from: h  reason: collision with root package name */
    private final fj.b f48953h;

    /* renamed from: e  reason: collision with root package name */
    private final AtomicBoolean f48950e = new AtomicBoolean(false);

    /* renamed from: f  reason: collision with root package name */
    private final AtomicBoolean f48951f = new AtomicBoolean();

    /* renamed from: i  reason: collision with root package name */
    private final List f48954i = new CopyOnWriteArrayList();

    /* renamed from: j  reason: collision with root package name */
    private final List f48955j = new CopyOnWriteArrayList();

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public interface a {
        void a(boolean z10);
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static class b implements c.a {

        /* renamed from: a  reason: collision with root package name */
        private static AtomicReference f48956a = new AtomicReference();

        private b() {
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static void c(Context context) {
            if (com.google.android.gms.common.util.k.a() && (context.getApplicationContext() instanceof Application)) {
                Application application = (Application) context.getApplicationContext();
                if (f48956a.get() == null) {
                    b bVar = new b();
                    if (p0.d.a(f48956a, null, bVar)) {
                        ff.c.c(application);
                        ff.c.b().a(bVar);
                    }
                }
            }
        }

        @Override // ff.c.a
        public void a(boolean z10) {
            synchronized (e.f48944k) {
                try {
                    Iterator it = new ArrayList(e.f48945l.values()).iterator();
                    while (it.hasNext()) {
                        e eVar = (e) it.next();
                        if (eVar.f48950e.get()) {
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
        private static AtomicReference f48957b = new AtomicReference();

        /* renamed from: a  reason: collision with root package name */
        private final Context f48958a;

        public c(Context context) {
            this.f48958a = context;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static void b(Context context) {
            if (f48957b.get() == null) {
                c cVar = new c(context);
                if (p0.d.a(f48957b, null, cVar)) {
                    context.registerReceiver(cVar, new IntentFilter("android.intent.action.USER_UNLOCKED"));
                }
            }
        }

        public void c() {
            this.f48958a.unregisterReceiver(this);
        }

        @Override // android.content.BroadcastReceiver
        public void onReceive(Context context, Intent intent) {
            synchronized (e.f48944k) {
                try {
                    for (e eVar : e.f48945l.values()) {
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
        this.f48946a = (Context) q.l(context);
        this.f48947b = q.f(str);
        this.f48948c = (k) q.l(kVar);
        l b10 = FirebaseInitProvider.b();
        oj.c.b("Firebase");
        oj.c.b("ComponentDiscovery");
        List b11 = ui.f.c(context, ComponentDiscoveryService.class).b();
        oj.c.a();
        oj.c.b("Runtime");
        n.b f10 = n.k(vi.k.INSTANCE).d(b11).c(new FirebaseCommonRegistrar()).c(new ExecutorsRegistrar()).b(ui.c.q(context, Context.class, new Class[0])).b(ui.c.q(this, e.class, new Class[0])).b(ui.c.q(kVar, k.class, new Class[0])).f(new oj.b());
        if (w1.j.a(context) && FirebaseInitProvider.c()) {
            f10.b(ui.c.q(b10, l.class, new Class[0]));
        }
        n e10 = f10.e();
        this.f48949d = e10;
        oj.c.a();
        this.f48952g = new w(new fj.b() { // from class: ri.c
            @Override // fj.b
            public final Object get() {
                return e.b(e.this, context);
            }
        });
        this.f48953h = e10.g(dj.f.class);
        g(new a() { // from class: ri.d
            @Override // ri.e.a
            public final void a(boolean z10) {
                e.a(e.this, z10);
            }
        });
        oj.c.a();
    }

    public static /* synthetic */ void a(e eVar, boolean z10) {
        if (!z10) {
            ((dj.f) eVar.f48953h.get()).h();
        } else {
            eVar.getClass();
        }
    }

    public static /* synthetic */ kj.a b(e eVar, Context context) {
        return new kj.a(context, eVar.n(), (cj.c) eVar.f48949d.a(cj.c.class));
    }

    private void h() {
        q.o(!this.f48951f.get(), "FirebaseApp was deleted");
    }

    public static e k() {
        e eVar;
        synchronized (f48944k) {
            try {
                eVar = (e) f48945l.get("[DEFAULT]");
                if (eVar != null) {
                    ((dj.f) eVar.f48953h.get()).h();
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
        if (!w1.j.a(this.f48946a)) {
            Log.i("FirebaseApp", "Device in Direct Boot Mode: postponing initialization of Firebase APIs for app " + l());
            c.b(this.f48946a);
            return;
        }
        Log.i("FirebaseApp", "Device unlocked: initializing all Firebase APIs for app " + l());
        this.f48949d.n(t());
        ((dj.f) this.f48953h.get()).h();
    }

    public static e p(Context context) {
        synchronized (f48944k) {
            try {
                if (f48945l.containsKey("[DEFAULT]")) {
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
        synchronized (f48944k) {
            Map map = f48945l;
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
        for (a aVar : this.f48954i) {
            aVar.a(z10);
        }
    }

    public boolean equals(Object obj) {
        if (!(obj instanceof e)) {
            return false;
        }
        return this.f48947b.equals(((e) obj).l());
    }

    public void g(a aVar) {
        h();
        if (this.f48950e.get() && ff.c.b().d()) {
            aVar.a(true);
        }
        this.f48954i.add(aVar);
    }

    public int hashCode() {
        return this.f48947b.hashCode();
    }

    public Object i(Class cls) {
        h();
        return this.f48949d.a(cls);
    }

    public Context j() {
        h();
        return this.f48946a;
    }

    public String l() {
        h();
        return this.f48947b;
    }

    public k m() {
        h();
        return this.f48948c;
    }

    public String n() {
        return com.google.android.gms.common.util.c.b(l().getBytes(Charset.defaultCharset())) + "+" + com.google.android.gms.common.util.c.b(m().c().getBytes(Charset.defaultCharset()));
    }

    public boolean s() {
        h();
        return ((kj.a) this.f48952g.get()).b();
    }

    public boolean t() {
        return "[DEFAULT]".equals(l());
    }

    public String toString() {
        return o.c(this).a(StackTraceHelper.NAME_KEY, this.f48947b).a("options", this.f48948c).toString();
    }
}
