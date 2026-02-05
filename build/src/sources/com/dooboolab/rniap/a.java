package com.dooboolab.rniap;

import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class a {

    /* renamed from: a  reason: collision with root package name */
    private final String f9845a;

    /* renamed from: b  reason: collision with root package name */
    private final String f9846b;

    public a(String code, String message) {
        Intrinsics.checkNotNullParameter(code, "code");
        Intrinsics.checkNotNullParameter(message, "message");
        this.f9845a = code;
        this.f9846b = message;
    }

    public final String a() {
        return this.f9845a;
    }

    public final String b() {
        return this.f9846b;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof a) {
            a aVar = (a) obj;
            return Intrinsics.areEqual(this.f9845a, aVar.f9845a) && Intrinsics.areEqual(this.f9846b, aVar.f9846b);
        }
        return false;
    }

    public int hashCode() {
        return (this.f9845a.hashCode() * 31) + this.f9846b.hashCode();
    }

    public String toString() {
        String str = this.f9845a;
        String str2 = this.f9846b;
        return "BillingResponse(code=" + str + ", message=" + str2 + ")";
    }
}
