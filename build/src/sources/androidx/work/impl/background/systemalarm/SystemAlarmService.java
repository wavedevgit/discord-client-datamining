package androidx.work.impl.background.systemalarm;

import android.content.Intent;
import androidx.lifecycle.s;
import androidx.work.impl.background.systemalarm.g;
import k4.m;
import q4.t;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class SystemAlarmService extends s implements g.c {

    /* renamed from: o  reason: collision with root package name */
    private static final String f5540o = m.i("SystemAlarmService");

    /* renamed from: e  reason: collision with root package name */
    private g f5541e;

    /* renamed from: i  reason: collision with root package name */
    private boolean f5542i;

    private void e() {
        g gVar = new g(this);
        this.f5541e = gVar;
        gVar.m(this);
    }

    @Override // androidx.work.impl.background.systemalarm.g.c
    public void b() {
        this.f5542i = true;
        m.e().a(f5540o, "All commands completed in dispatcher");
        t.a();
        stopSelf();
    }

    @Override // androidx.lifecycle.s, android.app.Service
    public void onCreate() {
        super.onCreate();
        e();
        this.f5542i = false;
    }

    @Override // androidx.lifecycle.s, android.app.Service
    public void onDestroy() {
        super.onDestroy();
        this.f5542i = true;
        this.f5541e.k();
    }

    @Override // androidx.lifecycle.s, android.app.Service
    public int onStartCommand(Intent intent, int i10, int i11) {
        super.onStartCommand(intent, i10, i11);
        if (this.f5542i) {
            m.e().f(f5540o, "Re-initializing SystemAlarmDispatcher after a request to shut-down.");
            this.f5541e.k();
            e();
            this.f5542i = false;
        }
        if (intent != null) {
            this.f5541e.a(intent, i11);
            return 3;
        }
        return 3;
    }
}
