package com.dooboolab.rniap;

import a6.l;
import a6.m;
import android.app.Activity;
import android.util.Log;
import com.android.billingclient.api.BillingClient;
import com.android.billingclient.api.BillingConfig;
import com.android.billingclient.api.BillingFlowParams;
import com.android.billingclient.api.BillingResult;
import com.android.billingclient.api.ProductDetails;
import com.android.billingclient.api.Purchase;
import com.android.billingclient.api.PurchaseHistoryRecord;
import com.android.billingclient.api.QueryProductDetailsParams;
import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.BaseJavaModule;
import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.LifecycleEventListener;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.PromiseImpl;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.ReadableArray;
import com.facebook.react.bridge.ReadableType;
import com.facebook.react.bridge.WritableArray;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.bridge.WritableNativeArray;
import com.facebook.react.bridge.WritableNativeMap;
import com.facebook.react.devsupport.StackTraceHelper;
import com.facebook.react.module.annotations.ReactModule;
import com.facebook.react.modules.core.DeviceEventManagerModule;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import org.jetbrains.annotations.NotNull;
@ReactModule(name = RNIapModule.TAG)
@Metadata(d1 = {"\u0000\u0086\u0001\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010 \n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\b\n\u0000\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000b\n\u0002\b\u0004\n\u0002\u0018\u0002\n\u0002\u0010\u000e\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0005\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\n\n\u0002\u0018\u0002\n\u0002\b\u0017\n\u0002\u0010\u0006\n\u0002\b\n\n\u0002\u0010%\n\u0002\u0018\u0002\n\u0002\b\u0005\b\u0007\u0018\u0000 X2\u00020\u00012\u00020\u0002:\u0001YB#\u0012\u0006\u0010\u0004\u001a\u00020\u0003\u0012\b\b\u0002\u0010\u0006\u001a\u00020\u0005\u0012\b\b\u0002\u0010\b\u001a\u00020\u0007¢\u0006\u0004\b\t\u0010\nJ/\u0010\u0013\u001a\u00020\u00122\f\u0010\r\u001a\b\u0012\u0004\u0012\u00020\f0\u000b2\u0006\u0010\u000f\u001a\u00020\u000e2\b\b\u0002\u0010\u0011\u001a\u00020\u0010H\u0002¢\u0006\u0004\b\u0013\u0010\u0014J\u001f\u0010\u0018\u001a\u00020\u00172\u0006\u0010\u0016\u001a\u00020\u00152\u0006\u0010\u000f\u001a\u00020\u000eH\u0002¢\u0006\u0004\b\u0018\u0010\u0019J\u0017\u0010\u001a\u001a\u00020\u00122\u0006\u0010\u000f\u001a\u00020\u000eH\u0002¢\u0006\u0004\b\u001a\u0010\u001bJ)\u0010!\u001a\u00020\u00122\u0006\u0010\u0004\u001a\u00020\u001c2\u0006\u0010\u001e\u001a\u00020\u001d2\b\u0010 \u001a\u0004\u0018\u00010\u001fH\u0002¢\u0006\u0004\b!\u0010\"J\u000f\u0010#\u001a\u00020\u001dH\u0016¢\u0006\u0004\b#\u0010$J)\u0010(\u001a\u00020\u00122\u0006\u0010\u000f\u001a\u00020\u000e2\u0012\u0010'\u001a\u000e\u0012\u0004\u0012\u00020&\u0012\u0004\u0012\u00020\u00120%¢\u0006\u0004\b(\u0010)J\u001f\u0010+\u001a\u00020\u00122\u0006\u0010*\u001a\u00020\u001d2\u0006\u0010\u000f\u001a\u00020\u000eH\u0007¢\u0006\u0004\b+\u0010,J\u0017\u0010-\u001a\u00020\u00122\u0006\u0010\u000f\u001a\u00020\u000eH\u0007¢\u0006\u0004\b-\u0010\u001bJ\u0017\u0010.\u001a\u00020\u00122\u0006\u0010\u000f\u001a\u00020\u000eH\u0007¢\u0006\u0004\b.\u0010\u001bJ\u0017\u0010/\u001a\u00020\u00122\u0006\u0010\u000f\u001a\u00020\u000eH\u0007¢\u0006\u0004\b/\u0010\u001bJ'\u00103\u001a\u00020\u00122\u0006\u00100\u001a\u00020\u001d2\u0006\u00102\u001a\u0002012\u0006\u0010\u000f\u001a\u00020\u000eH\u0007¢\u0006\u0004\b3\u00104J\u001f\u00105\u001a\u00020\u00122\u0006\u00100\u001a\u00020\u001d2\u0006\u0010\u000f\u001a\u00020\u000eH\u0007¢\u0006\u0004\b5\u0010,J\u001f\u00106\u001a\u00020\u00122\u0006\u00100\u001a\u00020\u001d2\u0006\u0010\u000f\u001a\u00020\u000eH\u0007¢\u0006\u0004\b6\u0010,J]\u0010=\u001a\u00020\u00122\u0006\u00100\u001a\u00020\u001d2\u0006\u00102\u001a\u0002012\b\u00107\u001a\u0004\u0018\u00010\u001d2\u0006\u00108\u001a\u00020\u00102\b\u00109\u001a\u0004\u0018\u00010\u001d2\b\u0010:\u001a\u0004\u0018\u00010\u001d2\u0006\u0010;\u001a\u0002012\u0006\u0010<\u001a\u00020\u00172\u0006\u0010\u000f\u001a\u00020\u000eH\u0007¢\u0006\u0004\b=\u0010>J)\u0010A\u001a\u00020\u00122\u0006\u0010?\u001a\u00020\u001d2\b\u0010@\u001a\u0004\u0018\u00010\u001d2\u0006\u0010\u000f\u001a\u00020\u000eH\u0007¢\u0006\u0004\bA\u0010BJ)\u0010C\u001a\u00020\u00122\u0006\u0010?\u001a\u00020\u001d2\b\u0010@\u001a\u0004\u0018\u00010\u001d2\u0006\u0010\u000f\u001a\u00020\u000eH\u0007¢\u0006\u0004\bC\u0010BJ'\u0010D\u001a\u00020\u00122\u0006\u0010\u0016\u001a\u00020\u00152\u000e\u0010\r\u001a\n\u0012\u0004\u0012\u00020\f\u0018\u00010\u000bH\u0016¢\u0006\u0004\bD\u0010EJ\u0017\u0010F\u001a\u00020\u00122\u0006\u0010\u000f\u001a\u00020\u000eH\u0007¢\u0006\u0004\bF\u0010\u001bJ\u0017\u0010G\u001a\u00020\u00122\u0006\u0010\u001e\u001a\u00020\u001dH\u0007¢\u0006\u0004\bG\u0010HJ\u0017\u0010K\u001a\u00020\u00122\u0006\u0010J\u001a\u00020IH\u0007¢\u0006\u0004\bK\u0010LJ\u0017\u0010M\u001a\u00020\u00122\u0006\u0010\u000f\u001a\u00020\u000eH\u0007¢\u0006\u0004\bM\u0010\u001bJ\u0017\u0010N\u001a\u00020\u00122\u0006\u0010\u000f\u001a\u00020\u000eH\u0007¢\u0006\u0004\bN\u0010\u001bR\u0014\u0010\u0004\u001a\u00020\u00038\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u0004\u0010OR\u0014\u0010\u0006\u001a\u00020\u00058\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u0006\u0010PR\u0014\u0010\b\u001a\u00020\u00078\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\b\u0010QR\u0018\u0010R\u001a\u0004\u0018\u00010&8\u0002@\u0002X\u0082\u000e¢\u0006\u0006\n\u0004\bR\u0010SR \u0010V\u001a\u000e\u0012\u0004\u0012\u00020\u001d\u0012\u0004\u0012\u00020U0T8\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\bV\u0010W¨\u0006Z"}, d2 = {"Lcom/dooboolab/rniap/RNIapModule;", "Lcom/facebook/react/bridge/ReactContextBaseJavaModule;", "La6/k;", "Lcom/facebook/react/bridge/ReactApplicationContext;", "reactContext", "Lcom/android/billingclient/api/BillingClient$a;", "builder", "Lcom/google/android/gms/common/f;", "googleApiAvailability", "<init>", "(Lcom/facebook/react/bridge/ReactApplicationContext;Lcom/android/billingclient/api/BillingClient$a;Lcom/google/android/gms/common/f;)V", "", "Lcom/android/billingclient/api/Purchase;", "purchases", "Lcom/facebook/react/bridge/Promise;", BaseJavaModule.METHOD_TYPE_PROMISE, "", "expectedResponseCode", "", "consumeItems", "(Ljava/util/List;Lcom/facebook/react/bridge/Promise;I)V", "Lcom/android/billingclient/api/BillingResult;", "billingResult", "", "isValidResult", "(Lcom/android/billingclient/api/BillingResult;Lcom/facebook/react/bridge/Promise;)Z", "sendUnconsumedPurchases", "(Lcom/facebook/react/bridge/Promise;)V", "Lcom/facebook/react/bridge/ReactContext;", "", "eventName", "Lcom/facebook/react/bridge/WritableMap;", "params", "sendEvent", "(Lcom/facebook/react/bridge/ReactContext;Ljava/lang/String;Lcom/facebook/react/bridge/WritableMap;)V", "getName", "()Ljava/lang/String;", "Lkotlin/Function1;", "Lcom/android/billingclient/api/BillingClient;", "callback", "ensureConnection", "(Lcom/facebook/react/bridge/Promise;Lkotlin/jvm/functions/Function1;)V", "feature", "isFeatureSupported", "(Ljava/lang/String;Lcom/facebook/react/bridge/Promise;)V", "initConnection", "endConnection", "flushFailedPurchasesCachedAsPending", "type", "Lcom/facebook/react/bridge/ReadableArray;", "skuArr", "getItemsByType", "(Ljava/lang/String;Lcom/facebook/react/bridge/ReadableArray;Lcom/facebook/react/bridge/Promise;)V", "getAvailableItemsByType", "getPurchaseHistoryByType", "purchaseToken", "replacementMode", "obfuscatedAccountId", "obfuscatedProfileId", "offerTokenArr", "isOfferPersonalized", "buyItemByType", "(Ljava/lang/String;Lcom/facebook/react/bridge/ReadableArray;Ljava/lang/String;ILjava/lang/String;Ljava/lang/String;Lcom/facebook/react/bridge/ReadableArray;ZLcom/facebook/react/bridge/Promise;)V", "token", "developerPayLoad", "acknowledgePurchase", "(Ljava/lang/String;Ljava/lang/String;Lcom/facebook/react/bridge/Promise;)V", "consumeProduct", "onPurchasesUpdated", "(Lcom/android/billingclient/api/BillingResult;Ljava/util/List;)V", "startListening", "addListener", "(Ljava/lang/String;)V", "", "count", "removeListeners", "(D)V", "getPackageName", "getStorefront", "Lcom/facebook/react/bridge/ReactApplicationContext;", "Lcom/android/billingclient/api/BillingClient$a;", "Lcom/google/android/gms/common/f;", "billingClientCache", "Lcom/android/billingclient/api/BillingClient;", "", "Lcom/android/billingclient/api/ProductDetails;", "skus", "Ljava/util/Map;", "Companion", "a", "react-native-iap_playRelease"}, k = 1, mv = {2, 1, 0}, xi = 48)
@SourceDebugExtension({"SMAP\nRNIapModule.kt\nKotlin\n*S Kotlin\n*F\n+ 1 RNIapModule.kt\ncom/dooboolab/rniap/RNIapModule\n+ 2 _Collections.kt\nkotlin/collections/CollectionsKt___CollectionsKt\n*L\n1#1,760:1\n1869#2:761\n1869#2,2:762\n1870#2:764\n774#2:765\n865#2,2:766\n1869#2:768\n1869#2,2:769\n1869#2,2:771\n1870#2:773\n1869#2:774\n1869#2,2:775\n1870#2:777\n1869#2:778\n1869#2,2:779\n1870#2:781\n1563#2:782\n1634#2,3:783\n1573#2:786\n1604#2,4:787\n774#2:791\n865#2,2:792\n*S KotlinDebug\n*F\n+ 1 RNIapModule.kt\ncom/dooboolab/rniap/RNIapModule\n*L\n624#1:761\n628#1:762,2\n624#1:764\n230#1:765\n230#1:766,2\n304#1:768\n312#1:769,2\n318#1:771,2\n304#1:773\n379#1:774\n383#1:775,2\n379#1:777\n433#1:778\n437#1:779,2\n433#1:781\n488#1:782\n488#1:783,3\n488#1:786\n488#1:787,4\n685#1:791\n685#1:792,2\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class RNIapModule extends ReactContextBaseJavaModule implements a6.k {
    @NotNull
    public static final a Companion = new a(null);
    @NotNull
    private static final String PROMISE_BUY_ITEM = "PROMISE_BUY_ITEM";
    @NotNull
    public static final String TAG = "RNIapModule";
    private BillingClient billingClientCache;
    @NotNull
    private final BillingClient.a builder;
    @NotNull
    private final com.google.android.gms.common.f googleApiAvailability;
    @NotNull
    private final ReactApplicationContext reactContext;
    @NotNull
    private final Map<String, ProductDetails> skus;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private a() {
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class b implements a6.c {

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ Promise f9742b;

        b(Promise promise) {
            this.f9742b = promise;
        }

        @Override // a6.c
        public void onBillingServiceDisconnected() {
            Log.i(RNIapModule.TAG, "Billing service disconnected");
        }

        @Override // a6.c
        public void onBillingSetupFinished(BillingResult billingResult) {
            Intrinsics.checkNotNullParameter(billingResult, "billingResult");
            if (!RNIapModule.this.isValidResult(billingResult, this.f9742b)) {
                return;
            }
            d.d(this.f9742b, Boolean.TRUE);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class c implements LifecycleEventListener {
        c() {
        }

        @Override // com.facebook.react.bridge.LifecycleEventListener
        public void onHostDestroy() {
            BillingClient billingClient = RNIapModule.this.billingClientCache;
            if (billingClient != null) {
                billingClient.c();
            }
            RNIapModule.this.billingClientCache = null;
        }

        @Override // com.facebook.react.bridge.LifecycleEventListener
        public void onHostPause() {
        }

        @Override // com.facebook.react.bridge.LifecycleEventListener
        public void onHostResume() {
        }
    }

    public /* synthetic */ RNIapModule(ReactApplicationContext reactApplicationContext, BillingClient.a aVar, com.google.android.gms.common.f fVar, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this(reactApplicationContext, (i10 & 2) != 0 ? BillingClient.h(reactApplicationContext).b() : aVar, (i10 & 4) != 0 ? com.google.android.gms.common.f.n() : fVar);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit acknowledgePurchase$lambda$34(String str, final RNIapModule rNIapModule, final Promise promise, BillingClient billingClient) {
        Intrinsics.checkNotNullParameter(billingClient, "billingClient");
        a6.a a10 = a6.a.b().b(str).a();
        Intrinsics.checkNotNullExpressionValue(a10, "build(...)");
        billingClient.a(a10, new a6.b() { // from class: com.dooboolab.rniap.n
            @Override // a6.b
            public final void a(BillingResult billingResult) {
                RNIapModule.acknowledgePurchase$lambda$34$lambda$33(RNIapModule.this, promise, billingResult);
            }
        });
        return Unit.f32056a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void acknowledgePurchase$lambda$34$lambda$33(RNIapModule rNIapModule, Promise promise, BillingResult billingResult) {
        Intrinsics.checkNotNullParameter(billingResult, "billingResult");
        if (!rNIapModule.isValidResult(billingResult, promise)) {
            return;
        }
        WritableMap createMap = Arguments.createMap();
        Intrinsics.checkNotNullExpressionValue(createMap, "createMap(...)");
        createMap.putInt("responseCode", billingResult.b());
        createMap.putString("debugMessage", billingResult.a());
        com.dooboolab.rniap.a a10 = com.dooboolab.rniap.b.f9746a.a(billingResult.b());
        createMap.putString("code", a10.a());
        createMap.putString("message", a10.b());
        d.d(promise, createMap);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit buyItemByType$lambda$32(Promise promise, String str, ReadableArray readableArray, ReadableArray readableArray2, RNIapModule rNIapModule, boolean z10, String str2, int i10, String str3, String str4, Activity activity, BillingClient billingClient) {
        int i11;
        String string;
        Intrinsics.checkNotNullParameter(billingClient, "billingClient");
        com.dooboolab.rniap.c.f9747a.a(PROMISE_BUY_ITEM, promise);
        if (Intrinsics.areEqual(str, "subs") && readableArray.size() != readableArray2.size()) {
            String str5 = "The number of skus (" + readableArray.size() + ") must match: the number of offerTokens (" + readableArray2.size() + ") for Subscriptions";
            WritableMap createMap = Arguments.createMap();
            Intrinsics.checkNotNullExpressionValue(createMap, "createMap(...)");
            createMap.putString("debugMessage", str5);
            createMap.putString("code", PROMISE_BUY_ITEM);
            createMap.putString("message", str5);
            rNIapModule.sendEvent(rNIapModule.reactContext, "purchase-error", createMap);
            d.b(promise, PROMISE_BUY_ITEM, str5);
            return Unit.f32056a;
        }
        ArrayList<Object> arrayList = readableArray.toArrayList();
        ArrayList arrayList2 = new ArrayList(CollectionsKt.w(arrayList, 10));
        for (Object obj : arrayList) {
            arrayList2.add(String.valueOf(obj));
        }
        ArrayList arrayList3 = new ArrayList(CollectionsKt.w(arrayList2, 10));
        Iterator it = arrayList2.iterator();
        int i12 = 0;
        while (it.hasNext()) {
            Object next = it.next();
            int i13 = i12 + 1;
            if (i12 < 0) {
                CollectionsKt.v();
            }
            String str6 = (String) next;
            Iterator it2 = it;
            ProductDetails productDetails = rNIapModule.skus.get(str6);
            if (productDetails == null) {
                WritableMap createMap2 = Arguments.createMap();
                Intrinsics.checkNotNullExpressionValue(createMap2, "createMap(...)");
                createMap2.putString("debugMessage", "The sku was not found. Please fetch products first by calling getItems");
                createMap2.putString("code", PROMISE_BUY_ITEM);
                createMap2.putString("message", "The sku was not found. Please fetch products first by calling getItems");
                createMap2.putString("productId", str6);
                rNIapModule.sendEvent(rNIapModule.reactContext, "purchase-error", createMap2);
                d.b(promise, PROMISE_BUY_ITEM, "The sku was not found. Please fetch products first by calling getItems");
                return Unit.f32056a;
            }
            BillingFlowParams.b.a c10 = BillingFlowParams.b.a().c(productDetails);
            Intrinsics.checkNotNullExpressionValue(c10, "setProductDetails(...)");
            if (Intrinsics.areEqual(str, "subs") && (string = readableArray2.getString(i12)) != null) {
                c10 = c10.b(string);
                Intrinsics.checkNotNullExpressionValue(c10, "setOfferToken(...)");
            }
            arrayList3.add(c10.a());
            it = it2;
            i12 = i13;
        }
        BillingFlowParams.a a10 = BillingFlowParams.a();
        Intrinsics.checkNotNullExpressionValue(a10, "newBuilder(...)");
        a10.e(arrayList3).b(z10);
        BillingFlowParams.c.a a11 = BillingFlowParams.c.a();
        Intrinsics.checkNotNullExpressionValue(a11, "newBuilder(...)");
        if (str2 != null) {
            a11.b(str2);
            if (Intrinsics.areEqual(str, "subs") && i10 != -1) {
                int i14 = 1;
                if (i10 != 1) {
                    i14 = 2;
                    if (i10 != 2) {
                        i14 = 3;
                        if (i10 != 3) {
                            i14 = 5;
                            if (i10 != 5) {
                                i14 = 6;
                                if (i10 != 6) {
                                    i11 = 0;
                                    a11.d(i11);
                                }
                            }
                        }
                    }
                }
                i11 = i14;
                a11.d(i11);
            }
            BillingFlowParams.c a12 = a11.a();
            Intrinsics.checkNotNullExpressionValue(a12, "build(...)");
            a10.f(a12);
        }
        if (str3 != null) {
            a10.c(str3);
        }
        if (str4 != null) {
            a10.d(str4);
        }
        BillingFlowParams a13 = a10.a();
        Intrinsics.checkNotNullExpressionValue(a13, "build(...)");
        int b10 = billingClient.g(activity, a13).b();
        if (b10 != 0) {
            com.dooboolab.rniap.a a14 = com.dooboolab.rniap.b.f9746a.a(b10);
            d.b(promise, a14.a(), a14.b());
        }
        return Unit.f32056a;
    }

    private final void consumeItems(List<? extends Purchase> list, final Promise promise, final int i10) {
        for (final Purchase purchase : list) {
            ensureConnection(promise, new Function1() { // from class: com.dooboolab.rniap.w
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit consumeItems$lambda$5;
                    consumeItems$lambda$5 = RNIapModule.consumeItems$lambda$5(Purchase.this, i10, promise, (BillingClient) obj);
                    return consumeItems$lambda$5;
                }
            });
        }
    }

    static /* synthetic */ void consumeItems$default(RNIapModule rNIapModule, List list, Promise promise, int i10, int i11, Object obj) {
        if ((i11 & 4) != 0) {
            i10 = 0;
        }
        rNIapModule.consumeItems(list, promise, i10);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit consumeItems$lambda$5(Purchase purchase, final int i10, final Promise promise, BillingClient billingClient) {
        Intrinsics.checkNotNullParameter(billingClient, "billingClient");
        a6.e a10 = a6.e.b().b(purchase.i()).a();
        Intrinsics.checkNotNullExpressionValue(a10, "build(...)");
        billingClient.b(a10, new a6.f() { // from class: com.dooboolab.rniap.q
            @Override // a6.f
            public final void a(BillingResult billingResult, String str) {
                RNIapModule.consumeItems$lambda$5$lambda$4(i10, promise, billingResult, str);
            }
        });
        return Unit.f32056a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void consumeItems$lambda$5$lambda$4(int i10, Promise promise, BillingResult billingResult, String str) {
        Intrinsics.checkNotNullParameter(billingResult, "billingResult");
        if (billingResult.b() != i10) {
            com.dooboolab.rniap.b.f9746a.b(promise, billingResult.b());
        } else {
            d.d(promise, Boolean.TRUE);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit consumeProduct$lambda$36(a6.e eVar, final RNIapModule rNIapModule, final Promise promise, BillingClient billingClient) {
        Intrinsics.checkNotNullParameter(billingClient, "billingClient");
        billingClient.b(eVar, new a6.f() { // from class: com.dooboolab.rniap.v
            @Override // a6.f
            public final void a(BillingResult billingResult, String str) {
                RNIapModule.consumeProduct$lambda$36$lambda$35(RNIapModule.this, promise, billingResult, str);
            }
        });
        return Unit.f32056a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void consumeProduct$lambda$36$lambda$35(RNIapModule rNIapModule, Promise promise, BillingResult billingResult, String str) {
        Intrinsics.checkNotNullParameter(billingResult, "billingResult");
        if (!rNIapModule.isValidResult(billingResult, promise)) {
            return;
        }
        WritableMap createMap = Arguments.createMap();
        Intrinsics.checkNotNullExpressionValue(createMap, "createMap(...)");
        createMap.putInt("responseCode", billingResult.b());
        createMap.putString("debugMessage", billingResult.a());
        com.dooboolab.rniap.a a10 = com.dooboolab.rniap.b.f9746a.a(billingResult.b());
        createMap.putString("code", a10.a());
        createMap.putString("message", a10.b());
        createMap.putString("purchaseToken", str);
        d.d(promise, createMap);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void ensureConnection$lambda$0(RNIapModule rNIapModule, Function1 function1, Promise promise, Object[] it) {
        boolean z10;
        Intrinsics.checkNotNullParameter(it, "it");
        if (it.length == 0) {
            z10 = true;
        } else {
            z10 = false;
        }
        if (!z10) {
            Object obj = it[0];
            if (obj instanceof Boolean) {
                Intrinsics.checkNotNull(obj, "null cannot be cast to non-null type kotlin.Boolean");
                if (((Boolean) obj).booleanValue()) {
                    BillingClient billingClient = rNIapModule.billingClientCache;
                    if (billingClient != null && billingClient.f()) {
                        function1.invoke(billingClient);
                        return;
                    } else {
                        d.b(promise, "E_NOT_PREPARED", "Unable to auto-initialize connection");
                        return;
                    }
                }
            }
        }
        d.b(promise, "E_UNKNOWN", "ensureConnection - incorrect parameter in resolve");
        Log.i(TAG, "Incorrect parameter in resolve");
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* JADX WARN: Removed duplicated region for block: B:19:0x004a A[ADDED_TO_REGION] */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public static final void ensureConnection$lambda$1(com.facebook.react.bridge.Promise r4, java.lang.Object[] r5) {
        /*
            java.lang.String r0 = "it"
            kotlin.jvm.internal.Intrinsics.checkNotNullParameter(r5, r0)
            int r0 = r5.length
            r1 = 0
            r2 = 1
            if (r0 <= r2) goto L25
            r0 = r5[r1]
            boolean r3 = r0 instanceof java.lang.String
            if (r3 == 0) goto L25
            r3 = r5[r2]
            boolean r3 = r3 instanceof java.lang.String
            if (r3 == 0) goto L25
            java.lang.String r1 = "null cannot be cast to non-null type kotlin.String"
            kotlin.jvm.internal.Intrinsics.checkNotNull(r0, r1)
            java.lang.String r0 = (java.lang.String) r0
            r5 = r5[r2]
            kotlin.jvm.internal.Intrinsics.checkNotNull(r5, r1)
            java.lang.String r5 = (java.lang.String) r5
            goto L48
        L25:
            int r0 = r5.length
            if (r0 != 0) goto L29
            goto L2a
        L29:
            r2 = r1
        L2a:
            if (r2 != 0) goto L46
            r5 = r5[r1]
            boolean r0 = r5 instanceof com.facebook.react.bridge.WritableNativeMap
            if (r0 == 0) goto L46
            java.lang.String r0 = "null cannot be cast to non-null type com.facebook.react.bridge.WritableNativeMap"
            kotlin.jvm.internal.Intrinsics.checkNotNull(r5, r0)
            com.facebook.react.bridge.WritableNativeMap r5 = (com.facebook.react.bridge.WritableNativeMap) r5
            java.lang.String r0 = "code"
            java.lang.String r0 = r5.getString(r0)
            java.lang.String r1 = "message"
            java.lang.String r5 = r5.getString(r1)
            goto L48
        L46:
            r0 = 0
            r5 = r0
        L48:
            if (r0 == 0) goto L50
            if (r5 == 0) goto L50
            com.dooboolab.rniap.d.b(r4, r0, r5)
            return
        L50:
            java.lang.String r5 = "E_UNKNOWN"
            java.lang.String r0 = "ensureConnection - incorrect parameter in reject"
            com.dooboolab.rniap.d.b(r4, r5, r0)
            java.lang.String r4 = "RNIapModule"
            java.lang.String r5 = "Incorrect parameters in reject"
            android.util.Log.i(r4, r5)
            return
        */
        throw new UnsupportedOperationException("Method not decompiled: com.dooboolab.rniap.RNIapModule.ensureConnection$lambda$1(com.facebook.react.bridge.Promise, java.lang.Object[]):void");
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit flushFailedPurchasesCachedAsPending$lambda$8(final RNIapModule rNIapModule, final Promise promise, BillingClient billingClient) {
        Intrinsics.checkNotNullParameter(billingClient, "billingClient");
        billingClient.k(a6.m.a().b("inapp").a(), new a6.j() { // from class: com.dooboolab.rniap.f
            @Override // a6.j
            public final void a(BillingResult billingResult, List list) {
                RNIapModule.flushFailedPurchasesCachedAsPending$lambda$8$lambda$7(RNIapModule.this, promise, billingResult, list);
            }
        });
        return Unit.f32056a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void flushFailedPurchasesCachedAsPending$lambda$8$lambda$7(RNIapModule rNIapModule, Promise promise, BillingResult billingResult, List list) {
        Intrinsics.checkNotNullParameter(billingResult, "billingResult");
        if (!rNIapModule.isValidResult(billingResult, promise)) {
            return;
        }
        if (list == null) {
            d.d(promise, Boolean.FALSE);
            return;
        }
        ArrayList arrayList = new ArrayList();
        for (Object obj : list) {
            if (((Purchase) obj).g() == 2) {
                arrayList.add(obj);
            }
        }
        if (arrayList.isEmpty()) {
            d.d(promise, Boolean.FALSE);
        } else {
            rNIapModule.consumeItems(arrayList, promise, 8);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit getAvailableItemsByType$lambda$24(final String str, final RNIapModule rNIapModule, final Promise promise, BillingClient billingClient) {
        Intrinsics.checkNotNullParameter(billingClient, "billingClient");
        final WritableNativeArray writableNativeArray = new WritableNativeArray();
        m.a a10 = a6.m.a();
        String str2 = "subs";
        if (!Intrinsics.areEqual(str, "subs")) {
            str2 = "inapp";
        }
        billingClient.k(a10.b(str2).a(), new a6.j() { // from class: com.dooboolab.rniap.t
            @Override // a6.j
            public final void a(BillingResult billingResult, List list) {
                RNIapModule.getAvailableItemsByType$lambda$24$lambda$23(RNIapModule.this, promise, writableNativeArray, str, billingResult, list);
            }
        });
        return Unit.f32056a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void getAvailableItemsByType$lambda$24$lambda$23(RNIapModule rNIapModule, Promise promise, WritableNativeArray writableNativeArray, String str, BillingResult billingResult, List list) {
        String str2;
        Intrinsics.checkNotNullParameter(billingResult, "billingResult");
        if (!rNIapModule.isValidResult(billingResult, promise)) {
            return;
        }
        if (list != null) {
            Iterator it = list.iterator();
            while (it.hasNext()) {
                Purchase purchase = (Purchase) it.next();
                WritableNativeMap writableNativeMap = new WritableNativeMap();
                writableNativeMap.putString("productId", (String) purchase.f().get(0));
                WritableArray createArray = Arguments.createArray();
                Intrinsics.checkNotNullExpressionValue(createArray, "createArray(...)");
                List<String> f10 = purchase.f();
                Intrinsics.checkNotNullExpressionValue(f10, "getProducts(...)");
                for (String str3 : f10) {
                    createArray.pushString(str3);
                }
                writableNativeMap.putArray("productIds", createArray);
                writableNativeMap.putString("transactionId", purchase.c());
                writableNativeMap.putDouble("transactionDate", purchase.h());
                writableNativeMap.putString("transactionReceipt", purchase.d());
                writableNativeMap.putString("orderId", purchase.c());
                writableNativeMap.putString("purchaseToken", purchase.i());
                writableNativeMap.putString("developerPayloadAndroid", purchase.b());
                writableNativeMap.putString("signatureAndroid", purchase.j());
                writableNativeMap.putInt("purchaseStateAndroid", purchase.g());
                writableNativeMap.putBoolean("isAcknowledgedAndroid", purchase.k());
                writableNativeMap.putString("packageNameAndroid", purchase.e());
                com.android.billingclient.api.a a10 = purchase.a();
                String str4 = null;
                if (a10 != null) {
                    str2 = a10.a();
                } else {
                    str2 = null;
                }
                writableNativeMap.putString("obfuscatedAccountIdAndroid", str2);
                com.android.billingclient.api.a a11 = purchase.a();
                if (a11 != null) {
                    str4 = a11.b();
                }
                writableNativeMap.putString("obfuscatedProfileIdAndroid", str4);
                if (Intrinsics.areEqual(str, "subs")) {
                    writableNativeMap.putBoolean("autoRenewingAndroid", purchase.l());
                }
                writableNativeArray.pushMap(writableNativeMap);
            }
        }
        d.d(promise, writableNativeArray);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit getItemsByType$lambda$20(ReadableArray readableArray, final Promise promise, String str, final RNIapModule rNIapModule, BillingClient billingClient) {
        String string;
        Intrinsics.checkNotNullParameter(billingClient, "billingClient");
        ArrayList arrayList = new ArrayList();
        int size = readableArray.size();
        for (int i10 = 0; i10 < size; i10++) {
            if (readableArray.getType(i10) == ReadableType.String && (string = readableArray.getString(i10)) != null) {
                QueryProductDetailsParams.b a10 = QueryProductDetailsParams.b.a().b(string).c(str).a();
                Intrinsics.checkNotNullExpressionValue(a10, "build(...)");
                arrayList.add(a10);
            }
        }
        if (arrayList.isEmpty()) {
            d.b(promise, "EMPTY_SKU_LIST", "The SKU list is empty.");
            return Unit.f32056a;
        }
        QueryProductDetailsParams a11 = QueryProductDetailsParams.a().b(arrayList).a();
        Intrinsics.checkNotNullExpressionValue(a11, "build(...)");
        billingClient.i(a11, new a6.h() { // from class: com.dooboolab.rniap.z
            @Override // a6.h
            public final void a(BillingResult billingResult, List list) {
                RNIapModule.getItemsByType$lambda$20$lambda$19(RNIapModule.this, promise, billingResult, list);
            }
        });
        return Unit.f32056a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void getItemsByType$lambda$20$lambda$19(RNIapModule rNIapModule, Promise promise, BillingResult billingResult, List skuDetailsList) {
        String str;
        Iterator it;
        RNIapModule rNIapModule2 = rNIapModule;
        Intrinsics.checkNotNullParameter(billingResult, "billingResult");
        Intrinsics.checkNotNullParameter(skuDetailsList, "skuDetailsList");
        if (!rNIapModule2.isValidResult(billingResult, promise)) {
            return;
        }
        WritableArray createArray = Arguments.createArray();
        String str2 = "createArray(...)";
        Intrinsics.checkNotNullExpressionValue(createArray, "createArray(...)");
        Iterator it2 = skuDetailsList.iterator();
        while (it2.hasNext()) {
            ProductDetails productDetails = (ProductDetails) it2.next();
            rNIapModule2.skus.put(productDetails.d(), productDetails);
            WritableMap createMap = Arguments.createMap();
            Intrinsics.checkNotNullExpressionValue(createMap, "createMap(...)");
            createMap.putString("productId", productDetails.d());
            createMap.putString("title", productDetails.g());
            createMap.putString("description", productDetails.a());
            createMap.putString("productType", productDetails.e());
            createMap.putString(StackTraceHelper.NAME_KEY, productDetails.b());
            ProductDetails.b c10 = productDetails.c();
            if (c10 != null) {
                WritableMap createMap2 = Arguments.createMap();
                createMap2.putString("priceCurrencyCode", c10.c());
                createMap2.putString("formattedPrice", c10.a());
                createMap2.putString("priceAmountMicros", String.valueOf(c10.b()));
                Intrinsics.checkNotNullExpressionValue(createMap2, "apply(...)");
                createMap.putMap("oneTimePurchaseOfferDetails", createMap2);
            }
            List<ProductDetails.d> f10 = productDetails.f();
            if (f10 != null) {
                WritableArray createArray2 = Arguments.createArray();
                Intrinsics.checkNotNullExpressionValue(createArray2, str2);
                for (ProductDetails.d dVar : f10) {
                    WritableMap createMap3 = Arguments.createMap();
                    createMap3.putString("basePlanId", dVar.a());
                    createMap3.putString("offerId", dVar.b());
                    createMap3.putString("offerToken", dVar.d());
                    WritableArray createArray3 = Arguments.createArray();
                    Intrinsics.checkNotNullExpressionValue(createArray3, str2);
                    List<String> c11 = dVar.c();
                    Intrinsics.checkNotNullExpressionValue(c11, "getOfferTags(...)");
                    for (String str3 : c11) {
                        createArray3.pushString(str3);
                    }
                    createMap3.putArray("offerTags", createArray3);
                    WritableArray createArray4 = Arguments.createArray();
                    Intrinsics.checkNotNullExpressionValue(createArray4, str2);
                    List<ProductDetails.PricingPhase> a10 = dVar.e().a();
                    Intrinsics.checkNotNullExpressionValue(a10, "getPricingPhaseList(...)");
                    for (ProductDetails.PricingPhase pricingPhase : a10) {
                        WritableMap createMap4 = Arguments.createMap();
                        createMap4.putString("formattedPrice", pricingPhase.c());
                        createMap4.putString("priceCurrencyCode", pricingPhase.e());
                        createMap4.putString("billingPeriod", pricingPhase.b());
                        createMap4.putInt("billingCycleCount", pricingPhase.a());
                        createMap4.putString("priceAmountMicros", String.valueOf(pricingPhase.d()));
                        createMap4.putInt("recurrenceMode", pricingPhase.f());
                        Intrinsics.checkNotNullExpressionValue(createMap4, "apply(...)");
                        createArray4.pushMap(createMap4);
                        str2 = str2;
                        it2 = it2;
                    }
                    String str4 = str2;
                    WritableMap createMap5 = Arguments.createMap();
                    createMap5.putArray("pricingPhaseList", createArray4);
                    Intrinsics.checkNotNullExpressionValue(createMap5, "apply(...)");
                    createMap3.putMap("pricingPhases", createMap5);
                    Intrinsics.checkNotNullExpressionValue(createMap3, "apply(...)");
                    createArray2.pushMap(createMap3);
                    str2 = str4;
                    it2 = it2;
                }
                str = str2;
                it = it2;
                createMap.putArray("subscriptionOfferDetails", createArray2);
            } else {
                str = str2;
                it = it2;
            }
            createArray.pushMap(createMap);
            rNIapModule2 = rNIapModule;
            str2 = str;
            it2 = it;
        }
        d.d(promise, createArray);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit getPurchaseHistoryByType$lambda$28(String str, final RNIapModule rNIapModule, final Promise promise, BillingClient billingClient) {
        Intrinsics.checkNotNullParameter(billingClient, "billingClient");
        l.a a10 = a6.l.a();
        String str2 = "subs";
        if (!Intrinsics.areEqual(str, "subs")) {
            str2 = "inapp";
        }
        billingClient.j(a10.b(str2).a(), new a6.i() { // from class: com.dooboolab.rniap.g
            @Override // a6.i
            public final void a(BillingResult billingResult, List list) {
                RNIapModule.getPurchaseHistoryByType$lambda$28$lambda$27(RNIapModule.this, promise, billingResult, list);
            }
        });
        return Unit.f32056a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void getPurchaseHistoryByType$lambda$28$lambda$27(RNIapModule rNIapModule, Promise promise, BillingResult billingResult, List list) {
        Intrinsics.checkNotNullParameter(billingResult, "billingResult");
        if (!rNIapModule.isValidResult(billingResult, promise)) {
            return;
        }
        Log.d(TAG, String.valueOf(list));
        WritableArray createArray = Arguments.createArray();
        Intrinsics.checkNotNullExpressionValue(createArray, "createArray(...)");
        if (list != null) {
            Iterator it = list.iterator();
            while (it.hasNext()) {
                PurchaseHistoryRecord purchaseHistoryRecord = (PurchaseHistoryRecord) it.next();
                WritableMap createMap = Arguments.createMap();
                Intrinsics.checkNotNullExpressionValue(createMap, "createMap(...)");
                createMap.putString("productId", (String) purchaseHistoryRecord.c().get(0));
                WritableArray createArray2 = Arguments.createArray();
                Intrinsics.checkNotNullExpressionValue(createArray2, "createArray(...)");
                List<String> c10 = purchaseHistoryRecord.c();
                Intrinsics.checkNotNullExpressionValue(c10, "getProducts(...)");
                for (String str : c10) {
                    createArray2.pushString(str);
                }
                createMap.putArray("productIds", createArray2);
                createMap.putDouble("transactionDate", purchaseHistoryRecord.d());
                createMap.putString("transactionReceipt", purchaseHistoryRecord.b());
                createMap.putString("purchaseToken", purchaseHistoryRecord.e());
                createMap.putString("dataAndroid", purchaseHistoryRecord.b());
                createMap.putString("signatureAndroid", purchaseHistoryRecord.f());
                String a10 = purchaseHistoryRecord.a();
                if (a10 == null) {
                    a10 = "";
                }
                createMap.putString("developerPayload", a10);
                createArray.pushMap(createMap);
            }
        }
        d.d(promise, createArray);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit getStorefront$lambda$43(final Promise promise, BillingClient billingClient) {
        Intrinsics.checkNotNullParameter(billingClient, "billingClient");
        billingClient.d(a6.g.a().a(), new a6.d() { // from class: com.dooboolab.rniap.x
            @Override // a6.d
            public final void onBillingConfigResponse(BillingResult billingResult, BillingConfig billingConfig) {
                RNIapModule.getStorefront$lambda$43$lambda$42(Promise.this, billingResult, billingConfig);
            }
        });
        return Unit.f32056a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void getStorefront$lambda$43$lambda$42(Promise promise, BillingResult result, BillingConfig billingConfig) {
        String str;
        Intrinsics.checkNotNullParameter(result, "result");
        String str2 = "";
        if (result.b() == 0) {
            if (billingConfig != null) {
                str = billingConfig.a();
            } else {
                str = null;
            }
            if (str != null) {
                str2 = str;
            }
            d.d(promise, str2);
            return;
        }
        String a10 = result.a();
        if (a10 != null) {
            str2 = a10;
        }
        d.b(promise, String.valueOf(result.b()), str2);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit isFeatureSupported$lambda$2(String str, Promise promise, BillingClient billingClient) {
        String str2;
        Intrinsics.checkNotNullParameter(billingClient, "billingClient");
        switch (str.hashCode()) {
            case -91953012:
                if (str.equals("IN_APP_MESSAGING")) {
                    str2 = "bbb";
                    d.d(promise, billingClient.e(str2));
                    return Unit.f32056a;
                }
                d.a(promise, "Invalid Feature name");
                return Unit.f32056a;
            case 755711666:
                if (str.equals("PRODUCT_DETAILS")) {
                    str2 = "fff";
                    d.d(promise, billingClient.e(str2));
                    return Unit.f32056a;
                }
                d.a(promise, "Invalid Feature name");
                return Unit.f32056a;
            case 808641238:
                if (str.equals("SUBSCRIPTIONS")) {
                    str2 = "subscriptions";
                    d.d(promise, billingClient.e(str2));
                    return Unit.f32056a;
                }
                d.a(promise, "Invalid Feature name");
                return Unit.f32056a;
            case 1739975758:
                if (str.equals("PRICE_CHANGE_CONFIRMATION")) {
                    str2 = "priceChangeConfirmation";
                    d.d(promise, billingClient.e(str2));
                    return Unit.f32056a;
                }
                d.a(promise, "Invalid Feature name");
                return Unit.f32056a;
            case 1785301586:
                if (str.equals("SUBSCRIPTIONS_UPDATE")) {
                    str2 = "subscriptionsUpdate";
                    d.d(promise, billingClient.e(str2));
                    return Unit.f32056a;
                }
                d.a(promise, "Invalid Feature name");
                return Unit.f32056a;
            default:
                d.a(promise, "Invalid Feature name");
                return Unit.f32056a;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final boolean isValidResult(BillingResult billingResult, Promise promise) {
        int b10 = billingResult.b();
        Log.d(TAG, "responseCode: " + b10);
        if (billingResult.b() != 0) {
            com.dooboolab.rniap.b.f9746a.b(promise, billingResult.b());
            return false;
        }
        return true;
    }

    private final void sendEvent(ReactContext reactContext, String str, WritableMap writableMap) {
        ((DeviceEventManagerModule.RCTDeviceEventEmitter) reactContext.getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class)).emit(str, writableMap);
    }

    private final void sendUnconsumedPurchases(final Promise promise) {
        ensureConnection(promise, new Function1() { // from class: com.dooboolab.rniap.u
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit sendUnconsumedPurchases$lambda$41;
                sendUnconsumedPurchases$lambda$41 = RNIapModule.sendUnconsumedPurchases$lambda$41(Promise.this, this, (BillingClient) obj);
                return sendUnconsumedPurchases$lambda$41;
            }
        });
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit sendUnconsumedPurchases$lambda$41(final Promise promise, final RNIapModule rNIapModule, BillingClient billingClient) {
        Intrinsics.checkNotNullParameter(billingClient, "billingClient");
        String[] strArr = {"inapp", "subs"};
        for (int i10 = 0; i10 < 2; i10++) {
            billingClient.k(a6.m.a().b(strArr[i10]).a(), new a6.j() { // from class: com.dooboolab.rniap.p
                @Override // a6.j
                public final void a(BillingResult billingResult, List list) {
                    RNIapModule.sendUnconsumedPurchases$lambda$41$lambda$40(RNIapModule.this, promise, billingResult, list);
                }
            });
        }
        d.d(promise, Boolean.TRUE);
        return Unit.f32056a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void sendUnconsumedPurchases$lambda$41$lambda$40(RNIapModule rNIapModule, Promise promise, BillingResult billingResult, List list) {
        Intrinsics.checkNotNullParameter(billingResult, "billingResult");
        Intrinsics.checkNotNullParameter(list, "list");
        if (!rNIapModule.isValidResult(billingResult, promise)) {
            return;
        }
        ArrayList arrayList = new ArrayList();
        for (Object obj : list) {
            if (!((Purchase) obj).k()) {
                arrayList.add(obj);
            }
        }
        rNIapModule.onPurchasesUpdated(billingResult, arrayList);
    }

    @ReactMethod
    public final void acknowledgePurchase(@NotNull final String token, String str, @NotNull final Promise promise) {
        Intrinsics.checkNotNullParameter(token, "token");
        Intrinsics.checkNotNullParameter(promise, "promise");
        ensureConnection(promise, new Function1() { // from class: com.dooboolab.rniap.l
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit acknowledgePurchase$lambda$34;
                acknowledgePurchase$lambda$34 = RNIapModule.acknowledgePurchase$lambda$34(token, this, promise, (BillingClient) obj);
                return acknowledgePurchase$lambda$34;
            }
        });
    }

    @ReactMethod
    public final void addListener(@NotNull String eventName) {
        Intrinsics.checkNotNullParameter(eventName, "eventName");
    }

    @ReactMethod
    public final void buyItemByType(@NotNull final String type, @NotNull final ReadableArray skuArr, final String str, final int i10, final String str2, final String str3, @NotNull final ReadableArray offerTokenArr, final boolean z10, @NotNull final Promise promise) {
        Intrinsics.checkNotNullParameter(type, "type");
        Intrinsics.checkNotNullParameter(skuArr, "skuArr");
        Intrinsics.checkNotNullParameter(offerTokenArr, "offerTokenArr");
        Intrinsics.checkNotNullParameter(promise, "promise");
        final Activity currentActivity = this.reactContext.getCurrentActivity();
        if (currentActivity == null) {
            d.b(promise, "E_UNKNOWN", "getCurrentActivity returned null");
        } else {
            ensureConnection(promise, new Function1() { // from class: com.dooboolab.rniap.h
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit buyItemByType$lambda$32;
                    buyItemByType$lambda$32 = RNIapModule.buyItemByType$lambda$32(Promise.this, type, skuArr, offerTokenArr, this, z10, str, i10, str2, str3, currentActivity, (BillingClient) obj);
                    return buyItemByType$lambda$32;
                }
            });
        }
    }

    @ReactMethod
    public final void consumeProduct(@NotNull String token, String str, @NotNull final Promise promise) {
        Intrinsics.checkNotNullParameter(token, "token");
        Intrinsics.checkNotNullParameter(promise, "promise");
        final a6.e a10 = a6.e.b().b(token).a();
        Intrinsics.checkNotNullExpressionValue(a10, "build(...)");
        ensureConnection(promise, new Function1() { // from class: com.dooboolab.rniap.k
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit consumeProduct$lambda$36;
                consumeProduct$lambda$36 = RNIapModule.consumeProduct$lambda$36(a6.e.this, this, promise, (BillingClient) obj);
                return consumeProduct$lambda$36;
            }
        });
    }

    @ReactMethod
    public final void endConnection(@NotNull Promise promise) {
        Intrinsics.checkNotNullParameter(promise, "promise");
        BillingClient billingClient = this.billingClientCache;
        if (billingClient != null) {
            billingClient.c();
        }
        this.billingClientCache = null;
        this.skus.clear();
        com.dooboolab.rniap.c.f9747a.b();
        d.d(promise, Boolean.TRUE);
    }

    public final void ensureConnection(@NotNull final Promise promise, @NotNull final Function1<? super BillingClient, Unit> callback) {
        Intrinsics.checkNotNullParameter(promise, "promise");
        Intrinsics.checkNotNullParameter(callback, "callback");
        BillingClient billingClient = this.billingClientCache;
        if (billingClient != null && billingClient.f()) {
            callback.invoke(billingClient);
        } else {
            initConnection(new PromiseImpl(new Callback() { // from class: com.dooboolab.rniap.i
                @Override // com.facebook.react.bridge.Callback
                public final void invoke(Object[] objArr) {
                    RNIapModule.ensureConnection$lambda$0(RNIapModule.this, callback, promise, objArr);
                }
            }, new Callback() { // from class: com.dooboolab.rniap.j
                @Override // com.facebook.react.bridge.Callback
                public final void invoke(Object[] objArr) {
                    RNIapModule.ensureConnection$lambda$1(Promise.this, objArr);
                }
            }));
        }
    }

    @ReactMethod
    public final void flushFailedPurchasesCachedAsPending(@NotNull final Promise promise) {
        Intrinsics.checkNotNullParameter(promise, "promise");
        ensureConnection(promise, new Function1() { // from class: com.dooboolab.rniap.r
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit flushFailedPurchasesCachedAsPending$lambda$8;
                flushFailedPurchasesCachedAsPending$lambda$8 = RNIapModule.flushFailedPurchasesCachedAsPending$lambda$8(RNIapModule.this, promise, (BillingClient) obj);
                return flushFailedPurchasesCachedAsPending$lambda$8;
            }
        });
    }

    @ReactMethod
    public final void getAvailableItemsByType(@NotNull final String type, @NotNull final Promise promise) {
        Intrinsics.checkNotNullParameter(type, "type");
        Intrinsics.checkNotNullParameter(promise, "promise");
        ensureConnection(promise, new Function1() { // from class: com.dooboolab.rniap.s
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit availableItemsByType$lambda$24;
                availableItemsByType$lambda$24 = RNIapModule.getAvailableItemsByType$lambda$24(type, this, promise, (BillingClient) obj);
                return availableItemsByType$lambda$24;
            }
        });
    }

    @ReactMethod
    public final void getItemsByType(@NotNull final String type, @NotNull final ReadableArray skuArr, @NotNull final Promise promise) {
        Intrinsics.checkNotNullParameter(type, "type");
        Intrinsics.checkNotNullParameter(skuArr, "skuArr");
        Intrinsics.checkNotNullParameter(promise, "promise");
        ensureConnection(promise, new Function1() { // from class: com.dooboolab.rniap.y
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit itemsByType$lambda$20;
                itemsByType$lambda$20 = RNIapModule.getItemsByType$lambda$20(ReadableArray.this, promise, type, this, (BillingClient) obj);
                return itemsByType$lambda$20;
            }
        });
    }

    @Override // com.facebook.react.bridge.NativeModule
    @NotNull
    public String getName() {
        return TAG;
    }

    @ReactMethod
    public final void getPackageName(@NotNull Promise promise) {
        Intrinsics.checkNotNullParameter(promise, "promise");
        promise.resolve(getReactApplicationContext().getPackageName());
    }

    @ReactMethod
    public final void getPurchaseHistoryByType(@NotNull final String type, @NotNull final Promise promise) {
        Intrinsics.checkNotNullParameter(type, "type");
        Intrinsics.checkNotNullParameter(promise, "promise");
        ensureConnection(promise, new Function1() { // from class: com.dooboolab.rniap.e
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit purchaseHistoryByType$lambda$28;
                purchaseHistoryByType$lambda$28 = RNIapModule.getPurchaseHistoryByType$lambda$28(type, this, promise, (BillingClient) obj);
                return purchaseHistoryByType$lambda$28;
            }
        });
    }

    @ReactMethod
    public final void getStorefront(@NotNull final Promise promise) {
        Intrinsics.checkNotNullParameter(promise, "promise");
        ensureConnection(promise, new Function1() { // from class: com.dooboolab.rniap.o
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit storefront$lambda$43;
                storefront$lambda$43 = RNIapModule.getStorefront$lambda$43(Promise.this, (BillingClient) obj);
                return storefront$lambda$43;
            }
        });
    }

    @ReactMethod
    public final void initConnection(@NotNull Promise promise) {
        Intrinsics.checkNotNullParameter(promise, "promise");
        if (this.googleApiAvailability.g(this.reactContext) != 0) {
            Log.i(TAG, "Google Play Services are not available on this device");
            d.b(promise, "E_NOT_PREPARED", "Google Play Services are not available on this device");
            return;
        }
        BillingClient billingClient = this.billingClientCache;
        if (billingClient != null && billingClient.f()) {
            Log.i(TAG, "Already initialized, you should only call initConnection() once when your app starts");
            d.d(promise, Boolean.TRUE);
            return;
        }
        BillingClient a10 = this.builder.d(this).a();
        this.billingClientCache = a10;
        a10.l(new b(promise));
    }

    @ReactMethod
    public final void isFeatureSupported(@NotNull final String feature, @NotNull final Promise promise) {
        Intrinsics.checkNotNullParameter(feature, "feature");
        Intrinsics.checkNotNullParameter(promise, "promise");
        ensureConnection(promise, new Function1() { // from class: com.dooboolab.rniap.m
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit isFeatureSupported$lambda$2;
                isFeatureSupported$lambda$2 = RNIapModule.isFeatureSupported$lambda$2(feature, promise, (BillingClient) obj);
                return isFeatureSupported$lambda$2;
            }
        });
    }

    @Override // a6.k
    public void onPurchasesUpdated(@NotNull BillingResult billingResult, List<? extends Purchase> list) {
        Intrinsics.checkNotNullParameter(billingResult, "billingResult");
        int b10 = billingResult.b();
        if (b10 != 0) {
            WritableMap createMap = Arguments.createMap();
            Intrinsics.checkNotNullExpressionValue(createMap, "createMap(...)");
            createMap.putInt("responseCode", b10);
            createMap.putString("debugMessage", billingResult.a());
            com.dooboolab.rniap.b bVar = com.dooboolab.rniap.b.f9746a;
            com.dooboolab.rniap.a a10 = bVar.a(b10);
            createMap.putString("code", a10.a());
            createMap.putString("message", a10.b());
            sendEvent(this.reactContext, "purchase-error", createMap);
            bVar.c(PROMISE_BUY_ITEM, b10);
        } else if (list != null) {
            WritableArray createArray = Arguments.createArray();
            Intrinsics.checkNotNullExpressionValue(createArray, "createArray(...)");
            for (Purchase purchase : list) {
                WritableMap createMap2 = Arguments.createMap();
                Intrinsics.checkNotNullExpressionValue(createMap2, "createMap(...)");
                createMap2.putString("productId", (String) purchase.f().get(0));
                WritableArray createArray2 = Arguments.createArray();
                Intrinsics.checkNotNullExpressionValue(createArray2, "createArray(...)");
                List<String> f10 = purchase.f();
                Intrinsics.checkNotNullExpressionValue(f10, "getProducts(...)");
                for (String str : f10) {
                    createArray2.pushString(str);
                }
                createMap2.putArray("productIds", createArray2);
                createMap2.putString("transactionId", purchase.c());
                createMap2.putDouble("transactionDate", purchase.h());
                createMap2.putString("transactionReceipt", purchase.d());
                createMap2.putString("purchaseToken", purchase.i());
                createMap2.putString("dataAndroid", purchase.d());
                createMap2.putString("signatureAndroid", purchase.j());
                createMap2.putBoolean("autoRenewingAndroid", purchase.l());
                createMap2.putBoolean("isAcknowledgedAndroid", purchase.k());
                createMap2.putInt("purchaseStateAndroid", purchase.g());
                createMap2.putString("packageNameAndroid", purchase.e());
                createMap2.putString("developerPayloadAndroid", purchase.b());
                com.android.billingclient.api.a a11 = purchase.a();
                if (a11 != null) {
                    createMap2.putString("obfuscatedAccountIdAndroid", a11.a());
                    createMap2.putString("obfuscatedProfileIdAndroid", a11.b());
                }
                createArray.pushMap(createMap2.copy());
                sendEvent(this.reactContext, "purchase-updated", createMap2);
            }
            com.dooboolab.rniap.c.f9747a.d(PROMISE_BUY_ITEM, createArray);
        } else {
            WritableMap createMap3 = Arguments.createMap();
            Intrinsics.checkNotNullExpressionValue(createMap3, "createMap(...)");
            createMap3.putInt("responseCode", billingResult.b());
            createMap3.putString("debugMessage", billingResult.a());
            createMap3.putString("extraMessage", "The purchases are null. This is a normal behavior if you have requested DEFERRED proration. If not please report an issue.");
            sendEvent(this.reactContext, "purchase-updated", createMap3);
            com.dooboolab.rniap.c.f9747a.d(PROMISE_BUY_ITEM, null);
        }
    }

    @ReactMethod
    public final void removeListeners(double d10) {
    }

    @ReactMethod
    public final void startListening(@NotNull Promise promise) {
        Intrinsics.checkNotNullParameter(promise, "promise");
        sendUnconsumedPurchases(promise);
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public RNIapModule(@NotNull ReactApplicationContext reactContext, @NotNull BillingClient.a builder, @NotNull com.google.android.gms.common.f googleApiAvailability) {
        super(reactContext);
        Intrinsics.checkNotNullParameter(reactContext, "reactContext");
        Intrinsics.checkNotNullParameter(builder, "builder");
        Intrinsics.checkNotNullParameter(googleApiAvailability, "googleApiAvailability");
        this.reactContext = reactContext;
        this.builder = builder;
        this.googleApiAvailability = googleApiAvailability;
        this.skus = new LinkedHashMap();
        reactContext.addLifecycleEventListener(new c());
    }
}
