package com.dooboolab.rniap;

import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class a {

    /* renamed from: a  reason: collision with root package name */
    private final String f9460a;

    /* renamed from: b  reason: collision with root package name */
    private final String f9461b;

    public a(String code, String message) {
        Intrinsics.checkNotNullParameter(code, "code");
        Intrinsics.checkNotNullParameter(message, "message");
        this.f9460a = code;
        this.f9461b = message;
    }

    public final String a() {
        return this.f9460a;
    }

    public final String b() {
        return this.f9461b;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof a) {
            a aVar = (a) obj;
            return Intrinsics.areEqual(this.f9460a, aVar.f9460a) && Intrinsics.areEqual(this.f9461b, aVar.f9461b);
        }
        return false;
    }

    public int hashCode() {
        return (this.f9460a.hashCode() * 31) + this.f9461b.hashCode();
    }

    public String toString() {
        String str = this.f9460a;
        String str2 = this.f9461b;
        return "BillingResponse(code=" + str + ", message=" + str2 + ")";
    }
}
