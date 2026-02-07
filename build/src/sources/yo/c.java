package yo;

import androidx.lifecycle.b0;
import com.withpersona.sdk2.inquiry.FallbackMode;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c {

    /* renamed from: a  reason: collision with root package name */
    private final FallbackMode f55543a;

    /* renamed from: b  reason: collision with root package name */
    private final uo.f f55544b;

    /* renamed from: c  reason: collision with root package name */
    private final b0 f55545c;

    public c(FallbackMode fallbackMode, uo.f environment, b0 savedStateHandle) {
        Intrinsics.checkNotNullParameter(fallbackMode, "fallbackMode");
        Intrinsics.checkNotNullParameter(environment, "environment");
        Intrinsics.checkNotNullParameter(savedStateHandle, "savedStateHandle");
        this.f55543a = fallbackMode;
        this.f55544b = environment;
        this.f55545c = savedStateHandle;
    }

    public final uo.f a() {
        return this.f55544b;
    }

    public final FallbackMode b() {
        return this.f55543a;
    }

    public final io.a c(i fallbackModeManager) {
        Intrinsics.checkNotNullParameter(fallbackModeManager, "fallbackModeManager");
        return fallbackModeManager;
    }

    public final b0 d() {
        return this.f55545c;
    }
}
