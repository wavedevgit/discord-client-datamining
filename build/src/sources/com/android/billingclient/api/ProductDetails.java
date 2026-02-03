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
    private final String f8578a;

    /* renamed from: b  reason: collision with root package name */
    private final JSONObject f8579b;

    /* renamed from: c  reason: collision with root package name */
    private final String f8580c;

    /* renamed from: d  reason: collision with root package name */
    private final String f8581d;

    /* renamed from: e  reason: collision with root package name */
    private final String f8582e;

    /* renamed from: f  reason: collision with root package name */
    private final String f8583f;

    /* renamed from: g  reason: collision with root package name */
    private final String f8584g;

    /* renamed from: h  reason: collision with root package name */
    private final String f8585h;

    /* renamed from: i  reason: collision with root package name */
    private final String f8586i;

    /* renamed from: j  reason: collision with root package name */
    private final String f8587j;

    /* renamed from: k  reason: collision with root package name */
    private final String f8588k;

    /* renamed from: l  reason: collision with root package name */
    private final List f8589l;

    /* renamed from: m  reason: collision with root package name */
    private final List f8590m;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class PricingPhase {

        /* renamed from: a  reason: collision with root package name */
        private final String f8591a;

        /* renamed from: b  reason: collision with root package name */
        private final long f8592b;

        /* renamed from: c  reason: collision with root package name */
        private final String f8593c;

        /* renamed from: d  reason: collision with root package name */
        private final String f8594d;

        /* renamed from: e  reason: collision with root package name */
        private final int f8595e;

        /* renamed from: f  reason: collision with root package name */
        private final int f8596f;

        /* JADX INFO: Access modifiers changed from: package-private */
        public PricingPhase(JSONObject jSONObject) {
            this.f8594d = jSONObject.optString("billingPeriod");
            this.f8593c = jSONObject.optString("priceCurrencyCode");
            this.f8591a = jSONObject.optString("formattedPrice");
            this.f8592b = jSONObject.optLong("priceAmountMicros");
            this.f8596f = jSONObject.optInt("recurrenceMode");
            this.f8595e = jSONObject.optInt("billingCycleCount");
        }

        public int a() {
            return this.f8595e;
        }

        public String b() {
            return this.f8594d;
        }

        public String c() {
            return this.f8591a;
        }

        public long d() {
            return this.f8592b;
        }

        public String e() {
            return this.f8593c;
        }

        public int f() {
            return this.f8596f;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        private final int f8597a;

        /* renamed from: b  reason: collision with root package name */
        private final int f8598b;

        a(JSONObject jSONObject) {
            this.f8597a = jSONObject.getInt("commitmentPaymentsCount");
            this.f8598b = jSONObject.optInt("subsequentCommitmentPaymentsCount");
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class b {

        /* renamed from: a  reason: collision with root package name */
        private final String f8599a;

        /* renamed from: b  reason: collision with root package name */
        private final long f8600b;

        /* renamed from: c  reason: collision with root package name */
        private final String f8601c;

        /* renamed from: d  reason: collision with root package name */
        private final String f8602d;

        /* renamed from: e  reason: collision with root package name */
        private final String f8603e;

        /* renamed from: f  reason: collision with root package name */
        private final String f8604f;

        /* renamed from: g  reason: collision with root package name */
        private final com.google.android.gms.internal.play_billing.j f8605g;

        /* renamed from: h  reason: collision with root package name */
        private final Long f8606h;

        /* renamed from: i  reason: collision with root package name */
        private final x f8607i;

        /* renamed from: j  reason: collision with root package name */
        private final b0 f8608j;

        /* renamed from: k  reason: collision with root package name */
        private final y f8609k;

        /* renamed from: l  reason: collision with root package name */
        private final z f8610l;

        /* renamed from: m  reason: collision with root package name */
        private final a0 f8611m;

        b(JSONObject jSONObject) {
            Long l10;
            x xVar;
            b0 b0Var;
            y yVar;
            z zVar;
            this.f8599a = jSONObject.optString("formattedPrice");
            this.f8600b = jSONObject.optLong("priceAmountMicros");
            this.f8601c = jSONObject.optString("priceCurrencyCode");
            String optString = jSONObject.optString("offerIdToken");
            this.f8602d = true == optString.isEmpty() ? null : optString;
            String optString2 = jSONObject.optString("offerId");
            this.f8603e = true == optString2.isEmpty() ? null : optString2;
            String optString3 = jSONObject.optString("purchaseOptionId");
            this.f8604f = true == optString3.isEmpty() ? null : optString3;
            jSONObject.optInt("offerType");
            JSONArray optJSONArray = jSONObject.optJSONArray("offerTags");
            ArrayList arrayList = new ArrayList();
            if (optJSONArray != null) {
                for (int i10 = 0; i10 < optJSONArray.length(); i10++) {
                    arrayList.add(optJSONArray.getString(i10));
                }
            }
            this.f8605g = com.google.android.gms.internal.play_billing.j.j(arrayList);
            if (jSONObject.has("fullPriceMicros")) {
                l10 = Long.valueOf(jSONObject.optLong("fullPriceMicros"));
            } else {
                l10 = null;
            }
            this.f8606h = l10;
            JSONObject optJSONObject = jSONObject.optJSONObject("discountDisplayInfo");
            if (optJSONObject == null) {
                xVar = null;
            } else {
                xVar = new x(optJSONObject);
            }
            this.f8607i = xVar;
            JSONObject optJSONObject2 = jSONObject.optJSONObject("validTimeWindow");
            if (optJSONObject2 == null) {
                b0Var = null;
            } else {
                b0Var = new b0(optJSONObject2);
            }
            this.f8608j = b0Var;
            JSONObject optJSONObject3 = jSONObject.optJSONObject("limitedQuantityInfo");
            if (optJSONObject3 == null) {
                yVar = null;
            } else {
                yVar = new y(optJSONObject3);
            }
            this.f8609k = yVar;
            JSONObject optJSONObject4 = jSONObject.optJSONObject("preorderDetails");
            if (optJSONObject4 == null) {
                zVar = null;
            } else {
                zVar = new z(optJSONObject4);
            }
            this.f8610l = zVar;
            JSONObject optJSONObject5 = jSONObject.optJSONObject("rentalDetails");
            this.f8611m = optJSONObject5 != null ? new a0(optJSONObject5) : null;
        }

        public String a() {
            return this.f8599a;
        }

        public long b() {
            return this.f8600b;
        }

        public String c() {
            return this.f8601c;
        }

        public final String d() {
            return this.f8602d;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class c {

        /* renamed from: a  reason: collision with root package name */
        private final List f8612a;

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
            this.f8612a = arrayList;
        }

        public List a() {
            return this.f8612a;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class d {

        /* renamed from: a  reason: collision with root package name */
        private final String f8613a;

        /* renamed from: b  reason: collision with root package name */
        private final String f8614b;

        /* renamed from: c  reason: collision with root package name */
        private final String f8615c;

        /* renamed from: d  reason: collision with root package name */
        private final c f8616d;

        /* renamed from: e  reason: collision with root package name */
        private final List f8617e;

        /* renamed from: f  reason: collision with root package name */
        private final a f8618f;

        /* renamed from: g  reason: collision with root package name */
        private final c0 f8619g;

        d(JSONObject jSONObject) {
            a aVar;
            this.f8613a = jSONObject.optString("basePlanId");
            String optString = jSONObject.optString("offerId");
            this.f8614b = true == optString.isEmpty() ? null : optString;
            this.f8615c = jSONObject.getString("offerIdToken");
            this.f8616d = new c(jSONObject.getJSONArray("pricingPhases"));
            JSONObject optJSONObject = jSONObject.optJSONObject("installmentPlanDetails");
            if (optJSONObject == null) {
                aVar = null;
            } else {
                aVar = new a(optJSONObject);
            }
            this.f8618f = aVar;
            JSONObject optJSONObject2 = jSONObject.optJSONObject("transitionPlanDetails");
            this.f8619g = optJSONObject2 != null ? new c0(optJSONObject2) : null;
            ArrayList arrayList = new ArrayList();
            JSONArray optJSONArray = jSONObject.optJSONArray("offerTags");
            if (optJSONArray != null) {
                for (int i10 = 0; i10 < optJSONArray.length(); i10++) {
                    arrayList.add(optJSONArray.getString(i10));
                }
            }
            this.f8617e = arrayList;
        }

        public String a() {
            return this.f8613a;
        }

        public String b() {
            return this.f8614b;
        }

        public List c() {
            return this.f8617e;
        }

        public String d() {
            return this.f8615c;
        }

        public c e() {
            return this.f8616d;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public ProductDetails(String str) {
        ArrayList arrayList;
        this.f8578a = str;
        JSONObject jSONObject = new JSONObject(str);
        this.f8579b = jSONObject;
        String optString = jSONObject.optString("productId");
        this.f8580c = optString;
        String optString2 = jSONObject.optString("type");
        this.f8581d = optString2;
        if (!TextUtils.isEmpty(optString)) {
            if (!TextUtils.isEmpty(optString2)) {
                this.f8582e = jSONObject.optString("title");
                this.f8583f = jSONObject.optString(StackTraceHelper.NAME_KEY);
                this.f8584g = jSONObject.optString("description");
                this.f8586i = jSONObject.optString("packageDisplayName");
                this.f8587j = jSONObject.optString("iconUrl");
                this.f8585h = jSONObject.optString("skuDetailsToken");
                this.f8588k = jSONObject.optString("serializedDocid");
                JSONArray optJSONArray = jSONObject.optJSONArray("subscriptionOfferDetails");
                if (optJSONArray != null) {
                    ArrayList arrayList2 = new ArrayList();
                    for (int i10 = 0; i10 < optJSONArray.length(); i10++) {
                        arrayList2.add(new d(optJSONArray.getJSONObject(i10)));
                    }
                    this.f8589l = arrayList2;
                } else {
                    if (!optString2.equals("subs") && !optString2.equals("play_pass_subs")) {
                        arrayList = null;
                    } else {
                        arrayList = new ArrayList();
                    }
                    this.f8589l = arrayList;
                }
                JSONObject optJSONObject = this.f8579b.optJSONObject("oneTimePurchaseOfferDetails");
                JSONArray optJSONArray2 = this.f8579b.optJSONArray("oneTimePurchaseOfferDetailsList");
                ArrayList arrayList3 = new ArrayList();
                if (optJSONArray2 != null) {
                    for (int i11 = 0; i11 < optJSONArray2.length(); i11++) {
                        arrayList3.add(new b(optJSONArray2.getJSONObject(i11)));
                    }
                    this.f8590m = arrayList3;
                    return;
                } else if (optJSONObject != null) {
                    arrayList3.add(new b(optJSONObject));
                    this.f8590m = arrayList3;
                    return;
                } else {
                    this.f8590m = null;
                    return;
                }
            }
            throw new IllegalArgumentException("Product type cannot be empty.");
        }
        throw new IllegalArgumentException("Product id cannot be empty.");
    }

    public String a() {
        return this.f8584g;
    }

    public String b() {
        return this.f8583f;
    }

    public b c() {
        List list = this.f8590m;
        if (list != null && !list.isEmpty()) {
            return (b) this.f8590m.get(0);
        }
        return null;
    }

    public String d() {
        return this.f8580c;
    }

    public String e() {
        return this.f8581d;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof ProductDetails)) {
            return false;
        }
        return TextUtils.equals(this.f8578a, ((ProductDetails) obj).f8578a);
    }

    public List f() {
        return this.f8589l;
    }

    public String g() {
        return this.f8582e;
    }

    public final String h() {
        return this.f8579b.optString("packageName");
    }

    public int hashCode() {
        return this.f8578a.hashCode();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final String i() {
        return this.f8585h;
    }

    public String j() {
        return this.f8588k;
    }

    public String toString() {
        List list = this.f8589l;
        String obj = this.f8579b.toString();
        String valueOf = String.valueOf(list);
        return "ProductDetails{jsonString='" + this.f8578a + "', parsedJson=" + obj + ", productId='" + this.f8580c + "', productType='" + this.f8581d + "', title='" + this.f8582e + "', productDetailsToken='" + this.f8585h + "', subscriptionOfferDetails=" + valueOf + "}";
    }
}
