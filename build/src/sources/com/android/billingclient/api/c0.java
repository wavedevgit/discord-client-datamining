package com.android.billingclient.api;

import com.android.billingclient.api.ProductDetails;
import com.facebook.react.devsupport.StackTraceHelper;
import org.json.JSONObject;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class c0 {

    /* renamed from: a  reason: collision with root package name */
    private final String f8066a;

    /* renamed from: b  reason: collision with root package name */
    private final String f8067b;

    /* renamed from: c  reason: collision with root package name */
    private final String f8068c;

    /* renamed from: d  reason: collision with root package name */
    private final String f8069d;

    /* renamed from: e  reason: collision with root package name */
    private final String f8070e;

    /* renamed from: f  reason: collision with root package name */
    private final ProductDetails.PricingPhase f8071f;

    /* JADX INFO: Access modifiers changed from: package-private */
    public c0(JSONObject jSONObject) {
        ProductDetails.PricingPhase pricingPhase;
        this.f8066a = jSONObject.getString("productId");
        this.f8067b = jSONObject.optString("title");
        this.f8068c = jSONObject.optString(StackTraceHelper.NAME_KEY);
        this.f8069d = jSONObject.optString("description");
        this.f8070e = jSONObject.optString("basePlanId");
        JSONObject optJSONObject = jSONObject.optJSONObject("pricingPhase");
        if (optJSONObject == null) {
            pricingPhase = null;
        } else {
            pricingPhase = new ProductDetails.PricingPhase(optJSONObject);
        }
        this.f8071f = pricingPhase;
    }
}
