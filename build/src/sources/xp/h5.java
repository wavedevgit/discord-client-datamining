package xp;

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
    private final String f53588d;

    /* renamed from: e  reason: collision with root package name */
    private final JsonLogicBoolean f53589e;

    /* renamed from: i  reason: collision with root package name */
    private final JsonLogicBoolean f53590i;

    /* renamed from: o  reason: collision with root package name */
    private final List f53591o;

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
        this.f53588d = name;
        this.f53589e = jsonLogicBoolean;
        this.f53590i = jsonLogicBoolean2;
        this.f53591o = new ArrayList();
    }

    @Override // xp.e0
    public List d() {
        return this.f53591o;
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
        if (Intrinsics.areEqual(this.f53588d, h5Var.f53588d) && Intrinsics.areEqual(this.f53589e, h5Var.f53589e) && Intrinsics.areEqual(this.f53590i, h5Var.f53590i)) {
            return true;
        }
        return false;
    }

    @Override // xp.v
    public JsonLogicBoolean getDisabled() {
        return this.f53590i;
    }

    @Override // xp.e0
    public JsonLogicBoolean getHidden() {
        return this.f53589e;
    }

    @Override // xp.k5
    public String getName() {
        return this.f53588d;
    }

    public int hashCode() {
        int hashCode;
        int hashCode2 = this.f53588d.hashCode() * 31;
        JsonLogicBoolean jsonLogicBoolean = this.f53589e;
        int i10 = 0;
        if (jsonLogicBoolean == null) {
            hashCode = 0;
        } else {
            hashCode = jsonLogicBoolean.hashCode();
        }
        int i11 = (hashCode2 + hashCode) * 31;
        JsonLogicBoolean jsonLogicBoolean2 = this.f53590i;
        if (jsonLogicBoolean2 != null) {
            i10 = jsonLogicBoolean2.hashCode();
        }
        return i11 + i10;
    }

    public String toString() {
        String str = this.f53588d;
        JsonLogicBoolean jsonLogicBoolean = this.f53589e;
        JsonLogicBoolean jsonLogicBoolean2 = this.f53590i;
        return "TitleComponent(name=" + str + ", hidden=" + jsonLogicBoolean + ", disabled=" + jsonLogicBoolean2 + ")";
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel dest, int i10) {
        Intrinsics.checkNotNullParameter(dest, "dest");
        dest.writeString(this.f53588d);
        dest.writeParcelable(this.f53589e, i10);
        dest.writeParcelable(this.f53590i, i10);
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
        throw new UnsupportedOperationException("Method not decompiled: xp.h5.<init>(com.withpersona.sdk2.inquiry.network.dto.ui.components.Title):void");
    }
}
