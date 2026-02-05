package zn;

import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.IntentFilter;
import android.os.Build;
import kotlin.Lazy;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.coroutines.flow.Flow;
import or.l;
import ps.j0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class c {

    /* renamed from: a  reason: collision with root package name */
    private static final Lazy f56130a = l.a(new Function0() { // from class: zn.b
        @Override // kotlin.jvm.functions.Function0
        public final Object invoke() {
            BroadcastReceiver e10;
            e10 = c.e();
            return e10;
        }
    });

    public static final Flow b() {
        try {
            Object newInstance = Class.forName("com.withpersona.sdk2.inquiry.appdomethreatevents.impl.ThreatEventFlow").getConstructor(null).newInstance(null);
            Intrinsics.checkNotNull(newInstance, "null cannot be cast to non-null type kotlinx.coroutines.flow.StateFlow<com.withpersona.sdk2.inquiry.appdomethreatevents.ThreatEventState>");
            return (j0) newInstance;
        } catch (Exception unused) {
            return null;
        }
    }

    private static final BroadcastReceiver c() {
        return (BroadcastReceiver) f56130a.getValue();
    }

    public static final void d(Context context) {
        Intrinsics.checkNotNullParameter(context, "context");
        Context applicationContext = context.getApplicationContext();
        BroadcastReceiver c10 = c();
        if (c() == null) {
            return;
        }
        IntentFilter intentFilter = new IntentFilter();
        for (String str : a.f56128a.a()) {
            intentFilter.addAction(str);
        }
        if (Build.VERSION.SDK_INT >= 33) {
            applicationContext.registerReceiver(c10, intentFilter, null, null, 4);
        } else {
            applicationContext.registerReceiver(c10, intentFilter);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final BroadcastReceiver e() {
        try {
            Object newInstance = Class.forName("com.withpersona.sdk2.inquiry.appdomethreatevents.impl.ThreatEventReceiver").getConstructor(null).newInstance(null);
            Intrinsics.checkNotNull(newInstance, "null cannot be cast to non-null type android.content.BroadcastReceiver");
            return (BroadcastReceiver) newInstance;
        } catch (Exception unused) {
            return null;
        }
    }

    public static final void f(Context context) {
        Intrinsics.checkNotNullParameter(context, "context");
        Context applicationContext = context.getApplicationContext();
        BroadcastReceiver c10 = c();
        if (c() == null) {
            return;
        }
        try {
            applicationContext.unregisterReceiver(c10);
        } catch (Exception unused) {
        }
    }
}
