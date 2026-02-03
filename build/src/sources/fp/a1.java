package fp;

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
        public static final a f24538e = new a("AUTO", 0, "auto");

        /* renamed from: i  reason: collision with root package name */
        public static final a f24539i = new a("MANUAL", 1, "manual");

        /* renamed from: o  reason: collision with root package name */
        private static final /* synthetic */ a[] f24540o;

        /* renamed from: p  reason: collision with root package name */
        private static final /* synthetic */ EnumEntries f24541p;

        /* renamed from: d  reason: collision with root package name */
        private final String f24542d;

        static {
            a[] a10 = a();
            f24540o = a10;
            f24541p = qr.a.a(a10);
        }

        private a(String str, int i10, String str2) {
            this.f24542d = str2;
        }

        private static final /* synthetic */ a[] a() {
            return new a[]{f24538e, f24539i};
        }

        public static a valueOf(String str) {
            return (a) Enum.valueOf(a.class, str);
        }

        public static a[] values() {
            return (a[]) f24540o.clone();
        }

        public final String d() {
            return this.f24542d;
        }
    }

    /* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
    /* JADX WARN: Unknown enum class pattern. Please report as an issue! */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b {

        /* renamed from: d  reason: collision with root package name */
        public static final b f24543d = new b("Center", 0);

        /* renamed from: e  reason: collision with root package name */
        public static final b f24544e = new b("Left", 1);

        /* renamed from: i  reason: collision with root package name */
        public static final b f24545i = new b("Right", 2);

        /* renamed from: o  reason: collision with root package name */
        private static final /* synthetic */ b[] f24546o;

        /* renamed from: p  reason: collision with root package name */
        private static final /* synthetic */ EnumEntries f24547p;

        static {
            b[] a10 = a();
            f24546o = a10;
            f24547p = qr.a.a(a10);
        }

        private b(String str, int i10) {
        }

        private static final /* synthetic */ b[] a() {
            return new b[]{f24543d, f24544e, f24545i};
        }

        public static b valueOf(String str) {
            return (b) Enum.valueOf(b.class, str);
        }

        public static b[] values() {
            return (b[]) f24546o.clone();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class c extends a1 {
        @NotNull
        public static final Parcelable.Creator<c> CREATOR = new a();

        /* renamed from: d  reason: collision with root package name */
        private final String f24548d;

        /* renamed from: e  reason: collision with root package name */
        private final a f24549e;

        /* renamed from: i  reason: collision with root package name */
        private final b f24550i;

        /* renamed from: o  reason: collision with root package name */
        private final long f24551o;

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
            this.f24548d = absoluteFilePath;
            this.f24549e = captureMethod;
            this.f24550i = pose;
            this.f24551o = j10;
        }

        @Override // fp.a1
        public String a() {
            return this.f24548d;
        }

        @Override // fp.a1
        public a b() {
            return this.f24549e;
        }

        public final long c() {
            return this.f24551o;
        }

        public final b d() {
            return this.f24550i;
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
            if (Intrinsics.areEqual(this.f24548d, cVar.f24548d) && this.f24549e == cVar.f24549e && this.f24550i == cVar.f24550i && this.f24551o == cVar.f24551o) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return (((((this.f24548d.hashCode() * 31) + this.f24549e.hashCode()) * 31) + this.f24550i.hashCode()) * 31) + Long.hashCode(this.f24551o);
        }

        public String toString() {
            String str = this.f24548d;
            a aVar = this.f24549e;
            b bVar = this.f24550i;
            long j10 = this.f24551o;
            return "SelfieImage(absoluteFilePath=" + str + ", captureMethod=" + aVar + ", pose=" + bVar + ", capturedTimestamp=" + j10 + ")";
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            dest.writeString(this.f24548d);
            dest.writeString(this.f24549e.name());
            dest.writeString(this.f24550i.name());
            dest.writeLong(this.f24551o);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class d extends a1 {
        @NotNull
        public static final Parcelable.Creator<d> CREATOR = new a();

        /* renamed from: d  reason: collision with root package name */
        private final String f24552d;

        /* renamed from: e  reason: collision with root package name */
        private final a f24553e;

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
            this.f24552d = absoluteFilePath;
            this.f24553e = captureMethod;
        }

        @Override // fp.a1
        public String a() {
            return this.f24552d;
        }

        @Override // fp.a1
        public a b() {
            return this.f24553e;
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
            if (Intrinsics.areEqual(this.f24552d, dVar.f24552d) && this.f24553e == dVar.f24553e) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return (this.f24552d.hashCode() * 31) + this.f24553e.hashCode();
        }

        public String toString() {
            String str = this.f24552d;
            a aVar = this.f24553e;
            return "SelfieVideo(absoluteFilePath=" + str + ", captureMethod=" + aVar + ")";
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            dest.writeString(this.f24552d);
            dest.writeString(this.f24553e.name());
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
