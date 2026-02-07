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
        private final String f50829d;

        /* renamed from: e  reason: collision with root package name */
        private final String f50830e;

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
            this.f50829d = name;
            this.f50830e = path;
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
            if (Intrinsics.areEqual(this.f50829d, aVar.f50829d) && Intrinsics.areEqual(this.f50830e, aVar.f50830e)) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return (this.f50829d.hashCode() * 31) + this.f50830e.hashCode();
        }

        public String toString() {
            String str = this.f50829d;
            String str2 = this.f50830e;
            return "PageChange(name=" + str + ", path=" + str2 + ")";
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            dest.writeString(this.f50829d);
            dest.writeString(this.f50830e);
        }
    }

    /* renamed from: to.b$b  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class C0670b implements b {
        @NotNull
        public static final Parcelable.Creator<C0670b> CREATOR = new a();

        /* renamed from: d  reason: collision with root package name */
        private final String f50831d;

        /* renamed from: e  reason: collision with root package name */
        private final String f50832e;

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
            this.f50831d = inquiryId;
            this.f50832e = sessionToken;
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
            if (Intrinsics.areEqual(this.f50831d, c0670b.f50831d) && Intrinsics.areEqual(this.f50832e, c0670b.f50832e)) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return (this.f50831d.hashCode() * 31) + this.f50832e.hashCode();
        }

        public String toString() {
            String str = this.f50831d;
            String str2 = this.f50832e;
            return "StartEvent(inquiryId=" + str + ", sessionToken=" + str2 + ")";
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            dest.writeString(this.f50831d);
            dest.writeString(this.f50832e);
        }
    }
}
