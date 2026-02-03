package com.android.billingclient.api;

import org.json.JSONObject;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class BillingConfig {

    /* renamed from: a  reason: collision with root package name */
    private final String f7515a;

    /* renamed from: b  reason: collision with root package name */
    private final JSONObject f7516b;

    /* renamed from: c  reason: collision with root package name */
    private final String f7517c;

    /* JADX INFO: Access modifiers changed from: package-private */
    public BillingConfig(String str) {
        this.f7515a = str;
        JSONObject jSONObject = new JSONObject(str);
        this.f7516b = jSONObject;
        this.f7517c = jSONObject.optString("countryCode");
    }

    public String a() {
        return this.f7517c;
    }
}
