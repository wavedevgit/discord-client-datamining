package com.android.volley;

import android.text.TextUtils;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class g {

    /* renamed from: a  reason: collision with root package name */
    private final String f9185a;

    /* renamed from: b  reason: collision with root package name */
    private final String f9186b;

    public g(String str, String str2) {
        this.f9185a = str;
        this.f9186b = str2;
    }

    public final String a() {
        return this.f9185a;
    }

    public final String b() {
        return this.f9186b;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj != null && g.class == obj.getClass()) {
            g gVar = (g) obj;
            if (TextUtils.equals(this.f9185a, gVar.f9185a) && TextUtils.equals(this.f9186b, gVar.f9186b)) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return (this.f9185a.hashCode() * 31) + this.f9186b.hashCode();
    }

    public String toString() {
        return "Header[name=" + this.f9185a + ",value=" + this.f9186b + "]";
    }
}
