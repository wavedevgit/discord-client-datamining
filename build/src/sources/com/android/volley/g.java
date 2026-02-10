package com.android.volley;

import android.text.TextUtils;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class g {

    /* renamed from: a  reason: collision with root package name */
    private final String f8206a;

    /* renamed from: b  reason: collision with root package name */
    private final String f8207b;

    public g(String str, String str2) {
        this.f8206a = str;
        this.f8207b = str2;
    }

    public final String a() {
        return this.f8206a;
    }

    public final String b() {
        return this.f8207b;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj != null && g.class == obj.getClass()) {
            g gVar = (g) obj;
            if (TextUtils.equals(this.f8206a, gVar.f8206a) && TextUtils.equals(this.f8207b, gVar.f8207b)) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return (this.f8206a.hashCode() * 31) + this.f8207b.hashCode();
    }

    public String toString() {
        return "Header[name=" + this.f8206a + ",value=" + this.f8207b + "]";
    }
}
