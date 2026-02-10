package np;

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
        public static final a f39015e = new a("AUTO", 0, "auto");

        /* renamed from: i  reason: collision with root package name */
        public static final a f39016i = new a("MANUAL", 1, "manual");

        /* renamed from: o  reason: collision with root package name */
        private static final /* synthetic */ a[] f39017o;

        /* renamed from: p  reason: collision with root package name */
        private static final /* synthetic */ EnumEntries f39018p;

        /* renamed from: d  reason: collision with root package name */
        private final String f39019d;

        static {
            a[] a10 = a();
            f39017o = a10;
            f39018p = yr.a.a(a10);
        }

        private a(String str, int i10, String str2) {
            this.f39019d = str2;
        }

        private static final /* synthetic */ a[] a() {
            return new a[]{f39015e, f39016i};
        }

        public static a valueOf(String str) {
            return (a) Enum.valueOf(a.class, str);
        }

        public static a[] values() {
            return (a[]) f39017o.clone();
        }

        public final String d() {
            return this.f39019d;
        }
    }

    /* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
    /* JADX WARN: Unknown enum class pattern. Please report as an issue! */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b {

        /* renamed from: d  reason: collision with root package name */
        public static final b f39020d = new b("Center", 0);

        /* renamed from: e  reason: collision with root package name */
        public static final b f39021e = new b("Left", 1);

        /* renamed from: i  reason: collision with root package name */
        public static final b f39022i = new b("Right", 2);

        /* renamed from: o  reason: collision with root package name */
        private static final /* synthetic */ b[] f39023o;

        /* renamed from: p  reason: collision with root package name */
        private static final /* synthetic */ EnumEntries f39024p;

        static {
            b[] a10 = a();
            f39023o = a10;
            f39024p = yr.a.a(a10);
        }

        private b(String str, int i10) {
        }

        private static final /* synthetic */ b[] a() {
            return new b[]{f39020d, f39021e, f39022i};
        }

        public static b valueOf(String str) {
            return (b) Enum.valueOf(b.class, str);
        }

        public static b[] values() {
            return (b[]) f39023o.clone();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class c extends a1 {
        @NotNull
        public static final Parcelable.Creator<c> CREATOR = new a();

        /* renamed from: d  reason: collision with root package name */
        private final String f39025d;

        /* renamed from: e  reason: collision with root package name */
        private final a f39026e;

        /* renamed from: i  reason: collision with root package name */
        private final b f39027i;

        /* renamed from: o  reason: collision with root package name */
        private final long f39028o;

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
            this.f39025d = absoluteFilePath;
            this.f39026e = captureMethod;
            this.f39027i = pose;
            this.f39028o = j10;
        }

        @Override // np.a1
        public String a() {
            return this.f39025d;
        }

        @Override // np.a1
        public a b() {
            return this.f39026e;
        }

        public final long c() {
            return this.f39028o;
        }

        public final b d() {
            return this.f39027i;
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
            if (Intrinsics.areEqual(this.f39025d, cVar.f39025d) && this.f39026e == cVar.f39026e && this.f39027i == cVar.f39027i && this.f39028o == cVar.f39028o) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return (((((this.f39025d.hashCode() * 31) + this.f39026e.hashCode()) * 31) + this.f39027i.hashCode()) * 31) + Long.hashCode(this.f39028o);
        }

        public String toString() {
            String str = this.f39025d;
            a aVar = this.f39026e;
            b bVar = this.f39027i;
            long j10 = this.f39028o;
            return "SelfieImage(absoluteFilePath=" + str + ", captureMethod=" + aVar + ", pose=" + bVar + ", capturedTimestamp=" + j10 + ")";
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            dest.writeString(this.f39025d);
            dest.writeString(this.f39026e.name());
            dest.writeString(this.f39027i.name());
            dest.writeLong(this.f39028o);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class d extends a1 {
        @NotNull
        public static final Parcelable.Creator<d> CREATOR = new a();

        /* renamed from: d  reason: collision with root package name */
        private final String f39029d;

        /* renamed from: e  reason: collision with root package name */
        private final a f39030e;

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
            this.f39029d = absoluteFilePath;
            this.f39030e = captureMethod;
        }

        @Override // np.a1
        public String a() {
            return this.f39029d;
        }

        @Override // np.a1
        public a b() {
            return this.f39030e;
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
            if (Intrinsics.areEqual(this.f39029d, dVar.f39029d) && this.f39030e == dVar.f39030e) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return (this.f39029d.hashCode() * 31) + this.f39030e.hashCode();
        }

        public String toString() {
            String str = this.f39029d;
            a aVar = this.f39030e;
            return "SelfieVideo(absoluteFilePath=" + str + ", captureMethod=" + aVar + ")";
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            dest.writeString(this.f39029d);
            dest.writeString(this.f39030e.name());
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
