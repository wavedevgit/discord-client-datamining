package sq;

import android.os.Parcel;
import android.os.Parcelable;
import java.util.LinkedHashMap;
import java.util.Map;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
import tp.f;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c implements f {
    @NotNull
    public static final Parcelable.Creator<c> CREATOR = new a();

    /* renamed from: d  reason: collision with root package name */
    private final String f50040d;

    /* renamed from: e  reason: collision with root package name */
    private final Map f50041e;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements Parcelable.Creator {
        @Override // android.os.Parcelable.Creator
        /* renamed from: a */
        public final c createFromParcel(Parcel parcel) {
            Intrinsics.checkNotNullParameter(parcel, "parcel");
            String readString = parcel.readString();
            int readInt = parcel.readInt();
            LinkedHashMap linkedHashMap = new LinkedHashMap(readInt);
            for (int i10 = 0; i10 != readInt; i10++) {
                linkedHashMap.put(parcel.readString(), parcel.readParcelable(c.class.getClassLoader()));
            }
            return new c(readString, linkedHashMap);
        }

        @Override // android.os.Parcelable.Creator
        /* renamed from: b */
        public final c[] newArray(int i10) {
            return new c[i10];
        }
    }

    public c(String stepName, Map componentParams) {
        Intrinsics.checkNotNullParameter(stepName, "stepName");
        Intrinsics.checkNotNullParameter(componentParams, "componentParams");
        this.f50040d = stepName;
        this.f50041e = componentParams;
    }

    public final Map a() {
        return this.f50041e;
    }

    public String b() {
        return this.f50040d;
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
        if (Intrinsics.areEqual(this.f50040d, cVar.f50040d) && Intrinsics.areEqual(this.f50041e, cVar.f50041e)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (this.f50040d.hashCode() * 31) + this.f50041e.hashCode();
    }

    public String toString() {
        String str = this.f50040d;
        Map map = this.f50041e;
        return "UiStepData(stepName=" + str + ", componentParams=" + map + ")";
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel dest, int i10) {
        Intrinsics.checkNotNullParameter(dest, "dest");
        dest.writeString(this.f50040d);
        Map map = this.f50041e;
        dest.writeInt(map.size());
        for (Map.Entry entry : map.entrySet()) {
            dest.writeString((String) entry.getKey());
            dest.writeParcelable((Parcelable) entry.getValue(), i10);
        }
    }
}
