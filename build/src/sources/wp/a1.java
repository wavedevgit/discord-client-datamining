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
        public static final a f53534e = new a("AUTO", 0, "auto");

        /* renamed from: i  reason: collision with root package name */
        public static final a f53535i = new a("MANUAL", 1, "manual");

        /* renamed from: o  reason: collision with root package name */
        private static final /* synthetic */ a[] f53536o;

        /* renamed from: p  reason: collision with root package name */
        private static final /* synthetic */ EnumEntries f53537p;

        /* renamed from: d  reason: collision with root package name */
        private final String f53538d;

        static {
            a[] a10 = a();
            f53536o = a10;
            f53537p = hs.a.a(a10);
        }

        private a(String str, int i10, String str2) {
            this.f53538d = str2;
        }

        private static final /* synthetic */ a[] a() {
            return new a[]{f53534e, f53535i};
        }

        public static a valueOf(String str) {
            return (a) Enum.valueOf(a.class, str);
        }

        public static a[] values() {
            return (a[]) f53536o.clone();
        }

        public final String d() {
            return this.f53538d;
        }
    }

    /* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
    /* JADX WARN: Unknown enum class pattern. Please report as an issue! */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b {

        /* renamed from: d  reason: collision with root package name */
        public static final b f53539d = new b("Center", 0);

        /* renamed from: e  reason: collision with root package name */
        public static final b f53540e = new b("Left", 1);

        /* renamed from: i  reason: collision with root package name */
        public static final b f53541i = new b("Right", 2);

        /* renamed from: o  reason: collision with root package name */
        private static final /* synthetic */ b[] f53542o;

        /* renamed from: p  reason: collision with root package name */
        private static final /* synthetic */ EnumEntries f53543p;

        static {
            b[] a10 = a();
            f53542o = a10;
            f53543p = hs.a.a(a10);
        }

        private b(String str, int i10) {
        }

        private static final /* synthetic */ b[] a() {
            return new b[]{f53539d, f53540e, f53541i};
        }

        public static b valueOf(String str) {
            return (b) Enum.valueOf(b.class, str);
        }

        public static b[] values() {
            return (b[]) f53542o.clone();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class c extends a1 {
        @NotNull
        public static final Parcelable.Creator<c> CREATOR = new a();

        /* renamed from: d  reason: collision with root package name */
        private final String f53544d;

        /* renamed from: e  reason: collision with root package name */
        private final a f53545e;

        /* renamed from: i  reason: collision with root package name */
        private final b f53546i;

        /* renamed from: o  reason: collision with root package name */
        private final long f53547o;

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
            this.f53544d = absoluteFilePath;
            this.f53545e = captureMethod;
            this.f53546i = pose;
            this.f53547o = j10;
        }

        @Override // wp.a1
        public String a() {
            return this.f53544d;
        }

        @Override // wp.a1
        public a b() {
            return this.f53545e;
        }

        public final long c() {
            return this.f53547o;
        }

        public final b d() {
            return this.f53546i;
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
            if (Intrinsics.areEqual(this.f53544d, cVar.f53544d) && this.f53545e == cVar.f53545e && this.f53546i == cVar.f53546i && this.f53547o == cVar.f53547o) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return (((((this.f53544d.hashCode() * 31) + this.f53545e.hashCode()) * 31) + this.f53546i.hashCode()) * 31) + Long.hashCode(this.f53547o);
        }

        public String toString() {
            String str = this.f53544d;
            a aVar = this.f53545e;
            b bVar = this.f53546i;
            long j10 = this.f53547o;
            return "SelfieImage(absoluteFilePath=" + str + ", captureMethod=" + aVar + ", pose=" + bVar + ", capturedTimestamp=" + j10 + ")";
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            dest.writeString(this.f53544d);
            dest.writeString(this.f53545e.name());
            dest.writeString(this.f53546i.name());
            dest.writeLong(this.f53547o);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class d extends a1 {
        @NotNull
        public static final Parcelable.Creator<d> CREATOR = new a();

        /* renamed from: d  reason: collision with root package name */
        private final String f53548d;

        /* renamed from: e  reason: collision with root package name */
        private final a f53549e;

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
            this.f53548d = absoluteFilePath;
            this.f53549e = captureMethod;
        }

        @Override // wp.a1
        public String a() {
            return this.f53548d;
        }

        @Override // wp.a1
        public a b() {
            return this.f53549e;
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
            if (Intrinsics.areEqual(this.f53548d, dVar.f53548d) && this.f53549e == dVar.f53549e) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return (this.f53548d.hashCode() * 31) + this.f53549e.hashCode();
        }

        public String toString() {
            String str = this.f53548d;
            a aVar = this.f53549e;
            return "SelfieVideo(absoluteFilePath=" + str + ", captureMethod=" + aVar + ")";
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            dest.writeString(this.f53548d);
            dest.writeString(this.f53549e.name());
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
