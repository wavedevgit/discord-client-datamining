package com.discord.react_fork_overrides.forks;

import com.discord.crash_reporting.CrashReporting;
import com.rivereactnative.n;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000\u0012\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\u0002\n\u0000\bÀ\u0002\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\u0006\u0010\u0004\u001a\u00020\u0005¨\u0006\u0006"}, d2 = {"Lcom/discord/react_fork_overrides/forks/RiveReactNativeOverride;", "", "<init>", "()V", "override", "", "react_fork_overrides_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class RiveReactNativeOverride {
    @NotNull
    public static final RiveReactNativeOverride INSTANCE = new RiveReactNativeOverride();

    private RiveReactNativeOverride() {
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit override$lambda$0(Throwable error, String context) {
        Intrinsics.checkNotNullParameter(error, "error");
        Intrinsics.checkNotNullParameter(context, "context");
        CrashReporting.captureException$default(CrashReporting.INSTANCE, error, false, 2, null);
        return Unit.f32464a;
    }

    public final void override() {
        n.f17300a.c(new Function2() { // from class: com.discord.react_fork_overrides.forks.i
            @Override // kotlin.jvm.functions.Function2
            public final Object invoke(Object obj, Object obj2) {
                Unit override$lambda$0;
                override$lambda$0 = RiveReactNativeOverride.override$lambda$0((Throwable) obj, (String) obj2);
                return override$lambda$0;
            }
        });
    }
}
