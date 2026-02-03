package com.android.billingclient.api;

import org.json.JSONObject;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class a0 {

    /* renamed from: a  reason: collision with root package name */
    private final String f8642a;

    /* renamed from: b  reason: collision with root package name */
    private final String f8643b;

    /* JADX INFO: Access modifiers changed from: package-private */
    public a0(JSONObject jSONObject) {
        this.f8642a = jSONObject.getString("rentalPeriod");
        String optString = jSONObject.optString("rentalExpirationPeriod");
        this.f8643b = true == optString.isEmpty() ? null : optString;
    }
}
