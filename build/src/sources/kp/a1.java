package kp;

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
        public static final a f35126e = new a("AUTO", 0, "auto");

        /* renamed from: i  reason: collision with root package name */
        public static final a f35127i = new a("MANUAL", 1, "manual");

        /* renamed from: o  reason: collision with root package name */
        private static final /* synthetic */ a[] f35128o;

        /* renamed from: p  reason: collision with root package name */
        private static final /* synthetic */ EnumEntries f35129p;

        /* renamed from: d  reason: collision with root package name */
        private final String f35130d;

        static {
            a[] a10 = a();
            f35128o = a10;
            f35129p = vr.a.a(a10);
        }

        private a(String str, int i10, String str2) {
            this.f35130d = str2;
        }

        private static final /* synthetic */ a[] a() {
            return new a[]{f35126e, f35127i};
        }

        public static a valueOf(String str) {
            return (a) Enum.valueOf(a.class, str);
        }

        public static a[] values() {
            return (a[]) f35128o.clone();
        }

        public final String d() {
            return this.f35130d;
        }
    }

    /* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
    /* JADX WARN: Unknown enum class pattern. Please report as an issue! */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b {

        /* renamed from: d  reason: collision with root package name */
        public static final b f35131d = new b("Center", 0);

        /* renamed from: e  reason: collision with root package name */
        public static final b f35132e = new b("Left", 1);

        /* renamed from: i  reason: collision with root package name */
        public static final b f35133i = new b("Right", 2);

        /* renamed from: o  reason: collision with root package name */
        private static final /* synthetic */ b[] f35134o;

        /* renamed from: p  reason: collision with root package name */
        private static final /* synthetic */ EnumEntries f35135p;

        static {
            b[] a10 = a();
            f35134o = a10;
            f35135p = vr.a.a(a10);
        }

        private b(String str, int i10) {
        }

        private static final /* synthetic */ b[] a() {
            return new b[]{f35131d, f35132e, f35133i};
        }

        public static b valueOf(String str) {
            return (b) Enum.valueOf(b.class, str);
        }

        public static b[] values() {
            return (b[]) f35134o.clone();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class c extends a1 {
        @NotNull
        public static final Parcelable.Creator<c> CREATOR = new a();

        /* renamed from: d  reason: collision with root package name */
        private final String f35136d;

        /* renamed from: e  reason: collision with root package name */
        private final a f35137e;

        /* renamed from: i  reason: collision with root package name */
        private final b f35138i;

        /* renamed from: o  reason: collision with root package name */
        private final long f35139o;

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
            this.f35136d = absoluteFilePath;
            this.f35137e = captureMethod;
            this.f35138i = pose;
            this.f35139o = j10;
        }

        @Override // kp.a1
        public String a() {
            return this.f35136d;
        }

        @Override // kp.a1
        public a b() {
            return this.f35137e;
        }

        public final long c() {
            return this.f35139o;
        }

        public final b d() {
            return this.f35138i;
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
            if (Intrinsics.areEqual(this.f35136d, cVar.f35136d) && this.f35137e == cVar.f35137e && this.f35138i == cVar.f35138i && this.f35139o == cVar.f35139o) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return (((((this.f35136d.hashCode() * 31) + this.f35137e.hashCode()) * 31) + this.f35138i.hashCode()) * 31) + Long.hashCode(this.f35139o);
        }

        public String toString() {
            String str = this.f35136d;
            a aVar = this.f35137e;
            b bVar = this.f35138i;
            long j10 = this.f35139o;
            return "SelfieImage(absoluteFilePath=" + str + ", captureMethod=" + aVar + ", pose=" + bVar + ", capturedTimestamp=" + j10 + ")";
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            dest.writeString(this.f35136d);
            dest.writeString(this.f35137e.name());
            dest.writeString(this.f35138i.name());
            dest.writeLong(this.f35139o);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class d extends a1 {
        @NotNull
        public static final Parcelable.Creator<d> CREATOR = new a();

        /* renamed from: d  reason: collision with root package name */
        private final String f35140d;

        /* renamed from: e  reason: collision with root package name */
        private final a f35141e;

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
            this.f35140d = absoluteFilePath;
            this.f35141e = captureMethod;
        }

        @Override // kp.a1
        public String a() {
            return this.f35140d;
        }

        @Override // kp.a1
        public a b() {
            return this.f35141e;
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
            if (Intrinsics.areEqual(this.f35140d, dVar.f35140d) && this.f35141e == dVar.f35141e) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return (this.f35140d.hashCode() * 31) + this.f35141e.hashCode();
        }

        public String toString() {
            String str = this.f35140d;
            a aVar = this.f35141e;
            return "SelfieVideo(absoluteFilePath=" + str + ", captureMethod=" + aVar + ")";
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            dest.writeString(this.f35140d);
            dest.writeString(this.f35141e.name());
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
