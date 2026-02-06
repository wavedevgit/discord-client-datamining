package com.android.volley;

import android.text.TextUtils;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class g {

    /* renamed from: a  reason: collision with root package name */
    private final String f8066a;

    /* renamed from: b  reason: collision with root package name */
    private final String f8067b;

    public g(String str, String str2) {
        this.f8066a = str;
        this.f8067b = str2;
    }

    public final String a() {
        return this.f8066a;
    }

    public final String b() {
        return this.f8067b;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj != null && g.class == obj.getClass()) {
            g gVar = (g) obj;
            if (TextUtils.equals(this.f8066a, gVar.f8066a) && TextUtils.equals(this.f8067b, gVar.f8067b)) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return (this.f8066a.hashCode() * 31) + this.f8067b.hashCode();
    }

    public String toString() {
        return "Header[name=" + this.f8066a + ",value=" + this.f8067b + "]";
    }
}
