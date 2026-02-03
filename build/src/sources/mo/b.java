package mo;

import android.os.Parcel;
import android.os.Parcelable;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public interface b extends Parcelable {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements b {
        @NotNull
        public static final Parcelable.Creator<a> CREATOR = new C0508a();

        /* renamed from: d  reason: collision with root package name */
        private final String f39114d;

        /* renamed from: e  reason: collision with root package name */
        private final String f39115e;

        /* renamed from: mo.b$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class C0508a implements Parcelable.Creator {
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
            this.f39114d = name;
            this.f39115e = path;
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
            if (Intrinsics.areEqual(this.f39114d, aVar.f39114d) && Intrinsics.areEqual(this.f39115e, aVar.f39115e)) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return (this.f39114d.hashCode() * 31) + this.f39115e.hashCode();
        }

        public String toString() {
            String str = this.f39114d;
            String str2 = this.f39115e;
            return "PageChange(name=" + str + ", path=" + str2 + ")";
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            dest.writeString(this.f39114d);
            dest.writeString(this.f39115e);
        }
    }

    /* renamed from: mo.b$b  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class C0509b implements b {
        @NotNull
        public static final Parcelable.Creator<C0509b> CREATOR = new a();

        /* renamed from: d  reason: collision with root package name */
        private final String f39116d;

        /* renamed from: e  reason: collision with root package name */
        private final String f39117e;

        /* renamed from: mo.b$b$a */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a implements Parcelable.Creator {
            @Override // android.os.Parcelable.Creator
            /* renamed from: a */
            public final C0509b createFromParcel(Parcel parcel) {
                Intrinsics.checkNotNullParameter(parcel, "parcel");
                return new C0509b(parcel.readString(), parcel.readString());
            }

            @Override // android.os.Parcelable.Creator
            /* renamed from: b */
            public final C0509b[] newArray(int i10) {
                return new C0509b[i10];
            }
        }

        public C0509b(String inquiryId, String sessionToken) {
            Intrinsics.checkNotNullParameter(inquiryId, "inquiryId");
            Intrinsics.checkNotNullParameter(sessionToken, "sessionToken");
            this.f39116d = inquiryId;
            this.f39117e = sessionToken;
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof C0509b)) {
                return false;
            }
            C0509b c0509b = (C0509b) obj;
            if (Intrinsics.areEqual(this.f39116d, c0509b.f39116d) && Intrinsics.areEqual(this.f39117e, c0509b.f39117e)) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return (this.f39116d.hashCode() * 31) + this.f39117e.hashCode();
        }

        public String toString() {
            String str = this.f39116d;
            String str2 = this.f39117e;
            return "StartEvent(inquiryId=" + str + ", sessionToken=" + str2 + ")";
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            dest.writeString(this.f39116d);
            dest.writeString(this.f39117e);
        }
    }
}
