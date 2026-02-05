package mq;

import android.os.Parcel;
import android.os.Parcelable;
import java.io.File;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c implements Parcelable {
    @NotNull
    public static final Parcelable.Creator<c> CREATOR = new a();

    /* renamed from: d  reason: collision with root package name */
    private final File f38849d;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements Parcelable.Creator {
        @Override // android.os.Parcelable.Creator
        /* renamed from: a */
        public final c createFromParcel(Parcel parcel) {
            Intrinsics.checkNotNullParameter(parcel, "parcel");
            return new c((File) parcel.readSerializable());
        }

        @Override // android.os.Parcelable.Creator
        /* renamed from: b */
        public final c[] newArray(int i10) {
            return new c[i10];
        }
    }

    public c(File data) {
        Intrinsics.checkNotNullParameter(data, "data");
        this.f38849d = data;
    }

    public final File a() {
        return this.f38849d;
    }

    @Override // android.os.Parcelable
    public final int describeContents() {
        return 0;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if ((obj instanceof c) && Intrinsics.areEqual(this.f38849d, ((c) obj).f38849d)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return this.f38849d.hashCode();
    }

    public String toString() {
        File file = this.f38849d;
        return "DocumentFile(data=" + file + ")";
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel dest, int i10) {
        Intrinsics.checkNotNullParameter(dest, "dest");
        dest.writeSerializable(this.f38849d);
    }
}
