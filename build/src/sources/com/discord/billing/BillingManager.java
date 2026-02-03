package com.discord.billing;

import android.app.Activity;
import androidx.lifecycle.LifecycleOwner;
import com.android.billingclient.api.BillingClient;
import com.android.billingclient.api.BillingConfig;
import com.android.billingclient.api.BillingResult;
import com.android.billingclient.api.ProductDetails;
import com.android.billingclient.api.Purchase;
import com.discord.billing.BillingManager;
import com.discord.billing.BillingManagerException;
import com.discord.billing.types.ProductType;
import com.discord.metric_monitor.MetricEvent;
import com.discord.metric_monitor.MonitoringAgent;
import com.discord.misc.utilities.backoff.ExponentialBackoff;
import com.discord.misc.utilities.logThrottle.LogThrottleSingleton;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import hs.m0;
import hs.v0;
import java.util.ArrayList;
import java.util.List;
import java.util.Set;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.collections.CollectionsKt;
import kotlin.collections.x0;
import kotlin.coroutines.Continuation;
import kotlin.enums.EnumEntries;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.functions.Function3;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import kotlinx.coroutines.CompletableDeferred;
import kotlinx.coroutines.CoroutineScope;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000Å\u0001\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000b\n\u0000\n\u0002\u0018\u0002\n\u0002\u0010\b\n\u0002\u0010\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\u0010\u000e\n\u0002\b\u0004\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010 \n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\t\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\f\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0006\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0006\n\u0002\u0018\u0002\n\u0002\b\u0015\n\u0002\u0010!\n\u0002\u0018\u0002\n\u0002\b\u0005\n\u0002\u0010\"\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\b*\u0001n\b\u0000\u0018\u00002\u00020\u0001:\u0004uvwxBe\u0012\u0006\u0010\u0003\u001a\u00020\u0002\u0012\u0006\u0010\u0005\u001a\u00020\u0004\u0012\u0012\u0010\t\u001a\u000e\u0012\u0004\u0012\u00020\u0007\u0012\u0004\u0012\u00020\b0\u0006\u0012\u0018\u0010\u000b\u001a\u0014\u0012\u0004\u0012\u00020\u0007\u0012\u0004\u0012\u00020\u0004\u0012\u0004\u0012\u00020\b0\n\u0012\u001e\u0010\u000e\u001a\u001a\u0012\u0004\u0012\u00020\r\u0012\u0004\u0012\u00020\r\u0012\u0004\u0012\u00020\r\u0012\u0004\u0012\u00020\b0\f¢\u0006\u0004\b\u000f\u0010\u0010J\u0017\u0010\u0013\u001a\u00020\u00122\u0006\u0010\u0011\u001a\u00020\u0002H\u0002¢\u0006\u0004\b\u0013\u0010\u0014J'\u0010\u0018\u001a\u00020\b2\u0006\u0010\u0015\u001a\u00020\r2\u000e\b\u0002\u0010\u0017\u001a\b\u0012\u0004\u0012\u00020\r0\u0016H\u0002¢\u0006\u0004\b\u0018\u0010\u0019J\u0017\u0010\u001c\u001a\u00020\b2\u0006\u0010\u001b\u001a\u00020\u001aH\u0002¢\u0006\u0004\b\u001c\u0010\u001dJ\u001a\u0010!\u001a\u00020 2\b\b\u0002\u0010\u001f\u001a\u00020\u001eH\u0082@¢\u0006\u0004\b!\u0010\"J\u0017\u0010%\u001a\u00020\u00042\u0006\u0010$\u001a\u00020#H\u0002¢\u0006\u0004\b%\u0010&J1\u0010*\u001a\u00020\b2\u0006\u0010$\u001a\u00020#2\u000e\u0010(\u001a\n\u0012\u0004\u0012\u00020'\u0018\u00010\u00162\b\b\u0002\u0010)\u001a\u00020\u0004H\u0002¢\u0006\u0004\b*\u0010+J\u000f\u0010,\u001a\u00020\bH\u0002¢\u0006\u0004\b,\u0010-J\u000f\u0010.\u001a\u00020\u0004H\u0002¢\u0006\u0004\b.\u0010/J\u0017\u00101\u001a\u00020\b2\u0006\u00100\u001a\u00020'H\u0002¢\u0006\u0004\b1\u00102J\u0013\u00103\u001a\u00020\u0004*\u00020#H\u0002¢\u0006\u0004\b3\u0010&J,\u00107\u001a\u00020\b*\u0012\u0012\b\u0012\u000604j\u0002`5\u0012\u0004\u0012\u00020\b0\u00062\u0006\u00106\u001a\u00020\rH\u0082\u0002¢\u0006\u0004\b7\u00108J\r\u00109\u001a\u00020\b¢\u0006\u0004\b9\u0010-J\r\u0010:\u001a\u00020\b¢\u0006\u0004\b:\u0010-J?\u0010B\u001a\u00020\b2\f\u0010;\u001a\b\u0012\u0004\u0012\u00020\r0\u00162\u0006\u0010=\u001a\u00020<2\u0006\u0010?\u001a\u00020>2\u0012\u0010A\u001a\u000e\u0012\u0004\u0012\u00020@\u0012\u0004\u0012\u00020\b0\u0006¢\u0006\u0004\bB\u0010CJu\u00100\u001a\u00020\b2\b\u0010E\u001a\u0004\u0018\u00010D2\u0006\u0010F\u001a\u00020\r2\u0006\u0010=\u001a\u00020<2\u0006\u0010G\u001a\u00020\r2\n\b\u0002\u0010H\u001a\u0004\u0018\u00010\r2\n\b\u0002\u0010I\u001a\u0004\u0018\u00010\r2\n\b\u0002\u0010J\u001a\u0004\u0018\u00010\r2\f\u0010L\u001a\b\u0012\u0004\u0012\u00020\b0K2\u0012\u0010A\u001a\u000e\u0012\u0004\u0012\u00020@\u0012\u0004\u0012\u00020\b0\u0006¢\u0006\u0004\b0\u0010MJ7\u0010N\u001a\u00020\b2\u0006\u0010I\u001a\u00020\r2\f\u0010L\u001a\b\u0012\u0004\u0012\u00020\b0K2\u0012\u0010A\u001a\u000e\u0012\u0004\u0012\u00020@\u0012\u0004\u0012\u00020\b0\u0006¢\u0006\u0004\bN\u0010OJ7\u0010P\u001a\u00020\b2\u000e\b\u0002\u0010L\u001a\b\u0012\u0004\u0012\u00020\b0K2\u0018\b\u0002\u0010A\u001a\u0012\u0012\b\u0012\u000604j\u0002`5\u0012\u0004\u0012\u00020\b0\u0006¢\u0006\u0004\bP\u0010QJ5\u0010R\u001a\u00020\b2\u0012\u0010L\u001a\u000e\u0012\u0004\u0012\u00020\r\u0012\u0004\u0012\u00020\b0\u00062\u0012\u0010A\u001a\u000e\u0012\u0004\u0012\u00020@\u0012\u0004\u0012\u00020\b0\u0006¢\u0006\u0004\bR\u0010SR\u0014\u0010\u0003\u001a\u00020\u00028\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u0003\u0010TR\u0014\u0010\u0005\u001a\u00020\u00048\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u0005\u0010UR#\u0010\t\u001a\u000e\u0012\u0004\u0012\u00020\u0007\u0012\u0004\u0012\u00020\b0\u00068\u0006¢\u0006\f\n\u0004\b\t\u0010V\u001a\u0004\bW\u0010XR)\u0010\u000b\u001a\u0014\u0012\u0004\u0012\u00020\u0007\u0012\u0004\u0012\u00020\u0004\u0012\u0004\u0012\u00020\b0\n8\u0006¢\u0006\f\n\u0004\b\u000b\u0010Y\u001a\u0004\bZ\u0010[R/\u0010\u000e\u001a\u001a\u0012\u0004\u0012\u00020\r\u0012\u0004\u0012\u00020\r\u0012\u0004\u0012\u00020\r\u0012\u0004\u0012\u00020\b0\f8\u0006¢\u0006\f\n\u0004\b\u000e\u0010\\\u001a\u0004\b]\u0010^R\u0016\u0010_\u001a\u00020\u001a8\u0002@\u0002X\u0082\u000e¢\u0006\u0006\n\u0004\b_\u0010`R \u0010c\u001a\u000e\u0012\n\u0012\b\u0012\u0004\u0012\u00020\u00040b0a8\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\bc\u0010dR\u0014\u0010e\u001a\u00020\r8\u0002X\u0082D¢\u0006\u0006\n\u0004\be\u0010fR\u0014\u0010g\u001a\u00020\r8\u0002X\u0082D¢\u0006\u0006\n\u0004\bg\u0010fR\u001a\u0010i\u001a\b\u0012\u0004\u0012\u00020\r0h8\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\bi\u0010jR\u0016\u0010l\u001a\u00020k8\u0002@\u0002X\u0082.¢\u0006\u0006\n\u0004\bl\u0010mR\u0014\u0010o\u001a\u00020n8\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\bo\u0010pR\u001a\u0010r\u001a\u00020q8\u0002X\u0082\u0004¢\u0006\f\n\u0004\br\u0010s\u0012\u0004\bt\u0010-¨\u0006y"}, d2 = {"Lcom/discord/billing/BillingManager;", "", "Lcom/facebook/react/bridge/ReactApplicationContext;", "reactContext", "", "isProdBuild", "Lkotlin/Function1;", "", "", "onConnectionUpdated", "Lkotlin/Function2;", "onPurchaseStateUpdated", "Lkotlin/Function3;", "", "onPurchaseUpdated", "<init>", "(Lcom/facebook/react/bridge/ReactApplicationContext;ZLkotlin/jvm/functions/Function1;Lkotlin/jvm/functions/Function2;Lkotlin/jvm/functions/Function3;)V", "context", "Lkotlinx/coroutines/CoroutineScope;", "getCoroutineScope", "(Lcom/facebook/react/bridge/ReactApplicationContext;)Lkotlinx/coroutines/CoroutineScope;", "metricName", "", "tags", "trackBillingMetric", "(Ljava/lang/String;Ljava/util/List;)V", "Lcom/discord/billing/BillingManager$ConnectionState;", "state", "updateConnectionState", "(Lcom/discord/billing/BillingManager$ConnectionState;)V", "", "timeoutMs", "Lcom/discord/billing/BillingManager$ClientReadyState;", "suspendUntilReady", "(JLkotlin/coroutines/Continuation;)Ljava/lang/Object;", "Lcom/android/billingclient/api/BillingResult;", "billingResult", "isRetryableError", "(Lcom/android/billingclient/api/BillingResult;)Z", "Lcom/android/billingclient/api/Purchase;", "purchases", "isActivePurchase", "handlePurchases", "(Lcom/android/billingclient/api/BillingResult;Ljava/util/List;Z)V", "reconnect", "()V", "isBillingClientReady", "()Z", "purchase", "verifyPurchase", "(Lcom/android/billingclient/api/Purchase;)V", "isNotOk", "Ljava/lang/Exception;", "Lkotlin/Exception;", "errorMessage", "invoke", "(Lkotlin/jvm/functions/Function1;Ljava/lang/String;)V", "open", "close", "productIds", "Lcom/discord/billing/types/ProductType;", "productType", "Lcom/facebook/react/bridge/Promise;", "reactPromise", "Lcom/discord/billing/BillingManagerException;", "onError", "getProducts", "(Ljava/util/List;Lcom/discord/billing/types/ProductType;Lcom/facebook/react/bridge/Promise;Lkotlin/jvm/functions/Function1;)V", "Landroid/app/Activity;", "activity", "productId", "userId", "oldProductId", "purchaseToken", "offerId", "Lkotlin/Function0;", "onSuccess", "(Landroid/app/Activity;Ljava/lang/String;Lcom/discord/billing/types/ProductType;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Lkotlin/jvm/functions/Function0;Lkotlin/jvm/functions/Function1;)V", "consumePurchase", "(Ljava/lang/String;Lkotlin/jvm/functions/Function0;Lkotlin/jvm/functions/Function1;)V", "loadPurchases", "(Lkotlin/jvm/functions/Function0;Lkotlin/jvm/functions/Function1;)V", "getUserCountry", "(Lkotlin/jvm/functions/Function1;Lkotlin/jvm/functions/Function1;)V", "Lcom/facebook/react/bridge/ReactApplicationContext;", "Z", "Lkotlin/jvm/functions/Function1;", "getOnConnectionUpdated", "()Lkotlin/jvm/functions/Function1;", "Lkotlin/jvm/functions/Function2;", "getOnPurchaseStateUpdated", "()Lkotlin/jvm/functions/Function2;", "Lkotlin/jvm/functions/Function3;", "getOnPurchaseUpdated", "()Lkotlin/jvm/functions/Function3;", "currentConnectionState", "Lcom/discord/billing/BillingManager$ConnectionState;", "", "Lkotlinx/coroutines/CompletableDeferred;", "connectionReadyListeners", "Ljava/util/List;", "prodPackageName", "Ljava/lang/String;", "devPackageName", "", "allowedPackageNames", "Ljava/util/Set;", "Lcom/android/billingclient/api/BillingClient;", "billingClient", "Lcom/android/billingclient/api/BillingClient;", "com/discord/billing/BillingManager$billingClientStateListener$1", "billingClientStateListener", "Lcom/discord/billing/BillingManager$billingClientStateListener$1;", "Lcom/discord/misc/utilities/backoff/ExponentialBackoff;", "backoff", "Lcom/discord/misc/utilities/backoff/ExponentialBackoff;", "getBackoff$annotations", "ConnectionState", "ClientReadyState", "ProductDetailsResponse", "BillingConfigResponse", "billing_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@SourceDebugExtension({"SMAP\nBillingManager.kt\nKotlin\n*S Kotlin\n*F\n+ 1 BillingManager.kt\ncom/discord/billing/BillingManager\n+ 2 _Collections.kt\nkotlin/collections/CollectionsKt___CollectionsKt\n+ 3 fake.kt\nkotlin/jvm/internal/FakeKt\n*L\n1#1,736:1\n1869#2,2:737\n1869#2,2:739\n1869#2,2:742\n1869#2,2:744\n1#3:741\n*S KotlinDebug\n*F\n+ 1 BillingManager.kt\ncom/discord/billing/BillingManager\n*L\n233#1:737,2\n238#1:739,2\n294#1:742,2\n725#1:744,2\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class BillingManager {
    @NotNull
    private final Set<String> allowedPackageNames;
    @NotNull
    private final ExponentialBackoff backoff;
    private BillingClient billingClient;
    @NotNull
    private final BillingManager$billingClientStateListener$1 billingClientStateListener;
    @NotNull
    private final List<CompletableDeferred> connectionReadyListeners;
    @NotNull
    private volatile ConnectionState currentConnectionState;
    @NotNull
    private final String devPackageName;
    private final boolean isProdBuild;
    @NotNull
    private final Function1<Integer, Unit> onConnectionUpdated;
    @NotNull
    private final Function2<Integer, Boolean, Unit> onPurchaseStateUpdated;
    @NotNull
    private final Function3 onPurchaseUpdated;
    @NotNull
    private final String prodPackageName;
    @NotNull
    private final ReactApplicationContext reactContext;

    @Metadata(d1 = {"\u0000,\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\n\n\u0002\u0010\u000b\n\u0002\b\u0002\n\u0002\u0010\b\n\u0000\n\u0002\u0010\u000e\n\u0000\b\u0086\b\u0018\u00002\u00020\u0001B\u0019\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\b\u0010\u0004\u001a\u0004\u0018\u00010\u0005¢\u0006\u0004\b\u0006\u0010\u0007J\t\u0010\f\u001a\u00020\u0003HÆ\u0003J\u000b\u0010\r\u001a\u0004\u0018\u00010\u0005HÆ\u0003J\u001f\u0010\u000e\u001a\u00020\u00002\b\b\u0002\u0010\u0002\u001a\u00020\u00032\n\b\u0002\u0010\u0004\u001a\u0004\u0018\u00010\u0005HÆ\u0001J\u0013\u0010\u000f\u001a\u00020\u00102\b\u0010\u0011\u001a\u0004\u0018\u00010\u0001HÖ\u0003J\t\u0010\u0012\u001a\u00020\u0013HÖ\u0001J\t\u0010\u0014\u001a\u00020\u0015HÖ\u0001R\u0011\u0010\u0002\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\b\u0010\tR\u0013\u0010\u0004\u001a\u0004\u0018\u00010\u0005¢\u0006\b\n\u0000\u001a\u0004\b\n\u0010\u000b¨\u0006\u0016"}, d2 = {"Lcom/discord/billing/BillingManager$BillingConfigResponse;", "", "billingResult", "Lcom/android/billingclient/api/BillingResult;", "billingConfig", "Lcom/android/billingclient/api/BillingConfig;", "<init>", "(Lcom/android/billingclient/api/BillingResult;Lcom/android/billingclient/api/BillingConfig;)V", "getBillingResult", "()Lcom/android/billingclient/api/BillingResult;", "getBillingConfig", "()Lcom/android/billingclient/api/BillingConfig;", "component1", "component2", "copy", "equals", "", "other", "hashCode", "", "toString", "", "billing_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class BillingConfigResponse {
        private final BillingConfig billingConfig;
        @NotNull
        private final BillingResult billingResult;

        public BillingConfigResponse(@NotNull BillingResult billingResult, BillingConfig billingConfig) {
            Intrinsics.checkNotNullParameter(billingResult, "billingResult");
            this.billingResult = billingResult;
            this.billingConfig = billingConfig;
        }

        public static /* synthetic */ BillingConfigResponse copy$default(BillingConfigResponse billingConfigResponse, BillingResult billingResult, BillingConfig billingConfig, int i10, Object obj) {
            if ((i10 & 1) != 0) {
                billingResult = billingConfigResponse.billingResult;
            }
            if ((i10 & 2) != 0) {
                billingConfig = billingConfigResponse.billingConfig;
            }
            return billingConfigResponse.copy(billingResult, billingConfig);
        }

        @NotNull
        public final BillingResult component1() {
            return this.billingResult;
        }

        public final BillingConfig component2() {
            return this.billingConfig;
        }

        @NotNull
        public final BillingConfigResponse copy(@NotNull BillingResult billingResult, BillingConfig billingConfig) {
            Intrinsics.checkNotNullParameter(billingResult, "billingResult");
            return new BillingConfigResponse(billingResult, billingConfig);
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (obj instanceof BillingConfigResponse) {
                BillingConfigResponse billingConfigResponse = (BillingConfigResponse) obj;
                return Intrinsics.areEqual(this.billingResult, billingConfigResponse.billingResult) && Intrinsics.areEqual(this.billingConfig, billingConfigResponse.billingConfig);
            }
            return false;
        }

        public final BillingConfig getBillingConfig() {
            return this.billingConfig;
        }

        @NotNull
        public final BillingResult getBillingResult() {
            return this.billingResult;
        }

        public int hashCode() {
            int hashCode = this.billingResult.hashCode() * 31;
            BillingConfig billingConfig = this.billingConfig;
            return hashCode + (billingConfig == null ? 0 : billingConfig.hashCode());
        }

        @NotNull
        public String toString() {
            BillingResult billingResult = this.billingResult;
            BillingConfig billingConfig = this.billingConfig;
            return "BillingConfigResponse(billingResult=" + billingResult + ", billingConfig=" + billingConfig + ")";
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
    /* JADX WARN: Unknown enum class pattern. Please report as an issue! */
    @Metadata(d1 = {"\u0000\u0012\n\u0002\u0018\u0002\n\u0002\u0010\u0010\n\u0000\n\u0002\u0010\u000e\n\u0002\b\b\b\u0082\u0081\u0002\u0018\u00002\b\u0012\u0004\u0012\u00020\u00000\u0001B\u0011\b\u0002\u0012\u0006\u0010\u0002\u001a\u00020\u0003¢\u0006\u0004\b\u0004\u0010\u0005R\u0011\u0010\u0002\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0006\u0010\u0007j\u0002\b\bj\u0002\b\tj\u0002\b\n¨\u0006\u000b"}, d2 = {"Lcom/discord/billing/BillingManager$ClientReadyState;", "", "metricValue", "", "<init>", "(Ljava/lang/String;ILjava/lang/String;)V", "getMetricValue", "()Ljava/lang/String;", "IMMEDIATE", "AFTER_WAIT", "TIMEOUT", "billing_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class ClientReadyState {
        private static final /* synthetic */ EnumEntries $ENTRIES;
        private static final /* synthetic */ ClientReadyState[] $VALUES;
        @NotNull
        private final String metricValue;
        public static final ClientReadyState IMMEDIATE = new ClientReadyState("IMMEDIATE", 0, "immediate");
        public static final ClientReadyState AFTER_WAIT = new ClientReadyState("AFTER_WAIT", 1, "after_wait");
        public static final ClientReadyState TIMEOUT = new ClientReadyState("TIMEOUT", 2, "timeout");

        private static final /* synthetic */ ClientReadyState[] $values() {
            return new ClientReadyState[]{IMMEDIATE, AFTER_WAIT, TIMEOUT};
        }

        static {
            ClientReadyState[] $values = $values();
            $VALUES = $values;
            $ENTRIES = qr.a.a($values);
        }

        private ClientReadyState(String str, int i10, String str2) {
            this.metricValue = str2;
        }

        @NotNull
        public static EnumEntries getEntries() {
            return $ENTRIES;
        }

        public static ClientReadyState valueOf(String str) {
            return (ClientReadyState) Enum.valueOf(ClientReadyState.class, str);
        }

        public static ClientReadyState[] values() {
            return (ClientReadyState[]) $VALUES.clone();
        }

        @NotNull
        public final String getMetricValue() {
            return this.metricValue;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
    /* JADX WARN: Unknown enum class pattern. Please report as an issue! */
    @Metadata(d1 = {"\u0000\u0012\n\u0002\u0018\u0002\n\u0002\u0010\u0010\n\u0000\n\u0002\u0010\b\n\u0002\b\t\b\u0082\u0081\u0002\u0018\u00002\b\u0012\u0004\u0012\u00020\u00000\u0001B\u0011\b\u0002\u0012\u0006\u0010\u0002\u001a\u00020\u0003¢\u0006\u0004\b\u0004\u0010\u0005R\u0011\u0010\u0002\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0006\u0010\u0007j\u0002\b\bj\u0002\b\tj\u0002\b\nj\u0002\b\u000b¨\u0006\f"}, d2 = {"Lcom/discord/billing/BillingManager$ConnectionState;", "", "value", "", "<init>", "(Ljava/lang/String;II)V", "getValue", "()I", "DISCONNECTED", "CONNECTING", "CONNECTED", "ERROR", "billing_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class ConnectionState {
        private static final /* synthetic */ EnumEntries $ENTRIES;
        private static final /* synthetic */ ConnectionState[] $VALUES;
        private final int value;
        public static final ConnectionState DISCONNECTED = new ConnectionState("DISCONNECTED", 0, 0);
        public static final ConnectionState CONNECTING = new ConnectionState("CONNECTING", 1, 1);
        public static final ConnectionState CONNECTED = new ConnectionState("CONNECTED", 2, 2);
        public static final ConnectionState ERROR = new ConnectionState("ERROR", 3, 3);

        private static final /* synthetic */ ConnectionState[] $values() {
            return new ConnectionState[]{DISCONNECTED, CONNECTING, CONNECTED, ERROR};
        }

        static {
            ConnectionState[] $values = $values();
            $VALUES = $values;
            $ENTRIES = qr.a.a($values);
        }

        private ConnectionState(String str, int i10, int i11) {
            this.value = i11;
        }

        @NotNull
        public static EnumEntries getEntries() {
            return $ENTRIES;
        }

        public static ConnectionState valueOf(String str) {
            return (ConnectionState) Enum.valueOf(ConnectionState.class, str);
        }

        public static ConnectionState[] values() {
            return (ConnectionState[]) $VALUES.clone();
        }

        public final int getValue() {
            return this.value;
        }
    }

    @Metadata(d1 = {"\u00000\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010 \n\u0002\u0018\u0002\n\u0002\b\n\n\u0002\u0010\u000b\n\u0002\b\u0002\n\u0002\u0010\b\n\u0000\n\u0002\u0010\u000e\n\u0000\b\u0086\b\u0018\u00002\u00020\u0001B\u001f\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\u000e\u0010\u0004\u001a\n\u0012\u0004\u0012\u00020\u0006\u0018\u00010\u0005¢\u0006\u0004\b\u0007\u0010\bJ\t\u0010\r\u001a\u00020\u0003HÆ\u0003J\u0011\u0010\u000e\u001a\n\u0012\u0004\u0012\u00020\u0006\u0018\u00010\u0005HÆ\u0003J%\u0010\u000f\u001a\u00020\u00002\b\b\u0002\u0010\u0002\u001a\u00020\u00032\u0010\b\u0002\u0010\u0004\u001a\n\u0012\u0004\u0012\u00020\u0006\u0018\u00010\u0005HÆ\u0001J\u0013\u0010\u0010\u001a\u00020\u00112\b\u0010\u0012\u001a\u0004\u0018\u00010\u0001HÖ\u0003J\t\u0010\u0013\u001a\u00020\u0014HÖ\u0001J\t\u0010\u0015\u001a\u00020\u0016HÖ\u0001R\u0011\u0010\u0002\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\t\u0010\nR\u0019\u0010\u0004\u001a\n\u0012\u0004\u0012\u00020\u0006\u0018\u00010\u0005¢\u0006\b\n\u0000\u001a\u0004\b\u000b\u0010\f¨\u0006\u0017"}, d2 = {"Lcom/discord/billing/BillingManager$ProductDetailsResponse;", "", "billingResult", "Lcom/android/billingclient/api/BillingResult;", "productDetails", "", "Lcom/android/billingclient/api/ProductDetails;", "<init>", "(Lcom/android/billingclient/api/BillingResult;Ljava/util/List;)V", "getBillingResult", "()Lcom/android/billingclient/api/BillingResult;", "getProductDetails", "()Ljava/util/List;", "component1", "component2", "copy", "equals", "", "other", "hashCode", "", "toString", "", "billing_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class ProductDetailsResponse {
        @NotNull
        private final BillingResult billingResult;
        private final List<ProductDetails> productDetails;

        public ProductDetailsResponse(@NotNull BillingResult billingResult, List<ProductDetails> list) {
            Intrinsics.checkNotNullParameter(billingResult, "billingResult");
            this.billingResult = billingResult;
            this.productDetails = list;
        }

        /* JADX WARN: Multi-variable type inference failed */
        public static /* synthetic */ ProductDetailsResponse copy$default(ProductDetailsResponse productDetailsResponse, BillingResult billingResult, List list, int i10, Object obj) {
            if ((i10 & 1) != 0) {
                billingResult = productDetailsResponse.billingResult;
            }
            if ((i10 & 2) != 0) {
                list = productDetailsResponse.productDetails;
            }
            return productDetailsResponse.copy(billingResult, list);
        }

        @NotNull
        public final BillingResult component1() {
            return this.billingResult;
        }

        public final List<ProductDetails> component2() {
            return this.productDetails;
        }

        @NotNull
        public final ProductDetailsResponse copy(@NotNull BillingResult billingResult, List<ProductDetails> list) {
            Intrinsics.checkNotNullParameter(billingResult, "billingResult");
            return new ProductDetailsResponse(billingResult, list);
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (obj instanceof ProductDetailsResponse) {
                ProductDetailsResponse productDetailsResponse = (ProductDetailsResponse) obj;
                return Intrinsics.areEqual(this.billingResult, productDetailsResponse.billingResult) && Intrinsics.areEqual(this.productDetails, productDetailsResponse.productDetails);
            }
            return false;
        }

        @NotNull
        public final BillingResult getBillingResult() {
            return this.billingResult;
        }

        public final List<ProductDetails> getProductDetails() {
            return this.productDetails;
        }

        public int hashCode() {
            int hashCode = this.billingResult.hashCode() * 31;
            List<ProductDetails> list = this.productDetails;
            return hashCode + (list == null ? 0 : list.hashCode());
        }

        @NotNull
        public String toString() {
            BillingResult billingResult = this.billingResult;
            List<ProductDetails> list = this.productDetails;
            return "ProductDetailsResponse(billingResult=" + billingResult + ", productDetails=" + list + ")";
        }
    }

    /* JADX WARN: Multi-variable type inference failed */
    /* JADX WARN: Type inference failed for: r8v6, types: [com.discord.billing.BillingManager$billingClientStateListener$1] */
    public BillingManager(@NotNull ReactApplicationContext reactContext, boolean z10, @NotNull Function1<? super Integer, Unit> onConnectionUpdated, @NotNull Function2<? super Integer, ? super Boolean, Unit> onPurchaseStateUpdated, @NotNull Function3 onPurchaseUpdated) {
        Intrinsics.checkNotNullParameter(reactContext, "reactContext");
        Intrinsics.checkNotNullParameter(onConnectionUpdated, "onConnectionUpdated");
        Intrinsics.checkNotNullParameter(onPurchaseStateUpdated, "onPurchaseStateUpdated");
        Intrinsics.checkNotNullParameter(onPurchaseUpdated, "onPurchaseUpdated");
        this.reactContext = reactContext;
        this.isProdBuild = z10;
        this.onConnectionUpdated = onConnectionUpdated;
        this.onPurchaseStateUpdated = onPurchaseStateUpdated;
        this.onPurchaseUpdated = onPurchaseUpdated;
        this.currentConnectionState = ConnectionState.DISCONNECTED;
        this.connectionReadyListeners = new ArrayList();
        this.prodPackageName = com.discord.BuildConfig.APPLICATION_ID;
        this.devPackageName = "com.discord.debug.billingtesting";
        this.allowedPackageNames = x0.i(com.discord.BuildConfig.APPLICATION_ID, "com.discord.debug.billingtesting");
        this.billingClientStateListener = new a6.c() { // from class: com.discord.billing.BillingManager$billingClientStateListener$1
            @Override // a6.c
            public void onBillingServiceDisconnected() {
                BillingClient billingClient;
                BillingManager.this.updateConnectionState(BillingManager.ConnectionState.DISCONNECTED);
                billingClient = BillingManager.this.billingClient;
                if (billingClient == null) {
                    Intrinsics.throwUninitializedPropertyAccessException("billingClient");
                    billingClient = null;
                }
                if (!billingClient.f()) {
                    BillingManager.this.reconnect();
                }
            }

            @Override // a6.c
            public void onBillingSetupFinished(BillingResult billingResult) {
                boolean isNotOk;
                ExponentialBackoff exponentialBackoff;
                Intrinsics.checkNotNullParameter(billingResult, "billingResult");
                isNotOk = BillingManager.this.isNotOk(billingResult);
                if (isNotOk) {
                    BillingManager.this.reconnect();
                    return;
                }
                exponentialBackoff = BillingManager.this.backoff;
                exponentialBackoff.succeed();
                BillingManager.this.updateConnectionState(BillingManager.ConnectionState.CONNECTED);
                BillingManager.loadPurchases$default(BillingManager.this, null, null, 3, null);
            }
        };
        this.backoff = new ExponentialBackoff(v0.f27954d, 1000L, LogThrottleSingleton.RATE_LIMIT_FIVE_MINUTES, 10);
    }

    private static /* synthetic */ void getBackoff$annotations() {
    }

    private final CoroutineScope getCoroutineScope(ReactApplicationContext reactApplicationContext) {
        LifecycleOwner lifecycleOwner;
        Activity currentActivity = reactApplicationContext.getCurrentActivity();
        androidx.lifecycle.j jVar = null;
        if (currentActivity instanceof LifecycleOwner) {
            lifecycleOwner = (LifecycleOwner) currentActivity;
        } else {
            lifecycleOwner = null;
        }
        if (lifecycleOwner != null) {
            jVar = androidx.lifecycle.p.a(lifecycleOwner);
        }
        if (jVar != null) {
            return jVar;
        }
        return v0.f27954d;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final void handlePurchases(BillingResult billingResult, List<? extends Purchase> list, boolean z10) {
        this.onPurchaseStateUpdated.invoke(Integer.valueOf(billingResult.b()), Boolean.valueOf(z10));
        List<? extends Purchase> list2 = list;
        if (list2 != null && !list2.isEmpty()) {
            for (Purchase purchase : list) {
                verifyPurchase(purchase);
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static /* synthetic */ void handlePurchases$default(BillingManager billingManager, BillingResult billingResult, List list, boolean z10, int i10, Object obj) {
        if ((i10 & 4) != 0) {
            z10 = true;
        }
        billingManager.handlePurchases(billingResult, list, z10);
    }

    private final void invoke(Function1<? super Exception, Unit> function1, String str) {
        Intrinsics.checkNotNullParameter(function1, "<this>");
        function1.invoke(new IllegalStateException(str));
    }

    private final boolean isBillingClientReady() {
        BillingClient billingClient = this.billingClient;
        if (billingClient != null) {
            if (billingClient == null) {
                Intrinsics.throwUninitializedPropertyAccessException("billingClient");
                billingClient = null;
            }
            if (billingClient.f()) {
                return true;
            }
            return false;
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final boolean isNotOk(BillingResult billingResult) {
        if (billingResult.b() != 0) {
            return true;
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final boolean isRetryableError(BillingResult billingResult) {
        if (isNotOk(billingResult) && x0.i(6, -1, 2, 12).contains(Integer.valueOf(billingResult.b()))) {
            return true;
        }
        return false;
    }

    /* JADX WARN: Multi-variable type inference failed */
    public static /* synthetic */ void loadPurchases$default(BillingManager billingManager, Function0 function0, Function1 function1, int i10, Object obj) {
        if ((i10 & 1) != 0) {
            function0 = new Function0() { // from class: com.discord.billing.b
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit unit;
                    unit = Unit.f33074a;
                    return unit;
                }
            };
        }
        if ((i10 & 2) != 0) {
            function1 = new Function1() { // from class: com.discord.billing.c
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj2) {
                    Unit loadPurchases$lambda$8;
                    loadPurchases$lambda$8 = BillingManager.loadPurchases$lambda$8((Exception) obj2);
                    return loadPurchases$lambda$8;
                }
            };
        }
        billingManager.loadPurchases(function0, function1);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit loadPurchases$lambda$8(Exception it) {
        Intrinsics.checkNotNullParameter(it, "it");
        return Unit.f33074a;
    }

    public static /* synthetic */ void purchase$default(BillingManager billingManager, Activity activity, String str, ProductType productType, String str2, String str3, String str4, String str5, Function0 function0, Function1 function1, int i10, Object obj) {
        if ((i10 & 16) != 0) {
            str3 = null;
        }
        if ((i10 & 32) != 0) {
            str4 = null;
        }
        if ((i10 & 64) != 0) {
            str5 = null;
        }
        billingManager.purchase(activity, str, productType, str2, str3, str4, str5, function0, function1);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final void reconnect() {
        try {
            this.backoff.fail(new BillingManager$reconnect$1(this, null));
        } catch (Exception unused) {
            updateConnectionState(ConnectionState.ERROR);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* JADX WARN: Removed duplicated region for block: B:10:0x0023  */
    /* JADX WARN: Removed duplicated region for block: B:16:0x0035  */
    /* JADX WARN: Removed duplicated region for block: B:61:0x008c A[EXC_TOP_SPLITTER, SYNTHETIC] */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public final java.lang.Object suspendUntilReady(long r8, kotlin.coroutines.Continuation<? super com.discord.billing.BillingManager.ClientReadyState> r10) {
        /*
            r7 = this;
            boolean r0 = r10 instanceof com.discord.billing.BillingManager$suspendUntilReady$1
            if (r0 == 0) goto L13
            r0 = r10
            com.discord.billing.BillingManager$suspendUntilReady$1 r0 = (com.discord.billing.BillingManager$suspendUntilReady$1) r0
            int r1 = r0.label
            r2 = -2147483648(0xffffffff80000000, float:-0.0)
            r3 = r1 & r2
            if (r3 == 0) goto L13
            int r1 = r1 - r2
            r0.label = r1
            goto L18
        L13:
            com.discord.billing.BillingManager$suspendUntilReady$1 r0 = new com.discord.billing.BillingManager$suspendUntilReady$1
            r0.<init>(r7, r10)
        L18:
            java.lang.Object r10 = r0.result
            java.lang.Object r1 = pr.b.f()
            int r2 = r0.label
            r3 = 1
            if (r2 == 0) goto L35
            if (r2 != r3) goto L2d
            java.lang.Object r8 = r0.L$0
            kotlinx.coroutines.CompletableDeferred r8 = (kotlinx.coroutines.CompletableDeferred) r8
            kotlin.c.b(r10)     // Catch: hs.r1 -> L89
            goto L85
        L2d:
            java.lang.IllegalStateException r8 = new java.lang.IllegalStateException
            java.lang.String r9 = "call to 'resume' before 'invoke' with coroutine"
            r8.<init>(r9)
            throw r8
        L35:
            kotlin.c.b(r10)
            boolean r10 = r7.isBillingClientReady()
            if (r10 == 0) goto L41
            com.discord.billing.BillingManager$ClientReadyState r8 = com.discord.billing.BillingManager.ClientReadyState.IMMEDIATE
            return r8
        L41:
            com.discord.billing.BillingManager$ConnectionState r10 = r7.currentConnectionState
            com.discord.billing.BillingManager$ConnectionState r2 = com.discord.billing.BillingManager.ConnectionState.DISCONNECTED
            if (r10 == r2) goto L4d
            com.discord.billing.BillingManager$ConnectionState r10 = r7.currentConnectionState
            com.discord.billing.BillingManager$ConnectionState r2 = com.discord.billing.BillingManager.ConnectionState.ERROR
            if (r10 != r2) goto L50
        L4d:
            r7.reconnect()
        L50:
            r10 = 0
            kotlinx.coroutines.CompletableDeferred r2 = hs.q.b(r10, r3, r10)
            java.util.List<kotlinx.coroutines.CompletableDeferred> r4 = r7.connectionReadyListeners
            monitor-enter(r4)
            com.discord.billing.BillingManager$ConnectionState r5 = r7.currentConnectionState     // Catch: java.lang.Throwable -> L62
            com.discord.billing.BillingManager$ConnectionState r6 = com.discord.billing.BillingManager.ConnectionState.CONNECTED     // Catch: java.lang.Throwable -> L62
            if (r5 != r6) goto L64
            com.discord.billing.BillingManager$ClientReadyState r8 = com.discord.billing.BillingManager.ClientReadyState.IMMEDIATE     // Catch: java.lang.Throwable -> L62
            monitor-exit(r4)
            return r8
        L62:
            r8 = move-exception
            goto L98
        L64:
            com.discord.billing.BillingManager$ConnectionState r5 = r7.currentConnectionState     // Catch: java.lang.Throwable -> L62
            com.discord.billing.BillingManager$ConnectionState r6 = com.discord.billing.BillingManager.ConnectionState.ERROR     // Catch: java.lang.Throwable -> L62
            if (r5 != r6) goto L6e
            com.discord.billing.BillingManager$ClientReadyState r8 = com.discord.billing.BillingManager.ClientReadyState.TIMEOUT     // Catch: java.lang.Throwable -> L62
            monitor-exit(r4)
            return r8
        L6e:
            java.util.List<kotlinx.coroutines.CompletableDeferred> r5 = r7.connectionReadyListeners     // Catch: java.lang.Throwable -> L62
            r5.add(r2)     // Catch: java.lang.Throwable -> L62
            monitor-exit(r4)
            com.discord.billing.BillingManager$suspendUntilReady$3 r4 = new com.discord.billing.BillingManager$suspendUntilReady$3     // Catch: hs.r1 -> L88
            r4.<init>(r2, r10)     // Catch: hs.r1 -> L88
            r0.L$0 = r2     // Catch: hs.r1 -> L88
            r0.label = r3     // Catch: hs.r1 -> L88
            java.lang.Object r10 = hs.t1.c(r8, r4, r0)     // Catch: hs.r1 -> L88
            if (r10 != r1) goto L84
            return r1
        L84:
            r8 = r2
        L85:
            com.discord.billing.BillingManager$ClientReadyState r10 = (com.discord.billing.BillingManager.ClientReadyState) r10     // Catch: hs.r1 -> L89
            return r10
        L88:
            r8 = r2
        L89:
            java.util.List<kotlinx.coroutines.CompletableDeferred> r9 = r7.connectionReadyListeners
            monitor-enter(r9)
            java.util.List<kotlinx.coroutines.CompletableDeferred> r10 = r7.connectionReadyListeners     // Catch: java.lang.Throwable -> L95
            r10.remove(r8)     // Catch: java.lang.Throwable -> L95
            monitor-exit(r9)
            com.discord.billing.BillingManager$ClientReadyState r8 = com.discord.billing.BillingManager.ClientReadyState.TIMEOUT
            return r8
        L95:
            r8 = move-exception
            monitor-exit(r9)
            throw r8
        L98:
            monitor-exit(r4)
            throw r8
        */
        throw new UnsupportedOperationException("Method not decompiled: com.discord.billing.BillingManager.suspendUntilReady(long, kotlin.coroutines.Continuation):java.lang.Object");
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static /* synthetic */ Object suspendUntilReady$default(BillingManager billingManager, long j10, Continuation continuation, int i10, Object obj) {
        if ((i10 & 1) != 0) {
            j10 = 5000;
        }
        return billingManager.suspendUntilReady(j10, continuation);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final void trackBillingMetric(String str, List<String> list) {
        try {
            MonitoringAgent monitoringAgent = MonitoringAgent.INSTANCE;
            monitoringAgent.increment(new MetricEvent("billing_manager." + str, list));
        } catch (Exception unused) {
        }
    }

    /* JADX WARN: Multi-variable type inference failed */
    static /* synthetic */ void trackBillingMetric$default(BillingManager billingManager, String str, List list, int i10, Object obj) {
        if ((i10 & 2) != 0) {
            list = CollectionsKt.l();
        }
        billingManager.trackBillingMetric(str, list);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final void updateConnectionState(ConnectionState connectionState) {
        this.currentConnectionState = connectionState;
        this.onConnectionUpdated.invoke(Integer.valueOf(connectionState.getValue()));
        if (connectionState == ConnectionState.CONNECTED) {
            synchronized (this.connectionReadyListeners) {
                try {
                    for (CompletableDeferred completableDeferred : this.connectionReadyListeners) {
                        completableDeferred.L0(Boolean.TRUE);
                    }
                    this.connectionReadyListeners.clear();
                    Unit unit = Unit.f33074a;
                } catch (Throwable th2) {
                    throw th2;
                }
            }
        } else if (connectionState == ConnectionState.ERROR) {
            synchronized (this.connectionReadyListeners) {
                try {
                    for (CompletableDeferred completableDeferred2 : this.connectionReadyListeners) {
                        completableDeferred2.L0(Boolean.FALSE);
                    }
                    this.connectionReadyListeners.clear();
                    Unit unit2 = Unit.f33074a;
                } catch (Throwable th3) {
                    throw th3;
                }
            }
        }
    }

    private final void verifyPurchase(Purchase purchase) {
        if (purchase.g() == 1 && !purchase.k() && this.allowedPackageNames.contains(purchase.e())) {
            List<String> f10 = purchase.f();
            Intrinsics.checkNotNullExpressionValue(f10, "getProducts(...)");
            for (String str : f10) {
                Function3 function3 = this.onPurchaseUpdated;
                String i10 = purchase.i();
                Intrinsics.checkNotNullExpressionValue(i10, "getPurchaseToken(...)");
                String e10 = purchase.e();
                Intrinsics.checkNotNullExpressionValue(e10, "getPackageName(...)");
                Intrinsics.checkNotNull(str);
                function3.invoke(i10, e10, str);
            }
        }
    }

    public final void close() {
        BillingClient billingClient = this.billingClient;
        if (billingClient != null) {
            if (billingClient == null) {
                Intrinsics.throwUninitializedPropertyAccessException("billingClient");
                billingClient = null;
            }
            billingClient.c();
            this.backoff.cancel();
            updateConnectionState(ConnectionState.DISCONNECTED);
            return;
        }
        updateConnectionState(ConnectionState.ERROR);
    }

    public final void consumePurchase(@NotNull String purchaseToken, @NotNull Function0<Unit> onSuccess, @NotNull Function1<? super BillingManagerException, Unit> onError) {
        Intrinsics.checkNotNullParameter(purchaseToken, "purchaseToken");
        Intrinsics.checkNotNullParameter(onSuccess, "onSuccess");
        Intrinsics.checkNotNullParameter(onError, "onError");
        hs.i.d(getCoroutineScope(this.reactContext), m0.a(), null, new BillingManager$consumePurchase$1(this, onError, purchaseToken, onSuccess, null), 2, null);
    }

    @NotNull
    public final Function1<Integer, Unit> getOnConnectionUpdated() {
        return this.onConnectionUpdated;
    }

    @NotNull
    public final Function2<Integer, Boolean, Unit> getOnPurchaseStateUpdated() {
        return this.onPurchaseStateUpdated;
    }

    @NotNull
    public final Function3 getOnPurchaseUpdated() {
        return this.onPurchaseUpdated;
    }

    public final void getProducts(@NotNull List<String> productIds, @NotNull ProductType productType, @NotNull Promise reactPromise, @NotNull Function1<? super BillingManagerException, Unit> onError) {
        Intrinsics.checkNotNullParameter(productIds, "productIds");
        Intrinsics.checkNotNullParameter(productType, "productType");
        Intrinsics.checkNotNullParameter(reactPromise, "reactPromise");
        Intrinsics.checkNotNullParameter(onError, "onError");
        CoroutineScope coroutineScope = getCoroutineScope(this.reactContext);
        hs.i.d(coroutineScope, m0.a(), null, new BillingManager$getProducts$1(this, onError, new ExponentialBackoff(coroutineScope, 0L, 0L, 0, 14, null), reactPromise, productType, productIds, null), 2, null);
    }

    public final void getUserCountry(@NotNull Function1<? super String, Unit> onSuccess, @NotNull Function1<? super BillingManagerException, Unit> onError) {
        Intrinsics.checkNotNullParameter(onSuccess, "onSuccess");
        Intrinsics.checkNotNullParameter(onError, "onError");
        CoroutineScope coroutineScope = getCoroutineScope(this.reactContext);
        hs.i.d(coroutineScope, m0.a(), null, new BillingManager$getUserCountry$1(this, onError, new ExponentialBackoff(coroutineScope, 0L, 0L, 0, 14, null), onSuccess, null), 2, null);
    }

    public final void loadPurchases(@NotNull Function0<Unit> onSuccess, @NotNull Function1<? super Exception, Unit> onError) {
        Intrinsics.checkNotNullParameter(onSuccess, "onSuccess");
        Intrinsics.checkNotNullParameter(onError, "onError");
        hs.i.d(getCoroutineScope(this.reactContext), m0.a(), null, new BillingManager$loadPurchases$3(this, onError, onSuccess, null), 2, null);
    }

    public final void open() {
        BillingClient a10 = BillingClient.h(this.reactContext).c(com.android.billingclient.api.c.c().b().a()).d(new a6.k() { // from class: com.discord.billing.a
            @Override // a6.k
            public final void onPurchasesUpdated(BillingResult billingResult, List list) {
                BillingManager.handlePurchases$default(BillingManager.this, billingResult, list, false, 4, null);
            }
        }).a();
        this.billingClient = a10;
        BillingClient billingClient = null;
        if (a10 == null) {
            Intrinsics.throwUninitializedPropertyAccessException("billingClient");
            a10 = null;
        }
        if (!a10.f()) {
            try {
                BillingClient billingClient2 = this.billingClient;
                if (billingClient2 == null) {
                    Intrinsics.throwUninitializedPropertyAccessException("billingClient");
                } else {
                    billingClient = billingClient2;
                }
                billingClient.l(this.billingClientStateListener);
                updateConnectionState(ConnectionState.CONNECTING);
                return;
            } catch (Exception unused) {
                updateConnectionState(ConnectionState.ERROR);
                return;
            }
        }
        updateConnectionState(ConnectionState.CONNECTED);
    }

    public final void purchase(Activity activity, @NotNull String productId, @NotNull ProductType productType, @NotNull String userId, String str, String str2, String str3, @NotNull Function0<Unit> onSuccess, @NotNull Function1<? super BillingManagerException, Unit> onError) {
        Intrinsics.checkNotNullParameter(productId, "productId");
        Intrinsics.checkNotNullParameter(productType, "productType");
        Intrinsics.checkNotNullParameter(userId, "userId");
        Intrinsics.checkNotNullParameter(onSuccess, "onSuccess");
        Intrinsics.checkNotNullParameter(onError, "onError");
        if (activity != null) {
            hs.i.d(getCoroutineScope(this.reactContext), m0.a(), null, new BillingManager$purchase$1(this, onError, productType, productId, str, str2, userId, str3, activity, onSuccess, null), 2, null);
        } else {
            onError.invoke(new BillingManagerException.BillingException("Current React Activity not found"));
        }
    }
}
