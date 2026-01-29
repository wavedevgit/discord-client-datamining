package qo;

import androidx.lifecycle.b0;
import com.withpersona.sdk2.inquiry.FallbackMode;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c {

    /* renamed from: a  reason: collision with root package name */
    private final FallbackMode f47540a;

    /* renamed from: b  reason: collision with root package name */
    private final mo.f f47541b;

    /* renamed from: c  reason: collision with root package name */
    private final b0 f47542c;

    public c(FallbackMode fallbackMode, mo.f environment, b0 savedStateHandle) {
        Intrinsics.checkNotNullParameter(fallbackMode, "fallbackMode");
        Intrinsics.checkNotNullParameter(environment, "environment");
        Intrinsics.checkNotNullParameter(savedStateHandle, "savedStateHandle");
        this.f47540a = fallbackMode;
        this.f47541b = environment;
        this.f47542c = savedStateHandle;
    }

    public final mo.f a() {
        return this.f47541b;
    }

    public final FallbackMode b() {
        return this.f47540a;
    }

    public final zn.a c(i fallbackModeManager) {
        Intrinsics.checkNotNullParameter(fallbackModeManager, "fallbackModeManager");
        return fallbackModeManager;
    }

    public final b0 d() {
        return this.f47542c;
    }
}
