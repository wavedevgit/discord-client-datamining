package ao;

import android.content.Context;
import android.os.Build;
import android.os.Debug;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class l implements b {

    /* renamed from: a  reason: collision with root package name */
    private final Context f5908a;

    public l(Context context) {
        Intrinsics.checkNotNullParameter(context, "context");
        this.f5908a = context;
    }

    @Override // ao.b
    public boolean a() {
        if (!Debug.isDebuggerConnected() && !Debug.waitingForDebugger()) {
            return false;
        }
        return true;
    }

    @Override // ao.b
    public String b() {
        String MODEL = Build.MODEL;
        Intrinsics.checkNotNullExpressionValue(MODEL, "MODEL");
        return MODEL;
    }

    @Override // ao.b
    public String c() {
        String MANUFACTURER = Build.MANUFACTURER;
        Intrinsics.checkNotNullExpressionValue(MANUFACTURER, "MANUFACTURER");
        return MANUFACTURER;
    }

    @Override // ao.b
    public String d() {
        String RELEASE = Build.VERSION.RELEASE;
        Intrinsics.checkNotNullExpressionValue(RELEASE, "RELEASE");
        return RELEASE;
    }
}
