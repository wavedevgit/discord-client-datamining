package oo;

import android.os.Parcel;
import android.os.Parcelable;
import java.util.ArrayList;
import java.util.List;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class d implements qp.f {
    @NotNull
    public static final Parcelable.Creator<d> CREATOR = new a();

    /* renamed from: d  reason: collision with root package name */
    private final String f44099d;

    /* renamed from: e  reason: collision with root package name */
    private final List f44100e;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements Parcelable.Creator {
        @Override // android.os.Parcelable.Creator
        /* renamed from: a */
        public final d createFromParcel(Parcel parcel) {
            Intrinsics.checkNotNullParameter(parcel, "parcel");
            String readString = parcel.readString();
            int readInt = parcel.readInt();
            ArrayList arrayList = new ArrayList(readInt);
            for (int i10 = 0; i10 != readInt; i10++) {
                arrayList.add(parcel.readParcelable(d.class.getClassLoader()));
            }
            return new d(readString, arrayList);
        }

        @Override // android.os.Parcelable.Creator
        /* renamed from: b */
        public final d[] newArray(int i10) {
            return new d[i10];
        }
    }

    public d(String stepName, List ids) {
        Intrinsics.checkNotNullParameter(stepName, "stepName");
        Intrinsics.checkNotNullParameter(ids, "ids");
        this.f44099d = stepName;
        this.f44100e = ids;
    }

    public final List a() {
        return this.f44100e;
    }

    public String b() {
        return this.f44099d;
    }

    @Override // android.os.Parcelable
    public final int describeContents() {
        return 0;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel dest, int i10) {
        Intrinsics.checkNotNullParameter(dest, "dest");
        dest.writeString(this.f44099d);
        List<Parcelable> list = this.f44100e;
        dest.writeInt(list.size());
        for (Parcelable parcelable : list) {
            dest.writeParcelable(parcelable, i10);
        }
    }
}
