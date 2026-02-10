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
    private final String f7970a;

    /* renamed from: b  reason: collision with root package name */
    private final JSONObject f7971b;

    /* renamed from: c  reason: collision with root package name */
    private final String f7972c;

    /* renamed from: d  reason: collision with root package name */
    private final String f7973d;

    /* renamed from: e  reason: collision with root package name */
    private final String f7974e;

    /* renamed from: f  reason: collision with root package name */
    private final String f7975f;

    /* renamed from: g  reason: collision with root package name */
    private final String f7976g;

    /* renamed from: h  reason: collision with root package name */
    private final String f7977h;

    /* renamed from: i  reason: collision with root package name */
    private final String f7978i;

    /* renamed from: j  reason: collision with root package name */
    private final String f7979j;

    /* renamed from: k  reason: collision with root package name */
    private final String f7980k;

    /* renamed from: l  reason: collision with root package name */
    private final List f7981l;

    /* renamed from: m  reason: collision with root package name */
    private final List f7982m;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class PricingPhase {

        /* renamed from: a  reason: collision with root package name */
        private final String f7983a;

        /* renamed from: b  reason: collision with root package name */
        private final long f7984b;

        /* renamed from: c  reason: collision with root package name */
        private final String f7985c;

        /* renamed from: d  reason: collision with root package name */
        private final String f7986d;

        /* renamed from: e  reason: collision with root package name */
        private final int f7987e;

        /* renamed from: f  reason: collision with root package name */
        private final int f7988f;

        /* JADX INFO: Access modifiers changed from: package-private */
        public PricingPhase(JSONObject jSONObject) {
            this.f7986d = jSONObject.optString("billingPeriod");
            this.f7985c = jSONObject.optString("priceCurrencyCode");
            this.f7983a = jSONObject.optString("formattedPrice");
            this.f7984b = jSONObject.optLong("priceAmountMicros");
            this.f7988f = jSONObject.optInt("recurrenceMode");
            this.f7987e = jSONObject.optInt("billingCycleCount");
        }

        public int a() {
            return this.f7987e;
        }

        public String b() {
            return this.f7986d;
        }

        public String c() {
            return this.f7983a;
        }

        public long d() {
            return this.f7984b;
        }

        public String e() {
            return this.f7985c;
        }

        public int f() {
            return this.f7988f;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        private final int f7989a;

        /* renamed from: b  reason: collision with root package name */
        private final int f7990b;

        a(JSONObject jSONObject) {
            this.f7989a = jSONObject.getInt("commitmentPaymentsCount");
            this.f7990b = jSONObject.optInt("subsequentCommitmentPaymentsCount");
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class b {

        /* renamed from: a  reason: collision with root package name */
        private final String f7991a;

        /* renamed from: b  reason: collision with root package name */
        private final long f7992b;

        /* renamed from: c  reason: collision with root package name */
        private final String f7993c;

        /* renamed from: d  reason: collision with root package name */
        private final String f7994d;

        /* renamed from: e  reason: collision with root package name */
        private final String f7995e;

        /* renamed from: f  reason: collision with root package name */
        private final String f7996f;

        /* renamed from: g  reason: collision with root package name */
        private final com.google.android.gms.internal.play_billing.j f7997g;

        /* renamed from: h  reason: collision with root package name */
        private final Long f7998h;

        /* renamed from: i  reason: collision with root package name */
        private final x f7999i;

        /* renamed from: j  reason: collision with root package name */
        private final b0 f8000j;

        /* renamed from: k  reason: collision with root package name */
        private final y f8001k;

        /* renamed from: l  reason: collision with root package name */
        private final z f8002l;

        /* renamed from: m  reason: collision with root package name */
        private final a0 f8003m;

        b(JSONObject jSONObject) {
            Long l10;
            x xVar;
            b0 b0Var;
            y yVar;
            z zVar;
            this.f7991a = jSONObject.optString("formattedPrice");
            this.f7992b = jSONObject.optLong("priceAmountMicros");
            this.f7993c = jSONObject.optString("priceCurrencyCode");
            String optString = jSONObject.optString("offerIdToken");
            this.f7994d = true == optString.isEmpty() ? null : optString;
            String optString2 = jSONObject.optString("offerId");
            this.f7995e = true == optString2.isEmpty() ? null : optString2;
            String optString3 = jSONObject.optString("purchaseOptionId");
            this.f7996f = true == optString3.isEmpty() ? null : optString3;
            jSONObject.optInt("offerType");
            JSONArray optJSONArray = jSONObject.optJSONArray("offerTags");
            ArrayList arrayList = new ArrayList();
            if (optJSONArray != null) {
                for (int i10 = 0; i10 < optJSONArray.length(); i10++) {
                    arrayList.add(optJSONArray.getString(i10));
                }
            }
            this.f7997g = com.google.android.gms.internal.play_billing.j.j(arrayList);
            if (jSONObject.has("fullPriceMicros")) {
                l10 = Long.valueOf(jSONObject.optLong("fullPriceMicros"));
            } else {
                l10 = null;
            }
            this.f7998h = l10;
            JSONObject optJSONObject = jSONObject.optJSONObject("discountDisplayInfo");
            if (optJSONObject == null) {
                xVar = null;
            } else {
                xVar = new x(optJSONObject);
            }
            this.f7999i = xVar;
            JSONObject optJSONObject2 = jSONObject.optJSONObject("validTimeWindow");
            if (optJSONObject2 == null) {
                b0Var = null;
            } else {
                b0Var = new b0(optJSONObject2);
            }
            this.f8000j = b0Var;
            JSONObject optJSONObject3 = jSONObject.optJSONObject("limitedQuantityInfo");
            if (optJSONObject3 == null) {
                yVar = null;
            } else {
                yVar = new y(optJSONObject3);
            }
            this.f8001k = yVar;
            JSONObject optJSONObject4 = jSONObject.optJSONObject("preorderDetails");
            if (optJSONObject4 == null) {
                zVar = null;
            } else {
                zVar = new z(optJSONObject4);
            }
            this.f8002l = zVar;
            JSONObject optJSONObject5 = jSONObject.optJSONObject("rentalDetails");
            this.f8003m = optJSONObject5 != null ? new a0(optJSONObject5) : null;
        }

        public String a() {
            return this.f7991a;
        }

        public long b() {
            return this.f7992b;
        }

        public String c() {
            return this.f7993c;
        }

        public final String d() {
            return this.f7994d;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class c {

        /* renamed from: a  reason: collision with root package name */
        private final List f8004a;

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
            this.f8004a = arrayList;
        }

        public List a() {
            return this.f8004a;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class d {

        /* renamed from: a  reason: collision with root package name */
        private final String f8005a;

        /* renamed from: b  reason: collision with root package name */
        private final String f8006b;

        /* renamed from: c  reason: collision with root package name */
        private final String f8007c;

        /* renamed from: d  reason: collision with root package name */
        private final c f8008d;

        /* renamed from: e  reason: collision with root package name */
        private final List f8009e;

        /* renamed from: f  reason: collision with root package name */
        private final a f8010f;

        /* renamed from: g  reason: collision with root package name */
        private final c0 f8011g;

        d(JSONObject jSONObject) {
            a aVar;
            this.f8005a = jSONObject.optString("basePlanId");
            String optString = jSONObject.optString("offerId");
            this.f8006b = true == optString.isEmpty() ? null : optString;
            this.f8007c = jSONObject.getString("offerIdToken");
            this.f8008d = new c(jSONObject.getJSONArray("pricingPhases"));
            JSONObject optJSONObject = jSONObject.optJSONObject("installmentPlanDetails");
            if (optJSONObject == null) {
                aVar = null;
            } else {
                aVar = new a(optJSONObject);
            }
            this.f8010f = aVar;
            JSONObject optJSONObject2 = jSONObject.optJSONObject("transitionPlanDetails");
            this.f8011g = optJSONObject2 != null ? new c0(optJSONObject2) : null;
            ArrayList arrayList = new ArrayList();
            JSONArray optJSONArray = jSONObject.optJSONArray("offerTags");
            if (optJSONArray != null) {
                for (int i10 = 0; i10 < optJSONArray.length(); i10++) {
                    arrayList.add(optJSONArray.getString(i10));
                }
            }
            this.f8009e = arrayList;
        }

        public String a() {
            return this.f8005a;
        }

        public String b() {
            return this.f8006b;
        }

        public List c() {
            return this.f8009e;
        }

        public String d() {
            return this.f8007c;
        }

        public c e() {
            return this.f8008d;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public ProductDetails(String str) {
        ArrayList arrayList;
        this.f7970a = str;
        JSONObject jSONObject = new JSONObject(str);
        this.f7971b = jSONObject;
        String optString = jSONObject.optString("productId");
        this.f7972c = optString;
        String optString2 = jSONObject.optString("type");
        this.f7973d = optString2;
        if (!TextUtils.isEmpty(optString)) {
            if (!TextUtils.isEmpty(optString2)) {
                this.f7974e = jSONObject.optString("title");
                this.f7975f = jSONObject.optString(StackTraceHelper.NAME_KEY);
                this.f7976g = jSONObject.optString("description");
                this.f7978i = jSONObject.optString("packageDisplayName");
                this.f7979j = jSONObject.optString("iconUrl");
                this.f7977h = jSONObject.optString("skuDetailsToken");
                this.f7980k = jSONObject.optString("serializedDocid");
                JSONArray optJSONArray = jSONObject.optJSONArray("subscriptionOfferDetails");
                if (optJSONArray != null) {
                    ArrayList arrayList2 = new ArrayList();
                    for (int i10 = 0; i10 < optJSONArray.length(); i10++) {
                        arrayList2.add(new d(optJSONArray.getJSONObject(i10)));
                    }
                    this.f7981l = arrayList2;
                } else {
                    if (!optString2.equals("subs") && !optString2.equals("play_pass_subs")) {
                        arrayList = null;
                    } else {
                        arrayList = new ArrayList();
                    }
                    this.f7981l = arrayList;
                }
                JSONObject optJSONObject = this.f7971b.optJSONObject("oneTimePurchaseOfferDetails");
                JSONArray optJSONArray2 = this.f7971b.optJSONArray("oneTimePurchaseOfferDetailsList");
                ArrayList arrayList3 = new ArrayList();
                if (optJSONArray2 != null) {
                    for (int i11 = 0; i11 < optJSONArray2.length(); i11++) {
                        arrayList3.add(new b(optJSONArray2.getJSONObject(i11)));
                    }
                    this.f7982m = arrayList3;
                    return;
                } else if (optJSONObject != null) {
                    arrayList3.add(new b(optJSONObject));
                    this.f7982m = arrayList3;
                    return;
                } else {
                    this.f7982m = null;
                    return;
                }
            }
            throw new IllegalArgumentException("Product type cannot be empty.");
        }
        throw new IllegalArgumentException("Product id cannot be empty.");
    }

    public String a() {
        return this.f7976g;
    }

    public String b() {
        return this.f7975f;
    }

    public b c() {
        List list = this.f7982m;
        if (list != null && !list.isEmpty()) {
            return (b) this.f7982m.get(0);
        }
        return null;
    }

    public String d() {
        return this.f7972c;
    }

    public String e() {
        return this.f7973d;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof ProductDetails)) {
            return false;
        }
        return TextUtils.equals(this.f7970a, ((ProductDetails) obj).f7970a);
    }

    public List f() {
        return this.f7981l;
    }

    public String g() {
        return this.f7974e;
    }

    public final String h() {
        return this.f7971b.optString("packageName");
    }

    public int hashCode() {
        return this.f7970a.hashCode();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final String i() {
        return this.f7977h;
    }

    public String j() {
        return this.f7980k;
    }

    public String toString() {
        List list = this.f7981l;
        String obj = this.f7971b.toString();
        String valueOf = String.valueOf(list);
        return "ProductDetails{jsonString='" + this.f7970a + "', parsedJson=" + obj + ", productId='" + this.f7972c + "', productType='" + this.f7973d + "', title='" + this.f7974e + "', productDetailsToken='" + this.f7977h + "', subscriptionOfferDetails=" + valueOf + "}";
    }
}
