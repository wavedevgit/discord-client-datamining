package rp;

import android.os.Parcel;
import android.os.Parcelable;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a implements Parcelable {
    @NotNull
    public static final Parcelable.Creator<a> CREATOR = new C0601a();

    /* renamed from: d  reason: collision with root package name */
    private final boolean f48425d;

    /* renamed from: e  reason: collision with root package name */
    private final boolean f48426e;

    /* renamed from: i  reason: collision with root package name */
    private final boolean f48427i;

    /* renamed from: o  reason: collision with root package name */
    private final boolean f48428o;

    /* renamed from: p  reason: collision with root package name */
    private final boolean f48429p;

    /* renamed from: rp.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class C0601a implements Parcelable.Creator {
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
        this.f48425d = z10;
        this.f48426e = z11;
        this.f48427i = z12;
        this.f48428o = z13;
        this.f48429p = z14;
    }

    public final boolean a() {
        return this.f48428o;
    }

    public final boolean b() {
        return this.f48425d;
    }

    public final boolean c() {
        return this.f48426e;
    }

    public final boolean d() {
        return this.f48427i;
    }

    @Override // android.os.Parcelable
    public final int describeContents() {
        return 0;
    }

    public final boolean e() {
        return this.f48429p;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel dest, int i10) {
        Intrinsics.checkNotNullParameter(dest, "dest");
        dest.writeInt(this.f48425d ? 1 : 0);
        dest.writeInt(this.f48426e ? 1 : 0);
        dest.writeInt(this.f48427i ? 1 : 0);
        dest.writeInt(this.f48428o ? 1 : 0);
        dest.writeInt(this.f48429p ? 1 : 0);
    }
}
