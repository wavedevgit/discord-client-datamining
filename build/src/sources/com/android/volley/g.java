package com.android.volley;

import android.text.TextUtils;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class g {

    /* renamed from: a  reason: collision with root package name */
    private final String f8814a;

    /* renamed from: b  reason: collision with root package name */
    private final String f8815b;

    public g(String str, String str2) {
        this.f8814a = str;
        this.f8815b = str2;
    }

    public final String a() {
        return this.f8814a;
    }

    public final String b() {
        return this.f8815b;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj != null && g.class == obj.getClass()) {
            g gVar = (g) obj;
            if (TextUtils.equals(this.f8814a, gVar.f8814a) && TextUtils.equals(this.f8815b, gVar.f8815b)) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return (this.f8814a.hashCode() * 31) + this.f8815b.hashCode();
    }

    public String toString() {
        return "Header[name=" + this.f8814a + ",value=" + this.f8815b + "]";
    }
}
