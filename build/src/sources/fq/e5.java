package fq;

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
    private final String f23451d;

    /* renamed from: e  reason: collision with root package name */
    private final JsonLogicBoolean f23452e;

    /* renamed from: i  reason: collision with root package name */
    private final JsonLogicBoolean f23453i;

    /* renamed from: o  reason: collision with root package name */
    private final List f23454o;

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
        this.f23451d = name;
        this.f23452e = jsonLogicBoolean;
        this.f23453i = jsonLogicBoolean2;
        this.f23454o = new ArrayList();
    }

    @Override // fq.e0
    public List d() {
        return this.f23454o;
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
        if (Intrinsics.areEqual(this.f23451d, e5Var.f23451d) && Intrinsics.areEqual(this.f23452e, e5Var.f23452e) && Intrinsics.areEqual(this.f23453i, e5Var.f23453i)) {
            return true;
        }
        return false;
    }

    @Override // fq.v
    public JsonLogicBoolean getDisabled() {
        return this.f23453i;
    }

    @Override // fq.e0
    public JsonLogicBoolean getHidden() {
        return this.f23452e;
    }

    @Override // fq.k5
    public String getName() {
        return this.f23451d;
    }

    public int hashCode() {
        int hashCode;
        int hashCode2 = this.f23451d.hashCode() * 31;
        JsonLogicBoolean jsonLogicBoolean = this.f23452e;
        int i10 = 0;
        if (jsonLogicBoolean == null) {
            hashCode = 0;
        } else {
            hashCode = jsonLogicBoolean.hashCode();
        }
        int i11 = (hashCode2 + hashCode) * 31;
        JsonLogicBoolean jsonLogicBoolean2 = this.f23453i;
        if (jsonLogicBoolean2 != null) {
            i10 = jsonLogicBoolean2.hashCode();
        }
        return i11 + i10;
    }

    public String toString() {
        String str = this.f23451d;
        JsonLogicBoolean jsonLogicBoolean = this.f23452e;
        JsonLogicBoolean jsonLogicBoolean2 = this.f23453i;
        return "TextComponent(name=" + str + ", hidden=" + jsonLogicBoolean + ", disabled=" + jsonLogicBoolean2 + ")";
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel dest, int i10) {
        Intrinsics.checkNotNullParameter(dest, "dest");
        dest.writeString(this.f23451d);
        dest.writeParcelable(this.f23452e, i10);
        dest.writeParcelable(this.f23453i, i10);
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
        throw new UnsupportedOperationException("Method not decompiled: fq.e5.<init>(com.withpersona.sdk2.inquiry.network.dto.ui.components.Text):void");
    }
}
