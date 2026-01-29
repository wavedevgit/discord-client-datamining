package androidx.work.impl.background.systemalarm;

import android.content.Intent;
import androidx.lifecycle.s;
import androidx.work.impl.background.systemalarm.g;
import k4.m;
import q4.t;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class SystemAlarmService extends s implements g.c {

    /* renamed from: o  reason: collision with root package name */
    private static final String f5527o = m.i("SystemAlarmService");

    /* renamed from: e  reason: collision with root package name */
    private g f5528e;

    /* renamed from: i  reason: collision with root package name */
    private boolean f5529i;

    private void f() {
        g gVar = new g(this);
        this.f5528e = gVar;
        gVar.m(this);
    }

    @Override // androidx.work.impl.background.systemalarm.g.c
    public void b() {
        this.f5529i = true;
        m.e().a(f5527o, "All commands completed in dispatcher");
        t.a();
        stopSelf();
    }

    @Override // androidx.lifecycle.s, android.app.Service
    public void onCreate() {
        super.onCreate();
        f();
        this.f5529i = false;
    }

    @Override // androidx.lifecycle.s, android.app.Service
    public void onDestroy() {
        super.onDestroy();
        this.f5529i = true;
        this.f5528e.k();
    }

    @Override // androidx.lifecycle.s, android.app.Service
    public int onStartCommand(Intent intent, int i10, int i11) {
        super.onStartCommand(intent, i10, i11);
        if (this.f5529i) {
            m.e().f(f5527o, "Re-initializing SystemAlarmDispatcher after a request to shut-down.");
            this.f5528e.k();
            f();
            this.f5529i = false;
        }
        if (intent != null) {
            this.f5528e.a(intent, i11);
            return 3;
        }
        return 3;
    }
}
