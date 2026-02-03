package com.google.android.material.datepicker;

import android.os.Bundle;
import android.os.Parcel;
import android.os.Parcelable;
import java.util.Arrays;
import java.util.Objects;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a implements Parcelable {
    public static final Parcelable.Creator<a> CREATOR = new C0185a();

    /* renamed from: d  reason: collision with root package name */
    private final m f15509d;

    /* renamed from: e  reason: collision with root package name */
    private final m f15510e;

    /* renamed from: i  reason: collision with root package name */
    private final c f15511i;

    /* renamed from: o  reason: collision with root package name */
    private m f15512o;

    /* renamed from: p  reason: collision with root package name */
    private final int f15513p;

    /* renamed from: q  reason: collision with root package name */
    private final int f15514q;

    /* renamed from: r  reason: collision with root package name */
    private final int f15515r;

    /* renamed from: com.google.android.material.datepicker.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    class C0185a implements Parcelable.Creator {
        C0185a() {
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
        static final long f15516f = t.a(m.d(1900, 0).f15607q);

        /* renamed from: g  reason: collision with root package name */
        static final long f15517g = t.a(m.d(2100, 11).f15607q);

        /* renamed from: a  reason: collision with root package name */
        private long f15518a;

        /* renamed from: b  reason: collision with root package name */
        private long f15519b;

        /* renamed from: c  reason: collision with root package name */
        private Long f15520c;

        /* renamed from: d  reason: collision with root package name */
        private int f15521d;

        /* renamed from: e  reason: collision with root package name */
        private c f15522e;

        /* JADX INFO: Access modifiers changed from: package-private */
        public b(a aVar) {
            this.f15518a = f15516f;
            this.f15519b = f15517g;
            this.f15522e = f.a(Long.MIN_VALUE);
            this.f15518a = aVar.f15509d.f15607q;
            this.f15519b = aVar.f15510e.f15607q;
            this.f15520c = Long.valueOf(aVar.f15512o.f15607q);
            this.f15521d = aVar.f15513p;
            this.f15522e = aVar.f15511i;
        }

        public a a() {
            m e10;
            Bundle bundle = new Bundle();
            bundle.putParcelable("DEEP_COPY_VALIDATOR_KEY", this.f15522e);
            m e11 = m.e(this.f15518a);
            m e12 = m.e(this.f15519b);
            c cVar = (c) bundle.getParcelable("DEEP_COPY_VALIDATOR_KEY");
            Long l10 = this.f15520c;
            if (l10 == null) {
                e10 = null;
            } else {
                e10 = m.e(l10.longValue());
            }
            return new a(e11, e12, cVar, e10, this.f15521d, null);
        }

        public b b(long j10) {
            this.f15520c = Long.valueOf(j10);
            return this;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public interface c extends Parcelable {
        boolean E0(long j10);
    }

    /* synthetic */ a(m mVar, m mVar2, c cVar, m mVar3, int i10, C0185a c0185a) {
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
        if (this.f15509d.equals(aVar.f15509d) && this.f15510e.equals(aVar.f15510e) && b2.b.a(this.f15512o, aVar.f15512o) && this.f15513p == aVar.f15513p && this.f15511i.equals(aVar.f15511i)) {
            return true;
        }
        return false;
    }

    public c f() {
        return this.f15511i;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public m g() {
        return this.f15510e;
    }

    public int hashCode() {
        return Arrays.hashCode(new Object[]{this.f15509d, this.f15510e, this.f15512o, Integer.valueOf(this.f15513p), this.f15511i});
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int i() {
        return this.f15513p;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int j() {
        return this.f15515r;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public m k() {
        return this.f15512o;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public m m() {
        return this.f15509d;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int n() {
        return this.f15514q;
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        parcel.writeParcelable(this.f15509d, 0);
        parcel.writeParcelable(this.f15510e, 0);
        parcel.writeParcelable(this.f15512o, 0);
        parcel.writeParcelable(this.f15511i, 0);
        parcel.writeInt(this.f15513p);
    }

    private a(m mVar, m mVar2, c cVar, m mVar3, int i10) {
        Objects.requireNonNull(mVar, "start cannot be null");
        Objects.requireNonNull(mVar2, "end cannot be null");
        Objects.requireNonNull(cVar, "validator cannot be null");
        this.f15509d = mVar;
        this.f15510e = mVar2;
        this.f15512o = mVar3;
        this.f15513p = i10;
        this.f15511i = cVar;
        if (mVar3 != null && mVar.compareTo(mVar3) > 0) {
            throw new IllegalArgumentException("start Month cannot be after current Month");
        }
        if (mVar3 != null && mVar3.compareTo(mVar2) > 0) {
            throw new IllegalArgumentException("current Month cannot be after end Month");
        }
        if (i10 >= 0 && i10 <= t.i().getMaximum(7)) {
            this.f15515r = mVar.q(mVar2) + 1;
            this.f15514q = (mVar2.f15604i - mVar.f15604i) + 1;
            return;
        }
        throw new IllegalArgumentException("firstDayOfWeek is not valid");
    }
}
