package ro;

import android.os.Parcel;
import android.os.Parcelable;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public interface b extends Parcelable {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements b {
        @NotNull
        public static final Parcelable.Creator<a> CREATOR = new C0626a();

        /* renamed from: d  reason: collision with root package name */
        private final String f48918d;

        /* renamed from: e  reason: collision with root package name */
        private final String f48919e;

        /* renamed from: ro.b$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class C0626a implements Parcelable.Creator {
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
            this.f48918d = name;
            this.f48919e = path;
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
            if (Intrinsics.areEqual(this.f48918d, aVar.f48918d) && Intrinsics.areEqual(this.f48919e, aVar.f48919e)) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return (this.f48918d.hashCode() * 31) + this.f48919e.hashCode();
        }

        public String toString() {
            String str = this.f48918d;
            String str2 = this.f48919e;
            return "PageChange(name=" + str + ", path=" + str2 + ")";
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            dest.writeString(this.f48918d);
            dest.writeString(this.f48919e);
        }
    }

    /* renamed from: ro.b$b  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class C0627b implements b {
        @NotNull
        public static final Parcelable.Creator<C0627b> CREATOR = new a();

        /* renamed from: d  reason: collision with root package name */
        private final String f48920d;

        /* renamed from: e  reason: collision with root package name */
        private final String f48921e;

        /* renamed from: ro.b$b$a */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a implements Parcelable.Creator {
            @Override // android.os.Parcelable.Creator
            /* renamed from: a */
            public final C0627b createFromParcel(Parcel parcel) {
                Intrinsics.checkNotNullParameter(parcel, "parcel");
                return new C0627b(parcel.readString(), parcel.readString());
            }

            @Override // android.os.Parcelable.Creator
            /* renamed from: b */
            public final C0627b[] newArray(int i10) {
                return new C0627b[i10];
            }
        }

        public C0627b(String inquiryId, String sessionToken) {
            Intrinsics.checkNotNullParameter(inquiryId, "inquiryId");
            Intrinsics.checkNotNullParameter(sessionToken, "sessionToken");
            this.f48920d = inquiryId;
            this.f48921e = sessionToken;
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof C0627b)) {
                return false;
            }
            C0627b c0627b = (C0627b) obj;
            if (Intrinsics.areEqual(this.f48920d, c0627b.f48920d) && Intrinsics.areEqual(this.f48921e, c0627b.f48921e)) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return (this.f48920d.hashCode() * 31) + this.f48921e.hashCode();
        }

        public String toString() {
            String str = this.f48920d;
            String str2 = this.f48921e;
            return "StartEvent(inquiryId=" + str + ", sessionToken=" + str2 + ")";
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            dest.writeString(this.f48920d);
            dest.writeString(this.f48921e);
        }
    }
}
