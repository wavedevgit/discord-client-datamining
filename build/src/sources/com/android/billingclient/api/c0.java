package com.android.billingclient.api;

import com.android.billingclient.api.ProductDetails;
import com.facebook.react.devsupport.StackTraceHelper;
import org.json.JSONObject;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class c0 {

    /* renamed from: a  reason: collision with root package name */
    private final String f8643a;

    /* renamed from: b  reason: collision with root package name */
    private final String f8644b;

    /* renamed from: c  reason: collision with root package name */
    private final String f8645c;

    /* renamed from: d  reason: collision with root package name */
    private final String f8646d;

    /* renamed from: e  reason: collision with root package name */
    private final String f8647e;

    /* renamed from: f  reason: collision with root package name */
    private final ProductDetails.PricingPhase f8648f;

    /* JADX INFO: Access modifiers changed from: package-private */
    public c0(JSONObject jSONObject) {
        ProductDetails.PricingPhase pricingPhase;
        this.f8643a = jSONObject.getString("productId");
        this.f8644b = jSONObject.optString("title");
        this.f8645c = jSONObject.optString(StackTraceHelper.NAME_KEY);
        this.f8646d = jSONObject.optString("description");
        this.f8647e = jSONObject.optString("basePlanId");
        JSONObject optJSONObject = jSONObject.optJSONObject("pricingPhase");
        if (optJSONObject == null) {
            pricingPhase = null;
        } else {
            pricingPhase = new ProductDetails.PricingPhase(optJSONObject);
        }
        this.f8648f = pricingPhase;
    }
}
