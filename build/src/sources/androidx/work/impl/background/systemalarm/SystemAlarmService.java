package androidx.work.impl.background.systemalarm;

import android.content.Intent;
import androidx.lifecycle.s;
import androidx.work.impl.background.systemalarm.g;
import k4.m;
import q4.t;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class SystemAlarmService extends s implements g.c {

    /* renamed from: o  reason: collision with root package name */
    private static final String f5571o = m.i("SystemAlarmService");

    /* renamed from: e  reason: collision with root package name */
    private g f5572e;

    /* renamed from: i  reason: collision with root package name */
    private boolean f5573i;

    private void f() {
        g gVar = new g(this);
        this.f5572e = gVar;
        gVar.m(this);
    }

    @Override // androidx.work.impl.background.systemalarm.g.c
    public void b() {
        this.f5573i = true;
        m.e().a(f5571o, "All commands completed in dispatcher");
        t.a();
        stopSelf();
    }

    @Override // androidx.lifecycle.s, android.app.Service
    public void onCreate() {
        super.onCreate();
        f();
        this.f5573i = false;
    }

    @Override // androidx.lifecycle.s, android.app.Service
    public void onDestroy() {
        super.onDestroy();
        this.f5573i = true;
        this.f5572e.k();
    }

    @Override // androidx.lifecycle.s, android.app.Service
    public int onStartCommand(Intent intent, int i10, int i11) {
        super.onStartCommand(intent, i10, i11);
        if (this.f5573i) {
            m.e().f(f5571o, "Re-initializing SystemAlarmDispatcher after a request to shut-down.");
            this.f5572e.k();
            f();
            this.f5573i = false;
        }
        if (intent != null) {
            this.f5572e.a(intent, i11);
            return 3;
        }
        return 3;
    }
}
