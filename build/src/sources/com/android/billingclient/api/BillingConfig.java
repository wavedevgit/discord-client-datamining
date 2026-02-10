package com.android.billingclient.api;

import org.json.JSONObject;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class BillingConfig {

    /* renamed from: a  reason: collision with root package name */
    private final String f7939a;

    /* renamed from: b  reason: collision with root package name */
    private final JSONObject f7940b;

    /* renamed from: c  reason: collision with root package name */
    private final String f7941c;

    /* JADX INFO: Access modifiers changed from: package-private */
    public BillingConfig(String str) {
        this.f7939a = str;
        JSONObject jSONObject = new JSONObject(str);
        this.f7940b = jSONObject;
        this.f7941c = jSONObject.optString("countryCode");
    }

    public String a() {
        return this.f7941c;
    }
}
