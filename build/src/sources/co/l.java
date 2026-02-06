package co;

import android.content.Context;
import android.os.Build;
import android.os.Debug;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class l implements b {

    /* renamed from: a  reason: collision with root package name */
    private final Context f7651a;

    public l(Context context) {
        Intrinsics.checkNotNullParameter(context, "context");
        this.f7651a = context;
    }

    @Override // co.b
    public boolean a() {
        if (!Debug.isDebuggerConnected() && !Debug.waitingForDebugger()) {
            return false;
        }
        return true;
    }

    @Override // co.b
    public String b() {
        String MODEL = Build.MODEL;
        Intrinsics.checkNotNullExpressionValue(MODEL, "MODEL");
        return MODEL;
    }

    @Override // co.b
    public String c() {
        String MANUFACTURER = Build.MANUFACTURER;
        Intrinsics.checkNotNullExpressionValue(MANUFACTURER, "MANUFACTURER");
        return MANUFACTURER;
    }

    @Override // co.b
    public String d() {
        String RELEASE = Build.VERSION.RELEASE;
        Intrinsics.checkNotNullExpressionValue(RELEASE, "RELEASE");
        return RELEASE;
    }
}
