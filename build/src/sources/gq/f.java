package gq;

import android.os.Parcel;
import android.os.Parcelable;
import java.io.File;
import kotlin.enums.EnumEntries;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class f implements Parcelable {
    @NotNull
    public static final Parcelable.Creator<f> CREATOR = new b();

    /* renamed from: d  reason: collision with root package name */
    private final a f27131d;

    /* renamed from: e  reason: collision with root package name */
    private final File f27132e;

    /* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
    /* JADX WARN: Unknown enum class pattern. Please report as an issue! */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {

        /* renamed from: d  reason: collision with root package name */
        public static final a f27133d = new a("Manual", 0);

        /* renamed from: e  reason: collision with root package name */
        public static final a f27134e = new a("Auto", 1);

        /* renamed from: i  reason: collision with root package name */
        private static final /* synthetic */ a[] f27135i;

        /* renamed from: o  reason: collision with root package name */
        private static final /* synthetic */ EnumEntries f27136o;

        static {
            a[] a10 = a();
            f27135i = a10;
            f27136o = pr.a.a(a10);
        }

        private a(String str, int i10) {
        }

        private static final /* synthetic */ a[] a() {
            return new a[]{f27133d, f27134e};
        }

        public static a valueOf(String str) {
            return (a) Enum.valueOf(a.class, str);
        }

        public static a[] values() {
            return (a[]) f27135i.clone();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b implements Parcelable.Creator {
        @Override // android.os.Parcelable.Creator
        /* renamed from: a */
        public final f createFromParcel(Parcel parcel) {
            Intrinsics.checkNotNullParameter(parcel, "parcel");
            return new f(a.valueOf(parcel.readString()), (File) parcel.readSerializable());
        }

        @Override // android.os.Parcelable.Creator
        /* renamed from: b */
        public final f[] newArray(int i10) {
            return new f[i10];
        }
    }

    public f(a captureMethod, File data) {
        Intrinsics.checkNotNullParameter(captureMethod, "captureMethod");
        Intrinsics.checkNotNullParameter(data, "data");
        this.f27131d = captureMethod;
        this.f27132e = data;
    }

    public final a a() {
        return this.f27131d;
    }

    public final File b() {
        return this.f27132e;
    }

    @Override // android.os.Parcelable
    public final int describeContents() {
        return 0;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof f)) {
            return false;
        }
        f fVar = (f) obj;
        if (this.f27131d == fVar.f27131d && Intrinsics.areEqual(this.f27132e, fVar.f27132e)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (this.f27131d.hashCode() * 31) + this.f27132e.hashCode();
    }

    public String toString() {
        a aVar = this.f27131d;
        File file = this.f27132e;
        return "SelfieCapture(captureMethod=" + aVar + ", data=" + file + ")";
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel dest, int i10) {
        Intrinsics.checkNotNullParameter(dest, "dest");
        dest.writeString(this.f27131d.name());
        dest.writeSerializable(this.f27132e);
    }
}
