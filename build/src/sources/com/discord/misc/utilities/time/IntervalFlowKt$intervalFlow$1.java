package com.discord.misc.utilities.time;

import kotlin.Metadata;
import kotlin.Unit;
import kotlin.coroutines.Continuation;
import kotlin.coroutines.jvm.internal.e;
import kotlin.coroutines.jvm.internal.k;
import kotlin.jvm.functions.Function2;
import kotlinx.coroutines.flow.FlowCollector;
@Metadata(d1 = {"\u0000\n\n\u0000\n\u0002\u0010\u0002\n\u0002\u0018\u0002\u0010\u0000\u001a\u00020\u0001*\b\u0012\u0004\u0012\u00020\u00010\u0002H\n"}, d2 = {"<anonymous>", "", "Lkotlinx/coroutines/flow/FlowCollector;"}, k = 3, mv = {2, 1, 0}, xi = 48)
@e(c = "com.discord.misc.utilities.time.IntervalFlowKt$intervalFlow$1", f = "IntervalFlow.kt", l = {14, 16, 17}, m = "invokeSuspend")
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class IntervalFlowKt$intervalFlow$1 extends k implements Function2<FlowCollector, Continuation<? super Unit>, Object> {
    final /* synthetic */ long $initialDelay;
    final /* synthetic */ long $period;
    private /* synthetic */ Object L$0;
    int label;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public IntervalFlowKt$intervalFlow$1(long j10, long j11, Continuation<? super IntervalFlowKt$intervalFlow$1> continuation) {
        super(2, continuation);
        this.$initialDelay = j10;
        this.$period = j11;
    }

    @Override // kotlin.coroutines.jvm.internal.a
    public final Continuation<Unit> create(Object obj, Continuation<?> continuation) {
        IntervalFlowKt$intervalFlow$1 intervalFlowKt$intervalFlow$1 = new IntervalFlowKt$intervalFlow$1(this.$initialDelay, this.$period, continuation);
        intervalFlowKt$intervalFlow$1.L$0 = obj;
        return intervalFlowKt$intervalFlow$1;
    }

    /* JADX WARN: Code restructure failed: missing block: B:13:0x003c, code lost:
        if (gs.i0.b(r5, r7) == r0) goto L14;
     */
    /* JADX WARN: Code restructure failed: missing block: B:16:0x0049, code lost:
        if (r1.emit(r8, r7) == r0) goto L14;
     */
    /* JADX WARN: Code restructure failed: missing block: B:19:0x0056, code lost:
        if (gs.i0.b(r4, r7) == r0) goto L14;
     */
    /* JADX WARN: Code restructure failed: missing block: B:20:0x0058, code lost:
        return r0;
     */
    /* JADX WARN: Unsupported multi-entry loop pattern (BACK_EDGE: B:19:0x0056 -> B:15:0x003f). Please submit an issue!!! */
    @Override // kotlin.coroutines.jvm.internal.a
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public final java.lang.Object invokeSuspend(java.lang.Object r8) {
        /*
            r7 = this;
            java.lang.Object r0 = or.b.f()
            int r1 = r7.label
            r2 = 3
            r3 = 2
            r4 = 1
            if (r1 == 0) goto L2a
            if (r1 == r4) goto L22
            if (r1 == r3) goto L1a
            if (r1 != r2) goto L12
            goto L22
        L12:
            java.lang.IllegalStateException r8 = new java.lang.IllegalStateException
            java.lang.String r0 = "call to 'resume' before 'invoke' with coroutine"
            r8.<init>(r0)
            throw r8
        L1a:
            java.lang.Object r1 = r7.L$0
            kotlinx.coroutines.flow.FlowCollector r1 = (kotlinx.coroutines.flow.FlowCollector) r1
            kotlin.c.b(r8)
            goto L4c
        L22:
            java.lang.Object r1 = r7.L$0
            kotlinx.coroutines.flow.FlowCollector r1 = (kotlinx.coroutines.flow.FlowCollector) r1
            kotlin.c.b(r8)
            goto L3f
        L2a:
            kotlin.c.b(r8)
            java.lang.Object r8 = r7.L$0
            r1 = r8
            kotlinx.coroutines.flow.FlowCollector r1 = (kotlinx.coroutines.flow.FlowCollector) r1
            long r5 = r7.$initialDelay
            r7.L$0 = r1
            r7.label = r4
            java.lang.Object r8 = gs.i0.b(r5, r7)
            if (r8 != r0) goto L3f
            goto L58
        L3f:
            kotlin.Unit r8 = kotlin.Unit.f33298a
            r7.L$0 = r1
            r7.label = r3
            java.lang.Object r8 = r1.emit(r8, r7)
            if (r8 != r0) goto L4c
            goto L58
        L4c:
            long r4 = r7.$period
            r7.L$0 = r1
            r7.label = r2
            java.lang.Object r8 = gs.i0.b(r4, r7)
            if (r8 != r0) goto L3f
        L58:
            return r0
        */
        throw new UnsupportedOperationException("Method not decompiled: com.discord.misc.utilities.time.IntervalFlowKt$intervalFlow$1.invokeSuspend(java.lang.Object):java.lang.Object");
    }

    @Override // kotlin.jvm.functions.Function2
    public final Object invoke(FlowCollector flowCollector, Continuation<? super Unit> continuation) {
        return ((IntervalFlowKt$intervalFlow$1) create(flowCollector, continuation)).invokeSuspend(Unit.f33298a);
    }
}
