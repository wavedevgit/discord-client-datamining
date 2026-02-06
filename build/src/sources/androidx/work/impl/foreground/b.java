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
    static final String f6077v = m.i("SystemFgDispatcher");

    /* renamed from: d  reason: collision with root package name */
    private Context f6078d;

    /* renamed from: e  reason: collision with root package name */
    private p0 f6079e;

    /* renamed from: i  reason: collision with root package name */
    private final r4.b f6080i;

    /* renamed from: o  reason: collision with root package name */
    final Object f6081o = new Object();

    /* renamed from: p  reason: collision with root package name */
    p4.m f6082p;

    /* renamed from: q  reason: collision with root package name */
    final Map f6083q;

    /* renamed from: r  reason: collision with root package name */
    final Map f6084r;

    /* renamed from: s  reason: collision with root package name */
    final Map f6085s;

    /* renamed from: t  reason: collision with root package name */
    final e f6086t;

    /* renamed from: u  reason: collision with root package name */
    private InterfaceC0079b f6087u;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public class a implements Runnable {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ String f6088d;

        a(String str) {
            this.f6088d = str;
        }

        @Override // java.lang.Runnable
        public void run() {
            u g10 = b.this.f6079e.m().g(this.f6088d);
            if (g10 != null && g10.k()) {
                synchronized (b.this.f6081o) {
                    b.this.f6084r.put(x.a(g10), g10);
                    b bVar = b.this;
                    b.this.f6085s.put(x.a(g10), m4.f.b(bVar.f6086t, g10, bVar.f6080i.b(), b.this));
                }
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* renamed from: androidx.work.impl.foreground.b$b  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public interface InterfaceC0079b {
        void a(int i10, Notification notification);

        void c(int i10, int i11, Notification notification);

        void e(int i10);

        void stop();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public b(Context context) {
        this.f6078d = context;
        p0 k10 = p0.k(context);
        this.f6079e = k10;
        this.f6080i = k10.q();
        this.f6082p = null;
        this.f6083q = new LinkedHashMap();
        this.f6085s = new HashMap();
        this.f6084r = new HashMap();
        this.f6086t = new e(this.f6079e.o());
        this.f6079e.m().e(this);
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
        String str = f6077v;
        e10.f(str, "Stopping foreground work for " + intent);
        String stringExtra = intent.getStringExtra("KEY_WORKSPEC_ID");
        if (stringExtra != null && !TextUtils.isEmpty(stringExtra)) {
            this.f6079e.g(UUID.fromString(stringExtra));
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
        String str = f6077v;
        e10.a(str, "Notifying with (id:" + intExtra + ", workSpecId: " + stringExtra + ", notificationType :" + intExtra2 + ")");
        if (notification != null && this.f6087u != null) {
            this.f6083q.put(mVar, new g(intExtra, notification, intExtra2));
            if (this.f6082p == null) {
                this.f6082p = mVar;
                this.f6087u.c(intExtra, intExtra2, notification);
                return;
            }
            this.f6087u.a(intExtra, notification);
            if (intExtra2 != 0 && Build.VERSION.SDK_INT >= 29) {
                for (Map.Entry entry : this.f6083q.entrySet()) {
                    i10 |= ((g) entry.getValue()).a();
                }
                g gVar = (g) this.f6083q.get(this.f6082p);
                if (gVar != null) {
                    this.f6087u.c(gVar.c(), i10, gVar.b());
                }
            }
        }
    }

    private void j(Intent intent) {
        m e10 = m.e();
        String str = f6077v;
        e10.f(str, "Started foreground service " + intent);
        this.f6080i.d(new a(intent.getStringExtra("KEY_WORKSPEC_ID")));
    }

    @Override // m4.d
    public void a(u uVar, m4.b bVar) {
        if (bVar instanceof b.C0497b) {
            String str = uVar.f43685a;
            m e10 = m.e();
            String str2 = f6077v;
            e10.a(str2, "Constraints unmet for WorkSpec " + str);
            this.f6079e.u(x.a(uVar));
        }
    }

    @Override // androidx.work.impl.f
    public void b(p4.m mVar, boolean z10) {
        Job job;
        Map.Entry entry;
        synchronized (this.f6081o) {
            try {
                if (((u) this.f6084r.remove(mVar)) != null) {
                    job = (Job) this.f6085s.remove(mVar);
                } else {
                    job = null;
                }
                if (job != null) {
                    job.k(null);
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
        g gVar = (g) this.f6083q.remove(mVar);
        if (mVar.equals(this.f6082p)) {
            if (this.f6083q.size() > 0) {
                Iterator it = this.f6083q.entrySet().iterator();
                Object next = it.next();
                while (true) {
                    entry = (Map.Entry) next;
                    if (!it.hasNext()) {
                        break;
                    }
                    next = it.next();
                }
                this.f6082p = (p4.m) entry.getKey();
                if (this.f6087u != null) {
                    g gVar2 = (g) entry.getValue();
                    this.f6087u.c(gVar2.c(), gVar2.a(), gVar2.b());
                    this.f6087u.e(gVar2.c());
                }
            } else {
                this.f6082p = null;
            }
        }
        InterfaceC0079b interfaceC0079b = this.f6087u;
        if (gVar != null && interfaceC0079b != null) {
            m.e().a(f6077v, "Removing Notification (id: " + gVar.c() + ", workSpecId: " + mVar + ", notificationType: " + gVar.a());
            interfaceC0079b.e(gVar.c());
        }
    }

    void k(Intent intent) {
        m.e().f(f6077v, "Stopping foreground service");
        InterfaceC0079b interfaceC0079b = this.f6087u;
        if (interfaceC0079b != null) {
            interfaceC0079b.stop();
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void l() {
        this.f6087u = null;
        synchronized (this.f6081o) {
            try {
                for (Job job : this.f6085s.values()) {
                    job.k(null);
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
        this.f6079e.m().m(this);
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
    public void n(InterfaceC0079b interfaceC0079b) {
        if (this.f6087u != null) {
            m.e().c(f6077v, "A callback already exists.");
        } else {
            this.f6087u = interfaceC0079b;
        }
    }
}
