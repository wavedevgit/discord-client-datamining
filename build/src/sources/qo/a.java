package qo;

import android.os.Parcel;
import android.os.Parcelable;
import java.util.ArrayList;
import java.util.List;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a implements Parcelable {
    @NotNull
    public static final Parcelable.Creator<a> CREATOR = new C0606a();

    /* renamed from: d  reason: collision with root package name */
    private final List f47907d;

    /* renamed from: qo.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class C0606a implements Parcelable.Creator {
        @Override // android.os.Parcelable.Creator
        /* renamed from: a */
        public final a createFromParcel(Parcel parcel) {
            Intrinsics.checkNotNullParameter(parcel, "parcel");
            int readInt = parcel.readInt();
            ArrayList arrayList = new ArrayList(readInt);
            for (int i10 = 0; i10 != readInt; i10++) {
                arrayList.add(parcel.readParcelable(a.class.getClassLoader()));
            }
            return new a(arrayList);
        }

        @Override // android.os.Parcelable.Creator
        /* renamed from: b */
        public final a[] newArray(int i10) {
            return new a[i10];
        }
    }

    public a(List previousFramesMetadata) {
        Intrinsics.checkNotNullParameter(previousFramesMetadata, "previousFramesMetadata");
        this.f47907d = previousFramesMetadata;
    }

    public final a a(List previousFramesMetadata) {
        Intrinsics.checkNotNullParameter(previousFramesMetadata, "previousFramesMetadata");
        return new a(previousFramesMetadata);
    }

    public final List b() {
        return this.f47907d;
    }

    @Override // android.os.Parcelable
    public final int describeContents() {
        return 0;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if ((obj instanceof a) && Intrinsics.areEqual(this.f47907d, ((a) obj).f47907d)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return this.f47907d.hashCode();
    }

    public String toString() {
        List list = this.f47907d;
        return "AutocaptureState(previousFramesMetadata=" + list + ")";
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel dest, int i10) {
        Intrinsics.checkNotNullParameter(dest, "dest");
        List<Parcelable> list = this.f47907d;
        dest.writeInt(list.size());
        for (Parcelable parcelable : list) {
            dest.writeParcelable(parcelable, i10);
        }
    }

    public /* synthetic */ a(List list, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this((i10 & 1) != 0 ? CollectionsKt.l() : list);
    }
}
