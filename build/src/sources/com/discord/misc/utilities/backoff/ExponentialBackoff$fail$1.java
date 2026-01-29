package com.discord.misc.utilities.backoff;

import kotlin.Metadata;
import kotlin.Unit;
import kotlin.coroutines.Continuation;
import kotlin.coroutines.jvm.internal.e;
import kotlin.coroutines.jvm.internal.k;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.functions.Function2;
import kotlinx.coroutines.CoroutineScope;
/* JADX INFO: Access modifiers changed from: package-private */
@Metadata(d1 = {"\u0000\n\n\u0000\n\u0002\u0010\u0002\n\u0002\u0018\u0002\u0010\u0000\u001a\u00020\u0001*\u00020\u0002H\n"}, d2 = {"<anonymous>", "", "Lkotlinx/coroutines/CoroutineScope;"}, k = 3, mv = {2, 1, 0}, xi = 48)
@e(c = "com.discord.misc.utilities.backoff.ExponentialBackoff$fail$1", f = "ExponentialBackoff.kt", l = {40, 41}, m = "invokeSuspend")
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class ExponentialBackoff$fail$1 extends k implements Function2<CoroutineScope, Continuation<? super Unit>, Object> {
    final /* synthetic */ Function1<Continuation<? super Unit>, Object> $action;
    int label;
    final /* synthetic */ ExponentialBackoff this$0;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    /* JADX WARN: Multi-variable type inference failed */
    public ExponentialBackoff$fail$1(ExponentialBackoff exponentialBackoff, Function1<? super Continuation<? super Unit>, ? extends Object> function1, Continuation<? super ExponentialBackoff$fail$1> continuation) {
        super(2, continuation);
        this.this$0 = exponentialBackoff;
        this.$action = function1;
    }

    @Override // kotlin.coroutines.jvm.internal.a
    public final Continuation<Unit> create(Object obj, Continuation<?> continuation) {
        return new ExponentialBackoff$fail$1(this.this$0, this.$action, continuation);
    }

    /* JADX WARN: Code restructure failed: missing block: B:11:0x002d, code lost:
        if (gs.i0.a(r4, r6) == r0) goto L14;
     */
    /* JADX WARN: Code restructure failed: missing block: B:14:0x0038, code lost:
        if (r7.invoke(r6) == r0) goto L14;
     */
    /* JADX WARN: Code restructure failed: missing block: B:15:0x003a, code lost:
        return r0;
     */
    @Override // kotlin.coroutines.jvm.internal.a
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public final java.lang.Object invokeSuspend(java.lang.Object r7) {
        /*
            r6 = this;
            java.lang.Object r0 = or.b.f()
            int r1 = r6.label
            r2 = 2
            r3 = 1
            if (r1 == 0) goto L1e
            if (r1 == r3) goto L1a
            if (r1 != r2) goto L12
            kotlin.c.b(r7)
            goto L3b
        L12:
            java.lang.IllegalStateException r7 = new java.lang.IllegalStateException
            java.lang.String r0 = "call to 'resume' before 'invoke' with coroutine"
            r7.<init>(r0)
            throw r7
        L1a:
            kotlin.c.b(r7)
            goto L30
        L1e:
            kotlin.c.b(r7)
            com.discord.misc.utilities.backoff.ExponentialBackoff r7 = r6.this$0
            long r4 = com.discord.misc.utilities.backoff.ExponentialBackoff.access$getCurrentDelay$p(r7)
            r6.label = r3
            java.lang.Object r7 = gs.i0.a(r4, r6)
            if (r7 != r0) goto L30
            goto L3a
        L30:
            kotlin.jvm.functions.Function1<kotlin.coroutines.Continuation<? super kotlin.Unit>, java.lang.Object> r7 = r6.$action
            r6.label = r2
            java.lang.Object r7 = r7.invoke(r6)
            if (r7 != r0) goto L3b
        L3a:
            return r0
        L3b:
            kotlin.Unit r7 = kotlin.Unit.f33282a
            return r7
        */
        throw new UnsupportedOperationException("Method not decompiled: com.discord.misc.utilities.backoff.ExponentialBackoff$fail$1.invokeSuspend(java.lang.Object):java.lang.Object");
    }

    @Override // kotlin.jvm.functions.Function2
    public final Object invoke(CoroutineScope coroutineScope, Continuation<? super Unit> continuation) {
        return ((ExponentialBackoff$fail$1) create(coroutineScope, continuation)).invokeSuspend(Unit.f33282a);
    }
}
