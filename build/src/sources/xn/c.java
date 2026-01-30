package xn;

import android.os.Parcel;
import android.os.Parcelable;
import java.util.ArrayList;
import java.util.List;
import kotlin.jvm.internal.Intrinsics;
import kp.f;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c implements f {
    @NotNull
    public static final Parcelable.Creator<c> CREATOR = new a();

    /* renamed from: d  reason: collision with root package name */
    private final String f53495d;

    /* renamed from: e  reason: collision with root package name */
    private final List f53496e;

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
        this.f53495d = stepName;
        this.f53496e = documents;
    }

    public final List a() {
        return this.f53496e;
    }

    public String b() {
        return this.f53495d;
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
        if (Intrinsics.areEqual(this.f53495d, cVar.f53495d) && Intrinsics.areEqual(this.f53496e, cVar.f53496e)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (this.f53495d.hashCode() * 31) + this.f53496e.hashCode();
    }

    public String toString() {
        String str = this.f53495d;
        List list = this.f53496e;
        return "DocumentStepData(stepName=" + str + ", documents=" + list + ")";
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel dest, int i10) {
        Intrinsics.checkNotNullParameter(dest, "dest");
        dest.writeString(this.f53495d);
        List<Parcelable> list = this.f53496e;
        dest.writeInt(list.size());
        for (Parcelable parcelable : list) {
            dest.writeParcelable(parcelable, i10);
        }
    }
}
