package bp;

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
    private final String f6663d;

    /* renamed from: e  reason: collision with root package name */
    private final b f6664e;

    /* renamed from: i  reason: collision with root package name */
    private final m f6665i;

    /* renamed from: o  reason: collision with root package name */
    private final List f6666o;

    /* renamed from: p  reason: collision with root package name */
    private final Integer f6667p;

    /* renamed from: q  reason: collision with root package name */
    private final StepStyles.UiStepStyle f6668q;

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
        this.f6663d = cardAccessNumber;
        this.f6664e = mrzKey;
        this.f6665i = passportNfcStrings;
        this.f6666o = enabledDataGroups;
        this.f6667p = num;
        this.f6668q = uiStepStyle;
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
        if (Intrinsics.areEqual(this.f6663d, eVar.f6663d) && Intrinsics.areEqual(this.f6664e, eVar.f6664e) && Intrinsics.areEqual(this.f6665i, eVar.f6665i) && Intrinsics.areEqual(this.f6666o, eVar.f6666o) && Intrinsics.areEqual(this.f6667p, eVar.f6667p) && Intrinsics.areEqual(this.f6668q, eVar.f6668q)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        int hashCode;
        int hashCode2 = ((((((this.f6663d.hashCode() * 31) + this.f6664e.hashCode()) * 31) + this.f6665i.hashCode()) * 31) + this.f6666o.hashCode()) * 31;
        Integer num = this.f6667p;
        int i10 = 0;
        if (num == null) {
            hashCode = 0;
        } else {
            hashCode = num.hashCode();
        }
        int i11 = (hashCode2 + hashCode) * 31;
        StepStyles.UiStepStyle uiStepStyle = this.f6668q;
        if (uiStepStyle != null) {
            i10 = uiStepStyle.hashCode();
        }
        return i11 + i10;
    }

    public String toString() {
        String str = this.f6663d;
        b bVar = this.f6664e;
        m mVar = this.f6665i;
        List list = this.f6666o;
        Integer num = this.f6667p;
        StepStyles.UiStepStyle uiStepStyle = this.f6668q;
        return "PassportNfcReaderConfig(cardAccessNumber=" + str + ", mrzKey=" + bVar + ", passportNfcStrings=" + mVar + ", enabledDataGroups=" + list + ", theme=" + num + ", styles=" + uiStepStyle + ")";
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel dest, int i10) {
        int intValue;
        Intrinsics.checkNotNullParameter(dest, "dest");
        dest.writeString(this.f6663d);
        this.f6664e.writeToParcel(dest, i10);
        this.f6665i.writeToParcel(dest, i10);
        List<c> list = this.f6666o;
        dest.writeInt(list.size());
        for (c cVar : list) {
            dest.writeString(cVar.name());
        }
        Integer num = this.f6667p;
        if (num == null) {
            intValue = 0;
        } else {
            dest.writeInt(1);
            intValue = num.intValue();
        }
        dest.writeInt(intValue);
        dest.writeParcelable(this.f6668q, i10);
    }
}
