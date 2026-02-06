package com.android.billingclient.api;

import com.android.billingclient.api.ProductDetails;
import com.facebook.react.devsupport.StackTraceHelper;
import org.json.JSONObject;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class c0 {

    /* renamed from: a  reason: collision with root package name */
    private final String f7926a;

    /* renamed from: b  reason: collision with root package name */
    private final String f7927b;

    /* renamed from: c  reason: collision with root package name */
    private final String f7928c;

    /* renamed from: d  reason: collision with root package name */
    private final String f7929d;

    /* renamed from: e  reason: collision with root package name */
    private final String f7930e;

    /* renamed from: f  reason: collision with root package name */
    private final ProductDetails.PricingPhase f7931f;

    /* JADX INFO: Access modifiers changed from: package-private */
    public c0(JSONObject jSONObject) {
        ProductDetails.PricingPhase pricingPhase;
        this.f7926a = jSONObject.getString("productId");
        this.f7927b = jSONObject.optString("title");
        this.f7928c = jSONObject.optString(StackTraceHelper.NAME_KEY);
        this.f7929d = jSONObject.optString("description");
        this.f7930e = jSONObject.optString("basePlanId");
        JSONObject optJSONObject = jSONObject.optJSONObject("pricingPhase");
        if (optJSONObject == null) {
            pricingPhase = null;
        } else {
            pricingPhase = new ProductDetails.PricingPhase(optJSONObject);
        }
        this.f7931f = pricingPhase;
    }
}
