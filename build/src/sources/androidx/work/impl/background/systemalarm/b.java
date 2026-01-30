package androidx.work.impl.background.systemalarm;

import android.content.Context;
import android.content.Intent;
import android.os.Bundle;
import androidx.work.impl.WorkDatabase;
import androidx.work.impl.a0;
import androidx.work.impl.b0;
import androidx.work.impl.background.systemalarm.g;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import k4.m;
import p4.u;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class b implements androidx.work.impl.f {

    /* renamed from: q  reason: collision with root package name */
    private static final String f5531q = m.i("CommandHandler");

    /* renamed from: d  reason: collision with root package name */
    private final Context f5532d;

    /* renamed from: e  reason: collision with root package name */
    private final Map f5533e = new HashMap();

    /* renamed from: i  reason: collision with root package name */
    private final Object f5534i = new Object();

    /* renamed from: o  reason: collision with root package name */
    private final k4.b f5535o;

    /* renamed from: p  reason: collision with root package name */
    private final b0 f5536p;

    /* JADX INFO: Access modifiers changed from: package-private */
    public b(Context context, k4.b bVar, b0 b0Var) {
        this.f5532d = context;
        this.f5535o = bVar;
        this.f5536p = b0Var;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static Intent a(Context context) {
        Intent intent = new Intent(context, SystemAlarmService.class);
        intent.setAction("ACTION_CONSTRAINTS_CHANGED");
        return intent;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static Intent c(Context context, p4.m mVar) {
        Intent intent = new Intent(context, SystemAlarmService.class);
        intent.setAction("ACTION_DELAY_MET");
        return q(intent, mVar);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static Intent d(Context context, p4.m mVar, boolean z10) {
        Intent intent = new Intent(context, SystemAlarmService.class);
        intent.setAction("ACTION_EXECUTION_COMPLETED");
        intent.putExtra("KEY_NEEDS_RESCHEDULE", z10);
        return q(intent, mVar);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static Intent e(Context context, p4.m mVar) {
        Intent intent = new Intent(context, SystemAlarmService.class);
        intent.setAction("ACTION_SCHEDULE_WORK");
        return q(intent, mVar);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static Intent f(Context context, p4.m mVar) {
        Intent intent = new Intent(context, SystemAlarmService.class);
        intent.setAction("ACTION_STOP_WORK");
        return q(intent, mVar);
    }

    private void g(Intent intent, int i10, g gVar) {
        m e10 = m.e();
        String str = f5531q;
        e10.a(str, "Handling constraints changed " + intent);
        new c(this.f5532d, this.f5535o, i10, gVar).a();
    }

    private void h(Intent intent, int i10, g gVar) {
        synchronized (this.f5534i) {
            try {
                p4.m p10 = p(intent);
                m e10 = m.e();
                String str = f5531q;
                e10.a(str, "Handing delay met for " + p10);
                if (!this.f5533e.containsKey(p10)) {
                    f fVar = new f(this.f5532d, i10, gVar, this.f5536p.d(p10));
                    this.f5533e.put(p10, fVar);
                    fVar.f();
                } else {
                    m e11 = m.e();
                    e11.a(str, "WorkSpec " + p10 + " is is already being handled for ACTION_DELAY_MET");
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    private void i(Intent intent, int i10) {
        p4.m p10 = p(intent);
        boolean z10 = intent.getExtras().getBoolean("KEY_NEEDS_RESCHEDULE");
        m e10 = m.e();
        String str = f5531q;
        e10.a(str, "Handling onExecutionCompleted " + intent + ", " + i10);
        b(p10, z10);
    }

    private void j(Intent intent, int i10, g gVar) {
        m e10 = m.e();
        String str = f5531q;
        e10.a(str, "Handling reschedule " + intent + ", " + i10);
        gVar.g().s();
    }

    private void k(Intent intent, int i10, g gVar) {
        p4.m p10 = p(intent);
        m e10 = m.e();
        String str = f5531q;
        e10.a(str, "Handling schedule work for " + p10);
        WorkDatabase p11 = gVar.g().p();
        p11.e();
        try {
            u i11 = p11.H().i(p10.b());
            if (i11 == null) {
                m e11 = m.e();
                e11.k(str, "Skipping scheduling " + p10 + " because it's no longer in the DB");
            } else if (i11.f44927b.d()) {
                m e12 = m.e();
                e12.k(str, "Skipping scheduling " + p10 + "because it is finished.");
            } else {
                long c10 = i11.c();
                if (!i11.k()) {
                    m e13 = m.e();
                    e13.a(str, "Setting up Alarms for " + p10 + "at " + c10);
                    a.c(this.f5532d, p11, p10, c10);
                } else {
                    m e14 = m.e();
                    e14.a(str, "Opportunistically setting an alarm for " + p10 + "at " + c10);
                    a.c(this.f5532d, p11, p10, c10);
                    gVar.f().a().execute(new g.b(gVar, a(this.f5532d), i10));
                }
                p11.A();
            }
        } finally {
            p11.i();
        }
    }

    private void l(Intent intent, g gVar) {
        List<a0> c10;
        Bundle extras = intent.getExtras();
        String string = extras.getString("KEY_WORKSPEC_ID");
        if (extras.containsKey("KEY_WORKSPEC_GENERATION")) {
            int i10 = extras.getInt("KEY_WORKSPEC_GENERATION");
            c10 = new ArrayList(1);
            a0 b10 = this.f5536p.b(new p4.m(string, i10));
            if (b10 != null) {
                c10.add(b10);
            }
        } else {
            c10 = this.f5536p.c(string);
        }
        for (a0 a0Var : c10) {
            m e10 = m.e();
            String str = f5531q;
            e10.a(str, "Handing stopWork work for " + string);
            gVar.i().e(a0Var);
            a.a(this.f5532d, gVar.g().p(), a0Var.a());
            gVar.b(a0Var.a(), false);
        }
    }

    private static boolean m(Bundle bundle, String... strArr) {
        if (bundle == null || bundle.isEmpty()) {
            return false;
        }
        for (String str : strArr) {
            if (bundle.get(str) == null) {
                return false;
            }
        }
        return true;
    }

    static p4.m p(Intent intent) {
        return new p4.m(intent.getStringExtra("KEY_WORKSPEC_ID"), intent.getIntExtra("KEY_WORKSPEC_GENERATION", 0));
    }

    private static Intent q(Intent intent, p4.m mVar) {
        intent.putExtra("KEY_WORKSPEC_ID", mVar.b());
        intent.putExtra("KEY_WORKSPEC_GENERATION", mVar.a());
        return intent;
    }

    @Override // androidx.work.impl.f
    public void b(p4.m mVar, boolean z10) {
        synchronized (this.f5534i) {
            try {
                f fVar = (f) this.f5533e.remove(mVar);
                this.f5536p.b(mVar);
                if (fVar != null) {
                    fVar.g(z10);
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean n() {
        boolean z10;
        synchronized (this.f5534i) {
            z10 = !this.f5533e.isEmpty();
        }
        return z10;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void o(Intent intent, int i10, g gVar) {
        String action = intent.getAction();
        if ("ACTION_CONSTRAINTS_CHANGED".equals(action)) {
            g(intent, i10, gVar);
        } else if ("ACTION_RESCHEDULE".equals(action)) {
            j(intent, i10, gVar);
        } else if (!m(intent.getExtras(), "KEY_WORKSPEC_ID")) {
            m e10 = m.e();
            String str = f5531q;
            e10.c(str, "Invalid request for " + action + " , requires KEY_WORKSPEC_ID .");
        } else if ("ACTION_SCHEDULE_WORK".equals(action)) {
            k(intent, i10, gVar);
        } else if ("ACTION_DELAY_MET".equals(action)) {
            h(intent, i10, gVar);
        } else if ("ACTION_STOP_WORK".equals(action)) {
            l(intent, gVar);
        } else if ("ACTION_EXECUTION_COMPLETED".equals(action)) {
            i(intent, i10);
        } else {
            m e11 = m.e();
            String str2 = f5531q;
            e11.k(str2, "Ignoring intent " + intent);
        }
    }
}
