package mp;

import android.os.Parcel;
import android.os.Parcelable;
import kotlin.enums.EnumEntries;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class a1 implements Parcelable {

    /* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
    /* JADX WARN: Unknown enum class pattern. Please report as an issue! */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {

        /* renamed from: e  reason: collision with root package name */
        public static final a f37282e = new a("AUTO", 0, "auto");

        /* renamed from: i  reason: collision with root package name */
        public static final a f37283i = new a("MANUAL", 1, "manual");

        /* renamed from: o  reason: collision with root package name */
        private static final /* synthetic */ a[] f37284o;

        /* renamed from: p  reason: collision with root package name */
        private static final /* synthetic */ EnumEntries f37285p;

        /* renamed from: d  reason: collision with root package name */
        private final String f37286d;

        static {
            a[] a10 = a();
            f37284o = a10;
            f37285p = xr.a.a(a10);
        }

        private a(String str, int i10, String str2) {
            this.f37286d = str2;
        }

        private static final /* synthetic */ a[] a() {
            return new a[]{f37282e, f37283i};
        }

        public static a valueOf(String str) {
            return (a) Enum.valueOf(a.class, str);
        }

        public static a[] values() {
            return (a[]) f37284o.clone();
        }

        public final String d() {
            return this.f37286d;
        }
    }

    /* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
    /* JADX WARN: Unknown enum class pattern. Please report as an issue! */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b {

        /* renamed from: d  reason: collision with root package name */
        public static final b f37287d = new b("Center", 0);

        /* renamed from: e  reason: collision with root package name */
        public static final b f37288e = new b("Left", 1);

        /* renamed from: i  reason: collision with root package name */
        public static final b f37289i = new b("Right", 2);

        /* renamed from: o  reason: collision with root package name */
        private static final /* synthetic */ b[] f37290o;

        /* renamed from: p  reason: collision with root package name */
        private static final /* synthetic */ EnumEntries f37291p;

        static {
            b[] a10 = a();
            f37290o = a10;
            f37291p = xr.a.a(a10);
        }

        private b(String str, int i10) {
        }

        private static final /* synthetic */ b[] a() {
            return new b[]{f37287d, f37288e, f37289i};
        }

        public static b valueOf(String str) {
            return (b) Enum.valueOf(b.class, str);
        }

        public static b[] values() {
            return (b[]) f37290o.clone();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class c extends a1 {
        @NotNull
        public static final Parcelable.Creator<c> CREATOR = new a();

        /* renamed from: d  reason: collision with root package name */
        private final String f37292d;

        /* renamed from: e  reason: collision with root package name */
        private final a f37293e;

        /* renamed from: i  reason: collision with root package name */
        private final b f37294i;

        /* renamed from: o  reason: collision with root package name */
        private final long f37295o;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a implements Parcelable.Creator {
            @Override // android.os.Parcelable.Creator
            /* renamed from: a */
            public final c createFromParcel(Parcel parcel) {
                Intrinsics.checkNotNullParameter(parcel, "parcel");
                return new c(parcel.readString(), a.valueOf(parcel.readString()), b.valueOf(parcel.readString()), parcel.readLong());
            }

            @Override // android.os.Parcelable.Creator
            /* renamed from: b */
            public final c[] newArray(int i10) {
                return new c[i10];
            }
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public c(String absoluteFilePath, a captureMethod, b pose, long j10) {
            super(null);
            Intrinsics.checkNotNullParameter(absoluteFilePath, "absoluteFilePath");
            Intrinsics.checkNotNullParameter(captureMethod, "captureMethod");
            Intrinsics.checkNotNullParameter(pose, "pose");
            this.f37292d = absoluteFilePath;
            this.f37293e = captureMethod;
            this.f37294i = pose;
            this.f37295o = j10;
        }

        @Override // mp.a1
        public String a() {
            return this.f37292d;
        }

        @Override // mp.a1
        public a b() {
            return this.f37293e;
        }

        public final long c() {
            return this.f37295o;
        }

        public final b d() {
            return this.f37294i;
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof c)) {
                return false;
            }
            c cVar = (c) obj;
            if (Intrinsics.areEqual(this.f37292d, cVar.f37292d) && this.f37293e == cVar.f37293e && this.f37294i == cVar.f37294i && this.f37295o == cVar.f37295o) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return (((((this.f37292d.hashCode() * 31) + this.f37293e.hashCode()) * 31) + this.f37294i.hashCode()) * 31) + Long.hashCode(this.f37295o);
        }

        public String toString() {
            String str = this.f37292d;
            a aVar = this.f37293e;
            b bVar = this.f37294i;
            long j10 = this.f37295o;
            return "SelfieImage(absoluteFilePath=" + str + ", captureMethod=" + aVar + ", pose=" + bVar + ", capturedTimestamp=" + j10 + ")";
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            dest.writeString(this.f37292d);
            dest.writeString(this.f37293e.name());
            dest.writeString(this.f37294i.name());
            dest.writeLong(this.f37295o);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class d extends a1 {
        @NotNull
        public static final Parcelable.Creator<d> CREATOR = new a();

        /* renamed from: d  reason: collision with root package name */
        private final String f37296d;

        /* renamed from: e  reason: collision with root package name */
        private final a f37297e;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a implements Parcelable.Creator {
            @Override // android.os.Parcelable.Creator
            /* renamed from: a */
            public final d createFromParcel(Parcel parcel) {
                Intrinsics.checkNotNullParameter(parcel, "parcel");
                return new d(parcel.readString(), a.valueOf(parcel.readString()));
            }

            @Override // android.os.Parcelable.Creator
            /* renamed from: b */
            public final d[] newArray(int i10) {
                return new d[i10];
            }
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public d(String absoluteFilePath, a captureMethod) {
            super(null);
            Intrinsics.checkNotNullParameter(absoluteFilePath, "absoluteFilePath");
            Intrinsics.checkNotNullParameter(captureMethod, "captureMethod");
            this.f37296d = absoluteFilePath;
            this.f37297e = captureMethod;
        }

        @Override // mp.a1
        public String a() {
            return this.f37296d;
        }

        @Override // mp.a1
        public a b() {
            return this.f37297e;
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof d)) {
                return false;
            }
            d dVar = (d) obj;
            if (Intrinsics.areEqual(this.f37296d, dVar.f37296d) && this.f37297e == dVar.f37297e) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return (this.f37296d.hashCode() * 31) + this.f37297e.hashCode();
        }

        public String toString() {
            String str = this.f37296d;
            a aVar = this.f37297e;
            return "SelfieVideo(absoluteFilePath=" + str + ", captureMethod=" + aVar + ")";
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            dest.writeString(this.f37296d);
            dest.writeString(this.f37297e.name());
        }
    }

    public /* synthetic */ a1(DefaultConstructorMarker defaultConstructorMarker) {
        this();
    }

    public abstract String a();

    public abstract a b();

    private a1() {
    }
}
