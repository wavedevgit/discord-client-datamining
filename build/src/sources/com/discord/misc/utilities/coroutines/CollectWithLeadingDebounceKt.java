package com.discord.misc.utilities.coroutines;

import kotlin.Metadata;
@Metadata(d1 = {"\u0000\u001c\n\u0000\n\u0002\u0010\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\t\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\u001a4\u0010\u0000\u001a\u00020\u0001\"\u0004\b\u0000\u0010\u0002*\b\u0012\u0004\u0012\u0002H\u00020\u00032\u0006\u0010\u0004\u001a\u00020\u00052\f\u0010\u0006\u001a\b\u0012\u0004\u0012\u0002H\u00020\u0007H\u0086@¢\u0006\u0002\u0010\b¨\u0006\t"}, d2 = {"collectWithLeadingDebounce", "", "T", "Lkotlinx/coroutines/flow/MutableSharedFlow;", "timeoutMillis", "", "collector", "Lkotlinx/coroutines/flow/FlowCollector;", "(Lkotlinx/coroutines/flow/MutableSharedFlow;JLkotlinx/coroutines/flow/FlowCollector;Lkotlin/coroutines/Continuation;)Ljava/lang/Object;", "misc_utilities_release"}, k = 2, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class CollectWithLeadingDebounceKt {
    /* JADX WARN: Removed duplicated region for block: B:10:0x0023  */
    /* JADX WARN: Removed duplicated region for block: B:14:0x0031  */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public static final <T> java.lang.Object collectWithLeadingDebounce(@org.jetbrains.annotations.NotNull kotlinx.coroutines.flow.MutableSharedFlow r10, long r11, @org.jetbrains.annotations.NotNull kotlinx.coroutines.flow.FlowCollector r13, @org.jetbrains.annotations.NotNull kotlin.coroutines.Continuation<? super kotlin.Unit> r14) {
        /*
            boolean r0 = r14 instanceof com.discord.misc.utilities.coroutines.CollectWithLeadingDebounceKt$collectWithLeadingDebounce$1
            if (r0 == 0) goto L13
            r0 = r14
            com.discord.misc.utilities.coroutines.CollectWithLeadingDebounceKt$collectWithLeadingDebounce$1 r0 = (com.discord.misc.utilities.coroutines.CollectWithLeadingDebounceKt$collectWithLeadingDebounce$1) r0
            int r1 = r0.label
            r2 = -2147483648(0xffffffff80000000, float:-0.0)
            r3 = r1 & r2
            if (r3 == 0) goto L13
            int r1 = r1 - r2
            r0.label = r1
            goto L18
        L13:
            com.discord.misc.utilities.coroutines.CollectWithLeadingDebounceKt$collectWithLeadingDebounce$1 r0 = new com.discord.misc.utilities.coroutines.CollectWithLeadingDebounceKt$collectWithLeadingDebounce$1
            r0.<init>(r14)
        L18:
            java.lang.Object r14 = r0.result
            java.lang.Object r1 = ur.b.f()
            int r2 = r0.label
            r3 = 1
            if (r2 == 0) goto L31
            if (r2 == r3) goto L2d
            java.lang.IllegalStateException r10 = new java.lang.IllegalStateException
            java.lang.String r11 = "call to 'resume' before 'invoke' with coroutine"
            r10.<init>(r11)
            throw r10
        L2d:
            kotlin.c.b(r14)
            goto L4a
        L31:
            kotlin.c.b(r14)
            kotlin.jvm.internal.Ref$LongRef r5 = new kotlin.jvm.internal.Ref$LongRef
            r5.<init>()
            com.discord.misc.utilities.coroutines.CollectWithLeadingDebounceKt$collectWithLeadingDebounce$2 r4 = new com.discord.misc.utilities.coroutines.CollectWithLeadingDebounceKt$collectWithLeadingDebounce$2
            r9 = r10
            r6 = r11
            r8 = r13
            r4.<init>(r5, r6, r8, r9)
            r0.label = r3
            java.lang.Object r10 = r9.collect(r4, r0)
            if (r10 != r1) goto L4a
            return r1
        L4a:
            or.h r10 = new or.h
            r10.<init>()
            throw r10
        */
        throw new UnsupportedOperationException("Method not decompiled: com.discord.misc.utilities.coroutines.CollectWithLeadingDebounceKt.collectWithLeadingDebounce(kotlinx.coroutines.flow.MutableSharedFlow, long, kotlinx.coroutines.flow.FlowCollector, kotlin.coroutines.Continuation):java.lang.Object");
    }
}
