package qi;

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
import ti.n;
import ti.w;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class e {

    /* renamed from: k  reason: collision with root package name */
    private static final Object f47921k = new Object();

    /* renamed from: l  reason: collision with root package name */
    static final Map f47922l = new u0.a();

    /* renamed from: a  reason: collision with root package name */
    private final Context f47923a;

    /* renamed from: b  reason: collision with root package name */
    private final String f47924b;

    /* renamed from: c  reason: collision with root package name */
    private final k f47925c;

    /* renamed from: d  reason: collision with root package name */
    private final n f47926d;

    /* renamed from: g  reason: collision with root package name */
    private final w f47929g;

    /* renamed from: h  reason: collision with root package name */
    private final ej.b f47930h;

    /* renamed from: e  reason: collision with root package name */
    private final AtomicBoolean f47927e = new AtomicBoolean(false);

    /* renamed from: f  reason: collision with root package name */
    private final AtomicBoolean f47928f = new AtomicBoolean();

    /* renamed from: i  reason: collision with root package name */
    private final List f47931i = new CopyOnWriteArrayList();

    /* renamed from: j  reason: collision with root package name */
    private final List f47932j = new CopyOnWriteArrayList();

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public interface a {
        void a(boolean z10);
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static class b implements c.a {

        /* renamed from: a  reason: collision with root package name */
        private static AtomicReference f47933a = new AtomicReference();

        private b() {
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static void c(Context context) {
            if (com.google.android.gms.common.util.k.a() && (context.getApplicationContext() instanceof Application)) {
                Application application = (Application) context.getApplicationContext();
                if (f47933a.get() == null) {
                    b bVar = new b();
                    if (p0.d.a(f47933a, null, bVar)) {
                        ff.c.c(application);
                        ff.c.b().a(bVar);
                    }
                }
            }
        }

        @Override // ff.c.a
        public void a(boolean z10) {
            synchronized (e.f47921k) {
                try {
                    Iterator it = new ArrayList(e.f47922l.values()).iterator();
                    while (it.hasNext()) {
                        e eVar = (e) it.next();
                        if (eVar.f47927e.get()) {
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
        private static AtomicReference f47934b = new AtomicReference();

        /* renamed from: a  reason: collision with root package name */
        private final Context f47935a;

        public c(Context context) {
            this.f47935a = context;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static void b(Context context) {
            if (f47934b.get() == null) {
                c cVar = new c(context);
                if (p0.d.a(f47934b, null, cVar)) {
                    context.registerReceiver(cVar, new IntentFilter("android.intent.action.USER_UNLOCKED"));
                }
            }
        }

        public void c() {
            this.f47935a.unregisterReceiver(this);
        }

        @Override // android.content.BroadcastReceiver
        public void onReceive(Context context, Intent intent) {
            synchronized (e.f47921k) {
                try {
                    for (e eVar : e.f47922l.values()) {
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
        this.f47923a = (Context) q.l(context);
        this.f47924b = q.f(str);
        this.f47925c = (k) q.l(kVar);
        l b10 = FirebaseInitProvider.b();
        nj.c.b("Firebase");
        nj.c.b("ComponentDiscovery");
        List b11 = ti.f.c(context, ComponentDiscoveryService.class).b();
        nj.c.a();
        nj.c.b("Runtime");
        n.b f10 = n.k(ui.k.INSTANCE).d(b11).c(new FirebaseCommonRegistrar()).c(new ExecutorsRegistrar()).b(ti.c.q(context, Context.class, new Class[0])).b(ti.c.q(this, e.class, new Class[0])).b(ti.c.q(kVar, k.class, new Class[0])).f(new nj.b());
        if (w1.j.a(context) && FirebaseInitProvider.c()) {
            f10.b(ti.c.q(b10, l.class, new Class[0]));
        }
        n e10 = f10.e();
        this.f47926d = e10;
        nj.c.a();
        this.f47929g = new w(new ej.b() { // from class: qi.c
            @Override // ej.b
            public final Object get() {
                return e.b(e.this, context);
            }
        });
        this.f47930h = e10.e(cj.f.class);
        g(new a() { // from class: qi.d
            @Override // qi.e.a
            public final void a(boolean z10) {
                e.a(e.this, z10);
            }
        });
        nj.c.a();
    }

    public static /* synthetic */ void a(e eVar, boolean z10) {
        if (!z10) {
            ((cj.f) eVar.f47930h.get()).h();
        } else {
            eVar.getClass();
        }
    }

    public static /* synthetic */ jj.a b(e eVar, Context context) {
        return new jj.a(context, eVar.n(), (bj.c) eVar.f47926d.a(bj.c.class));
    }

    private void h() {
        q.o(!this.f47928f.get(), "FirebaseApp was deleted");
    }

    public static e k() {
        e eVar;
        synchronized (f47921k) {
            try {
                eVar = (e) f47922l.get("[DEFAULT]");
                if (eVar != null) {
                    ((cj.f) eVar.f47930h.get()).h();
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
        if (!w1.j.a(this.f47923a)) {
            Log.i("FirebaseApp", "Device in Direct Boot Mode: postponing initialization of Firebase APIs for app " + l());
            c.b(this.f47923a);
            return;
        }
        Log.i("FirebaseApp", "Device unlocked: initializing all Firebase APIs for app " + l());
        this.f47926d.n(t());
        ((cj.f) this.f47930h.get()).h();
    }

    public static e p(Context context) {
        synchronized (f47921k) {
            try {
                if (f47922l.containsKey("[DEFAULT]")) {
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
        synchronized (f47921k) {
            Map map = f47922l;
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
        for (a aVar : this.f47931i) {
            aVar.a(z10);
        }
    }

    public boolean equals(Object obj) {
        if (!(obj instanceof e)) {
            return false;
        }
        return this.f47924b.equals(((e) obj).l());
    }

    public void g(a aVar) {
        h();
        if (this.f47927e.get() && ff.c.b().d()) {
            aVar.a(true);
        }
        this.f47931i.add(aVar);
    }

    public int hashCode() {
        return this.f47924b.hashCode();
    }

    public Object i(Class cls) {
        h();
        return this.f47926d.a(cls);
    }

    public Context j() {
        h();
        return this.f47923a;
    }

    public String l() {
        h();
        return this.f47924b;
    }

    public k m() {
        h();
        return this.f47925c;
    }

    public String n() {
        return com.google.android.gms.common.util.c.b(l().getBytes(Charset.defaultCharset())) + "+" + com.google.android.gms.common.util.c.b(m().c().getBytes(Charset.defaultCharset()));
    }

    public boolean s() {
        h();
        return ((jj.a) this.f47929g.get()).b();
    }

    public boolean t() {
        return "[DEFAULT]".equals(l());
    }

    public String toString() {
        return o.c(this).a(StackTraceHelper.NAME_KEY, this.f47924b).a("options", this.f47925c).toString();
    }
}
