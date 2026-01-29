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
    private final String f8949a;

    /* renamed from: b  reason: collision with root package name */
    private final JSONObject f8950b;

    /* renamed from: c  reason: collision with root package name */
    private final String f8951c;

    /* renamed from: d  reason: collision with root package name */
    private final String f8952d;

    /* renamed from: e  reason: collision with root package name */
    private final String f8953e;

    /* renamed from: f  reason: collision with root package name */
    private final String f8954f;

    /* renamed from: g  reason: collision with root package name */
    private final String f8955g;

    /* renamed from: h  reason: collision with root package name */
    private final String f8956h;

    /* renamed from: i  reason: collision with root package name */
    private final String f8957i;

    /* renamed from: j  reason: collision with root package name */
    private final String f8958j;

    /* renamed from: k  reason: collision with root package name */
    private final String f8959k;

    /* renamed from: l  reason: collision with root package name */
    private final List f8960l;

    /* renamed from: m  reason: collision with root package name */
    private final List f8961m;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class PricingPhase {

        /* renamed from: a  reason: collision with root package name */
        private final String f8962a;

        /* renamed from: b  reason: collision with root package name */
        private final long f8963b;

        /* renamed from: c  reason: collision with root package name */
        private final String f8964c;

        /* renamed from: d  reason: collision with root package name */
        private final String f8965d;

        /* renamed from: e  reason: collision with root package name */
        private final int f8966e;

        /* renamed from: f  reason: collision with root package name */
        private final int f8967f;

        /* JADX INFO: Access modifiers changed from: package-private */
        public PricingPhase(JSONObject jSONObject) {
            this.f8965d = jSONObject.optString("billingPeriod");
            this.f8964c = jSONObject.optString("priceCurrencyCode");
            this.f8962a = jSONObject.optString("formattedPrice");
            this.f8963b = jSONObject.optLong("priceAmountMicros");
            this.f8967f = jSONObject.optInt("recurrenceMode");
            this.f8966e = jSONObject.optInt("billingCycleCount");
        }

        public int a() {
            return this.f8966e;
        }

        public String b() {
            return this.f8965d;
        }

        public String c() {
            return this.f8962a;
        }

        public long d() {
            return this.f8963b;
        }

        public String e() {
            return this.f8964c;
        }

        public int f() {
            return this.f8967f;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        private final int f8968a;

        /* renamed from: b  reason: collision with root package name */
        private final int f8969b;

        a(JSONObject jSONObject) {
            this.f8968a = jSONObject.getInt("commitmentPaymentsCount");
            this.f8969b = jSONObject.optInt("subsequentCommitmentPaymentsCount");
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class b {

        /* renamed from: a  reason: collision with root package name */
        private final String f8970a;

        /* renamed from: b  reason: collision with root package name */
        private final long f8971b;

        /* renamed from: c  reason: collision with root package name */
        private final String f8972c;

        /* renamed from: d  reason: collision with root package name */
        private final String f8973d;

        /* renamed from: e  reason: collision with root package name */
        private final String f8974e;

        /* renamed from: f  reason: collision with root package name */
        private final String f8975f;

        /* renamed from: g  reason: collision with root package name */
        private final com.google.android.gms.internal.play_billing.j f8976g;

        /* renamed from: h  reason: collision with root package name */
        private final Long f8977h;

        /* renamed from: i  reason: collision with root package name */
        private final x f8978i;

        /* renamed from: j  reason: collision with root package name */
        private final b0 f8979j;

        /* renamed from: k  reason: collision with root package name */
        private final y f8980k;

        /* renamed from: l  reason: collision with root package name */
        private final z f8981l;

        /* renamed from: m  reason: collision with root package name */
        private final a0 f8982m;

        b(JSONObject jSONObject) {
            Long l10;
            x xVar;
            b0 b0Var;
            y yVar;
            z zVar;
            this.f8970a = jSONObject.optString("formattedPrice");
            this.f8971b = jSONObject.optLong("priceAmountMicros");
            this.f8972c = jSONObject.optString("priceCurrencyCode");
            String optString = jSONObject.optString("offerIdToken");
            this.f8973d = true == optString.isEmpty() ? null : optString;
            String optString2 = jSONObject.optString("offerId");
            this.f8974e = true == optString2.isEmpty() ? null : optString2;
            String optString3 = jSONObject.optString("purchaseOptionId");
            this.f8975f = true == optString3.isEmpty() ? null : optString3;
            jSONObject.optInt("offerType");
            JSONArray optJSONArray = jSONObject.optJSONArray("offerTags");
            ArrayList arrayList = new ArrayList();
            if (optJSONArray != null) {
                for (int i10 = 0; i10 < optJSONArray.length(); i10++) {
                    arrayList.add(optJSONArray.getString(i10));
                }
            }
            this.f8976g = com.google.android.gms.internal.play_billing.j.j(arrayList);
            if (jSONObject.has("fullPriceMicros")) {
                l10 = Long.valueOf(jSONObject.optLong("fullPriceMicros"));
            } else {
                l10 = null;
            }
            this.f8977h = l10;
            JSONObject optJSONObject = jSONObject.optJSONObject("discountDisplayInfo");
            if (optJSONObject == null) {
                xVar = null;
            } else {
                xVar = new x(optJSONObject);
            }
            this.f8978i = xVar;
            JSONObject optJSONObject2 = jSONObject.optJSONObject("validTimeWindow");
            if (optJSONObject2 == null) {
                b0Var = null;
            } else {
                b0Var = new b0(optJSONObject2);
            }
            this.f8979j = b0Var;
            JSONObject optJSONObject3 = jSONObject.optJSONObject("limitedQuantityInfo");
            if (optJSONObject3 == null) {
                yVar = null;
            } else {
                yVar = new y(optJSONObject3);
            }
            this.f8980k = yVar;
            JSONObject optJSONObject4 = jSONObject.optJSONObject("preorderDetails");
            if (optJSONObject4 == null) {
                zVar = null;
            } else {
                zVar = new z(optJSONObject4);
            }
            this.f8981l = zVar;
            JSONObject optJSONObject5 = jSONObject.optJSONObject("rentalDetails");
            this.f8982m = optJSONObject5 != null ? new a0(optJSONObject5) : null;
        }

        public String a() {
            return this.f8970a;
        }

        public long b() {
            return this.f8971b;
        }

        public String c() {
            return this.f8972c;
        }

        public final String d() {
            return this.f8973d;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class c {

        /* renamed from: a  reason: collision with root package name */
        private final List f8983a;

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
            this.f8983a = arrayList;
        }

        public List a() {
            return this.f8983a;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class d {

        /* renamed from: a  reason: collision with root package name */
        private final String f8984a;

        /* renamed from: b  reason: collision with root package name */
        private final String f8985b;

        /* renamed from: c  reason: collision with root package name */
        private final String f8986c;

        /* renamed from: d  reason: collision with root package name */
        private final c f8987d;

        /* renamed from: e  reason: collision with root package name */
        private final List f8988e;

        /* renamed from: f  reason: collision with root package name */
        private final a f8989f;

        /* renamed from: g  reason: collision with root package name */
        private final c0 f8990g;

        d(JSONObject jSONObject) {
            a aVar;
            this.f8984a = jSONObject.optString("basePlanId");
            String optString = jSONObject.optString("offerId");
            this.f8985b = true == optString.isEmpty() ? null : optString;
            this.f8986c = jSONObject.getString("offerIdToken");
            this.f8987d = new c(jSONObject.getJSONArray("pricingPhases"));
            JSONObject optJSONObject = jSONObject.optJSONObject("installmentPlanDetails");
            if (optJSONObject == null) {
                aVar = null;
            } else {
                aVar = new a(optJSONObject);
            }
            this.f8989f = aVar;
            JSONObject optJSONObject2 = jSONObject.optJSONObject("transitionPlanDetails");
            this.f8990g = optJSONObject2 != null ? new c0(optJSONObject2) : null;
            ArrayList arrayList = new ArrayList();
            JSONArray optJSONArray = jSONObject.optJSONArray("offerTags");
            if (optJSONArray != null) {
                for (int i10 = 0; i10 < optJSONArray.length(); i10++) {
                    arrayList.add(optJSONArray.getString(i10));
                }
            }
            this.f8988e = arrayList;
        }

        public String a() {
            return this.f8984a;
        }

        public String b() {
            return this.f8985b;
        }

        public List c() {
            return this.f8988e;
        }

        public String d() {
            return this.f8986c;
        }

        public c e() {
            return this.f8987d;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public ProductDetails(String str) {
        ArrayList arrayList;
        this.f8949a = str;
        JSONObject jSONObject = new JSONObject(str);
        this.f8950b = jSONObject;
        String optString = jSONObject.optString("productId");
        this.f8951c = optString;
        String optString2 = jSONObject.optString("type");
        this.f8952d = optString2;
        if (!TextUtils.isEmpty(optString)) {
            if (!TextUtils.isEmpty(optString2)) {
                this.f8953e = jSONObject.optString("title");
                this.f8954f = jSONObject.optString(StackTraceHelper.NAME_KEY);
                this.f8955g = jSONObject.optString("description");
                this.f8957i = jSONObject.optString("packageDisplayName");
                this.f8958j = jSONObject.optString("iconUrl");
                this.f8956h = jSONObject.optString("skuDetailsToken");
                this.f8959k = jSONObject.optString("serializedDocid");
                JSONArray optJSONArray = jSONObject.optJSONArray("subscriptionOfferDetails");
                if (optJSONArray != null) {
                    ArrayList arrayList2 = new ArrayList();
                    for (int i10 = 0; i10 < optJSONArray.length(); i10++) {
                        arrayList2.add(new d(optJSONArray.getJSONObject(i10)));
                    }
                    this.f8960l = arrayList2;
                } else {
                    if (!optString2.equals("subs") && !optString2.equals("play_pass_subs")) {
                        arrayList = null;
                    } else {
                        arrayList = new ArrayList();
                    }
                    this.f8960l = arrayList;
                }
                JSONObject optJSONObject = this.f8950b.optJSONObject("oneTimePurchaseOfferDetails");
                JSONArray optJSONArray2 = this.f8950b.optJSONArray("oneTimePurchaseOfferDetailsList");
                ArrayList arrayList3 = new ArrayList();
                if (optJSONArray2 != null) {
                    for (int i11 = 0; i11 < optJSONArray2.length(); i11++) {
                        arrayList3.add(new b(optJSONArray2.getJSONObject(i11)));
                    }
                    this.f8961m = arrayList3;
                    return;
                } else if (optJSONObject != null) {
                    arrayList3.add(new b(optJSONObject));
                    this.f8961m = arrayList3;
                    return;
                } else {
                    this.f8961m = null;
                    return;
                }
            }
            throw new IllegalArgumentException("Product type cannot be empty.");
        }
        throw new IllegalArgumentException("Product id cannot be empty.");
    }

    public String a() {
        return this.f8955g;
    }

    public String b() {
        return this.f8954f;
    }

    public b c() {
        List list = this.f8961m;
        if (list != null && !list.isEmpty()) {
            return (b) this.f8961m.get(0);
        }
        return null;
    }

    public String d() {
        return this.f8951c;
    }

    public String e() {
        return this.f8952d;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof ProductDetails)) {
            return false;
        }
        return TextUtils.equals(this.f8949a, ((ProductDetails) obj).f8949a);
    }

    public List f() {
        return this.f8960l;
    }

    public String g() {
        return this.f8953e;
    }

    public final String h() {
        return this.f8950b.optString("packageName");
    }

    public int hashCode() {
        return this.f8949a.hashCode();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final String i() {
        return this.f8956h;
    }

    public String j() {
        return this.f8959k;
    }

    public String toString() {
        List list = this.f8960l;
        String obj = this.f8950b.toString();
        String valueOf = String.valueOf(list);
        return "ProductDetails{jsonString='" + this.f8949a + "', parsedJson=" + obj + ", productId='" + this.f8951c + "', productType='" + this.f8952d + "', title='" + this.f8953e + "', productDetailsToken='" + this.f8956h + "', subscriptionOfferDetails=" + valueOf + "}";
    }
}
