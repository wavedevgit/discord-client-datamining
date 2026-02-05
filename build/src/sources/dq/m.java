package dq;

import android.os.Parcel;
import android.os.Parcelable;
import com.withpersona.sdk2.inquiry.network.dto.JsonLogicBoolean;
import java.util.ArrayList;
import java.util.List;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class m implements h {
    @NotNull
    public static final Parcelable.Creator<m> CREATOR = new a();

    /* renamed from: d  reason: collision with root package name */
    private final String f21054d;

    /* renamed from: e  reason: collision with root package name */
    private final JsonLogicBoolean f21055e;

    /* renamed from: i  reason: collision with root package name */
    private final JsonLogicBoolean f21056i;

    /* renamed from: o  reason: collision with root package name */
    private final String f21057o;

    /* renamed from: p  reason: collision with root package name */
    private final Integer f21058p;

    /* renamed from: q  reason: collision with root package name */
    private final List f21059q;

    /* renamed from: r  reason: collision with root package name */
    private boolean f21060r;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements Parcelable.Creator {
        @Override // android.os.Parcelable.Creator
        /* renamed from: a */
        public final m createFromParcel(Parcel parcel) {
            Integer valueOf;
            Intrinsics.checkNotNullParameter(parcel, "parcel");
            String readString = parcel.readString();
            JsonLogicBoolean jsonLogicBoolean = (JsonLogicBoolean) parcel.readParcelable(m.class.getClassLoader());
            JsonLogicBoolean jsonLogicBoolean2 = (JsonLogicBoolean) parcel.readParcelable(m.class.getClassLoader());
            String readString2 = parcel.readString();
            if (parcel.readInt() == 0) {
                valueOf = null;
            } else {
                valueOf = Integer.valueOf(parcel.readInt());
            }
            return new m(readString, jsonLogicBoolean, jsonLogicBoolean2, readString2, valueOf);
        }

        @Override // android.os.Parcelable.Creator
        /* renamed from: b */
        public final m[] newArray(int i10) {
            return new m[i10];
        }
    }

    public m(String name, JsonLogicBoolean jsonLogicBoolean, JsonLogicBoolean jsonLogicBoolean2, String str, Integer num) {
        Intrinsics.checkNotNullParameter(name, "name");
        this.f21054d = name;
        this.f21055e = jsonLogicBoolean;
        this.f21056i = jsonLogicBoolean2;
        this.f21057o = str;
        this.f21058p = num;
        this.f21059q = new ArrayList();
    }

    @Override // dq.h
    public boolean E0() {
        return this.f21060r;
    }

    @Override // dq.e0
    public List d() {
        return this.f21059q;
    }

    @Override // android.os.Parcelable
    public final int describeContents() {
        return 0;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof m)) {
            return false;
        }
        m mVar = (m) obj;
        if (Intrinsics.areEqual(this.f21054d, mVar.f21054d) && Intrinsics.areEqual(this.f21055e, mVar.f21055e) && Intrinsics.areEqual(this.f21056i, mVar.f21056i) && Intrinsics.areEqual(this.f21057o, mVar.f21057o) && Intrinsics.areEqual(this.f21058p, mVar.f21058p)) {
            return true;
        }
        return false;
    }

    @Override // dq.h
    public String getAutoSubmitCountdownText() {
        return this.f21057o;
    }

    @Override // dq.h
    public Integer getAutoSubmitIntervalSeconds() {
        return this.f21058p;
    }

    @Override // dq.v
    public JsonLogicBoolean getDisabled() {
        return this.f21056i;
    }

    @Override // dq.e0
    public JsonLogicBoolean getHidden() {
        return this.f21055e;
    }

    @Override // dq.h, dq.k5
    public String getName() {
        return this.f21054d;
    }

    public int hashCode() {
        int hashCode;
        int hashCode2;
        int hashCode3;
        int hashCode4 = this.f21054d.hashCode() * 31;
        JsonLogicBoolean jsonLogicBoolean = this.f21055e;
        int i10 = 0;
        if (jsonLogicBoolean == null) {
            hashCode = 0;
        } else {
            hashCode = jsonLogicBoolean.hashCode();
        }
        int i11 = (hashCode4 + hashCode) * 31;
        JsonLogicBoolean jsonLogicBoolean2 = this.f21056i;
        if (jsonLogicBoolean2 == null) {
            hashCode2 = 0;
        } else {
            hashCode2 = jsonLogicBoolean2.hashCode();
        }
        int i12 = (i11 + hashCode2) * 31;
        String str = this.f21057o;
        if (str == null) {
            hashCode3 = 0;
        } else {
            hashCode3 = str.hashCode();
        }
        int i13 = (i12 + hashCode3) * 31;
        Integer num = this.f21058p;
        if (num != null) {
            i10 = num.hashCode();
        }
        return i13 + i10;
    }

    @Override // dq.h, dq.j2
    public void m(boolean z10) {
        this.f21060r = z10;
    }

    public String toString() {
        String str = this.f21054d;
        JsonLogicBoolean jsonLogicBoolean = this.f21055e;
        JsonLogicBoolean jsonLogicBoolean2 = this.f21056i;
        String str2 = this.f21057o;
        Integer num = this.f21058p;
        return "CombinedStepButtonComponent(name=" + str + ", hidden=" + jsonLogicBoolean + ", disabled=" + jsonLogicBoolean2 + ", autoSubmitCountdownText=" + str2 + ", autoSubmitIntervalSeconds=" + num + ")";
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel dest, int i10) {
        Intrinsics.checkNotNullParameter(dest, "dest");
        dest.writeString(this.f21054d);
        dest.writeParcelable(this.f21055e, i10);
        dest.writeParcelable(this.f21056i, i10);
        dest.writeString(this.f21057o);
        Integer num = this.f21058p;
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
    public m(com.withpersona.sdk2.inquiry.network.dto.ui.components.CombinedStepButton r8) {
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
        throw new UnsupportedOperationException("Method not decompiled: dq.m.<init>(com.withpersona.sdk2.inquiry.network.dto.ui.components.CombinedStepButton):void");
    }
}
