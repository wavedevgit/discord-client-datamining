package wp;

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
        public static final a f52965e = new a("AUTO", 0, "auto");

        /* renamed from: i  reason: collision with root package name */
        public static final a f52966i = new a("MANUAL", 1, "manual");

        /* renamed from: o  reason: collision with root package name */
        private static final /* synthetic */ a[] f52967o;

        /* renamed from: p  reason: collision with root package name */
        private static final /* synthetic */ EnumEntries f52968p;

        /* renamed from: d  reason: collision with root package name */
        private final String f52969d;

        static {
            a[] a10 = a();
            f52967o = a10;
            f52968p = hs.a.a(a10);
        }

        private a(String str, int i10, String str2) {
            this.f52969d = str2;
        }

        private static final /* synthetic */ a[] a() {
            return new a[]{f52965e, f52966i};
        }

        public static a valueOf(String str) {
            return (a) Enum.valueOf(a.class, str);
        }

        public static a[] values() {
            return (a[]) f52967o.clone();
        }

        public final String d() {
            return this.f52969d;
        }
    }

    /* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
    /* JADX WARN: Unknown enum class pattern. Please report as an issue! */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b {

        /* renamed from: d  reason: collision with root package name */
        public static final b f52970d = new b("Center", 0);

        /* renamed from: e  reason: collision with root package name */
        public static final b f52971e = new b("Left", 1);

        /* renamed from: i  reason: collision with root package name */
        public static final b f52972i = new b("Right", 2);

        /* renamed from: o  reason: collision with root package name */
        private static final /* synthetic */ b[] f52973o;

        /* renamed from: p  reason: collision with root package name */
        private static final /* synthetic */ EnumEntries f52974p;

        static {
            b[] a10 = a();
            f52973o = a10;
            f52974p = hs.a.a(a10);
        }

        private b(String str, int i10) {
        }

        private static final /* synthetic */ b[] a() {
            return new b[]{f52970d, f52971e, f52972i};
        }

        public static b valueOf(String str) {
            return (b) Enum.valueOf(b.class, str);
        }

        public static b[] values() {
            return (b[]) f52973o.clone();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class c extends a1 {
        @NotNull
        public static final Parcelable.Creator<c> CREATOR = new a();

        /* renamed from: d  reason: collision with root package name */
        private final String f52975d;

        /* renamed from: e  reason: collision with root package name */
        private final a f52976e;

        /* renamed from: i  reason: collision with root package name */
        private final b f52977i;

        /* renamed from: o  reason: collision with root package name */
        private final long f52978o;

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
            this.f52975d = absoluteFilePath;
            this.f52976e = captureMethod;
            this.f52977i = pose;
            this.f52978o = j10;
        }

        @Override // wp.a1
        public String a() {
            return this.f52975d;
        }

        @Override // wp.a1
        public a b() {
            return this.f52976e;
        }

        public final long c() {
            return this.f52978o;
        }

        public final b d() {
            return this.f52977i;
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
            if (Intrinsics.areEqual(this.f52975d, cVar.f52975d) && this.f52976e == cVar.f52976e && this.f52977i == cVar.f52977i && this.f52978o == cVar.f52978o) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return (((((this.f52975d.hashCode() * 31) + this.f52976e.hashCode()) * 31) + this.f52977i.hashCode()) * 31) + Long.hashCode(this.f52978o);
        }

        public String toString() {
            String str = this.f52975d;
            a aVar = this.f52976e;
            b bVar = this.f52977i;
            long j10 = this.f52978o;
            return "SelfieImage(absoluteFilePath=" + str + ", captureMethod=" + aVar + ", pose=" + bVar + ", capturedTimestamp=" + j10 + ")";
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            dest.writeString(this.f52975d);
            dest.writeString(this.f52976e.name());
            dest.writeString(this.f52977i.name());
            dest.writeLong(this.f52978o);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class d extends a1 {
        @NotNull
        public static final Parcelable.Creator<d> CREATOR = new a();

        /* renamed from: d  reason: collision with root package name */
        private final String f52979d;

        /* renamed from: e  reason: collision with root package name */
        private final a f52980e;

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
            this.f52979d = absoluteFilePath;
            this.f52980e = captureMethod;
        }

        @Override // wp.a1
        public String a() {
            return this.f52979d;
        }

        @Override // wp.a1
        public a b() {
            return this.f52980e;
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
            if (Intrinsics.areEqual(this.f52979d, dVar.f52979d) && this.f52980e == dVar.f52980e) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return (this.f52979d.hashCode() * 31) + this.f52980e.hashCode();
        }

        public String toString() {
            String str = this.f52979d;
            a aVar = this.f52980e;
            return "SelfieVideo(absoluteFilePath=" + str + ", captureMethod=" + aVar + ")";
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            dest.writeString(this.f52979d);
            dest.writeString(this.f52980e.name());
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
