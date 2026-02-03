package sp;

import android.os.Parcel;
import android.os.Parcelable;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a implements Parcelable {
    @NotNull
    public static final Parcelable.Creator<a> CREATOR = new C0621a();

    /* renamed from: d  reason: collision with root package name */
    private final boolean f49222d;

    /* renamed from: e  reason: collision with root package name */
    private final boolean f49223e;

    /* renamed from: i  reason: collision with root package name */
    private final boolean f49224i;

    /* renamed from: o  reason: collision with root package name */
    private final boolean f49225o;

    /* renamed from: p  reason: collision with root package name */
    private final boolean f49226p;

    /* renamed from: sp.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class C0621a implements Parcelable.Creator {
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
        this.f49222d = z10;
        this.f49223e = z11;
        this.f49224i = z12;
        this.f49225o = z13;
        this.f49226p = z14;
    }

    public final boolean a() {
        return this.f49225o;
    }

    public final boolean b() {
        return this.f49222d;
    }

    public final boolean c() {
        return this.f49223e;
    }

    public final boolean d() {
        return this.f49224i;
    }

    @Override // android.os.Parcelable
    public final int describeContents() {
        return 0;
    }

    public final boolean e() {
        return this.f49226p;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel dest, int i10) {
        Intrinsics.checkNotNullParameter(dest, "dest");
        dest.writeInt(this.f49222d ? 1 : 0);
        dest.writeInt(this.f49223e ? 1 : 0);
        dest.writeInt(this.f49224i ? 1 : 0);
        dest.writeInt(this.f49225o ? 1 : 0);
        dest.writeInt(this.f49226p ? 1 : 0);
    }
}
