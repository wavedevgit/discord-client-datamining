package vn;

import android.os.Parcel;
import android.os.Parcelable;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class d implements Parcelable {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a extends d {
        @NotNull
        public static final Parcelable.Creator<a> CREATOR = new C0692a();

        /* renamed from: d  reason: collision with root package name */
        private final String f51394d;

        /* renamed from: e  reason: collision with root package name */
        private final vn.a f51395e;

        /* renamed from: i  reason: collision with root package name */
        private final int f51396i;

        /* renamed from: vn.d$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class C0692a implements Parcelable.Creator {
            @Override // android.os.Parcelable.Creator
            /* renamed from: a */
            public final a createFromParcel(Parcel parcel) {
                Intrinsics.checkNotNullParameter(parcel, "parcel");
                return new a(parcel.readString(), vn.a.CREATOR.createFromParcel(parcel), parcel.readInt());
            }

            @Override // android.os.Parcelable.Creator
            /* renamed from: b */
            public final a[] newArray(int i10) {
                return new a[i10];
            }
        }

        public /* synthetic */ a(String str, vn.a aVar, int i10, int i11, DefaultConstructorMarker defaultConstructorMarker) {
            this(str, aVar, (i11 & 4) != 0 ? 0 : i10);
        }

        public static /* synthetic */ a b(a aVar, String str, vn.a aVar2, int i10, int i11, Object obj) {
            if ((i11 & 1) != 0) {
                str = aVar.f51394d;
            }
            if ((i11 & 2) != 0) {
                aVar2 = aVar.f51395e;
            }
            if ((i11 & 4) != 0) {
                i10 = aVar.f51396i;
            }
            return aVar.a(str, aVar2, i10);
        }

        public final a a(String absoluteFilePath, vn.a captureMethod, int i10) {
            Intrinsics.checkNotNullParameter(absoluteFilePath, "absoluteFilePath");
            Intrinsics.checkNotNullParameter(captureMethod, "captureMethod");
            return new a(absoluteFilePath, captureMethod, i10);
        }

        public final String c() {
            return this.f51394d;
        }

        public final vn.a d() {
            return this.f51395e;
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
        }

        public final int e() {
            return this.f51396i;
        }

        public boolean equals(Object obj) {
            Class<?> cls;
            if (this == obj) {
                return true;
            }
            if (obj != null) {
                cls = obj.getClass();
            } else {
                cls = null;
            }
            if (!Intrinsics.areEqual(a.class, cls)) {
                return false;
            }
            Intrinsics.checkNotNull(obj, "null cannot be cast to non-null type com.withpersona.sdk2.inquiry.document.DocumentFile.Local");
            return Intrinsics.areEqual(this.f51394d, ((a) obj).f51394d);
        }

        public int hashCode() {
            return this.f51394d.hashCode();
        }

        public String toString() {
            String str = this.f51394d;
            vn.a aVar = this.f51395e;
            int i10 = this.f51396i;
            return "Local(absoluteFilePath=" + str + ", captureMethod=" + aVar + ", uploadProgress=" + i10 + ")";
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            dest.writeString(this.f51394d);
            this.f51395e.writeToParcel(dest, i10);
            dest.writeInt(this.f51396i);
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public a(String absoluteFilePath, vn.a captureMethod, int i10) {
            super(null);
            Intrinsics.checkNotNullParameter(absoluteFilePath, "absoluteFilePath");
            Intrinsics.checkNotNullParameter(captureMethod, "captureMethod");
            this.f51394d = absoluteFilePath;
            this.f51395e = captureMethod;
            this.f51396i = i10;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b extends d {
        @NotNull
        public static final Parcelable.Creator<b> CREATOR = new a();

        /* renamed from: d  reason: collision with root package name */
        private final String f51397d;

        /* renamed from: e  reason: collision with root package name */
        private final String f51398e;

        /* renamed from: i  reason: collision with root package name */
        private final String f51399i;

        /* renamed from: o  reason: collision with root package name */
        private final String f51400o;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a implements Parcelable.Creator {
            @Override // android.os.Parcelable.Creator
            /* renamed from: a */
            public final b createFromParcel(Parcel parcel) {
                Intrinsics.checkNotNullParameter(parcel, "parcel");
                return new b(parcel.readString(), parcel.readString(), parcel.readString(), parcel.readString());
            }

            @Override // android.os.Parcelable.Creator
            /* renamed from: b */
            public final b[] newArray(int i10) {
                return new b[i10];
            }
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public b(String str, String str2, String remoteUrl, String documentFileId) {
            super(null);
            Intrinsics.checkNotNullParameter(remoteUrl, "remoteUrl");
            Intrinsics.checkNotNullParameter(documentFileId, "documentFileId");
            this.f51397d = str;
            this.f51398e = str2;
            this.f51399i = remoteUrl;
            this.f51400o = documentFileId;
        }

        public final String a() {
            return this.f51397d;
        }

        public final String b() {
            return this.f51400o;
        }

        public final String c() {
            return this.f51398e;
        }

        public final String d() {
            return this.f51399i;
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof b)) {
                return false;
            }
            b bVar = (b) obj;
            if (Intrinsics.areEqual(this.f51397d, bVar.f51397d) && Intrinsics.areEqual(this.f51398e, bVar.f51398e) && Intrinsics.areEqual(this.f51399i, bVar.f51399i) && Intrinsics.areEqual(this.f51400o, bVar.f51400o)) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            int hashCode;
            String str = this.f51397d;
            int i10 = 0;
            if (str == null) {
                hashCode = 0;
            } else {
                hashCode = str.hashCode();
            }
            int i11 = hashCode * 31;
            String str2 = this.f51398e;
            if (str2 != null) {
                i10 = str2.hashCode();
            }
            return ((((i11 + i10) * 31) + this.f51399i.hashCode()) * 31) + this.f51400o.hashCode();
        }

        public String toString() {
            String str = this.f51397d;
            String str2 = this.f51398e;
            String str3 = this.f51399i;
            String str4 = this.f51400o;
            return "Remote(absoluteFilePath=" + str + ", filename=" + str2 + ", remoteUrl=" + str3 + ", documentFileId=" + str4 + ")";
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            dest.writeString(this.f51397d);
            dest.writeString(this.f51398e);
            dest.writeString(this.f51399i);
            dest.writeString(this.f51400o);
        }
    }

    public /* synthetic */ d(DefaultConstructorMarker defaultConstructorMarker) {
        this();
    }

    private d() {
    }
}
