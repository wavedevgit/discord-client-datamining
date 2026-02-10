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
    private final String f8547a;

    /* renamed from: b  reason: collision with root package name */
    private final JSONObject f8548b;

    /* renamed from: c  reason: collision with root package name */
    private final String f8549c;

    /* renamed from: d  reason: collision with root package name */
    private final String f8550d;

    /* renamed from: e  reason: collision with root package name */
    private final String f8551e;

    /* renamed from: f  reason: collision with root package name */
    private final String f8552f;

    /* renamed from: g  reason: collision with root package name */
    private final String f8553g;

    /* renamed from: h  reason: collision with root package name */
    private final String f8554h;

    /* renamed from: i  reason: collision with root package name */
    private final String f8555i;

    /* renamed from: j  reason: collision with root package name */
    private final String f8556j;

    /* renamed from: k  reason: collision with root package name */
    private final String f8557k;

    /* renamed from: l  reason: collision with root package name */
    private final List f8558l;

    /* renamed from: m  reason: collision with root package name */
    private final List f8559m;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class PricingPhase {

        /* renamed from: a  reason: collision with root package name */
        private final String f8560a;

        /* renamed from: b  reason: collision with root package name */
        private final long f8561b;

        /* renamed from: c  reason: collision with root package name */
        private final String f8562c;

        /* renamed from: d  reason: collision with root package name */
        private final String f8563d;

        /* renamed from: e  reason: collision with root package name */
        private final int f8564e;

        /* renamed from: f  reason: collision with root package name */
        private final int f8565f;

        /* JADX INFO: Access modifiers changed from: package-private */
        public PricingPhase(JSONObject jSONObject) {
            this.f8563d = jSONObject.optString("billingPeriod");
            this.f8562c = jSONObject.optString("priceCurrencyCode");
            this.f8560a = jSONObject.optString("formattedPrice");
            this.f8561b = jSONObject.optLong("priceAmountMicros");
            this.f8565f = jSONObject.optInt("recurrenceMode");
            this.f8564e = jSONObject.optInt("billingCycleCount");
        }

        public int a() {
            return this.f8564e;
        }

        public String b() {
            return this.f8563d;
        }

        public String c() {
            return this.f8560a;
        }

        public long d() {
            return this.f8561b;
        }

        public String e() {
            return this.f8562c;
        }

        public int f() {
            return this.f8565f;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        private final int f8566a;

        /* renamed from: b  reason: collision with root package name */
        private final int f8567b;

        a(JSONObject jSONObject) {
            this.f8566a = jSONObject.getInt("commitmentPaymentsCount");
            this.f8567b = jSONObject.optInt("subsequentCommitmentPaymentsCount");
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class b {

        /* renamed from: a  reason: collision with root package name */
        private final String f8568a;

        /* renamed from: b  reason: collision with root package name */
        private final long f8569b;

        /* renamed from: c  reason: collision with root package name */
        private final String f8570c;

        /* renamed from: d  reason: collision with root package name */
        private final String f8571d;

        /* renamed from: e  reason: collision with root package name */
        private final String f8572e;

        /* renamed from: f  reason: collision with root package name */
        private final String f8573f;

        /* renamed from: g  reason: collision with root package name */
        private final com.google.android.gms.internal.play_billing.j f8574g;

        /* renamed from: h  reason: collision with root package name */
        private final Long f8575h;

        /* renamed from: i  reason: collision with root package name */
        private final x f8576i;

        /* renamed from: j  reason: collision with root package name */
        private final b0 f8577j;

        /* renamed from: k  reason: collision with root package name */
        private final y f8578k;

        /* renamed from: l  reason: collision with root package name */
        private final z f8579l;

        /* renamed from: m  reason: collision with root package name */
        private final a0 f8580m;

        b(JSONObject jSONObject) {
            Long l10;
            x xVar;
            b0 b0Var;
            y yVar;
            z zVar;
            this.f8568a = jSONObject.optString("formattedPrice");
            this.f8569b = jSONObject.optLong("priceAmountMicros");
            this.f8570c = jSONObject.optString("priceCurrencyCode");
            String optString = jSONObject.optString("offerIdToken");
            this.f8571d = true == optString.isEmpty() ? null : optString;
            String optString2 = jSONObject.optString("offerId");
            this.f8572e = true == optString2.isEmpty() ? null : optString2;
            String optString3 = jSONObject.optString("purchaseOptionId");
            this.f8573f = true == optString3.isEmpty() ? null : optString3;
            jSONObject.optInt("offerType");
            JSONArray optJSONArray = jSONObject.optJSONArray("offerTags");
            ArrayList arrayList = new ArrayList();
            if (optJSONArray != null) {
                for (int i10 = 0; i10 < optJSONArray.length(); i10++) {
                    arrayList.add(optJSONArray.getString(i10));
                }
            }
            this.f8574g = com.google.android.gms.internal.play_billing.j.k(arrayList);
            if (jSONObject.has("fullPriceMicros")) {
                l10 = Long.valueOf(jSONObject.optLong("fullPriceMicros"));
            } else {
                l10 = null;
            }
            this.f8575h = l10;
            JSONObject optJSONObject = jSONObject.optJSONObject("discountDisplayInfo");
            if (optJSONObject == null) {
                xVar = null;
            } else {
                xVar = new x(optJSONObject);
            }
            this.f8576i = xVar;
            JSONObject optJSONObject2 = jSONObject.optJSONObject("validTimeWindow");
            if (optJSONObject2 == null) {
                b0Var = null;
            } else {
                b0Var = new b0(optJSONObject2);
            }
            this.f8577j = b0Var;
            JSONObject optJSONObject3 = jSONObject.optJSONObject("limitedQuantityInfo");
            if (optJSONObject3 == null) {
                yVar = null;
            } else {
                yVar = new y(optJSONObject3);
            }
            this.f8578k = yVar;
            JSONObject optJSONObject4 = jSONObject.optJSONObject("preorderDetails");
            if (optJSONObject4 == null) {
                zVar = null;
            } else {
                zVar = new z(optJSONObject4);
            }
            this.f8579l = zVar;
            JSONObject optJSONObject5 = jSONObject.optJSONObject("rentalDetails");
            this.f8580m = optJSONObject5 != null ? new a0(optJSONObject5) : null;
        }

        public String a() {
            return this.f8568a;
        }

        public long b() {
            return this.f8569b;
        }

        public String c() {
            return this.f8570c;
        }

        public final String d() {
            return this.f8571d;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class c {

        /* renamed from: a  reason: collision with root package name */
        private final List f8581a;

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
            this.f8581a = arrayList;
        }

        public List a() {
            return this.f8581a;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class d {

        /* renamed from: a  reason: collision with root package name */
        private final String f8582a;

        /* renamed from: b  reason: collision with root package name */
        private final String f8583b;

        /* renamed from: c  reason: collision with root package name */
        private final String f8584c;

        /* renamed from: d  reason: collision with root package name */
        private final c f8585d;

        /* renamed from: e  reason: collision with root package name */
        private final List f8586e;

        /* renamed from: f  reason: collision with root package name */
        private final a f8587f;

        /* renamed from: g  reason: collision with root package name */
        private final c0 f8588g;

        d(JSONObject jSONObject) {
            a aVar;
            this.f8582a = jSONObject.optString("basePlanId");
            String optString = jSONObject.optString("offerId");
            this.f8583b = true == optString.isEmpty() ? null : optString;
            this.f8584c = jSONObject.getString("offerIdToken");
            this.f8585d = new c(jSONObject.getJSONArray("pricingPhases"));
            JSONObject optJSONObject = jSONObject.optJSONObject("installmentPlanDetails");
            if (optJSONObject == null) {
                aVar = null;
            } else {
                aVar = new a(optJSONObject);
            }
            this.f8587f = aVar;
            JSONObject optJSONObject2 = jSONObject.optJSONObject("transitionPlanDetails");
            this.f8588g = optJSONObject2 != null ? new c0(optJSONObject2) : null;
            ArrayList arrayList = new ArrayList();
            JSONArray optJSONArray = jSONObject.optJSONArray("offerTags");
            if (optJSONArray != null) {
                for (int i10 = 0; i10 < optJSONArray.length(); i10++) {
                    arrayList.add(optJSONArray.getString(i10));
                }
            }
            this.f8586e = arrayList;
        }

        public String a() {
            return this.f8582a;
        }

        public String b() {
            return this.f8583b;
        }

        public List c() {
            return this.f8586e;
        }

        public String d() {
            return this.f8584c;
        }

        public c e() {
            return this.f8585d;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public ProductDetails(String str) {
        ArrayList arrayList;
        this.f8547a = str;
        JSONObject jSONObject = new JSONObject(str);
        this.f8548b = jSONObject;
        String optString = jSONObject.optString("productId");
        this.f8549c = optString;
        String optString2 = jSONObject.optString("type");
        this.f8550d = optString2;
        if (!TextUtils.isEmpty(optString)) {
            if (!TextUtils.isEmpty(optString2)) {
                this.f8551e = jSONObject.optString("title");
                this.f8552f = jSONObject.optString(StackTraceHelper.NAME_KEY);
                this.f8553g = jSONObject.optString("description");
                this.f8555i = jSONObject.optString("packageDisplayName");
                this.f8556j = jSONObject.optString("iconUrl");
                this.f8554h = jSONObject.optString("skuDetailsToken");
                this.f8557k = jSONObject.optString("serializedDocid");
                JSONArray optJSONArray = jSONObject.optJSONArray("subscriptionOfferDetails");
                if (optJSONArray != null) {
                    ArrayList arrayList2 = new ArrayList();
                    for (int i10 = 0; i10 < optJSONArray.length(); i10++) {
                        arrayList2.add(new d(optJSONArray.getJSONObject(i10)));
                    }
                    this.f8558l = arrayList2;
                } else {
                    if (!optString2.equals("subs") && !optString2.equals("play_pass_subs")) {
                        arrayList = null;
                    } else {
                        arrayList = new ArrayList();
                    }
                    this.f8558l = arrayList;
                }
                JSONObject optJSONObject = this.f8548b.optJSONObject("oneTimePurchaseOfferDetails");
                JSONArray optJSONArray2 = this.f8548b.optJSONArray("oneTimePurchaseOfferDetailsList");
                ArrayList arrayList3 = new ArrayList();
                if (optJSONArray2 != null) {
                    for (int i11 = 0; i11 < optJSONArray2.length(); i11++) {
                        arrayList3.add(new b(optJSONArray2.getJSONObject(i11)));
                    }
                    this.f8559m = arrayList3;
                    return;
                } else if (optJSONObject != null) {
                    arrayList3.add(new b(optJSONObject));
                    this.f8559m = arrayList3;
                    return;
                } else {
                    this.f8559m = null;
                    return;
                }
            }
            throw new IllegalArgumentException("Product type cannot be empty.");
        }
        throw new IllegalArgumentException("Product id cannot be empty.");
    }

    public String a() {
        return this.f8553g;
    }

    public String b() {
        return this.f8552f;
    }

    public b c() {
        List list = this.f8559m;
        if (list != null && !list.isEmpty()) {
            return (b) this.f8559m.get(0);
        }
        return null;
    }

    public String d() {
        return this.f8549c;
    }

    public String e() {
        return this.f8550d;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof ProductDetails)) {
            return false;
        }
        return TextUtils.equals(this.f8547a, ((ProductDetails) obj).f8547a);
    }

    public List f() {
        return this.f8558l;
    }

    public String g() {
        return this.f8551e;
    }

    public final String h() {
        return this.f8548b.optString("packageName");
    }

    public int hashCode() {
        return this.f8547a.hashCode();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final String i() {
        return this.f8554h;
    }

    public String j() {
        return this.f8557k;
    }

    public String toString() {
        List list = this.f8558l;
        String obj = this.f8548b.toString();
        String valueOf = String.valueOf(list);
        return "ProductDetails{jsonString='" + this.f8547a + "', parsedJson=" + obj + ", productId='" + this.f8549c + "', productType='" + this.f8550d + "', title='" + this.f8551e + "', productDetailsToken='" + this.f8554h + "', subscriptionOfferDetails=" + valueOf + "}";
    }
}
