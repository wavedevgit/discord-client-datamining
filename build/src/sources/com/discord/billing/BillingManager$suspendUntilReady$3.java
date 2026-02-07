package com.discord.billing;

import com.discord.billing.BillingManager;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.coroutines.Continuation;
import kotlin.jvm.functions.Function2;
import kotlinx.coroutines.CompletableDeferred;
import kotlinx.coroutines.CoroutineScope;
/* JADX INFO: Access modifiers changed from: package-private */
@Metadata(d1 = {"\u0000\n\n\u0000\n\u0002\u0018\u0002\n\u0002\u0018\u0002\u0010\u0000\u001a\u00020\u0001*\u00020\u0002H\n"}, d2 = {"<anonymous>", "Lcom/discord/billing/BillingManager$ClientReadyState;", "Lkotlinx/coroutines/CoroutineScope;"}, k = 3, mv = {2, 1, 0}, xi = 48)
@kotlin.coroutines.jvm.internal.e(c = "com.discord.billing.BillingManager$suspendUntilReady$3", f = "BillingManager.kt", l = {267}, m = "invokeSuspend")
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class BillingManager$suspendUntilReady$3 extends kotlin.coroutines.jvm.internal.k implements Function2<CoroutineScope, Continuation<? super BillingManager.ClientReadyState>, Object> {
    final /* synthetic */ CompletableDeferred $deferred;
    int label;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public BillingManager$suspendUntilReady$3(CompletableDeferred completableDeferred, Continuation<? super BillingManager$suspendUntilReady$3> continuation) {
        super(2, continuation);
        this.$deferred = completableDeferred;
    }

    @Override // kotlin.coroutines.jvm.internal.a
    public final Continuation<Unit> create(Object obj, Continuation<?> continuation) {
        return new BillingManager$suspendUntilReady$3(this.$deferred, continuation);
    }

    @Override // kotlin.coroutines.jvm.internal.a
    public final Object invokeSuspend(Object obj) {
        Object f10 = wr.b.f();
        int i10 = this.label;
        if (i10 != 0) {
            if (i10 == 1) {
                kotlin.c.b(obj);
            } else {
                throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
            }
        } else {
            kotlin.c.b(obj);
            CompletableDeferred completableDeferred = this.$deferred;
            this.label = 1;
            obj = completableDeferred.I(this);
            if (obj == f10) {
                return f10;
            }
        }
        if (((Boolean) obj).booleanValue()) {
            return BillingManager.ClientReadyState.AFTER_WAIT;
        }
        return BillingManager.ClientReadyState.TIMEOUT;
    }

    @Override // kotlin.jvm.functions.Function2
    public final Object invoke(CoroutineScope coroutineScope, Continuation<? super BillingManager.ClientReadyState> continuation) {
        return ((BillingManager$suspendUntilReady$3) create(coroutineScope, continuation)).invokeSuspend(Unit.f32056a);
    }
}
