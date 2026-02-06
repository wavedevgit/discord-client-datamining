package fq;

import android.os.Parcel;
import android.os.Parcelable;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.StepStyles;
import java.util.ArrayList;
import java.util.List;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class r implements dq.b {
    @NotNull
    public static final Parcelable.Creator<r> CREATOR = new a();

    /* renamed from: d  reason: collision with root package name */
    private final List f23605d;

    /* renamed from: e  reason: collision with root package name */
    private final List f23606e;

    /* renamed from: i  reason: collision with root package name */
    private final StepStyles.UiStepStyle f23607i;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements Parcelable.Creator {
        @Override // android.os.Parcelable.Creator
        /* renamed from: a */
        public final r createFromParcel(Parcel parcel) {
            ArrayList arrayList;
            Intrinsics.checkNotNullParameter(parcel, "parcel");
            if (parcel.readInt() == 0) {
                arrayList = null;
            } else {
                int readInt = parcel.readInt();
                ArrayList arrayList2 = new ArrayList(readInt);
                for (int i10 = 0; i10 != readInt; i10++) {
                    arrayList2.add(parcel.readParcelable(r.class.getClassLoader()));
                }
                arrayList = arrayList2;
            }
            int readInt2 = parcel.readInt();
            ArrayList arrayList3 = new ArrayList(readInt2);
            for (int i11 = 0; i11 != readInt2; i11++) {
                arrayList3.add(parcel.readParcelable(r.class.getClassLoader()));
            }
            return new r(arrayList, arrayList3, (StepStyles.UiStepStyle) parcel.readParcelable(r.class.getClassLoader()));
        }

        @Override // android.os.Parcelable.Creator
        /* renamed from: b */
        public final r[] newArray(int i10) {
            return new r[i10];
        }
    }

    public r(List list, List componentConfigs, StepStyles.UiStepStyle uiStepStyle) {
        Intrinsics.checkNotNullParameter(componentConfigs, "componentConfigs");
        this.f23605d = list;
        this.f23606e = componentConfigs;
        this.f23607i = uiStepStyle;
    }

    @Override // dq.b
    public List P() {
        return this.f23606e;
    }

    @Override // android.os.Parcelable
    public final int describeContents() {
        return 0;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof r)) {
            return false;
        }
        r rVar = (r) obj;
        if (Intrinsics.areEqual(this.f23605d, rVar.f23605d) && Intrinsics.areEqual(this.f23606e, rVar.f23606e) && Intrinsics.areEqual(this.f23607i, rVar.f23607i)) {
            return true;
        }
        return false;
    }

    @Override // dq.b
    public List getComponents() {
        return this.f23605d;
    }

    @Override // dq.b
    public StepStyles.UiStepStyle getStyles() {
        return this.f23607i;
    }

    public int hashCode() {
        int hashCode;
        List list = this.f23605d;
        int i10 = 0;
        if (list == null) {
            hashCode = 0;
        } else {
            hashCode = list.hashCode();
        }
        int hashCode2 = ((hashCode * 31) + this.f23606e.hashCode()) * 31;
        StepStyles.UiStepStyle uiStepStyle = this.f23607i;
        if (uiStepStyle != null) {
            i10 = uiStepStyle.hashCode();
        }
        return hashCode2 + i10;
    }

    public String toString() {
        List list = this.f23605d;
        List list2 = this.f23606e;
        StepStyles.UiStepStyle uiStepStyle = this.f23607i;
        return "CtaCardPage(components=" + list + ", componentConfigs=" + list2 + ", styles=" + uiStepStyle + ")";
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel dest, int i10) {
        Intrinsics.checkNotNullParameter(dest, "dest");
        List<Parcelable> list = this.f23605d;
        if (list == null) {
            dest.writeInt(0);
        } else {
            dest.writeInt(1);
            dest.writeInt(list.size());
            for (Parcelable parcelable : list) {
                dest.writeParcelable(parcelable, i10);
            }
        }
        List<Parcelable> list2 = this.f23606e;
        dest.writeInt(list2.size());
        for (Parcelable parcelable2 : list2) {
            dest.writeParcelable(parcelable2, i10);
        }
        dest.writeParcelable(this.f23607i, i10);
    }
}
