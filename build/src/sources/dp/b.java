package dp;

import android.os.Parcel;
import android.os.Parcelable;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public interface b extends Parcelable {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements b {
        @NotNull
        public static final Parcelable.Creator<a> CREATOR = new C0295a();

        /* renamed from: d  reason: collision with root package name */
        private final String f21836d;

        /* renamed from: e  reason: collision with root package name */
        private final String f21837e;

        /* renamed from: dp.b$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class C0295a implements Parcelable.Creator {
            @Override // android.os.Parcelable.Creator
            /* renamed from: a */
            public final a createFromParcel(Parcel parcel) {
                Intrinsics.checkNotNullParameter(parcel, "parcel");
                return new a(parcel.readString(), parcel.readString());
            }

            @Override // android.os.Parcelable.Creator
            /* renamed from: b */
            public final a[] newArray(int i10) {
                return new a[i10];
            }
        }

        public a(String name, String path) {
            Intrinsics.checkNotNullParameter(name, "name");
            Intrinsics.checkNotNullParameter(path, "path");
            this.f21836d = name;
            this.f21837e = path;
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof a)) {
                return false;
            }
            a aVar = (a) obj;
            if (Intrinsics.areEqual(this.f21836d, aVar.f21836d) && Intrinsics.areEqual(this.f21837e, aVar.f21837e)) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return (this.f21836d.hashCode() * 31) + this.f21837e.hashCode();
        }

        public String toString() {
            String str = this.f21836d;
            String str2 = this.f21837e;
            return "PageChange(name=" + str + ", path=" + str2 + ")";
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            dest.writeString(this.f21836d);
            dest.writeString(this.f21837e);
        }
    }

    /* renamed from: dp.b$b  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class C0296b implements b {
        @NotNull
        public static final Parcelable.Creator<C0296b> CREATOR = new a();

        /* renamed from: d  reason: collision with root package name */
        private final String f21838d;

        /* renamed from: e  reason: collision with root package name */
        private final String f21839e;

        /* renamed from: dp.b$b$a */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a implements Parcelable.Creator {
            @Override // android.os.Parcelable.Creator
            /* renamed from: a */
            public final C0296b createFromParcel(Parcel parcel) {
                Intrinsics.checkNotNullParameter(parcel, "parcel");
                return new C0296b(parcel.readString(), parcel.readString());
            }

            @Override // android.os.Parcelable.Creator
            /* renamed from: b */
            public final C0296b[] newArray(int i10) {
                return new C0296b[i10];
            }
        }

        public C0296b(String inquiryId, String sessionToken) {
            Intrinsics.checkNotNullParameter(inquiryId, "inquiryId");
            Intrinsics.checkNotNullParameter(sessionToken, "sessionToken");
            this.f21838d = inquiryId;
            this.f21839e = sessionToken;
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof C0296b)) {
                return false;
            }
            C0296b c0296b = (C0296b) obj;
            if (Intrinsics.areEqual(this.f21838d, c0296b.f21838d) && Intrinsics.areEqual(this.f21839e, c0296b.f21839e)) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return (this.f21838d.hashCode() * 31) + this.f21839e.hashCode();
        }

        public String toString() {
            String str = this.f21838d;
            String str2 = this.f21839e;
            return "StartEvent(inquiryId=" + str + ", sessionToken=" + str2 + ")";
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            dest.writeString(this.f21838d);
            dest.writeString(this.f21839e);
        }
    }
}
