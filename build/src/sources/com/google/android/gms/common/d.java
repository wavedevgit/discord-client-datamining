package com.google.android.gms.common;

import android.os.Parcel;
import android.os.Parcelable;
import androidx.annotation.NonNull;
import com.facebook.react.devsupport.StackTraceHelper;
import hf.o;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class d extends jf.a {
    @NonNull
    public static final Parcelable.Creator<d> CREATOR = new r();

    /* renamed from: d  reason: collision with root package name */
    private final String f14485d;

    /* renamed from: e  reason: collision with root package name */
    private final int f14486e;

    /* renamed from: i  reason: collision with root package name */
    private final long f14487i;

    /* renamed from: o  reason: collision with root package name */
    private final boolean f14488o;

    public d(String str, int i10, long j10, boolean z10) {
        this.f14485d = str;
        this.f14486e = i10;
        this.f14487i = j10;
        this.f14488o = z10;
    }

    public boolean b() {
        return this.f14488o;
    }

    public long c() {
        long j10 = this.f14487i;
        return j10 == -1 ? this.f14486e : j10;
    }

    public final boolean equals(Object obj) {
        if (obj instanceof d) {
            d dVar = (d) obj;
            if (hf.o.a(getName(), dVar.getName()) && c() == dVar.c() && b() == dVar.b()) {
                return true;
            }
        }
        return false;
    }

    public String getName() {
        return this.f14485d;
    }

    public final int hashCode() {
        return hf.o.b(getName(), Long.valueOf(c()), Boolean.valueOf(b()));
    }

    public final String toString() {
        o.a c10 = hf.o.c(this);
        c10.a(StackTraceHelper.NAME_KEY, getName());
        c10.a("version", Long.valueOf(c()));
        c10.a("is_fully_rolled_out", Boolean.valueOf(b()));
        return c10.toString();
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        int a10 = jf.c.a(parcel);
        jf.c.s(parcel, 1, getName(), false);
        jf.c.l(parcel, 2, this.f14486e);
        jf.c.o(parcel, 3, c());
        jf.c.c(parcel, 4, b());
        jf.c.b(parcel, a10);
    }

    public d(String str, long j10) {
        this(str, -1, j10, false);
    }
}
