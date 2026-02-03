package com.discord.misc.utilities.coroutines;

import kotlin.Metadata;
import kotlin.jvm.internal.Ref;
import kotlinx.coroutines.flow.FlowCollector;
import kotlinx.coroutines.flow.MutableSharedFlow;
/* JADX INFO: Access modifiers changed from: package-private */
@Metadata(k = 3, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class CollectWithLeadingDebounceKt$collectWithLeadingDebounce$2<T> implements FlowCollector {
    final /* synthetic */ FlowCollector $collector;
    final /* synthetic */ MutableSharedFlow $this_collectWithLeadingDebounce;
    final /* synthetic */ Ref.LongRef $timeLastEmitted;
    final /* synthetic */ long $timeoutMillis;

    /* JADX INFO: Access modifiers changed from: package-private */
    public CollectWithLeadingDebounceKt$collectWithLeadingDebounce$2(Ref.LongRef longRef, long j10, FlowCollector flowCollector, MutableSharedFlow mutableSharedFlow) {
        this.$timeLastEmitted = longRef;
        this.$timeoutMillis = j10;
        this.$collector = flowCollector;
        this.$this_collectWithLeadingDebounce = mutableSharedFlow;
    }

    /* JADX WARN: Code restructure failed: missing block: B:19:0x0057, code lost:
        if (r13.emit(r12, r0) == r1) goto L23;
     */
    /* JADX WARN: Code restructure failed: missing block: B:24:0x0066, code lost:
        if (js.i0.a(r9 - r7, r0) == r1) goto L23;
     */
    /* JADX WARN: Removed duplicated region for block: B:10:0x0024  */
    /* JADX WARN: Removed duplicated region for block: B:16:0x003a  */
    @Override // kotlinx.coroutines.flow.FlowCollector
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public final java.lang.Object emit(T r12, kotlin.coroutines.Continuation<? super kotlin.Unit> r13) {
        /*
            r11 = this;
            boolean r0 = r13 instanceof com.discord.misc.utilities.coroutines.CollectWithLeadingDebounceKt$collectWithLeadingDebounce$2$emit$1
            if (r0 == 0) goto L13
            r0 = r13
            com.discord.misc.utilities.coroutines.CollectWithLeadingDebounceKt$collectWithLeadingDebounce$2$emit$1 r0 = (com.discord.misc.utilities.coroutines.CollectWithLeadingDebounceKt$collectWithLeadingDebounce$2$emit$1) r0
            int r1 = r0.label
            r2 = -2147483648(0xffffffff80000000, float:-0.0)
            r3 = r1 & r2
            if (r3 == 0) goto L13
            int r1 = r1 - r2
            r0.label = r1
            goto L18
        L13:
            com.discord.misc.utilities.coroutines.CollectWithLeadingDebounceKt$collectWithLeadingDebounce$2$emit$1 r0 = new com.discord.misc.utilities.coroutines.CollectWithLeadingDebounceKt$collectWithLeadingDebounce$2$emit$1
            r0.<init>(r11, r13)
        L18:
            java.lang.Object r13 = r0.result
            java.lang.Object r1 = rr.b.f()
            int r2 = r0.label
            r3 = 2
            r4 = 1
            if (r2 == 0) goto L3a
            if (r2 == r4) goto L36
            if (r2 != r3) goto L2e
            java.lang.Object r12 = r0.L$0
            kotlin.c.b(r13)
            goto L69
        L2e:
            java.lang.IllegalStateException r12 = new java.lang.IllegalStateException
            java.lang.String r13 = "call to 'resume' before 'invoke' with coroutine"
            r12.<init>(r13)
            throw r12
        L36:
            kotlin.c.b(r13)
            goto L5a
        L3a:
            kotlin.c.b(r13)
            long r5 = java.lang.System.currentTimeMillis()
            kotlin.jvm.internal.Ref$LongRef r13 = r11.$timeLastEmitted
            long r7 = r13.element
            long r7 = r5 - r7
            long r9 = r11.$timeoutMillis
            int r2 = (r7 > r9 ? 1 : (r7 == r9 ? 0 : -1))
            if (r2 <= 0) goto L5d
            r13.element = r5
            kotlinx.coroutines.flow.FlowCollector r13 = r11.$collector
            r0.label = r4
            java.lang.Object r12 = r13.emit(r12, r0)
            if (r12 != r1) goto L5a
            goto L68
        L5a:
            kotlin.Unit r12 = kotlin.Unit.f32464a
            return r12
        L5d:
            long r9 = r9 - r7
            r0.L$0 = r12
            r0.label = r3
            java.lang.Object r13 = js.i0.a(r9, r0)
            if (r13 != r1) goto L69
        L68:
            return r1
        L69:
            kotlinx.coroutines.flow.MutableSharedFlow r13 = r11.$this_collectWithLeadingDebounce
            r13.b(r12)
            kotlin.Unit r12 = kotlin.Unit.f32464a
            return r12
        */
        throw new UnsupportedOperationException("Method not decompiled: com.discord.misc.utilities.coroutines.CollectWithLeadingDebounceKt$collectWithLeadingDebounce$2.emit(java.lang.Object, kotlin.coroutines.Continuation):java.lang.Object");
    }
}
