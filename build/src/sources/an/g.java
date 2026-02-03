package an;

import android.os.Parcel;
import android.os.Parcelable;
import android.util.SparseArray;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class g implements Parcelable {
    @NotNull
    public static final a CREATOR = new a(null);

    /* renamed from: d  reason: collision with root package name */
    private final String f730d;

    /* renamed from: e  reason: collision with root package name */
    private final SparseArray f731e;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements Parcelable.Creator {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        @Override // android.os.Parcelable.Creator
        /* renamed from: a */
        public g createFromParcel(Parcel parcel) {
            Intrinsics.checkNotNullParameter(parcel, "parcel");
            String readString = parcel.readString();
            Intrinsics.checkNotNull(readString);
            Intrinsics.checkNotNullExpressionValue(readString, "parcel.readString()!!");
            SparseArray readSparseArray = parcel.readSparseArray(g.class.getClassLoader());
            Intrinsics.checkNotNull(readSparseArray);
            Intrinsics.checkNotNullExpressionValue(readSparseArray, "parcel.readSparseArray<P…class.java.classLoader)!!");
            return new g(readString, readSparseArray);
        }

        @Override // android.os.Parcelable.Creator
        /* renamed from: b */
        public g[] newArray(int i10) {
            return new g[i10];
        }

        private a() {
        }
    }

    public g(String key, SparseArray viewState) {
        Intrinsics.checkNotNullParameter(key, "key");
        Intrinsics.checkNotNullParameter(viewState, "viewState");
        this.f730d = key;
        this.f731e = viewState;
    }

    public final SparseArray a() {
        return this.f731e;
    }

    @Override // android.os.Parcelable
    public int describeContents() {
        return 0;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof g)) {
            return false;
        }
        g gVar = (g) obj;
        if (Intrinsics.areEqual(this.f730d, gVar.f730d) && Intrinsics.areEqual(this.f731e, gVar.f731e)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (this.f730d.hashCode() * 31) + this.f731e.hashCode();
    }

    public String toString() {
        return "ViewStateFrame(key=" + this.f730d + ", viewState=" + this.f731e + ')';
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        Intrinsics.checkNotNullParameter(parcel, "parcel");
        parcel.writeString(this.f730d);
        parcel.writeSparseArray(this.f731e);
    }
}
