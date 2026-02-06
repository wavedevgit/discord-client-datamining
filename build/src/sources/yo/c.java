package yo;

import androidx.lifecycle.b0;
import com.withpersona.sdk2.inquiry.FallbackMode;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c {

    /* renamed from: a  reason: collision with root package name */
    private final FallbackMode f55495a;

    /* renamed from: b  reason: collision with root package name */
    private final uo.f f55496b;

    /* renamed from: c  reason: collision with root package name */
    private final b0 f55497c;

    public c(FallbackMode fallbackMode, uo.f environment, b0 savedStateHandle) {
        Intrinsics.checkNotNullParameter(fallbackMode, "fallbackMode");
        Intrinsics.checkNotNullParameter(environment, "environment");
        Intrinsics.checkNotNullParameter(savedStateHandle, "savedStateHandle");
        this.f55495a = fallbackMode;
        this.f55496b = environment;
        this.f55497c = savedStateHandle;
    }

    public final uo.f a() {
        return this.f55496b;
    }

    public final FallbackMode b() {
        return this.f55495a;
    }

    public final io.a c(i fallbackModeManager) {
        Intrinsics.checkNotNullParameter(fallbackModeManager, "fallbackModeManager");
        return fallbackModeManager;
    }

    public final b0 d() {
        return this.f55497c;
    }
}
