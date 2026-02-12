package com.android.billingclient.api;

import com.android.billingclient.api.ProductDetails;
import com.facebook.react.devsupport.StackTraceHelper;
import org.json.JSONObject;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class c0 {

    /* renamed from: a  reason: collision with root package name */
    private final String f8644a;

    /* renamed from: b  reason: collision with root package name */
    private final String f8645b;

    /* renamed from: c  reason: collision with root package name */
    private final String f8646c;

    /* renamed from: d  reason: collision with root package name */
    private final String f8647d;

    /* renamed from: e  reason: collision with root package name */
    private final String f8648e;

    /* renamed from: f  reason: collision with root package name */
    private final ProductDetails.PricingPhase f8649f;

    /* JADX INFO: Access modifiers changed from: package-private */
    public c0(JSONObject jSONObject) {
        ProductDetails.PricingPhase pricingPhase;
        this.f8644a = jSONObject.getString("productId");
        this.f8645b = jSONObject.optString("title");
        this.f8646c = jSONObject.optString(StackTraceHelper.NAME_KEY);
        this.f8647d = jSONObject.optString("description");
        this.f8648e = jSONObject.optString("basePlanId");
        JSONObject optJSONObject = jSONObject.optJSONObject("pricingPhase");
        if (optJSONObject == null) {
            pricingPhase = null;
        } else {
            pricingPhase = new ProductDetails.PricingPhase(optJSONObject);
        }
        this.f8649f = pricingPhase;
    }
}
