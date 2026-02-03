package to;

import androidx.lifecycle.b0;
import com.withpersona.sdk2.inquiry.FallbackMode;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c {

    /* renamed from: a  reason: collision with root package name */
    private final FallbackMode f50162a;

    /* renamed from: b  reason: collision with root package name */
    private final po.f f50163b;

    /* renamed from: c  reason: collision with root package name */
    private final b0 f50164c;

    public c(FallbackMode fallbackMode, po.f environment, b0 savedStateHandle) {
        Intrinsics.checkNotNullParameter(fallbackMode, "fallbackMode");
        Intrinsics.checkNotNullParameter(environment, "environment");
        Intrinsics.checkNotNullParameter(savedStateHandle, "savedStateHandle");
        this.f50162a = fallbackMode;
        this.f50163b = environment;
        this.f50164c = savedStateHandle;
    }

    public final po.f a() {
        return this.f50163b;
    }

    public final FallbackMode b() {
        return this.f50162a;
    }

    public final co.a c(i fallbackModeManager) {
        Intrinsics.checkNotNullParameter(fallbackModeManager, "fallbackModeManager");
        return fallbackModeManager;
    }

    public final b0 d() {
        return this.f50164c;
    }
}
