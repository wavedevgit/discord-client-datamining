package com.google.android.material.datepicker;

import android.os.Bundle;
import android.os.Parcel;
import android.os.Parcelable;
import java.util.Arrays;
import java.util.Objects;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a implements Parcelable {
    public static final Parcelable.Creator<a> CREATOR = new C0174a();

    /* renamed from: d  reason: collision with root package name */
    private final m f14851d;

    /* renamed from: e  reason: collision with root package name */
    private final m f14852e;

    /* renamed from: i  reason: collision with root package name */
    private final c f14853i;

    /* renamed from: o  reason: collision with root package name */
    private m f14854o;

    /* renamed from: p  reason: collision with root package name */
    private final int f14855p;

    /* renamed from: q  reason: collision with root package name */
    private final int f14856q;

    /* renamed from: r  reason: collision with root package name */
    private final int f14857r;

    /* renamed from: com.google.android.material.datepicker.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    class C0174a implements Parcelable.Creator {
        C0174a() {
        }

        @Override // android.os.Parcelable.Creator
        /* renamed from: a */
        public a createFromParcel(Parcel parcel) {
            return new a((m) parcel.readParcelable(m.class.getClassLoader()), (m) parcel.readParcelable(m.class.getClassLoader()), (c) parcel.readParcelable(c.class.getClassLoader()), (m) parcel.readParcelable(m.class.getClassLoader()), parcel.readInt(), null);
        }

        @Override // android.os.Parcelable.Creator
        /* renamed from: b */
        public a[] newArray(int i10) {
            return new a[i10];
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b {

        /* renamed from: f  reason: collision with root package name */
        static final long f14858f = t.a(m.d(1900, 0).f14949q);

        /* renamed from: g  reason: collision with root package name */
        static final long f14859g = t.a(m.d(2100, 11).f14949q);

        /* renamed from: a  reason: collision with root package name */
        private long f14860a;

        /* renamed from: b  reason: collision with root package name */
        private long f14861b;

        /* renamed from: c  reason: collision with root package name */
        private Long f14862c;

        /* renamed from: d  reason: collision with root package name */
        private int f14863d;

        /* renamed from: e  reason: collision with root package name */
        private c f14864e;

        /* JADX INFO: Access modifiers changed from: package-private */
        public b(a aVar) {
            this.f14860a = f14858f;
            this.f14861b = f14859g;
            this.f14864e = f.a(Long.MIN_VALUE);
            this.f14860a = aVar.f14851d.f14949q;
            this.f14861b = aVar.f14852e.f14949q;
            this.f14862c = Long.valueOf(aVar.f14854o.f14949q);
            this.f14863d = aVar.f14855p;
            this.f14864e = aVar.f14853i;
        }

        public a a() {
            m e10;
            Bundle bundle = new Bundle();
            bundle.putParcelable("DEEP_COPY_VALIDATOR_KEY", this.f14864e);
            m e11 = m.e(this.f14860a);
            m e12 = m.e(this.f14861b);
            c cVar = (c) bundle.getParcelable("DEEP_COPY_VALIDATOR_KEY");
            Long l10 = this.f14862c;
            if (l10 == null) {
                e10 = null;
            } else {
                e10 = m.e(l10.longValue());
            }
            return new a(e11, e12, cVar, e10, this.f14863d, null);
        }

        public b b(long j10) {
            this.f14862c = Long.valueOf(j10);
            return this;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public interface c extends Parcelable {
        boolean Y(long j10);
    }

    /* synthetic */ a(m mVar, m mVar2, c cVar, m mVar3, int i10, C0174a c0174a) {
        this(mVar, mVar2, cVar, mVar3, i10);
    }

    @Override // android.os.Parcelable
    public int describeContents() {
        return 0;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof a)) {
            return false;
        }
        a aVar = (a) obj;
        if (this.f14851d.equals(aVar.f14851d) && this.f14852e.equals(aVar.f14852e) && b2.b.a(this.f14854o, aVar.f14854o) && this.f14855p == aVar.f14855p && this.f14853i.equals(aVar.f14853i)) {
            return true;
        }
        return false;
    }

    public c f() {
        return this.f14853i;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public m h() {
        return this.f14852e;
    }

    public int hashCode() {
        return Arrays.hashCode(new Object[]{this.f14851d, this.f14852e, this.f14854o, Integer.valueOf(this.f14855p), this.f14853i});
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int i() {
        return this.f14855p;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int j() {
        return this.f14857r;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public m l() {
        return this.f14854o;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public m o() {
        return this.f14851d;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int p() {
        return this.f14856q;
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        parcel.writeParcelable(this.f14851d, 0);
        parcel.writeParcelable(this.f14852e, 0);
        parcel.writeParcelable(this.f14854o, 0);
        parcel.writeParcelable(this.f14853i, 0);
        parcel.writeInt(this.f14855p);
    }

    private a(m mVar, m mVar2, c cVar, m mVar3, int i10) {
        Objects.requireNonNull(mVar, "start cannot be null");
        Objects.requireNonNull(mVar2, "end cannot be null");
        Objects.requireNonNull(cVar, "validator cannot be null");
        this.f14851d = mVar;
        this.f14852e = mVar2;
        this.f14854o = mVar3;
        this.f14855p = i10;
        this.f14853i = cVar;
        if (mVar3 != null && mVar.compareTo(mVar3) > 0) {
            throw new IllegalArgumentException("start Month cannot be after current Month");
        }
        if (mVar3 != null && mVar3.compareTo(mVar2) > 0) {
            throw new IllegalArgumentException("current Month cannot be after end Month");
        }
        if (i10 >= 0 && i10 <= t.i().getMaximum(7)) {
            this.f14857r = mVar.t(mVar2) + 1;
            this.f14856q = (mVar2.f14946i - mVar.f14946i) + 1;
            return;
        }
        throw new IllegalArgumentException("firstDayOfWeek is not valid");
    }
}
