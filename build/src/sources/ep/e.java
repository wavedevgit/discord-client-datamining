package ep;

import android.os.Parcel;
import android.os.Parcelable;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.StepStyles;
import java.util.ArrayList;
import java.util.List;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class e implements Parcelable {
    @NotNull
    public static final Parcelable.Creator<e> CREATOR = new a();

    /* renamed from: d  reason: collision with root package name */
    private final String f21689d;

    /* renamed from: e  reason: collision with root package name */
    private final b f21690e;

    /* renamed from: i  reason: collision with root package name */
    private final m f21691i;

    /* renamed from: o  reason: collision with root package name */
    private final List f21692o;

    /* renamed from: p  reason: collision with root package name */
    private final Integer f21693p;

    /* renamed from: q  reason: collision with root package name */
    private final StepStyles.UiStepStyle f21694q;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements Parcelable.Creator {
        @Override // android.os.Parcelable.Creator
        /* renamed from: a */
        public final e createFromParcel(Parcel parcel) {
            Integer valueOf;
            Intrinsics.checkNotNullParameter(parcel, "parcel");
            String readString = parcel.readString();
            b createFromParcel = b.CREATOR.createFromParcel(parcel);
            m createFromParcel2 = m.CREATOR.createFromParcel(parcel);
            int readInt = parcel.readInt();
            ArrayList arrayList = new ArrayList(readInt);
            for (int i10 = 0; i10 != readInt; i10++) {
                arrayList.add(c.valueOf(parcel.readString()));
            }
            if (parcel.readInt() == 0) {
                valueOf = null;
            } else {
                valueOf = Integer.valueOf(parcel.readInt());
            }
            return new e(readString, createFromParcel, createFromParcel2, arrayList, valueOf, (StepStyles.UiStepStyle) parcel.readParcelable(e.class.getClassLoader()));
        }

        @Override // android.os.Parcelable.Creator
        /* renamed from: b */
        public final e[] newArray(int i10) {
            return new e[i10];
        }
    }

    public e(String cardAccessNumber, b mrzKey, m passportNfcStrings, List enabledDataGroups, Integer num, StepStyles.UiStepStyle uiStepStyle) {
        Intrinsics.checkNotNullParameter(cardAccessNumber, "cardAccessNumber");
        Intrinsics.checkNotNullParameter(mrzKey, "mrzKey");
        Intrinsics.checkNotNullParameter(passportNfcStrings, "passportNfcStrings");
        Intrinsics.checkNotNullParameter(enabledDataGroups, "enabledDataGroups");
        this.f21689d = cardAccessNumber;
        this.f21690e = mrzKey;
        this.f21691i = passportNfcStrings;
        this.f21692o = enabledDataGroups;
        this.f21693p = num;
        this.f21694q = uiStepStyle;
    }

    @Override // android.os.Parcelable
    public final int describeContents() {
        return 0;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof e)) {
            return false;
        }
        e eVar = (e) obj;
        if (Intrinsics.areEqual(this.f21689d, eVar.f21689d) && Intrinsics.areEqual(this.f21690e, eVar.f21690e) && Intrinsics.areEqual(this.f21691i, eVar.f21691i) && Intrinsics.areEqual(this.f21692o, eVar.f21692o) && Intrinsics.areEqual(this.f21693p, eVar.f21693p) && Intrinsics.areEqual(this.f21694q, eVar.f21694q)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        int hashCode;
        int hashCode2 = ((((((this.f21689d.hashCode() * 31) + this.f21690e.hashCode()) * 31) + this.f21691i.hashCode()) * 31) + this.f21692o.hashCode()) * 31;
        Integer num = this.f21693p;
        int i10 = 0;
        if (num == null) {
            hashCode = 0;
        } else {
            hashCode = num.hashCode();
        }
        int i11 = (hashCode2 + hashCode) * 31;
        StepStyles.UiStepStyle uiStepStyle = this.f21694q;
        if (uiStepStyle != null) {
            i10 = uiStepStyle.hashCode();
        }
        return i11 + i10;
    }

    public String toString() {
        String str = this.f21689d;
        b bVar = this.f21690e;
        m mVar = this.f21691i;
        List list = this.f21692o;
        Integer num = this.f21693p;
        StepStyles.UiStepStyle uiStepStyle = this.f21694q;
        return "PassportNfcReaderConfig(cardAccessNumber=" + str + ", mrzKey=" + bVar + ", passportNfcStrings=" + mVar + ", enabledDataGroups=" + list + ", theme=" + num + ", styles=" + uiStepStyle + ")";
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel dest, int i10) {
        int intValue;
        Intrinsics.checkNotNullParameter(dest, "dest");
        dest.writeString(this.f21689d);
        this.f21690e.writeToParcel(dest, i10);
        this.f21691i.writeToParcel(dest, i10);
        List<c> list = this.f21692o;
        dest.writeInt(list.size());
        for (c cVar : list) {
            dest.writeString(cVar.name());
        }
        Integer num = this.f21693p;
        if (num == null) {
            intValue = 0;
        } else {
            dest.writeInt(1);
            intValue = num.intValue();
        }
        dest.writeInt(intValue);
        dest.writeParcelable(this.f21694q, i10);
    }
}
