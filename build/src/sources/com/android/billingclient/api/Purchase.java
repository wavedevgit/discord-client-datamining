package com.android.billingclient.api;

import android.text.TextUtils;
import java.util.ArrayList;
import java.util.List;
import org.json.JSONArray;
import org.json.JSONObject;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class Purchase {

    /* renamed from: a  reason: collision with root package name */
    private final String f7880a;

    /* renamed from: b  reason: collision with root package name */
    private final String f7881b;

    /* renamed from: c  reason: collision with root package name */
    private final JSONObject f7882c;

    public Purchase(String str, String str2) {
        this.f7880a = str;
        this.f7881b = str2;
        this.f7882c = new JSONObject(str);
    }

    private final ArrayList m() {
        ArrayList arrayList = new ArrayList();
        if (this.f7882c.has("productIds")) {
            JSONArray optJSONArray = this.f7882c.optJSONArray("productIds");
            if (optJSONArray != null) {
                for (int i10 = 0; i10 < optJSONArray.length(); i10++) {
                    arrayList.add(optJSONArray.optString(i10));
                }
            }
        } else if (this.f7882c.has("productId")) {
            arrayList.add(this.f7882c.optString("productId"));
        }
        return arrayList;
    }

    public a a() {
        JSONObject jSONObject = this.f7882c;
        String optString = jSONObject.optString("obfuscatedAccountId");
        String optString2 = jSONObject.optString("obfuscatedProfileId");
        if (optString == null && optString2 == null) {
            return null;
        }
        return new a(optString, optString2);
    }

    public String b() {
        return this.f7882c.optString("developerPayload");
    }

    public String c() {
        String optString = this.f7882c.optString("orderId");
        if (TextUtils.isEmpty(optString)) {
            return null;
        }
        return optString;
    }

    public String d() {
        return this.f7880a;
    }

    public String e() {
        return this.f7882c.optString("packageName");
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof Purchase)) {
            return false;
        }
        Purchase purchase = (Purchase) obj;
        if (TextUtils.equals(this.f7880a, purchase.d()) && TextUtils.equals(this.f7881b, purchase.j())) {
            return true;
        }
        return false;
    }

    public List f() {
        return m();
    }

    public int g() {
        if (this.f7882c.optInt("purchaseState", 1) != 4) {
            return 1;
        }
        return 2;
    }

    public long h() {
        return this.f7882c.optLong("purchaseTime");
    }

    public int hashCode() {
        return this.f7880a.hashCode();
    }

    public String i() {
        JSONObject jSONObject = this.f7882c;
        return jSONObject.optString("token", jSONObject.optString("purchaseToken"));
    }

    public String j() {
        return this.f7881b;
    }

    public boolean k() {
        return this.f7882c.optBoolean("acknowledged", true);
    }

    public boolean l() {
        return this.f7882c.optBoolean("autoRenewing");
    }

    public String toString() {
        return "Purchase. Json: ".concat(String.valueOf(this.f7880a));
    }
}
