package com.android.billingclient.api;

import android.text.TextUtils;
import java.util.ArrayList;
import java.util.List;
import org.json.JSONArray;
import org.json.JSONObject;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class PurchaseHistoryRecord {

    /* renamed from: a  reason: collision with root package name */
    private final String f8601a;

    /* renamed from: b  reason: collision with root package name */
    private final String f8602b;

    /* renamed from: c  reason: collision with root package name */
    private final JSONObject f8603c;

    public PurchaseHistoryRecord(String str, String str2) {
        this.f8601a = str;
        this.f8602b = str2;
        this.f8603c = new JSONObject(str);
    }

    private final ArrayList g() {
        ArrayList arrayList = new ArrayList();
        if (this.f8603c.has("productIds")) {
            JSONArray optJSONArray = this.f8603c.optJSONArray("productIds");
            if (optJSONArray != null) {
                for (int i10 = 0; i10 < optJSONArray.length(); i10++) {
                    arrayList.add(optJSONArray.optString(i10));
                }
            }
        } else if (this.f8603c.has("productId")) {
            arrayList.add(this.f8603c.optString("productId"));
        }
        return arrayList;
    }

    public String a() {
        return this.f8603c.optString("developerPayload");
    }

    public String b() {
        return this.f8601a;
    }

    public List c() {
        return g();
    }

    public long d() {
        return this.f8603c.optLong("purchaseTime");
    }

    public String e() {
        JSONObject jSONObject = this.f8603c;
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
        if (TextUtils.equals(this.f8601a, purchaseHistoryRecord.b()) && TextUtils.equals(this.f8602b, purchaseHistoryRecord.f())) {
            return true;
        }
        return false;
    }

    public String f() {
        return this.f8602b;
    }

    public int hashCode() {
        return this.f8601a.hashCode();
    }

    public String toString() {
        return "PurchaseHistoryRecord. Json: ".concat(String.valueOf(this.f8601a));
    }
}
