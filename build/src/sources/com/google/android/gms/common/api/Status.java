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
    private final int f14458d;

    /* renamed from: e  reason: collision with root package name */
    private final String f14459e;

    /* renamed from: i  reason: collision with root package name */
    private final PendingIntent f14460i;

    /* renamed from: o  reason: collision with root package name */
    private final com.google.android.gms.common.b f14461o;

    /* renamed from: p  reason: collision with root package name */
    public static final Status f14450p = new Status(-1);

    /* renamed from: q  reason: collision with root package name */
    public static final Status f14451q = new Status(0);

    /* renamed from: r  reason: collision with root package name */
    public static final Status f14452r = new Status(14);

    /* renamed from: s  reason: collision with root package name */
    public static final Status f14453s = new Status(8);

    /* renamed from: t  reason: collision with root package name */
    public static final Status f14454t = new Status(15);

    /* renamed from: u  reason: collision with root package name */
    public static final Status f14455u = new Status(16);

    /* renamed from: v  reason: collision with root package name */
    public static final Status f14456v = new Status(17);

    /* renamed from: w  reason: collision with root package name */
    public static final Status f14457w = new Status(18);
    @NonNull
    public static final Parcelable.Creator<Status> CREATOR = new b();

    /* JADX INFO: Access modifiers changed from: package-private */
    public Status(int i10, String str, PendingIntent pendingIntent, com.google.android.gms.common.b bVar) {
        this.f14458d = i10;
        this.f14459e = str;
        this.f14460i = pendingIntent;
        this.f14461o = bVar;
    }

    @Override // ff.k
    public Status a() {
        return this;
    }

    public com.google.android.gms.common.b b() {
        return this.f14461o;
    }

    public PendingIntent c() {
        return this.f14460i;
    }

    public int d() {
        return this.f14458d;
    }

    public String e() {
        return this.f14459e;
    }

    public boolean equals(Object obj) {
        if (!(obj instanceof Status)) {
            return false;
        }
        Status status = (Status) obj;
        if (this.f14458d != status.f14458d || !o.a(this.f14459e, status.f14459e) || !o.a(this.f14460i, status.f14460i) || !o.a(this.f14461o, status.f14461o)) {
            return false;
        }
        return true;
    }

    public boolean f() {
        return this.f14460i != null;
    }

    public boolean g() {
        return this.f14458d <= 0;
    }

    public int hashCode() {
        return o.b(Integer.valueOf(this.f14458d), this.f14459e, this.f14460i, this.f14461o);
    }

    public final String i() {
        String str = this.f14459e;
        if (str != null) {
            return str;
        }
        return c.a(this.f14458d);
    }

    public String toString() {
        o.a c10 = o.c(this);
        c10.a("statusCode", i());
        c10.a("resolution", this.f14460i);
        return c10.toString();
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        int a10 = jf.c.a(parcel);
        jf.c.l(parcel, 1, d());
        jf.c.s(parcel, 2, e(), false);
        jf.c.q(parcel, 3, this.f14460i, i10, false);
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
