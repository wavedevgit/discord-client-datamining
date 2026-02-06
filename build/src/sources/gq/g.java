package gq;

import android.net.Uri;
import android.os.Parcel;
import android.os.Parcelable;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class g implements Parcelable {
    @NotNull
    public static final Parcelable.Creator<g> CREATOR = new a();

    /* renamed from: d  reason: collision with root package name */
    private final Uri f25526d;

    /* renamed from: e  reason: collision with root package name */
    private final Uri f25527e;

    /* renamed from: i  reason: collision with root package name */
    private final Uri f25528i;

    /* renamed from: o  reason: collision with root package name */
    private final gp.a f25529o;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements Parcelable.Creator {
        @Override // android.os.Parcelable.Creator
        /* renamed from: a */
        public final g createFromParcel(Parcel parcel) {
            Intrinsics.checkNotNullParameter(parcel, "parcel");
            return new g((Uri) parcel.readParcelable(g.class.getClassLoader()), (Uri) parcel.readParcelable(g.class.getClassLoader()), (Uri) parcel.readParcelable(g.class.getClassLoader()), gp.a.valueOf(parcel.readString()));
        }

        @Override // android.os.Parcelable.Creator
        /* renamed from: b */
        public final g[] newArray(int i10) {
            return new g[i10];
        }
    }

    public g(Uri dg1Uri, Uri dg2Uri, Uri sodUri, gp.a chipAuthenticationStatus) {
        Intrinsics.checkNotNullParameter(dg1Uri, "dg1Uri");
        Intrinsics.checkNotNullParameter(dg2Uri, "dg2Uri");
        Intrinsics.checkNotNullParameter(sodUri, "sodUri");
        Intrinsics.checkNotNullParameter(chipAuthenticationStatus, "chipAuthenticationStatus");
        this.f25526d = dg1Uri;
        this.f25527e = dg2Uri;
        this.f25528i = sodUri;
        this.f25529o = chipAuthenticationStatus;
    }

    public final gp.a a() {
        return this.f25529o;
    }

    public final Uri b() {
        return this.f25526d;
    }

    public final Uri c() {
        return this.f25527e;
    }

    public final Uri d() {
        return this.f25528i;
    }

    @Override // android.os.Parcelable
    public final int describeContents() {
        return 0;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof g)) {
            return false;
        }
        g gVar = (g) obj;
        if (Intrinsics.areEqual(this.f25526d, gVar.f25526d) && Intrinsics.areEqual(this.f25527e, gVar.f25527e) && Intrinsics.areEqual(this.f25528i, gVar.f25528i) && this.f25529o == gVar.f25529o) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (((((this.f25526d.hashCode() * 31) + this.f25527e.hashCode()) * 31) + this.f25528i.hashCode()) * 31) + this.f25529o.hashCode();
    }

    public String toString() {
        Uri uri = this.f25526d;
        Uri uri2 = this.f25527e;
        Uri uri3 = this.f25528i;
        gp.a aVar = this.f25529o;
        return "GovernmentIdNfcData(dg1Uri=" + uri + ", dg2Uri=" + uri2 + ", sodUri=" + uri3 + ", chipAuthenticationStatus=" + aVar + ")";
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel dest, int i10) {
        Intrinsics.checkNotNullParameter(dest, "dest");
        dest.writeParcelable(this.f25526d, i10);
        dest.writeParcelable(this.f25527e, i10);
        dest.writeParcelable(this.f25528i, i10);
        dest.writeString(this.f25529o.name());
    }
}
