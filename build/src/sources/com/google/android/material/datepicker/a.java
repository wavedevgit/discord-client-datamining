package com.google.android.material.datepicker;

import android.os.Bundle;
import android.os.Parcel;
import android.os.Parcelable;
import java.util.Arrays;
import java.util.Objects;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a implements Parcelable {
    public static final Parcelable.Creator<a> CREATOR = new C0166a();

    /* renamed from: d  reason: collision with root package name */
    private final m f14477d;

    /* renamed from: e  reason: collision with root package name */
    private final m f14478e;

    /* renamed from: i  reason: collision with root package name */
    private final c f14479i;

    /* renamed from: o  reason: collision with root package name */
    private m f14480o;

    /* renamed from: p  reason: collision with root package name */
    private final int f14481p;

    /* renamed from: q  reason: collision with root package name */
    private final int f14482q;

    /* renamed from: r  reason: collision with root package name */
    private final int f14483r;

    /* renamed from: com.google.android.material.datepicker.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    class C0166a implements Parcelable.Creator {
        C0166a() {
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
        static final long f14484f = t.a(m.d(1900, 0).f14575q);

        /* renamed from: g  reason: collision with root package name */
        static final long f14485g = t.a(m.d(2100, 11).f14575q);

        /* renamed from: a  reason: collision with root package name */
        private long f14486a;

        /* renamed from: b  reason: collision with root package name */
        private long f14487b;

        /* renamed from: c  reason: collision with root package name */
        private Long f14488c;

        /* renamed from: d  reason: collision with root package name */
        private int f14489d;

        /* renamed from: e  reason: collision with root package name */
        private c f14490e;

        /* JADX INFO: Access modifiers changed from: package-private */
        public b(a aVar) {
            this.f14486a = f14484f;
            this.f14487b = f14485g;
            this.f14490e = f.a(Long.MIN_VALUE);
            this.f14486a = aVar.f14477d.f14575q;
            this.f14487b = aVar.f14478e.f14575q;
            this.f14488c = Long.valueOf(aVar.f14480o.f14575q);
            this.f14489d = aVar.f14481p;
            this.f14490e = aVar.f14479i;
        }

        public a a() {
            m e10;
            Bundle bundle = new Bundle();
            bundle.putParcelable("DEEP_COPY_VALIDATOR_KEY", this.f14490e);
            m e11 = m.e(this.f14486a);
            m e12 = m.e(this.f14487b);
            c cVar = (c) bundle.getParcelable("DEEP_COPY_VALIDATOR_KEY");
            Long l10 = this.f14488c;
            if (l10 == null) {
                e10 = null;
            } else {
                e10 = m.e(l10.longValue());
            }
            return new a(e11, e12, cVar, e10, this.f14489d, null);
        }

        public b b(long j10) {
            this.f14488c = Long.valueOf(j10);
            return this;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public interface c extends Parcelable {
        boolean D0(long j10);
    }

    /* synthetic */ a(m mVar, m mVar2, c cVar, m mVar3, int i10, C0166a c0166a) {
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
        if (this.f14477d.equals(aVar.f14477d) && this.f14478e.equals(aVar.f14478e) && b2.b.a(this.f14480o, aVar.f14480o) && this.f14481p == aVar.f14481p && this.f14479i.equals(aVar.f14479i)) {
            return true;
        }
        return false;
    }

    public c f() {
        return this.f14479i;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public m g() {
        return this.f14478e;
    }

    public int hashCode() {
        return Arrays.hashCode(new Object[]{this.f14477d, this.f14478e, this.f14480o, Integer.valueOf(this.f14481p), this.f14479i});
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int i() {
        return this.f14481p;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int j() {
        return this.f14483r;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public m k() {
        return this.f14480o;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public m m() {
        return this.f14477d;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int n() {
        return this.f14482q;
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        parcel.writeParcelable(this.f14477d, 0);
        parcel.writeParcelable(this.f14478e, 0);
        parcel.writeParcelable(this.f14480o, 0);
        parcel.writeParcelable(this.f14479i, 0);
        parcel.writeInt(this.f14481p);
    }

    private a(m mVar, m mVar2, c cVar, m mVar3, int i10) {
        Objects.requireNonNull(mVar, "start cannot be null");
        Objects.requireNonNull(mVar2, "end cannot be null");
        Objects.requireNonNull(cVar, "validator cannot be null");
        this.f14477d = mVar;
        this.f14478e = mVar2;
        this.f14480o = mVar3;
        this.f14481p = i10;
        this.f14479i = cVar;
        if (mVar3 != null && mVar.compareTo(mVar3) > 0) {
            throw new IllegalArgumentException("start Month cannot be after current Month");
        }
        if (mVar3 != null && mVar3.compareTo(mVar2) > 0) {
            throw new IllegalArgumentException("current Month cannot be after end Month");
        }
        if (i10 >= 0 && i10 <= t.i().getMaximum(7)) {
            this.f14483r = mVar.q(mVar2) + 1;
            this.f14482q = (mVar2.f14572i - mVar.f14572i) + 1;
            return;
        }
        throw new IllegalArgumentException("firstDayOfWeek is not valid");
    }
}
