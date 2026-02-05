package com.android.volley;

import android.text.TextUtils;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class g {

    /* renamed from: a  reason: collision with root package name */
    private final String f8167a;

    /* renamed from: b  reason: collision with root package name */
    private final String f8168b;

    public g(String str, String str2) {
        this.f8167a = str;
        this.f8168b = str2;
    }

    public final String a() {
        return this.f8167a;
    }

    public final String b() {
        return this.f8168b;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj != null && g.class == obj.getClass()) {
            g gVar = (g) obj;
            if (TextUtils.equals(this.f8167a, gVar.f8167a) && TextUtils.equals(this.f8168b, gVar.f8168b)) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return (this.f8167a.hashCode() * 31) + this.f8168b.hashCode();
    }

    public String toString() {
        return "Header[name=" + this.f8167a + ",value=" + this.f8168b + "]";
    }
}
