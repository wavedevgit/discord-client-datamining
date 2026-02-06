package fq;

import android.os.Parcel;
import android.os.Parcelable;
import com.withpersona.sdk2.inquiry.network.dto.ui.components.PrivacyPolicy;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c4 implements k5 {
    @NotNull
    public static final Parcelable.Creator<c4> CREATOR = new a();

    /* renamed from: d  reason: collision with root package name */
    private final String f23427d;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements Parcelable.Creator {
        @Override // android.os.Parcelable.Creator
        /* renamed from: a */
        public final c4 createFromParcel(Parcel parcel) {
            Intrinsics.checkNotNullParameter(parcel, "parcel");
            return new c4(parcel.readString());
        }

        @Override // android.os.Parcelable.Creator
        /* renamed from: b */
        public final c4[] newArray(int i10) {
            return new c4[i10];
        }
    }

    public c4(String name) {
        Intrinsics.checkNotNullParameter(name, "name");
        this.f23427d = name;
    }

    @Override // android.os.Parcelable
    public final int describeContents() {
        return 0;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if ((obj instanceof c4) && Intrinsics.areEqual(this.f23427d, ((c4) obj).f23427d)) {
            return true;
        }
        return false;
    }

    @Override // fq.k5
    public String getName() {
        return this.f23427d;
    }

    public int hashCode() {
        return this.f23427d.hashCode();
    }

    public String toString() {
        String str = this.f23427d;
        return "PrivacyPolicyComponent(name=" + str + ")";
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel dest, int i10) {
        Intrinsics.checkNotNullParameter(dest, "dest");
        dest.writeString(this.f23427d);
    }

    /* JADX WARN: 'this' call moved to the top of the method (can break code semantics) */
    public c4(PrivacyPolicy config) {
        this(config.getName());
        Intrinsics.checkNotNullParameter(config, "config");
    }
}
