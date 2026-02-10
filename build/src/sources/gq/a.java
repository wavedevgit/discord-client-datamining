package gq;

import android.os.Parcel;
import android.os.Parcelable;
import com.withpersona.sdk2.inquiry.network.dto.JsonLogicBoolean;
import java.util.ArrayList;
import java.util.List;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a implements h {
    @NotNull
    public static final Parcelable.Creator<a> CREATOR = new C0378a();

    /* renamed from: d  reason: collision with root package name */
    private final String f24480d;

    /* renamed from: e  reason: collision with root package name */
    private final JsonLogicBoolean f24481e;

    /* renamed from: i  reason: collision with root package name */
    private final JsonLogicBoolean f24482i;

    /* renamed from: o  reason: collision with root package name */
    private final String f24483o;

    /* renamed from: p  reason: collision with root package name */
    private final Integer f24484p;

    /* renamed from: q  reason: collision with root package name */
    private final List f24485q;

    /* renamed from: r  reason: collision with root package name */
    private boolean f24486r;

    /* renamed from: gq.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class C0378a implements Parcelable.Creator {
        @Override // android.os.Parcelable.Creator
        /* renamed from: a */
        public final a createFromParcel(Parcel parcel) {
            Integer valueOf;
            Intrinsics.checkNotNullParameter(parcel, "parcel");
            String readString = parcel.readString();
            JsonLogicBoolean jsonLogicBoolean = (JsonLogicBoolean) parcel.readParcelable(a.class.getClassLoader());
            JsonLogicBoolean jsonLogicBoolean2 = (JsonLogicBoolean) parcel.readParcelable(a.class.getClassLoader());
            String readString2 = parcel.readString();
            if (parcel.readInt() == 0) {
                valueOf = null;
            } else {
                valueOf = Integer.valueOf(parcel.readInt());
            }
            return new a(readString, jsonLogicBoolean, jsonLogicBoolean2, readString2, valueOf);
        }

        @Override // android.os.Parcelable.Creator
        /* renamed from: b */
        public final a[] newArray(int i10) {
            return new a[i10];
        }
    }

    public a(String name, JsonLogicBoolean jsonLogicBoolean, JsonLogicBoolean jsonLogicBoolean2, String str, Integer num) {
        Intrinsics.checkNotNullParameter(name, "name");
        this.f24480d = name;
        this.f24481e = jsonLogicBoolean;
        this.f24482i = jsonLogicBoolean2;
        this.f24483o = str;
        this.f24484p = num;
        this.f24485q = new ArrayList();
    }

    @Override // gq.h
    public boolean C0() {
        return this.f24486r;
    }

    @Override // gq.e0
    public List d() {
        return this.f24485q;
    }

    @Override // android.os.Parcelable
    public final int describeContents() {
        return 0;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof a)) {
            return false;
        }
        a aVar = (a) obj;
        if (Intrinsics.areEqual(this.f24480d, aVar.f24480d) && Intrinsics.areEqual(this.f24481e, aVar.f24481e) && Intrinsics.areEqual(this.f24482i, aVar.f24482i) && Intrinsics.areEqual(this.f24483o, aVar.f24483o) && Intrinsics.areEqual(this.f24484p, aVar.f24484p)) {
            return true;
        }
        return false;
    }

    @Override // gq.h
    public String getAutoSubmitCountdownText() {
        return this.f24483o;
    }

    @Override // gq.h
    public Integer getAutoSubmitIntervalSeconds() {
        return this.f24484p;
    }

    @Override // gq.v
    public JsonLogicBoolean getDisabled() {
        return this.f24482i;
    }

    @Override // gq.e0
    public JsonLogicBoolean getHidden() {
        return this.f24481e;
    }

    @Override // gq.h, gq.k5
    public String getName() {
        return this.f24480d;
    }

    public int hashCode() {
        int hashCode;
        int hashCode2;
        int hashCode3;
        int hashCode4 = this.f24480d.hashCode() * 31;
        JsonLogicBoolean jsonLogicBoolean = this.f24481e;
        int i10 = 0;
        if (jsonLogicBoolean == null) {
            hashCode = 0;
        } else {
            hashCode = jsonLogicBoolean.hashCode();
        }
        int i11 = (hashCode4 + hashCode) * 31;
        JsonLogicBoolean jsonLogicBoolean2 = this.f24482i;
        if (jsonLogicBoolean2 == null) {
            hashCode2 = 0;
        } else {
            hashCode2 = jsonLogicBoolean2.hashCode();
        }
        int i12 = (i11 + hashCode2) * 31;
        String str = this.f24483o;
        if (str == null) {
            hashCode3 = 0;
        } else {
            hashCode3 = str.hashCode();
        }
        int i13 = (i12 + hashCode3) * 31;
        Integer num = this.f24484p;
        if (num != null) {
            i10 = num.hashCode();
        }
        return i13 + i10;
    }

    @Override // gq.h, gq.j2
    public void m(boolean z10) {
        this.f24486r = z10;
    }

    public String toString() {
        String str = this.f24480d;
        JsonLogicBoolean jsonLogicBoolean = this.f24481e;
        JsonLogicBoolean jsonLogicBoolean2 = this.f24482i;
        String str2 = this.f24483o;
        Integer num = this.f24484p;
        return "ActionButtonComponent(name=" + str + ", hidden=" + jsonLogicBoolean + ", disabled=" + jsonLogicBoolean2 + ", autoSubmitCountdownText=" + str2 + ", autoSubmitIntervalSeconds=" + num + ")";
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel dest, int i10) {
        Intrinsics.checkNotNullParameter(dest, "dest");
        dest.writeString(this.f24480d);
        dest.writeParcelable(this.f24481e, i10);
        dest.writeParcelable(this.f24482i, i10);
        dest.writeString(this.f24483o);
        Integer num = this.f24484p;
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
    public a(com.withpersona.sdk2.inquiry.network.dto.ui.components.ActionButton r8) {
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
        throw new UnsupportedOperationException("Method not decompiled: gq.a.<init>(com.withpersona.sdk2.inquiry.network.dto.ui.components.ActionButton):void");
    }
}
