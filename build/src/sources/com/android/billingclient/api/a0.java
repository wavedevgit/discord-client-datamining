package com.android.billingclient.api;

import org.json.JSONObject;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class a0 {

    /* renamed from: a  reason: collision with root package name */
    private final String f8612a;

    /* renamed from: b  reason: collision with root package name */
    private final String f8613b;

    /* JADX INFO: Access modifiers changed from: package-private */
    public a0(JSONObject jSONObject) {
        this.f8612a = jSONObject.getString("rentalPeriod");
        String optString = jSONObject.optString("rentalExpirationPeriod");
        this.f8613b = true == optString.isEmpty() ? null : optString;
    }
}
