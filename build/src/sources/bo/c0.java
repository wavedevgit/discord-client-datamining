package bo;

import android.os.Parcel;
import android.os.Parcelable;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c0 implements Parcelable {
    @NotNull
    public static final Parcelable.Creator<c0> CREATOR = new a();

    /* renamed from: d  reason: collision with root package name */
    private final String f6636d;

    /* renamed from: e  reason: collision with root package name */
    private final String f6637e;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements Parcelable.Creator {
        @Override // android.os.Parcelable.Creator
        /* renamed from: a */
        public final c0 createFromParcel(Parcel parcel) {
            Intrinsics.checkNotNullParameter(parcel, "parcel");
            return new c0(parcel.readString(), parcel.readString());
        }

        @Override // android.os.Parcelable.Creator
        /* renamed from: b */
        public final c0[] newArray(int i10) {
            return new c0[i10];
        }
    }

    public c0(String absoluteFilePath, String mimeType) {
        Intrinsics.checkNotNullParameter(absoluteFilePath, "absoluteFilePath");
        Intrinsics.checkNotNullParameter(mimeType, "mimeType");
        this.f6636d = absoluteFilePath;
        this.f6637e = mimeType;
    }

    public final String a() {
        return this.f6636d;
    }

    public final String b() {
        return this.f6637e;
    }

    @Override // android.os.Parcelable
    public final int describeContents() {
        return 0;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof c0)) {
            return false;
        }
        c0 c0Var = (c0) obj;
        if (Intrinsics.areEqual(this.f6636d, c0Var.f6636d) && Intrinsics.areEqual(this.f6637e, c0Var.f6637e)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (this.f6636d.hashCode() * 31) + this.f6637e.hashCode();
    }

    public String toString() {
        String str = this.f6636d;
        String str2 = this.f6637e;
        return "Frame(absoluteFilePath=" + str + ", mimeType=" + str2 + ")";
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel dest, int i10) {
        Intrinsics.checkNotNullParameter(dest, "dest");
        dest.writeString(this.f6636d);
        dest.writeString(this.f6637e);
    }

    /* JADX WARN: Illegal instructions before constructor call */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public /* synthetic */ c0(java.lang.String r1, java.lang.String r2, int r3, kotlin.jvm.internal.DefaultConstructorMarker r4) {
        /*
            r0 = this;
            r3 = r3 & 2
            if (r3 == 0) goto L17
            java.lang.String r2 = android.webkit.MimeTypeMap.getFileExtensionFromUrl(r1)
            if (r2 == 0) goto L15
            android.webkit.MimeTypeMap r3 = android.webkit.MimeTypeMap.getSingleton()
            java.lang.String r2 = r3.getMimeTypeFromExtension(r2)
            if (r2 == 0) goto L15
            goto L17
        L15:
            java.lang.String r2 = "image/*"
        L17:
            r0.<init>(r1, r2)
            return
        */
        throw new UnsupportedOperationException("Method not decompiled: bo.c0.<init>(java.lang.String, java.lang.String, int, kotlin.jvm.internal.DefaultConstructorMarker):void");
    }
}
