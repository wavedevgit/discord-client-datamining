package androidx.work.impl.foreground;

import android.app.Notification;
import android.content.Context;
import android.content.Intent;
import android.os.Build;
import android.text.TextUtils;
import androidx.work.impl.f;
import androidx.work.impl.p0;
import java.util.HashMap;
import java.util.Iterator;
import java.util.LinkedHashMap;
import java.util.Map;
import java.util.UUID;
import k4.g;
import k4.m;
import kotlinx.coroutines.Job;
import m4.b;
import m4.d;
import m4.e;
import p4.u;
import p4.x;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class b implements d, f {

    /* renamed from: v  reason: collision with root package name */
    static final String f5784v = m.i("SystemFgDispatcher");

    /* renamed from: d  reason: collision with root package name */
    private Context f5785d;

    /* renamed from: e  reason: collision with root package name */
    private p0 f5786e;

    /* renamed from: i  reason: collision with root package name */
    private final r4.b f5787i;

    /* renamed from: o  reason: collision with root package name */
    final Object f5788o = new Object();

    /* renamed from: p  reason: collision with root package name */
    p4.m f5789p;

    /* renamed from: q  reason: collision with root package name */
    final Map f5790q;

    /* renamed from: r  reason: collision with root package name */
    final Map f5791r;

    /* renamed from: s  reason: collision with root package name */
    final Map f5792s;

    /* renamed from: t  reason: collision with root package name */
    final e f5793t;

    /* renamed from: u  reason: collision with root package name */
    private InterfaceC0077b f5794u;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public class a implements Runnable {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ String f5795d;

        a(String str) {
            this.f5795d = str;
        }

        @Override // java.lang.Runnable
        public void run() {
            u g10 = b.this.f5786e.m().g(this.f5795d);
            if (g10 != null && g10.k()) {
                synchronized (b.this.f5788o) {
                    b.this.f5791r.put(x.a(g10), g10);
                    b bVar = b.this;
                    b.this.f5792s.put(x.a(g10), m4.f.b(bVar.f5793t, g10, bVar.f5787i.b(), b.this));
                }
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* renamed from: androidx.work.impl.foreground.b$b  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public interface InterfaceC0077b {
        void a(int i10, Notification notification);

        void c(int i10, int i11, Notification notification);

        void d(int i10);

        void stop();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public b(Context context) {
        this.f5785d = context;
        p0 k10 = p0.k(context);
        this.f5786e = k10;
        this.f5787i = k10.q();
        this.f5789p = null;
        this.f5790q = new LinkedHashMap();
        this.f5792s = new HashMap();
        this.f5791r = new HashMap();
        this.f5793t = new e(this.f5786e.o());
        this.f5786e.m().e(this);
    }

    public static Intent e(Context context, p4.m mVar, g gVar) {
        Intent intent = new Intent(context, SystemForegroundService.class);
        intent.setAction("ACTION_NOTIFY");
        intent.putExtra("KEY_NOTIFICATION_ID", gVar.c());
        intent.putExtra("KEY_FOREGROUND_SERVICE_TYPE", gVar.a());
        intent.putExtra("KEY_NOTIFICATION", gVar.b());
        intent.putExtra("KEY_WORKSPEC_ID", mVar.b());
        intent.putExtra("KEY_GENERATION", mVar.a());
        return intent;
    }

    public static Intent f(Context context, p4.m mVar, g gVar) {
        Intent intent = new Intent(context, SystemForegroundService.class);
        intent.setAction("ACTION_START_FOREGROUND");
        intent.putExtra("KEY_WORKSPEC_ID", mVar.b());
        intent.putExtra("KEY_GENERATION", mVar.a());
        intent.putExtra("KEY_NOTIFICATION_ID", gVar.c());
        intent.putExtra("KEY_FOREGROUND_SERVICE_TYPE", gVar.a());
        intent.putExtra("KEY_NOTIFICATION", gVar.b());
        return intent;
    }

    public static Intent g(Context context) {
        Intent intent = new Intent(context, SystemForegroundService.class);
        intent.setAction("ACTION_STOP_FOREGROUND");
        return intent;
    }

    private void h(Intent intent) {
        m e10 = m.e();
        String str = f5784v;
        e10.f(str, "Stopping foreground work for " + intent);
        String stringExtra = intent.getStringExtra("KEY_WORKSPEC_ID");
        if (stringExtra != null && !TextUtils.isEmpty(stringExtra)) {
            this.f5786e.g(UUID.fromString(stringExtra));
        }
    }

    private void i(Intent intent) {
        int i10 = 0;
        int intExtra = intent.getIntExtra("KEY_NOTIFICATION_ID", 0);
        int intExtra2 = intent.getIntExtra("KEY_FOREGROUND_SERVICE_TYPE", 0);
        String stringExtra = intent.getStringExtra("KEY_WORKSPEC_ID");
        p4.m mVar = new p4.m(stringExtra, intent.getIntExtra("KEY_GENERATION", 0));
        Notification notification = (Notification) intent.getParcelableExtra("KEY_NOTIFICATION");
        m e10 = m.e();
        String str = f5784v;
        e10.a(str, "Notifying with (id:" + intExtra + ", workSpecId: " + stringExtra + ", notificationType :" + intExtra2 + ")");
        if (notification != null && this.f5794u != null) {
            this.f5790q.put(mVar, new g(intExtra, notification, intExtra2));
            if (this.f5789p == null) {
                this.f5789p = mVar;
                this.f5794u.c(intExtra, intExtra2, notification);
                return;
            }
            this.f5794u.a(intExtra, notification);
            if (intExtra2 != 0 && Build.VERSION.SDK_INT >= 29) {
                for (Map.Entry entry : this.f5790q.entrySet()) {
                    i10 |= ((g) entry.getValue()).a();
                }
                g gVar = (g) this.f5790q.get(this.f5789p);
                if (gVar != null) {
                    this.f5794u.c(gVar.c(), i10, gVar.b());
                }
            }
        }
    }

    private void j(Intent intent) {
        m e10 = m.e();
        String str = f5784v;
        e10.f(str, "Started foreground service " + intent);
        this.f5787i.d(new a(intent.getStringExtra("KEY_WORKSPEC_ID")));
    }

    @Override // m4.d
    public void a(u uVar, m4.b bVar) {
        if (bVar instanceof b.C0511b) {
            String str = uVar.f42015a;
            m e10 = m.e();
            String str2 = f5784v;
            e10.a(str2, "Constraints unmet for WorkSpec " + str);
            this.f5786e.u(x.a(uVar));
        }
    }

    @Override // androidx.work.impl.f
    public void b(p4.m mVar, boolean z10) {
        Job job;
        Map.Entry entry;
        synchronized (this.f5788o) {
            try {
                if (((u) this.f5791r.remove(mVar)) != null) {
                    job = (Job) this.f5792s.remove(mVar);
                } else {
                    job = null;
                }
                if (job != null) {
                    job.i(null);
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
        g gVar = (g) this.f5790q.remove(mVar);
        if (mVar.equals(this.f5789p)) {
            if (this.f5790q.size() > 0) {
                Iterator it = this.f5790q.entrySet().iterator();
                Object next = it.next();
                while (true) {
                    entry = (Map.Entry) next;
                    if (!it.hasNext()) {
                        break;
                    }
                    next = it.next();
                }
                this.f5789p = (p4.m) entry.getKey();
                if (this.f5794u != null) {
                    g gVar2 = (g) entry.getValue();
                    this.f5794u.c(gVar2.c(), gVar2.a(), gVar2.b());
                    this.f5794u.d(gVar2.c());
                }
            } else {
                this.f5789p = null;
            }
        }
        InterfaceC0077b interfaceC0077b = this.f5794u;
        if (gVar != null && interfaceC0077b != null) {
            m.e().a(f5784v, "Removing Notification (id: " + gVar.c() + ", workSpecId: " + mVar + ", notificationType: " + gVar.a());
            interfaceC0077b.d(gVar.c());
        }
    }

    void k(Intent intent) {
        m.e().f(f5784v, "Stopping foreground service");
        InterfaceC0077b interfaceC0077b = this.f5794u;
        if (interfaceC0077b != null) {
            interfaceC0077b.stop();
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void l() {
        this.f5794u = null;
        synchronized (this.f5788o) {
            try {
                for (Job job : this.f5792s.values()) {
                    job.i(null);
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
        this.f5786e.m().m(this);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void m(Intent intent) {
        String action = intent.getAction();
        if ("ACTION_START_FOREGROUND".equals(action)) {
            j(intent);
            i(intent);
        } else if ("ACTION_NOTIFY".equals(action)) {
            i(intent);
        } else if ("ACTION_CANCEL_WORK".equals(action)) {
            h(intent);
        } else if ("ACTION_STOP_FOREGROUND".equals(action)) {
            k(intent);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void n(InterfaceC0077b interfaceC0077b) {
        if (this.f5794u != null) {
            m.e().c(f5784v, "A callback already exists.");
        } else {
            this.f5794u = interfaceC0077b;
        }
    }
}
