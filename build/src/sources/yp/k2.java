package yp;

import android.os.Parcel;
import android.os.Parcelable;
import com.withpersona.sdk2.inquiry.network.dto.JsonLogicBoolean;
import java.util.ArrayList;
import java.util.List;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class k2 implements k5, e0 {
    @NotNull
    public static final Parcelable.Creator<k2> CREATOR = new a();

    /* renamed from: d  reason: collision with root package name */
    private final String f54974d;

    /* renamed from: e  reason: collision with root package name */
    private final JsonLogicBoolean f54975e;

    /* renamed from: i  reason: collision with root package name */
    private final List f54976i;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements Parcelable.Creator {
        @Override // android.os.Parcelable.Creator
        /* renamed from: a */
        public final k2 createFromParcel(Parcel parcel) {
            Intrinsics.checkNotNullParameter(parcel, "parcel");
            return new k2(parcel.readString(), (JsonLogicBoolean) parcel.readParcelable(k2.class.getClassLoader()));
        }

        @Override // android.os.Parcelable.Creator
        /* renamed from: b */
        public final k2[] newArray(int i10) {
            return new k2[i10];
        }
    }

    public k2(String name, JsonLogicBoolean jsonLogicBoolean) {
        Intrinsics.checkNotNullParameter(name, "name");
        this.f54974d = name;
        this.f54975e = jsonLogicBoolean;
        this.f54976i = new ArrayList();
    }

    @Override // yp.e0
    public List d() {
        return this.f54976i;
    }

    @Override // android.os.Parcelable
    public final int describeContents() {
        return 0;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof k2)) {
            return false;
        }
        k2 k2Var = (k2) obj;
        if (Intrinsics.areEqual(this.f54974d, k2Var.f54974d) && Intrinsics.areEqual(this.f54975e, k2Var.f54975e)) {
            return true;
        }
        return false;
    }

    @Override // yp.e0
    public JsonLogicBoolean getHidden() {
        return this.f54975e;
    }

    @Override // yp.k5
    public String getName() {
        return this.f54974d;
    }

    public int hashCode() {
        int hashCode;
        int hashCode2 = this.f54974d.hashCode() * 31;
        JsonLogicBoolean jsonLogicBoolean = this.f54975e;
        if (jsonLogicBoolean == null) {
            hashCode = 0;
        } else {
            hashCode = jsonLogicBoolean.hashCode();
        }
        return hashCode2 + hashCode;
    }

    public String toString() {
        String str = this.f54974d;
        JsonLogicBoolean jsonLogicBoolean = this.f54975e;
        return "LocalImageComponent(name=" + str + ", hidden=" + jsonLogicBoolean + ")";
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel dest, int i10) {
        Intrinsics.checkNotNullParameter(dest, "dest");
        dest.writeString(this.f54974d);
        dest.writeParcelable(this.f54975e, i10);
    }

    /* JADX WARN: Illegal instructions before constructor call */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public k2(com.withpersona.sdk2.inquiry.network.dto.ui.components.LocalImage r2) {
        /*
            r1 = this;
            java.lang.String r0 = "config"
            kotlin.jvm.internal.Intrinsics.checkNotNullParameter(r2, r0)
            java.lang.String r0 = r2.getName()
            com.withpersona.sdk2.inquiry.network.dto.ui.components.LocalImage$Attributes r2 = r2.getAttributes()
            if (r2 == 0) goto L14
            com.withpersona.sdk2.inquiry.network.dto.JsonLogicBoolean r2 = r2.getHidden()
            goto L15
        L14:
            r2 = 0
        L15:
            r1.<init>(r0, r2)
            return
        */
        throw new UnsupportedOperationException("Method not decompiled: yp.k2.<init>(com.withpersona.sdk2.inquiry.network.dto.ui.components.LocalImage):void");
    }
}
