package androidx.work.impl.background.systemalarm;

import android.content.BroadcastReceiver;
import android.content.ComponentName;
import android.content.Context;
import android.content.Intent;
import androidx.work.impl.background.systemalarm.ConstraintProxy;
import androidx.work.impl.p0;
import k4.m;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class ConstraintProxyUpdateReceiver extends BroadcastReceiver {

    /* renamed from: a  reason: collision with root package name */
    static final String f5975a = m.i("ConstrntProxyUpdtRecvr");

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class a implements Runnable {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ Intent f5976d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ Context f5977e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ BroadcastReceiver.PendingResult f5978i;

        a(Intent intent, Context context, BroadcastReceiver.PendingResult pendingResult) {
            this.f5976d = intent;
            this.f5977e = context;
            this.f5978i = pendingResult;
        }

        @Override // java.lang.Runnable
        public void run() {
            try {
                boolean booleanExtra = this.f5976d.getBooleanExtra("KEY_BATTERY_NOT_LOW_PROXY_ENABLED", false);
                boolean booleanExtra2 = this.f5976d.getBooleanExtra("KEY_BATTERY_CHARGING_PROXY_ENABLED", false);
                boolean booleanExtra3 = this.f5976d.getBooleanExtra("KEY_STORAGE_NOT_LOW_PROXY_ENABLED", false);
                boolean booleanExtra4 = this.f5976d.getBooleanExtra("KEY_NETWORK_STATE_PROXY_ENABLED", false);
                m.e().a(ConstraintProxyUpdateReceiver.f5975a, "Updating proxies: (BatteryNotLowProxy (" + booleanExtra + "), BatteryChargingProxy (" + booleanExtra2 + "), StorageNotLowProxy (" + booleanExtra3 + "), NetworkStateProxy (" + booleanExtra4 + "), ");
                q4.m.c(this.f5977e, ConstraintProxy.BatteryNotLowProxy.class, booleanExtra);
                q4.m.c(this.f5977e, ConstraintProxy.BatteryChargingProxy.class, booleanExtra2);
                q4.m.c(this.f5977e, ConstraintProxy.StorageNotLowProxy.class, booleanExtra3);
                q4.m.c(this.f5977e, ConstraintProxy.NetworkStateProxy.class, booleanExtra4);
            } finally {
                this.f5978i.finish();
            }
        }
    }

    public static Intent a(Context context, boolean z10, boolean z11, boolean z12, boolean z13) {
        Intent intent = new Intent("androidx.work.impl.background.systemalarm.UpdateProxies");
        intent.setComponent(new ComponentName(context, ConstraintProxyUpdateReceiver.class));
        intent.putExtra("KEY_BATTERY_NOT_LOW_PROXY_ENABLED", z10).putExtra("KEY_BATTERY_CHARGING_PROXY_ENABLED", z11).putExtra("KEY_STORAGE_NOT_LOW_PROXY_ENABLED", z12).putExtra("KEY_NETWORK_STATE_PROXY_ENABLED", z13);
        return intent;
    }

    @Override // android.content.BroadcastReceiver
    public void onReceive(Context context, Intent intent) {
        String str;
        if (intent != null) {
            str = intent.getAction();
        } else {
            str = null;
        }
        if (!"androidx.work.impl.background.systemalarm.UpdateProxies".equals(str)) {
            m e10 = m.e();
            String str2 = f5975a;
            e10.a(str2, "Ignoring unknown action " + str);
            return;
        }
        p0.k(context).q().d(new a(intent, context, goAsync()));
    }
}
