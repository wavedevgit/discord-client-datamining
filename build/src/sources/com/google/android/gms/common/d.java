package com.google.android.gms.common;

import android.os.Parcel;
import android.os.Parcelable;
import androidx.annotation.NonNull;
import com.facebook.react.devsupport.StackTraceHelper;
import gf.o;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class d extends hf.a {
    @NonNull
    public static final Parcelable.Creator<d> CREATOR = new p();

    /* renamed from: d  reason: collision with root package name */
    private final String f14439d;

    /* renamed from: e  reason: collision with root package name */
    private final int f14440e;

    /* renamed from: i  reason: collision with root package name */
    private final long f14441i;

    public d(String str, int i10, long j10) {
        this.f14439d = str;
        this.f14440e = i10;
        this.f14441i = j10;
    }

    public long b() {
        long j10 = this.f14441i;
        return j10 == -1 ? this.f14440e : j10;
    }

    public final boolean equals(Object obj) {
        if (obj instanceof d) {
            d dVar = (d) obj;
            if (((getName() != null && getName().equals(dVar.getName())) || (getName() == null && dVar.getName() == null)) && b() == dVar.b()) {
                return true;
            }
        }
        return false;
    }

    public String getName() {
        return this.f14439d;
    }

    public final int hashCode() {
        return gf.o.b(getName(), Long.valueOf(b()));
    }

    public final String toString() {
        o.a c10 = gf.o.c(this);
        c10.a(StackTraceHelper.NAME_KEY, getName());
        c10.a("version", Long.valueOf(b()));
        return c10.toString();
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        int a10 = hf.c.a(parcel);
        hf.c.s(parcel, 1, getName(), false);
        hf.c.l(parcel, 2, this.f14440e);
        hf.c.o(parcel, 3, b());
        hf.c.b(parcel, a10);
    }

    public d(String str, long j10) {
        this.f14439d = str;
        this.f14441i = j10;
        this.f14440e = -1;
    }
}
