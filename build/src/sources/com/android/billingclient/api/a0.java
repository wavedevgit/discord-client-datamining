package com.android.billingclient.api;

import org.json.JSONObject;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class a0 {

    /* renamed from: a  reason: collision with root package name */
    private final String f7610a;

    /* renamed from: b  reason: collision with root package name */
    private final String f7611b;

    /* JADX INFO: Access modifiers changed from: package-private */
    public a0(JSONObject jSONObject) {
        this.f7610a = jSONObject.getString("rentalPeriod");
        String optString = jSONObject.optString("rentalExpirationPeriod");
        this.f7611b = true == optString.isEmpty() ? null : optString;
    }
}
