package com.google.android.material.datepicker;

import android.os.Parcel;
import android.os.Parcelable;
import java.util.Arrays;
import java.util.Calendar;
import java.util.GregorianCalendar;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class m implements Comparable, Parcelable {
    public static final Parcelable.Creator<m> CREATOR = new a();

    /* renamed from: d  reason: collision with root package name */
    private final Calendar f14964d;

    /* renamed from: e  reason: collision with root package name */
    final int f14965e;

    /* renamed from: i  reason: collision with root package name */
    final int f14966i;

    /* renamed from: o  reason: collision with root package name */
    final int f14967o;

    /* renamed from: p  reason: collision with root package name */
    final int f14968p;

    /* renamed from: q  reason: collision with root package name */
    final long f14969q;

    /* renamed from: r  reason: collision with root package name */
    private String f14970r;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    class a implements Parcelable.Creator {
        a() {
        }

        @Override // android.os.Parcelable.Creator
        /* renamed from: a */
        public m createFromParcel(Parcel parcel) {
            return m.d(parcel.readInt(), parcel.readInt());
        }

        @Override // android.os.Parcelable.Creator
        /* renamed from: b */
        public m[] newArray(int i10) {
            return new m[i10];
        }
    }

    private m(Calendar calendar) {
        calendar.set(5, 1);
        Calendar c10 = t.c(calendar);
        this.f14964d = c10;
        this.f14965e = c10.get(2);
        this.f14966i = c10.get(1);
        this.f14967o = c10.getMaximum(7);
        this.f14968p = c10.getActualMaximum(5);
        this.f14969q = c10.getTimeInMillis();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static m d(int i10, int i11) {
        Calendar i12 = t.i();
        i12.set(1, i10);
        i12.set(2, i11);
        return new m(i12);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static m e(long j10) {
        Calendar i10 = t.i();
        i10.setTimeInMillis(j10);
        return new m(i10);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static m f() {
        return new m(t.g());
    }

    @Override // java.lang.Comparable
    /* renamed from: a */
    public int compareTo(m mVar) {
        return this.f14964d.compareTo(mVar.f14964d);
    }

    @Override // android.os.Parcelable
    public int describeContents() {
        return 0;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof m)) {
            return false;
        }
        m mVar = (m) obj;
        if (this.f14965e == mVar.f14965e && this.f14966i == mVar.f14966i) {
            return true;
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int g(int i10) {
        int i11 = this.f14964d.get(7);
        if (i10 <= 0) {
            i10 = this.f14964d.getFirstDayOfWeek();
        }
        int i12 = i11 - i10;
        if (i12 < 0) {
            return i12 + this.f14967o;
        }
        return i12;
    }

    public int hashCode() {
        return Arrays.hashCode(new Object[]{Integer.valueOf(this.f14965e), Integer.valueOf(this.f14966i)});
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public long i(int i10) {
        Calendar c10 = t.c(this.f14964d);
        c10.set(5, i10);
        return c10.getTimeInMillis();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int l(long j10) {
        Calendar c10 = t.c(this.f14964d);
        c10.setTimeInMillis(j10);
        return c10.get(5);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public String n() {
        if (this.f14970r == null) {
            this.f14970r = e.f(this.f14964d.getTimeInMillis());
        }
        return this.f14970r;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public long p() {
        return this.f14964d.getTimeInMillis();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public m q(int i10) {
        Calendar c10 = t.c(this.f14964d);
        c10.add(2, i10);
        return new m(c10);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int r(m mVar) {
        if (this.f14964d instanceof GregorianCalendar) {
            return ((mVar.f14966i - this.f14966i) * 12) + (mVar.f14965e - this.f14965e);
        }
        throw new IllegalArgumentException("Only Gregorian calendars are supported.");
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        parcel.writeInt(this.f14966i);
        parcel.writeInt(this.f14965e);
    }
}
