package yo;

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
    private final String f54869d;

    /* renamed from: e  reason: collision with root package name */
    private final b f54870e;

    /* renamed from: i  reason: collision with root package name */
    private final m f54871i;

    /* renamed from: o  reason: collision with root package name */
    private final List f54872o;

    /* renamed from: p  reason: collision with root package name */
    private final Integer f54873p;

    /* renamed from: q  reason: collision with root package name */
    private final StepStyles.UiStepStyle f54874q;

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
        this.f54869d = cardAccessNumber;
        this.f54870e = mrzKey;
        this.f54871i = passportNfcStrings;
        this.f54872o = enabledDataGroups;
        this.f54873p = num;
        this.f54874q = uiStepStyle;
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
        if (Intrinsics.areEqual(this.f54869d, eVar.f54869d) && Intrinsics.areEqual(this.f54870e, eVar.f54870e) && Intrinsics.areEqual(this.f54871i, eVar.f54871i) && Intrinsics.areEqual(this.f54872o, eVar.f54872o) && Intrinsics.areEqual(this.f54873p, eVar.f54873p) && Intrinsics.areEqual(this.f54874q, eVar.f54874q)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        int hashCode;
        int hashCode2 = ((((((this.f54869d.hashCode() * 31) + this.f54870e.hashCode()) * 31) + this.f54871i.hashCode()) * 31) + this.f54872o.hashCode()) * 31;
        Integer num = this.f54873p;
        int i10 = 0;
        if (num == null) {
            hashCode = 0;
        } else {
            hashCode = num.hashCode();
        }
        int i11 = (hashCode2 + hashCode) * 31;
        StepStyles.UiStepStyle uiStepStyle = this.f54874q;
        if (uiStepStyle != null) {
            i10 = uiStepStyle.hashCode();
        }
        return i11 + i10;
    }

    public String toString() {
        String str = this.f54869d;
        b bVar = this.f54870e;
        m mVar = this.f54871i;
        List list = this.f54872o;
        Integer num = this.f54873p;
        StepStyles.UiStepStyle uiStepStyle = this.f54874q;
        return "PassportNfcReaderConfig(cardAccessNumber=" + str + ", mrzKey=" + bVar + ", passportNfcStrings=" + mVar + ", enabledDataGroups=" + list + ", theme=" + num + ", styles=" + uiStepStyle + ")";
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel dest, int i10) {
        int intValue;
        Intrinsics.checkNotNullParameter(dest, "dest");
        dest.writeString(this.f54869d);
        this.f54870e.writeToParcel(dest, i10);
        this.f54871i.writeToParcel(dest, i10);
        List<c> list = this.f54872o;
        dest.writeInt(list.size());
        for (c cVar : list) {
            dest.writeString(cVar.name());
        }
        Integer num = this.f54873p;
        if (num == null) {
            intValue = 0;
        } else {
            dest.writeInt(1);
            intValue = num.intValue();
        }
        dest.writeInt(intValue);
        dest.writeParcelable(this.f54874q, i10);
    }
}
