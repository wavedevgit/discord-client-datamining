package fq;

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
    private final String f23531d;

    /* renamed from: e  reason: collision with root package name */
    private final JsonLogicBoolean f23532e;

    /* renamed from: i  reason: collision with root package name */
    private final JsonLogicBoolean f23533i;

    /* renamed from: o  reason: collision with root package name */
    private final String f23534o;

    /* renamed from: p  reason: collision with root package name */
    private final Integer f23535p;

    /* renamed from: q  reason: collision with root package name */
    private final List f23536q;

    /* renamed from: r  reason: collision with root package name */
    private boolean f23537r;

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
        this.f23531d = name;
        this.f23532e = jsonLogicBoolean;
        this.f23533i = jsonLogicBoolean2;
        this.f23534o = str;
        this.f23535p = num;
        this.f23536q = new ArrayList();
    }

    @Override // fq.h
    public boolean E0() {
        return this.f23537r;
    }

    @Override // fq.e0
    public List d() {
        return this.f23536q;
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
        if (Intrinsics.areEqual(this.f23531d, mVar.f23531d) && Intrinsics.areEqual(this.f23532e, mVar.f23532e) && Intrinsics.areEqual(this.f23533i, mVar.f23533i) && Intrinsics.areEqual(this.f23534o, mVar.f23534o) && Intrinsics.areEqual(this.f23535p, mVar.f23535p)) {
            return true;
        }
        return false;
    }

    @Override // fq.h
    public String getAutoSubmitCountdownText() {
        return this.f23534o;
    }

    @Override // fq.h
    public Integer getAutoSubmitIntervalSeconds() {
        return this.f23535p;
    }

    @Override // fq.v
    public JsonLogicBoolean getDisabled() {
        return this.f23533i;
    }

    @Override // fq.e0
    public JsonLogicBoolean getHidden() {
        return this.f23532e;
    }

    @Override // fq.h, fq.k5
    public String getName() {
        return this.f23531d;
    }

    public int hashCode() {
        int hashCode;
        int hashCode2;
        int hashCode3;
        int hashCode4 = this.f23531d.hashCode() * 31;
        JsonLogicBoolean jsonLogicBoolean = this.f23532e;
        int i10 = 0;
        if (jsonLogicBoolean == null) {
            hashCode = 0;
        } else {
            hashCode = jsonLogicBoolean.hashCode();
        }
        int i11 = (hashCode4 + hashCode) * 31;
        JsonLogicBoolean jsonLogicBoolean2 = this.f23533i;
        if (jsonLogicBoolean2 == null) {
            hashCode2 = 0;
        } else {
            hashCode2 = jsonLogicBoolean2.hashCode();
        }
        int i12 = (i11 + hashCode2) * 31;
        String str = this.f23534o;
        if (str == null) {
            hashCode3 = 0;
        } else {
            hashCode3 = str.hashCode();
        }
        int i13 = (i12 + hashCode3) * 31;
        Integer num = this.f23535p;
        if (num != null) {
            i10 = num.hashCode();
        }
        return i13 + i10;
    }

    @Override // fq.h, fq.j2
    public void m(boolean z10) {
        this.f23537r = z10;
    }

    public String toString() {
        String str = this.f23531d;
        JsonLogicBoolean jsonLogicBoolean = this.f23532e;
        JsonLogicBoolean jsonLogicBoolean2 = this.f23533i;
        String str2 = this.f23534o;
        Integer num = this.f23535p;
        return "CombinedStepButtonComponent(name=" + str + ", hidden=" + jsonLogicBoolean + ", disabled=" + jsonLogicBoolean2 + ", autoSubmitCountdownText=" + str2 + ", autoSubmitIntervalSeconds=" + num + ")";
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel dest, int i10) {
        Intrinsics.checkNotNullParameter(dest, "dest");
        dest.writeString(this.f23531d);
        dest.writeParcelable(this.f23532e, i10);
        dest.writeParcelable(this.f23533i, i10);
        dest.writeString(this.f23534o);
        Integer num = this.f23535p;
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
        throw new UnsupportedOperationException("Method not decompiled: fq.m.<init>(com.withpersona.sdk2.inquiry.network.dto.ui.components.CombinedStepButton):void");
    }
}
