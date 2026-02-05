package dq;

import android.os.Parcel;
import android.os.Parcelable;
import com.withpersona.sdk2.inquiry.network.dto.JsonLogicBoolean;
import java.util.ArrayList;
import java.util.List;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class i implements h {
    @NotNull
    public static final Parcelable.Creator<i> CREATOR = new a();

    /* renamed from: d  reason: collision with root package name */
    private final String f21009d;

    /* renamed from: e  reason: collision with root package name */
    private final JsonLogicBoolean f21010e;

    /* renamed from: i  reason: collision with root package name */
    private final JsonLogicBoolean f21011i;

    /* renamed from: o  reason: collision with root package name */
    private final String f21012o;

    /* renamed from: p  reason: collision with root package name */
    private final Integer f21013p;

    /* renamed from: q  reason: collision with root package name */
    private final List f21014q;

    /* renamed from: r  reason: collision with root package name */
    private boolean f21015r;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements Parcelable.Creator {
        @Override // android.os.Parcelable.Creator
        /* renamed from: a */
        public final i createFromParcel(Parcel parcel) {
            Integer valueOf;
            Intrinsics.checkNotNullParameter(parcel, "parcel");
            String readString = parcel.readString();
            JsonLogicBoolean jsonLogicBoolean = (JsonLogicBoolean) parcel.readParcelable(i.class.getClassLoader());
            JsonLogicBoolean jsonLogicBoolean2 = (JsonLogicBoolean) parcel.readParcelable(i.class.getClassLoader());
            String readString2 = parcel.readString();
            if (parcel.readInt() == 0) {
                valueOf = null;
            } else {
                valueOf = Integer.valueOf(parcel.readInt());
            }
            return new i(readString, jsonLogicBoolean, jsonLogicBoolean2, readString2, valueOf);
        }

        @Override // android.os.Parcelable.Creator
        /* renamed from: b */
        public final i[] newArray(int i10) {
            return new i[i10];
        }
    }

    public i(String name, JsonLogicBoolean jsonLogicBoolean, JsonLogicBoolean jsonLogicBoolean2, String str, Integer num) {
        Intrinsics.checkNotNullParameter(name, "name");
        this.f21009d = name;
        this.f21010e = jsonLogicBoolean;
        this.f21011i = jsonLogicBoolean2;
        this.f21012o = str;
        this.f21013p = num;
        this.f21014q = new ArrayList();
    }

    @Override // dq.h
    public boolean E0() {
        return this.f21015r;
    }

    @Override // dq.e0
    public List d() {
        return this.f21014q;
    }

    @Override // android.os.Parcelable
    public final int describeContents() {
        return 0;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof i)) {
            return false;
        }
        i iVar = (i) obj;
        if (Intrinsics.areEqual(this.f21009d, iVar.f21009d) && Intrinsics.areEqual(this.f21010e, iVar.f21010e) && Intrinsics.areEqual(this.f21011i, iVar.f21011i) && Intrinsics.areEqual(this.f21012o, iVar.f21012o) && Intrinsics.areEqual(this.f21013p, iVar.f21013p)) {
            return true;
        }
        return false;
    }

    @Override // dq.h
    public String getAutoSubmitCountdownText() {
        return this.f21012o;
    }

    @Override // dq.h
    public Integer getAutoSubmitIntervalSeconds() {
        return this.f21013p;
    }

    @Override // dq.v
    public JsonLogicBoolean getDisabled() {
        return this.f21011i;
    }

    @Override // dq.e0
    public JsonLogicBoolean getHidden() {
        return this.f21010e;
    }

    @Override // dq.h, dq.k5
    public String getName() {
        return this.f21009d;
    }

    public int hashCode() {
        int hashCode;
        int hashCode2;
        int hashCode3;
        int hashCode4 = this.f21009d.hashCode() * 31;
        JsonLogicBoolean jsonLogicBoolean = this.f21010e;
        int i10 = 0;
        if (jsonLogicBoolean == null) {
            hashCode = 0;
        } else {
            hashCode = jsonLogicBoolean.hashCode();
        }
        int i11 = (hashCode4 + hashCode) * 31;
        JsonLogicBoolean jsonLogicBoolean2 = this.f21011i;
        if (jsonLogicBoolean2 == null) {
            hashCode2 = 0;
        } else {
            hashCode2 = jsonLogicBoolean2.hashCode();
        }
        int i12 = (i11 + hashCode2) * 31;
        String str = this.f21012o;
        if (str == null) {
            hashCode3 = 0;
        } else {
            hashCode3 = str.hashCode();
        }
        int i13 = (i12 + hashCode3) * 31;
        Integer num = this.f21013p;
        if (num != null) {
            i10 = num.hashCode();
        }
        return i13 + i10;
    }

    @Override // dq.h, dq.j2
    public void m(boolean z10) {
        this.f21015r = z10;
    }

    public String toString() {
        String str = this.f21009d;
        JsonLogicBoolean jsonLogicBoolean = this.f21010e;
        JsonLogicBoolean jsonLogicBoolean2 = this.f21011i;
        String str2 = this.f21012o;
        Integer num = this.f21013p;
        return "CancelButtonComponent(name=" + str + ", hidden=" + jsonLogicBoolean + ", disabled=" + jsonLogicBoolean2 + ", autoSubmitCountdownText=" + str2 + ", autoSubmitIntervalSeconds=" + num + ")";
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel dest, int i10) {
        Intrinsics.checkNotNullParameter(dest, "dest");
        dest.writeString(this.f21009d);
        dest.writeParcelable(this.f21010e, i10);
        dest.writeParcelable(this.f21011i, i10);
        dest.writeString(this.f21012o);
        Integer num = this.f21013p;
        if (num == null) {
            dest.writeInt(0);
            return;
        }
        dest.writeInt(1);
        dest.writeInt(num.intValue());
    }

    /* JADX WARN: Illegal instructions before constructor call */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public i(com.withpersona.sdk2.inquiry.network.dto.ui.components.CancelButton r8) {
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
        throw new UnsupportedOperationException("Method not decompiled: dq.i.<init>(com.withpersona.sdk2.inquiry.network.dto.ui.components.CancelButton):void");
    }
}
