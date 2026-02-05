package com.google.android.material.datepicker;

import android.os.Bundle;
import android.os.Parcel;
import android.os.Parcelable;
import java.util.Arrays;
import java.util.Objects;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a implements Parcelable {
    public static final Parcelable.Creator<a> CREATOR = new C0182a();

    /* renamed from: d  reason: collision with root package name */
    private final m f14871d;

    /* renamed from: e  reason: collision with root package name */
    private final m f14872e;

    /* renamed from: i  reason: collision with root package name */
    private final c f14873i;

    /* renamed from: o  reason: collision with root package name */
    private m f14874o;

    /* renamed from: p  reason: collision with root package name */
    private final int f14875p;

    /* renamed from: q  reason: collision with root package name */
    private final int f14876q;

    /* renamed from: r  reason: collision with root package name */
    private final int f14877r;

    /* renamed from: com.google.android.material.datepicker.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    class C0182a implements Parcelable.Creator {
        C0182a() {
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
        static final long f14878f = t.a(m.d(1900, 0).f14969q);

        /* renamed from: g  reason: collision with root package name */
        static final long f14879g = t.a(m.d(2100, 11).f14969q);

        /* renamed from: a  reason: collision with root package name */
        private long f14880a;

        /* renamed from: b  reason: collision with root package name */
        private long f14881b;

        /* renamed from: c  reason: collision with root package name */
        private Long f14882c;

        /* renamed from: d  reason: collision with root package name */
        private int f14883d;

        /* renamed from: e  reason: collision with root package name */
        private c f14884e;

        /* JADX INFO: Access modifiers changed from: package-private */
        public b(a aVar) {
            this.f14880a = f14878f;
            this.f14881b = f14879g;
            this.f14884e = f.a(Long.MIN_VALUE);
            this.f14880a = aVar.f14871d.f14969q;
            this.f14881b = aVar.f14872e.f14969q;
            this.f14882c = Long.valueOf(aVar.f14874o.f14969q);
            this.f14883d = aVar.f14875p;
            this.f14884e = aVar.f14873i;
        }

        public a a() {
            m e10;
            Bundle bundle = new Bundle();
            bundle.putParcelable("DEEP_COPY_VALIDATOR_KEY", this.f14884e);
            m e11 = m.e(this.f14880a);
            m e12 = m.e(this.f14881b);
            c cVar = (c) bundle.getParcelable("DEEP_COPY_VALIDATOR_KEY");
            Long l10 = this.f14882c;
            if (l10 == null) {
                e10 = null;
            } else {
                e10 = m.e(l10.longValue());
            }
            return new a(e11, e12, cVar, e10, this.f14883d, null);
        }

        public b b(long j10) {
            this.f14882c = Long.valueOf(j10);
            return this;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public interface c extends Parcelable {
        boolean D0(long j10);
    }

    /* synthetic */ a(m mVar, m mVar2, c cVar, m mVar3, int i10, C0182a c0182a) {
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
        if (this.f14871d.equals(aVar.f14871d) && this.f14872e.equals(aVar.f14872e) && b2.b.a(this.f14874o, aVar.f14874o) && this.f14875p == aVar.f14875p && this.f14873i.equals(aVar.f14873i)) {
            return true;
        }
        return false;
    }

    public c f() {
        return this.f14873i;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public m g() {
        return this.f14872e;
    }

    public int hashCode() {
        return Arrays.hashCode(new Object[]{this.f14871d, this.f14872e, this.f14874o, Integer.valueOf(this.f14875p), this.f14873i});
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int i() {
        return this.f14875p;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int j() {
        return this.f14877r;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public m l() {
        return this.f14874o;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public m n() {
        return this.f14871d;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int o() {
        return this.f14876q;
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        parcel.writeParcelable(this.f14871d, 0);
        parcel.writeParcelable(this.f14872e, 0);
        parcel.writeParcelable(this.f14874o, 0);
        parcel.writeParcelable(this.f14873i, 0);
        parcel.writeInt(this.f14875p);
    }

    private a(m mVar, m mVar2, c cVar, m mVar3, int i10) {
        Objects.requireNonNull(mVar, "start cannot be null");
        Objects.requireNonNull(mVar2, "end cannot be null");
        Objects.requireNonNull(cVar, "validator cannot be null");
        this.f14871d = mVar;
        this.f14872e = mVar2;
        this.f14874o = mVar3;
        this.f14875p = i10;
        this.f14873i = cVar;
        if (mVar3 != null && mVar.compareTo(mVar3) > 0) {
            throw new IllegalArgumentException("start Month cannot be after current Month");
        }
        if (mVar3 != null && mVar3.compareTo(mVar2) > 0) {
            throw new IllegalArgumentException("current Month cannot be after end Month");
        }
        if (i10 >= 0 && i10 <= t.i().getMaximum(7)) {
            this.f14877r = mVar.r(mVar2) + 1;
            this.f14876q = (mVar2.f14966i - mVar.f14966i) + 1;
            return;
        }
        throw new IllegalArgumentException("firstDayOfWeek is not valid");
    }
}
