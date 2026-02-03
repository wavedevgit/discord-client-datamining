package yp;

import android.os.Parcel;
import android.os.Parcelable;
import com.withpersona.sdk2.inquiry.network.dto.JsonLogicBoolean;
import java.util.ArrayList;
import java.util.List;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class e5 implements k5, v, e0 {
    @NotNull
    public static final Parcelable.Creator<e5> CREATOR = new a();

    /* renamed from: d  reason: collision with root package name */
    private final String f54911d;

    /* renamed from: e  reason: collision with root package name */
    private final JsonLogicBoolean f54912e;

    /* renamed from: i  reason: collision with root package name */
    private final JsonLogicBoolean f54913i;

    /* renamed from: o  reason: collision with root package name */
    private final List f54914o;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements Parcelable.Creator {
        @Override // android.os.Parcelable.Creator
        /* renamed from: a */
        public final e5 createFromParcel(Parcel parcel) {
            Intrinsics.checkNotNullParameter(parcel, "parcel");
            return new e5(parcel.readString(), (JsonLogicBoolean) parcel.readParcelable(e5.class.getClassLoader()), (JsonLogicBoolean) parcel.readParcelable(e5.class.getClassLoader()));
        }

        @Override // android.os.Parcelable.Creator
        /* renamed from: b */
        public final e5[] newArray(int i10) {
            return new e5[i10];
        }
    }

    public e5(String name, JsonLogicBoolean jsonLogicBoolean, JsonLogicBoolean jsonLogicBoolean2) {
        Intrinsics.checkNotNullParameter(name, "name");
        this.f54911d = name;
        this.f54912e = jsonLogicBoolean;
        this.f54913i = jsonLogicBoolean2;
        this.f54914o = new ArrayList();
    }

    @Override // yp.e0
    public List d() {
        return this.f54914o;
    }

    @Override // android.os.Parcelable
    public final int describeContents() {
        return 0;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof e5)) {
            return false;
        }
        e5 e5Var = (e5) obj;
        if (Intrinsics.areEqual(this.f54911d, e5Var.f54911d) && Intrinsics.areEqual(this.f54912e, e5Var.f54912e) && Intrinsics.areEqual(this.f54913i, e5Var.f54913i)) {
            return true;
        }
        return false;
    }

    @Override // yp.v
    public JsonLogicBoolean getDisabled() {
        return this.f54913i;
    }

    @Override // yp.e0
    public JsonLogicBoolean getHidden() {
        return this.f54912e;
    }

    @Override // yp.k5
    public String getName() {
        return this.f54911d;
    }

    public int hashCode() {
        int hashCode;
        int hashCode2 = this.f54911d.hashCode() * 31;
        JsonLogicBoolean jsonLogicBoolean = this.f54912e;
        int i10 = 0;
        if (jsonLogicBoolean == null) {
            hashCode = 0;
        } else {
            hashCode = jsonLogicBoolean.hashCode();
        }
        int i11 = (hashCode2 + hashCode) * 31;
        JsonLogicBoolean jsonLogicBoolean2 = this.f54913i;
        if (jsonLogicBoolean2 != null) {
            i10 = jsonLogicBoolean2.hashCode();
        }
        return i11 + i10;
    }

    public String toString() {
        String str = this.f54911d;
        JsonLogicBoolean jsonLogicBoolean = this.f54912e;
        JsonLogicBoolean jsonLogicBoolean2 = this.f54913i;
        return "TextComponent(name=" + str + ", hidden=" + jsonLogicBoolean + ", disabled=" + jsonLogicBoolean2 + ")";
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel dest, int i10) {
        Intrinsics.checkNotNullParameter(dest, "dest");
        dest.writeString(this.f54911d);
        dest.writeParcelable(this.f54912e, i10);
        dest.writeParcelable(this.f54913i, i10);
    }

    /* JADX WARN: Illegal instructions before constructor call */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public e5(com.withpersona.sdk2.inquiry.network.dto.ui.components.Text r4) {
        /*
            r3 = this;
            java.lang.String r0 = "config"
            kotlin.jvm.internal.Intrinsics.checkNotNullParameter(r4, r0)
            java.lang.String r0 = r4.getName()
            com.withpersona.sdk2.inquiry.network.dto.ui.components.Text$Attributes r1 = r4.getAttributes()
            r2 = 0
            if (r1 == 0) goto L15
            com.withpersona.sdk2.inquiry.network.dto.JsonLogicBoolean r1 = r1.getHidden()
            goto L16
        L15:
            r1 = r2
        L16:
            com.withpersona.sdk2.inquiry.network.dto.ui.components.Text$Attributes r4 = r4.getAttributes()
            if (r4 == 0) goto L20
            com.withpersona.sdk2.inquiry.network.dto.JsonLogicBoolean r2 = r4.getDisabled()
        L20:
            r3.<init>(r0, r1, r2)
            return
        */
        throw new UnsupportedOperationException("Method not decompiled: yp.e5.<init>(com.withpersona.sdk2.inquiry.network.dto.ui.components.Text):void");
    }
}
