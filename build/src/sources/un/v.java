package un;

import android.os.Parcel;
import android.os.Parcelable;
import android.util.Size;
import kotlin.enums.EnumEntries;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class v implements Parcelable {
    @NotNull
    public static final Parcelable.Creator<v> CREATOR = new a();

    /* renamed from: d  reason: collision with root package name */
    private final String f51828d;

    /* renamed from: e  reason: collision with root package name */
    private final b f51829e;

    /* renamed from: i  reason: collision with root package name */
    private final Size f51830i;

    /* renamed from: o  reason: collision with root package name */
    private final int f51831o;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements Parcelable.Creator {
        @Override // android.os.Parcelable.Creator
        /* renamed from: a */
        public final v createFromParcel(Parcel parcel) {
            Intrinsics.checkNotNullParameter(parcel, "parcel");
            return new v(parcel.readString(), b.valueOf(parcel.readString()), parcel.readSize(), parcel.readInt());
        }

        @Override // android.os.Parcelable.Creator
        /* renamed from: b */
        public final v[] newArray(int i10) {
            return new v[i10];
        }
    }

    /* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
    /* JADX WARN: Unknown enum class pattern. Please report as an issue! */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b {

        /* renamed from: d  reason: collision with root package name */
        public static final b f51832d = new b("User", 0);

        /* renamed from: e  reason: collision with root package name */
        public static final b f51833e = new b("Environment", 1);

        /* renamed from: i  reason: collision with root package name */
        public static final b f51834i = new b("Unknown", 2);

        /* renamed from: o  reason: collision with root package name */
        private static final /* synthetic */ b[] f51835o;

        /* renamed from: p  reason: collision with root package name */
        private static final /* synthetic */ EnumEntries f51836p;

        static {
            b[] a10 = a();
            f51835o = a10;
            f51836p = xr.a.a(a10);
        }

        private b(String str, int i10) {
        }

        private static final /* synthetic */ b[] a() {
            return new b[]{f51832d, f51833e, f51834i};
        }

        public static b valueOf(String str) {
            return (b) Enum.valueOf(b.class, str);
        }

        public static b[] values() {
            return (b[]) f51835o.clone();
        }
    }

    public v(String label, b facingMode, Size size, int i10) {
        Intrinsics.checkNotNullParameter(label, "label");
        Intrinsics.checkNotNullParameter(facingMode, "facingMode");
        Intrinsics.checkNotNullParameter(size, "size");
        this.f51828d = label;
        this.f51829e = facingMode;
        this.f51830i = size;
        this.f51831o = i10;
    }

    public final double a() {
        if (this.f51830i.getHeight() == 0) {
            return 0.0d;
        }
        return this.f51830i.getWidth() / this.f51830i.getHeight();
    }

    public final b b() {
        return this.f51829e;
    }

    public final int c() {
        return this.f51831o;
    }

    public final String d() {
        return this.f51828d;
    }

    @Override // android.os.Parcelable
    public final int describeContents() {
        return 0;
    }

    public final Size e() {
        return this.f51830i;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel dest, int i10) {
        Intrinsics.checkNotNullParameter(dest, "dest");
        dest.writeString(this.f51828d);
        dest.writeString(this.f51829e.name());
        dest.writeSize(this.f51830i);
        dest.writeInt(this.f51831o);
    }

    public /* synthetic */ v(String str, b bVar, Size size, int i10, int i11, DefaultConstructorMarker defaultConstructorMarker) {
        this((i11 & 1) != 0 ? "" : str, (i11 & 2) != 0 ? b.f51834i : bVar, (i11 & 4) != 0 ? new Size(0, 0) : size, (i11 & 8) != 0 ? 0 : i10);
    }
}
