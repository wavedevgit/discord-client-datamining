package com.discord.sounds.utils;

import com.discord.file_downloader.DownloadState;
import com.discord.misc.utilities.chat_view_types.ChatViewRecyclerTypes;
import com.discord.sounds.utils.SoundExtensionsKt$fetchSound$1;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.coroutines.Continuation;
import kotlin.coroutines.jvm.internal.d;
import kotlin.coroutines.jvm.internal.e;
/* JADX INFO: Access modifiers changed from: package-private */
@Metadata(k = 3, mv = {2, 1, 0}, xi = 48)
@e(c = "com.discord.sounds.utils.SoundExtensionsKt$fetchSound$1$1", f = "SoundExtensions.kt", l = {ChatViewRecyclerTypes.MEDIA_ATTACHMENT_MOSAIC_VISUAL_PLACEHOLDER, 61, 68}, m = "emit")
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class SoundExtensionsKt$fetchSound$1$1$emit$1 extends d {
    int label;
    /* synthetic */ Object result;
    final /* synthetic */ SoundExtensionsKt$fetchSound$1.AnonymousClass1<T> this$0;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    /* JADX WARN: Multi-variable type inference failed */
    public SoundExtensionsKt$fetchSound$1$1$emit$1(SoundExtensionsKt$fetchSound$1.AnonymousClass1<? super T> anonymousClass1, Continuation<? super SoundExtensionsKt$fetchSound$1$1$emit$1> continuation) {
        super(continuation);
        this.this$0 = anonymousClass1;
    }

    @Override // kotlin.coroutines.jvm.internal.a
    public final Object invokeSuspend(Object obj) {
        this.result = obj;
        this.label |= Integer.MIN_VALUE;
        return this.this$0.emit((DownloadState) null, (Continuation<? super Unit>) this);
    }
}
