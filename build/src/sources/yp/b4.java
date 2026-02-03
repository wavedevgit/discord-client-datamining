package yp;

import android.os.Parcel;
import android.os.Parcelable;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b4 implements Parcelable {
    @NotNull
    public static final Parcelable.Creator<b4> CREATOR = new a();

    /* renamed from: d  reason: collision with root package name */
    private final String f54877d;

    /* renamed from: e  reason: collision with root package name */
    private final String f54878e;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements Parcelable.Creator {
        @Override // android.os.Parcelable.Creator
        /* renamed from: a */
        public final b4 createFromParcel(Parcel parcel) {
            Intrinsics.checkNotNullParameter(parcel, "parcel");
            return new b4(parcel.readString(), parcel.readString());
        }

        @Override // android.os.Parcelable.Creator
        /* renamed from: b */
        public final b4[] newArray(int i10) {
            return new b4[i10];
        }
    }

    public b4(String text, String value) {
        Intrinsics.checkNotNullParameter(text, "text");
        Intrinsics.checkNotNullParameter(value, "value");
        this.f54877d = text;
        this.f54878e = value;
    }

    public final String a() {
        return this.f54878e;
    }

    @Override // android.os.Parcelable
    public final int describeContents() {
        return 0;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof b4)) {
            return false;
        }
        b4 b4Var = (b4) obj;
        if (Intrinsics.areEqual(this.f54877d, b4Var.f54877d) && Intrinsics.areEqual(this.f54878e, b4Var.f54878e)) {
            return true;
        }
        return false;
    }

    public final String getText() {
        return this.f54877d;
    }

    public int hashCode() {
        return (this.f54877d.hashCode() * 31) + this.f54878e.hashCode();
    }

    public String toString() {
        String str = this.f54877d;
        String str2 = this.f54878e;
        return "Option(text=" + str + ", value=" + str2 + ")";
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel dest, int i10) {
        Intrinsics.checkNotNullParameter(dest, "dest");
        dest.writeString(this.f54877d);
        dest.writeString(this.f54878e);
    }
}
