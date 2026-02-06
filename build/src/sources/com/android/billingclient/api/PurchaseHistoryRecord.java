package com.android.billingclient.api;

import android.text.TextUtils;
import java.util.ArrayList;
import java.util.List;
import org.json.JSONArray;
import org.json.JSONObject;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class PurchaseHistoryRecord {

    /* renamed from: a  reason: collision with root package name */
    private final String f7883a;

    /* renamed from: b  reason: collision with root package name */
    private final String f7884b;

    /* renamed from: c  reason: collision with root package name */
    private final JSONObject f7885c;

    public PurchaseHistoryRecord(String str, String str2) {
        this.f7883a = str;
        this.f7884b = str2;
        this.f7885c = new JSONObject(str);
    }

    private final ArrayList g() {
        ArrayList arrayList = new ArrayList();
        if (this.f7885c.has("productIds")) {
            JSONArray optJSONArray = this.f7885c.optJSONArray("productIds");
            if (optJSONArray != null) {
                for (int i10 = 0; i10 < optJSONArray.length(); i10++) {
                    arrayList.add(optJSONArray.optString(i10));
                }
            }
        } else if (this.f7885c.has("productId")) {
            arrayList.add(this.f7885c.optString("productId"));
        }
        return arrayList;
    }

    public String a() {
        return this.f7885c.optString("developerPayload");
    }

    public String b() {
        return this.f7883a;
    }

    public List c() {
        return g();
    }

    public long d() {
        return this.f7885c.optLong("purchaseTime");
    }

    public String e() {
        JSONObject jSONObject = this.f7885c;
        return jSONObject.optString("token", jSONObject.optString("purchaseToken"));
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof PurchaseHistoryRecord)) {
            return false;
        }
        PurchaseHistoryRecord purchaseHistoryRecord = (PurchaseHistoryRecord) obj;
        if (TextUtils.equals(this.f7883a, purchaseHistoryRecord.b()) && TextUtils.equals(this.f7884b, purchaseHistoryRecord.f())) {
            return true;
        }
        return false;
    }

    public String f() {
        return this.f7884b;
    }

    public int hashCode() {
        return this.f7883a.hashCode();
    }

    public String toString() {
        return "PurchaseHistoryRecord. Json: ".concat(String.valueOf(this.f7883a));
    }
}
