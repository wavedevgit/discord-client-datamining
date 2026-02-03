package pn;

import android.os.Parcel;
import android.os.Parcelable;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class i0 implements Parcelable {
    @NotNull
    public static final Parcelable.Creator<i0> CREATOR = new a();

    /* renamed from: d  reason: collision with root package name */
    private final double f46270d;

    /* renamed from: e  reason: collision with root package name */
    private final double f46271e;

    /* renamed from: i  reason: collision with root package name */
    private final double f46272i;

    /* renamed from: o  reason: collision with root package name */
    private final int f46273o;

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
        this.f46270d = d10;
        this.f46271e = d11;
        this.f46272i = d12;
        this.f46273o = i10;
    }

    public final double a() {
        return this.f46272i;
    }

    public final double b() {
        return this.f46270d;
    }

    public final double c() {
        return this.f46271e;
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
        if (Double.compare(this.f46270d, i0Var.f46270d) == 0 && Double.compare(this.f46271e, i0Var.f46271e) == 0 && Double.compare(this.f46272i, i0Var.f46272i) == 0 && this.f46273o == i0Var.f46273o) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (((((Double.hashCode(this.f46270d) * 31) + Double.hashCode(this.f46271e)) * 31) + Double.hashCode(this.f46272i)) * 31) + Integer.hashCode(this.f46273o);
    }

    public String toString() {
        double d10 = this.f46270d;
        double d11 = this.f46271e;
        double d12 = this.f46272i;
        int i10 = this.f46273o;
        return "ImageLightCondition(luminosity=" + d10 + ", rmsContrast=" + d11 + ", lowHighContrast=" + d12 + ", sampleSize=" + i10 + ")";
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel dest, int i10) {
        Intrinsics.checkNotNullParameter(dest, "dest");
        dest.writeDouble(this.f46270d);
        dest.writeDouble(this.f46271e);
        dest.writeDouble(this.f46272i);
        dest.writeInt(this.f46273o);
    }
}
