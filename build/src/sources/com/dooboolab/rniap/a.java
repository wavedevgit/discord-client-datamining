package com.dooboolab.rniap;

import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class a {

    /* renamed from: a  reason: collision with root package name */
    private final String f9744a;

    /* renamed from: b  reason: collision with root package name */
    private final String f9745b;

    public a(String code, String message) {
        Intrinsics.checkNotNullParameter(code, "code");
        Intrinsics.checkNotNullParameter(message, "message");
        this.f9744a = code;
        this.f9745b = message;
    }

    public final String a() {
        return this.f9744a;
    }

    public final String b() {
        return this.f9745b;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof a) {
            a aVar = (a) obj;
            return Intrinsics.areEqual(this.f9744a, aVar.f9744a) && Intrinsics.areEqual(this.f9745b, aVar.f9745b);
        }
        return false;
    }

    public int hashCode() {
        return (this.f9744a.hashCode() * 31) + this.f9745b.hashCode();
    }

    public String toString() {
        String str = this.f9744a;
        String str2 = this.f9745b;
        return "BillingResponse(code=" + str + ", message=" + str2 + ")";
    }
}
