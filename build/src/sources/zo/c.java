package zo;

import androidx.lifecycle.b0;
import com.withpersona.sdk2.inquiry.FallbackMode;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c {

    /* renamed from: a  reason: collision with root package name */
    private final FallbackMode f56568a;

    /* renamed from: b  reason: collision with root package name */
    private final vo.f f56569b;

    /* renamed from: c  reason: collision with root package name */
    private final b0 f56570c;

    public c(FallbackMode fallbackMode, vo.f environment, b0 savedStateHandle) {
        Intrinsics.checkNotNullParameter(fallbackMode, "fallbackMode");
        Intrinsics.checkNotNullParameter(environment, "environment");
        Intrinsics.checkNotNullParameter(savedStateHandle, "savedStateHandle");
        this.f56568a = fallbackMode;
        this.f56569b = environment;
        this.f56570c = savedStateHandle;
    }

    public final vo.f a() {
        return this.f56569b;
    }

    public final FallbackMode b() {
        return this.f56568a;
    }

    public final jo.a c(i fallbackModeManager) {
        Intrinsics.checkNotNullParameter(fallbackModeManager, "fallbackModeManager");
        return fallbackModeManager;
    }

    public final b0 d() {
        return this.f56570c;
    }
}
