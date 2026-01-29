package com.discord.billing;

import kotlin.Metadata;
import kotlin.coroutines.Continuation;
import org.jetbrains.annotations.NotNull;
/* JADX INFO: Access modifiers changed from: package-private */
@Metadata(k = 3, mv = {2, 1, 0}, xi = 48)
@kotlin.coroutines.jvm.internal.e(c = "com.discord.billing.BillingManager", f = "BillingManager.kt", l = {266}, m = "suspendUntilReady")
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class BillingManager$suspendUntilReady$1 extends kotlin.coroutines.jvm.internal.d {
    Object L$0;
    int label;
    /* synthetic */ Object result;
    final /* synthetic */ BillingManager this$0;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public BillingManager$suspendUntilReady$1(BillingManager billingManager, Continuation<? super BillingManager$suspendUntilReady$1> continuation) {
        super(continuation);
        this.this$0 = billingManager;
    }

    @Override // kotlin.coroutines.jvm.internal.a
    public final Object invokeSuspend(@NotNull Object obj) {
        Object suspendUntilReady;
        this.result = obj;
        this.label |= Integer.MIN_VALUE;
        suspendUntilReady = this.this$0.suspendUntilReady(0L, this);
        return suspendUntilReady;
    }
}
