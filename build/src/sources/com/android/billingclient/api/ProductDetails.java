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
    private final String f7931a;

    /* renamed from: b  reason: collision with root package name */
    private final JSONObject f7932b;

    /* renamed from: c  reason: collision with root package name */
    private final String f7933c;

    /* renamed from: d  reason: collision with root package name */
    private final String f7934d;

    /* renamed from: e  reason: collision with root package name */
    private final String f7935e;

    /* renamed from: f  reason: collision with root package name */
    private final String f7936f;

    /* renamed from: g  reason: collision with root package name */
    private final String f7937g;

    /* renamed from: h  reason: collision with root package name */
    private final String f7938h;

    /* renamed from: i  reason: collision with root package name */
    private final String f7939i;

    /* renamed from: j  reason: collision with root package name */
    private final String f7940j;

    /* renamed from: k  reason: collision with root package name */
    private final String f7941k;

    /* renamed from: l  reason: collision with root package name */
    private final List f7942l;

    /* renamed from: m  reason: collision with root package name */
    private final List f7943m;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class PricingPhase {

        /* renamed from: a  reason: collision with root package name */
        private final String f7944a;

        /* renamed from: b  reason: collision with root package name */
        private final long f7945b;

        /* renamed from: c  reason: collision with root package name */
        private final String f7946c;

        /* renamed from: d  reason: collision with root package name */
        private final String f7947d;

        /* renamed from: e  reason: collision with root package name */
        private final int f7948e;

        /* renamed from: f  reason: collision with root package name */
        private final int f7949f;

        /* JADX INFO: Access modifiers changed from: package-private */
        public PricingPhase(JSONObject jSONObject) {
            this.f7947d = jSONObject.optString("billingPeriod");
            this.f7946c = jSONObject.optString("priceCurrencyCode");
            this.f7944a = jSONObject.optString("formattedPrice");
            this.f7945b = jSONObject.optLong("priceAmountMicros");
            this.f7949f = jSONObject.optInt("recurrenceMode");
            this.f7948e = jSONObject.optInt("billingCycleCount");
        }

        public int a() {
            return this.f7948e;
        }

        public String b() {
            return this.f7947d;
        }

        public String c() {
            return this.f7944a;
        }

        public long d() {
            return this.f7945b;
        }

        public String e() {
            return this.f7946c;
        }

        public int f() {
            return this.f7949f;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        private final int f7950a;

        /* renamed from: b  reason: collision with root package name */
        private final int f7951b;

        a(JSONObject jSONObject) {
            this.f7950a = jSONObject.getInt("commitmentPaymentsCount");
            this.f7951b = jSONObject.optInt("subsequentCommitmentPaymentsCount");
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class b {

        /* renamed from: a  reason: collision with root package name */
        private final String f7952a;

        /* renamed from: b  reason: collision with root package name */
        private final long f7953b;

        /* renamed from: c  reason: collision with root package name */
        private final String f7954c;

        /* renamed from: d  reason: collision with root package name */
        private final String f7955d;

        /* renamed from: e  reason: collision with root package name */
        private final String f7956e;

        /* renamed from: f  reason: collision with root package name */
        private final String f7957f;

        /* renamed from: g  reason: collision with root package name */
        private final com.google.android.gms.internal.play_billing.j f7958g;

        /* renamed from: h  reason: collision with root package name */
        private final Long f7959h;

        /* renamed from: i  reason: collision with root package name */
        private final x f7960i;

        /* renamed from: j  reason: collision with root package name */
        private final b0 f7961j;

        /* renamed from: k  reason: collision with root package name */
        private final y f7962k;

        /* renamed from: l  reason: collision with root package name */
        private final z f7963l;

        /* renamed from: m  reason: collision with root package name */
        private final a0 f7964m;

        b(JSONObject jSONObject) {
            Long l10;
            x xVar;
            b0 b0Var;
            y yVar;
            z zVar;
            this.f7952a = jSONObject.optString("formattedPrice");
            this.f7953b = jSONObject.optLong("priceAmountMicros");
            this.f7954c = jSONObject.optString("priceCurrencyCode");
            String optString = jSONObject.optString("offerIdToken");
            this.f7955d = true == optString.isEmpty() ? null : optString;
            String optString2 = jSONObject.optString("offerId");
            this.f7956e = true == optString2.isEmpty() ? null : optString2;
            String optString3 = jSONObject.optString("purchaseOptionId");
            this.f7957f = true == optString3.isEmpty() ? null : optString3;
            jSONObject.optInt("offerType");
            JSONArray optJSONArray = jSONObject.optJSONArray("offerTags");
            ArrayList arrayList = new ArrayList();
            if (optJSONArray != null) {
                for (int i10 = 0; i10 < optJSONArray.length(); i10++) {
                    arrayList.add(optJSONArray.getString(i10));
                }
            }
            this.f7958g = com.google.android.gms.internal.play_billing.j.j(arrayList);
            if (jSONObject.has("fullPriceMicros")) {
                l10 = Long.valueOf(jSONObject.optLong("fullPriceMicros"));
            } else {
                l10 = null;
            }
            this.f7959h = l10;
            JSONObject optJSONObject = jSONObject.optJSONObject("discountDisplayInfo");
            if (optJSONObject == null) {
                xVar = null;
            } else {
                xVar = new x(optJSONObject);
            }
            this.f7960i = xVar;
            JSONObject optJSONObject2 = jSONObject.optJSONObject("validTimeWindow");
            if (optJSONObject2 == null) {
                b0Var = null;
            } else {
                b0Var = new b0(optJSONObject2);
            }
            this.f7961j = b0Var;
            JSONObject optJSONObject3 = jSONObject.optJSONObject("limitedQuantityInfo");
            if (optJSONObject3 == null) {
                yVar = null;
            } else {
                yVar = new y(optJSONObject3);
            }
            this.f7962k = yVar;
            JSONObject optJSONObject4 = jSONObject.optJSONObject("preorderDetails");
            if (optJSONObject4 == null) {
                zVar = null;
            } else {
                zVar = new z(optJSONObject4);
            }
            this.f7963l = zVar;
            JSONObject optJSONObject5 = jSONObject.optJSONObject("rentalDetails");
            this.f7964m = optJSONObject5 != null ? new a0(optJSONObject5) : null;
        }

        public String a() {
            return this.f7952a;
        }

        public long b() {
            return this.f7953b;
        }

        public String c() {
            return this.f7954c;
        }

        public final String d() {
            return this.f7955d;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class c {

        /* renamed from: a  reason: collision with root package name */
        private final List f7965a;

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
            this.f7965a = arrayList;
        }

        public List a() {
            return this.f7965a;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class d {

        /* renamed from: a  reason: collision with root package name */
        private final String f7966a;

        /* renamed from: b  reason: collision with root package name */
        private final String f7967b;

        /* renamed from: c  reason: collision with root package name */
        private final String f7968c;

        /* renamed from: d  reason: collision with root package name */
        private final c f7969d;

        /* renamed from: e  reason: collision with root package name */
        private final List f7970e;

        /* renamed from: f  reason: collision with root package name */
        private final a f7971f;

        /* renamed from: g  reason: collision with root package name */
        private final c0 f7972g;

        d(JSONObject jSONObject) {
            a aVar;
            this.f7966a = jSONObject.optString("basePlanId");
            String optString = jSONObject.optString("offerId");
            this.f7967b = true == optString.isEmpty() ? null : optString;
            this.f7968c = jSONObject.getString("offerIdToken");
            this.f7969d = new c(jSONObject.getJSONArray("pricingPhases"));
            JSONObject optJSONObject = jSONObject.optJSONObject("installmentPlanDetails");
            if (optJSONObject == null) {
                aVar = null;
            } else {
                aVar = new a(optJSONObject);
            }
            this.f7971f = aVar;
            JSONObject optJSONObject2 = jSONObject.optJSONObject("transitionPlanDetails");
            this.f7972g = optJSONObject2 != null ? new c0(optJSONObject2) : null;
            ArrayList arrayList = new ArrayList();
            JSONArray optJSONArray = jSONObject.optJSONArray("offerTags");
            if (optJSONArray != null) {
                for (int i10 = 0; i10 < optJSONArray.length(); i10++) {
                    arrayList.add(optJSONArray.getString(i10));
                }
            }
            this.f7970e = arrayList;
        }

        public String a() {
            return this.f7966a;
        }

        public String b() {
            return this.f7967b;
        }

        public List c() {
            return this.f7970e;
        }

        public String d() {
            return this.f7968c;
        }

        public c e() {
            return this.f7969d;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public ProductDetails(String str) {
        ArrayList arrayList;
        this.f7931a = str;
        JSONObject jSONObject = new JSONObject(str);
        this.f7932b = jSONObject;
        String optString = jSONObject.optString("productId");
        this.f7933c = optString;
        String optString2 = jSONObject.optString("type");
        this.f7934d = optString2;
        if (!TextUtils.isEmpty(optString)) {
            if (!TextUtils.isEmpty(optString2)) {
                this.f7935e = jSONObject.optString("title");
                this.f7936f = jSONObject.optString(StackTraceHelper.NAME_KEY);
                this.f7937g = jSONObject.optString("description");
                this.f7939i = jSONObject.optString("packageDisplayName");
                this.f7940j = jSONObject.optString("iconUrl");
                this.f7938h = jSONObject.optString("skuDetailsToken");
                this.f7941k = jSONObject.optString("serializedDocid");
                JSONArray optJSONArray = jSONObject.optJSONArray("subscriptionOfferDetails");
                if (optJSONArray != null) {
                    ArrayList arrayList2 = new ArrayList();
                    for (int i10 = 0; i10 < optJSONArray.length(); i10++) {
                        arrayList2.add(new d(optJSONArray.getJSONObject(i10)));
                    }
                    this.f7942l = arrayList2;
                } else {
                    if (!optString2.equals("subs") && !optString2.equals("play_pass_subs")) {
                        arrayList = null;
                    } else {
                        arrayList = new ArrayList();
                    }
                    this.f7942l = arrayList;
                }
                JSONObject optJSONObject = this.f7932b.optJSONObject("oneTimePurchaseOfferDetails");
                JSONArray optJSONArray2 = this.f7932b.optJSONArray("oneTimePurchaseOfferDetailsList");
                ArrayList arrayList3 = new ArrayList();
                if (optJSONArray2 != null) {
                    for (int i11 = 0; i11 < optJSONArray2.length(); i11++) {
                        arrayList3.add(new b(optJSONArray2.getJSONObject(i11)));
                    }
                    this.f7943m = arrayList3;
                    return;
                } else if (optJSONObject != null) {
                    arrayList3.add(new b(optJSONObject));
                    this.f7943m = arrayList3;
                    return;
                } else {
                    this.f7943m = null;
                    return;
                }
            }
            throw new IllegalArgumentException("Product type cannot be empty.");
        }
        throw new IllegalArgumentException("Product id cannot be empty.");
    }

    public String a() {
        return this.f7937g;
    }

    public String b() {
        return this.f7936f;
    }

    public b c() {
        List list = this.f7943m;
        if (list != null && !list.isEmpty()) {
            return (b) this.f7943m.get(0);
        }
        return null;
    }

    public String d() {
        return this.f7933c;
    }

    public String e() {
        return this.f7934d;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof ProductDetails)) {
            return false;
        }
        return TextUtils.equals(this.f7931a, ((ProductDetails) obj).f7931a);
    }

    public List f() {
        return this.f7942l;
    }

    public String g() {
        return this.f7935e;
    }

    public final String h() {
        return this.f7932b.optString("packageName");
    }

    public int hashCode() {
        return this.f7931a.hashCode();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final String i() {
        return this.f7938h;
    }

    public String j() {
        return this.f7941k;
    }

    public String toString() {
        List list = this.f7942l;
        String obj = this.f7932b.toString();
        String valueOf = String.valueOf(list);
        return "ProductDetails{jsonString='" + this.f7931a + "', parsedJson=" + obj + ", productId='" + this.f7933c + "', productType='" + this.f7934d + "', title='" + this.f7935e + "', productDetailsToken='" + this.f7938h + "', subscriptionOfferDetails=" + valueOf + "}";
    }
}
