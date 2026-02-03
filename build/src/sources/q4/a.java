package q4;

import android.app.Application;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
final class a {

    /* renamed from: a  reason: collision with root package name */
    public static final a f47330a = new a();

    private a() {
    }

    @NotNull
    public final String a() {
        String processName = Application.getProcessName();
        Intrinsics.checkNotNullExpressionValue(processName, "getProcessName()");
        return processName;
    }
}
