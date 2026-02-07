package mp;

import android.os.Parcel;
import android.os.Parcelable;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class r0 implements Parcelable {

    /* renamed from: d  reason: collision with root package name */
    private final boolean f37684d;

    /* renamed from: e  reason: collision with root package name */
    private final boolean f37685e;

    /* renamed from: i  reason: collision with root package name */
    private final long f37686i;

    /* renamed from: o  reason: collision with root package name */
    private final boolean f37687o;

    /* renamed from: p  reason: collision with root package name */
    public static final a f37682p = new a(null);
    @NotNull
    public static final Parcelable.Creator<r0> CREATOR = new b();

    /* renamed from: q  reason: collision with root package name */
    private static final r0 f37683q = new r0(false, false, 0, false, 15, null);

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        public final r0 a() {
            return r0.f37683q;
        }

        private a() {
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b implements Parcelable.Creator {
        @Override // android.os.Parcelable.Creator
        /* renamed from: a */
        public final r0 createFromParcel(Parcel parcel) {
            boolean z10;
            boolean z11;
            long j10;
            boolean z12;
            Intrinsics.checkNotNullParameter(parcel, "parcel");
            boolean z13 = false;
            boolean z14 = true;
            if (parcel.readInt() != 0) {
                z10 = false;
                z13 = true;
            } else {
                z10 = false;
            }
            if (parcel.readInt() != 0) {
                z11 = true;
            } else {
                z11 = true;
                z14 = z10;
            }
            long readLong = parcel.readLong();
            if (parcel.readInt() != 0) {
                z12 = z11;
                j10 = readLong;
            } else {
                j10 = readLong;
                z12 = z10;
            }
            return new r0(z13, z14, j10, z12);
        }

        @Override // android.os.Parcelable.Creator
        /* renamed from: b */
        public final r0[] newArray(int i10) {
            return new r0[i10];
        }
    }

    public r0(boolean z10, boolean z11, long j10, boolean z12) {
        this.f37684d = z10;
        this.f37685e = z11;
        this.f37686i = j10;
        this.f37687o = z12;
    }

    public final boolean b() {
        return this.f37684d;
    }

    public final boolean c() {
        return this.f37687o;
    }

    public final long d() {
        return this.f37686i;
    }

    @Override // android.os.Parcelable
    public final int describeContents() {
        return 0;
    }

    public final boolean e() {
        return this.f37685e;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof r0)) {
            return false;
        }
        r0 r0Var = (r0) obj;
        if (this.f37684d == r0Var.f37684d && this.f37685e == r0Var.f37685e && this.f37686i == r0Var.f37686i && this.f37687o == r0Var.f37687o) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (((((Boolean.hashCode(this.f37684d) * 31) + Boolean.hashCode(this.f37685e)) * 31) + Long.hashCode(this.f37686i)) * 31) + Boolean.hashCode(this.f37687o);
    }

    public String toString() {
        boolean z10 = this.f37684d;
        boolean z11 = this.f37685e;
        long j10 = this.f37686i;
        boolean z12 = this.f37687o;
        return "PoseConfig(allowReview=" + z10 + ", manualCaptureEnabled=" + z11 + ", manualCaptureDelayMs=" + j10 + ", autoCaptureEnabled=" + z12 + ")";
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel dest, int i10) {
        Intrinsics.checkNotNullParameter(dest, "dest");
        dest.writeInt(this.f37684d ? 1 : 0);
        dest.writeInt(this.f37685e ? 1 : 0);
        dest.writeLong(this.f37686i);
        dest.writeInt(this.f37687o ? 1 : 0);
    }

    public /* synthetic */ r0(boolean z10, boolean z11, long j10, boolean z12, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this((i10 & 1) != 0 ? false : z10, (i10 & 2) != 0 ? true : z11, (i10 & 4) != 0 ? 8000L : j10, (i10 & 8) != 0 ? true : z12);
    }
}
