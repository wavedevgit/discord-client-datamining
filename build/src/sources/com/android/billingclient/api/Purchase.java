package com.android.billingclient.api;

import android.text.TextUtils;
import java.util.ArrayList;
import java.util.List;
import org.json.JSONArray;
import org.json.JSONObject;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class Purchase {

    /* renamed from: a  reason: collision with root package name */
    private final String f8628a;

    /* renamed from: b  reason: collision with root package name */
    private final String f8629b;

    /* renamed from: c  reason: collision with root package name */
    private final JSONObject f8630c;

    public Purchase(String str, String str2) {
        this.f8628a = str;
        this.f8629b = str2;
        this.f8630c = new JSONObject(str);
    }

    private final ArrayList m() {
        ArrayList arrayList = new ArrayList();
        if (this.f8630c.has("productIds")) {
            JSONArray optJSONArray = this.f8630c.optJSONArray("productIds");
            if (optJSONArray != null) {
                for (int i10 = 0; i10 < optJSONArray.length(); i10++) {
                    arrayList.add(optJSONArray.optString(i10));
                }
            }
        } else if (this.f8630c.has("productId")) {
            arrayList.add(this.f8630c.optString("productId"));
        }
        return arrayList;
    }

    public a a() {
        JSONObject jSONObject = this.f8630c;
        String optString = jSONObject.optString("obfuscatedAccountId");
        String optString2 = jSONObject.optString("obfuscatedProfileId");
        if (optString == null && optString2 == null) {
            return null;
        }
        return new a(optString, optString2);
    }

    public String b() {
        return this.f8630c.optString("developerPayload");
    }

    public String c() {
        String optString = this.f8630c.optString("orderId");
        if (TextUtils.isEmpty(optString)) {
            return null;
        }
        return optString;
    }

    public String d() {
        return this.f8628a;
    }

    public String e() {
        return this.f8630c.optString("packageName");
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof Purchase)) {
            return false;
        }
        Purchase purchase = (Purchase) obj;
        if (TextUtils.equals(this.f8628a, purchase.d()) && TextUtils.equals(this.f8629b, purchase.j())) {
            return true;
        }
        return false;
    }

    public List f() {
        return m();
    }

    public int g() {
        if (this.f8630c.optInt("purchaseState", 1) != 4) {
            return 1;
        }
        return 2;
    }

    public long h() {
        return this.f8630c.optLong("purchaseTime");
    }

    public int hashCode() {
        return this.f8628a.hashCode();
    }

    public String i() {
        JSONObject jSONObject = this.f8630c;
        return jSONObject.optString("token", jSONObject.optString("purchaseToken"));
    }

    public String j() {
        return this.f8629b;
    }

    public boolean k() {
        return this.f8630c.optBoolean("acknowledged", true);
    }

    public boolean l() {
        return this.f8630c.optBoolean("autoRenewing");
    }

    public String toString() {
        return "Purchase. Json: ".concat(String.valueOf(this.f8628a));
    }
}
