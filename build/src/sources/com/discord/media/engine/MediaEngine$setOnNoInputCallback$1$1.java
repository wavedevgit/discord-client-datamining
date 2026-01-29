package com.discord.media.engine;

import com.discord.p000native.engine.NativeEngine;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.jvm.functions.Function1;
@Metadata(k = 3, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class MediaEngine$setOnNoInputCallback$1$1 implements NativeEngine.OnNoInputCallback {
    final /* synthetic */ Function1<Boolean, Unit> $cb;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* JADX WARN: Multi-variable type inference failed */
    public MediaEngine$setOnNoInputCallback$1$1(Function1<? super Boolean, Unit> function1) {
        this.$cb = function1;
    }

    @Override // com.discord.p000native.engine.NativeEngine.OnNoInputCallback
    public final void onNoInput(boolean z10) {
        this.$cb.invoke(Boolean.valueOf(z10));
    }
}
