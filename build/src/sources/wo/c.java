package wo;

import androidx.lifecycle.b0;
import com.withpersona.sdk2.inquiry.FallbackMode;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c {

    /* renamed from: a  reason: collision with root package name */
    private final FallbackMode f53180a;

    /* renamed from: b  reason: collision with root package name */
    private final so.f f53181b;

    /* renamed from: c  reason: collision with root package name */
    private final b0 f53182c;

    public c(FallbackMode fallbackMode, so.f environment, b0 savedStateHandle) {
        Intrinsics.checkNotNullParameter(fallbackMode, "fallbackMode");
        Intrinsics.checkNotNullParameter(environment, "environment");
        Intrinsics.checkNotNullParameter(savedStateHandle, "savedStateHandle");
        this.f53180a = fallbackMode;
        this.f53181b = environment;
        this.f53182c = savedStateHandle;
    }

    public final so.f a() {
        return this.f53181b;
    }

    public final FallbackMode b() {
        return this.f53180a;
    }

    public final go.a c(i fallbackModeManager) {
        Intrinsics.checkNotNullParameter(fallbackModeManager, "fallbackModeManager");
        return fallbackModeManager;
    }

    public final b0 d() {
        return this.f53182c;
    }
}
