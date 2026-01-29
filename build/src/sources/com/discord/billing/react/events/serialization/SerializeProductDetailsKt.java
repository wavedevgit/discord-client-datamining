package com.discord.billing.react.events.serialization;

import com.android.billingclient.api.ProductDetails;
import com.appsflyer.AppsFlyerProperties;
import com.discord.react.utilities.NativeArrayExtensionsKt;
import com.discord.react.utilities.NativeMapExtensionsKt;
import com.facebook.react.bridge.ReadableNativeArray;
import ir.v;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import kotlin.Metadata;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000\u0010\n\u0000\n\u0002\u0018\u0002\n\u0002\u0010 \n\u0002\u0018\u0002\n\u0000\u001a\u0012\u0010\u0000\u001a\u00020\u0001*\b\u0012\u0004\u0012\u00020\u00030\u0002H\u0000¨\u0006\u0004"}, d2 = {"serializeProductDetails", "Lcom/facebook/react/bridge/ReadableNativeArray;", "", "Lcom/android/billingclient/api/ProductDetails;", "billing_release"}, k = 2, mv = {2, 1, 0}, xi = 48)
@SourceDebugExtension({"SMAP\nSerializeProductDetails.kt\nKotlin\n*S Kotlin\n*F\n+ 1 SerializeProductDetails.kt\ncom/discord/billing/react/events/serialization/SerializeProductDetailsKt\n+ 2 _Collections.kt\nkotlin/collections/CollectionsKt___CollectionsKt\n*L\n1#1,75:1\n1563#2:76\n1634#2,2:77\n295#2,2:79\n1563#2:81\n1634#2,3:82\n1636#2:85\n*S KotlinDebug\n*F\n+ 1 SerializeProductDetails.kt\ncom/discord/billing/react/events/serialization/SerializeProductDetailsKt\n*L\n9#1:76\n9#1:77,2\n26#1:79,2\n41#1:81\n41#1:82,3\n9#1:85\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class SerializeProductDetailsKt {
    @NotNull
    public static final ReadableNativeArray serializeProductDetails(@NotNull List<ProductDetails> list) {
        Iterator it;
        ProductDetails productDetails;
        long j10;
        String str;
        String str2;
        String str3;
        Object obj;
        Intrinsics.checkNotNullParameter(list, "<this>");
        List<ProductDetails> list2 = list;
        int i10 = 10;
        ArrayList arrayList = new ArrayList(CollectionsKt.w(list2, 10));
        Iterator it2 = list2.iterator();
        while (it2.hasNext()) {
            ProductDetails productDetails2 = (ProductDetails) it2.next();
            ArrayList arrayList2 = new ArrayList();
            ArrayList arrayList3 = new ArrayList();
            if (Intrinsics.areEqual(productDetails2.e(), "inapp")) {
                ProductDetails.b c10 = productDetails2.c();
                if (c10 != null) {
                    j10 = c10.b();
                    str3 = c10.a();
                    str2 = c10.c();
                    it = it2;
                    productDetails = productDetails2;
                    str = null;
                } else {
                    String d10 = productDetails2.d();
                    throw new AssertionError("Could not find oneTimePurchaseOfferDetails for product: " + d10);
                }
            } else if (Intrinsics.areEqual(productDetails2.e(), "subs")) {
                List<ProductDetails.d> f10 = productDetails2.f();
                if (f10 != null) {
                    Iterator it3 = f10.iterator();
                    while (true) {
                        if (it3.hasNext()) {
                            obj = it3.next();
                            if (((ProductDetails.d) obj).b() == null) {
                                break;
                            }
                        } else {
                            obj = null;
                            break;
                        }
                    }
                    ProductDetails.d dVar = (ProductDetails.d) obj;
                    if (dVar != null) {
                        ProductDetails.PricingPhase pricingPhase = (ProductDetails.PricingPhase) dVar.e().a().get(0);
                        if (pricingPhase != null) {
                            long d11 = pricingPhase.d();
                            String c11 = pricingPhase.c();
                            String b10 = pricingPhase.b();
                            String e10 = pricingPhase.e();
                            for (ProductDetails.d dVar2 : f10) {
                                String b11 = dVar2.b();
                                if (b11 != null) {
                                    arrayList2.add(b11);
                                    List a10 = dVar2.e().a();
                                    Intrinsics.checkNotNullExpressionValue(a10, "getPricingPhaseList(...)");
                                    List list3 = a10;
                                    Iterator it4 = it2;
                                    ArrayList arrayList4 = new ArrayList(CollectionsKt.w(list3, i10));
                                    Iterator it5 = list3.iterator();
                                    while (it5.hasNext()) {
                                        ProductDetails.PricingPhase pricingPhase2 = (ProductDetails.PricingPhase) it5.next();
                                        long j11 = d11;
                                        String str4 = e10;
                                        Iterator it6 = it5;
                                        arrayList4.add(NativeMapExtensionsKt.nativeMapOf(v.a("price", Integer.valueOf((int) (pricingPhase2.d() / 10000))), v.a("formattedPrice", pricingPhase2.c()), v.a("billingPeriod", pricingPhase2.b()), v.a("billingCycleCount", Integer.valueOf(pricingPhase2.a())), v.a(AppsFlyerProperties.CURRENCY_CODE, pricingPhase2.e())));
                                        e10 = str4;
                                        productDetails2 = productDetails2;
                                        it5 = it6;
                                        d11 = j11;
                                    }
                                    arrayList3.add(NativeMapExtensionsKt.nativeMapOf(v.a("basePlanId", dVar2.a()), v.a("offerId", b11), v.a("pricingPhases", NativeArrayExtensionsKt.toNativeArray$default(arrayList4, null, 1, null))));
                                    it2 = it4;
                                    productDetails2 = productDetails2;
                                    d11 = d11;
                                    i10 = 10;
                                }
                            }
                            it = it2;
                            productDetails = productDetails2;
                            str2 = e10;
                            str3 = c11;
                            str = b10;
                            j10 = d11;
                        } else {
                            String d12 = productDetails2.d();
                            throw new AssertionError("Could not find pricingPhase for product: " + d12);
                        }
                    }
                }
                String d13 = productDetails2.d();
                throw new AssertionError("Could not find subscriptionOfferDetails for product: " + d13);
            } else {
                it = it2;
                productDetails = productDetails2;
                j10 = 0;
                str = null;
                str2 = null;
                str3 = null;
            }
            arrayList.add(NativeMapExtensionsKt.nativeMapOf(v.a("identifier", productDetails.d()), v.a("title", productDetails.g()), v.a("description", productDetails.a()), v.a("priceString", str3), v.a(AppsFlyerProperties.CURRENCY_CODE, str2), v.a("price", Integer.valueOf((int) (j10 / 10000))), v.a("type", productDetails.e()), v.a("offerIds", NativeArrayExtensionsKt.toNativeArray$default(arrayList2, null, 1, null)), v.a("billingPeriod", str), v.a("subscriptionOffers", NativeArrayExtensionsKt.toNativeArray$default(arrayList3, null, 1, null))));
            it2 = it;
            i10 = 10;
        }
        return NativeArrayExtensionsKt.toNativeArray$default(arrayList, null, 1, null);
    }
}
