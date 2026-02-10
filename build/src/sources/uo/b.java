package uo;

import android.os.Parcel;
import android.os.Parcelable;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public interface b extends Parcelable {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements b {
        @NotNull
        public static final Parcelable.Creator<a> CREATOR = new C0717a();

        /* renamed from: d  reason: collision with root package name */
        private final String f51734d;

        /* renamed from: e  reason: collision with root package name */
        private final String f51735e;

        /* renamed from: uo.b$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class C0717a implements Parcelable.Creator {
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
            this.f51734d = name;
            this.f51735e = path;
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
            if (Intrinsics.areEqual(this.f51734d, aVar.f51734d) && Intrinsics.areEqual(this.f51735e, aVar.f51735e)) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return (this.f51734d.hashCode() * 31) + this.f51735e.hashCode();
        }

        public String toString() {
            String str = this.f51734d;
            String str2 = this.f51735e;
            return "PageChange(name=" + str + ", path=" + str2 + ")";
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            dest.writeString(this.f51734d);
            dest.writeString(this.f51735e);
        }
    }

    /* renamed from: uo.b$b  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class C0718b implements b {
        @NotNull
        public static final Parcelable.Creator<C0718b> CREATOR = new a();

        /* renamed from: d  reason: collision with root package name */
        private final String f51736d;

        /* renamed from: e  reason: collision with root package name */
        private final String f51737e;

        /* renamed from: uo.b$b$a */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a implements Parcelable.Creator {
            @Override // android.os.Parcelable.Creator
            /* renamed from: a */
            public final C0718b createFromParcel(Parcel parcel) {
                Intrinsics.checkNotNullParameter(parcel, "parcel");
                return new C0718b(parcel.readString(), parcel.readString());
            }

            @Override // android.os.Parcelable.Creator
            /* renamed from: b */
            public final C0718b[] newArray(int i10) {
                return new C0718b[i10];
            }
        }

        public C0718b(String inquiryId, String sessionToken) {
            Intrinsics.checkNotNullParameter(inquiryId, "inquiryId");
            Intrinsics.checkNotNullParameter(sessionToken, "sessionToken");
            this.f51736d = inquiryId;
            this.f51737e = sessionToken;
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof C0718b)) {
                return false;
            }
            C0718b c0718b = (C0718b) obj;
            if (Intrinsics.areEqual(this.f51736d, c0718b.f51736d) && Intrinsics.areEqual(this.f51737e, c0718b.f51737e)) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return (this.f51736d.hashCode() * 31) + this.f51737e.hashCode();
        }

        public String toString() {
            String str = this.f51736d;
            String str2 = this.f51737e;
            return "StartEvent(inquiryId=" + str + ", sessionToken=" + str2 + ")";
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            dest.writeString(this.f51736d);
            dest.writeString(this.f51737e);
        }
    }
}
