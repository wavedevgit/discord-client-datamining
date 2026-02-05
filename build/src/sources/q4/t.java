package q4;

import android.content.Context;
import android.os.PowerManager;
import java.util.LinkedHashMap;
import java.util.Map;
import kotlin.Unit;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class t {

    /* renamed from: a  reason: collision with root package name */
    private static final String f47425a;

    static {
        String i10 = k4.m.i("WakeLocks");
        Intrinsics.checkNotNullExpressionValue(i10, "tagWithPrefix(\"WakeLocks\")");
        f47425a = i10;
    }

    public static final void a() {
        LinkedHashMap linkedHashMap = new LinkedHashMap();
        u uVar = u.f47426a;
        synchronized (uVar) {
            linkedHashMap.putAll(uVar.a());
            Unit unit = Unit.f31988a;
        }
        for (Map.Entry entry : linkedHashMap.entrySet()) {
            PowerManager.WakeLock wakeLock = (PowerManager.WakeLock) entry.getKey();
            String str = (String) entry.getValue();
            if (wakeLock != null && wakeLock.isHeld()) {
                k4.m e10 = k4.m.e();
                String str2 = f47425a;
                e10.k(str2, "WakeLock held for " + str);
            }
        }
    }

    public static final PowerManager.WakeLock b(Context context, String tag) {
        Intrinsics.checkNotNullParameter(context, "context");
        Intrinsics.checkNotNullParameter(tag, "tag");
        Object systemService = context.getApplicationContext().getSystemService("power");
        Intrinsics.checkNotNull(systemService, "null cannot be cast to non-null type android.os.PowerManager");
        String str = "WorkManager: " + tag;
        PowerManager.WakeLock wakeLock = ((PowerManager) systemService).newWakeLock(1, str);
        u uVar = u.f47426a;
        synchronized (uVar) {
            String str2 = (String) uVar.a().put(wakeLock, str);
        }
        Intrinsics.checkNotNullExpressionValue(wakeLock, "wakeLock");
        return wakeLock;
    }
}
