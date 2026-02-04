package up;

import android.os.Parcel;
import android.os.Parcelable;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a implements Parcelable {
    @NotNull
    public static final Parcelable.Creator<a> CREATOR = new C0649a();

    /* renamed from: d  reason: collision with root package name */
    private final boolean f50815d;

    /* renamed from: e  reason: collision with root package name */
    private final boolean f50816e;

    /* renamed from: i  reason: collision with root package name */
    private final boolean f50817i;

    /* renamed from: o  reason: collision with root package name */
    private final boolean f50818o;

    /* renamed from: p  reason: collision with root package name */
    private final boolean f50819p;

    /* renamed from: up.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class C0649a implements Parcelable.Creator {
        @Override // android.os.Parcelable.Creator
        /* renamed from: a */
        public final a createFromParcel(Parcel parcel) {
            boolean z10;
            boolean z11;
            boolean z12;
            boolean z13;
            Intrinsics.checkNotNullParameter(parcel, "parcel");
            boolean z14 = false;
            boolean z15 = true;
            if (parcel.readInt() != 0) {
                z10 = false;
                z14 = true;
            } else {
                z10 = false;
            }
            if (parcel.readInt() != 0) {
                z11 = true;
            } else {
                z11 = true;
                z15 = z10;
            }
            if (parcel.readInt() != 0) {
                z12 = z11;
            } else {
                z12 = z11;
                z11 = z10;
            }
            if (parcel.readInt() != 0) {
                z13 = z12;
            } else {
                z13 = z12;
                z12 = z10;
            }
            if (parcel.readInt() == 0) {
                z13 = z10;
            }
            return new a(z14, z15, z11, z12, z13);
        }

        @Override // android.os.Parcelable.Creator
        /* renamed from: b */
        public final a[] newArray(int i10) {
            return new a[i10];
        }
    }

    public a(boolean z10, boolean z11, boolean z12, boolean z13, boolean z14) {
        this.f50815d = z10;
        this.f50816e = z11;
        this.f50817i = z12;
        this.f50818o = z13;
        this.f50819p = z14;
    }

    public final boolean a() {
        return this.f50818o;
    }

    public final boolean b() {
        return this.f50815d;
    }

    public final boolean c() {
        return this.f50816e;
    }

    public final boolean d() {
        return this.f50817i;
    }

    @Override // android.os.Parcelable
    public final int describeContents() {
        return 0;
    }

    public final boolean e() {
        return this.f50819p;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel dest, int i10) {
        Intrinsics.checkNotNullParameter(dest, "dest");
        dest.writeInt(this.f50815d ? 1 : 0);
        dest.writeInt(this.f50816e ? 1 : 0);
        dest.writeInt(this.f50817i ? 1 : 0);
        dest.writeInt(this.f50818o ? 1 : 0);
        dest.writeInt(this.f50819p ? 1 : 0);
    }
}
