package pq;

import android.os.Parcel;
import android.os.Parcelable;
import com.withpersona.sdk2.inquiry.network.dto.JsonLogicBoolean;
import java.util.ArrayList;
import java.util.List;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class i4 implements k5, e0 {
    @NotNull
    public static final Parcelable.Creator<i4> CREATOR = new a();

    /* renamed from: d  reason: collision with root package name */
    private final String f43543d;

    /* renamed from: e  reason: collision with root package name */
    private final JsonLogicBoolean f43544e;

    /* renamed from: i  reason: collision with root package name */
    private final List f43545i;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements Parcelable.Creator {
        @Override // android.os.Parcelable.Creator
        /* renamed from: a */
        public final i4 createFromParcel(Parcel parcel) {
            Intrinsics.checkNotNullParameter(parcel, "parcel");
            return new i4(parcel.readString(), (JsonLogicBoolean) parcel.readParcelable(i4.class.getClassLoader()));
        }

        @Override // android.os.Parcelable.Creator
        /* renamed from: b */
        public final i4[] newArray(int i10) {
            return new i4[i10];
        }
    }

    public i4(String name, JsonLogicBoolean jsonLogicBoolean) {
        Intrinsics.checkNotNullParameter(name, "name");
        this.f43543d = name;
        this.f43544e = jsonLogicBoolean;
        this.f43545i = new ArrayList();
    }

    @Override // pq.e0
    public List d() {
        return this.f43545i;
    }

    @Override // android.os.Parcelable
    public final int describeContents() {
        return 0;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof i4)) {
            return false;
        }
        i4 i4Var = (i4) obj;
        if (Intrinsics.areEqual(this.f43543d, i4Var.f43543d) && Intrinsics.areEqual(this.f43544e, i4Var.f43544e)) {
            return true;
        }
        return false;
    }

    @Override // pq.e0
    public JsonLogicBoolean getHidden() {
        return this.f43544e;
    }

    @Override // pq.k5
    public String getName() {
        return this.f43543d;
    }

    public int hashCode() {
        int hashCode;
        int hashCode2 = this.f43543d.hashCode() * 31;
        JsonLogicBoolean jsonLogicBoolean = this.f43544e;
        if (jsonLogicBoolean == null) {
            hashCode = 0;
        } else {
            hashCode = jsonLogicBoolean.hashCode();
        }
        return hashCode2 + hashCode;
    }

    public String toString() {
        String str = this.f43543d;
        JsonLogicBoolean jsonLogicBoolean = this.f43544e;
        return "RemoteImageComponent(name=" + str + ", hidden=" + jsonLogicBoolean + ")";
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel dest, int i10) {
        Intrinsics.checkNotNullParameter(dest, "dest");
        dest.writeString(this.f43543d);
        dest.writeParcelable(this.f43544e, i10);
    }

    /* JADX WARN: Illegal instructions before constructor call */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public i4(com.withpersona.sdk2.inquiry.network.dto.ui.components.RemoteImage r2) {
        /*
            r1 = this;
            java.lang.String r0 = "config"
            kotlin.jvm.internal.Intrinsics.checkNotNullParameter(r2, r0)
            java.lang.String r0 = r2.getName()
            com.withpersona.sdk2.inquiry.network.dto.ui.components.RemoteImage$Attributes r2 = r2.getAttributes()
            if (r2 == 0) goto L14
            com.withpersona.sdk2.inquiry.network.dto.JsonLogicBoolean r2 = r2.getHidden()
            goto L15
        L14:
            r2 = 0
        L15:
            r1.<init>(r0, r2)
            return
        */
        throw new UnsupportedOperationException("Method not decompiled: pq.i4.<init>(com.withpersona.sdk2.inquiry.network.dto.ui.components.RemoteImage):void");
    }
}
