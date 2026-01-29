package qp;

import android.os.Parcel;
import android.os.Parcelable;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class g implements Parcelable {

    /* renamed from: d  reason: collision with root package name */
    private final qp.a f47598d;

    /* renamed from: e  reason: collision with root package name */
    private final e f47599e;

    /* renamed from: i  reason: collision with root package name */
    private final boolean f47600i;

    /* renamed from: o  reason: collision with root package name */
    public static final a f47596o = new a(null);
    @NotNull
    public static final Parcelable.Creator<g> CREATOR = new b();

    /* renamed from: p  reason: collision with root package name */
    private static final g f47597p = new g(qp.a.f47582i, e.f47593e, false);

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        public final g a() {
            return g.f47597p;
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
            qp.a createFromParcel = qp.a.CREATOR.createFromParcel(parcel);
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

    public g(qp.a gpsCollectionRequirement, e gpsPrecisionRequirement, boolean z10) {
        Intrinsics.checkNotNullParameter(gpsCollectionRequirement, "gpsCollectionRequirement");
        Intrinsics.checkNotNullParameter(gpsPrecisionRequirement, "gpsPrecisionRequirement");
        this.f47598d = gpsCollectionRequirement;
        this.f47599e = gpsPrecisionRequirement;
        this.f47600i = z10;
    }

    public final qp.a b() {
        return this.f47598d;
    }

    public final e c() {
        return this.f47599e;
    }

    public final boolean d() {
        return this.f47600i;
    }

    @Override // android.os.Parcelable
    public final int describeContents() {
        return 0;
    }

    public final boolean e() {
        if (this.f47598d == qp.a.f47580d) {
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
        if (this.f47598d == gVar.f47598d && this.f47599e == gVar.f47599e && this.f47600i == gVar.f47600i) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (((this.f47598d.hashCode() * 31) + this.f47599e.hashCode()) * 31) + Boolean.hashCode(this.f47600i);
    }

    public String toString() {
        qp.a aVar = this.f47598d;
        e eVar = this.f47599e;
        boolean z10 = this.f47600i;
        return "InquirySessionConfig(gpsCollectionRequirement=" + aVar + ", gpsPrecisionRequirement=" + eVar + ", usePlayIntegrity=" + z10 + ")";
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel dest, int i10) {
        Intrinsics.checkNotNullParameter(dest, "dest");
        this.f47598d.writeToParcel(dest, i10);
        this.f47599e.writeToParcel(dest, i10);
        dest.writeInt(this.f47600i ? 1 : 0);
    }
}
