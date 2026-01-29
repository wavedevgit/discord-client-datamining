package com.discord.media.engine;

import com.discord.p000native.engine.NativeEngine;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.jvm.functions.Function2;
@Metadata(k = 3, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class MediaEngine$setOnVoiceCallback$1$1 implements NativeEngine.OnVoiceCallback {
    final /* synthetic */ Function2<Float, Integer, Unit> $cb;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* JADX WARN: Multi-variable type inference failed */
    public MediaEngine$setOnVoiceCallback$1$1(Function2<? super Float, ? super Integer, Unit> function2) {
        this.$cb = function2;
    }

    @Override // com.discord.p000native.engine.NativeEngine.OnVoiceCallback
    public final void onVoice(float f10, int i10) {
        this.$cb.invoke(Float.valueOf(f10), Integer.valueOf(i10));
    }
}
