package com.discord.misc.utilities.coroutines;

import kotlin.Metadata;
import kotlin.coroutines.Continuation;
import kotlin.coroutines.jvm.internal.d;
import kotlin.coroutines.jvm.internal.e;
import org.jetbrains.annotations.NotNull;
/* JADX INFO: Access modifiers changed from: package-private */
@Metadata(k = 3, mv = {2, 1, 0}, xi = 48)
@e(c = "com.discord.misc.utilities.coroutines.CollectWithLeadingDebounceKt", f = "CollectWithLeadingDebounce.kt", l = {27}, m = "collectWithLeadingDebounce")
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class CollectWithLeadingDebounceKt$collectWithLeadingDebounce$1<T> extends d {
    int label;
    /* synthetic */ Object result;

    /* JADX INFO: Access modifiers changed from: package-private */
    public CollectWithLeadingDebounceKt$collectWithLeadingDebounce$1(Continuation<? super CollectWithLeadingDebounceKt$collectWithLeadingDebounce$1> continuation) {
        super(continuation);
    }

    @Override // kotlin.coroutines.jvm.internal.a
    public final Object invokeSuspend(@NotNull Object obj) {
        this.result = obj;
        this.label |= Integer.MIN_VALUE;
        return CollectWithLeadingDebounceKt.collectWithLeadingDebounce(null, 0L, null, this);
    }
}
