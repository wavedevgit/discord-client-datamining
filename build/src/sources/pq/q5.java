package pq;

import android.os.Parcel;
import android.os.Parcelable;
import com.withpersona.sdk2.inquiry.network.dto.JsonLogicBoolean;
import java.util.ArrayList;
import java.util.List;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class q5 implements h {
    @NotNull
    public static final Parcelable.Creator<q5> CREATOR = new a();

    /* renamed from: d  reason: collision with root package name */
    private final String f43073d;

    /* renamed from: e  reason: collision with root package name */
    private final JsonLogicBoolean f43074e;

    /* renamed from: i  reason: collision with root package name */
    private final JsonLogicBoolean f43075i;

    /* renamed from: o  reason: collision with root package name */
    private final String f43076o;

    /* renamed from: p  reason: collision with root package name */
    private final Integer f43077p;

    /* renamed from: q  reason: collision with root package name */
    private final String f43078q;

    /* renamed from: r  reason: collision with root package name */
    private final List f43079r;

    /* renamed from: s  reason: collision with root package name */
    private boolean f43080s;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements Parcelable.Creator {
        @Override // android.os.Parcelable.Creator
        /* renamed from: a */
        public final q5 createFromParcel(Parcel parcel) {
            Integer valueOf;
            Intrinsics.checkNotNullParameter(parcel, "parcel");
            String readString = parcel.readString();
            JsonLogicBoolean jsonLogicBoolean = (JsonLogicBoolean) parcel.readParcelable(q5.class.getClassLoader());
            JsonLogicBoolean jsonLogicBoolean2 = (JsonLogicBoolean) parcel.readParcelable(q5.class.getClassLoader());
            String readString2 = parcel.readString();
            if (parcel.readInt() == 0) {
                valueOf = null;
            } else {
                valueOf = Integer.valueOf(parcel.readInt());
            }
            return new q5(readString, jsonLogicBoolean, jsonLogicBoolean2, readString2, valueOf, parcel.readString());
        }

        @Override // android.os.Parcelable.Creator
        /* renamed from: b */
        public final q5[] newArray(int i10) {
            return new q5[i10];
        }
    }

    public q5(String name, JsonLogicBoolean jsonLogicBoolean, JsonLogicBoolean jsonLogicBoolean2, String str, Integer num, String str2) {
        Intrinsics.checkNotNullParameter(name, "name");
        this.f43073d = name;
        this.f43074e = jsonLogicBoolean;
        this.f43075i = jsonLogicBoolean2;
        this.f43076o = str;
        this.f43077p = num;
        this.f43078q = str2;
        this.f43079r = new ArrayList();
    }

    @Override // pq.h
    public boolean G0() {
        return this.f43080s;
    }

    public final String a() {
        return this.f43078q;
    }

    @Override // pq.e0
    public List d() {
        return this.f43079r;
    }

    @Override // android.os.Parcelable
    public final int describeContents() {
        return 0;
    }

    @Override // pq.h
    public String getAutoSubmitCountdownText() {
        return this.f43076o;
    }

    @Override // pq.h
    public Integer getAutoSubmitIntervalSeconds() {
        return this.f43077p;
    }

    @Override // pq.v
    public JsonLogicBoolean getDisabled() {
        return this.f43075i;
    }

    @Override // pq.e0
    public JsonLogicBoolean getHidden() {
        return this.f43074e;
    }

    @Override // pq.h, pq.k5
    public String getName() {
        return this.f43073d;
    }

    @Override // pq.h, pq.j2
    public void n(boolean z10) {
        this.f43080s = z10;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel dest, int i10) {
        int intValue;
        Intrinsics.checkNotNullParameter(dest, "dest");
        dest.writeString(this.f43073d);
        dest.writeParcelable(this.f43074e, i10);
        dest.writeParcelable(this.f43075i, i10);
        dest.writeString(this.f43076o);
        Integer num = this.f43077p;
        if (num == null) {
            intValue = 0;
        } else {
            dest.writeInt(1);
            intValue = num.intValue();
        }
        dest.writeInt(intValue);
        dest.writeString(this.f43078q);
    }

    /* JADX WARN: Illegal instructions before constructor call */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public q5(com.withpersona.sdk2.inquiry.network.dto.ui.components.VerifyPersonaButton r9) {
        /*
            r8 = this;
            java.lang.String r0 = "config"
            kotlin.jvm.internal.Intrinsics.checkNotNullParameter(r9, r0)
            java.lang.String r2 = r9.getName()
            com.withpersona.sdk2.inquiry.network.dto.ui.components.VerifyPersonaButton$Attributes r0 = r9.getAttributes()
            r1 = 0
            if (r0 == 0) goto L16
            com.withpersona.sdk2.inquiry.network.dto.JsonLogicBoolean r0 = r0.getHidden()
            r3 = r0
            goto L17
        L16:
            r3 = r1
        L17:
            com.withpersona.sdk2.inquiry.network.dto.ui.components.VerifyPersonaButton$Attributes r0 = r9.getAttributes()
            if (r0 == 0) goto L23
            com.withpersona.sdk2.inquiry.network.dto.JsonLogicBoolean r0 = r0.getDisabled()
            r4 = r0
            goto L24
        L23:
            r4 = r1
        L24:
            com.withpersona.sdk2.inquiry.network.dto.ui.components.VerifyPersonaButton$Attributes r0 = r9.getAttributes()
            if (r0 == 0) goto L30
            java.lang.String r0 = r0.getAutoSubmitCountdownText()
            r5 = r0
            goto L31
        L30:
            r5 = r1
        L31:
            com.withpersona.sdk2.inquiry.network.dto.ui.components.VerifyPersonaButton$Attributes r0 = r9.getAttributes()
            if (r0 == 0) goto L3d
            java.lang.Integer r0 = r0.getAutoSubmitIntervalSeconds()
            r6 = r0
            goto L3e
        L3d:
            r6 = r1
        L3e:
            com.withpersona.sdk2.inquiry.network.dto.ui.components.VerifyPersonaButton$Attributes r9 = r9.getAttributes()
            if (r9 == 0) goto L48
            java.lang.String r1 = r9.getUrl()
        L48:
            r7 = r1
            r1 = r8
            r1.<init>(r2, r3, r4, r5, r6, r7)
            return
        */
        throw new UnsupportedOperationException("Method not decompiled: pq.q5.<init>(com.withpersona.sdk2.inquiry.network.dto.ui.components.VerifyPersonaButton):void");
    }
}
