package com.dooboolab.rniap;

import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class a {

    /* renamed from: a  reason: collision with root package name */
    private final String f9884a;

    /* renamed from: b  reason: collision with root package name */
    private final String f9885b;

    public a(String code, String message) {
        Intrinsics.checkNotNullParameter(code, "code");
        Intrinsics.checkNotNullParameter(message, "message");
        this.f9884a = code;
        this.f9885b = message;
    }

    public final String a() {
        return this.f9884a;
    }

    public final String b() {
        return this.f9885b;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof a) {
            a aVar = (a) obj;
            return Intrinsics.areEqual(this.f9884a, aVar.f9884a) && Intrinsics.areEqual(this.f9885b, aVar.f9885b);
        }
        return false;
    }

    public int hashCode() {
        return (this.f9884a.hashCode() * 31) + this.f9885b.hashCode();
    }

    public String toString() {
        String str = this.f9884a;
        String str2 = this.f9885b;
        return "BillingResponse(code=" + str + ", message=" + str2 + ")";
    }
}
