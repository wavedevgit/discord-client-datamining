package com.discord.misc.utilities.coroutines;

import com.discord.misc.utilities.chat_view_types.ChatViewRecyclerTypes;
import kotlin.Metadata;
import kotlin.coroutines.Continuation;
import kotlin.coroutines.jvm.internal.d;
import kotlin.coroutines.jvm.internal.e;
/* JADX INFO: Access modifiers changed from: package-private */
@Metadata(k = 3, mv = {2, 1, 0}, xi = 48)
@e(c = "com.discord.misc.utilities.coroutines.CollectWithLeadingDebounceKt$collectWithLeadingDebounce$2", f = "CollectWithLeadingDebounce.kt", l = {ChatViewRecyclerTypes.AUTO_MODERATION_NOTIFICATION_EMBED, ChatViewRecyclerTypes.INFO_LINK}, m = "emit")
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class CollectWithLeadingDebounceKt$collectWithLeadingDebounce$2$emit$1 extends d {
    Object L$0;
    int label;
    /* synthetic */ Object result;
    final /* synthetic */ CollectWithLeadingDebounceKt$collectWithLeadingDebounce$2<T> this$0;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    /* JADX WARN: Multi-variable type inference failed */
    public CollectWithLeadingDebounceKt$collectWithLeadingDebounce$2$emit$1(CollectWithLeadingDebounceKt$collectWithLeadingDebounce$2<? super T> collectWithLeadingDebounceKt$collectWithLeadingDebounce$2, Continuation<? super CollectWithLeadingDebounceKt$collectWithLeadingDebounce$2$emit$1> continuation) {
        super(continuation);
        this.this$0 = collectWithLeadingDebounceKt$collectWithLeadingDebounce$2;
    }

    @Override // kotlin.coroutines.jvm.internal.a
    public final Object invokeSuspend(Object obj) {
        this.result = obj;
        this.label |= Integer.MIN_VALUE;
        return this.this$0.emit(null, this);
    }
}
