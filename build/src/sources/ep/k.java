package ep;

import android.net.Uri;
import android.os.Parcel;
import android.os.Parcelable;
import kotlin.enums.EnumEntries;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class k implements Parcelable {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a extends k {

        /* renamed from: d  reason: collision with root package name */
        public static final a f21697d = new a();
        @NotNull
        public static final Parcelable.Creator<a> CREATOR = new C0302a();

        /* renamed from: ep.k$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class C0302a implements Parcelable.Creator {
            @Override // android.os.Parcelable.Creator
            /* renamed from: a */
            public final a createFromParcel(Parcel parcel) {
                Intrinsics.checkNotNullParameter(parcel, "parcel");
                parcel.readInt();
                return a.f21697d;
            }

            @Override // android.os.Parcelable.Creator
            /* renamed from: b */
            public final a[] newArray(int i10) {
                return new a[i10];
            }
        }

        private a() {
            super(null);
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
        }

        public boolean equals(Object obj) {
            if (this == obj || (obj instanceof a)) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return -869674698;
        }

        public String toString() {
            return "Cancel";
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            dest.writeInt(1);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b extends k {
        @NotNull
        public static final Parcelable.Creator<b> CREATOR = new a();

        /* renamed from: d  reason: collision with root package name */
        private final String f21698d;

        /* renamed from: e  reason: collision with root package name */
        private final c f21699e;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a implements Parcelable.Creator {
            @Override // android.os.Parcelable.Creator
            /* renamed from: a */
            public final b createFromParcel(Parcel parcel) {
                Intrinsics.checkNotNullParameter(parcel, "parcel");
                return new b(parcel.readString(), c.valueOf(parcel.readString()));
            }

            @Override // android.os.Parcelable.Creator
            /* renamed from: b */
            public final b[] newArray(int i10) {
                return new b[i10];
            }
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public b(String str, c cause) {
            super(null);
            Intrinsics.checkNotNullParameter(cause, "cause");
            this.f21698d = str;
            this.f21699e = cause;
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            dest.writeString(this.f21698d);
            dest.writeString(this.f21699e.name());
        }
    }

    /* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
    /* JADX WARN: Unknown enum class pattern. Please report as an issue! */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class c {

        /* renamed from: d  reason: collision with root package name */
        public static final c f21700d = new c("AuthenticationError", 0);

        /* renamed from: e  reason: collision with root package name */
        public static final c f21701e = new c("Unknown", 1);

        /* renamed from: i  reason: collision with root package name */
        private static final /* synthetic */ c[] f21702i;

        /* renamed from: o  reason: collision with root package name */
        private static final /* synthetic */ EnumEntries f21703o;

        static {
            c[] a10 = a();
            f21702i = a10;
            f21703o = vr.a.a(a10);
        }

        private c(String str, int i10) {
        }

        private static final /* synthetic */ c[] a() {
            return new c[]{f21700d, f21701e};
        }

        public static c valueOf(String str) {
            return (c) Enum.valueOf(c.class, str);
        }

        public static c[] values() {
            return (c[]) f21702i.clone();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class d extends k {
        @NotNull
        public static final Parcelable.Creator<d> CREATOR = new a();

        /* renamed from: d  reason: collision with root package name */
        private final Uri f21704d;

        /* renamed from: e  reason: collision with root package name */
        private final Uri f21705e;

        /* renamed from: i  reason: collision with root package name */
        private final Uri f21706i;

        /* renamed from: o  reason: collision with root package name */
        private final ep.a f21707o;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a implements Parcelable.Creator {
            @Override // android.os.Parcelable.Creator
            /* renamed from: a */
            public final d createFromParcel(Parcel parcel) {
                Intrinsics.checkNotNullParameter(parcel, "parcel");
                return new d((Uri) parcel.readParcelable(d.class.getClassLoader()), (Uri) parcel.readParcelable(d.class.getClassLoader()), (Uri) parcel.readParcelable(d.class.getClassLoader()), ep.a.valueOf(parcel.readString()));
            }

            @Override // android.os.Parcelable.Creator
            /* renamed from: b */
            public final d[] newArray(int i10) {
                return new d[i10];
            }
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public d(Uri dg1Uri, Uri dg2Uri, Uri sodUri, ep.a chipAuthenticationStatus) {
            super(null);
            Intrinsics.checkNotNullParameter(dg1Uri, "dg1Uri");
            Intrinsics.checkNotNullParameter(dg2Uri, "dg2Uri");
            Intrinsics.checkNotNullParameter(sodUri, "sodUri");
            Intrinsics.checkNotNullParameter(chipAuthenticationStatus, "chipAuthenticationStatus");
            this.f21704d = dg1Uri;
            this.f21705e = dg2Uri;
            this.f21706i = sodUri;
            this.f21707o = chipAuthenticationStatus;
        }

        public final ep.a a() {
            return this.f21707o;
        }

        public final Uri b() {
            return this.f21704d;
        }

        public final Uri c() {
            return this.f21705e;
        }

        public final Uri d() {
            return this.f21706i;
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            dest.writeParcelable(this.f21704d, i10);
            dest.writeParcelable(this.f21705e, i10);
            dest.writeParcelable(this.f21706i, i10);
            dest.writeString(this.f21707o.name());
        }
    }

    public /* synthetic */ k(DefaultConstructorMarker defaultConstructorMarker) {
        this();
    }

    private k() {
    }
}
