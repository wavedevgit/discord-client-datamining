package androidx.work.impl.background.systemalarm;

import android.content.Intent;
import androidx.lifecycle.s;
import androidx.work.impl.background.systemalarm.g;
import k4.m;
import q4.t;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class SystemAlarmService extends s implements g.c {

    /* renamed from: o  reason: collision with root package name */
    private static final String f5652o = m.i("SystemAlarmService");

    /* renamed from: e  reason: collision with root package name */
    private g f5653e;

    /* renamed from: i  reason: collision with root package name */
    private boolean f5654i;

    private void f() {
        g gVar = new g(this);
        this.f5653e = gVar;
        gVar.m(this);
    }

    @Override // androidx.work.impl.background.systemalarm.g.c
    public void b() {
        this.f5654i = true;
        m.e().a(f5652o, "All commands completed in dispatcher");
        t.a();
        stopSelf();
    }

    @Override // androidx.lifecycle.s, android.app.Service
    public void onCreate() {
        super.onCreate();
        f();
        this.f5654i = false;
    }

    @Override // androidx.lifecycle.s, android.app.Service
    public void onDestroy() {
        super.onDestroy();
        this.f5654i = true;
        this.f5653e.k();
    }

    @Override // androidx.lifecycle.s, android.app.Service
    public int onStartCommand(Intent intent, int i10, int i11) {
        super.onStartCommand(intent, i10, i11);
        if (this.f5654i) {
            m.e().f(f5652o, "Re-initializing SystemAlarmDispatcher after a request to shut-down.");
            this.f5653e.k();
            f();
            this.f5654i = false;
        }
        if (intent != null) {
            this.f5653e.a(intent, i11);
            return 3;
        }
        return 3;
    }
}
