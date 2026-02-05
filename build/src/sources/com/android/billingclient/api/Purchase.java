package com.android.billingclient.api;

import android.text.TextUtils;
import java.util.ArrayList;
import java.util.List;
import org.json.JSONArray;
import org.json.JSONObject;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class Purchase {

    /* renamed from: a  reason: collision with root package name */
    private final String f7981a;

    /* renamed from: b  reason: collision with root package name */
    private final String f7982b;

    /* renamed from: c  reason: collision with root package name */
    private final JSONObject f7983c;

    public Purchase(String str, String str2) {
        this.f7981a = str;
        this.f7982b = str2;
        this.f7983c = new JSONObject(str);
    }

    private final ArrayList m() {
        ArrayList arrayList = new ArrayList();
        if (this.f7983c.has("productIds")) {
            JSONArray optJSONArray = this.f7983c.optJSONArray("productIds");
            if (optJSONArray != null) {
                for (int i10 = 0; i10 < optJSONArray.length(); i10++) {
                    arrayList.add(optJSONArray.optString(i10));
                }
            }
        } else if (this.f7983c.has("productId")) {
            arrayList.add(this.f7983c.optString("productId"));
        }
        return arrayList;
    }

    public a a() {
        JSONObject jSONObject = this.f7983c;
        String optString = jSONObject.optString("obfuscatedAccountId");
        String optString2 = jSONObject.optString("obfuscatedProfileId");
        if (optString == null && optString2 == null) {
            return null;
        }
        return new a(optString, optString2);
    }

    public String b() {
        return this.f7983c.optString("developerPayload");
    }

    public String c() {
        String optString = this.f7983c.optString("orderId");
        if (TextUtils.isEmpty(optString)) {
            return null;
        }
        return optString;
    }

    public String d() {
        return this.f7981a;
    }

    public String e() {
        return this.f7983c.optString("packageName");
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof Purchase)) {
            return false;
        }
        Purchase purchase = (Purchase) obj;
        if (TextUtils.equals(this.f7981a, purchase.d()) && TextUtils.equals(this.f7982b, purchase.j())) {
            return true;
        }
        return false;
    }

    public List f() {
        return m();
    }

    public int g() {
        if (this.f7983c.optInt("purchaseState", 1) != 4) {
            return 1;
        }
        return 2;
    }

    public long h() {
        return this.f7983c.optLong("purchaseTime");
    }

    public int hashCode() {
        return this.f7981a.hashCode();
    }

    public String i() {
        JSONObject jSONObject = this.f7983c;
        return jSONObject.optString("token", jSONObject.optString("purchaseToken"));
    }

    public String j() {
        return this.f7982b;
    }

    public boolean k() {
        return this.f7983c.optBoolean("acknowledged", true);
    }

    public boolean l() {
        return this.f7983c.optBoolean("autoRenewing");
    }

    public String toString() {
        return "Purchase. Json: ".concat(String.valueOf(this.f7981a));
    }
}
