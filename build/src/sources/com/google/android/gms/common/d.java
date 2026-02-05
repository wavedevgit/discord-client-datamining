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
    private final String f13801d;

    /* renamed from: e  reason: collision with root package name */
    private final int f13802e;

    /* renamed from: i  reason: collision with root package name */
    private final long f13803i;

    /* renamed from: o  reason: collision with root package name */
    private final boolean f13804o;

    public d(String str, int i10, long j10, boolean z10) {
        this.f13801d = str;
        this.f13802e = i10;
        this.f13803i = j10;
        this.f13804o = z10;
    }

    public boolean b() {
        return this.f13804o;
    }

    public long c() {
        long j10 = this.f13803i;
        return j10 == -1 ? this.f13802e : j10;
    }

    public final boolean equals(Object obj) {
        if (obj instanceof d) {
            d dVar = (d) obj;
            if (gf.o.a(getName(), dVar.getName()) && c() == dVar.c() && b() == dVar.b()) {
                return true;
            }
        }
        return false;
    }

    public String getName() {
        return this.f13801d;
    }

    public final int hashCode() {
        return gf.o.b(getName(), Long.valueOf(c()), Boolean.valueOf(b()));
    }

    public final String toString() {
        o.a c10 = gf.o.c(this);
        c10.a(StackTraceHelper.NAME_KEY, getName());
        c10.a("version", Long.valueOf(c()));
        c10.a("is_fully_rolled_out", Boolean.valueOf(b()));
        return c10.toString();
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        int a10 = hf.c.a(parcel);
        hf.c.s(parcel, 1, getName(), false);
        hf.c.l(parcel, 2, this.f13802e);
        hf.c.o(parcel, 3, c());
        hf.c.c(parcel, 4, b());
        hf.c.b(parcel, a10);
    }

    public d(String str, long j10) {
        this(str, -1, j10, false);
    }
}
