package mn;

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
    private final String f39331d;

    /* renamed from: e  reason: collision with root package name */
    private final b f39332e;

    /* renamed from: i  reason: collision with root package name */
    private final Size f39333i;

    /* renamed from: o  reason: collision with root package name */
    private final int f39334o;

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
        public static final b f39335d = new b("User", 0);

        /* renamed from: e  reason: collision with root package name */
        public static final b f39336e = new b("Environment", 1);

        /* renamed from: i  reason: collision with root package name */
        public static final b f39337i = new b("Unknown", 2);

        /* renamed from: o  reason: collision with root package name */
        private static final /* synthetic */ b[] f39338o;

        /* renamed from: p  reason: collision with root package name */
        private static final /* synthetic */ EnumEntries f39339p;

        static {
            b[] a10 = a();
            f39338o = a10;
            f39339p = pr.a.a(a10);
        }

        private b(String str, int i10) {
        }

        private static final /* synthetic */ b[] a() {
            return new b[]{f39335d, f39336e, f39337i};
        }

        public static b valueOf(String str) {
            return (b) Enum.valueOf(b.class, str);
        }

        public static b[] values() {
            return (b[]) f39338o.clone();
        }
    }

    public v(String label, b facingMode, Size size, int i10) {
        Intrinsics.checkNotNullParameter(label, "label");
        Intrinsics.checkNotNullParameter(facingMode, "facingMode");
        Intrinsics.checkNotNullParameter(size, "size");
        this.f39331d = label;
        this.f39332e = facingMode;
        this.f39333i = size;
        this.f39334o = i10;
    }

    public final double a() {
        if (this.f39333i.getHeight() == 0) {
            return 0.0d;
        }
        return this.f39333i.getWidth() / this.f39333i.getHeight();
    }

    public final b b() {
        return this.f39332e;
    }

    public final int c() {
        return this.f39334o;
    }

    public final String d() {
        return this.f39331d;
    }

    @Override // android.os.Parcelable
    public final int describeContents() {
        return 0;
    }

    public final Size e() {
        return this.f39333i;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel dest, int i10) {
        Intrinsics.checkNotNullParameter(dest, "dest");
        dest.writeString(this.f39331d);
        dest.writeString(this.f39332e.name());
        dest.writeSize(this.f39333i);
        dest.writeInt(this.f39334o);
    }

    public /* synthetic */ v(String str, b bVar, Size size, int i10, int i11, DefaultConstructorMarker defaultConstructorMarker) {
        this((i11 & 1) != 0 ? "" : str, (i11 & 2) != 0 ? b.f39337i : bVar, (i11 & 4) != 0 ? new Size(0, 0) : size, (i11 & 8) != 0 ? 0 : i10);
    }
}
