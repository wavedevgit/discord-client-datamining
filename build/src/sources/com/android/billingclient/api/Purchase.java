package com.android.billingclient.api;

import android.text.TextUtils;
import java.util.ArrayList;
import java.util.List;
import org.json.JSONArray;
import org.json.JSONObject;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class Purchase {

    /* renamed from: a  reason: collision with root package name */
    private final String f8999a;

    /* renamed from: b  reason: collision with root package name */
    private final String f9000b;

    /* renamed from: c  reason: collision with root package name */
    private final JSONObject f9001c;

    public Purchase(String str, String str2) {
        this.f8999a = str;
        this.f9000b = str2;
        this.f9001c = new JSONObject(str);
    }

    private final ArrayList m() {
        ArrayList arrayList = new ArrayList();
        if (this.f9001c.has("productIds")) {
            JSONArray optJSONArray = this.f9001c.optJSONArray("productIds");
            if (optJSONArray != null) {
                for (int i10 = 0; i10 < optJSONArray.length(); i10++) {
                    arrayList.add(optJSONArray.optString(i10));
                }
            }
        } else if (this.f9001c.has("productId")) {
            arrayList.add(this.f9001c.optString("productId"));
        }
        return arrayList;
    }

    public a a() {
        JSONObject jSONObject = this.f9001c;
        String optString = jSONObject.optString("obfuscatedAccountId");
        String optString2 = jSONObject.optString("obfuscatedProfileId");
        if (optString == null && optString2 == null) {
            return null;
        }
        return new a(optString, optString2);
    }

    public String b() {
        return this.f9001c.optString("developerPayload");
    }

    public String c() {
        String optString = this.f9001c.optString("orderId");
        if (TextUtils.isEmpty(optString)) {
            return null;
        }
        return optString;
    }

    public String d() {
        return this.f8999a;
    }

    public String e() {
        return this.f9001c.optString("packageName");
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof Purchase)) {
            return false;
        }
        Purchase purchase = (Purchase) obj;
        if (TextUtils.equals(this.f8999a, purchase.d()) && TextUtils.equals(this.f9000b, purchase.j())) {
            return true;
        }
        return false;
    }

    public List f() {
        return m();
    }

    public int g() {
        if (this.f9001c.optInt("purchaseState", 1) != 4) {
            return 1;
        }
        return 2;
    }

    public long h() {
        return this.f9001c.optLong("purchaseTime");
    }

    public int hashCode() {
        return this.f8999a.hashCode();
    }

    public String i() {
        JSONObject jSONObject = this.f9001c;
        return jSONObject.optString("token", jSONObject.optString("purchaseToken"));
    }

    public String j() {
        return this.f9000b;
    }

    public boolean k() {
        return this.f9001c.optBoolean("acknowledged", true);
    }

    public boolean l() {
        return this.f9001c.optBoolean("autoRenewing");
    }

    public String toString() {
        return "Purchase. Json: ".concat(String.valueOf(this.f8999a));
    }
}
