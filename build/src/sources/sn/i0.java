package sn;

import android.os.Parcel;
import android.os.Parcelable;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class i0 implements Parcelable {
    @NotNull
    public static final Parcelable.Creator<i0> CREATOR = new a();

    /* renamed from: d  reason: collision with root package name */
    private final double f49886d;

    /* renamed from: e  reason: collision with root package name */
    private final double f49887e;

    /* renamed from: i  reason: collision with root package name */
    private final double f49888i;

    /* renamed from: o  reason: collision with root package name */
    private final int f49889o;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements Parcelable.Creator {
        @Override // android.os.Parcelable.Creator
        /* renamed from: a */
        public final i0 createFromParcel(Parcel parcel) {
            Intrinsics.checkNotNullParameter(parcel, "parcel");
            return new i0(parcel.readDouble(), parcel.readDouble(), parcel.readDouble(), parcel.readInt());
        }

        @Override // android.os.Parcelable.Creator
        /* renamed from: b */
        public final i0[] newArray(int i10) {
            return new i0[i10];
        }
    }

    public i0(double d10, double d11, double d12, int i10) {
        this.f49886d = d10;
        this.f49887e = d11;
        this.f49888i = d12;
        this.f49889o = i10;
    }

    public final double a() {
        return this.f49888i;
    }

    public final double b() {
        return this.f49886d;
    }

    public final double c() {
        return this.f49887e;
    }

    @Override // android.os.Parcelable
    public final int describeContents() {
        return 0;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof i0)) {
            return false;
        }
        i0 i0Var = (i0) obj;
        if (Double.compare(this.f49886d, i0Var.f49886d) == 0 && Double.compare(this.f49887e, i0Var.f49887e) == 0 && Double.compare(this.f49888i, i0Var.f49888i) == 0 && this.f49889o == i0Var.f49889o) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (((((Double.hashCode(this.f49886d) * 31) + Double.hashCode(this.f49887e)) * 31) + Double.hashCode(this.f49888i)) * 31) + Integer.hashCode(this.f49889o);
    }

    public String toString() {
        double d10 = this.f49886d;
        double d11 = this.f49887e;
        double d12 = this.f49888i;
        int i10 = this.f49889o;
        return "ImageLightCondition(luminosity=" + d10 + ", rmsContrast=" + d11 + ", lowHighContrast=" + d12 + ", sampleSize=" + i10 + ")";
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel dest, int i10) {
        Intrinsics.checkNotNullParameter(dest, "dest");
        dest.writeDouble(this.f49886d);
        dest.writeDouble(this.f49887e);
        dest.writeDouble(this.f49888i);
        dest.writeInt(this.f49889o);
    }
}
