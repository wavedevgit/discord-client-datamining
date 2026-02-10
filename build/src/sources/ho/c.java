package ho;

import android.os.Parcel;
import android.os.Parcelable;
import java.util.ArrayList;
import java.util.List;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
import tp.f;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c implements f {
    @NotNull
    public static final Parcelable.Creator<c> CREATOR = new a();

    /* renamed from: d  reason: collision with root package name */
    private final String f26381d;

    /* renamed from: e  reason: collision with root package name */
    private final List f26382e;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements Parcelable.Creator {
        @Override // android.os.Parcelable.Creator
        /* renamed from: a */
        public final c createFromParcel(Parcel parcel) {
            Intrinsics.checkNotNullParameter(parcel, "parcel");
            String readString = parcel.readString();
            int readInt = parcel.readInt();
            ArrayList arrayList = new ArrayList(readInt);
            for (int i10 = 0; i10 != readInt; i10++) {
                arrayList.add(parcel.readParcelable(c.class.getClassLoader()));
            }
            return new c(readString, arrayList);
        }

        @Override // android.os.Parcelable.Creator
        /* renamed from: b */
        public final c[] newArray(int i10) {
            return new c[i10];
        }
    }

    public c(String stepName, List documents) {
        Intrinsics.checkNotNullParameter(stepName, "stepName");
        Intrinsics.checkNotNullParameter(documents, "documents");
        this.f26381d = stepName;
        this.f26382e = documents;
    }

    public final List a() {
        return this.f26382e;
    }

    public String b() {
        return this.f26381d;
    }

    @Override // android.os.Parcelable
    public final int describeContents() {
        return 0;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof c)) {
            return false;
        }
        c cVar = (c) obj;
        if (Intrinsics.areEqual(this.f26381d, cVar.f26381d) && Intrinsics.areEqual(this.f26382e, cVar.f26382e)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (this.f26381d.hashCode() * 31) + this.f26382e.hashCode();
    }

    public String toString() {
        String str = this.f26381d;
        List list = this.f26382e;
        return "DocumentStepData(stepName=" + str + ", documents=" + list + ")";
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel dest, int i10) {
        Intrinsics.checkNotNullParameter(dest, "dest");
        dest.writeString(this.f26381d);
        List<Parcelable> list = this.f26382e;
        dest.writeInt(list.size());
        for (Parcelable parcelable : list) {
            dest.writeParcelable(parcelable, i10);
        }
    }
}
