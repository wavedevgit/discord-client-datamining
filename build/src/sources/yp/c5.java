package yp;

import android.os.Parcel;
import android.os.Parcelable;
import com.withpersona.sdk2.inquiry.network.dto.JsonLogicBoolean;
import java.util.ArrayList;
import java.util.List;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c5 implements h {
    @NotNull
    public static final Parcelable.Creator<c5> CREATOR = new a();

    /* renamed from: d  reason: collision with root package name */
    private final String f54888d;

    /* renamed from: e  reason: collision with root package name */
    private final JsonLogicBoolean f54889e;

    /* renamed from: i  reason: collision with root package name */
    private final JsonLogicBoolean f54890i;

    /* renamed from: o  reason: collision with root package name */
    private final String f54891o;

    /* renamed from: p  reason: collision with root package name */
    private final Integer f54892p;

    /* renamed from: q  reason: collision with root package name */
    private final List f54893q;

    /* renamed from: r  reason: collision with root package name */
    private boolean f54894r;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements Parcelable.Creator {
        @Override // android.os.Parcelable.Creator
        /* renamed from: a */
        public final c5 createFromParcel(Parcel parcel) {
            Integer valueOf;
            Intrinsics.checkNotNullParameter(parcel, "parcel");
            String readString = parcel.readString();
            JsonLogicBoolean jsonLogicBoolean = (JsonLogicBoolean) parcel.readParcelable(c5.class.getClassLoader());
            JsonLogicBoolean jsonLogicBoolean2 = (JsonLogicBoolean) parcel.readParcelable(c5.class.getClassLoader());
            String readString2 = parcel.readString();
            if (parcel.readInt() == 0) {
                valueOf = null;
            } else {
                valueOf = Integer.valueOf(parcel.readInt());
            }
            return new c5(readString, jsonLogicBoolean, jsonLogicBoolean2, readString2, valueOf);
        }

        @Override // android.os.Parcelable.Creator
        /* renamed from: b */
        public final c5[] newArray(int i10) {
            return new c5[i10];
        }
    }

    public c5(String name, JsonLogicBoolean jsonLogicBoolean, JsonLogicBoolean jsonLogicBoolean2, String str, Integer num) {
        Intrinsics.checkNotNullParameter(name, "name");
        this.f54888d = name;
        this.f54889e = jsonLogicBoolean;
        this.f54890i = jsonLogicBoolean2;
        this.f54891o = str;
        this.f54892p = num;
        this.f54893q = new ArrayList();
    }

    @Override // yp.h
    public boolean F0() {
        return this.f54894r;
    }

    @Override // yp.e0
    public List d() {
        return this.f54893q;
    }

    @Override // android.os.Parcelable
    public final int describeContents() {
        return 0;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof c5)) {
            return false;
        }
        c5 c5Var = (c5) obj;
        if (Intrinsics.areEqual(this.f54888d, c5Var.f54888d) && Intrinsics.areEqual(this.f54889e, c5Var.f54889e) && Intrinsics.areEqual(this.f54890i, c5Var.f54890i) && Intrinsics.areEqual(this.f54891o, c5Var.f54891o) && Intrinsics.areEqual(this.f54892p, c5Var.f54892p)) {
            return true;
        }
        return false;
    }

    @Override // yp.h
    public String getAutoSubmitCountdownText() {
        return this.f54891o;
    }

    @Override // yp.h
    public Integer getAutoSubmitIntervalSeconds() {
        return this.f54892p;
    }

    @Override // yp.v
    public JsonLogicBoolean getDisabled() {
        return this.f54890i;
    }

    @Override // yp.e0
    public JsonLogicBoolean getHidden() {
        return this.f54889e;
    }

    @Override // yp.h, yp.k5
    public String getName() {
        return this.f54888d;
    }

    public int hashCode() {
        int hashCode;
        int hashCode2;
        int hashCode3;
        int hashCode4 = this.f54888d.hashCode() * 31;
        JsonLogicBoolean jsonLogicBoolean = this.f54889e;
        int i10 = 0;
        if (jsonLogicBoolean == null) {
            hashCode = 0;
        } else {
            hashCode = jsonLogicBoolean.hashCode();
        }
        int i11 = (hashCode4 + hashCode) * 31;
        JsonLogicBoolean jsonLogicBoolean2 = this.f54890i;
        if (jsonLogicBoolean2 == null) {
            hashCode2 = 0;
        } else {
            hashCode2 = jsonLogicBoolean2.hashCode();
        }
        int i12 = (i11 + hashCode2) * 31;
        String str = this.f54891o;
        if (str == null) {
            hashCode3 = 0;
        } else {
            hashCode3 = str.hashCode();
        }
        int i13 = (i12 + hashCode3) * 31;
        Integer num = this.f54892p;
        if (num != null) {
            i10 = num.hashCode();
        }
        return i13 + i10;
    }

    public String toString() {
        String str = this.f54888d;
        JsonLogicBoolean jsonLogicBoolean = this.f54889e;
        JsonLogicBoolean jsonLogicBoolean2 = this.f54890i;
        String str2 = this.f54891o;
        Integer num = this.f54892p;
        return "SubmitButtonComponent(name=" + str + ", hidden=" + jsonLogicBoolean + ", disabled=" + jsonLogicBoolean2 + ", autoSubmitCountdownText=" + str2 + ", autoSubmitIntervalSeconds=" + num + ")";
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel dest, int i10) {
        Intrinsics.checkNotNullParameter(dest, "dest");
        dest.writeString(this.f54888d);
        dest.writeParcelable(this.f54889e, i10);
        dest.writeParcelable(this.f54890i, i10);
        dest.writeString(this.f54891o);
        Integer num = this.f54892p;
        if (num == null) {
            dest.writeInt(0);
            return;
        }
        dest.writeInt(1);
        dest.writeInt(num.intValue());
    }

    @Override // yp.h, yp.j2
    public void x(boolean z10) {
        this.f54894r = z10;
    }

    /* JADX WARN: Illegal instructions before constructor call */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public c5(com.withpersona.sdk2.inquiry.network.dto.ui.components.SubmitButton r8) {
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
        throw new UnsupportedOperationException("Method not decompiled: yp.c5.<init>(com.withpersona.sdk2.inquiry.network.dto.ui.components.SubmitButton):void");
    }
}
