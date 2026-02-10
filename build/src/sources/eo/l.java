package eo;

import android.content.Context;
import android.os.Build;
import android.os.Debug;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class l implements b {

    /* renamed from: a  reason: collision with root package name */
    private final Context f21914a;

    public l(Context context) {
        Intrinsics.checkNotNullParameter(context, "context");
        this.f21914a = context;
    }

    @Override // eo.b
    public boolean a() {
        if (!Debug.isDebuggerConnected() && !Debug.waitingForDebugger()) {
            return false;
        }
        return true;
    }

    @Override // eo.b
    public String b() {
        String MODEL = Build.MODEL;
        Intrinsics.checkNotNullExpressionValue(MODEL, "MODEL");
        return MODEL;
    }

    @Override // eo.b
    public String c() {
        String MANUFACTURER = Build.MANUFACTURER;
        Intrinsics.checkNotNullExpressionValue(MANUFACTURER, "MANUFACTURER");
        return MANUFACTURER;
    }

    @Override // eo.b
    public String d() {
        String RELEASE = Build.VERSION.RELEASE;
        Intrinsics.checkNotNullExpressionValue(RELEASE, "RELEASE");
        return RELEASE;
    }
}
