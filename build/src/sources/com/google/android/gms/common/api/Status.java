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
    private final int f13741d;

    /* renamed from: e  reason: collision with root package name */
    private final String f13742e;

    /* renamed from: i  reason: collision with root package name */
    private final PendingIntent f13743i;

    /* renamed from: o  reason: collision with root package name */
    private final com.google.android.gms.common.b f13744o;

    /* renamed from: p  reason: collision with root package name */
    public static final Status f13733p = new Status(-1);

    /* renamed from: q  reason: collision with root package name */
    public static final Status f13734q = new Status(0);

    /* renamed from: r  reason: collision with root package name */
    public static final Status f13735r = new Status(14);

    /* renamed from: s  reason: collision with root package name */
    public static final Status f13736s = new Status(8);

    /* renamed from: t  reason: collision with root package name */
    public static final Status f13737t = new Status(15);

    /* renamed from: u  reason: collision with root package name */
    public static final Status f13738u = new Status(16);

    /* renamed from: v  reason: collision with root package name */
    public static final Status f13739v = new Status(17);

    /* renamed from: w  reason: collision with root package name */
    public static final Status f13740w = new Status(18);
    @NonNull
    public static final Parcelable.Creator<Status> CREATOR = new b();

    /* JADX INFO: Access modifiers changed from: package-private */
    public Status(int i10, String str, PendingIntent pendingIntent, com.google.android.gms.common.b bVar) {
        this.f13741d = i10;
        this.f13742e = str;
        this.f13743i = pendingIntent;
        this.f13744o = bVar;
    }

    @Override // ef.k
    public Status a() {
        return this;
    }

    public com.google.android.gms.common.b b() {
        return this.f13744o;
    }

    public PendingIntent c() {
        return this.f13743i;
    }

    public int d() {
        return this.f13741d;
    }

    public String e() {
        return this.f13742e;
    }

    public boolean equals(Object obj) {
        if (!(obj instanceof Status)) {
            return false;
        }
        Status status = (Status) obj;
        if (this.f13741d != status.f13741d || !o.a(this.f13742e, status.f13742e) || !o.a(this.f13743i, status.f13743i) || !o.a(this.f13744o, status.f13744o)) {
            return false;
        }
        return true;
    }

    public boolean f() {
        return this.f13743i != null;
    }

    public boolean h() {
        return this.f13741d <= 0;
    }

    public int hashCode() {
        return o.b(Integer.valueOf(this.f13741d), this.f13742e, this.f13743i, this.f13744o);
    }

    public final String i() {
        String str = this.f13742e;
        if (str != null) {
            return str;
        }
        return c.a(this.f13741d);
    }

    public String toString() {
        o.a c10 = o.c(this);
        c10.a("statusCode", i());
        c10.a("resolution", this.f13743i);
        return c10.toString();
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        int a10 = hf.c.a(parcel);
        hf.c.l(parcel, 1, d());
        hf.c.s(parcel, 2, e(), false);
        hf.c.q(parcel, 3, this.f13743i, i10, false);
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
        this(i10, str, bVar.e(), bVar);
    }

    public Status(int i10, String str, PendingIntent pendingIntent) {
        this(i10, str, pendingIntent, null);
    }
}
