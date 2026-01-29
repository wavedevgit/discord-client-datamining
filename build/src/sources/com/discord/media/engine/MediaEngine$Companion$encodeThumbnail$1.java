package com.discord.media.engine;

import com.discord.media.engine.MediaEngine;
import kotlin.Metadata;
import kotlin.coroutines.Continuation;
import org.jetbrains.annotations.NotNull;
/* JADX INFO: Access modifiers changed from: package-private */
@Metadata(k = 3, mv = {2, 1, 0}, xi = 48)
@kotlin.coroutines.jvm.internal.e(c = "com.discord.media.engine.MediaEngine$Companion", f = "MediaEngine.kt", l = {743, 746}, m = "encodeThumbnail")
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class MediaEngine$Companion$encodeThumbnail$1 extends kotlin.coroutines.jvm.internal.d {
    Object L$0;
    int label;
    /* synthetic */ Object result;
    final /* synthetic */ MediaEngine.Companion this$0;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public MediaEngine$Companion$encodeThumbnail$1(MediaEngine.Companion companion, Continuation<? super MediaEngine$Companion$encodeThumbnail$1> continuation) {
        super(continuation);
        this.this$0 = companion;
    }

    @Override // kotlin.coroutines.jvm.internal.a
    public final Object invokeSuspend(@NotNull Object obj) {
        Object encodeThumbnail;
        this.result = obj;
        this.label |= Integer.MIN_VALUE;
        encodeThumbnail = this.this$0.encodeThumbnail(null, this);
        return encodeThumbnail;
    }
}
