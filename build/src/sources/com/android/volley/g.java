package com.android.volley;

import android.text.TextUtils;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class g {

    /* renamed from: a  reason: collision with root package name */
    private final String f7782a;

    /* renamed from: b  reason: collision with root package name */
    private final String f7783b;

    public g(String str, String str2) {
        this.f7782a = str;
        this.f7783b = str2;
    }

    public final String a() {
        return this.f7782a;
    }

    public final String b() {
        return this.f7783b;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj != null && g.class == obj.getClass()) {
            g gVar = (g) obj;
            if (TextUtils.equals(this.f7782a, gVar.f7782a) && TextUtils.equals(this.f7783b, gVar.f7783b)) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return (this.f7782a.hashCode() * 31) + this.f7783b.hashCode();
    }

    public String toString() {
        return "Header[name=" + this.f7782a + ",value=" + this.f7783b + "]";
    }
}
