package com.discord.emoji_picker;

import kotlin.Metadata;
import kotlin.coroutines.Continuation;
import org.jetbrains.annotations.NotNull;
/* JADX INFO: Access modifiers changed from: package-private */
@Metadata(k = 3, mv = {2, 1, 0}, xi = 48)
@kotlin.coroutines.jvm.internal.e(c = "com.discord.emoji_picker.EmojiPickerCache", f = "EmojiPickerCache.kt", l = {152}, m = "buildEmojisUnicode")
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class EmojiPickerCache$buildEmojisUnicode$1 extends kotlin.coroutines.jvm.internal.d {
    int label;
    /* synthetic */ Object result;
    final /* synthetic */ EmojiPickerCache this$0;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public EmojiPickerCache$buildEmojisUnicode$1(EmojiPickerCache emojiPickerCache, Continuation<? super EmojiPickerCache$buildEmojisUnicode$1> continuation) {
        super(continuation);
        this.this$0 = emojiPickerCache;
    }

    @Override // kotlin.coroutines.jvm.internal.a
    public final Object invokeSuspend(@NotNull Object obj) {
        Object buildEmojisUnicode;
        this.result = obj;
        this.label |= Integer.MIN_VALUE;
        buildEmojisUnicode = this.this$0.buildEmojisUnicode(null, this);
        return buildEmojisUnicode;
    }
}
