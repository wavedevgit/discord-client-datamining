package com.discord.billing;

import com.discord.billing.react.events.BillingManagerConnectionStateUpdated;
import com.discord.billing.react.events.BillingManagerPurchaseStateUpdated;
import com.discord.billing.react.events.BillingManagerPurchaseUpdated;
import com.discord.billing.types.ProductType;
import com.discord.client_info.ClientInfo;
import com.discord.reactevents.ReactEvent;
import com.discord.reactevents.ReactEvents;
import com.facebook.react.bridge.BaseJavaModule;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.ReadableArray;
import java.util.ArrayList;
import java.util.List;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.functions.Function3;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Reflection;
import kotlin.jvm.internal.SourceDebugExtension;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000N\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000e\n\u0002\b\u0004\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u000f\n\u0002\u0010\b\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\u0018\u00002\u00020\u0001B\u000f\u0012\u0006\u0010\u0002\u001a\u00020\u0003¢\u0006\u0004\b\u0004\u0010\u0005J\u0010\u0010\n\u001a\u00020\u000b2\u0006\u0010\f\u001a\u00020\rH\u0002J\b\u0010\u000e\u001a\u00020\u000fH\u0016J\b\u0010\u0010\u001a\u00020\u000bH\u0007J\b\u0010\u0011\u001a\u00020\u000bH\u0007J\u0018\u0010\u0012\u001a\u00020\u000b2\u0006\u0010\u0013\u001a\u00020\u00142\u0006\u0010\u0015\u001a\u00020\u0016H\u0007J\u0018\u0010\u0017\u001a\u00020\u000b2\u0006\u0010\u0013\u001a\u00020\u00142\u0006\u0010\u0015\u001a\u00020\u0016H\u0007J \u0010\u0018\u001a\u00020\u000b2\u0006\u0010\u0019\u001a\u00020\u000f2\u0006\u0010\u001a\u001a\u00020\u000f2\u0006\u0010\u0015\u001a\u00020\u0016H\u0007J>\u0010\u001b\u001a\u00020\u000b2\u0006\u0010\u0019\u001a\u00020\u000f2\u0006\u0010\u001a\u001a\u00020\u000f2\b\u0010\u001c\u001a\u0004\u0018\u00010\u000f2\b\u0010\u001d\u001a\u0004\u0018\u00010\u000f2\b\u0010\u001e\u001a\u0004\u0018\u00010\u000f2\u0006\u0010\u0015\u001a\u00020\u0016H\u0007J\u0018\u0010\u001f\u001a\u00020\u000b2\u0006\u0010\u001d\u001a\u00020\u000f2\u0006\u0010\u0015\u001a\u00020\u0016H\u0007J\u0010\u0010 \u001a\u00020\u000b2\u0006\u0010\u0015\u001a\u00020\u0016H\u0007J\u0010\u0010!\u001a\u00020\u000b2\u0006\u0010\u0015\u001a\u00020\u0016H\u0007J\u0010\u0010\"\u001a\u00020\u000b2\u0006\u0010#\u001a\u00020\u000fH\u0007J\u0010\u0010$\u001a\u00020\u000b2\u0006\u0010%\u001a\u00020&H\u0007J$\u0010'\u001a\u00020\u000b*\u00020\t2\u0006\u0010\u0013\u001a\u00020\u00142\u0006\u0010(\u001a\u00020)2\u0006\u0010\u0015\u001a\u00020\u0016H\u0002R\u000e\u0010\u0002\u001a\u00020\u0003X\u0082\u0004¢\u0006\u0002\n\u0000R\u000e\u0010\u0006\u001a\u00020\u0007X\u0082\u0004¢\u0006\u0002\n\u0000R\u000e\u0010\b\u001a\u00020\tX\u0082\u0004¢\u0006\u0002\n\u0000¨\u0006*"}, d2 = {"Lcom/discord/billing/BillingManagerModule;", "Lcom/facebook/react/bridge/ReactContextBaseJavaModule;", "reactContext", "Lcom/facebook/react/bridge/ReactApplicationContext;", "<init>", "(Lcom/facebook/react/bridge/ReactApplicationContext;)V", "reactEvents", "Lcom/discord/reactevents/ReactEvents;", "billingManager", "Lcom/discord/billing/BillingManager;", "emitEvent", "", "event", "Lcom/discord/reactevents/ReactEvent;", "getName", "", "open", "close", "getIAPSkus", "productIds", "Lcom/facebook/react/bridge/ReadableArray;", BaseJavaModule.METHOD_TYPE_PROMISE, "Lcom/facebook/react/bridge/Promise;", "getSubscriptionSkus", "purchase", "productId", "userId", "subscribe", "oldProductId", "purchaseToken", "offerId", "consumePurchase", "loadPurchases", "getUserCountry", "addListener", "type", "removeListeners", "count", "", "getProducts", "productType", "Lcom/discord/billing/types/ProductType;", "billing_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@SourceDebugExtension({"SMAP\nBillingManagerModule.kt\nKotlin\n*S Kotlin\n*F\n+ 1 BillingManagerModule.kt\ncom/discord/billing/BillingManagerModule\n+ 2 _Collections.kt\nkotlin/collections/CollectionsKt___CollectionsKt\n*L\n1#1,171:1\n808#2,11:172\n*S KotlinDebug\n*F\n+ 1 BillingManagerModule.kt\ncom/discord/billing/BillingManagerModule\n*L\n162#1:172,11\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class BillingManagerModule extends ReactContextBaseJavaModule {
    @NotNull
    private final BillingManager billingManager;
    @NotNull
    private final ReactApplicationContext reactContext;
    @NotNull
    private final ReactEvents reactEvents;

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public BillingManagerModule(@NotNull ReactApplicationContext reactContext) {
        super(reactContext);
        Intrinsics.checkNotNullParameter(reactContext, "reactContext");
        this.reactContext = reactContext;
        this.reactEvents = new ReactEvents(ir.v.a("billing-manager-connection-state-updated", Reflection.getOrCreateKotlinClass(BillingManagerConnectionStateUpdated.class)), ir.v.a("billing-manager-purchase-updated", Reflection.getOrCreateKotlinClass(BillingManagerPurchaseUpdated.class)), ir.v.a("billing-manager-purchase-state-updated", Reflection.getOrCreateKotlinClass(BillingManagerPurchaseStateUpdated.class)));
        ReactApplicationContext reactApplicationContext = getReactApplicationContext();
        Intrinsics.checkNotNullExpressionValue(reactApplicationContext, "getReactApplicationContext(...)");
        this.billingManager = new BillingManager(reactApplicationContext, ClientInfo.INSTANCE.isProdBuild(), new Function1() { // from class: com.discord.billing.q
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit billingManager$lambda$0;
                billingManager$lambda$0 = BillingManagerModule.billingManager$lambda$0(BillingManagerModule.this, ((Integer) obj).intValue());
                return billingManager$lambda$0;
            }
        }, new Function2() { // from class: com.discord.billing.s
            @Override // kotlin.jvm.functions.Function2
            public final Object invoke(Object obj, Object obj2) {
                Unit billingManager$lambda$1;
                billingManager$lambda$1 = BillingManagerModule.billingManager$lambda$1(BillingManagerModule.this, ((Integer) obj).intValue(), ((Boolean) obj2).booleanValue());
                return billingManager$lambda$1;
            }
        }, new Function3() { // from class: com.discord.billing.t
            @Override // kotlin.jvm.functions.Function3
            public final Object invoke(Object obj, Object obj2, Object obj3) {
                Unit billingManager$lambda$2;
                billingManager$lambda$2 = BillingManagerModule.billingManager$lambda$2(BillingManagerModule.this, (String) obj, (String) obj2, (String) obj3);
                return billingManager$lambda$2;
            }
        });
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit billingManager$lambda$0(BillingManagerModule billingManagerModule, int i10) {
        billingManagerModule.emitEvent(new BillingManagerConnectionStateUpdated(i10));
        return Unit.f33298a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit billingManager$lambda$1(BillingManagerModule billingManagerModule, int i10, boolean z10) {
        billingManagerModule.emitEvent(new BillingManagerPurchaseStateUpdated(i10, z10));
        return Unit.f33298a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit billingManager$lambda$2(BillingManagerModule billingManagerModule, String purchaseToken, String packageName, String product) {
        Intrinsics.checkNotNullParameter(purchaseToken, "purchaseToken");
        Intrinsics.checkNotNullParameter(packageName, "packageName");
        Intrinsics.checkNotNullParameter(product, "product");
        billingManagerModule.emitEvent(new BillingManagerPurchaseUpdated(purchaseToken, packageName, product));
        return Unit.f33298a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit consumePurchase$lambda$7(Promise promise) {
        promise.resolve(Boolean.TRUE);
        return Unit.f33298a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit consumePurchase$lambda$8(Promise promise, BillingManagerException e10) {
        Intrinsics.checkNotNullParameter(e10, "e");
        promise.reject(e10.getErrorCode(), e10.getReason(), e10);
        return Unit.f33298a;
    }

    private final void emitEvent(ReactEvent reactEvent) {
        this.reactEvents.emitModuleEvent(this.reactContext, reactEvent);
    }

    private final void getProducts(BillingManager billingManager, ReadableArray readableArray, ProductType productType, final Promise promise) {
        ArrayList<Object> arrayList = readableArray.toArrayList();
        List<String> arrayList2 = new ArrayList<>();
        for (Object obj : arrayList) {
            if (obj instanceof String) {
                arrayList2.add(obj);
            }
        }
        billingManager.getProducts(arrayList2, productType, promise, new Function1() { // from class: com.discord.billing.m
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj2) {
                Unit products$lambda$13;
                products$lambda$13 = BillingManagerModule.getProducts$lambda$13(Promise.this, (BillingManagerException) obj2);
                return products$lambda$13;
            }
        });
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit getProducts$lambda$13(Promise promise, BillingManagerException e10) {
        Intrinsics.checkNotNullParameter(e10, "e");
        promise.reject(e10.getErrorCode(), e10.getReason(), e10);
        return Unit.f33298a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit getUserCountry$lambda$11(Promise promise, String countryCode) {
        Intrinsics.checkNotNullParameter(countryCode, "countryCode");
        promise.resolve(countryCode);
        return Unit.f33298a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit getUserCountry$lambda$12(Promise promise, BillingManagerException e10) {
        Intrinsics.checkNotNullParameter(e10, "e");
        promise.reject(e10.getErrorCode(), e10.getReason(), e10);
        return Unit.f33298a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit loadPurchases$lambda$10(Promise promise, Exception e10) {
        Intrinsics.checkNotNullParameter(e10, "e");
        promise.reject(e10);
        return Unit.f33298a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit loadPurchases$lambda$9(Promise promise) {
        promise.resolve(Boolean.TRUE);
        return Unit.f33298a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit purchase$lambda$3(Promise promise) {
        promise.resolve(Boolean.TRUE);
        return Unit.f33298a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit purchase$lambda$4(Promise promise, BillingManagerException e10) {
        Intrinsics.checkNotNullParameter(e10, "e");
        promise.reject(e10.getErrorCode(), e10.getReason(), e10);
        return Unit.f33298a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit subscribe$lambda$5(Promise promise) {
        promise.resolve(Boolean.TRUE);
        return Unit.f33298a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit subscribe$lambda$6(Promise promise, BillingManagerException e10) {
        Intrinsics.checkNotNullParameter(e10, "e");
        promise.reject(e10.getErrorCode(), e10.getReason(), e10);
        return Unit.f33298a;
    }

    @ReactMethod
    public final void addListener(@NotNull String type) {
        Intrinsics.checkNotNullParameter(type, "type");
    }

    @ReactMethod
    public final void close() {
        this.billingManager.close();
    }

    @ReactMethod
    public final void consumePurchase(@NotNull String purchaseToken, @NotNull final Promise promise) {
        Intrinsics.checkNotNullParameter(purchaseToken, "purchaseToken");
        Intrinsics.checkNotNullParameter(promise, "promise");
        this.billingManager.consumePurchase(purchaseToken, new Function0() { // from class: com.discord.billing.o
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit consumePurchase$lambda$7;
                consumePurchase$lambda$7 = BillingManagerModule.consumePurchase$lambda$7(Promise.this);
                return consumePurchase$lambda$7;
            }
        }, new Function1() { // from class: com.discord.billing.p
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit consumePurchase$lambda$8;
                consumePurchase$lambda$8 = BillingManagerModule.consumePurchase$lambda$8(Promise.this, (BillingManagerException) obj);
                return consumePurchase$lambda$8;
            }
        });
    }

    @ReactMethod
    public final void getIAPSkus(@NotNull ReadableArray productIds, @NotNull Promise promise) {
        Intrinsics.checkNotNullParameter(productIds, "productIds");
        Intrinsics.checkNotNullParameter(promise, "promise");
        getProducts(this.billingManager, productIds, ProductType.IAP, promise);
    }

    @Override // com.facebook.react.bridge.NativeModule
    @NotNull
    public String getName() {
        return "BillingManager";
    }

    @ReactMethod
    public final void getSubscriptionSkus(@NotNull ReadableArray productIds, @NotNull Promise promise) {
        Intrinsics.checkNotNullParameter(productIds, "productIds");
        Intrinsics.checkNotNullParameter(promise, "promise");
        getProducts(this.billingManager, productIds, ProductType.SUBSCRIPTIONS, promise);
    }

    @ReactMethod
    public final void getUserCountry(@NotNull final Promise promise) {
        Intrinsics.checkNotNullParameter(promise, "promise");
        this.billingManager.getUserCountry(new Function1() { // from class: com.discord.billing.u
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit userCountry$lambda$11;
                userCountry$lambda$11 = BillingManagerModule.getUserCountry$lambda$11(Promise.this, (String) obj);
                return userCountry$lambda$11;
            }
        }, new Function1() { // from class: com.discord.billing.v
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit userCountry$lambda$12;
                userCountry$lambda$12 = BillingManagerModule.getUserCountry$lambda$12(Promise.this, (BillingManagerException) obj);
                return userCountry$lambda$12;
            }
        });
    }

    @ReactMethod
    public final void loadPurchases(@NotNull final Promise promise) {
        Intrinsics.checkNotNullParameter(promise, "promise");
        this.billingManager.loadPurchases(new Function0() { // from class: com.discord.billing.k
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit loadPurchases$lambda$9;
                loadPurchases$lambda$9 = BillingManagerModule.loadPurchases$lambda$9(Promise.this);
                return loadPurchases$lambda$9;
            }
        }, new Function1() { // from class: com.discord.billing.l
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit loadPurchases$lambda$10;
                loadPurchases$lambda$10 = BillingManagerModule.loadPurchases$lambda$10(Promise.this, (Exception) obj);
                return loadPurchases$lambda$10;
            }
        });
    }

    @ReactMethod
    public final void open() {
        this.billingManager.open();
    }

    @ReactMethod
    public final void purchase(@NotNull String productId, @NotNull String userId, @NotNull final Promise promise) {
        Intrinsics.checkNotNullParameter(productId, "productId");
        Intrinsics.checkNotNullParameter(userId, "userId");
        Intrinsics.checkNotNullParameter(promise, "promise");
        BillingManager.purchase$default(this.billingManager, this.reactContext.getCurrentActivity(), productId, ProductType.IAP, userId, null, null, null, new Function0() { // from class: com.discord.billing.w
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit purchase$lambda$3;
                purchase$lambda$3 = BillingManagerModule.purchase$lambda$3(Promise.this);
                return purchase$lambda$3;
            }
        }, new Function1() { // from class: com.discord.billing.j
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit purchase$lambda$4;
                purchase$lambda$4 = BillingManagerModule.purchase$lambda$4(Promise.this, (BillingManagerException) obj);
                return purchase$lambda$4;
            }
        }, 112, null);
    }

    @ReactMethod
    public final void removeListeners(int i10) {
    }

    @ReactMethod
    public final void subscribe(@NotNull String productId, @NotNull String userId, String str, String str2, String str3, @NotNull final Promise promise) {
        Intrinsics.checkNotNullParameter(productId, "productId");
        Intrinsics.checkNotNullParameter(userId, "userId");
        Intrinsics.checkNotNullParameter(promise, "promise");
        this.billingManager.purchase(this.reactContext.getCurrentActivity(), productId, ProductType.SUBSCRIPTIONS, userId, str, str2, str3, new Function0() { // from class: com.discord.billing.i
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit subscribe$lambda$5;
                subscribe$lambda$5 = BillingManagerModule.subscribe$lambda$5(Promise.this);
                return subscribe$lambda$5;
            }
        }, new Function1() { // from class: com.discord.billing.n
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit subscribe$lambda$6;
                subscribe$lambda$6 = BillingManagerModule.subscribe$lambda$6(Promise.this, (BillingManagerException) obj);
                return subscribe$lambda$6;
            }
        });
    }
}
