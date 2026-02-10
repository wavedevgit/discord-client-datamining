package com.android.volley;

import android.text.TextUtils;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class g {

    /* renamed from: a  reason: collision with root package name */
    private final String f8783a;

    /* renamed from: b  reason: collision with root package name */
    private final String f8784b;

    public g(String str, String str2) {
        this.f8783a = str;
        this.f8784b = str2;
    }

    public final String a() {
        return this.f8783a;
    }

    public final String b() {
        return this.f8784b;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj != null && g.class == obj.getClass()) {
            g gVar = (g) obj;
            if (TextUtils.equals(this.f8783a, gVar.f8783a) && TextUtils.equals(this.f8784b, gVar.f8784b)) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return (this.f8783a.hashCode() * 31) + this.f8784b.hashCode();
    }

    public String toString() {
        return "Header[name=" + this.f8783a + ",value=" + this.f8784b + "]";
    }
}
