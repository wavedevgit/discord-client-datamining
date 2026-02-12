package ip;

import androidx.lifecycle.b0;
import com.withpersona.sdk2.inquiry.FallbackMode;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c {

    /* renamed from: a  reason: collision with root package name */
    private final FallbackMode f30349a;

    /* renamed from: b  reason: collision with root package name */
    private final ep.f f30350b;

    /* renamed from: c  reason: collision with root package name */
    private final b0 f30351c;

    public c(FallbackMode fallbackMode, ep.f environment, b0 savedStateHandle) {
        Intrinsics.checkNotNullParameter(fallbackMode, "fallbackMode");
        Intrinsics.checkNotNullParameter(environment, "environment");
        Intrinsics.checkNotNullParameter(savedStateHandle, "savedStateHandle");
        this.f30349a = fallbackMode;
        this.f30350b = environment;
        this.f30351c = savedStateHandle;
    }

    public final ep.f a() {
        return this.f30350b;
    }

    public final FallbackMode b() {
        return this.f30349a;
    }

    public final so.a c(i fallbackModeManager) {
        Intrinsics.checkNotNullParameter(fallbackModeManager, "fallbackModeManager");
        return fallbackModeManager;
    }

    public final b0 d() {
        return this.f30351c;
    }
}
