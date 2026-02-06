package gp;

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
        public static final a f25452d = new a();
        @NotNull
        public static final Parcelable.Creator<a> CREATOR = new C0346a();

        /* renamed from: gp.k$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class C0346a implements Parcelable.Creator {
            @Override // android.os.Parcelable.Creator
            /* renamed from: a */
            public final a createFromParcel(Parcel parcel) {
                Intrinsics.checkNotNullParameter(parcel, "parcel");
                parcel.readInt();
                return a.f25452d;
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
        private final String f25453d;

        /* renamed from: e  reason: collision with root package name */
        private final c f25454e;

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
            this.f25453d = str;
            this.f25454e = cause;
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            dest.writeString(this.f25453d);
            dest.writeString(this.f25454e.name());
        }
    }

    /* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
    /* JADX WARN: Unknown enum class pattern. Please report as an issue! */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class c {

        /* renamed from: d  reason: collision with root package name */
        public static final c f25455d = new c("AuthenticationError", 0);

        /* renamed from: e  reason: collision with root package name */
        public static final c f25456e = new c("Unknown", 1);

        /* renamed from: i  reason: collision with root package name */
        private static final /* synthetic */ c[] f25457i;

        /* renamed from: o  reason: collision with root package name */
        private static final /* synthetic */ EnumEntries f25458o;

        static {
            c[] a10 = a();
            f25457i = a10;
            f25458o = xr.a.a(a10);
        }

        private c(String str, int i10) {
        }

        private static final /* synthetic */ c[] a() {
            return new c[]{f25455d, f25456e};
        }

        public static c valueOf(String str) {
            return (c) Enum.valueOf(c.class, str);
        }

        public static c[] values() {
            return (c[]) f25457i.clone();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class d extends k {
        @NotNull
        public static final Parcelable.Creator<d> CREATOR = new a();

        /* renamed from: d  reason: collision with root package name */
        private final Uri f25459d;

        /* renamed from: e  reason: collision with root package name */
        private final Uri f25460e;

        /* renamed from: i  reason: collision with root package name */
        private final Uri f25461i;

        /* renamed from: o  reason: collision with root package name */
        private final gp.a f25462o;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a implements Parcelable.Creator {
            @Override // android.os.Parcelable.Creator
            /* renamed from: a */
            public final d createFromParcel(Parcel parcel) {
                Intrinsics.checkNotNullParameter(parcel, "parcel");
                return new d((Uri) parcel.readParcelable(d.class.getClassLoader()), (Uri) parcel.readParcelable(d.class.getClassLoader()), (Uri) parcel.readParcelable(d.class.getClassLoader()), gp.a.valueOf(parcel.readString()));
            }

            @Override // android.os.Parcelable.Creator
            /* renamed from: b */
            public final d[] newArray(int i10) {
                return new d[i10];
            }
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public d(Uri dg1Uri, Uri dg2Uri, Uri sodUri, gp.a chipAuthenticationStatus) {
            super(null);
            Intrinsics.checkNotNullParameter(dg1Uri, "dg1Uri");
            Intrinsics.checkNotNullParameter(dg2Uri, "dg2Uri");
            Intrinsics.checkNotNullParameter(sodUri, "sodUri");
            Intrinsics.checkNotNullParameter(chipAuthenticationStatus, "chipAuthenticationStatus");
            this.f25459d = dg1Uri;
            this.f25460e = dg2Uri;
            this.f25461i = sodUri;
            this.f25462o = chipAuthenticationStatus;
        }

        public final gp.a a() {
            return this.f25462o;
        }

        public final Uri b() {
            return this.f25459d;
        }

        public final Uri c() {
            return this.f25460e;
        }

        public final Uri d() {
            return this.f25461i;
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            dest.writeParcelable(this.f25459d, i10);
            dest.writeParcelable(this.f25460e, i10);
            dest.writeParcelable(this.f25461i, i10);
            dest.writeString(this.f25462o.name());
        }
    }

    public /* synthetic */ k(DefaultConstructorMarker defaultConstructorMarker) {
        this();
    }

    private k() {
    }
}
