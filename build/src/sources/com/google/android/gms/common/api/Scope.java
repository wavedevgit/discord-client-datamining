package com.google.android.gms.common.api;

import android.os.Parcel;
import android.os.Parcelable;
import androidx.annotation.NonNull;
import com.google.android.gms.common.internal.ReflectedParcelable;
import hf.q;
import jf.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class Scope extends jf.a implements ReflectedParcelable {
    @NonNull
    public static final Parcelable.Creator<Scope> CREATOR = new a();

    /* renamed from: d  reason: collision with root package name */
    final int f14449d;

    /* renamed from: e  reason: collision with root package name */
    private final String f14450e;

    /* JADX INFO: Access modifiers changed from: package-private */
    public Scope(int i10, String str) {
        q.g(str, "scopeUri must not be null or empty");
        this.f14449d = i10;
        this.f14450e = str;
    }

    public String b() {
        return this.f14450e;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof Scope)) {
            return false;
        }
        return this.f14450e.equals(((Scope) obj).f14450e);
    }

    public int hashCode() {
        return this.f14450e.hashCode();
    }

    public String toString() {
        return this.f14450e;
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        int i11 = this.f14449d;
        int a10 = c.a(parcel);
        c.l(parcel, 1, i11);
        c.s(parcel, 2, b(), false);
        c.b(parcel, a10);
    }

    public Scope(String str) {
        this(1, str);
    }
}
