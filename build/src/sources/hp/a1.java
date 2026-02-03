package hp;

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
        public static final a f27133e = new a("AUTO", 0, "auto");

        /* renamed from: i  reason: collision with root package name */
        public static final a f27134i = new a("MANUAL", 1, "manual");

        /* renamed from: o  reason: collision with root package name */
        private static final /* synthetic */ a[] f27135o;

        /* renamed from: p  reason: collision with root package name */
        private static final /* synthetic */ EnumEntries f27136p;

        /* renamed from: d  reason: collision with root package name */
        private final String f27137d;

        static {
            a[] a10 = a();
            f27135o = a10;
            f27136p = sr.a.a(a10);
        }

        private a(String str, int i10, String str2) {
            this.f27137d = str2;
        }

        private static final /* synthetic */ a[] a() {
            return new a[]{f27133e, f27134i};
        }

        public static a valueOf(String str) {
            return (a) Enum.valueOf(a.class, str);
        }

        public static a[] values() {
            return (a[]) f27135o.clone();
        }

        public final String d() {
            return this.f27137d;
        }
    }

    /* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
    /* JADX WARN: Unknown enum class pattern. Please report as an issue! */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b {

        /* renamed from: d  reason: collision with root package name */
        public static final b f27138d = new b("Center", 0);

        /* renamed from: e  reason: collision with root package name */
        public static final b f27139e = new b("Left", 1);

        /* renamed from: i  reason: collision with root package name */
        public static final b f27140i = new b("Right", 2);

        /* renamed from: o  reason: collision with root package name */
        private static final /* synthetic */ b[] f27141o;

        /* renamed from: p  reason: collision with root package name */
        private static final /* synthetic */ EnumEntries f27142p;

        static {
            b[] a10 = a();
            f27141o = a10;
            f27142p = sr.a.a(a10);
        }

        private b(String str, int i10) {
        }

        private static final /* synthetic */ b[] a() {
            return new b[]{f27138d, f27139e, f27140i};
        }

        public static b valueOf(String str) {
            return (b) Enum.valueOf(b.class, str);
        }

        public static b[] values() {
            return (b[]) f27141o.clone();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class c extends a1 {
        @NotNull
        public static final Parcelable.Creator<c> CREATOR = new a();

        /* renamed from: d  reason: collision with root package name */
        private final String f27143d;

        /* renamed from: e  reason: collision with root package name */
        private final a f27144e;

        /* renamed from: i  reason: collision with root package name */
        private final b f27145i;

        /* renamed from: o  reason: collision with root package name */
        private final long f27146o;

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
            this.f27143d = absoluteFilePath;
            this.f27144e = captureMethod;
            this.f27145i = pose;
            this.f27146o = j10;
        }

        @Override // hp.a1
        public String a() {
            return this.f27143d;
        }

        @Override // hp.a1
        public a b() {
            return this.f27144e;
        }

        public final long c() {
            return this.f27146o;
        }

        public final b d() {
            return this.f27145i;
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
            if (Intrinsics.areEqual(this.f27143d, cVar.f27143d) && this.f27144e == cVar.f27144e && this.f27145i == cVar.f27145i && this.f27146o == cVar.f27146o) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return (((((this.f27143d.hashCode() * 31) + this.f27144e.hashCode()) * 31) + this.f27145i.hashCode()) * 31) + Long.hashCode(this.f27146o);
        }

        public String toString() {
            String str = this.f27143d;
            a aVar = this.f27144e;
            b bVar = this.f27145i;
            long j10 = this.f27146o;
            return "SelfieImage(absoluteFilePath=" + str + ", captureMethod=" + aVar + ", pose=" + bVar + ", capturedTimestamp=" + j10 + ")";
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            dest.writeString(this.f27143d);
            dest.writeString(this.f27144e.name());
            dest.writeString(this.f27145i.name());
            dest.writeLong(this.f27146o);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class d extends a1 {
        @NotNull
        public static final Parcelable.Creator<d> CREATOR = new a();

        /* renamed from: d  reason: collision with root package name */
        private final String f27147d;

        /* renamed from: e  reason: collision with root package name */
        private final a f27148e;

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
            this.f27147d = absoluteFilePath;
            this.f27148e = captureMethod;
        }

        @Override // hp.a1
        public String a() {
            return this.f27147d;
        }

        @Override // hp.a1
        public a b() {
            return this.f27148e;
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
            if (Intrinsics.areEqual(this.f27147d, dVar.f27147d) && this.f27148e == dVar.f27148e) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return (this.f27147d.hashCode() * 31) + this.f27148e.hashCode();
        }

        public String toString() {
            String str = this.f27147d;
            a aVar = this.f27148e;
            return "SelfieVideo(absoluteFilePath=" + str + ", captureMethod=" + aVar + ")";
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            dest.writeString(this.f27147d);
            dest.writeString(this.f27148e.name());
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
