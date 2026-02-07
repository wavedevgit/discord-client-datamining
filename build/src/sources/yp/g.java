package yp;

import android.os.Parcel;
import android.os.Parcelable;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class g implements Parcelable {

    /* renamed from: d  reason: collision with root package name */
    private final yp.a f55601d;

    /* renamed from: e  reason: collision with root package name */
    private final e f55602e;

    /* renamed from: i  reason: collision with root package name */
    private final boolean f55603i;

    /* renamed from: o  reason: collision with root package name */
    public static final a f55599o = new a(null);
    @NotNull
    public static final Parcelable.Creator<g> CREATOR = new b();

    /* renamed from: p  reason: collision with root package name */
    private static final g f55600p = new g(yp.a.f55585i, e.f55596e, false);

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        public final g a() {
            return g.f55600p;
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
        this.f55601d = gpsCollectionRequirement;
        this.f55602e = gpsPrecisionRequirement;
        this.f55603i = z10;
    }

    public final yp.a b() {
        return this.f55601d;
    }

    public final e c() {
        return this.f55602e;
    }

    public final boolean d() {
        return this.f55603i;
    }

    @Override // android.os.Parcelable
    public final int describeContents() {
        return 0;
    }

    public final boolean e() {
        if (this.f55601d == yp.a.f55583d) {
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
        if (this.f55601d == gVar.f55601d && this.f55602e == gVar.f55602e && this.f55603i == gVar.f55603i) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (((this.f55601d.hashCode() * 31) + this.f55602e.hashCode()) * 31) + Boolean.hashCode(this.f55603i);
    }

    public String toString() {
        yp.a aVar = this.f55601d;
        e eVar = this.f55602e;
        boolean z10 = this.f55603i;
        return "InquirySessionConfig(gpsCollectionRequirement=" + aVar + ", gpsPrecisionRequirement=" + eVar + ", usePlayIntegrity=" + z10 + ")";
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel dest, int i10) {
        Intrinsics.checkNotNullParameter(dest, "dest");
        this.f55601d.writeToParcel(dest, i10);
        this.f55602e.writeToParcel(dest, i10);
        dest.writeInt(this.f55603i ? 1 : 0);
    }
}
