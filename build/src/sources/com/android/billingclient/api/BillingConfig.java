package com.android.billingclient.api;

import org.json.JSONObject;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class BillingConfig {

    /* renamed from: a  reason: collision with root package name */
    private final String f7799a;

    /* renamed from: b  reason: collision with root package name */
    private final JSONObject f7800b;

    /* renamed from: c  reason: collision with root package name */
    private final String f7801c;

    /* JADX INFO: Access modifiers changed from: package-private */
    public BillingConfig(String str) {
        this.f7799a = str;
        JSONObject jSONObject = new JSONObject(str);
        this.f7800b = jSONObject;
        this.f7801c = jSONObject.optString("countryCode");
    }

    public String a() {
        return this.f7801c;
    }
}
