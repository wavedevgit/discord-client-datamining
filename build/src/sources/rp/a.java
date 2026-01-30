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
    private final boolean f48441d;

    /* renamed from: e  reason: collision with root package name */
    private final boolean f48442e;

    /* renamed from: i  reason: collision with root package name */
    private final boolean f48443i;

    /* renamed from: o  reason: collision with root package name */
    private final boolean f48444o;

    /* renamed from: p  reason: collision with root package name */
    private final boolean f48445p;

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
        this.f48441d = z10;
        this.f48442e = z11;
        this.f48443i = z12;
        this.f48444o = z13;
        this.f48445p = z14;
    }

    public final boolean a() {
        return this.f48444o;
    }

    public final boolean b() {
        return this.f48441d;
    }

    public final boolean c() {
        return this.f48442e;
    }

    public final boolean d() {
        return this.f48443i;
    }

    @Override // android.os.Parcelable
    public final int describeContents() {
        return 0;
    }

    public final boolean e() {
        return this.f48445p;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel dest, int i10) {
        Intrinsics.checkNotNullParameter(dest, "dest");
        dest.writeInt(this.f48441d ? 1 : 0);
        dest.writeInt(this.f48442e ? 1 : 0);
        dest.writeInt(this.f48443i ? 1 : 0);
        dest.writeInt(this.f48444o ? 1 : 0);
        dest.writeInt(this.f48445p ? 1 : 0);
    }
}
