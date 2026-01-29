package com.google.android.material.datepicker;

import android.os.Bundle;
import android.os.Parcel;
import android.os.Parcelable;
import java.util.Arrays;
import java.util.Objects;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a implements Parcelable {
    public static final Parcelable.Creator<a> CREATOR = new C0180a();

    /* renamed from: d  reason: collision with root package name */
    private final m f15880d;

    /* renamed from: e  reason: collision with root package name */
    private final m f15881e;

    /* renamed from: i  reason: collision with root package name */
    private final c f15882i;

    /* renamed from: o  reason: collision with root package name */
    private m f15883o;

    /* renamed from: p  reason: collision with root package name */
    private final int f15884p;

    /* renamed from: q  reason: collision with root package name */
    private final int f15885q;

    /* renamed from: r  reason: collision with root package name */
    private final int f15886r;

    /* renamed from: com.google.android.material.datepicker.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    class C0180a implements Parcelable.Creator {
        C0180a() {
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
        static final long f15887f = t.a(m.d(1900, 0).f15978q);

        /* renamed from: g  reason: collision with root package name */
        static final long f15888g = t.a(m.d(2100, 11).f15978q);

        /* renamed from: a  reason: collision with root package name */
        private long f15889a;

        /* renamed from: b  reason: collision with root package name */
        private long f15890b;

        /* renamed from: c  reason: collision with root package name */
        private Long f15891c;

        /* renamed from: d  reason: collision with root package name */
        private int f15892d;

        /* renamed from: e  reason: collision with root package name */
        private c f15893e;

        /* JADX INFO: Access modifiers changed from: package-private */
        public b(a aVar) {
            this.f15889a = f15887f;
            this.f15890b = f15888g;
            this.f15893e = f.a(Long.MIN_VALUE);
            this.f15889a = aVar.f15880d.f15978q;
            this.f15890b = aVar.f15881e.f15978q;
            this.f15891c = Long.valueOf(aVar.f15883o.f15978q);
            this.f15892d = aVar.f15884p;
            this.f15893e = aVar.f15882i;
        }

        public a a() {
            m e10;
            Bundle bundle = new Bundle();
            bundle.putParcelable("DEEP_COPY_VALIDATOR_KEY", this.f15893e);
            m e11 = m.e(this.f15889a);
            m e12 = m.e(this.f15890b);
            c cVar = (c) bundle.getParcelable("DEEP_COPY_VALIDATOR_KEY");
            Long l10 = this.f15891c;
            if (l10 == null) {
                e10 = null;
            } else {
                e10 = m.e(l10.longValue());
            }
            return new a(e11, e12, cVar, e10, this.f15892d, null);
        }

        public b b(long j10) {
            this.f15891c = Long.valueOf(j10);
            return this;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public interface c extends Parcelable {
        boolean D0(long j10);
    }

    /* synthetic */ a(m mVar, m mVar2, c cVar, m mVar3, int i10, C0180a c0180a) {
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
        if (this.f15880d.equals(aVar.f15880d) && this.f15881e.equals(aVar.f15881e) && b2.b.a(this.f15883o, aVar.f15883o) && this.f15884p == aVar.f15884p && this.f15882i.equals(aVar.f15882i)) {
            return true;
        }
        return false;
    }

    public c f() {
        return this.f15882i;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public m g() {
        return this.f15881e;
    }

    public int hashCode() {
        return Arrays.hashCode(new Object[]{this.f15880d, this.f15881e, this.f15883o, Integer.valueOf(this.f15884p), this.f15882i});
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int i() {
        return this.f15884p;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int j() {
        return this.f15886r;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public m k() {
        return this.f15883o;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public m m() {
        return this.f15880d;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int n() {
        return this.f15885q;
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        parcel.writeParcelable(this.f15880d, 0);
        parcel.writeParcelable(this.f15881e, 0);
        parcel.writeParcelable(this.f15883o, 0);
        parcel.writeParcelable(this.f15882i, 0);
        parcel.writeInt(this.f15884p);
    }

    private a(m mVar, m mVar2, c cVar, m mVar3, int i10) {
        Objects.requireNonNull(mVar, "start cannot be null");
        Objects.requireNonNull(mVar2, "end cannot be null");
        Objects.requireNonNull(cVar, "validator cannot be null");
        this.f15880d = mVar;
        this.f15881e = mVar2;
        this.f15883o = mVar3;
        this.f15884p = i10;
        this.f15882i = cVar;
        if (mVar3 != null && mVar.compareTo(mVar3) > 0) {
            throw new IllegalArgumentException("start Month cannot be after current Month");
        }
        if (mVar3 != null && mVar3.compareTo(mVar2) > 0) {
            throw new IllegalArgumentException("current Month cannot be after end Month");
        }
        if (i10 >= 0 && i10 <= t.i().getMaximum(7)) {
            this.f15886r = mVar.q(mVar2) + 1;
            this.f15885q = (mVar2.f15975i - mVar.f15975i) + 1;
            return;
        }
        throw new IllegalArgumentException("firstDayOfWeek is not valid");
    }
}
