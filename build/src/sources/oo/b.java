package oo;

import android.os.Parcel;
import android.os.Parcelable;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public interface b extends Parcelable {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements b {
        @NotNull
        public static final Parcelable.Creator<a> CREATOR = new C0550a();

        /* renamed from: d  reason: collision with root package name */
        private final String f44378d;

        /* renamed from: e  reason: collision with root package name */
        private final String f44379e;

        /* renamed from: oo.b$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class C0550a implements Parcelable.Creator {
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
            this.f44378d = name;
            this.f44379e = path;
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
            if (Intrinsics.areEqual(this.f44378d, aVar.f44378d) && Intrinsics.areEqual(this.f44379e, aVar.f44379e)) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return (this.f44378d.hashCode() * 31) + this.f44379e.hashCode();
        }

        public String toString() {
            String str = this.f44378d;
            String str2 = this.f44379e;
            return "PageChange(name=" + str + ", path=" + str2 + ")";
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            dest.writeString(this.f44378d);
            dest.writeString(this.f44379e);
        }
    }

    /* renamed from: oo.b$b  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class C0551b implements b {
        @NotNull
        public static final Parcelable.Creator<C0551b> CREATOR = new a();

        /* renamed from: d  reason: collision with root package name */
        private final String f44380d;

        /* renamed from: e  reason: collision with root package name */
        private final String f44381e;

        /* renamed from: oo.b$b$a */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a implements Parcelable.Creator {
            @Override // android.os.Parcelable.Creator
            /* renamed from: a */
            public final C0551b createFromParcel(Parcel parcel) {
                Intrinsics.checkNotNullParameter(parcel, "parcel");
                return new C0551b(parcel.readString(), parcel.readString());
            }

            @Override // android.os.Parcelable.Creator
            /* renamed from: b */
            public final C0551b[] newArray(int i10) {
                return new C0551b[i10];
            }
        }

        public C0551b(String inquiryId, String sessionToken) {
            Intrinsics.checkNotNullParameter(inquiryId, "inquiryId");
            Intrinsics.checkNotNullParameter(sessionToken, "sessionToken");
            this.f44380d = inquiryId;
            this.f44381e = sessionToken;
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof C0551b)) {
                return false;
            }
            C0551b c0551b = (C0551b) obj;
            if (Intrinsics.areEqual(this.f44380d, c0551b.f44380d) && Intrinsics.areEqual(this.f44381e, c0551b.f44381e)) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return (this.f44380d.hashCode() * 31) + this.f44381e.hashCode();
        }

        public String toString() {
            String str = this.f44380d;
            String str2 = this.f44381e;
            return "StartEvent(inquiryId=" + str + ", sessionToken=" + str2 + ")";
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            dest.writeString(this.f44380d);
            dest.writeString(this.f44381e);
        }
    }
}
