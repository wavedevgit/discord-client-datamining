package fq;

import android.os.Parcel;
import android.os.Parcelable;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b4 implements Parcelable {
    @NotNull
    public static final Parcelable.Creator<b4> CREATOR = new a();

    /* renamed from: d  reason: collision with root package name */
    private final String f23417d;

    /* renamed from: e  reason: collision with root package name */
    private final String f23418e;

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
        this.f23417d = text;
        this.f23418e = value;
    }

    public final String a() {
        return this.f23418e;
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
        if (Intrinsics.areEqual(this.f23417d, b4Var.f23417d) && Intrinsics.areEqual(this.f23418e, b4Var.f23418e)) {
            return true;
        }
        return false;
    }

    public final String getText() {
        return this.f23417d;
    }

    public int hashCode() {
        return (this.f23417d.hashCode() * 31) + this.f23418e.hashCode();
    }

    public String toString() {
        String str = this.f23417d;
        String str2 = this.f23418e;
        return "Option(text=" + str + ", value=" + str2 + ")";
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel dest, int i10) {
        Intrinsics.checkNotNullParameter(dest, "dest");
        dest.writeString(this.f23417d);
        dest.writeString(this.f23418e);
    }
}
