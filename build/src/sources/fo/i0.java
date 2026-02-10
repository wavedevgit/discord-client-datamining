package fo;

import android.os.Parcel;
import android.os.Parcelable;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class i0 implements Parcelable {
    @NotNull
    public static final Parcelable.Creator<i0> CREATOR = new a();

    /* renamed from: d  reason: collision with root package name */
    private final double f24035d;

    /* renamed from: e  reason: collision with root package name */
    private final double f24036e;

    /* renamed from: i  reason: collision with root package name */
    private final double f24037i;

    /* renamed from: o  reason: collision with root package name */
    private final int f24038o;

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
        this.f24035d = d10;
        this.f24036e = d11;
        this.f24037i = d12;
        this.f24038o = i10;
    }

    public final double a() {
        return this.f24037i;
    }

    public final double b() {
        return this.f24035d;
    }

    public final double c() {
        return this.f24036e;
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
        if (Double.compare(this.f24035d, i0Var.f24035d) == 0 && Double.compare(this.f24036e, i0Var.f24036e) == 0 && Double.compare(this.f24037i, i0Var.f24037i) == 0 && this.f24038o == i0Var.f24038o) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (((((Double.hashCode(this.f24035d) * 31) + Double.hashCode(this.f24036e)) * 31) + Double.hashCode(this.f24037i)) * 31) + Integer.hashCode(this.f24038o);
    }

    public String toString() {
        double d10 = this.f24035d;
        double d11 = this.f24036e;
        double d12 = this.f24037i;
        int i10 = this.f24038o;
        return "ImageLightCondition(luminosity=" + d10 + ", rmsContrast=" + d11 + ", lowHighContrast=" + d12 + ", sampleSize=" + i10 + ")";
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel dest, int i10) {
        Intrinsics.checkNotNullParameter(dest, "dest");
        dest.writeDouble(this.f24035d);
        dest.writeDouble(this.f24036e);
        dest.writeDouble(this.f24037i);
        dest.writeInt(this.f24038o);
    }
}
