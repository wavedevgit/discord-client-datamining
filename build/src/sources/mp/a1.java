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
        public static final a f37330e = new a("AUTO", 0, "auto");

        /* renamed from: i  reason: collision with root package name */
        public static final a f37331i = new a("MANUAL", 1, "manual");

        /* renamed from: o  reason: collision with root package name */
        private static final /* synthetic */ a[] f37332o;

        /* renamed from: p  reason: collision with root package name */
        private static final /* synthetic */ EnumEntries f37333p;

        /* renamed from: d  reason: collision with root package name */
        private final String f37334d;

        static {
            a[] a10 = a();
            f37332o = a10;
            f37333p = xr.a.a(a10);
        }

        private a(String str, int i10, String str2) {
            this.f37334d = str2;
        }

        private static final /* synthetic */ a[] a() {
            return new a[]{f37330e, f37331i};
        }

        public static a valueOf(String str) {
            return (a) Enum.valueOf(a.class, str);
        }

        public static a[] values() {
            return (a[]) f37332o.clone();
        }

        public final String d() {
            return this.f37334d;
        }
    }

    /* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
    /* JADX WARN: Unknown enum class pattern. Please report as an issue! */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b {

        /* renamed from: d  reason: collision with root package name */
        public static final b f37335d = new b("Center", 0);

        /* renamed from: e  reason: collision with root package name */
        public static final b f37336e = new b("Left", 1);

        /* renamed from: i  reason: collision with root package name */
        public static final b f37337i = new b("Right", 2);

        /* renamed from: o  reason: collision with root package name */
        private static final /* synthetic */ b[] f37338o;

        /* renamed from: p  reason: collision with root package name */
        private static final /* synthetic */ EnumEntries f37339p;

        static {
            b[] a10 = a();
            f37338o = a10;
            f37339p = xr.a.a(a10);
        }

        private b(String str, int i10) {
        }

        private static final /* synthetic */ b[] a() {
            return new b[]{f37335d, f37336e, f37337i};
        }

        public static b valueOf(String str) {
            return (b) Enum.valueOf(b.class, str);
        }

        public static b[] values() {
            return (b[]) f37338o.clone();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class c extends a1 {
        @NotNull
        public static final Parcelable.Creator<c> CREATOR = new a();

        /* renamed from: d  reason: collision with root package name */
        private final String f37340d;

        /* renamed from: e  reason: collision with root package name */
        private final a f37341e;

        /* renamed from: i  reason: collision with root package name */
        private final b f37342i;

        /* renamed from: o  reason: collision with root package name */
        private final long f37343o;

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
            this.f37340d = absoluteFilePath;
            this.f37341e = captureMethod;
            this.f37342i = pose;
            this.f37343o = j10;
        }

        @Override // mp.a1
        public String a() {
            return this.f37340d;
        }

        @Override // mp.a1
        public a b() {
            return this.f37341e;
        }

        public final long c() {
            return this.f37343o;
        }

        public final b d() {
            return this.f37342i;
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
            if (Intrinsics.areEqual(this.f37340d, cVar.f37340d) && this.f37341e == cVar.f37341e && this.f37342i == cVar.f37342i && this.f37343o == cVar.f37343o) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return (((((this.f37340d.hashCode() * 31) + this.f37341e.hashCode()) * 31) + this.f37342i.hashCode()) * 31) + Long.hashCode(this.f37343o);
        }

        public String toString() {
            String str = this.f37340d;
            a aVar = this.f37341e;
            b bVar = this.f37342i;
            long j10 = this.f37343o;
            return "SelfieImage(absoluteFilePath=" + str + ", captureMethod=" + aVar + ", pose=" + bVar + ", capturedTimestamp=" + j10 + ")";
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            dest.writeString(this.f37340d);
            dest.writeString(this.f37341e.name());
            dest.writeString(this.f37342i.name());
            dest.writeLong(this.f37343o);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class d extends a1 {
        @NotNull
        public static final Parcelable.Creator<d> CREATOR = new a();

        /* renamed from: d  reason: collision with root package name */
        private final String f37344d;

        /* renamed from: e  reason: collision with root package name */
        private final a f37345e;

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
            this.f37344d = absoluteFilePath;
            this.f37345e = captureMethod;
        }

        @Override // mp.a1
        public String a() {
            return this.f37344d;
        }

        @Override // mp.a1
        public a b() {
            return this.f37345e;
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
            if (Intrinsics.areEqual(this.f37344d, dVar.f37344d) && this.f37345e == dVar.f37345e) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return (this.f37344d.hashCode() * 31) + this.f37345e.hashCode();
        }

        public String toString() {
            String str = this.f37344d;
            a aVar = this.f37345e;
            return "SelfieVideo(absoluteFilePath=" + str + ", captureMethod=" + aVar + ")";
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            dest.writeString(this.f37344d);
            dest.writeString(this.f37345e.name());
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
