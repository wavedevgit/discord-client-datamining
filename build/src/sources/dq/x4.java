package dq;

import android.os.Parcel;
import android.os.Parcelable;
import com.withpersona.sdk2.inquiry.network.dto.JsonLogicBoolean;
import java.util.ArrayList;
import java.util.List;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class x4 implements k5, e0 {
    @NotNull
    public static final Parcelable.Creator<x4> CREATOR = new a();

    /* renamed from: d  reason: collision with root package name */
    private final String f21197d;

    /* renamed from: e  reason: collision with root package name */
    private final JsonLogicBoolean f21198e;

    /* renamed from: i  reason: collision with root package name */
    private final int f21199i;

    /* renamed from: o  reason: collision with root package name */
    private final int f21200o;

    /* renamed from: p  reason: collision with root package name */
    private final List f21201p;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements Parcelable.Creator {
        @Override // android.os.Parcelable.Creator
        /* renamed from: a */
        public final x4 createFromParcel(Parcel parcel) {
            Intrinsics.checkNotNullParameter(parcel, "parcel");
            return new x4(parcel.readString(), (JsonLogicBoolean) parcel.readParcelable(x4.class.getClassLoader()), parcel.readInt(), parcel.readInt());
        }

        @Override // android.os.Parcelable.Creator
        /* renamed from: b */
        public final x4[] newArray(int i10) {
            return new x4[i10];
        }
    }

    public x4(String name, JsonLogicBoolean jsonLogicBoolean, int i10, int i11) {
        Intrinsics.checkNotNullParameter(name, "name");
        this.f21197d = name;
        this.f21198e = jsonLogicBoolean;
        this.f21199i = i10;
        this.f21200o = i11;
        this.f21201p = new ArrayList();
    }

    @Override // dq.e0
    public List d() {
        return this.f21201p;
    }

    @Override // android.os.Parcelable
    public final int describeContents() {
        return 0;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof x4)) {
            return false;
        }
        x4 x4Var = (x4) obj;
        if (Intrinsics.areEqual(this.f21197d, x4Var.f21197d) && Intrinsics.areEqual(this.f21198e, x4Var.f21198e) && this.f21199i == x4Var.f21199i && this.f21200o == x4Var.f21200o) {
            return true;
        }
        return false;
    }

    public final int getHeight() {
        return this.f21199i;
    }

    @Override // dq.e0
    public JsonLogicBoolean getHidden() {
        return this.f21198e;
    }

    @Override // dq.k5
    public String getName() {
        return this.f21197d;
    }

    public int hashCode() {
        int hashCode;
        int hashCode2 = this.f21197d.hashCode() * 31;
        JsonLogicBoolean jsonLogicBoolean = this.f21198e;
        if (jsonLogicBoolean == null) {
            hashCode = 0;
        } else {
            hashCode = jsonLogicBoolean.hashCode();
        }
        return ((((hashCode2 + hashCode) * 31) + Integer.hashCode(this.f21199i)) * 31) + Integer.hashCode(this.f21200o);
    }

    public String toString() {
        String str = this.f21197d;
        JsonLogicBoolean jsonLogicBoolean = this.f21198e;
        int i10 = this.f21199i;
        int i11 = this.f21200o;
        return "SpacerComponent(name=" + str + ", hidden=" + jsonLogicBoolean + ", height=" + i10 + ", width=" + i11 + ")";
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel dest, int i10) {
        Intrinsics.checkNotNullParameter(dest, "dest");
        dest.writeString(this.f21197d);
        dest.writeParcelable(this.f21198e, i10);
        dest.writeInt(this.f21199i);
        dest.writeInt(this.f21200o);
    }

    /* JADX WARN: Illegal instructions before constructor call */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public x4(com.withpersona.sdk2.inquiry.network.dto.ui.components.Spacer r6) {
        /*
            r5 = this;
            java.lang.String r0 = "config"
            kotlin.jvm.internal.Intrinsics.checkNotNullParameter(r6, r0)
            java.lang.String r0 = r6.getName()
            com.withpersona.sdk2.inquiry.network.dto.ui.components.Spacer$Attributes r1 = r6.getAttributes()
            if (r1 == 0) goto L14
            com.withpersona.sdk2.inquiry.network.dto.JsonLogicBoolean r1 = r1.getHidden()
            goto L15
        L14:
            r1 = 0
        L15:
            com.withpersona.sdk2.inquiry.network.dto.ui.components.Spacer$SpacerComponentStyle r2 = r6.getStyles()
            if (r2 == 0) goto L3d
            com.withpersona.sdk2.inquiry.network.dto.ui.styling.AttributeStyles$SpacerHeightStyle r2 = r2.getHeight()
            if (r2 == 0) goto L3d
            com.withpersona.sdk2.inquiry.network.dto.ui.styling.StyleElements$Measurement r2 = r2.getBase()
            if (r2 == 0) goto L3d
            com.withpersona.sdk2.inquiry.network.dto.ui.styling.StyleElements$Size r2 = r2.getBase()
            if (r2 == 0) goto L3d
            java.lang.Double r2 = r2.getDp()
            if (r2 == 0) goto L3d
            double r2 = r2.doubleValue()
            double r2 = pp.h.a(r2)
            int r2 = (int) r2
            goto L5d
        L3d:
            com.withpersona.sdk2.inquiry.network.dto.ui.components.Spacer$Attributes r2 = r6.getAttributes()
            if (r2 == 0) goto L5c
            java.lang.String r2 = r2.getHeight()
            if (r2 == 0) goto L5c
            java.lang.String r3 = "px"
            java.lang.String r2 = kotlin.text.StringsKt.D0(r2, r3)
            if (r2 == 0) goto L5c
            java.lang.Integer r2 = kotlin.text.StringsKt.toIntOrNull(r2)
            if (r2 == 0) goto L5c
            int r2 = r2.intValue()
            goto L5d
        L5c:
            r2 = 1
        L5d:
            com.withpersona.sdk2.inquiry.network.dto.ui.components.Spacer$SpacerComponentStyle r6 = r6.getStyles()
            if (r6 == 0) goto L85
            com.withpersona.sdk2.inquiry.network.dto.ui.styling.AttributeStyles$SpacerWidthStyle r6 = r6.getWidth()
            if (r6 == 0) goto L85
            com.withpersona.sdk2.inquiry.network.dto.ui.styling.StyleElements$Measurement r6 = r6.getBase()
            if (r6 == 0) goto L85
            com.withpersona.sdk2.inquiry.network.dto.ui.styling.StyleElements$Size r6 = r6.getBase()
            if (r6 == 0) goto L85
            java.lang.Double r6 = r6.getDp()
            if (r6 == 0) goto L85
            double r3 = r6.doubleValue()
            double r3 = pp.h.a(r3)
            int r6 = (int) r3
            goto L86
        L85:
            r6 = 0
        L86:
            r5.<init>(r0, r1, r2, r6)
            return
        */
        throw new UnsupportedOperationException("Method not decompiled: dq.x4.<init>(com.withpersona.sdk2.inquiry.network.dto.ui.components.Spacer):void");
    }
}
