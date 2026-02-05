package dq;

import android.os.Parcel;
import android.os.Parcelable;
import com.withpersona.sdk2.inquiry.network.dto.JsonLogicBoolean;
import java.util.ArrayList;
import java.util.List;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class h5 implements k5, v, e0 {
    @NotNull
    public static final Parcelable.Creator<h5> CREATOR = new a();

    /* renamed from: d  reason: collision with root package name */
    private final String f21005d;

    /* renamed from: e  reason: collision with root package name */
    private final JsonLogicBoolean f21006e;

    /* renamed from: i  reason: collision with root package name */
    private final JsonLogicBoolean f21007i;

    /* renamed from: o  reason: collision with root package name */
    private final List f21008o;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements Parcelable.Creator {
        @Override // android.os.Parcelable.Creator
        /* renamed from: a */
        public final h5 createFromParcel(Parcel parcel) {
            Intrinsics.checkNotNullParameter(parcel, "parcel");
            return new h5(parcel.readString(), (JsonLogicBoolean) parcel.readParcelable(h5.class.getClassLoader()), (JsonLogicBoolean) parcel.readParcelable(h5.class.getClassLoader()));
        }

        @Override // android.os.Parcelable.Creator
        /* renamed from: b */
        public final h5[] newArray(int i10) {
            return new h5[i10];
        }
    }

    public h5(String name, JsonLogicBoolean jsonLogicBoolean, JsonLogicBoolean jsonLogicBoolean2) {
        Intrinsics.checkNotNullParameter(name, "name");
        this.f21005d = name;
        this.f21006e = jsonLogicBoolean;
        this.f21007i = jsonLogicBoolean2;
        this.f21008o = new ArrayList();
    }

    @Override // dq.e0
    public List d() {
        return this.f21008o;
    }

    @Override // android.os.Parcelable
    public final int describeContents() {
        return 0;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof h5)) {
            return false;
        }
        h5 h5Var = (h5) obj;
        if (Intrinsics.areEqual(this.f21005d, h5Var.f21005d) && Intrinsics.areEqual(this.f21006e, h5Var.f21006e) && Intrinsics.areEqual(this.f21007i, h5Var.f21007i)) {
            return true;
        }
        return false;
    }

    @Override // dq.v
    public JsonLogicBoolean getDisabled() {
        return this.f21007i;
    }

    @Override // dq.e0
    public JsonLogicBoolean getHidden() {
        return this.f21006e;
    }

    @Override // dq.k5
    public String getName() {
        return this.f21005d;
    }

    public int hashCode() {
        int hashCode;
        int hashCode2 = this.f21005d.hashCode() * 31;
        JsonLogicBoolean jsonLogicBoolean = this.f21006e;
        int i10 = 0;
        if (jsonLogicBoolean == null) {
            hashCode = 0;
        } else {
            hashCode = jsonLogicBoolean.hashCode();
        }
        int i11 = (hashCode2 + hashCode) * 31;
        JsonLogicBoolean jsonLogicBoolean2 = this.f21007i;
        if (jsonLogicBoolean2 != null) {
            i10 = jsonLogicBoolean2.hashCode();
        }
        return i11 + i10;
    }

    public String toString() {
        String str = this.f21005d;
        JsonLogicBoolean jsonLogicBoolean = this.f21006e;
        JsonLogicBoolean jsonLogicBoolean2 = this.f21007i;
        return "TitleComponent(name=" + str + ", hidden=" + jsonLogicBoolean + ", disabled=" + jsonLogicBoolean2 + ")";
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel dest, int i10) {
        Intrinsics.checkNotNullParameter(dest, "dest");
        dest.writeString(this.f21005d);
        dest.writeParcelable(this.f21006e, i10);
        dest.writeParcelable(this.f21007i, i10);
    }

    /* JADX WARN: Illegal instructions before constructor call */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public h5(com.withpersona.sdk2.inquiry.network.dto.ui.components.Title r4) {
        /*
            r3 = this;
            java.lang.String r0 = "config"
            kotlin.jvm.internal.Intrinsics.checkNotNullParameter(r4, r0)
            java.lang.String r0 = r4.getName()
            com.withpersona.sdk2.inquiry.network.dto.ui.components.Title$Attributes r1 = r4.getAttributes()
            r2 = 0
            if (r1 == 0) goto L15
            com.withpersona.sdk2.inquiry.network.dto.JsonLogicBoolean r1 = r1.getHidden()
            goto L16
        L15:
            r1 = r2
        L16:
            com.withpersona.sdk2.inquiry.network.dto.ui.components.Title$Attributes r4 = r4.getAttributes()
            if (r4 == 0) goto L20
            com.withpersona.sdk2.inquiry.network.dto.JsonLogicBoolean r2 = r4.getDisabled()
        L20:
            r3.<init>(r0, r1, r2)
            return
        */
        throw new UnsupportedOperationException("Method not decompiled: dq.h5.<init>(com.withpersona.sdk2.inquiry.network.dto.ui.components.Title):void");
    }
}
