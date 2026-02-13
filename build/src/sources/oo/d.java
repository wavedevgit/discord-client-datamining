package oo;

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
        public static final Parcelable.Creator<a> CREATOR = new C0564a();

        /* renamed from: d  reason: collision with root package name */
        private final String f41280d;

        /* renamed from: e  reason: collision with root package name */
        private final oo.a f41281e;

        /* renamed from: i  reason: collision with root package name */
        private final int f41282i;

        /* renamed from: oo.d$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class C0564a implements Parcelable.Creator {
            @Override // android.os.Parcelable.Creator
            /* renamed from: a */
            public final a createFromParcel(Parcel parcel) {
                Intrinsics.checkNotNullParameter(parcel, "parcel");
                return new a(parcel.readString(), oo.a.CREATOR.createFromParcel(parcel), parcel.readInt());
            }

            @Override // android.os.Parcelable.Creator
            /* renamed from: b */
            public final a[] newArray(int i10) {
                return new a[i10];
            }
        }

        public /* synthetic */ a(String str, oo.a aVar, int i10, int i11, DefaultConstructorMarker defaultConstructorMarker) {
            this(str, aVar, (i11 & 4) != 0 ? 0 : i10);
        }

        public static /* synthetic */ a b(a aVar, String str, oo.a aVar2, int i10, int i11, Object obj) {
            if ((i11 & 1) != 0) {
                str = aVar.f41280d;
            }
            if ((i11 & 2) != 0) {
                aVar2 = aVar.f41281e;
            }
            if ((i11 & 4) != 0) {
                i10 = aVar.f41282i;
            }
            return aVar.a(str, aVar2, i10);
        }

        public final a a(String absoluteFilePath, oo.a captureMethod, int i10) {
            Intrinsics.checkNotNullParameter(absoluteFilePath, "absoluteFilePath");
            Intrinsics.checkNotNullParameter(captureMethod, "captureMethod");
            return new a(absoluteFilePath, captureMethod, i10);
        }

        public final String c() {
            return this.f41280d;
        }

        public final oo.a d() {
            return this.f41281e;
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
        }

        public final int e() {
            return this.f41282i;
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
            return Intrinsics.areEqual(this.f41280d, ((a) obj).f41280d);
        }

        public int hashCode() {
            return this.f41280d.hashCode();
        }

        public String toString() {
            String str = this.f41280d;
            oo.a aVar = this.f41281e;
            int i10 = this.f41282i;
            return "Local(absoluteFilePath=" + str + ", captureMethod=" + aVar + ", uploadProgress=" + i10 + ")";
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            dest.writeString(this.f41280d);
            this.f41281e.writeToParcel(dest, i10);
            dest.writeInt(this.f41282i);
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public a(String absoluteFilePath, oo.a captureMethod, int i10) {
            super(null);
            Intrinsics.checkNotNullParameter(absoluteFilePath, "absoluteFilePath");
            Intrinsics.checkNotNullParameter(captureMethod, "captureMethod");
            this.f41280d = absoluteFilePath;
            this.f41281e = captureMethod;
            this.f41282i = i10;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b extends d {
        @NotNull
        public static final Parcelable.Creator<b> CREATOR = new a();

        /* renamed from: d  reason: collision with root package name */
        private final String f41283d;

        /* renamed from: e  reason: collision with root package name */
        private final String f41284e;

        /* renamed from: i  reason: collision with root package name */
        private final String f41285i;

        /* renamed from: o  reason: collision with root package name */
        private final String f41286o;

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
            this.f41283d = str;
            this.f41284e = str2;
            this.f41285i = remoteUrl;
            this.f41286o = documentFileId;
        }

        public final String a() {
            return this.f41283d;
        }

        public final String b() {
            return this.f41286o;
        }

        public final String c() {
            return this.f41284e;
        }

        public final String d() {
            return this.f41285i;
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
            if (Intrinsics.areEqual(this.f41283d, bVar.f41283d) && Intrinsics.areEqual(this.f41284e, bVar.f41284e) && Intrinsics.areEqual(this.f41285i, bVar.f41285i) && Intrinsics.areEqual(this.f41286o, bVar.f41286o)) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            int hashCode;
            String str = this.f41283d;
            int i10 = 0;
            if (str == null) {
                hashCode = 0;
            } else {
                hashCode = str.hashCode();
            }
            int i11 = hashCode * 31;
            String str2 = this.f41284e;
            if (str2 != null) {
                i10 = str2.hashCode();
            }
            return ((((i11 + i10) * 31) + this.f41285i.hashCode()) * 31) + this.f41286o.hashCode();
        }

        public String toString() {
            String str = this.f41283d;
            String str2 = this.f41284e;
            String str3 = this.f41285i;
            String str4 = this.f41286o;
            return "Remote(absoluteFilePath=" + str + ", filename=" + str2 + ", remoteUrl=" + str3 + ", documentFileId=" + str4 + ")";
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            dest.writeString(this.f41283d);
            dest.writeString(this.f41284e);
            dest.writeString(this.f41285i);
            dest.writeString(this.f41286o);
        }
    }

    public /* synthetic */ d(DefaultConstructorMarker defaultConstructorMarker) {
        this();
    }

    private d() {
    }
}
