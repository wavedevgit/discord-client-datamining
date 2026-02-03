package o4;

import android.content.Context;
import android.content.Intent;
import android.content.IntentFilter;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class a extends e {
    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public a(Context context, r4.b taskExecutor) {
        super(context, taskExecutor);
        Intrinsics.checkNotNullParameter(context, "context");
        Intrinsics.checkNotNullParameter(taskExecutor, "taskExecutor");
    }

    private final boolean l(Intent intent) {
        int intExtra = intent.getIntExtra("status", -1);
        if (intExtra != 2 && intExtra != 5) {
            return false;
        }
        return true;
    }

    @Override // o4.e
    public IntentFilter j() {
        IntentFilter intentFilter = new IntentFilter();
        intentFilter.addAction("android.os.action.CHARGING");
        intentFilter.addAction("android.os.action.DISCHARGING");
        return intentFilter;
    }

    @Override // o4.e
    public void k(Intent intent) {
        String str;
        Intrinsics.checkNotNullParameter(intent, "intent");
        String action = intent.getAction();
        if (action != null) {
            k4.m e10 = k4.m.e();
            str = b.f42327a;
            e10.a(str, "Received " + action);
            switch (action.hashCode()) {
                case -1886648615:
                    if (!action.equals("android.intent.action.ACTION_POWER_DISCONNECTED")) {
                        return;
                    }
                    g(Boolean.FALSE);
                    return;
                case -54942926:
                    if (action.equals("android.os.action.DISCHARGING")) {
                        g(Boolean.FALSE);
                        return;
                    }
                    return;
                case 948344062:
                    if (action.equals("android.os.action.CHARGING")) {
                        g(Boolean.TRUE);
                        return;
                    }
                    return;
                case 1019184907:
                    if (action.equals("android.intent.action.ACTION_POWER_CONNECTED")) {
                        g(Boolean.TRUE);
                        return;
                    }
                    return;
                default:
                    return;
            }
        }
    }

    @Override // o4.h
    /* renamed from: m */
    public Boolean e() {
        String str;
        Intent registerReceiver = d().registerReceiver(null, new IntentFilter("android.intent.action.BATTERY_CHANGED"));
        if (registerReceiver == null) {
            k4.m e10 = k4.m.e();
            str = b.f42327a;
            e10.c(str, "getInitialState - null intent received");
            return Boolean.FALSE;
        }
        return Boolean.valueOf(l(registerReceiver));
    }
}
