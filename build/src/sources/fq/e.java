package fq;

import android.os.Parcel;
import android.os.Parcelable;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class e implements k5 {
    @NotNull
    public static final Parcelable.Creator<e> CREATOR = new a();

    /* renamed from: d  reason: collision with root package name */
    private final String f23448d;

    /* renamed from: e  reason: collision with root package name */
    private final boolean f23449e;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements Parcelable.Creator {
        @Override // android.os.Parcelable.Creator
        /* renamed from: a */
        public final e createFromParcel(Parcel parcel) {
            boolean z10;
            Intrinsics.checkNotNullParameter(parcel, "parcel");
            String readString = parcel.readString();
            if (parcel.readInt() != 0) {
                z10 = true;
            } else {
                z10 = false;
            }
            return new e(readString, z10);
        }

        @Override // android.os.Parcelable.Creator
        /* renamed from: b */
        public final e[] newArray(int i10) {
            return new e[i10];
        }
    }

    public e(String name, boolean z10) {
        Intrinsics.checkNotNullParameter(name, "name");
        this.f23448d = name;
        this.f23449e = z10;
    }

    public final boolean a() {
        return this.f23449e;
    }

    @Override // android.os.Parcelable
    public final int describeContents() {
        return 0;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof e)) {
            return false;
        }
        e eVar = (e) obj;
        if (Intrinsics.areEqual(this.f23448d, eVar.f23448d) && this.f23449e == eVar.f23449e) {
            return true;
        }
        return false;
    }

    @Override // fq.k5
    public String getName() {
        return this.f23448d;
    }

    public int hashCode() {
        return (this.f23448d.hashCode() * 31) + Boolean.hashCode(this.f23449e);
    }

    public String toString() {
        String str = this.f23448d;
        boolean z10 = this.f23449e;
        return "BrandingComponent(name=" + str + ", showBranding=" + z10 + ")";
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel dest, int i10) {
        Intrinsics.checkNotNullParameter(dest, "dest");
        dest.writeString(this.f23448d);
        dest.writeInt(this.f23449e ? 1 : 0);
    }

    /* JADX WARN: Illegal instructions before constructor call */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public e(com.withpersona.sdk2.inquiry.network.dto.ui.components.Branding r3) {
        /*
            r2 = this;
            java.lang.String r0 = "config"
            kotlin.jvm.internal.Intrinsics.checkNotNullParameter(r3, r0)
            java.lang.String r0 = r3.getName()
            com.withpersona.sdk2.inquiry.network.dto.ui.components.Branding$Attributes r3 = r3.getAttributes()
            if (r3 == 0) goto L1a
            java.lang.Boolean r3 = r3.getHideLogo()
            java.lang.Boolean r1 = java.lang.Boolean.TRUE
            boolean r3 = kotlin.jvm.internal.Intrinsics.areEqual(r3, r1)
            goto L1b
        L1a:
            r3 = 0
        L1b:
            r3 = r3 ^ 1
            r2.<init>(r0, r3)
            return
        */
        throw new UnsupportedOperationException("Method not decompiled: fq.e.<init>(com.withpersona.sdk2.inquiry.network.dto.ui.components.Branding):void");
    }
}
