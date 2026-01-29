package com.dooboolab.rniap;

import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class a {

    /* renamed from: a  reason: collision with root package name */
    private final String f10863a;

    /* renamed from: b  reason: collision with root package name */
    private final String f10864b;

    public a(String code, String message) {
        Intrinsics.checkNotNullParameter(code, "code");
        Intrinsics.checkNotNullParameter(message, "message");
        this.f10863a = code;
        this.f10864b = message;
    }

    public final String a() {
        return this.f10863a;
    }

    public final String b() {
        return this.f10864b;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof a) {
            a aVar = (a) obj;
            return Intrinsics.areEqual(this.f10863a, aVar.f10863a) && Intrinsics.areEqual(this.f10864b, aVar.f10864b);
        }
        return false;
    }

    public int hashCode() {
        return (this.f10863a.hashCode() * 31) + this.f10864b.hashCode();
    }

    public String toString() {
        String str = this.f10863a;
        String str2 = this.f10864b;
        return "BillingResponse(code=" + str + ", message=" + str2 + ")";
    }
}
