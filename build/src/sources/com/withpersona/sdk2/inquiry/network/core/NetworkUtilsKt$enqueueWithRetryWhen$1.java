package com.withpersona.sdk2.inquiry.network.core;

import kotlin.coroutines.Continuation;
import org.jetbrains.annotations.NotNull;
@kotlin.coroutines.jvm.internal.e(c = "com.withpersona.sdk2.inquiry.network.core.NetworkUtilsKt", f = "NetworkUtils.kt", l = {179}, m = "enqueueWithRetryWhen")
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class NetworkUtilsKt$enqueueWithRetryWhen$1<T> extends kotlin.coroutines.jvm.internal.d {
    int I$0;
    Object L$0;
    Object L$1;
    int label;
    /* synthetic */ Object result;

    public NetworkUtilsKt$enqueueWithRetryWhen$1(Continuation<? super NetworkUtilsKt$enqueueWithRetryWhen$1> continuation) {
        super(continuation);
    }

    @Override // kotlin.coroutines.jvm.internal.a
    public final Object invokeSuspend(@NotNull Object obj) {
        this.result = obj;
        this.label |= Integer.MIN_VALUE;
        return NetworkUtilsKt.enqueueWithRetryWhen(null, null, this);
    }
}
