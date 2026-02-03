package pn;

import android.os.Parcel;
import android.os.Parcelable;
import java.util.ArrayList;
import java.util.List;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class f implements Parcelable {
    @NotNull
    public static final Parcelable.Creator<f> CREATOR = new a();

    /* renamed from: d  reason: collision with root package name */
    private final List f46238d;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements Parcelable.Creator {
        @Override // android.os.Parcelable.Creator
        /* renamed from: a */
        public final f createFromParcel(Parcel parcel) {
            Intrinsics.checkNotNullParameter(parcel, "parcel");
            int readInt = parcel.readInt();
            ArrayList arrayList = new ArrayList(readInt);
            for (int i10 = 0; i10 != readInt; i10++) {
                arrayList.add(parcel.readParcelable(f.class.getClassLoader()));
            }
            return new f(arrayList);
        }

        @Override // android.os.Parcelable.Creator
        /* renamed from: b */
        public final f[] newArray(int i10) {
            return new f[i10];
        }
    }

    public f(List rules) {
        Intrinsics.checkNotNullParameter(rules, "rules");
        this.f46238d = rules;
    }

    public final List a() {
        return this.f46238d;
    }

    @Override // android.os.Parcelable
    public final int describeContents() {
        return 0;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if ((obj instanceof f) && Intrinsics.areEqual(this.f46238d, ((f) obj).f46238d)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return this.f46238d.hashCode();
    }

    public String toString() {
        List list = this.f46238d;
        return "AutoCaptureRuleSet(rules=" + list + ")";
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel dest, int i10) {
        Intrinsics.checkNotNullParameter(dest, "dest");
        List<Parcelable> list = this.f46238d;
        dest.writeInt(list.size());
        for (Parcelable parcelable : list) {
            dest.writeParcelable(parcelable, i10);
        }
    }

    public /* synthetic */ f(List list, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this((i10 & 1) != 0 ? CollectionsKt.l() : list);
    }
}
