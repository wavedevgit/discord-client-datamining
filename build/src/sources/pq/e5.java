package pq;

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
    private final String f42927d;

    /* renamed from: e  reason: collision with root package name */
    private final JsonLogicBoolean f42928e;

    /* renamed from: i  reason: collision with root package name */
    private final JsonLogicBoolean f42929i;

    /* renamed from: o  reason: collision with root package name */
    private final List f42930o;

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
        this.f42927d = name;
        this.f42928e = jsonLogicBoolean;
        this.f42929i = jsonLogicBoolean2;
        this.f42930o = new ArrayList();
    }

    @Override // pq.e0
    public List d() {
        return this.f42930o;
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
        if (Intrinsics.areEqual(this.f42927d, e5Var.f42927d) && Intrinsics.areEqual(this.f42928e, e5Var.f42928e) && Intrinsics.areEqual(this.f42929i, e5Var.f42929i)) {
            return true;
        }
        return false;
    }

    @Override // pq.v
    public JsonLogicBoolean getDisabled() {
        return this.f42929i;
    }

    @Override // pq.e0
    public JsonLogicBoolean getHidden() {
        return this.f42928e;
    }

    @Override // pq.k5
    public String getName() {
        return this.f42927d;
    }

    public int hashCode() {
        int hashCode;
        int hashCode2 = this.f42927d.hashCode() * 31;
        JsonLogicBoolean jsonLogicBoolean = this.f42928e;
        int i10 = 0;
        if (jsonLogicBoolean == null) {
            hashCode = 0;
        } else {
            hashCode = jsonLogicBoolean.hashCode();
        }
        int i11 = (hashCode2 + hashCode) * 31;
        JsonLogicBoolean jsonLogicBoolean2 = this.f42929i;
        if (jsonLogicBoolean2 != null) {
            i10 = jsonLogicBoolean2.hashCode();
        }
        return i11 + i10;
    }

    public String toString() {
        String str = this.f42927d;
        JsonLogicBoolean jsonLogicBoolean = this.f42928e;
        JsonLogicBoolean jsonLogicBoolean2 = this.f42929i;
        return "TextComponent(name=" + str + ", hidden=" + jsonLogicBoolean + ", disabled=" + jsonLogicBoolean2 + ")";
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel dest, int i10) {
        Intrinsics.checkNotNullParameter(dest, "dest");
        dest.writeString(this.f42927d);
        dest.writeParcelable(this.f42928e, i10);
        dest.writeParcelable(this.f42929i, i10);
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
        throw new UnsupportedOperationException("Method not decompiled: pq.e5.<init>(com.withpersona.sdk2.inquiry.network.dto.ui.components.Text):void");
    }
}
