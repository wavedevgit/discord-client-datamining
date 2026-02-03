package yp;

import android.os.Parcel;
import android.os.Parcelable;
import com.withpersona.sdk2.inquiry.network.dto.JsonLogicBoolean;
import java.util.ArrayList;
import java.util.List;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class o implements h {
    @NotNull
    public static final Parcelable.Creator<o> CREATOR = new a();

    /* renamed from: d  reason: collision with root package name */
    private final String f55022d;

    /* renamed from: e  reason: collision with root package name */
    private final JsonLogicBoolean f55023e;

    /* renamed from: i  reason: collision with root package name */
    private final JsonLogicBoolean f55024i;

    /* renamed from: o  reason: collision with root package name */
    private final String f55025o;

    /* renamed from: p  reason: collision with root package name */
    private final Integer f55026p;

    /* renamed from: q  reason: collision with root package name */
    private final List f55027q;

    /* renamed from: r  reason: collision with root package name */
    private boolean f55028r;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements Parcelable.Creator {
        @Override // android.os.Parcelable.Creator
        /* renamed from: a */
        public final o createFromParcel(Parcel parcel) {
            Integer valueOf;
            Intrinsics.checkNotNullParameter(parcel, "parcel");
            String readString = parcel.readString();
            JsonLogicBoolean jsonLogicBoolean = (JsonLogicBoolean) parcel.readParcelable(o.class.getClassLoader());
            JsonLogicBoolean jsonLogicBoolean2 = (JsonLogicBoolean) parcel.readParcelable(o.class.getClassLoader());
            String readString2 = parcel.readString();
            if (parcel.readInt() == 0) {
                valueOf = null;
            } else {
                valueOf = Integer.valueOf(parcel.readInt());
            }
            return new o(readString, jsonLogicBoolean, jsonLogicBoolean2, readString2, valueOf);
        }

        @Override // android.os.Parcelable.Creator
        /* renamed from: b */
        public final o[] newArray(int i10) {
            return new o[i10];
        }
    }

    public o(String name, JsonLogicBoolean jsonLogicBoolean, JsonLogicBoolean jsonLogicBoolean2, String str, Integer num) {
        Intrinsics.checkNotNullParameter(name, "name");
        this.f55022d = name;
        this.f55023e = jsonLogicBoolean;
        this.f55024i = jsonLogicBoolean2;
        this.f55025o = str;
        this.f55026p = num;
        this.f55027q = new ArrayList();
    }

    @Override // yp.h
    public boolean F0() {
        return this.f55028r;
    }

    @Override // yp.e0
    public List d() {
        return this.f55027q;
    }

    @Override // android.os.Parcelable
    public final int describeContents() {
        return 0;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof o)) {
            return false;
        }
        o oVar = (o) obj;
        if (Intrinsics.areEqual(this.f55022d, oVar.f55022d) && Intrinsics.areEqual(this.f55023e, oVar.f55023e) && Intrinsics.areEqual(this.f55024i, oVar.f55024i) && Intrinsics.areEqual(this.f55025o, oVar.f55025o) && Intrinsics.areEqual(this.f55026p, oVar.f55026p)) {
            return true;
        }
        return false;
    }

    @Override // yp.h
    public String getAutoSubmitCountdownText() {
        return this.f55025o;
    }

    @Override // yp.h
    public Integer getAutoSubmitIntervalSeconds() {
        return this.f55026p;
    }

    @Override // yp.v
    public JsonLogicBoolean getDisabled() {
        return this.f55024i;
    }

    @Override // yp.e0
    public JsonLogicBoolean getHidden() {
        return this.f55023e;
    }

    @Override // yp.h, yp.k5
    public String getName() {
        return this.f55022d;
    }

    public int hashCode() {
        int hashCode;
        int hashCode2;
        int hashCode3;
        int hashCode4 = this.f55022d.hashCode() * 31;
        JsonLogicBoolean jsonLogicBoolean = this.f55023e;
        int i10 = 0;
        if (jsonLogicBoolean == null) {
            hashCode = 0;
        } else {
            hashCode = jsonLogicBoolean.hashCode();
        }
        int i11 = (hashCode4 + hashCode) * 31;
        JsonLogicBoolean jsonLogicBoolean2 = this.f55024i;
        if (jsonLogicBoolean2 == null) {
            hashCode2 = 0;
        } else {
            hashCode2 = jsonLogicBoolean2.hashCode();
        }
        int i12 = (i11 + hashCode2) * 31;
        String str = this.f55025o;
        if (str == null) {
            hashCode3 = 0;
        } else {
            hashCode3 = str.hashCode();
        }
        int i13 = (i12 + hashCode3) * 31;
        Integer num = this.f55026p;
        if (num != null) {
            i10 = num.hashCode();
        }
        return i13 + i10;
    }

    public String toString() {
        String str = this.f55022d;
        JsonLogicBoolean jsonLogicBoolean = this.f55023e;
        JsonLogicBoolean jsonLogicBoolean2 = this.f55024i;
        String str2 = this.f55025o;
        Integer num = this.f55026p;
        return "CompleteButtonComponent(name=" + str + ", hidden=" + jsonLogicBoolean + ", disabled=" + jsonLogicBoolean2 + ", autoSubmitCountdownText=" + str2 + ", autoSubmitIntervalSeconds=" + num + ")";
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel dest, int i10) {
        Intrinsics.checkNotNullParameter(dest, "dest");
        dest.writeString(this.f55022d);
        dest.writeParcelable(this.f55023e, i10);
        dest.writeParcelable(this.f55024i, i10);
        dest.writeString(this.f55025o);
        Integer num = this.f55026p;
        if (num == null) {
            dest.writeInt(0);
            return;
        }
        dest.writeInt(1);
        dest.writeInt(num.intValue());
    }

    @Override // yp.h, yp.j2
    public void x(boolean z10) {
        this.f55028r = z10;
    }

    /* JADX WARN: Illegal instructions before constructor call */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public o(com.withpersona.sdk2.inquiry.network.dto.ui.components.CompleteButton r8) {
        /*
            r7 = this;
            java.lang.String r0 = "config"
            kotlin.jvm.internal.Intrinsics.checkNotNullParameter(r8, r0)
            java.lang.String r2 = r8.getName()
            com.withpersona.sdk2.inquiry.network.dto.ui.BasicButtonAttributes r0 = r8.getAttributes()
            r1 = 0
            if (r0 == 0) goto L16
            com.withpersona.sdk2.inquiry.network.dto.JsonLogicBoolean r0 = r0.getHidden()
            r3 = r0
            goto L17
        L16:
            r3 = r1
        L17:
            com.withpersona.sdk2.inquiry.network.dto.ui.BasicButtonAttributes r0 = r8.getAttributes()
            if (r0 == 0) goto L23
            com.withpersona.sdk2.inquiry.network.dto.JsonLogicBoolean r0 = r0.getDisabled()
            r4 = r0
            goto L24
        L23:
            r4 = r1
        L24:
            com.withpersona.sdk2.inquiry.network.dto.ui.BasicButtonAttributes r0 = r8.getAttributes()
            if (r0 == 0) goto L30
            java.lang.String r0 = r0.getAutoSubmitCountdownText()
            r5 = r0
            goto L31
        L30:
            r5 = r1
        L31:
            com.withpersona.sdk2.inquiry.network.dto.ui.BasicButtonAttributes r8 = r8.getAttributes()
            if (r8 == 0) goto L3b
            java.lang.Integer r1 = r8.getAutoSubmitIntervalSeconds()
        L3b:
            r6 = r1
            r1 = r7
            r1.<init>(r2, r3, r4, r5, r6)
            return
        */
        throw new UnsupportedOperationException("Method not decompiled: yp.o.<init>(com.withpersona.sdk2.inquiry.network.dto.ui.components.CompleteButton):void");
    }
}
