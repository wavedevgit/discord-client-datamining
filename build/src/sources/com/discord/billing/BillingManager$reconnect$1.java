package com.discord.billing;

import com.android.billingclient.api.BillingClient;
import com.discord.billing.BillingManager;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.coroutines.Continuation;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.Intrinsics;
/* JADX INFO: Access modifiers changed from: package-private */
@Metadata(d1 = {"\u0000\u0006\n\u0000\n\u0002\u0010\u0002\u0010\u0000\u001a\u00020\u0001H\n"}, d2 = {"<anonymous>", ""}, k = 3, mv = {2, 1, 0}, xi = 48)
@kotlin.coroutines.jvm.internal.e(c = "com.discord.billing.BillingManager$reconnect$1", f = "BillingManager.kt", l = {}, m = "invokeSuspend")
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class BillingManager$reconnect$1 extends kotlin.coroutines.jvm.internal.k implements Function1<Continuation<? super Unit>, Object> {
    int label;
    final /* synthetic */ BillingManager this$0;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public BillingManager$reconnect$1(BillingManager billingManager, Continuation<? super BillingManager$reconnect$1> continuation) {
        super(1, continuation);
        this.this$0 = billingManager;
    }

    @Override // kotlin.coroutines.jvm.internal.a
    public final Continuation<Unit> create(Continuation<?> continuation) {
        return new BillingManager$reconnect$1(this.this$0, continuation);
    }

    @Override // kotlin.coroutines.jvm.internal.a
    public final Object invokeSuspend(Object obj) {
        BillingClient billingClient;
        BillingManager$billingClientStateListener$1 billingManager$billingClientStateListener$1;
        wr.b.f();
        if (this.label == 0) {
            kotlin.c.b(obj);
            billingClient = this.this$0.billingClient;
            if (billingClient == null) {
                Intrinsics.throwUninitializedPropertyAccessException("billingClient");
                billingClient = null;
            }
            billingManager$billingClientStateListener$1 = this.this$0.billingClientStateListener;
            billingClient.l(billingManager$billingClientStateListener$1);
            this.this$0.updateConnectionState(BillingManager.ConnectionState.CONNECTING);
            return Unit.f32008a;
        }
        throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
    }

    @Override // kotlin.jvm.functions.Function1
    public final Object invoke(Continuation<? super Unit> continuation) {
        return ((BillingManager$reconnect$1) create(continuation)).invokeSuspend(Unit.f32008a);
    }
}
