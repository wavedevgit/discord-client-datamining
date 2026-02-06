package un;

import android.os.Parcel;
import android.os.Parcelable;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class h0 implements Parcelable {
    @NotNull
    public static final Parcelable.Creator<h0> CREATOR = new a();

    /* renamed from: d  reason: collision with root package name */
    private final String f51731d;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements Parcelable.Creator {
        @Override // android.os.Parcelable.Creator
        /* renamed from: a */
        public final h0 createFromParcel(Parcel parcel) {
            Intrinsics.checkNotNullParameter(parcel, "parcel");
            return new h0(parcel.readString());
        }

        @Override // android.os.Parcelable.Creator
        /* renamed from: b */
        public final h0[] newArray(int i10) {
            return new h0[i10];
        }
    }

    public h0(String textOnImage) {
        Intrinsics.checkNotNullParameter(textOnImage, "textOnImage");
        this.f51731d = textOnImage;
    }

    public final String a() {
        return this.f51731d;
    }

    @Override // android.os.Parcelable
    public final int describeContents() {
        return 0;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if ((obj instanceof h0) && Intrinsics.areEqual(this.f51731d, ((h0) obj).f51731d)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return this.f51731d.hashCode();
    }

    public String toString() {
        String str = this.f51731d;
        return "ImageIdMetadata(textOnImage=" + str + ")";
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel dest, int i10) {
        Intrinsics.checkNotNullParameter(dest, "dest");
        dest.writeString(this.f51731d);
    }
}
