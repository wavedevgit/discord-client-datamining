package iq;

import android.os.Parcel;
import android.os.Parcelable;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class g implements Parcelable {

    /* renamed from: d  reason: collision with root package name */
    private final iq.a f30975d;

    /* renamed from: e  reason: collision with root package name */
    private final e f30976e;

    /* renamed from: i  reason: collision with root package name */
    private final boolean f30977i;

    /* renamed from: o  reason: collision with root package name */
    public static final a f30973o = new a(null);
    @NotNull
    public static final Parcelable.Creator<g> CREATOR = new b();

    /* renamed from: p  reason: collision with root package name */
    private static final g f30974p = new g(iq.a.f30959i, e.f30970e, false);

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        public final g a() {
            return g.f30974p;
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
            iq.a createFromParcel = iq.a.CREATOR.createFromParcel(parcel);
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

    public g(iq.a gpsCollectionRequirement, e gpsPrecisionRequirement, boolean z10) {
        Intrinsics.checkNotNullParameter(gpsCollectionRequirement, "gpsCollectionRequirement");
        Intrinsics.checkNotNullParameter(gpsPrecisionRequirement, "gpsPrecisionRequirement");
        this.f30975d = gpsCollectionRequirement;
        this.f30976e = gpsPrecisionRequirement;
        this.f30977i = z10;
    }

    public final iq.a b() {
        return this.f30975d;
    }

    public final e c() {
        return this.f30976e;
    }

    public final boolean d() {
        return this.f30977i;
    }

    @Override // android.os.Parcelable
    public final int describeContents() {
        return 0;
    }

    public final boolean e() {
        if (this.f30975d == iq.a.f30957d) {
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
        if (this.f30975d == gVar.f30975d && this.f30976e == gVar.f30976e && this.f30977i == gVar.f30977i) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (((this.f30975d.hashCode() * 31) + this.f30976e.hashCode()) * 31) + Boolean.hashCode(this.f30977i);
    }

    public String toString() {
        iq.a aVar = this.f30975d;
        e eVar = this.f30976e;
        boolean z10 = this.f30977i;
        return "InquirySessionConfig(gpsCollectionRequirement=" + aVar + ", gpsPrecisionRequirement=" + eVar + ", usePlayIntegrity=" + z10 + ")";
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel dest, int i10) {
        Intrinsics.checkNotNullParameter(dest, "dest");
        this.f30975d.writeToParcel(dest, i10);
        this.f30976e.writeToParcel(dest, i10);
        dest.writeInt(this.f30977i ? 1 : 0);
    }
}
