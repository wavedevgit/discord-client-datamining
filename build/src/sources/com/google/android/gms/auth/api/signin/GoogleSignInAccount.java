package com.google.android.gms.auth.api.signin;

import android.net.Uri;
import android.os.Parcel;
import android.os.Parcelable;
import android.text.TextUtils;
import androidx.annotation.NonNull;
import com.facebook.react.devsupport.StackTraceHelper;
import com.google.android.gms.auth.api.signin.GoogleSignInAccount;
import com.google.android.gms.common.api.Scope;
import com.google.android.gms.common.internal.ReflectedParcelable;
import gf.q;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collection;
import java.util.Comparator;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;
@Deprecated
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class GoogleSignInAccount extends hf.a implements ReflectedParcelable {
    @NonNull
    public static final Parcelable.Creator<GoogleSignInAccount> CREATOR = new c();

    /* renamed from: y  reason: collision with root package name */
    public static final com.google.android.gms.common.util.d f13305y = com.google.android.gms.common.util.f.c();

    /* renamed from: d  reason: collision with root package name */
    final int f13306d;

    /* renamed from: e  reason: collision with root package name */
    private final String f13307e;

    /* renamed from: i  reason: collision with root package name */
    private final String f13308i;

    /* renamed from: o  reason: collision with root package name */
    private final String f13309o;

    /* renamed from: p  reason: collision with root package name */
    private final String f13310p;

    /* renamed from: q  reason: collision with root package name */
    private final Uri f13311q;

    /* renamed from: r  reason: collision with root package name */
    private String f13312r;

    /* renamed from: s  reason: collision with root package name */
    private final long f13313s;

    /* renamed from: t  reason: collision with root package name */
    private final String f13314t;

    /* renamed from: u  reason: collision with root package name */
    final List f13315u;

    /* renamed from: v  reason: collision with root package name */
    private final String f13316v;

    /* renamed from: w  reason: collision with root package name */
    private final String f13317w;

    /* renamed from: x  reason: collision with root package name */
    private final Set f13318x = new HashSet();

    /* JADX INFO: Access modifiers changed from: package-private */
    public GoogleSignInAccount(int i10, String str, String str2, String str3, String str4, Uri uri, String str5, long j10, String str6, List list, String str7, String str8) {
        this.f13306d = i10;
        this.f13307e = str;
        this.f13308i = str2;
        this.f13309o = str3;
        this.f13310p = str4;
        this.f13311q = uri;
        this.f13312r = str5;
        this.f13313s = j10;
        this.f13314t = str6;
        this.f13315u = list;
        this.f13316v = str7;
        this.f13317w = str8;
    }

    public static GoogleSignInAccount m(String str, String str2, String str3, String str4, String str5, String str6, Uri uri, Long l10, String str7, Set set) {
        return new GoogleSignInAccount(3, str, str2, str3, str4, uri, null, l10.longValue(), q.f(str7), new ArrayList((Collection) q.l(set)), str5, str6);
    }

    public static GoogleSignInAccount n(String str) {
        Uri uri;
        String str2;
        String str3;
        String str4;
        String str5;
        String str6;
        String str7 = null;
        if (TextUtils.isEmpty(str)) {
            return null;
        }
        JSONObject jSONObject = new JSONObject(str);
        String optString = jSONObject.optString("photoUrl");
        if (!TextUtils.isEmpty(optString)) {
            uri = Uri.parse(optString);
        } else {
            uri = null;
        }
        long parseLong = Long.parseLong(jSONObject.getString("expirationTime"));
        HashSet hashSet = new HashSet();
        JSONArray jSONArray = jSONObject.getJSONArray("grantedScopes");
        int length = jSONArray.length();
        for (int i10 = 0; i10 < length; i10++) {
            hashSet.add(new Scope(jSONArray.getString(i10)));
        }
        String optString2 = jSONObject.optString(StackTraceHelper.ID_KEY);
        if (jSONObject.has("tokenId")) {
            str2 = jSONObject.optString("tokenId");
        } else {
            str2 = null;
        }
        if (jSONObject.has("email")) {
            str3 = jSONObject.optString("email");
        } else {
            str3 = null;
        }
        if (jSONObject.has("displayName")) {
            str4 = jSONObject.optString("displayName");
        } else {
            str4 = null;
        }
        if (jSONObject.has("givenName")) {
            str5 = jSONObject.optString("givenName");
        } else {
            str5 = null;
        }
        if (jSONObject.has("familyName")) {
            str6 = jSONObject.optString("familyName");
        } else {
            str6 = null;
        }
        GoogleSignInAccount m10 = m(optString2, str2, str3, str4, str5, str6, uri, Long.valueOf(parseLong), jSONObject.getString("obfuscatedIdentifier"), hashSet);
        if (jSONObject.has("serverAuthCode")) {
            str7 = jSONObject.optString("serverAuthCode");
        }
        m10.f13312r = str7;
        return m10;
    }

    public String b() {
        return this.f13310p;
    }

    public String c() {
        return this.f13309o;
    }

    public String d() {
        return this.f13317w;
    }

    public String e() {
        return this.f13316v;
    }

    public boolean equals(Object obj) {
        if (obj == null) {
            return false;
        }
        if (obj == this) {
            return true;
        }
        if (!(obj instanceof GoogleSignInAccount)) {
            return false;
        }
        GoogleSignInAccount googleSignInAccount = (GoogleSignInAccount) obj;
        if (!googleSignInAccount.f13314t.equals(this.f13314t) || !googleSignInAccount.j().equals(j())) {
            return false;
        }
        return true;
    }

    public String f() {
        return this.f13307e;
    }

    public String g() {
        return this.f13308i;
    }

    public int hashCode() {
        return ((this.f13314t.hashCode() + 527) * 31) + j().hashCode();
    }

    public Uri i() {
        return this.f13311q;
    }

    public Set j() {
        HashSet hashSet = new HashSet(this.f13315u);
        hashSet.addAll(this.f13318x);
        return hashSet;
    }

    public String k() {
        return this.f13312r;
    }

    public final String o() {
        return this.f13314t;
    }

    public final String p() {
        JSONObject jSONObject = new JSONObject();
        try {
            if (f() != null) {
                jSONObject.put(StackTraceHelper.ID_KEY, f());
            }
            if (g() != null) {
                jSONObject.put("tokenId", g());
            }
            if (c() != null) {
                jSONObject.put("email", c());
            }
            if (b() != null) {
                jSONObject.put("displayName", b());
            }
            if (e() != null) {
                jSONObject.put("givenName", e());
            }
            if (d() != null) {
                jSONObject.put("familyName", d());
            }
            Uri i10 = i();
            if (i10 != null) {
                jSONObject.put("photoUrl", i10.toString());
            }
            if (k() != null) {
                jSONObject.put("serverAuthCode", k());
            }
            jSONObject.put("expirationTime", this.f13313s);
            jSONObject.put("obfuscatedIdentifier", this.f13314t);
            JSONArray jSONArray = new JSONArray();
            List list = this.f13315u;
            Scope[] scopeArr = (Scope[]) list.toArray(new Scope[list.size()]);
            Arrays.sort(scopeArr, new Comparator() { // from class: ye.b
                @Override // java.util.Comparator
                public final int compare(Object obj, Object obj2) {
                    Parcelable.Creator<GoogleSignInAccount> creator = GoogleSignInAccount.CREATOR;
                    return ((Scope) obj).b().compareTo(((Scope) obj2).b());
                }
            });
            for (Scope scope : scopeArr) {
                jSONArray.put(scope.b());
            }
            jSONObject.put("grantedScopes", jSONArray);
            jSONObject.remove("serverAuthCode");
            return jSONObject.toString();
        } catch (JSONException e10) {
            throw new RuntimeException(e10);
        }
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        int a10 = hf.c.a(parcel);
        hf.c.l(parcel, 1, this.f13306d);
        hf.c.s(parcel, 2, f(), false);
        hf.c.s(parcel, 3, g(), false);
        hf.c.s(parcel, 4, c(), false);
        hf.c.s(parcel, 5, b(), false);
        hf.c.q(parcel, 6, i(), i10, false);
        hf.c.s(parcel, 7, k(), false);
        hf.c.o(parcel, 8, this.f13313s);
        hf.c.s(parcel, 9, this.f13314t, false);
        hf.c.w(parcel, 10, this.f13315u, false);
        hf.c.s(parcel, 11, e(), false);
        hf.c.s(parcel, 12, d(), false);
        hf.c.b(parcel, a10);
    }
}
