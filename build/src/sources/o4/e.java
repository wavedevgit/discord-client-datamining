package o4;

import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.content.IntentFilter;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class e extends h {

    /* renamed from: f  reason: collision with root package name */
    private final BroadcastReceiver f42235f;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class a extends BroadcastReceiver {
        a() {
        }

        @Override // android.content.BroadcastReceiver
        public void onReceive(Context context, Intent intent) {
            Intrinsics.checkNotNullParameter(context, "context");
            Intrinsics.checkNotNullParameter(intent, "intent");
            e.this.k(intent);
        }
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public e(Context context, r4.b taskExecutor) {
        super(context, taskExecutor);
        Intrinsics.checkNotNullParameter(context, "context");
        Intrinsics.checkNotNullParameter(taskExecutor, "taskExecutor");
        this.f42235f = new a();
    }

    @Override // o4.h
    public void h() {
        String str;
        k4.m e10 = k4.m.e();
        str = f.f42237a;
        e10.a(str, getClass().getSimpleName() + ": registering receiver");
        d().registerReceiver(this.f42235f, j());
    }

    @Override // o4.h
    public void i() {
        String str;
        k4.m e10 = k4.m.e();
        str = f.f42237a;
        e10.a(str, getClass().getSimpleName() + ": unregistering receiver");
        d().unregisterReceiver(this.f42235f);
    }

    public abstract IntentFilter j();

    public abstract void k(Intent intent);
}
