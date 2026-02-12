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
    private final String f8548a;

    /* renamed from: b  reason: collision with root package name */
    private final JSONObject f8549b;

    /* renamed from: c  reason: collision with root package name */
    private final String f8550c;

    /* renamed from: d  reason: collision with root package name */
    private final String f8551d;

    /* renamed from: e  reason: collision with root package name */
    private final String f8552e;

    /* renamed from: f  reason: collision with root package name */
    private final String f8553f;

    /* renamed from: g  reason: collision with root package name */
    private final String f8554g;

    /* renamed from: h  reason: collision with root package name */
    private final String f8555h;

    /* renamed from: i  reason: collision with root package name */
    private final String f8556i;

    /* renamed from: j  reason: collision with root package name */
    private final String f8557j;

    /* renamed from: k  reason: collision with root package name */
    private final String f8558k;

    /* renamed from: l  reason: collision with root package name */
    private final List f8559l;

    /* renamed from: m  reason: collision with root package name */
    private final List f8560m;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class PricingPhase {

        /* renamed from: a  reason: collision with root package name */
        private final String f8561a;

        /* renamed from: b  reason: collision with root package name */
        private final long f8562b;

        /* renamed from: c  reason: collision with root package name */
        private final String f8563c;

        /* renamed from: d  reason: collision with root package name */
        private final String f8564d;

        /* renamed from: e  reason: collision with root package name */
        private final int f8565e;

        /* renamed from: f  reason: collision with root package name */
        private final int f8566f;

        /* JADX INFO: Access modifiers changed from: package-private */
        public PricingPhase(JSONObject jSONObject) {
            this.f8564d = jSONObject.optString("billingPeriod");
            this.f8563c = jSONObject.optString("priceCurrencyCode");
            this.f8561a = jSONObject.optString("formattedPrice");
            this.f8562b = jSONObject.optLong("priceAmountMicros");
            this.f8566f = jSONObject.optInt("recurrenceMode");
            this.f8565e = jSONObject.optInt("billingCycleCount");
        }

        public int a() {
            return this.f8565e;
        }

        public String b() {
            return this.f8564d;
        }

        public String c() {
            return this.f8561a;
        }

        public long d() {
            return this.f8562b;
        }

        public String e() {
            return this.f8563c;
        }

        public int f() {
            return this.f8566f;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        private final int f8567a;

        /* renamed from: b  reason: collision with root package name */
        private final int f8568b;

        a(JSONObject jSONObject) {
            this.f8567a = jSONObject.getInt("commitmentPaymentsCount");
            this.f8568b = jSONObject.optInt("subsequentCommitmentPaymentsCount");
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class b {

        /* renamed from: a  reason: collision with root package name */
        private final String f8569a;

        /* renamed from: b  reason: collision with root package name */
        private final long f8570b;

        /* renamed from: c  reason: collision with root package name */
        private final String f8571c;

        /* renamed from: d  reason: collision with root package name */
        private final String f8572d;

        /* renamed from: e  reason: collision with root package name */
        private final String f8573e;

        /* renamed from: f  reason: collision with root package name */
        private final String f8574f;

        /* renamed from: g  reason: collision with root package name */
        private final com.google.android.gms.internal.play_billing.j f8575g;

        /* renamed from: h  reason: collision with root package name */
        private final Long f8576h;

        /* renamed from: i  reason: collision with root package name */
        private final x f8577i;

        /* renamed from: j  reason: collision with root package name */
        private final b0 f8578j;

        /* renamed from: k  reason: collision with root package name */
        private final y f8579k;

        /* renamed from: l  reason: collision with root package name */
        private final z f8580l;

        /* renamed from: m  reason: collision with root package name */
        private final a0 f8581m;

        b(JSONObject jSONObject) {
            Long l10;
            x xVar;
            b0 b0Var;
            y yVar;
            z zVar;
            this.f8569a = jSONObject.optString("formattedPrice");
            this.f8570b = jSONObject.optLong("priceAmountMicros");
            this.f8571c = jSONObject.optString("priceCurrencyCode");
            String optString = jSONObject.optString("offerIdToken");
            this.f8572d = true == optString.isEmpty() ? null : optString;
            String optString2 = jSONObject.optString("offerId");
            this.f8573e = true == optString2.isEmpty() ? null : optString2;
            String optString3 = jSONObject.optString("purchaseOptionId");
            this.f8574f = true == optString3.isEmpty() ? null : optString3;
            jSONObject.optInt("offerType");
            JSONArray optJSONArray = jSONObject.optJSONArray("offerTags");
            ArrayList arrayList = new ArrayList();
            if (optJSONArray != null) {
                for (int i10 = 0; i10 < optJSONArray.length(); i10++) {
                    arrayList.add(optJSONArray.getString(i10));
                }
            }
            this.f8575g = com.google.android.gms.internal.play_billing.j.k(arrayList);
            if (jSONObject.has("fullPriceMicros")) {
                l10 = Long.valueOf(jSONObject.optLong("fullPriceMicros"));
            } else {
                l10 = null;
            }
            this.f8576h = l10;
            JSONObject optJSONObject = jSONObject.optJSONObject("discountDisplayInfo");
            if (optJSONObject == null) {
                xVar = null;
            } else {
                xVar = new x(optJSONObject);
            }
            this.f8577i = xVar;
            JSONObject optJSONObject2 = jSONObject.optJSONObject("validTimeWindow");
            if (optJSONObject2 == null) {
                b0Var = null;
            } else {
                b0Var = new b0(optJSONObject2);
            }
            this.f8578j = b0Var;
            JSONObject optJSONObject3 = jSONObject.optJSONObject("limitedQuantityInfo");
            if (optJSONObject3 == null) {
                yVar = null;
            } else {
                yVar = new y(optJSONObject3);
            }
            this.f8579k = yVar;
            JSONObject optJSONObject4 = jSONObject.optJSONObject("preorderDetails");
            if (optJSONObject4 == null) {
                zVar = null;
            } else {
                zVar = new z(optJSONObject4);
            }
            this.f8580l = zVar;
            JSONObject optJSONObject5 = jSONObject.optJSONObject("rentalDetails");
            this.f8581m = optJSONObject5 != null ? new a0(optJSONObject5) : null;
        }

        public String a() {
            return this.f8569a;
        }

        public long b() {
            return this.f8570b;
        }

        public String c() {
            return this.f8571c;
        }

        public final String d() {
            return this.f8572d;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class c {

        /* renamed from: a  reason: collision with root package name */
        private final List f8582a;

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
            this.f8582a = arrayList;
        }

        public List a() {
            return this.f8582a;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class d {

        /* renamed from: a  reason: collision with root package name */
        private final String f8583a;

        /* renamed from: b  reason: collision with root package name */
        private final String f8584b;

        /* renamed from: c  reason: collision with root package name */
        private final String f8585c;

        /* renamed from: d  reason: collision with root package name */
        private final c f8586d;

        /* renamed from: e  reason: collision with root package name */
        private final List f8587e;

        /* renamed from: f  reason: collision with root package name */
        private final a f8588f;

        /* renamed from: g  reason: collision with root package name */
        private final c0 f8589g;

        d(JSONObject jSONObject) {
            a aVar;
            this.f8583a = jSONObject.optString("basePlanId");
            String optString = jSONObject.optString("offerId");
            this.f8584b = true == optString.isEmpty() ? null : optString;
            this.f8585c = jSONObject.getString("offerIdToken");
            this.f8586d = new c(jSONObject.getJSONArray("pricingPhases"));
            JSONObject optJSONObject = jSONObject.optJSONObject("installmentPlanDetails");
            if (optJSONObject == null) {
                aVar = null;
            } else {
                aVar = new a(optJSONObject);
            }
            this.f8588f = aVar;
            JSONObject optJSONObject2 = jSONObject.optJSONObject("transitionPlanDetails");
            this.f8589g = optJSONObject2 != null ? new c0(optJSONObject2) : null;
            ArrayList arrayList = new ArrayList();
            JSONArray optJSONArray = jSONObject.optJSONArray("offerTags");
            if (optJSONArray != null) {
                for (int i10 = 0; i10 < optJSONArray.length(); i10++) {
                    arrayList.add(optJSONArray.getString(i10));
                }
            }
            this.f8587e = arrayList;
        }

        public String a() {
            return this.f8583a;
        }

        public String b() {
            return this.f8584b;
        }

        public List c() {
            return this.f8587e;
        }

        public String d() {
            return this.f8585c;
        }

        public c e() {
            return this.f8586d;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public ProductDetails(String str) {
        ArrayList arrayList;
        this.f8548a = str;
        JSONObject jSONObject = new JSONObject(str);
        this.f8549b = jSONObject;
        String optString = jSONObject.optString("productId");
        this.f8550c = optString;
        String optString2 = jSONObject.optString("type");
        this.f8551d = optString2;
        if (!TextUtils.isEmpty(optString)) {
            if (!TextUtils.isEmpty(optString2)) {
                this.f8552e = jSONObject.optString("title");
                this.f8553f = jSONObject.optString(StackTraceHelper.NAME_KEY);
                this.f8554g = jSONObject.optString("description");
                this.f8556i = jSONObject.optString("packageDisplayName");
                this.f8557j = jSONObject.optString("iconUrl");
                this.f8555h = jSONObject.optString("skuDetailsToken");
                this.f8558k = jSONObject.optString("serializedDocid");
                JSONArray optJSONArray = jSONObject.optJSONArray("subscriptionOfferDetails");
                if (optJSONArray != null) {
                    ArrayList arrayList2 = new ArrayList();
                    for (int i10 = 0; i10 < optJSONArray.length(); i10++) {
                        arrayList2.add(new d(optJSONArray.getJSONObject(i10)));
                    }
                    this.f8559l = arrayList2;
                } else {
                    if (!optString2.equals("subs") && !optString2.equals("play_pass_subs")) {
                        arrayList = null;
                    } else {
                        arrayList = new ArrayList();
                    }
                    this.f8559l = arrayList;
                }
                JSONObject optJSONObject = this.f8549b.optJSONObject("oneTimePurchaseOfferDetails");
                JSONArray optJSONArray2 = this.f8549b.optJSONArray("oneTimePurchaseOfferDetailsList");
                ArrayList arrayList3 = new ArrayList();
                if (optJSONArray2 != null) {
                    for (int i11 = 0; i11 < optJSONArray2.length(); i11++) {
                        arrayList3.add(new b(optJSONArray2.getJSONObject(i11)));
                    }
                    this.f8560m = arrayList3;
                    return;
                } else if (optJSONObject != null) {
                    arrayList3.add(new b(optJSONObject));
                    this.f8560m = arrayList3;
                    return;
                } else {
                    this.f8560m = null;
                    return;
                }
            }
            throw new IllegalArgumentException("Product type cannot be empty.");
        }
        throw new IllegalArgumentException("Product id cannot be empty.");
    }

    public String a() {
        return this.f8554g;
    }

    public String b() {
        return this.f8553f;
    }

    public b c() {
        List list = this.f8560m;
        if (list != null && !list.isEmpty()) {
            return (b) this.f8560m.get(0);
        }
        return null;
    }

    public String d() {
        return this.f8550c;
    }

    public String e() {
        return this.f8551d;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof ProductDetails)) {
            return false;
        }
        return TextUtils.equals(this.f8548a, ((ProductDetails) obj).f8548a);
    }

    public List f() {
        return this.f8559l;
    }

    public String g() {
        return this.f8552e;
    }

    public final String h() {
        return this.f8549b.optString("packageName");
    }

    public int hashCode() {
        return this.f8548a.hashCode();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final String i() {
        return this.f8555h;
    }

    public String j() {
        return this.f8558k;
    }

    public String toString() {
        List list = this.f8559l;
        String obj = this.f8549b.toString();
        String valueOf = String.valueOf(list);
        return "ProductDetails{jsonString='" + this.f8548a + "', parsedJson=" + obj + ", productId='" + this.f8550c + "', productType='" + this.f8551d + "', title='" + this.f8552e + "', productDetailsToken='" + this.f8555h + "', subscriptionOfferDetails=" + valueOf + "}";
    }
}
