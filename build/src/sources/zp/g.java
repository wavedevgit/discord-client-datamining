package zp;

import android.os.Parcel;
import android.os.Parcelable;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class g implements Parcelable {

    /* renamed from: d  reason: collision with root package name */
    private final zp.a f56626d;

    /* renamed from: e  reason: collision with root package name */
    private final e f56627e;

    /* renamed from: i  reason: collision with root package name */
    private final boolean f56628i;

    /* renamed from: o  reason: collision with root package name */
    public static final a f56624o = new a(null);
    @NotNull
    public static final Parcelable.Creator<g> CREATOR = new b();

    /* renamed from: p  reason: collision with root package name */
    private static final g f56625p = new g(zp.a.f56610i, e.f56621e, false);

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        public final g a() {
            return g.f56625p;
        }

        private a() {
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b implements Parcelable.Creator {
        @Override // android.os.Parcelable.Creator
        /* renamed from: a */
        public final g createFromParcel(Parcel parcel) {
            boolean z10;
            Intrinsics.checkNotNullParameter(parcel, "parcel");
            zp.a createFromParcel = zp.a.CREATOR.createFromParcel(parcel);
            e createFromParcel2 = e.CREATOR.createFromParcel(parcel);
            if (parcel.readInt() != 0) {
                z10 = true;
            } else {
                z10 = false;
            }
            return new g(createFromParcel, createFromParcel2, z10);
        }

        @Override // android.os.Parcelable.Creator
        /* renamed from: b */
        public final g[] newArray(int i10) {
            return new g[i10];
        }
    }

    public g(zp.a gpsCollectionRequirement, e gpsPrecisionRequirement, boolean z10) {
        Intrinsics.checkNotNullParameter(gpsCollectionRequirement, "gpsCollectionRequirement");
        Intrinsics.checkNotNullParameter(gpsPrecisionRequirement, "gpsPrecisionRequirement");
        this.f56626d = gpsCollectionRequirement;
        this.f56627e = gpsPrecisionRequirement;
        this.f56628i = z10;
    }

    public final zp.a b() {
        return this.f56626d;
    }

    public final e c() {
        return this.f56627e;
    }

    public final boolean d() {
        return this.f56628i;
    }

    @Override // android.os.Parcelable
    public final int describeContents() {
        return 0;
    }

    public final boolean e() {
        if (this.f56626d == zp.a.f56608d) {
            return true;
        }
        return false;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof g)) {
            return false;
        }
        g gVar = (g) obj;
        if (this.f56626d == gVar.f56626d && this.f56627e == gVar.f56627e && this.f56628i == gVar.f56628i) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (((this.f56626d.hashCode() * 31) + this.f56627e.hashCode()) * 31) + Boolean.hashCode(this.f56628i);
    }

    public String toString() {
        zp.a aVar = this.f56626d;
        e eVar = this.f56627e;
        boolean z10 = this.f56628i;
        return "InquirySessionConfig(gpsCollectionRequirement=" + aVar + ", gpsPrecisionRequirement=" + eVar + ", usePlayIntegrity=" + z10 + ")";
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel dest, int i10) {
        Intrinsics.checkNotNullParameter(dest, "dest");
        this.f56626d.writeToParcel(dest, i10);
        this.f56627e.writeToParcel(dest, i10);
        dest.writeInt(this.f56628i ? 1 : 0);
    }
}
