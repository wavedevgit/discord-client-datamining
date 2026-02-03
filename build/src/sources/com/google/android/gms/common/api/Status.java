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
    private final int f13393d;

    /* renamed from: e  reason: collision with root package name */
    private final String f13394e;

    /* renamed from: i  reason: collision with root package name */
    private final PendingIntent f13395i;

    /* renamed from: o  reason: collision with root package name */
    private final com.google.android.gms.common.b f13396o;

    /* renamed from: p  reason: collision with root package name */
    public static final Status f13385p = new Status(-1);

    /* renamed from: q  reason: collision with root package name */
    public static final Status f13386q = new Status(0);

    /* renamed from: r  reason: collision with root package name */
    public static final Status f13387r = new Status(14);

    /* renamed from: s  reason: collision with root package name */
    public static final Status f13388s = new Status(8);

    /* renamed from: t  reason: collision with root package name */
    public static final Status f13389t = new Status(15);

    /* renamed from: u  reason: collision with root package name */
    public static final Status f13390u = new Status(16);

    /* renamed from: w  reason: collision with root package name */
    public static final Status f13392w = new Status(17);

    /* renamed from: v  reason: collision with root package name */
    public static final Status f13391v = new Status(18);
    @NonNull
    public static final Parcelable.Creator<Status> CREATOR = new b();

    /* JADX INFO: Access modifiers changed from: package-private */
    public Status(int i10, String str, PendingIntent pendingIntent, com.google.android.gms.common.b bVar) {
        this.f13393d = i10;
        this.f13394e = str;
        this.f13395i = pendingIntent;
        this.f13396o = bVar;
    }

    @Override // ef.k
    public Status a() {
        return this;
    }

    public com.google.android.gms.common.b b() {
        return this.f13396o;
    }

    public PendingIntent c() {
        return this.f13395i;
    }

    public int d() {
        return this.f13393d;
    }

    public String e() {
        return this.f13394e;
    }

    public boolean equals(Object obj) {
        if (!(obj instanceof Status)) {
            return false;
        }
        Status status = (Status) obj;
        if (this.f13393d != status.f13393d || !o.a(this.f13394e, status.f13394e) || !o.a(this.f13395i, status.f13395i) || !o.a(this.f13396o, status.f13396o)) {
            return false;
        }
        return true;
    }

    public boolean f() {
        return this.f13395i != null;
    }

    public boolean g() {
        return this.f13393d <= 0;
    }

    public int hashCode() {
        return o.b(Integer.valueOf(this.f13393d), this.f13394e, this.f13395i, this.f13396o);
    }

    public final String i() {
        String str = this.f13394e;
        if (str != null) {
            return str;
        }
        return c.a(this.f13393d);
    }

    public String toString() {
        o.a c10 = o.c(this);
        c10.a("statusCode", i());
        c10.a("resolution", this.f13395i);
        return c10.toString();
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        int a10 = hf.c.a(parcel);
        hf.c.l(parcel, 1, d());
        hf.c.s(parcel, 2, e(), false);
        hf.c.q(parcel, 3, this.f13395i, i10, false);
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
