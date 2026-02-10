package com.google.android.gms.common.api;

import android.app.PendingIntent;
import android.os.Parcel;
import android.os.Parcelable;
import androidx.annotation.NonNull;
import com.google.android.gms.common.internal.ReflectedParcelable;
import ff.c;
import ff.k;
import hf.o;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class Status extends jf.a implements k, ReflectedParcelable {

    /* renamed from: d  reason: collision with root package name */
    private final int f13881d;

    /* renamed from: e  reason: collision with root package name */
    private final String f13882e;

    /* renamed from: i  reason: collision with root package name */
    private final PendingIntent f13883i;

    /* renamed from: o  reason: collision with root package name */
    private final com.google.android.gms.common.b f13884o;

    /* renamed from: p  reason: collision with root package name */
    public static final Status f13873p = new Status(-1);

    /* renamed from: q  reason: collision with root package name */
    public static final Status f13874q = new Status(0);

    /* renamed from: r  reason: collision with root package name */
    public static final Status f13875r = new Status(14);

    /* renamed from: s  reason: collision with root package name */
    public static final Status f13876s = new Status(8);

    /* renamed from: t  reason: collision with root package name */
    public static final Status f13877t = new Status(15);

    /* renamed from: u  reason: collision with root package name */
    public static final Status f13878u = new Status(16);

    /* renamed from: v  reason: collision with root package name */
    public static final Status f13879v = new Status(17);

    /* renamed from: w  reason: collision with root package name */
    public static final Status f13880w = new Status(18);
    @NonNull
    public static final Parcelable.Creator<Status> CREATOR = new b();

    /* JADX INFO: Access modifiers changed from: package-private */
    public Status(int i10, String str, PendingIntent pendingIntent, com.google.android.gms.common.b bVar) {
        this.f13881d = i10;
        this.f13882e = str;
        this.f13883i = pendingIntent;
        this.f13884o = bVar;
    }

    @Override // ff.k
    public Status a() {
        return this;
    }

    public com.google.android.gms.common.b b() {
        return this.f13884o;
    }

    public PendingIntent c() {
        return this.f13883i;
    }

    public int d() {
        return this.f13881d;
    }

    public String e() {
        return this.f13882e;
    }

    public boolean equals(Object obj) {
        if (!(obj instanceof Status)) {
            return false;
        }
        Status status = (Status) obj;
        if (this.f13881d != status.f13881d || !o.a(this.f13882e, status.f13882e) || !o.a(this.f13883i, status.f13883i) || !o.a(this.f13884o, status.f13884o)) {
            return false;
        }
        return true;
    }

    public boolean f() {
        return this.f13883i != null;
    }

    public boolean h() {
        return this.f13881d <= 0;
    }

    public int hashCode() {
        return o.b(Integer.valueOf(this.f13881d), this.f13882e, this.f13883i, this.f13884o);
    }

    public final String i() {
        String str = this.f13882e;
        if (str != null) {
            return str;
        }
        return c.a(this.f13881d);
    }

    public String toString() {
        o.a c10 = o.c(this);
        c10.a("statusCode", i());
        c10.a("resolution", this.f13883i);
        return c10.toString();
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        int a10 = jf.c.a(parcel);
        jf.c.l(parcel, 1, d());
        jf.c.s(parcel, 2, e(), false);
        jf.c.q(parcel, 3, this.f13883i, i10, false);
        jf.c.q(parcel, 4, b(), i10, false);
        jf.c.b(parcel, a10);
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
