package com.discord.billing.types;

import com.android.billingclient.api.BillingFlowParams;
import com.android.billingclient.api.ProductDetails;
import java.security.MessageDigest;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Iterator;
import java.util.List;
import kotlin.Metadata;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import kotlin.text.Charsets;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u00008\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010 \n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000e\n\u0002\b\u0007\n\u0002\u0010\t\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\b\n\u0002\b\u0006\bÀ\u0002\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J<\u0010\u0004\u001a\u0004\u0018\u00010\u00052\u000e\u0010\u0006\u001a\n\u0012\u0004\u0012\u00020\b\u0018\u00010\u00072\u0006\u0010\t\u001a\u00020\n2\b\u0010\u000b\u001a\u0004\u0018\u00010\n2\b\u0010\f\u001a\u0004\u0018\u00010\n2\u0006\u0010\r\u001a\u00020\nJD\u0010\u000e\u001a\u0004\u0018\u00010\u00052\f\u0010\u0006\u001a\b\u0012\u0004\u0012\u00020\b0\u00072\u0006\u0010\t\u001a\u00020\n2\b\u0010\u000b\u001a\u0004\u0018\u00010\n2\b\u0010\f\u001a\u0004\u0018\u00010\n2\u0006\u0010\r\u001a\u00020\n2\b\u0010\u000f\u001a\u0004\u0018\u00010\nJ\u0010\u0010\u0010\u001a\u00020\n2\u0006\u0010\r\u001a\u00020\nH\u0002J\u0010\u0010\u0011\u001a\u00020\u00122\u0006\u0010\u0006\u001a\u00020\bH\u0002J\u0010\u0010\u0013\u001a\u00020\u00142\u0006\u0010\u0006\u001a\u00020\bH\u0002J\u0018\u0010\u0015\u001a\u00020\u00162\u0006\u0010\u0017\u001a\u00020\n2\u0006\u0010\u0018\u001a\u00020\nH\u0002J\u0018\u0010\u0019\u001a\u00020\u00162\u0006\u0010\u001a\u001a\u00020\b2\u0006\u0010\u001b\u001a\u00020\bH\u0002¨\u0006\u001c"}, d2 = {"Lcom/discord/billing/types/BillingFlowParams;", "", "<init>", "()V", "create", "Lcom/android/billingclient/api/BillingFlowParams;", "productDetails", "", "Lcom/android/billingclient/api/ProductDetails;", "productId", "", "productIdOld", "purchaseToken", "userId", "createWithProductDetails", "offerId", "getObfuscatedUserId", "getPriceAmountMicros", "", "getPricingPhase", "Lcom/android/billingclient/api/ProductDetails$PricingPhase;", "calculateStandardizedUnits", "", "oldPeriod", "newPeriod", "getReplacementMode", "oldProductDetails", "newProductDetails", "billing_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@SourceDebugExtension({"SMAP\nBillingFlowParams.kt\nKotlin\n*S Kotlin\n*F\n+ 1 BillingFlowParams.kt\ncom/discord/billing/types/BillingFlowParams\n+ 2 fake.kt\nkotlin/jvm/internal/FakeKt\n+ 3 _Collections.kt\nkotlin/collections/CollectionsKt___CollectionsKt\n+ 4 _Arrays.kt\nkotlin/collections/ArraysKt___ArraysKt\n*L\n1#1,172:1\n1#2:173\n295#3,2:174\n295#3,2:176\n295#3,2:181\n12897#4,3:178\n*S KotlinDebug\n*F\n+ 1 BillingFlowParams.kt\ncom/discord/billing/types/BillingFlowParams\n*L\n72#1:174,2\n74#1:176,2\n131#1:181,2\n109#1:178,3\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class BillingFlowParams {
    @NotNull
    public static final BillingFlowParams INSTANCE = new BillingFlowParams();

    private BillingFlowParams() {
    }

    private final int calculateStandardizedUnits(String str, String str2) {
        if (Intrinsics.areEqual(str, "P1M") && Intrinsics.areEqual(str2, "P1Y")) {
            return 12;
        }
        if (Intrinsics.areEqual(str, "P1M") && Intrinsics.areEqual(str2, "P6M")) {
            return 6;
        }
        if (Intrinsics.areEqual(str, "P1M") && Intrinsics.areEqual(str2, "P3M")) {
            return 3;
        }
        if (Intrinsics.areEqual(str, "P3M") && Intrinsics.areEqual(str2, "P1Y")) {
            return 4;
        }
        if (Intrinsics.areEqual(str, "P3M") && Intrinsics.areEqual(str2, "P6M")) {
            return 2;
        }
        if (Intrinsics.areEqual(str, "P6M") && Intrinsics.areEqual(str2, "P1Y")) {
            return 2;
        }
        return 1;
    }

    private final String getObfuscatedUserId(String str) {
        MessageDigest messageDigest = MessageDigest.getInstance("SHA-256");
        byte[] bytes = str.getBytes(Charsets.UTF_8);
        Intrinsics.checkNotNullExpressionValue(bytes, "getBytes(...)");
        byte[] digest = messageDigest.digest(bytes);
        Intrinsics.checkNotNullExpressionValue(digest, "digest(...)");
        String str2 = "";
        for (byte b10 : digest) {
            String format = String.format("%02x", Arrays.copyOf(new Object[]{Byte.valueOf(b10)}, 1));
            Intrinsics.checkNotNullExpressionValue(format, "format(...)");
            str2 = str2 + format;
        }
        return str2;
    }

    private final long getPriceAmountMicros(ProductDetails productDetails) {
        if (Intrinsics.areEqual(productDetails.e(), "inapp")) {
            ProductDetails.b c10 = productDetails.c();
            if (c10 != null) {
                return c10.b();
            }
            return 0L;
        } else if (Intrinsics.areEqual(productDetails.e(), "subs")) {
            return getPricingPhase(productDetails).d();
        } else {
            return 0L;
        }
    }

    private final ProductDetails.PricingPhase getPricingPhase(ProductDetails productDetails) {
        ProductDetails.d dVar;
        ProductDetails.c e10;
        List a10;
        Object obj;
        if (!Intrinsics.areEqual(productDetails.e(), "inapp")) {
            List f10 = productDetails.f();
            ProductDetails.PricingPhase pricingPhase = null;
            if (f10 != null) {
                Iterator it = f10.iterator();
                while (true) {
                    if (it.hasNext()) {
                        obj = it.next();
                        if (((ProductDetails.d) obj).b() == null) {
                            break;
                        }
                    } else {
                        obj = null;
                        break;
                    }
                }
                dVar = (ProductDetails.d) obj;
            } else {
                dVar = null;
            }
            if (dVar != null && (e10 = dVar.e()) != null && (a10 = e10.a()) != null) {
                pricingPhase = (ProductDetails.PricingPhase) a10.get(0);
            }
            if (pricingPhase != null) {
                return pricingPhase;
            }
            throw new AssertionError("No pricing phase found for subscription product details");
        }
        throw new AssertionError("Attempted to retrieve pricing phase for one time purchase");
    }

    private final int getReplacementMode(ProductDetails productDetails, ProductDetails productDetails2) {
        long priceAmountMicros = getPriceAmountMicros(productDetails);
        long priceAmountMicros2 = getPriceAmountMicros(productDetails2);
        String b10 = getPricingPhase(productDetails).b();
        Intrinsics.checkNotNullExpressionValue(b10, "getBillingPeriod(...)");
        String b11 = getPricingPhase(productDetails2).b();
        Intrinsics.checkNotNullExpressionValue(b11, "getBillingPeriod(...)");
        if (priceAmountMicros2 / calculateStandardizedUnits(b10, b11) <= priceAmountMicros) {
            return 6;
        }
        return 2;
    }

    public final com.android.billingclient.api.BillingFlowParams create(List<ProductDetails> list, @NotNull String productId, String str, String str2, @NotNull String userId) {
        ProductDetails productDetails;
        ProductDetails productDetails2;
        Object obj;
        Object obj2;
        Intrinsics.checkNotNullParameter(productId, "productId");
        Intrinsics.checkNotNullParameter(userId, "userId");
        if (list != null) {
            Iterator<T> it = list.iterator();
            while (true) {
                if (it.hasNext()) {
                    obj2 = it.next();
                    if (Intrinsics.areEqual(((ProductDetails) obj2).d(), productId)) {
                        break;
                    }
                } else {
                    obj2 = null;
                    break;
                }
            }
            productDetails = (ProductDetails) obj2;
        } else {
            productDetails = null;
        }
        if (list != null) {
            Iterator<T> it2 = list.iterator();
            while (true) {
                if (it2.hasNext()) {
                    obj = it2.next();
                    if (Intrinsics.areEqual(((ProductDetails) obj).d(), str)) {
                        break;
                    }
                } else {
                    obj = null;
                    break;
                }
            }
            productDetails2 = (ProductDetails) obj;
        } else {
            productDetails2 = null;
        }
        if (productDetails == null || (str != null && productDetails2 == null)) {
            return null;
        }
        BillingFlowParams.a c10 = com.android.billingclient.api.BillingFlowParams.a().e(CollectionsKt.e(BillingFlowParams.b.a().c(productDetails).a())).c(getObfuscatedUserId(userId));
        if (productDetails2 != null && str2 != null) {
            c10.f(BillingFlowParams.c.a().b(str2).d(INSTANCE.getReplacementMode(productDetails2, productDetails)).a());
        }
        return c10.a();
    }

    public final com.android.billingclient.api.BillingFlowParams createWithProductDetails(@NotNull List<ProductDetails> productDetails, @NotNull String productId, String str, String str2, @NotNull String userId, String str3) {
        String str4;
        Object obj;
        Object obj2;
        Object obj3;
        Object obj4;
        Intrinsics.checkNotNullParameter(productDetails, "productDetails");
        Intrinsics.checkNotNullParameter(productId, "productId");
        Intrinsics.checkNotNullParameter(userId, "userId");
        List<ProductDetails> list = productDetails;
        Iterator<T> it = list.iterator();
        while (true) {
            str4 = null;
            if (it.hasNext()) {
                obj = it.next();
                if (Intrinsics.areEqual(((ProductDetails) obj).d(), productId)) {
                    break;
                }
            } else {
                obj = null;
                break;
            }
        }
        ProductDetails productDetails2 = (ProductDetails) obj;
        if (productDetails2 != null) {
            Iterator<T> it2 = list.iterator();
            while (true) {
                if (it2.hasNext()) {
                    obj2 = it2.next();
                    if (Intrinsics.areEqual(((ProductDetails) obj2).d(), str)) {
                        break;
                    }
                } else {
                    obj2 = null;
                    break;
                }
            }
            ProductDetails productDetails3 = (ProductDetails) obj2;
            if (str != null && productDetails3 == null) {
                return null;
            }
            ArrayList arrayList = new ArrayList();
            BillingFlowParams.b.a c10 = BillingFlowParams.b.a().c(productDetails2);
            Intrinsics.checkNotNullExpressionValue(c10, "setProductDetails(...)");
            if (Intrinsics.areEqual(productDetails2.e(), "subs")) {
                if (str3 != null) {
                    List f10 = productDetails2.f();
                    if (f10 != null) {
                        Iterator it3 = f10.iterator();
                        while (true) {
                            if (it3.hasNext()) {
                                obj4 = it3.next();
                                if (Intrinsics.areEqual(((ProductDetails.d) obj4).b(), str3)) {
                                    break;
                                }
                            } else {
                                obj4 = null;
                                break;
                            }
                        }
                        ProductDetails.d dVar = (ProductDetails.d) obj4;
                        if (dVar != null) {
                            str4 = dVar.d();
                        }
                    }
                } else {
                    List f11 = productDetails2.f();
                    if (f11 != null) {
                        Iterator it4 = f11.iterator();
                        while (true) {
                            if (it4.hasNext()) {
                                obj3 = it4.next();
                                if (((ProductDetails.d) obj3).b() == null) {
                                    break;
                                }
                            } else {
                                obj3 = null;
                                break;
                            }
                        }
                        ProductDetails.d dVar2 = (ProductDetails.d) obj3;
                        if (dVar2 != null) {
                            str4 = dVar2.d();
                        }
                    }
                }
                if (str4 != null) {
                    c10.b(str4);
                } else {
                    throw new AssertionError("Could not find offer token for productId: " + productDetails2.d() + " offerId: " + str3);
                }
            }
            BillingFlowParams.b a10 = c10.a();
            Intrinsics.checkNotNullExpressionValue(a10, "build(...)");
            arrayList.add(a10);
            BillingFlowParams.a b10 = com.android.billingclient.api.BillingFlowParams.a().e(arrayList).c(getObfuscatedUserId(userId)).b(false);
            if (productDetails3 != null && str2 != null) {
                b10.f(BillingFlowParams.c.a().b(str2).d(INSTANCE.getReplacementMode(productDetails3, productDetails2)).a());
            }
            return b10.a();
        }
        throw new AssertionError("Could not find product detail for new product");
    }
}
