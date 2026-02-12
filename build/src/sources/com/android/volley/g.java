package com.android.volley;

import android.text.TextUtils;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class g {

    /* renamed from: a  reason: collision with root package name */
    private final String f8784a;

    /* renamed from: b  reason: collision with root package name */
    private final String f8785b;

    public g(String str, String str2) {
        this.f8784a = str;
        this.f8785b = str2;
    }

    public final String a() {
        return this.f8784a;
    }

    public final String b() {
        return this.f8785b;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj != null && g.class == obj.getClass()) {
            g gVar = (g) obj;
            if (TextUtils.equals(this.f8784a, gVar.f8784a) && TextUtils.equals(this.f8785b, gVar.f8785b)) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return (this.f8784a.hashCode() * 31) + this.f8785b.hashCode();
    }

    public String toString() {
        return "Header[name=" + this.f8784a + ",value=" + this.f8785b + "]";
    }
}
