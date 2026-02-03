package ni;

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
import qi.n;
import qi.w;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class e {

    /* renamed from: k  reason: collision with root package name */
    private static final Object f41861k = new Object();

    /* renamed from: l  reason: collision with root package name */
    static final Map f41862l = new u0.a();

    /* renamed from: a  reason: collision with root package name */
    private final Context f41863a;

    /* renamed from: b  reason: collision with root package name */
    private final String f41864b;

    /* renamed from: c  reason: collision with root package name */
    private final k f41865c;

    /* renamed from: d  reason: collision with root package name */
    private final n f41866d;

    /* renamed from: g  reason: collision with root package name */
    private final w f41869g;

    /* renamed from: h  reason: collision with root package name */
    private final bj.b f41870h;

    /* renamed from: e  reason: collision with root package name */
    private final AtomicBoolean f41867e = new AtomicBoolean(false);

    /* renamed from: f  reason: collision with root package name */
    private final AtomicBoolean f41868f = new AtomicBoolean();

    /* renamed from: i  reason: collision with root package name */
    private final List f41871i = new CopyOnWriteArrayList();

    /* renamed from: j  reason: collision with root package name */
    private final List f41872j = new CopyOnWriteArrayList();

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public interface a {
        void a(boolean z10);
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static class b implements c.a {

        /* renamed from: a  reason: collision with root package name */
        private static AtomicReference f41873a = new AtomicReference();

        private b() {
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static void c(Context context) {
            if (com.google.android.gms.common.util.k.a() && (context.getApplicationContext() instanceof Application)) {
                Application application = (Application) context.getApplicationContext();
                if (f41873a.get() == null) {
                    b bVar = new b();
                    if (p0.d.a(f41873a, null, bVar)) {
                        ff.c.c(application);
                        ff.c.b().a(bVar);
                    }
                }
            }
        }

        @Override // ff.c.a
        public void a(boolean z10) {
            synchronized (e.f41861k) {
                try {
                    Iterator it = new ArrayList(e.f41862l.values()).iterator();
                    while (it.hasNext()) {
                        e eVar = (e) it.next();
                        if (eVar.f41867e.get()) {
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
        private static AtomicReference f41874b = new AtomicReference();

        /* renamed from: a  reason: collision with root package name */
        private final Context f41875a;

        public c(Context context) {
            this.f41875a = context;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static void b(Context context) {
            if (f41874b.get() == null) {
                c cVar = new c(context);
                if (p0.d.a(f41874b, null, cVar)) {
                    context.registerReceiver(cVar, new IntentFilter("android.intent.action.USER_UNLOCKED"));
                }
            }
        }

        public void c() {
            this.f41875a.unregisterReceiver(this);
        }

        @Override // android.content.BroadcastReceiver
        public void onReceive(Context context, Intent intent) {
            synchronized (e.f41861k) {
                try {
                    for (e eVar : e.f41862l.values()) {
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
        this.f41863a = (Context) q.l(context);
        this.f41864b = q.f(str);
        this.f41865c = (k) q.l(kVar);
        l b10 = FirebaseInitProvider.b();
        kj.c.b("Firebase");
        kj.c.b("ComponentDiscovery");
        List b11 = qi.f.c(context, ComponentDiscoveryService.class).b();
        kj.c.a();
        kj.c.b("Runtime");
        n.b f10 = n.k(ri.k.INSTANCE).d(b11).c(new FirebaseCommonRegistrar()).c(new ExecutorsRegistrar()).b(qi.c.q(context, Context.class, new Class[0])).b(qi.c.q(this, e.class, new Class[0])).b(qi.c.q(kVar, k.class, new Class[0])).f(new kj.b());
        if (w1.j.a(context) && FirebaseInitProvider.c()) {
            f10.b(qi.c.q(b10, l.class, new Class[0]));
        }
        n e10 = f10.e();
        this.f41866d = e10;
        kj.c.a();
        this.f41869g = new w(new bj.b() { // from class: ni.c
            @Override // bj.b
            public final Object get() {
                return e.b(e.this, context);
            }
        });
        this.f41870h = e10.c(zi.f.class);
        g(new a() { // from class: ni.d
            @Override // ni.e.a
            public final void a(boolean z10) {
                e.a(e.this, z10);
            }
        });
        kj.c.a();
    }

    public static /* synthetic */ void a(e eVar, boolean z10) {
        if (!z10) {
            ((zi.f) eVar.f41870h.get()).h();
        } else {
            eVar.getClass();
        }
    }

    public static /* synthetic */ gj.a b(e eVar, Context context) {
        return new gj.a(context, eVar.n(), (yi.c) eVar.f41866d.a(yi.c.class));
    }

    private void h() {
        q.o(!this.f41868f.get(), "FirebaseApp was deleted");
    }

    public static e k() {
        e eVar;
        synchronized (f41861k) {
            try {
                eVar = (e) f41862l.get("[DEFAULT]");
                if (eVar != null) {
                    ((zi.f) eVar.f41870h.get()).h();
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
        if (!w1.j.a(this.f41863a)) {
            Log.i("FirebaseApp", "Device in Direct Boot Mode: postponing initialization of Firebase APIs for app " + l());
            c.b(this.f41863a);
            return;
        }
        Log.i("FirebaseApp", "Device unlocked: initializing all Firebase APIs for app " + l());
        this.f41866d.n(t());
        ((zi.f) this.f41870h.get()).h();
    }

    public static e p(Context context) {
        synchronized (f41861k) {
            try {
                if (f41862l.containsKey("[DEFAULT]")) {
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
        synchronized (f41861k) {
            Map map = f41862l;
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
        for (a aVar : this.f41871i) {
            aVar.a(z10);
        }
    }

    public boolean equals(Object obj) {
        if (!(obj instanceof e)) {
            return false;
        }
        return this.f41864b.equals(((e) obj).l());
    }

    public void g(a aVar) {
        h();
        if (this.f41867e.get() && ff.c.b().d()) {
            aVar.a(true);
        }
        this.f41871i.add(aVar);
    }

    public int hashCode() {
        return this.f41864b.hashCode();
    }

    public Object i(Class cls) {
        h();
        return this.f41866d.a(cls);
    }

    public Context j() {
        h();
        return this.f41863a;
    }

    public String l() {
        h();
        return this.f41864b;
    }

    public k m() {
        h();
        return this.f41865c;
    }

    public String n() {
        return com.google.android.gms.common.util.c.b(l().getBytes(Charset.defaultCharset())) + "+" + com.google.android.gms.common.util.c.b(m().c().getBytes(Charset.defaultCharset()));
    }

    public boolean s() {
        h();
        return ((gj.a) this.f41869g.get()).b();
    }

    public boolean t() {
        return "[DEFAULT]".equals(l());
    }

    public String toString() {
        return o.c(this).a(StackTraceHelper.NAME_KEY, this.f41864b).a("options", this.f41865c).toString();
    }
}
