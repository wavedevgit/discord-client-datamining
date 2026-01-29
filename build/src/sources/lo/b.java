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
        private final String f37398d;

        /* renamed from: e  reason: collision with root package name */
        private final String f37399e;

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
            this.f37398d = name;
            this.f37399e = path;
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
            if (Intrinsics.areEqual(this.f37398d, aVar.f37398d) && Intrinsics.areEqual(this.f37399e, aVar.f37399e)) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return (this.f37398d.hashCode() * 31) + this.f37399e.hashCode();
        }

        public String toString() {
            String str = this.f37398d;
            String str2 = this.f37399e;
            return "PageChange(name=" + str + ", path=" + str2 + ")";
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            dest.writeString(this.f37398d);
            dest.writeString(this.f37399e);
        }
    }

    /* renamed from: lo.b$b  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class C0482b implements b {
        @NotNull
        public static final Parcelable.Creator<C0482b> CREATOR = new a();

        /* renamed from: d  reason: collision with root package name */
        private final String f37400d;

        /* renamed from: e  reason: collision with root package name */
        private final String f37401e;

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
            this.f37400d = inquiryId;
            this.f37401e = sessionToken;
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
            if (Intrinsics.areEqual(this.f37400d, c0482b.f37400d) && Intrinsics.areEqual(this.f37401e, c0482b.f37401e)) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return (this.f37400d.hashCode() * 31) + this.f37401e.hashCode();
        }

        public String toString() {
            String str = this.f37400d;
            String str2 = this.f37401e;
            return "StartEvent(inquiryId=" + str + ", sessionToken=" + str2 + ")";
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            dest.writeString(this.f37400d);
            dest.writeString(this.f37401e);
        }
    }
}
