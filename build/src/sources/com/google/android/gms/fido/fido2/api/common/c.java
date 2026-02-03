package com.google.android.gms.fido.fido2.api.common;

import android.os.Parcel;
import android.os.Parcelable;
import gf.o;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class c extends hf.a {
    public static final Parcelable.Creator<c> CREATOR = new d();

    /* renamed from: d  reason: collision with root package name */
    private final String f14586d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public c(String str) {
        this.f14586d = str;
    }

    public final boolean equals(Object obj) {
        if (!(obj instanceof c)) {
            return false;
        }
        return o.a(this.f14586d, ((c) obj).f14586d);
    }

    public final int hashCode() {
        return o.b(this.f14586d);
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        String str = this.f14586d;
        int a10 = hf.c.a(parcel);
        hf.c.s(parcel, 1, str, false);
        hf.c.b(parcel, a10);
    }
}
