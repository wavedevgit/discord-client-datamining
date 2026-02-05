package com.discord.billing;

import android.app.Activity;
import com.android.billingclient.api.BillingClient;
import com.android.billingclient.api.BillingResult;
import com.android.billingclient.api.QueryProductDetailsParams;
import com.discord.billing.BillingManager;
import com.discord.billing.BillingManagerException;
import com.discord.billing.types.BillingFlowParams;
import com.discord.billing.types.ProductType;
import com.discord.crash_reporting.CrashReporting;
import java.util.List;
import java.util.concurrent.CancellationException;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.collections.CollectionsKt;
import kotlin.coroutines.Continuation;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Ref;
import kotlinx.coroutines.CoroutineScope;
/* JADX INFO: Access modifiers changed from: package-private */
@Metadata(d1 = {"\u0000\n\n\u0000\n\u0002\u0010\u0002\n\u0002\u0018\u0002\u0010\u0000\u001a\u00020\u0001*\u00020\u0002H\n"}, d2 = {"<anonymous>", "", "Lkotlinx/coroutines/CoroutineScope;"}, k = 3, mv = {2, 1, 0}, xi = 48)
@kotlin.coroutines.jvm.internal.e(c = "com.discord.billing.BillingManager$purchase$1", f = "BillingManager.kt", l = {475}, m = "invokeSuspend")
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class BillingManager$purchase$1 extends kotlin.coroutines.jvm.internal.k implements Function2<CoroutineScope, Continuation<? super Unit>, Object> {
    final /* synthetic */ Activity $activity;
    final /* synthetic */ String $offerId;
    final /* synthetic */ String $oldProductId;
    final /* synthetic */ Function1<BillingManagerException, Unit> $onError;
    final /* synthetic */ Function0<Unit> $onSuccess;
    final /* synthetic */ String $productId;
    final /* synthetic */ ProductType $productType;
    final /* synthetic */ String $purchaseToken;
    final /* synthetic */ String $userId;
    int label;
    final /* synthetic */ BillingManager this$0;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    /* JADX WARN: Multi-variable type inference failed */
    public BillingManager$purchase$1(BillingManager billingManager, Function1<? super BillingManagerException, Unit> function1, ProductType productType, String str, String str2, String str3, String str4, String str5, Activity activity, Function0<Unit> function0, Continuation<? super BillingManager$purchase$1> continuation) {
        super(2, continuation);
        this.this$0 = billingManager;
        this.$onError = function1;
        this.$productType = productType;
        this.$productId = str;
        this.$oldProductId = str2;
        this.$purchaseToken = str3;
        this.$userId = str4;
        this.$offerId = str5;
        this.$activity = activity;
        this.$onSuccess = function0;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void invokeSuspend$lambda$1(BillingManager billingManager, Function1 function1, String str, String str2, String str3, String str4, String str5, Activity activity, Function0 function0, Ref.BooleanRef booleanRef, BillingResult billingResult, List list) {
        boolean isNotOk;
        BillingClient billingClient;
        synchronized (billingManager) {
            if (booleanRef.element) {
                return;
            }
            booleanRef.element = true;
            Unit unit = Unit.f31988a;
            Intrinsics.checkNotNull(billingResult);
            isNotOk = billingManager.isNotOk(billingResult);
            if (isNotOk) {
                function1.invoke(BillingManagerException.Companion.fromBillingResult(billingResult.b()));
                return;
            }
            try {
                BillingFlowParams billingFlowParams = BillingFlowParams.INSTANCE;
                Intrinsics.checkNotNull(list);
                com.android.billingclient.api.BillingFlowParams createWithProductDetails = billingFlowParams.createWithProductDetails(list, str, str2, str3, str4, str5);
                if (createWithProductDetails == null) {
                    function1.invoke(new BillingManagerException.BillingException("purchase failed to create BillingFlowParams"));
                    return;
                }
                if (!activity.isFinishing() && !activity.isDestroyed()) {
                    billingClient = billingManager.billingClient;
                    if (billingClient == null) {
                        Intrinsics.throwUninitializedPropertyAccessException("billingClient");
                        billingClient = null;
                    }
                    billingClient.g(activity, createWithProductDetails);
                    function0.invoke();
                    return;
                }
                function1.invoke(new BillingManagerException.BillingException("Activity is no longer valid"));
            } catch (AssertionError e10) {
                String message = e10.getMessage();
                Intrinsics.checkNotNull(message);
                function1.invoke(new BillingManagerException.BillingException("purchase AssertionError: " + message));
            }
        }
    }

    @Override // kotlin.coroutines.jvm.internal.a
    public final Continuation<Unit> create(Object obj, Continuation<?> continuation) {
        return new BillingManager$purchase$1(this.this$0, this.$onError, this.$productType, this.$productId, this.$oldProductId, this.$purchaseToken, this.$userId, this.$offerId, this.$activity, this.$onSuccess, continuation);
    }

    @Override // kotlin.coroutines.jvm.internal.a
    public final Object invokeSuspend(Object obj) {
        Object suspendUntilReady$default;
        BillingManager.ClientReadyState clientReadyState;
        BillingClient billingClient;
        Object f10 = ur.b.f();
        int i10 = this.label;
        try {
            if (i10 != 0) {
                if (i10 == 1) {
                    kotlin.c.b(obj);
                    suspendUntilReady$default = obj;
                } else {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
            } else {
                kotlin.c.b(obj);
                BillingManager billingManager = this.this$0;
                this.label = 1;
                suspendUntilReady$default = BillingManager.suspendUntilReady$default(billingManager, 0L, this, 1, null);
                if (suspendUntilReady$default == f10) {
                    return f10;
                }
            }
            clientReadyState = (BillingManager.ClientReadyState) suspendUntilReady$default;
            this.this$0.trackBillingMetric("operation", CollectionsKt.o("method:purchase", "client_ready:" + clientReadyState.getMetricValue()));
        } catch (CancellationException e10) {
            throw e10;
        } catch (Exception e11) {
            CrashReporting.captureException$default(CrashReporting.INSTANCE, e11, false, 2, null);
            this.$onError.invoke(BillingManagerException.Companion.wrap(e11, "purchase"));
        }
        if (clientReadyState == BillingManager.ClientReadyState.TIMEOUT) {
            this.$onError.invoke(new BillingManagerException.BillingClientNotReadyException());
            return Unit.f31988a;
        }
        final Ref.BooleanRef booleanRef = new Ref.BooleanRef();
        billingClient = this.this$0.billingClient;
        if (billingClient == null) {
            Intrinsics.throwUninitializedPropertyAccessException("billingClient");
            billingClient = null;
        }
        QueryProductDetailsParams create = com.discord.billing.types.QueryProductDetailsParams.INSTANCE.create(this.$productType, CollectionsKt.q(this.$productId, this.$oldProductId));
        final BillingManager billingManager2 = this.this$0;
        final Function1<BillingManagerException, Unit> function1 = this.$onError;
        final String str = this.$productId;
        final String str2 = this.$oldProductId;
        final String str3 = this.$purchaseToken;
        final String str4 = this.$userId;
        final String str5 = this.$offerId;
        final Activity activity = this.$activity;
        final Function0<Unit> function0 = this.$onSuccess;
        billingClient.i(create, new a6.h() { // from class: com.discord.billing.h
            @Override // a6.h
            public final void a(BillingResult billingResult, List list) {
                BillingManager$purchase$1.invokeSuspend$lambda$1(BillingManager.this, function1, str, str2, str3, str4, str5, activity, function0, booleanRef, billingResult, list);
            }
        });
        return Unit.f31988a;
    }

    @Override // kotlin.jvm.functions.Function2
    public final Object invoke(CoroutineScope coroutineScope, Continuation<? super Unit> continuation) {
        return ((BillingManager$purchase$1) create(coroutineScope, continuation)).invokeSuspend(Unit.f31988a);
    }
}
