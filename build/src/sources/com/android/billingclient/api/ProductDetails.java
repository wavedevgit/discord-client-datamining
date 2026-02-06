package com.android.billingclient.api;

import android.text.TextUtils;
import com.facebook.react.devsupport.StackTraceHelper;
import java.util.ArrayList;
import java.util.List;
import org.json.JSONArray;
import org.json.JSONObject;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class ProductDetails {

    /* renamed from: a  reason: collision with root package name */
    private final String f7830a;

    /* renamed from: b  reason: collision with root package name */
    private final JSONObject f7831b;

    /* renamed from: c  reason: collision with root package name */
    private final String f7832c;

    /* renamed from: d  reason: collision with root package name */
    private final String f7833d;

    /* renamed from: e  reason: collision with root package name */
    private final String f7834e;

    /* renamed from: f  reason: collision with root package name */
    private final String f7835f;

    /* renamed from: g  reason: collision with root package name */
    private final String f7836g;

    /* renamed from: h  reason: collision with root package name */
    private final String f7837h;

    /* renamed from: i  reason: collision with root package name */
    private final String f7838i;

    /* renamed from: j  reason: collision with root package name */
    private final String f7839j;

    /* renamed from: k  reason: collision with root package name */
    private final String f7840k;

    /* renamed from: l  reason: collision with root package name */
    private final List f7841l;

    /* renamed from: m  reason: collision with root package name */
    private final List f7842m;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class PricingPhase {

        /* renamed from: a  reason: collision with root package name */
        private final String f7843a;

        /* renamed from: b  reason: collision with root package name */
        private final long f7844b;

        /* renamed from: c  reason: collision with root package name */
        private final String f7845c;

        /* renamed from: d  reason: collision with root package name */
        private final String f7846d;

        /* renamed from: e  reason: collision with root package name */
        private final int f7847e;

        /* renamed from: f  reason: collision with root package name */
        private final int f7848f;

        /* JADX INFO: Access modifiers changed from: package-private */
        public PricingPhase(JSONObject jSONObject) {
            this.f7846d = jSONObject.optString("billingPeriod");
            this.f7845c = jSONObject.optString("priceCurrencyCode");
            this.f7843a = jSONObject.optString("formattedPrice");
            this.f7844b = jSONObject.optLong("priceAmountMicros");
            this.f7848f = jSONObject.optInt("recurrenceMode");
            this.f7847e = jSONObject.optInt("billingCycleCount");
        }

        public int a() {
            return this.f7847e;
        }

        public String b() {
            return this.f7846d;
        }

        public String c() {
            return this.f7843a;
        }

        public long d() {
            return this.f7844b;
        }

        public String e() {
            return this.f7845c;
        }

        public int f() {
            return this.f7848f;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        private final int f7849a;

        /* renamed from: b  reason: collision with root package name */
        private final int f7850b;

        a(JSONObject jSONObject) {
            this.f7849a = jSONObject.getInt("commitmentPaymentsCount");
            this.f7850b = jSONObject.optInt("subsequentCommitmentPaymentsCount");
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class b {

        /* renamed from: a  reason: collision with root package name */
        private final String f7851a;

        /* renamed from: b  reason: collision with root package name */
        private final long f7852b;

        /* renamed from: c  reason: collision with root package name */
        private final String f7853c;

        /* renamed from: d  reason: collision with root package name */
        private final String f7854d;

        /* renamed from: e  reason: collision with root package name */
        private final String f7855e;

        /* renamed from: f  reason: collision with root package name */
        private final String f7856f;

        /* renamed from: g  reason: collision with root package name */
        private final com.google.android.gms.internal.play_billing.j f7857g;

        /* renamed from: h  reason: collision with root package name */
        private final Long f7858h;

        /* renamed from: i  reason: collision with root package name */
        private final x f7859i;

        /* renamed from: j  reason: collision with root package name */
        private final b0 f7860j;

        /* renamed from: k  reason: collision with root package name */
        private final y f7861k;

        /* renamed from: l  reason: collision with root package name */
        private final z f7862l;

        /* renamed from: m  reason: collision with root package name */
        private final a0 f7863m;

        b(JSONObject jSONObject) {
            Long l10;
            x xVar;
            b0 b0Var;
            y yVar;
            z zVar;
            this.f7851a = jSONObject.optString("formattedPrice");
            this.f7852b = jSONObject.optLong("priceAmountMicros");
            this.f7853c = jSONObject.optString("priceCurrencyCode");
            String optString = jSONObject.optString("offerIdToken");
            this.f7854d = true == optString.isEmpty() ? null : optString;
            String optString2 = jSONObject.optString("offerId");
            this.f7855e = true == optString2.isEmpty() ? null : optString2;
            String optString3 = jSONObject.optString("purchaseOptionId");
            this.f7856f = true == optString3.isEmpty() ? null : optString3;
            jSONObject.optInt("offerType");
            JSONArray optJSONArray = jSONObject.optJSONArray("offerTags");
            ArrayList arrayList = new ArrayList();
            if (optJSONArray != null) {
                for (int i10 = 0; i10 < optJSONArray.length(); i10++) {
                    arrayList.add(optJSONArray.getString(i10));
                }
            }
            this.f7857g = com.google.android.gms.internal.play_billing.j.j(arrayList);
            if (jSONObject.has("fullPriceMicros")) {
                l10 = Long.valueOf(jSONObject.optLong("fullPriceMicros"));
            } else {
                l10 = null;
            }
            this.f7858h = l10;
            JSONObject optJSONObject = jSONObject.optJSONObject("discountDisplayInfo");
            if (optJSONObject == null) {
                xVar = null;
            } else {
                xVar = new x(optJSONObject);
            }
            this.f7859i = xVar;
            JSONObject optJSONObject2 = jSONObject.optJSONObject("validTimeWindow");
            if (optJSONObject2 == null) {
                b0Var = null;
            } else {
                b0Var = new b0(optJSONObject2);
            }
            this.f7860j = b0Var;
            JSONObject optJSONObject3 = jSONObject.optJSONObject("limitedQuantityInfo");
            if (optJSONObject3 == null) {
                yVar = null;
            } else {
                yVar = new y(optJSONObject3);
            }
            this.f7861k = yVar;
            JSONObject optJSONObject4 = jSONObject.optJSONObject("preorderDetails");
            if (optJSONObject4 == null) {
                zVar = null;
            } else {
                zVar = new z(optJSONObject4);
            }
            this.f7862l = zVar;
            JSONObject optJSONObject5 = jSONObject.optJSONObject("rentalDetails");
            this.f7863m = optJSONObject5 != null ? new a0(optJSONObject5) : null;
        }

        public String a() {
            return this.f7851a;
        }

        public long b() {
            return this.f7852b;
        }

        public String c() {
            return this.f7853c;
        }

        public final String d() {
            return this.f7854d;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class c {

        /* renamed from: a  reason: collision with root package name */
        private final List f7864a;

        c(JSONArray jSONArray) {
            ArrayList arrayList = new ArrayList();
            if (jSONArray != null) {
                for (int i10 = 0; i10 < jSONArray.length(); i10++) {
                    JSONObject optJSONObject = jSONArray.optJSONObject(i10);
                    if (optJSONObject != null) {
                        arrayList.add(new PricingPhase(optJSONObject));
                    }
                }
            }
            this.f7864a = arrayList;
        }

        public List a() {
            return this.f7864a;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class d {

        /* renamed from: a  reason: collision with root package name */
        private final String f7865a;

        /* renamed from: b  reason: collision with root package name */
        private final String f7866b;

        /* renamed from: c  reason: collision with root package name */
        private final String f7867c;

        /* renamed from: d  reason: collision with root package name */
        private final c f7868d;

        /* renamed from: e  reason: collision with root package name */
        private final List f7869e;

        /* renamed from: f  reason: collision with root package name */
        private final a f7870f;

        /* renamed from: g  reason: collision with root package name */
        private final c0 f7871g;

        d(JSONObject jSONObject) {
            a aVar;
            this.f7865a = jSONObject.optString("basePlanId");
            String optString = jSONObject.optString("offerId");
            this.f7866b = true == optString.isEmpty() ? null : optString;
            this.f7867c = jSONObject.getString("offerIdToken");
            this.f7868d = new c(jSONObject.getJSONArray("pricingPhases"));
            JSONObject optJSONObject = jSONObject.optJSONObject("installmentPlanDetails");
            if (optJSONObject == null) {
                aVar = null;
            } else {
                aVar = new a(optJSONObject);
            }
            this.f7870f = aVar;
            JSONObject optJSONObject2 = jSONObject.optJSONObject("transitionPlanDetails");
            this.f7871g = optJSONObject2 != null ? new c0(optJSONObject2) : null;
            ArrayList arrayList = new ArrayList();
            JSONArray optJSONArray = jSONObject.optJSONArray("offerTags");
            if (optJSONArray != null) {
                for (int i10 = 0; i10 < optJSONArray.length(); i10++) {
                    arrayList.add(optJSONArray.getString(i10));
                }
            }
            this.f7869e = arrayList;
        }

        public String a() {
            return this.f7865a;
        }

        public String b() {
            return this.f7866b;
        }

        public List c() {
            return this.f7869e;
        }

        public String d() {
            return this.f7867c;
        }

        public c e() {
            return this.f7868d;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public ProductDetails(String str) {
        ArrayList arrayList;
        this.f7830a = str;
        JSONObject jSONObject = new JSONObject(str);
        this.f7831b = jSONObject;
        String optString = jSONObject.optString("productId");
        this.f7832c = optString;
        String optString2 = jSONObject.optString("type");
        this.f7833d = optString2;
        if (!TextUtils.isEmpty(optString)) {
            if (!TextUtils.isEmpty(optString2)) {
                this.f7834e = jSONObject.optString("title");
                this.f7835f = jSONObject.optString(StackTraceHelper.NAME_KEY);
                this.f7836g = jSONObject.optString("description");
                this.f7838i = jSONObject.optString("packageDisplayName");
                this.f7839j = jSONObject.optString("iconUrl");
                this.f7837h = jSONObject.optString("skuDetailsToken");
                this.f7840k = jSONObject.optString("serializedDocid");
                JSONArray optJSONArray = jSONObject.optJSONArray("subscriptionOfferDetails");
                if (optJSONArray != null) {
                    ArrayList arrayList2 = new ArrayList();
                    for (int i10 = 0; i10 < optJSONArray.length(); i10++) {
                        arrayList2.add(new d(optJSONArray.getJSONObject(i10)));
                    }
                    this.f7841l = arrayList2;
                } else {
                    if (!optString2.equals("subs") && !optString2.equals("play_pass_subs")) {
                        arrayList = null;
                    } else {
                        arrayList = new ArrayList();
                    }
                    this.f7841l = arrayList;
                }
                JSONObject optJSONObject = this.f7831b.optJSONObject("oneTimePurchaseOfferDetails");
                JSONArray optJSONArray2 = this.f7831b.optJSONArray("oneTimePurchaseOfferDetailsList");
                ArrayList arrayList3 = new ArrayList();
                if (optJSONArray2 != null) {
                    for (int i11 = 0; i11 < optJSONArray2.length(); i11++) {
                        arrayList3.add(new b(optJSONArray2.getJSONObject(i11)));
                    }
                    this.f7842m = arrayList3;
                    return;
                } else if (optJSONObject != null) {
                    arrayList3.add(new b(optJSONObject));
                    this.f7842m = arrayList3;
                    return;
                } else {
                    this.f7842m = null;
                    return;
                }
            }
            throw new IllegalArgumentException("Product type cannot be empty.");
        }
        throw new IllegalArgumentException("Product id cannot be empty.");
    }

    public String a() {
        return this.f7836g;
    }

    public String b() {
        return this.f7835f;
    }

    public b c() {
        List list = this.f7842m;
        if (list != null && !list.isEmpty()) {
            return (b) this.f7842m.get(0);
        }
        return null;
    }

    public String d() {
        return this.f7832c;
    }

    public String e() {
        return this.f7833d;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof ProductDetails)) {
            return false;
        }
        return TextUtils.equals(this.f7830a, ((ProductDetails) obj).f7830a);
    }

    public List f() {
        return this.f7841l;
    }

    public String g() {
        return this.f7834e;
    }

    public final String h() {
        return this.f7831b.optString("packageName");
    }

    public int hashCode() {
        return this.f7830a.hashCode();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final String i() {
        return this.f7837h;
    }

    public String j() {
        return this.f7840k;
    }

    public String toString() {
        List list = this.f7841l;
        String obj = this.f7831b.toString();
        String valueOf = String.valueOf(list);
        return "ProductDetails{jsonString='" + this.f7830a + "', parsedJson=" + obj + ", productId='" + this.f7832c + "', productType='" + this.f7833d + "', title='" + this.f7834e + "', productDetailsToken='" + this.f7837h + "', subscriptionOfferDetails=" + valueOf + "}";
    }
}
