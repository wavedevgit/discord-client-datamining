package fo;

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
        public static final Parcelable.Creator<a> CREATOR = new C0340a();

        /* renamed from: d  reason: collision with root package name */
        private final String f22803d;

        /* renamed from: e  reason: collision with root package name */
        private final fo.a f22804e;

        /* renamed from: i  reason: collision with root package name */
        private final int f22805i;

        /* renamed from: fo.d$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class C0340a implements Parcelable.Creator {
            @Override // android.os.Parcelable.Creator
            /* renamed from: a */
            public final a createFromParcel(Parcel parcel) {
                Intrinsics.checkNotNullParameter(parcel, "parcel");
                return new a(parcel.readString(), fo.a.CREATOR.createFromParcel(parcel), parcel.readInt());
            }

            @Override // android.os.Parcelable.Creator
            /* renamed from: b */
            public final a[] newArray(int i10) {
                return new a[i10];
            }
        }

        public /* synthetic */ a(String str, fo.a aVar, int i10, int i11, DefaultConstructorMarker defaultConstructorMarker) {
            this(str, aVar, (i11 & 4) != 0 ? 0 : i10);
        }

        public static /* synthetic */ a b(a aVar, String str, fo.a aVar2, int i10, int i11, Object obj) {
            if ((i11 & 1) != 0) {
                str = aVar.f22803d;
            }
            if ((i11 & 2) != 0) {
                aVar2 = aVar.f22804e;
            }
            if ((i11 & 4) != 0) {
                i10 = aVar.f22805i;
            }
            return aVar.a(str, aVar2, i10);
        }

        public final a a(String absoluteFilePath, fo.a captureMethod, int i10) {
            Intrinsics.checkNotNullParameter(absoluteFilePath, "absoluteFilePath");
            Intrinsics.checkNotNullParameter(captureMethod, "captureMethod");
            return new a(absoluteFilePath, captureMethod, i10);
        }

        public final String c() {
            return this.f22803d;
        }

        public final fo.a d() {
            return this.f22804e;
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
        }

        public final int e() {
            return this.f22805i;
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
            return Intrinsics.areEqual(this.f22803d, ((a) obj).f22803d);
        }

        public int hashCode() {
            return this.f22803d.hashCode();
        }

        public String toString() {
            String str = this.f22803d;
            fo.a aVar = this.f22804e;
            int i10 = this.f22805i;
            return "Local(absoluteFilePath=" + str + ", captureMethod=" + aVar + ", uploadProgress=" + i10 + ")";
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            dest.writeString(this.f22803d);
            this.f22804e.writeToParcel(dest, i10);
            dest.writeInt(this.f22805i);
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public a(String absoluteFilePath, fo.a captureMethod, int i10) {
            super(null);
            Intrinsics.checkNotNullParameter(absoluteFilePath, "absoluteFilePath");
            Intrinsics.checkNotNullParameter(captureMethod, "captureMethod");
            this.f22803d = absoluteFilePath;
            this.f22804e = captureMethod;
            this.f22805i = i10;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b extends d {
        @NotNull
        public static final Parcelable.Creator<b> CREATOR = new a();

        /* renamed from: d  reason: collision with root package name */
        private final String f22806d;

        /* renamed from: e  reason: collision with root package name */
        private final String f22807e;

        /* renamed from: i  reason: collision with root package name */
        private final String f22808i;

        /* renamed from: o  reason: collision with root package name */
        private final String f22809o;

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
            this.f22806d = str;
            this.f22807e = str2;
            this.f22808i = remoteUrl;
            this.f22809o = documentFileId;
        }

        public final String a() {
            return this.f22806d;
        }

        public final String b() {
            return this.f22809o;
        }

        public final String c() {
            return this.f22807e;
        }

        public final String d() {
            return this.f22808i;
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
            if (Intrinsics.areEqual(this.f22806d, bVar.f22806d) && Intrinsics.areEqual(this.f22807e, bVar.f22807e) && Intrinsics.areEqual(this.f22808i, bVar.f22808i) && Intrinsics.areEqual(this.f22809o, bVar.f22809o)) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            int hashCode;
            String str = this.f22806d;
            int i10 = 0;
            if (str == null) {
                hashCode = 0;
            } else {
                hashCode = str.hashCode();
            }
            int i11 = hashCode * 31;
            String str2 = this.f22807e;
            if (str2 != null) {
                i10 = str2.hashCode();
            }
            return ((((i11 + i10) * 31) + this.f22808i.hashCode()) * 31) + this.f22809o.hashCode();
        }

        public String toString() {
            String str = this.f22806d;
            String str2 = this.f22807e;
            String str3 = this.f22808i;
            String str4 = this.f22809o;
            return "Remote(absoluteFilePath=" + str + ", filename=" + str2 + ", remoteUrl=" + str3 + ", documentFileId=" + str4 + ")";
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            dest.writeString(this.f22806d);
            dest.writeString(this.f22807e);
            dest.writeString(this.f22808i);
            dest.writeString(this.f22809o);
        }
    }

    public /* synthetic */ d(DefaultConstructorMarker defaultConstructorMarker) {
        this();
    }

    private d() {
    }
}
