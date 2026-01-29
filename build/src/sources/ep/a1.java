package ep;

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
        public static final a f23007e = new a("AUTO", 0, "auto");

        /* renamed from: i  reason: collision with root package name */
        public static final a f23008i = new a("MANUAL", 1, "manual");

        /* renamed from: o  reason: collision with root package name */
        private static final /* synthetic */ a[] f23009o;

        /* renamed from: p  reason: collision with root package name */
        private static final /* synthetic */ EnumEntries f23010p;

        /* renamed from: d  reason: collision with root package name */
        private final String f23011d;

        static {
            a[] a10 = a();
            f23009o = a10;
            f23010p = pr.a.a(a10);
        }

        private a(String str, int i10, String str2) {
            this.f23011d = str2;
        }

        private static final /* synthetic */ a[] a() {
            return new a[]{f23007e, f23008i};
        }

        public static a valueOf(String str) {
            return (a) Enum.valueOf(a.class, str);
        }

        public static a[] values() {
            return (a[]) f23009o.clone();
        }

        public final String d() {
            return this.f23011d;
        }
    }

    /* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
    /* JADX WARN: Unknown enum class pattern. Please report as an issue! */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b {

        /* renamed from: d  reason: collision with root package name */
        public static final b f23012d = new b("Center", 0);

        /* renamed from: e  reason: collision with root package name */
        public static final b f23013e = new b("Left", 1);

        /* renamed from: i  reason: collision with root package name */
        public static final b f23014i = new b("Right", 2);

        /* renamed from: o  reason: collision with root package name */
        private static final /* synthetic */ b[] f23015o;

        /* renamed from: p  reason: collision with root package name */
        private static final /* synthetic */ EnumEntries f23016p;

        static {
            b[] a10 = a();
            f23015o = a10;
            f23016p = pr.a.a(a10);
        }

        private b(String str, int i10) {
        }

        private static final /* synthetic */ b[] a() {
            return new b[]{f23012d, f23013e, f23014i};
        }

        public static b valueOf(String str) {
            return (b) Enum.valueOf(b.class, str);
        }

        public static b[] values() {
            return (b[]) f23015o.clone();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class c extends a1 {
        @NotNull
        public static final Parcelable.Creator<c> CREATOR = new a();

        /* renamed from: d  reason: collision with root package name */
        private final String f23017d;

        /* renamed from: e  reason: collision with root package name */
        private final a f23018e;

        /* renamed from: i  reason: collision with root package name */
        private final b f23019i;

        /* renamed from: o  reason: collision with root package name */
        private final long f23020o;

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
            this.f23017d = absoluteFilePath;
            this.f23018e = captureMethod;
            this.f23019i = pose;
            this.f23020o = j10;
        }

        @Override // ep.a1
        public String a() {
            return this.f23017d;
        }

        @Override // ep.a1
        public a b() {
            return this.f23018e;
        }

        public final long c() {
            return this.f23020o;
        }

        public final b d() {
            return this.f23019i;
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
            if (Intrinsics.areEqual(this.f23017d, cVar.f23017d) && this.f23018e == cVar.f23018e && this.f23019i == cVar.f23019i && this.f23020o == cVar.f23020o) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return (((((this.f23017d.hashCode() * 31) + this.f23018e.hashCode()) * 31) + this.f23019i.hashCode()) * 31) + Long.hashCode(this.f23020o);
        }

        public String toString() {
            String str = this.f23017d;
            a aVar = this.f23018e;
            b bVar = this.f23019i;
            long j10 = this.f23020o;
            return "SelfieImage(absoluteFilePath=" + str + ", captureMethod=" + aVar + ", pose=" + bVar + ", capturedTimestamp=" + j10 + ")";
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            dest.writeString(this.f23017d);
            dest.writeString(this.f23018e.name());
            dest.writeString(this.f23019i.name());
            dest.writeLong(this.f23020o);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class d extends a1 {
        @NotNull
        public static final Parcelable.Creator<d> CREATOR = new a();

        /* renamed from: d  reason: collision with root package name */
        private final String f23021d;

        /* renamed from: e  reason: collision with root package name */
        private final a f23022e;

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
            this.f23021d = absoluteFilePath;
            this.f23022e = captureMethod;
        }

        @Override // ep.a1
        public String a() {
            return this.f23021d;
        }

        @Override // ep.a1
        public a b() {
            return this.f23022e;
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
            if (Intrinsics.areEqual(this.f23021d, dVar.f23021d) && this.f23022e == dVar.f23022e) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return (this.f23021d.hashCode() * 31) + this.f23022e.hashCode();
        }

        public String toString() {
            String str = this.f23021d;
            a aVar = this.f23022e;
            return "SelfieVideo(absoluteFilePath=" + str + ", captureMethod=" + aVar + ")";
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            dest.writeString(this.f23021d);
            dest.writeString(this.f23022e.name());
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
