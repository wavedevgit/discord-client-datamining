package yp;

import android.os.Parcel;
import android.os.Parcelable;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class g implements Parcelable {

    /* renamed from: d  reason: collision with root package name */
    private final yp.a f55553d;

    /* renamed from: e  reason: collision with root package name */
    private final e f55554e;

    /* renamed from: i  reason: collision with root package name */
    private final boolean f55555i;

    /* renamed from: o  reason: collision with root package name */
    public static final a f55551o = new a(null);
    @NotNull
    public static final Parcelable.Creator<g> CREATOR = new b();

    /* renamed from: p  reason: collision with root package name */
    private static final g f55552p = new g(yp.a.f55537i, e.f55548e, false);

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        public final g a() {
            return g.f55552p;
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
            yp.a createFromParcel = yp.a.CREATOR.createFromParcel(parcel);
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

    public g(yp.a gpsCollectionRequirement, e gpsPrecisionRequirement, boolean z10) {
        Intrinsics.checkNotNullParameter(gpsCollectionRequirement, "gpsCollectionRequirement");
        Intrinsics.checkNotNullParameter(gpsPrecisionRequirement, "gpsPrecisionRequirement");
        this.f55553d = gpsCollectionRequirement;
        this.f55554e = gpsPrecisionRequirement;
        this.f55555i = z10;
    }

    public final yp.a b() {
        return this.f55553d;
    }

    public final e c() {
        return this.f55554e;
    }

    public final boolean d() {
        return this.f55555i;
    }

    @Override // android.os.Parcelable
    public final int describeContents() {
        return 0;
    }

    public final boolean e() {
        if (this.f55553d == yp.a.f55535d) {
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
        if (this.f55553d == gVar.f55553d && this.f55554e == gVar.f55554e && this.f55555i == gVar.f55555i) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (((this.f55553d.hashCode() * 31) + this.f55554e.hashCode()) * 31) + Boolean.hashCode(this.f55555i);
    }

    public String toString() {
        yp.a aVar = this.f55553d;
        e eVar = this.f55554e;
        boolean z10 = this.f55555i;
        return "InquirySessionConfig(gpsCollectionRequirement=" + aVar + ", gpsPrecisionRequirement=" + eVar + ", usePlayIntegrity=" + z10 + ")";
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel dest, int i10) {
        Intrinsics.checkNotNullParameter(dest, "dest");
        this.f55553d.writeToParcel(dest, i10);
        this.f55554e.writeToParcel(dest, i10);
        dest.writeInt(this.f55555i ? 1 : 0);
    }
}
