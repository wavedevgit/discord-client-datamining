package fq;

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
    private final String f23498d;

    /* renamed from: e  reason: collision with root package name */
    private final JsonLogicBoolean f23499e;

    /* renamed from: i  reason: collision with root package name */
    private final List f23500i;

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
        this.f23498d = name;
        this.f23499e = jsonLogicBoolean;
        this.f23500i = new ArrayList();
    }

    @Override // fq.e0
    public List d() {
        return this.f23500i;
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
        if (Intrinsics.areEqual(this.f23498d, i4Var.f23498d) && Intrinsics.areEqual(this.f23499e, i4Var.f23499e)) {
            return true;
        }
        return false;
    }

    @Override // fq.e0
    public JsonLogicBoolean getHidden() {
        return this.f23499e;
    }

    @Override // fq.k5
    public String getName() {
        return this.f23498d;
    }

    public int hashCode() {
        int hashCode;
        int hashCode2 = this.f23498d.hashCode() * 31;
        JsonLogicBoolean jsonLogicBoolean = this.f23499e;
        if (jsonLogicBoolean == null) {
            hashCode = 0;
        } else {
            hashCode = jsonLogicBoolean.hashCode();
        }
        return hashCode2 + hashCode;
    }

    public String toString() {
        String str = this.f23498d;
        JsonLogicBoolean jsonLogicBoolean = this.f23499e;
        return "RemoteImageComponent(name=" + str + ", hidden=" + jsonLogicBoolean + ")";
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel dest, int i10) {
        Intrinsics.checkNotNullParameter(dest, "dest");
        dest.writeString(this.f23498d);
        dest.writeParcelable(this.f23499e, i10);
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
        throw new UnsupportedOperationException("Method not decompiled: fq.i4.<init>(com.withpersona.sdk2.inquiry.network.dto.ui.components.RemoteImage):void");
    }
}
