package androidx.lifecycle;

import android.app.Service;
import android.content.Intent;
import android.os.IBinder;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class s extends Service implements LifecycleOwner {

    /* renamed from: d  reason: collision with root package name */
    private final l0 f4671d = new l0(this);

    @Override // androidx.lifecycle.LifecycleOwner
    public Lifecycle getLifecycle() {
        return this.f4671d.a();
    }

    @Override // android.app.Service
    public IBinder onBind(Intent intent) {
        Intrinsics.checkNotNullParameter(intent, "intent");
        this.f4671d.b();
        return null;
    }

    @Override // android.app.Service
    public void onCreate() {
        this.f4671d.c();
        super.onCreate();
    }

    @Override // android.app.Service
    public void onDestroy() {
        this.f4671d.d();
        super.onDestroy();
    }

    @Override // android.app.Service
    public void onStart(Intent intent, int i10) {
        this.f4671d.e();
        super.onStart(intent, i10);
    }

    @Override // android.app.Service
    public int onStartCommand(Intent intent, int i10, int i11) {
        return super.onStartCommand(intent, i10, i11);
    }
}
