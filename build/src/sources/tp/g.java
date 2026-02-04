package tp;

import android.os.Parcel;
import android.os.Parcelable;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class g implements Parcelable {

    /* renamed from: d  reason: collision with root package name */
    private final tp.a f50217d;

    /* renamed from: e  reason: collision with root package name */
    private final e f50218e;

    /* renamed from: i  reason: collision with root package name */
    private final boolean f50219i;

    /* renamed from: o  reason: collision with root package name */
    public static final a f50215o = new a(null);
    @NotNull
    public static final Parcelable.Creator<g> CREATOR = new b();

    /* renamed from: p  reason: collision with root package name */
    private static final g f50216p = new g(tp.a.f50201i, e.f50212e, false);

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        public final g a() {
            return g.f50216p;
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
            tp.a createFromParcel = tp.a.CREATOR.createFromParcel(parcel);
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

    public g(tp.a gpsCollectionRequirement, e gpsPrecisionRequirement, boolean z10) {
        Intrinsics.checkNotNullParameter(gpsCollectionRequirement, "gpsCollectionRequirement");
        Intrinsics.checkNotNullParameter(gpsPrecisionRequirement, "gpsPrecisionRequirement");
        this.f50217d = gpsCollectionRequirement;
        this.f50218e = gpsPrecisionRequirement;
        this.f50219i = z10;
    }

    public final tp.a b() {
        return this.f50217d;
    }

    public final e c() {
        return this.f50218e;
    }

    public final boolean d() {
        return this.f50219i;
    }

    @Override // android.os.Parcelable
    public final int describeContents() {
        return 0;
    }

    public final boolean e() {
        if (this.f50217d == tp.a.f50199d) {
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
        if (this.f50217d == gVar.f50217d && this.f50218e == gVar.f50218e && this.f50219i == gVar.f50219i) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (((this.f50217d.hashCode() * 31) + this.f50218e.hashCode()) * 31) + Boolean.hashCode(this.f50219i);
    }

    public String toString() {
        tp.a aVar = this.f50217d;
        e eVar = this.f50218e;
        boolean z10 = this.f50219i;
        return "InquirySessionConfig(gpsCollectionRequirement=" + aVar + ", gpsPrecisionRequirement=" + eVar + ", usePlayIntegrity=" + z10 + ")";
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel dest, int i10) {
        Intrinsics.checkNotNullParameter(dest, "dest");
        this.f50217d.writeToParcel(dest, i10);
        this.f50218e.writeToParcel(dest, i10);
        dest.writeInt(this.f50219i ? 1 : 0);
    }
}
