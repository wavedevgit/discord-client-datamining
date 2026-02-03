package ro;

import androidx.lifecycle.b0;
import com.withpersona.sdk2.inquiry.FallbackMode;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c {

    /* renamed from: a  reason: collision with root package name */
    private final FallbackMode f48582a;

    /* renamed from: b  reason: collision with root package name */
    private final no.f f48583b;

    /* renamed from: c  reason: collision with root package name */
    private final b0 f48584c;

    public c(FallbackMode fallbackMode, no.f environment, b0 savedStateHandle) {
        Intrinsics.checkNotNullParameter(fallbackMode, "fallbackMode");
        Intrinsics.checkNotNullParameter(environment, "environment");
        Intrinsics.checkNotNullParameter(savedStateHandle, "savedStateHandle");
        this.f48582a = fallbackMode;
        this.f48583b = environment;
        this.f48584c = savedStateHandle;
    }

    public final no.f a() {
        return this.f48583b;
    }

    public final FallbackMode b() {
        return this.f48582a;
    }

    public final ao.a c(i fallbackModeManager) {
        Intrinsics.checkNotNullParameter(fallbackModeManager, "fallbackModeManager");
        return fallbackModeManager;
    }

    public final b0 d() {
        return this.f48584c;
    }
}
