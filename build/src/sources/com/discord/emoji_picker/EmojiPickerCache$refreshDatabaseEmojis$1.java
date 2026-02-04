package com.discord.emoji_picker;

import kotlin.Metadata;
import kotlin.coroutines.Continuation;
import org.jetbrains.annotations.NotNull;
/* JADX INFO: Access modifiers changed from: package-private */
@Metadata(k = 3, mv = {2, 1, 0}, xi = 48)
@kotlin.coroutines.jvm.internal.e(c = "com.discord.emoji_picker.EmojiPickerCache", f = "EmojiPickerCache.kt", l = {68}, m = "refreshDatabaseEmojis")
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class EmojiPickerCache$refreshDatabaseEmojis$1 extends kotlin.coroutines.jvm.internal.d {
    Object L$0;
    int label;
    /* synthetic */ Object result;
    final /* synthetic */ EmojiPickerCache this$0;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public EmojiPickerCache$refreshDatabaseEmojis$1(EmojiPickerCache emojiPickerCache, Continuation<? super EmojiPickerCache$refreshDatabaseEmojis$1> continuation) {
        super(continuation);
        this.this$0 = emojiPickerCache;
    }

    @Override // kotlin.coroutines.jvm.internal.a
    public final Object invokeSuspend(@NotNull Object obj) {
        this.result = obj;
        this.label |= Integer.MIN_VALUE;
        return this.this$0.refreshDatabaseEmojis(this);
    }
}
