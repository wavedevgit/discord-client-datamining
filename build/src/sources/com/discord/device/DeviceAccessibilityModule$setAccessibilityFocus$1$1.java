package com.discord.device;

import com.facebook.react.bridge.Promise;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.Intrinsics;
@Metadata(k = 3, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
final class DeviceAccessibilityModule$setAccessibilityFocus$1$1 implements Function1<Exception, Unit> {
    final /* synthetic */ Promise $promise;

    /* JADX INFO: Access modifiers changed from: package-private */
    public DeviceAccessibilityModule$setAccessibilityFocus$1$1(Promise promise) {
        this.$promise = promise;
    }

    @Override // kotlin.jvm.functions.Function1
    public /* bridge */ /* synthetic */ Object invoke(Object obj) {
        invoke((Exception) obj);
        return Unit.f32464a;
    }

    public final void invoke(Exception error) {
        Intrinsics.checkNotNullParameter(error, "error");
        this.$promise.reject(error);
    }
}
