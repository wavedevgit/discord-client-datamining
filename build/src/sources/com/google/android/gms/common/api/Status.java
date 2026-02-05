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
    private final int f13786d;

    /* renamed from: e  reason: collision with root package name */
    private final String f13787e;

    /* renamed from: i  reason: collision with root package name */
    private final PendingIntent f13788i;

    /* renamed from: o  reason: collision with root package name */
    private final com.google.android.gms.common.b f13789o;

    /* renamed from: p  reason: collision with root package name */
    public static final Status f13778p = new Status(-1);

    /* renamed from: q  reason: collision with root package name */
    public static final Status f13779q = new Status(0);

    /* renamed from: r  reason: collision with root package name */
    public static final Status f13780r = new Status(14);

    /* renamed from: s  reason: collision with root package name */
    public static final Status f13781s = new Status(8);

    /* renamed from: t  reason: collision with root package name */
    public static final Status f13782t = new Status(15);

    /* renamed from: u  reason: collision with root package name */
    public static final Status f13783u = new Status(16);

    /* renamed from: v  reason: collision with root package name */
    public static final Status f13784v = new Status(17);

    /* renamed from: w  reason: collision with root package name */
    public static final Status f13785w = new Status(18);
    @NonNull
    public static final Parcelable.Creator<Status> CREATOR = new b();

    /* JADX INFO: Access modifiers changed from: package-private */
    public Status(int i10, String str, PendingIntent pendingIntent, com.google.android.gms.common.b bVar) {
        this.f13786d = i10;
        this.f13787e = str;
        this.f13788i = pendingIntent;
        this.f13789o = bVar;
    }

    @Override // ef.k
    public Status a() {
        return this;
    }

    public com.google.android.gms.common.b b() {
        return this.f13789o;
    }

    public PendingIntent c() {
        return this.f13788i;
    }

    public int d() {
        return this.f13786d;
    }

    public String e() {
        return this.f13787e;
    }

    public boolean equals(Object obj) {
        if (!(obj instanceof Status)) {
            return false;
        }
        Status status = (Status) obj;
        if (this.f13786d != status.f13786d || !o.a(this.f13787e, status.f13787e) || !o.a(this.f13788i, status.f13788i) || !o.a(this.f13789o, status.f13789o)) {
            return false;
        }
        return true;
    }

    public boolean f() {
        return this.f13788i != null;
    }

    public boolean g() {
        return this.f13786d <= 0;
    }

    public int hashCode() {
        return o.b(Integer.valueOf(this.f13786d), this.f13787e, this.f13788i, this.f13789o);
    }

    public final String i() {
        String str = this.f13787e;
        if (str != null) {
            return str;
        }
        return c.a(this.f13786d);
    }

    public String toString() {
        o.a c10 = o.c(this);
        c10.a("statusCode", i());
        c10.a("resolution", this.f13788i);
        return c10.toString();
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        int a10 = hf.c.a(parcel);
        hf.c.l(parcel, 1, d());
        hf.c.s(parcel, 2, e(), false);
        hf.c.q(parcel, 3, this.f13788i, i10, false);
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
