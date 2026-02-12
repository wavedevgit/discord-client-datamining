package fo;

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
    private final String f24132d;

    /* renamed from: e  reason: collision with root package name */
    private final b f24133e;

    /* renamed from: i  reason: collision with root package name */
    private final Size f24134i;

    /* renamed from: o  reason: collision with root package name */
    private final int f24135o;

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
        public static final b f24136d = new b("User", 0);

        /* renamed from: e  reason: collision with root package name */
        public static final b f24137e = new b("Environment", 1);

        /* renamed from: i  reason: collision with root package name */
        public static final b f24138i = new b("Unknown", 2);

        /* renamed from: o  reason: collision with root package name */
        private static final /* synthetic */ b[] f24139o;

        /* renamed from: p  reason: collision with root package name */
        private static final /* synthetic */ EnumEntries f24140p;

        static {
            b[] a10 = a();
            f24139o = a10;
            f24140p = hs.a.a(a10);
        }

        private b(String str, int i10) {
        }

        private static final /* synthetic */ b[] a() {
            return new b[]{f24136d, f24137e, f24138i};
        }

        public static b valueOf(String str) {
            return (b) Enum.valueOf(b.class, str);
        }

        public static b[] values() {
            return (b[]) f24139o.clone();
        }
    }

    public v(String label, b facingMode, Size size, int i10) {
        Intrinsics.checkNotNullParameter(label, "label");
        Intrinsics.checkNotNullParameter(facingMode, "facingMode");
        Intrinsics.checkNotNullParameter(size, "size");
        this.f24132d = label;
        this.f24133e = facingMode;
        this.f24134i = size;
        this.f24135o = i10;
    }

    public final double a() {
        if (this.f24134i.getHeight() == 0) {
            return 0.0d;
        }
        return this.f24134i.getWidth() / this.f24134i.getHeight();
    }

    public final b b() {
        return this.f24133e;
    }

    public final int c() {
        return this.f24135o;
    }

    public final String d() {
        return this.f24132d;
    }

    @Override // android.os.Parcelable
    public final int describeContents() {
        return 0;
    }

    public final Size e() {
        return this.f24134i;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel dest, int i10) {
        Intrinsics.checkNotNullParameter(dest, "dest");
        dest.writeString(this.f24132d);
        dest.writeString(this.f24133e.name());
        dest.writeSize(this.f24134i);
        dest.writeInt(this.f24135o);
    }

    public /* synthetic */ v(String str, b bVar, Size size, int i10, int i11, DefaultConstructorMarker defaultConstructorMarker) {
        this((i11 & 1) != 0 ? "" : str, (i11 & 2) != 0 ? b.f24138i : bVar, (i11 & 4) != 0 ? new Size(0, 0) : size, (i11 & 8) != 0 ? 0 : i10);
    }
}
