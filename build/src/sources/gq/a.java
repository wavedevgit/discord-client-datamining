package gq;

import android.os.Parcel;
import android.os.Parcelable;
import java.io.Closeable;
import java.util.ArrayList;
import java.util.List;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a implements Closeable, Parcelable {
    @NotNull
    public static final Parcelable.Creator<a> CREATOR = new C0344a();

    /* renamed from: d  reason: collision with root package name */
    private final List f27097d;

    /* renamed from: gq.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class C0344a implements Parcelable.Creator {
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

    public a(List stepData) {
        Intrinsics.checkNotNullParameter(stepData, "stepData");
        this.f27097d = stepData;
    }

    public final List a() {
        return this.f27097d;
    }

    @Override // java.io.Closeable, java.lang.AutoCloseable
    public void close() {
        for (g gVar : this.f27097d) {
            gVar.close();
        }
    }

    @Override // android.os.Parcelable
    public final int describeContents() {
        return 0;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if ((obj instanceof a) && Intrinsics.areEqual(this.f27097d, ((a) obj).f27097d)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return this.f27097d.hashCode();
    }

    public String toString() {
        List list = this.f27097d;
        return "CollectedData(stepData=" + list + ")";
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel dest, int i10) {
        Intrinsics.checkNotNullParameter(dest, "dest");
        List<Parcelable> list = this.f27097d;
        dest.writeInt(list.size());
        for (Parcelable parcelable : list) {
            dest.writeParcelable(parcelable, i10);
        }
    }
}
