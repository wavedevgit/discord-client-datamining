package dq;

import android.os.Parcel;
import android.os.Parcelable;
import com.withpersona.sdk2.inquiry.network.dto.ui.components.CombinedStepImagePreview;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class i0 implements k5 {
    @NotNull
    public static final Parcelable.Creator<i0> CREATOR = new a();

    /* renamed from: d  reason: collision with root package name */
    private final String f21016d;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements Parcelable.Creator {
        @Override // android.os.Parcelable.Creator
        /* renamed from: a */
        public final i0 createFromParcel(Parcel parcel) {
            Intrinsics.checkNotNullParameter(parcel, "parcel");
            return new i0(parcel.readString());
        }

        @Override // android.os.Parcelable.Creator
        /* renamed from: b */
        public final i0[] newArray(int i10) {
            return new i0[i10];
        }
    }

    public i0(String name) {
        Intrinsics.checkNotNullParameter(name, "name");
        this.f21016d = name;
    }

    @Override // android.os.Parcelable
    public final int describeContents() {
        return 0;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if ((obj instanceof i0) && Intrinsics.areEqual(this.f21016d, ((i0) obj).f21016d)) {
            return true;
        }
        return false;
    }

    @Override // dq.k5
    public String getName() {
        return this.f21016d;
    }

    public int hashCode() {
        return this.f21016d.hashCode();
    }

    public String toString() {
        String str = this.f21016d;
        return "ImagePreviewComponent(name=" + str + ")";
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel dest, int i10) {
        Intrinsics.checkNotNullParameter(dest, "dest");
        dest.writeString(this.f21016d);
    }

    /* JADX WARN: 'this' call moved to the top of the method (can break code semantics) */
    public i0(CombinedStepImagePreview config) {
        this(config.getName());
        Intrinsics.checkNotNullParameter(config, "config");
    }
}
