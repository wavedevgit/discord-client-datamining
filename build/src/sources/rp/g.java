package rp;

import android.os.Parcel;
import android.os.Parcelable;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class g implements Parcelable {

    /* renamed from: d  reason: collision with root package name */
    private final rp.a f48640d;

    /* renamed from: e  reason: collision with root package name */
    private final e f48641e;

    /* renamed from: i  reason: collision with root package name */
    private final boolean f48642i;

    /* renamed from: o  reason: collision with root package name */
    public static final a f48638o = new a(null);
    @NotNull
    public static final Parcelable.Creator<g> CREATOR = new b();

    /* renamed from: p  reason: collision with root package name */
    private static final g f48639p = new g(rp.a.f48624i, e.f48635e, false);

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        public final g a() {
            return g.f48639p;
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
            rp.a createFromParcel = rp.a.CREATOR.createFromParcel(parcel);
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

    public g(rp.a gpsCollectionRequirement, e gpsPrecisionRequirement, boolean z10) {
        Intrinsics.checkNotNullParameter(gpsCollectionRequirement, "gpsCollectionRequirement");
        Intrinsics.checkNotNullParameter(gpsPrecisionRequirement, "gpsPrecisionRequirement");
        this.f48640d = gpsCollectionRequirement;
        this.f48641e = gpsPrecisionRequirement;
        this.f48642i = z10;
    }

    public final rp.a b() {
        return this.f48640d;
    }

    public final e c() {
        return this.f48641e;
    }

    public final boolean d() {
        return this.f48642i;
    }

    @Override // android.os.Parcelable
    public final int describeContents() {
        return 0;
    }

    public final boolean e() {
        if (this.f48640d == rp.a.f48622d) {
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
        if (this.f48640d == gVar.f48640d && this.f48641e == gVar.f48641e && this.f48642i == gVar.f48642i) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (((this.f48640d.hashCode() * 31) + this.f48641e.hashCode()) * 31) + Boolean.hashCode(this.f48642i);
    }

    public String toString() {
        rp.a aVar = this.f48640d;
        e eVar = this.f48641e;
        boolean z10 = this.f48642i;
        return "InquirySessionConfig(gpsCollectionRequirement=" + aVar + ", gpsPrecisionRequirement=" + eVar + ", usePlayIntegrity=" + z10 + ")";
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel dest, int i10) {
        Intrinsics.checkNotNullParameter(dest, "dest");
        this.f48640d.writeToParcel(dest, i10);
        this.f48641e.writeToParcel(dest, i10);
        dest.writeInt(this.f48642i ? 1 : 0);
    }
}
