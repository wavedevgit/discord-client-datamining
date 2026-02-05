package wp;

import android.os.Parcel;
import android.os.Parcelable;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class g implements Parcelable {

    /* renamed from: d  reason: collision with root package name */
    private final wp.a f53238d;

    /* renamed from: e  reason: collision with root package name */
    private final e f53239e;

    /* renamed from: i  reason: collision with root package name */
    private final boolean f53240i;

    /* renamed from: o  reason: collision with root package name */
    public static final a f53236o = new a(null);
    @NotNull
    public static final Parcelable.Creator<g> CREATOR = new b();

    /* renamed from: p  reason: collision with root package name */
    private static final g f53237p = new g(wp.a.f53222i, e.f53233e, false);

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        public final g a() {
            return g.f53237p;
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
            wp.a createFromParcel = wp.a.CREATOR.createFromParcel(parcel);
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

    public g(wp.a gpsCollectionRequirement, e gpsPrecisionRequirement, boolean z10) {
        Intrinsics.checkNotNullParameter(gpsCollectionRequirement, "gpsCollectionRequirement");
        Intrinsics.checkNotNullParameter(gpsPrecisionRequirement, "gpsPrecisionRequirement");
        this.f53238d = gpsCollectionRequirement;
        this.f53239e = gpsPrecisionRequirement;
        this.f53240i = z10;
    }

    public final wp.a b() {
        return this.f53238d;
    }

    public final e c() {
        return this.f53239e;
    }

    public final boolean d() {
        return this.f53240i;
    }

    @Override // android.os.Parcelable
    public final int describeContents() {
        return 0;
    }

    public final boolean e() {
        if (this.f53238d == wp.a.f53220d) {
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
        if (this.f53238d == gVar.f53238d && this.f53239e == gVar.f53239e && this.f53240i == gVar.f53240i) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (((this.f53238d.hashCode() * 31) + this.f53239e.hashCode()) * 31) + Boolean.hashCode(this.f53240i);
    }

    public String toString() {
        wp.a aVar = this.f53238d;
        e eVar = this.f53239e;
        boolean z10 = this.f53240i;
        return "InquirySessionConfig(gpsCollectionRequirement=" + aVar + ", gpsPrecisionRequirement=" + eVar + ", usePlayIntegrity=" + z10 + ")";
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel dest, int i10) {
        Intrinsics.checkNotNullParameter(dest, "dest");
        this.f53238d.writeToParcel(dest, i10);
        this.f53239e.writeToParcel(dest, i10);
        dest.writeInt(this.f53240i ? 1 : 0);
    }
}
