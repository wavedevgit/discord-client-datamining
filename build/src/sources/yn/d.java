package yn;

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
        public static final Parcelable.Creator<a> CREATOR = new C0757a();

        /* renamed from: d  reason: collision with root package name */
        private final String f54759d;

        /* renamed from: e  reason: collision with root package name */
        private final yn.a f54760e;

        /* renamed from: i  reason: collision with root package name */
        private final int f54761i;

        /* renamed from: yn.d$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class C0757a implements Parcelable.Creator {
            @Override // android.os.Parcelable.Creator
            /* renamed from: a */
            public final a createFromParcel(Parcel parcel) {
                Intrinsics.checkNotNullParameter(parcel, "parcel");
                return new a(parcel.readString(), yn.a.CREATOR.createFromParcel(parcel), parcel.readInt());
            }

            @Override // android.os.Parcelable.Creator
            /* renamed from: b */
            public final a[] newArray(int i10) {
                return new a[i10];
            }
        }

        public /* synthetic */ a(String str, yn.a aVar, int i10, int i11, DefaultConstructorMarker defaultConstructorMarker) {
            this(str, aVar, (i11 & 4) != 0 ? 0 : i10);
        }

        public static /* synthetic */ a b(a aVar, String str, yn.a aVar2, int i10, int i11, Object obj) {
            if ((i11 & 1) != 0) {
                str = aVar.f54759d;
            }
            if ((i11 & 2) != 0) {
                aVar2 = aVar.f54760e;
            }
            if ((i11 & 4) != 0) {
                i10 = aVar.f54761i;
            }
            return aVar.a(str, aVar2, i10);
        }

        public final a a(String absoluteFilePath, yn.a captureMethod, int i10) {
            Intrinsics.checkNotNullParameter(absoluteFilePath, "absoluteFilePath");
            Intrinsics.checkNotNullParameter(captureMethod, "captureMethod");
            return new a(absoluteFilePath, captureMethod, i10);
        }

        public final String c() {
            return this.f54759d;
        }

        public final yn.a d() {
            return this.f54760e;
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
        }

        public final int e() {
            return this.f54761i;
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
            return Intrinsics.areEqual(this.f54759d, ((a) obj).f54759d);
        }

        public int hashCode() {
            return this.f54759d.hashCode();
        }

        public String toString() {
            String str = this.f54759d;
            yn.a aVar = this.f54760e;
            int i10 = this.f54761i;
            return "Local(absoluteFilePath=" + str + ", captureMethod=" + aVar + ", uploadProgress=" + i10 + ")";
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            dest.writeString(this.f54759d);
            this.f54760e.writeToParcel(dest, i10);
            dest.writeInt(this.f54761i);
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public a(String absoluteFilePath, yn.a captureMethod, int i10) {
            super(null);
            Intrinsics.checkNotNullParameter(absoluteFilePath, "absoluteFilePath");
            Intrinsics.checkNotNullParameter(captureMethod, "captureMethod");
            this.f54759d = absoluteFilePath;
            this.f54760e = captureMethod;
            this.f54761i = i10;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b extends d {
        @NotNull
        public static final Parcelable.Creator<b> CREATOR = new a();

        /* renamed from: d  reason: collision with root package name */
        private final String f54762d;

        /* renamed from: e  reason: collision with root package name */
        private final String f54763e;

        /* renamed from: i  reason: collision with root package name */
        private final String f54764i;

        /* renamed from: o  reason: collision with root package name */
        private final String f54765o;

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
            this.f54762d = str;
            this.f54763e = str2;
            this.f54764i = remoteUrl;
            this.f54765o = documentFileId;
        }

        public final String a() {
            return this.f54762d;
        }

        public final String b() {
            return this.f54765o;
        }

        public final String c() {
            return this.f54763e;
        }

        public final String d() {
            return this.f54764i;
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
            if (Intrinsics.areEqual(this.f54762d, bVar.f54762d) && Intrinsics.areEqual(this.f54763e, bVar.f54763e) && Intrinsics.areEqual(this.f54764i, bVar.f54764i) && Intrinsics.areEqual(this.f54765o, bVar.f54765o)) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            int hashCode;
            String str = this.f54762d;
            int i10 = 0;
            if (str == null) {
                hashCode = 0;
            } else {
                hashCode = str.hashCode();
            }
            int i11 = hashCode * 31;
            String str2 = this.f54763e;
            if (str2 != null) {
                i10 = str2.hashCode();
            }
            return ((((i11 + i10) * 31) + this.f54764i.hashCode()) * 31) + this.f54765o.hashCode();
        }

        public String toString() {
            String str = this.f54762d;
            String str2 = this.f54763e;
            String str3 = this.f54764i;
            String str4 = this.f54765o;
            return "Remote(absoluteFilePath=" + str + ", filename=" + str2 + ", remoteUrl=" + str3 + ", documentFileId=" + str4 + ")";
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            dest.writeString(this.f54762d);
            dest.writeString(this.f54763e);
            dest.writeString(this.f54764i);
            dest.writeString(this.f54765o);
        }
    }

    public /* synthetic */ d(DefaultConstructorMarker defaultConstructorMarker) {
        this();
    }

    private d() {
    }
}
