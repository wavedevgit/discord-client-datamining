package pq;

import android.os.Parcel;
import android.os.Parcelable;
import com.withpersona.sdk2.inquiry.network.dto.JsonLogicBoolean;
import java.util.ArrayList;
import java.util.List;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class f4 implements k5, e0 {
    @NotNull
    public static final Parcelable.Creator<f4> CREATOR = new a();

    /* renamed from: d  reason: collision with root package name */
    private final String f42942d;

    /* renamed from: e  reason: collision with root package name */
    private final JsonLogicBoolean f42943e;

    /* renamed from: i  reason: collision with root package name */
    private final int f42944i;

    /* renamed from: o  reason: collision with root package name */
    private final List f42945o;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements Parcelable.Creator {
        @Override // android.os.Parcelable.Creator
        /* renamed from: a */
        public final f4 createFromParcel(Parcel parcel) {
            Intrinsics.checkNotNullParameter(parcel, "parcel");
            return new f4(parcel.readString(), (JsonLogicBoolean) parcel.readParcelable(f4.class.getClassLoader()), parcel.readInt());
        }

        @Override // android.os.Parcelable.Creator
        /* renamed from: b */
        public final f4[] newArray(int i10) {
            return new f4[i10];
        }
    }

    public f4(String name, JsonLogicBoolean jsonLogicBoolean, int i10) {
        Intrinsics.checkNotNullParameter(name, "name");
        this.f42942d = name;
        this.f42943e = jsonLogicBoolean;
        this.f42944i = i10;
        this.f42945o = new ArrayList();
    }

    @Override // pq.e0
    public List d() {
        return this.f42945o;
    }

    @Override // android.os.Parcelable
    public final int describeContents() {
        return 0;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof f4)) {
            return false;
        }
        f4 f4Var = (f4) obj;
        if (Intrinsics.areEqual(this.f42942d, f4Var.f42942d) && Intrinsics.areEqual(this.f42943e, f4Var.f42943e) && this.f42944i == f4Var.f42944i) {
            return true;
        }
        return false;
    }

    @Override // pq.e0
    public JsonLogicBoolean getHidden() {
        return this.f42943e;
    }

    @Override // pq.k5
    public String getName() {
        return this.f42942d;
    }

    public final int getWidth() {
        return this.f42944i;
    }

    public int hashCode() {
        int hashCode;
        int hashCode2 = this.f42942d.hashCode() * 31;
        JsonLogicBoolean jsonLogicBoolean = this.f42943e;
        if (jsonLogicBoolean == null) {
            hashCode = 0;
        } else {
            hashCode = jsonLogicBoolean.hashCode();
        }
        return ((hashCode2 + hashCode) * 31) + Integer.hashCode(this.f42944i);
    }

    public String toString() {
        String str = this.f42942d;
        JsonLogicBoolean jsonLogicBoolean = this.f42943e;
        int i10 = this.f42944i;
        return "QRCodeComponent(name=" + str + ", hidden=" + jsonLogicBoolean + ", width=" + i10 + ")";
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel dest, int i10) {
        Intrinsics.checkNotNullParameter(dest, "dest");
        dest.writeString(this.f42942d);
        dest.writeParcelable(this.f42943e, i10);
        dest.writeInt(this.f42944i);
    }

    /* JADX WARN: Illegal instructions before constructor call */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public f4(com.withpersona.sdk2.inquiry.network.dto.ui.components.QRCode r5) {
        /*
            r4 = this;
            java.lang.String r0 = "config"
            kotlin.jvm.internal.Intrinsics.checkNotNullParameter(r5, r0)
            java.lang.String r0 = r5.getName()
            com.withpersona.sdk2.inquiry.network.dto.ui.components.QRCode$Attributes r1 = r5.getAttributes()
            r2 = 0
            if (r1 == 0) goto L15
            com.withpersona.sdk2.inquiry.network.dto.JsonLogicBoolean r1 = r1.getHidden()
            goto L16
        L15:
            r1 = r2
        L16:
            com.withpersona.sdk2.inquiry.network.dto.ui.components.QRCode$QRCodeComponentStyle r5 = r5.getStyles()
            if (r5 == 0) goto L2d
            com.withpersona.sdk2.inquiry.network.dto.ui.styling.AttributeStyles$QRCodeWidthStyle r5 = r5.getWidth()
            if (r5 == 0) goto L2d
            com.withpersona.sdk2.inquiry.network.dto.ui.styling.StyleElements$Measurement r5 = r5.getBase()
            if (r5 == 0) goto L2d
            com.withpersona.sdk2.inquiry.network.dto.ui.styling.StyleElements$Size r5 = r5.getBase()
            goto L2e
        L2d:
            r5 = r2
        L2e:
            boolean r3 = r5 instanceof com.withpersona.sdk2.inquiry.network.dto.ui.styling.StyleElements.DPSize
            if (r3 == 0) goto L35
            r2 = r5
            com.withpersona.sdk2.inquiry.network.dto.ui.styling.StyleElements$DPSize r2 = (com.withpersona.sdk2.inquiry.network.dto.ui.styling.StyleElements.DPSize) r2
        L35:
            if (r2 == 0) goto L47
            java.lang.Double r5 = r2.getDp()
            if (r5 == 0) goto L47
            double r2 = r5.doubleValue()
            double r2 = bq.h.a(r2)
        L45:
            int r5 = (int) r2
            goto L4e
        L47:
            r2 = 4638707616191610880(0x4060000000000000, double:128.0)
            double r2 = bq.h.a(r2)
            goto L45
        L4e:
            r4.<init>(r0, r1, r5)
            return
        */
        throw new UnsupportedOperationException("Method not decompiled: pq.f4.<init>(com.withpersona.sdk2.inquiry.network.dto.ui.components.QRCode):void");
    }
}
