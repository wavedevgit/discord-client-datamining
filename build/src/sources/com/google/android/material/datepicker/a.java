package com.google.android.material.datepicker;

import android.os.Bundle;
import android.os.Parcel;
import android.os.Parcelable;
import java.util.Arrays;
import java.util.Objects;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a implements Parcelable {
    public static final Parcelable.Creator<a> CREATOR = new C0201a();

    /* renamed from: d  reason: collision with root package name */
    private final m f14991d;

    /* renamed from: e  reason: collision with root package name */
    private final m f14992e;

    /* renamed from: i  reason: collision with root package name */
    private final c f14993i;

    /* renamed from: o  reason: collision with root package name */
    private m f14994o;

    /* renamed from: p  reason: collision with root package name */
    private final int f14995p;

    /* renamed from: q  reason: collision with root package name */
    private final int f14996q;

    /* renamed from: r  reason: collision with root package name */
    private final int f14997r;

    /* renamed from: com.google.android.material.datepicker.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    class C0201a implements Parcelable.Creator {
        C0201a() {
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
        static final long f14998f = t.a(m.d(1900, 0).f15089q);

        /* renamed from: g  reason: collision with root package name */
        static final long f14999g = t.a(m.d(2100, 11).f15089q);

        /* renamed from: a  reason: collision with root package name */
        private long f15000a;

        /* renamed from: b  reason: collision with root package name */
        private long f15001b;

        /* renamed from: c  reason: collision with root package name */
        private Long f15002c;

        /* renamed from: d  reason: collision with root package name */
        private int f15003d;

        /* renamed from: e  reason: collision with root package name */
        private c f15004e;

        /* JADX INFO: Access modifiers changed from: package-private */
        public b(a aVar) {
            this.f15000a = f14998f;
            this.f15001b = f14999g;
            this.f15004e = f.a(Long.MIN_VALUE);
            this.f15000a = aVar.f14991d.f15089q;
            this.f15001b = aVar.f14992e.f15089q;
            this.f15002c = Long.valueOf(aVar.f14994o.f15089q);
            this.f15003d = aVar.f14995p;
            this.f15004e = aVar.f14993i;
        }

        public a a() {
            m e10;
            Bundle bundle = new Bundle();
            bundle.putParcelable("DEEP_COPY_VALIDATOR_KEY", this.f15004e);
            m e11 = m.e(this.f15000a);
            m e12 = m.e(this.f15001b);
            c cVar = (c) bundle.getParcelable("DEEP_COPY_VALIDATOR_KEY");
            Long l10 = this.f15002c;
            if (l10 == null) {
                e10 = null;
            } else {
                e10 = m.e(l10.longValue());
            }
            return new a(e11, e12, cVar, e10, this.f15003d, null);
        }

        public b b(long j10) {
            this.f15002c = Long.valueOf(j10);
            return this;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public interface c extends Parcelable {
        boolean Z(long j10);
    }

    /* synthetic */ a(m mVar, m mVar2, c cVar, m mVar3, int i10, C0201a c0201a) {
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
        if (this.f14991d.equals(aVar.f14991d) && this.f14992e.equals(aVar.f14992e) && b2.b.a(this.f14994o, aVar.f14994o) && this.f14995p == aVar.f14995p && this.f14993i.equals(aVar.f14993i)) {
            return true;
        }
        return false;
    }

    public c f() {
        return this.f14993i;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public m h() {
        return this.f14992e;
    }

    public int hashCode() {
        return Arrays.hashCode(new Object[]{this.f14991d, this.f14992e, this.f14994o, Integer.valueOf(this.f14995p), this.f14993i});
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int i() {
        return this.f14995p;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int j() {
        return this.f14997r;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public m l() {
        return this.f14994o;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public m o() {
        return this.f14991d;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int p() {
        return this.f14996q;
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        parcel.writeParcelable(this.f14991d, 0);
        parcel.writeParcelable(this.f14992e, 0);
        parcel.writeParcelable(this.f14994o, 0);
        parcel.writeParcelable(this.f14993i, 0);
        parcel.writeInt(this.f14995p);
    }

    private a(m mVar, m mVar2, c cVar, m mVar3, int i10) {
        Objects.requireNonNull(mVar, "start cannot be null");
        Objects.requireNonNull(mVar2, "end cannot be null");
        Objects.requireNonNull(cVar, "validator cannot be null");
        this.f14991d = mVar;
        this.f14992e = mVar2;
        this.f14994o = mVar3;
        this.f14995p = i10;
        this.f14993i = cVar;
        if (mVar3 != null && mVar.compareTo(mVar3) > 0) {
            throw new IllegalArgumentException("start Month cannot be after current Month");
        }
        if (mVar3 != null && mVar3.compareTo(mVar2) > 0) {
            throw new IllegalArgumentException("current Month cannot be after end Month");
        }
        if (i10 >= 0 && i10 <= t.i().getMaximum(7)) {
            this.f14997r = mVar.t(mVar2) + 1;
            this.f14996q = (mVar2.f15086i - mVar.f15086i) + 1;
            return;
        }
        throw new IllegalArgumentException("firstDayOfWeek is not valid");
    }
}
