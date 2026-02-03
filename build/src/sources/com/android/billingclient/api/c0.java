package com.android.billingclient.api;

import com.android.billingclient.api.ProductDetails;
import com.facebook.react.devsupport.StackTraceHelper;
import org.json.JSONObject;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class c0 {

    /* renamed from: a  reason: collision with root package name */
    private final String f7642a;

    /* renamed from: b  reason: collision with root package name */
    private final String f7643b;

    /* renamed from: c  reason: collision with root package name */
    private final String f7644c;

    /* renamed from: d  reason: collision with root package name */
    private final String f7645d;

    /* renamed from: e  reason: collision with root package name */
    private final String f7646e;

    /* renamed from: f  reason: collision with root package name */
    private final ProductDetails.PricingPhase f7647f;

    /* JADX INFO: Access modifiers changed from: package-private */
    public c0(JSONObject jSONObject) {
        ProductDetails.PricingPhase pricingPhase;
        this.f7642a = jSONObject.getString("productId");
        this.f7643b = jSONObject.optString("title");
        this.f7644c = jSONObject.optString(StackTraceHelper.NAME_KEY);
        this.f7645d = jSONObject.optString("description");
        this.f7646e = jSONObject.optString("basePlanId");
        JSONObject optJSONObject = jSONObject.optJSONObject("pricingPhase");
        if (optJSONObject == null) {
            pricingPhase = null;
        } else {
            pricingPhase = new ProductDetails.PricingPhase(optJSONObject);
        }
        this.f7647f = pricingPhase;
    }
}
