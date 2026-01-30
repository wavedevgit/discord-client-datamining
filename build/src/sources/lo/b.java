package lo;

import android.os.Parcel;
import android.os.Parcelable;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public interface b extends Parcelable {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements b {
        @NotNull
        public static final Parcelable.Creator<a> CREATOR = new C0481a();

        /* renamed from: d  reason: collision with root package name */
        private final String f37414d;

        /* renamed from: e  reason: collision with root package name */
        private final String f37415e;

        /* renamed from: lo.b$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class C0481a implements Parcelable.Creator {
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
            this.f37414d = name;
            this.f37415e = path;
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
            if (Intrinsics.areEqual(this.f37414d, aVar.f37414d) && Intrinsics.areEqual(this.f37415e, aVar.f37415e)) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return (this.f37414d.hashCode() * 31) + this.f37415e.hashCode();
        }

        public String toString() {
            String str = this.f37414d;
            String str2 = this.f37415e;
            return "PageChange(name=" + str + ", path=" + str2 + ")";
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            dest.writeString(this.f37414d);
            dest.writeString(this.f37415e);
        }
    }

    /* renamed from: lo.b$b  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class C0482b implements b {
        @NotNull
        public static final Parcelable.Creator<C0482b> CREATOR = new a();

        /* renamed from: d  reason: collision with root package name */
        private final String f37416d;

        /* renamed from: e  reason: collision with root package name */
        private final String f37417e;

        /* renamed from: lo.b$b$a */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a implements Parcelable.Creator {
            @Override // android.os.Parcelable.Creator
            /* renamed from: a */
            public final C0482b createFromParcel(Parcel parcel) {
                Intrinsics.checkNotNullParameter(parcel, "parcel");
                return new C0482b(parcel.readString(), parcel.readString());
            }

            @Override // android.os.Parcelable.Creator
            /* renamed from: b */
            public final C0482b[] newArray(int i10) {
                return new C0482b[i10];
            }
        }

        public C0482b(String inquiryId, String sessionToken) {
            Intrinsics.checkNotNullParameter(inquiryId, "inquiryId");
            Intrinsics.checkNotNullParameter(sessionToken, "sessionToken");
            this.f37416d = inquiryId;
            this.f37417e = sessionToken;
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof C0482b)) {
                return false;
            }
            C0482b c0482b = (C0482b) obj;
            if (Intrinsics.areEqual(this.f37416d, c0482b.f37416d) && Intrinsics.areEqual(this.f37417e, c0482b.f37417e)) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return (this.f37416d.hashCode() * 31) + this.f37417e.hashCode();
        }

        public String toString() {
            String str = this.f37416d;
            String str2 = this.f37417e;
            return "StartEvent(inquiryId=" + str + ", sessionToken=" + str2 + ")";
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            dest.writeString(this.f37416d);
            dest.writeString(this.f37417e);
        }
    }
}
