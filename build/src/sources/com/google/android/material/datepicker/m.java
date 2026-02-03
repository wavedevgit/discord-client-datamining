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
    private final Calendar f15602d;

    /* renamed from: e  reason: collision with root package name */
    final int f15603e;

    /* renamed from: i  reason: collision with root package name */
    final int f15604i;

    /* renamed from: o  reason: collision with root package name */
    final int f15605o;

    /* renamed from: p  reason: collision with root package name */
    final int f15606p;

    /* renamed from: q  reason: collision with root package name */
    final long f15607q;

    /* renamed from: r  reason: collision with root package name */
    private String f15608r;

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
        this.f15602d = c10;
        this.f15603e = c10.get(2);
        this.f15604i = c10.get(1);
        this.f15605o = c10.getMaximum(7);
        this.f15606p = c10.getActualMaximum(5);
        this.f15607q = c10.getTimeInMillis();
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
        return this.f15602d.compareTo(mVar.f15602d);
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
        if (this.f15603e == mVar.f15603e && this.f15604i == mVar.f15604i) {
            return true;
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int g(int i10) {
        int i11 = this.f15602d.get(7);
        if (i10 <= 0) {
            i10 = this.f15602d.getFirstDayOfWeek();
        }
        int i12 = i11 - i10;
        if (i12 < 0) {
            return i12 + this.f15605o;
        }
        return i12;
    }

    public int hashCode() {
        return Arrays.hashCode(new Object[]{Integer.valueOf(this.f15603e), Integer.valueOf(this.f15604i)});
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public long i(int i10) {
        Calendar c10 = t.c(this.f15602d);
        c10.set(5, i10);
        return c10.getTimeInMillis();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int k(long j10) {
        Calendar c10 = t.c(this.f15602d);
        c10.setTimeInMillis(j10);
        return c10.get(5);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public String m() {
        if (this.f15608r == null) {
            this.f15608r = e.f(this.f15602d.getTimeInMillis());
        }
        return this.f15608r;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public long o() {
        return this.f15602d.getTimeInMillis();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public m p(int i10) {
        Calendar c10 = t.c(this.f15602d);
        c10.add(2, i10);
        return new m(c10);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int q(m mVar) {
        if (this.f15602d instanceof GregorianCalendar) {
            return ((mVar.f15604i - this.f15604i) * 12) + (mVar.f15603e - this.f15603e);
        }
        throw new IllegalArgumentException("Only Gregorian calendars are supported.");
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        parcel.writeInt(this.f15604i);
        parcel.writeInt(this.f15603e);
    }
}
