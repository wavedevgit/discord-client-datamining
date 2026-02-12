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
        public static final a f52966e = new a("AUTO", 0, "auto");

        /* renamed from: i  reason: collision with root package name */
        public static final a f52967i = new a("MANUAL", 1, "manual");

        /* renamed from: o  reason: collision with root package name */
        private static final /* synthetic */ a[] f52968o;

        /* renamed from: p  reason: collision with root package name */
        private static final /* synthetic */ EnumEntries f52969p;

        /* renamed from: d  reason: collision with root package name */
        private final String f52970d;

        static {
            a[] a10 = a();
            f52968o = a10;
            f52969p = hs.a.a(a10);
        }

        private a(String str, int i10, String str2) {
            this.f52970d = str2;
        }

        private static final /* synthetic */ a[] a() {
            return new a[]{f52966e, f52967i};
        }

        public static a valueOf(String str) {
            return (a) Enum.valueOf(a.class, str);
        }

        public static a[] values() {
            return (a[]) f52968o.clone();
        }

        public final String d() {
            return this.f52970d;
        }
    }

    /* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
    /* JADX WARN: Unknown enum class pattern. Please report as an issue! */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b {

        /* renamed from: d  reason: collision with root package name */
        public static final b f52971d = new b("Center", 0);

        /* renamed from: e  reason: collision with root package name */
        public static final b f52972e = new b("Left", 1);

        /* renamed from: i  reason: collision with root package name */
        public static final b f52973i = new b("Right", 2);

        /* renamed from: o  reason: collision with root package name */
        private static final /* synthetic */ b[] f52974o;

        /* renamed from: p  reason: collision with root package name */
        private static final /* synthetic */ EnumEntries f52975p;

        static {
            b[] a10 = a();
            f52974o = a10;
            f52975p = hs.a.a(a10);
        }

        private b(String str, int i10) {
        }

        private static final /* synthetic */ b[] a() {
            return new b[]{f52971d, f52972e, f52973i};
        }

        public static b valueOf(String str) {
            return (b) Enum.valueOf(b.class, str);
        }

        public static b[] values() {
            return (b[]) f52974o.clone();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class c extends a1 {
        @NotNull
        public static final Parcelable.Creator<c> CREATOR = new a();

        /* renamed from: d  reason: collision with root package name */
        private final String f52976d;

        /* renamed from: e  reason: collision with root package name */
        private final a f52977e;

        /* renamed from: i  reason: collision with root package name */
        private final b f52978i;

        /* renamed from: o  reason: collision with root package name */
        private final long f52979o;

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
            this.f52976d = absoluteFilePath;
            this.f52977e = captureMethod;
            this.f52978i = pose;
            this.f52979o = j10;
        }

        @Override // wp.a1
        public String a() {
            return this.f52976d;
        }

        @Override // wp.a1
        public a b() {
            return this.f52977e;
        }

        public final long c() {
            return this.f52979o;
        }

        public final b d() {
            return this.f52978i;
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
            if (Intrinsics.areEqual(this.f52976d, cVar.f52976d) && this.f52977e == cVar.f52977e && this.f52978i == cVar.f52978i && this.f52979o == cVar.f52979o) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return (((((this.f52976d.hashCode() * 31) + this.f52977e.hashCode()) * 31) + this.f52978i.hashCode()) * 31) + Long.hashCode(this.f52979o);
        }

        public String toString() {
            String str = this.f52976d;
            a aVar = this.f52977e;
            b bVar = this.f52978i;
            long j10 = this.f52979o;
            return "SelfieImage(absoluteFilePath=" + str + ", captureMethod=" + aVar + ", pose=" + bVar + ", capturedTimestamp=" + j10 + ")";
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            dest.writeString(this.f52976d);
            dest.writeString(this.f52977e.name());
            dest.writeString(this.f52978i.name());
            dest.writeLong(this.f52979o);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class d extends a1 {
        @NotNull
        public static final Parcelable.Creator<d> CREATOR = new a();

        /* renamed from: d  reason: collision with root package name */
        private final String f52980d;

        /* renamed from: e  reason: collision with root package name */
        private final a f52981e;

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
            this.f52980d = absoluteFilePath;
            this.f52981e = captureMethod;
        }

        @Override // wp.a1
        public String a() {
            return this.f52980d;
        }

        @Override // wp.a1
        public a b() {
            return this.f52981e;
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
            if (Intrinsics.areEqual(this.f52980d, dVar.f52980d) && this.f52981e == dVar.f52981e) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return (this.f52980d.hashCode() * 31) + this.f52981e.hashCode();
        }

        public String toString() {
            String str = this.f52980d;
            a aVar = this.f52981e;
            return "SelfieVideo(absoluteFilePath=" + str + ", captureMethod=" + aVar + ")";
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            dest.writeString(this.f52980d);
            dest.writeString(this.f52981e.name());
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
