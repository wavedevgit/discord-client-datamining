package to;

import android.os.Parcel;
import android.os.Parcelable;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public interface b extends Parcelable {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements b {
        @NotNull
        public static final Parcelable.Creator<a> CREATOR = new C0669a();

        /* renamed from: d  reason: collision with root package name */
        private final String f50781d;

        /* renamed from: e  reason: collision with root package name */
        private final String f50782e;

        /* renamed from: to.b$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class C0669a implements Parcelable.Creator {
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
            this.f50781d = name;
            this.f50782e = path;
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
            if (Intrinsics.areEqual(this.f50781d, aVar.f50781d) && Intrinsics.areEqual(this.f50782e, aVar.f50782e)) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return (this.f50781d.hashCode() * 31) + this.f50782e.hashCode();
        }

        public String toString() {
            String str = this.f50781d;
            String str2 = this.f50782e;
            return "PageChange(name=" + str + ", path=" + str2 + ")";
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            dest.writeString(this.f50781d);
            dest.writeString(this.f50782e);
        }
    }

    /* renamed from: to.b$b  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class C0670b implements b {
        @NotNull
        public static final Parcelable.Creator<C0670b> CREATOR = new a();

        /* renamed from: d  reason: collision with root package name */
        private final String f50783d;

        /* renamed from: e  reason: collision with root package name */
        private final String f50784e;

        /* renamed from: to.b$b$a */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a implements Parcelable.Creator {
            @Override // android.os.Parcelable.Creator
            /* renamed from: a */
            public final C0670b createFromParcel(Parcel parcel) {
                Intrinsics.checkNotNullParameter(parcel, "parcel");
                return new C0670b(parcel.readString(), parcel.readString());
            }

            @Override // android.os.Parcelable.Creator
            /* renamed from: b */
            public final C0670b[] newArray(int i10) {
                return new C0670b[i10];
            }
        }

        public C0670b(String inquiryId, String sessionToken) {
            Intrinsics.checkNotNullParameter(inquiryId, "inquiryId");
            Intrinsics.checkNotNullParameter(sessionToken, "sessionToken");
            this.f50783d = inquiryId;
            this.f50784e = sessionToken;
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof C0670b)) {
                return false;
            }
            C0670b c0670b = (C0670b) obj;
            if (Intrinsics.areEqual(this.f50783d, c0670b.f50783d) && Intrinsics.areEqual(this.f50784e, c0670b.f50784e)) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return (this.f50783d.hashCode() * 31) + this.f50784e.hashCode();
        }

        public String toString() {
            String str = this.f50783d;
            String str2 = this.f50784e;
            return "StartEvent(inquiryId=" + str + ", sessionToken=" + str2 + ")";
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            dest.writeString(this.f50783d);
            dest.writeString(this.f50784e);
        }
    }
}
