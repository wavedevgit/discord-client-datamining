package com.dooboolab.rniap;

import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class a {

    /* renamed from: a  reason: collision with root package name */
    private final String f10492a;

    /* renamed from: b  reason: collision with root package name */
    private final String f10493b;

    public a(String code, String message) {
        Intrinsics.checkNotNullParameter(code, "code");
        Intrinsics.checkNotNullParameter(message, "message");
        this.f10492a = code;
        this.f10493b = message;
    }

    public final String a() {
        return this.f10492a;
    }

    public final String b() {
        return this.f10493b;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof a) {
            a aVar = (a) obj;
            return Intrinsics.areEqual(this.f10492a, aVar.f10492a) && Intrinsics.areEqual(this.f10493b, aVar.f10493b);
        }
        return false;
    }

    public int hashCode() {
        return (this.f10492a.hashCode() * 31) + this.f10493b.hashCode();
    }

    public String toString() {
        String str = this.f10492a;
        String str2 = this.f10493b;
        return "BillingResponse(code=" + str + ", message=" + str2 + ")";
    }
}
