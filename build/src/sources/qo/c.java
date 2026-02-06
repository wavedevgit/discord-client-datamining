package qo;

import android.os.Parcel;
import android.os.Parcelable;
import java.util.ArrayList;
import java.util.List;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c implements Parcelable {
    @NotNull
    public static final Parcelable.Creator<c> CREATOR = new a();

    /* renamed from: d  reason: collision with root package name */
    private final List f47908d;

    /* renamed from: e  reason: collision with root package name */
    private final String f47909e;

    /* renamed from: i  reason: collision with root package name */
    private final String f47910i;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements Parcelable.Creator {
        @Override // android.os.Parcelable.Creator
        /* renamed from: a */
        public final c createFromParcel(Parcel parcel) {
            Intrinsics.checkNotNullParameter(parcel, "parcel");
            int readInt = parcel.readInt();
            ArrayList arrayList = new ArrayList(readInt);
            for (int i10 = 0; i10 != readInt; i10++) {
                arrayList.add(parcel.readParcelable(c.class.getClassLoader()));
            }
            return new c(arrayList, parcel.readString(), parcel.readString());
        }

        @Override // android.os.Parcelable.Creator
        /* renamed from: b */
        public final c[] newArray(int i10) {
            return new c[i10];
        }
    }

    public c(List ids, String fieldKeyDocument, String fieldKeyIdClass) {
        Intrinsics.checkNotNullParameter(ids, "ids");
        Intrinsics.checkNotNullParameter(fieldKeyDocument, "fieldKeyDocument");
        Intrinsics.checkNotNullParameter(fieldKeyIdClass, "fieldKeyIdClass");
        this.f47908d = ids;
        this.f47909e = fieldKeyDocument;
        this.f47910i = fieldKeyIdClass;
    }

    public final String a() {
        return this.f47909e;
    }

    public final String b() {
        return this.f47910i;
    }

    public final List c() {
        return this.f47908d;
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
        if (Intrinsics.areEqual(this.f47908d, cVar.f47908d) && Intrinsics.areEqual(this.f47909e, cVar.f47909e) && Intrinsics.areEqual(this.f47910i, cVar.f47910i)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (((this.f47908d.hashCode() * 31) + this.f47909e.hashCode()) * 31) + this.f47910i.hashCode();
    }

    public String toString() {
        List list = this.f47908d;
        String str = this.f47909e;
        String str2 = this.f47910i;
        return "GovernmentIdRequestArguments(ids=" + list + ", fieldKeyDocument=" + str + ", fieldKeyIdClass=" + str2 + ")";
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel dest, int i10) {
        Intrinsics.checkNotNullParameter(dest, "dest");
        List<Parcelable> list = this.f47908d;
        dest.writeInt(list.size());
        for (Parcelable parcelable : list) {
            dest.writeParcelable(parcelable, i10);
        }
        dest.writeString(this.f47909e);
        dest.writeString(this.f47910i);
    }
}
