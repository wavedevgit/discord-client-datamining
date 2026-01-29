package com.android.billingclient.api;

import com.android.billingclient.api.ProductDetails;
import com.facebook.react.devsupport.StackTraceHelper;
import org.json.JSONObject;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class c0 {

    /* renamed from: a  reason: collision with root package name */
    private final String f9045a;

    /* renamed from: b  reason: collision with root package name */
    private final String f9046b;

    /* renamed from: c  reason: collision with root package name */
    private final String f9047c;

    /* renamed from: d  reason: collision with root package name */
    private final String f9048d;

    /* renamed from: e  reason: collision with root package name */
    private final String f9049e;

    /* renamed from: f  reason: collision with root package name */
    private final ProductDetails.PricingPhase f9050f;

    /* JADX INFO: Access modifiers changed from: package-private */
    public c0(JSONObject jSONObject) {
        ProductDetails.PricingPhase pricingPhase;
        this.f9045a = jSONObject.getString("productId");
        this.f9046b = jSONObject.optString("title");
        this.f9047c = jSONObject.optString(StackTraceHelper.NAME_KEY);
        this.f9048d = jSONObject.optString("description");
        this.f9049e = jSONObject.optString("basePlanId");
        JSONObject optJSONObject = jSONObject.optJSONObject("pricingPhase");
        if (optJSONObject == null) {
            pricingPhase = null;
        } else {
            pricingPhase = new ProductDetails.PricingPhase(optJSONObject);
        }
        this.f9050f = pricingPhase;
    }
}
