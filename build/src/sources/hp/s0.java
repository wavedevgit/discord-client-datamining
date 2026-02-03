package hp;

import android.os.Parcel;
import android.os.Parcelable;
import hp.a1;
import java.util.LinkedHashMap;
import java.util.Map;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class s0 implements Parcelable {
    @NotNull
    public static final Parcelable.Creator<s0> CREATOR = new a();

    /* renamed from: d  reason: collision with root package name */
    private final Map f27505d;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements Parcelable.Creator {
        @Override // android.os.Parcelable.Creator
        /* renamed from: a */
        public final s0 createFromParcel(Parcel parcel) {
            Intrinsics.checkNotNullParameter(parcel, "parcel");
            int readInt = parcel.readInt();
            LinkedHashMap linkedHashMap = new LinkedHashMap(readInt);
            for (int i10 = 0; i10 != readInt; i10++) {
                linkedHashMap.put(a1.b.valueOf(parcel.readString()), r0.CREATOR.createFromParcel(parcel));
            }
            return new s0(linkedHashMap);
        }

        @Override // android.os.Parcelable.Creator
        /* renamed from: b */
        public final s0[] newArray(int i10) {
            return new s0[i10];
        }
    }

    public s0(Map poseConfigs) {
        Intrinsics.checkNotNullParameter(poseConfigs, "poseConfigs");
        this.f27505d = poseConfigs;
    }

    public final r0 a(a1.b pose) {
        Intrinsics.checkNotNullParameter(pose, "pose");
        r0 r0Var = (r0) this.f27505d.get(pose);
        if (r0Var == null) {
            return r0.f27485p.a();
        }
        return r0Var;
    }

    @Override // android.os.Parcelable
    public final int describeContents() {
        return 0;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if ((obj instanceof s0) && Intrinsics.areEqual(this.f27505d, ((s0) obj).f27505d)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return this.f27505d.hashCode();
    }

    public String toString() {
        Map map = this.f27505d;
        return "PoseConfigs(poseConfigs=" + map + ")";
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel dest, int i10) {
        Intrinsics.checkNotNullParameter(dest, "dest");
        Map map = this.f27505d;
        dest.writeInt(map.size());
        for (Map.Entry entry : map.entrySet()) {
            dest.writeString(((a1.b) entry.getKey()).name());
            ((r0) entry.getValue()).writeToParcel(dest, i10);
        }
    }
}
