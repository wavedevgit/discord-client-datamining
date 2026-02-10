package iq;

import android.os.Parcel;
import android.os.Parcelable;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class g implements Parcelable {

    /* renamed from: d  reason: collision with root package name */
    private final iq.a f30406d;

    /* renamed from: e  reason: collision with root package name */
    private final e f30407e;

    /* renamed from: i  reason: collision with root package name */
    private final boolean f30408i;

    /* renamed from: o  reason: collision with root package name */
    public static final a f30404o = new a(null);
    @NotNull
    public static final Parcelable.Creator<g> CREATOR = new b();

    /* renamed from: p  reason: collision with root package name */
    private static final g f30405p = new g(iq.a.f30390i, e.f30401e, false);

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        public final g a() {
            return g.f30405p;
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
        this.f30406d = gpsCollectionRequirement;
        this.f30407e = gpsPrecisionRequirement;
        this.f30408i = z10;
    }

    public final iq.a b() {
        return this.f30406d;
    }

    public final e c() {
        return this.f30407e;
    }

    public final boolean d() {
        return this.f30408i;
    }

    @Override // android.os.Parcelable
    public final int describeContents() {
        return 0;
    }

    public final boolean e() {
        if (this.f30406d == iq.a.f30388d) {
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
        if (this.f30406d == gVar.f30406d && this.f30407e == gVar.f30407e && this.f30408i == gVar.f30408i) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (((this.f30406d.hashCode() * 31) + this.f30407e.hashCode()) * 31) + Boolean.hashCode(this.f30408i);
    }

    public String toString() {
        iq.a aVar = this.f30406d;
        e eVar = this.f30407e;
        boolean z10 = this.f30408i;
        return "InquirySessionConfig(gpsCollectionRequirement=" + aVar + ", gpsPrecisionRequirement=" + eVar + ", usePlayIntegrity=" + z10 + ")";
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel dest, int i10) {
        Intrinsics.checkNotNullParameter(dest, "dest");
        this.f30406d.writeToParcel(dest, i10);
        this.f30407e.writeToParcel(dest, i10);
        dest.writeInt(this.f30408i ? 1 : 0);
    }
}
