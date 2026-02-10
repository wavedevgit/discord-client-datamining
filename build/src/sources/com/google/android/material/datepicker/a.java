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
    private final m f15609d;

    /* renamed from: e  reason: collision with root package name */
    private final m f15610e;

    /* renamed from: i  reason: collision with root package name */
    private final c f15611i;

    /* renamed from: o  reason: collision with root package name */
    private m f15612o;

    /* renamed from: p  reason: collision with root package name */
    private final int f15613p;

    /* renamed from: q  reason: collision with root package name */
    private final int f15614q;

    /* renamed from: r  reason: collision with root package name */
    private final int f15615r;

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
        static final long f15616f = t.a(m.d(1900, 0).f15708q);

        /* renamed from: g  reason: collision with root package name */
        static final long f15617g = t.a(m.d(2100, 11).f15708q);

        /* renamed from: a  reason: collision with root package name */
        private long f15618a;

        /* renamed from: b  reason: collision with root package name */
        private long f15619b;

        /* renamed from: c  reason: collision with root package name */
        private Long f15620c;

        /* renamed from: d  reason: collision with root package name */
        private int f15621d;

        /* renamed from: e  reason: collision with root package name */
        private c f15622e;

        /* JADX INFO: Access modifiers changed from: package-private */
        public b(a aVar) {
            this.f15618a = f15616f;
            this.f15619b = f15617g;
            this.f15622e = f.a(Long.MIN_VALUE);
            this.f15618a = aVar.f15609d.f15708q;
            this.f15619b = aVar.f15610e.f15708q;
            this.f15620c = Long.valueOf(aVar.f15612o.f15708q);
            this.f15621d = aVar.f15613p;
            this.f15622e = aVar.f15611i;
        }

        public a a() {
            m e10;
            Bundle bundle = new Bundle();
            bundle.putParcelable("DEEP_COPY_VALIDATOR_KEY", this.f15622e);
            m e11 = m.e(this.f15618a);
            m e12 = m.e(this.f15619b);
            c cVar = (c) bundle.getParcelable("DEEP_COPY_VALIDATOR_KEY");
            Long l10 = this.f15620c;
            if (l10 == null) {
                e10 = null;
            } else {
                e10 = m.e(l10.longValue());
            }
            return new a(e11, e12, cVar, e10, this.f15621d, null);
        }

        public b b(long j10) {
            this.f15620c = Long.valueOf(j10);
            return this;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public interface c extends Parcelable {
        boolean F0(long j10);
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
        if (this.f15609d.equals(aVar.f15609d) && this.f15610e.equals(aVar.f15610e) && b2.b.a(this.f15612o, aVar.f15612o) && this.f15613p == aVar.f15613p && this.f15611i.equals(aVar.f15611i)) {
            return true;
        }
        return false;
    }

    public c f() {
        return this.f15611i;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public m g() {
        return this.f15610e;
    }

    public int hashCode() {
        return Arrays.hashCode(new Object[]{this.f15609d, this.f15610e, this.f15612o, Integer.valueOf(this.f15613p), this.f15611i});
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int i() {
        return this.f15613p;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int j() {
        return this.f15615r;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public m k() {
        return this.f15612o;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public m l() {
        return this.f15609d;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int o() {
        return this.f15614q;
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        parcel.writeParcelable(this.f15609d, 0);
        parcel.writeParcelable(this.f15610e, 0);
        parcel.writeParcelable(this.f15612o, 0);
        parcel.writeParcelable(this.f15611i, 0);
        parcel.writeInt(this.f15613p);
    }

    private a(m mVar, m mVar2, c cVar, m mVar3, int i10) {
        Objects.requireNonNull(mVar, "start cannot be null");
        Objects.requireNonNull(mVar2, "end cannot be null");
        Objects.requireNonNull(cVar, "validator cannot be null");
        this.f15609d = mVar;
        this.f15610e = mVar2;
        this.f15612o = mVar3;
        this.f15613p = i10;
        this.f15611i = cVar;
        if (mVar3 != null && mVar.compareTo(mVar3) > 0) {
            throw new IllegalArgumentException("start Month cannot be after current Month");
        }
        if (mVar3 != null && mVar3.compareTo(mVar2) > 0) {
            throw new IllegalArgumentException("current Month cannot be after end Month");
        }
        if (i10 >= 0 && i10 <= t.i().getMaximum(7)) {
            this.f15615r = mVar.r(mVar2) + 1;
            this.f15614q = (mVar2.f15705i - mVar.f15705i) + 1;
            return;
        }
        throw new IllegalArgumentException("firstDayOfWeek is not valid");
    }
}
