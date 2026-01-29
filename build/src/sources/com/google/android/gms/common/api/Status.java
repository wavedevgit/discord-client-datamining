package com.google.android.gms.common.api;

import android.app.PendingIntent;
import android.os.Parcel;
import android.os.Parcelable;
import androidx.annotation.NonNull;
import com.google.android.gms.common.internal.ReflectedParcelable;
import ef.c;
import ef.k;
import gf.o;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class Status extends hf.a implements k, ReflectedParcelable {

    /* renamed from: d  reason: collision with root package name */
    private final int f14796d;

    /* renamed from: e  reason: collision with root package name */
    private final String f14797e;

    /* renamed from: i  reason: collision with root package name */
    private final PendingIntent f14798i;

    /* renamed from: o  reason: collision with root package name */
    private final com.google.android.gms.common.b f14799o;

    /* renamed from: p  reason: collision with root package name */
    public static final Status f14788p = new Status(-1);

    /* renamed from: q  reason: collision with root package name */
    public static final Status f14789q = new Status(0);

    /* renamed from: r  reason: collision with root package name */
    public static final Status f14790r = new Status(14);

    /* renamed from: s  reason: collision with root package name */
    public static final Status f14791s = new Status(8);

    /* renamed from: t  reason: collision with root package name */
    public static final Status f14792t = new Status(15);

    /* renamed from: u  reason: collision with root package name */
    public static final Status f14793u = new Status(16);

    /* renamed from: w  reason: collision with root package name */
    public static final Status f14795w = new Status(17);

    /* renamed from: v  reason: collision with root package name */
    public static final Status f14794v = new Status(18);
    @NonNull
    public static final Parcelable.Creator<Status> CREATOR = new b();

    /* JADX INFO: Access modifiers changed from: package-private */
    public Status(int i10, String str, PendingIntent pendingIntent, com.google.android.gms.common.b bVar) {
        this.f14796d = i10;
        this.f14797e = str;
        this.f14798i = pendingIntent;
        this.f14799o = bVar;
    }

    @Override // ef.k
    public Status a() {
        return this;
    }

    public com.google.android.gms.common.b b() {
        return this.f14799o;
    }

    public PendingIntent c() {
        return this.f14798i;
    }

    public int d() {
        return this.f14796d;
    }

    public String e() {
        return this.f14797e;
    }

    public boolean equals(Object obj) {
        if (!(obj instanceof Status)) {
            return false;
        }
        Status status = (Status) obj;
        if (this.f14796d != status.f14796d || !o.a(this.f14797e, status.f14797e) || !o.a(this.f14798i, status.f14798i) || !o.a(this.f14799o, status.f14799o)) {
            return false;
        }
        return true;
    }

    public boolean f() {
        return this.f14798i != null;
    }

    public boolean g() {
        return this.f14796d <= 0;
    }

    public int hashCode() {
        return o.b(Integer.valueOf(this.f14796d), this.f14797e, this.f14798i, this.f14799o);
    }

    public final String i() {
        String str = this.f14797e;
        if (str != null) {
            return str;
        }
        return c.a(this.f14796d);
    }

    public String toString() {
        o.a c10 = o.c(this);
        c10.a("statusCode", i());
        c10.a("resolution", this.f14798i);
        return c10.toString();
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        int a10 = hf.c.a(parcel);
        hf.c.l(parcel, 1, d());
        hf.c.s(parcel, 2, e(), false);
        hf.c.q(parcel, 3, this.f14798i, i10, false);
        hf.c.q(parcel, 4, b(), i10, false);
        hf.c.b(parcel, a10);
    }

    public Status(int i10) {
        this(i10, (String) null);
    }

    public Status(com.google.android.gms.common.b bVar, String str) {
        this(bVar, str, 17);
    }

    public Status(int i10, String str) {
        this(i10, str, (PendingIntent) null);
    }

    public Status(com.google.android.gms.common.b bVar, String str, int i10) {
        this(i10, str, bVar.d(), bVar);
    }

    public Status(int i10, String str, PendingIntent pendingIntent) {
        this(i10, str, pendingIntent, null);
    }
}
