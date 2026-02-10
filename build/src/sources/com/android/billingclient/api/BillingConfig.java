package com.android.billingclient.api;

import org.json.JSONObject;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class BillingConfig {

    /* renamed from: a  reason: collision with root package name */
    private final String f8516a;

    /* renamed from: b  reason: collision with root package name */
    private final JSONObject f8517b;

    /* renamed from: c  reason: collision with root package name */
    private final String f8518c;

    /* JADX INFO: Access modifiers changed from: package-private */
    public BillingConfig(String str) {
        this.f8516a = str;
        JSONObject jSONObject = new JSONObject(str);
        this.f8517b = jSONObject;
        this.f8518c = jSONObject.optString("countryCode");
    }

    public String a() {
        return this.f8518c;
    }
}
