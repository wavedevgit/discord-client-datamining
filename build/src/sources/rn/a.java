package rn;

import android.os.Parcel;
import android.os.Parcelable;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a implements Parcelable {
    @NotNull
    public static final Parcelable.Creator<a> CREATOR = new C0600a();

    /* renamed from: d  reason: collision with root package name */
    private final Float[] f48562d;

    /* renamed from: rn.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class C0600a implements Parcelable.Creator {
        @Override // android.os.Parcelable.Creator
        /* renamed from: a */
        public final a createFromParcel(Parcel parcel) {
            Intrinsics.checkNotNullParameter(parcel, "parcel");
            int readInt = parcel.readInt();
            Float[] fArr = new Float[readInt];
            for (int i10 = 0; i10 != readInt; i10++) {
                fArr[i10] = Float.valueOf(parcel.readFloat());
            }
            return new a(fArr);
        }

        @Override // android.os.Parcelable.Creator
        /* renamed from: b */
        public final a[] newArray(int i10) {
            return new a[i10];
        }
    }

    public a(Float[] averageBrightness3x3) {
        Intrinsics.checkNotNullParameter(averageBrightness3x3, "averageBrightness3x3");
        this.f48562d = averageBrightness3x3;
    }

    public final float a() {
        return ((this.f48562d[7].floatValue() * 2.0f) + ((this.f48562d[6].floatValue() + this.f48562d[8].floatValue()) * 0.5f)) / 3;
    }

    public final float b() {
        return ((this.f48562d[3].floatValue() * 2.0f) + ((this.f48562d[0].floatValue() + this.f48562d[6].floatValue()) * 0.5f)) / 3;
    }

    public final float c() {
        return ((this.f48562d[5].floatValue() * 2.0f) + ((this.f48562d[2].floatValue() + this.f48562d[8].floatValue()) * 0.5f)) / 3;
    }

    public final float d() {
        return ((this.f48562d[1].floatValue() * 2.0f) + ((this.f48562d[0].floatValue() + this.f48562d[2].floatValue()) * 0.5f)) / 3;
    }

    @Override // android.os.Parcelable
    public final int describeContents() {
        return 0;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel dest, int i10) {
        Intrinsics.checkNotNullParameter(dest, "dest");
        Float[] fArr = this.f48562d;
        int length = fArr.length;
        dest.writeInt(length);
        for (int i11 = 0; i11 != length; i11++) {
            dest.writeFloat(fArr[i11].floatValue());
        }
    }

    /* JADX WARN: Illegal instructions before constructor call */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public /* synthetic */ a(java.lang.Float[] r2, int r3, kotlin.jvm.internal.DefaultConstructorMarker r4) {
        /*
            r1 = this;
            r3 = r3 & 1
            if (r3 == 0) goto L16
            r2 = 9
            java.lang.Float[] r3 = new java.lang.Float[r2]
            r4 = 0
        L9:
            if (r4 >= r2) goto L15
            r0 = 0
            java.lang.Float r0 = java.lang.Float.valueOf(r0)
            r3[r4] = r0
            int r4 = r4 + 1
            goto L9
        L15:
            r2 = r3
        L16:
            r1.<init>(r2)
            return
        */
        throw new UnsupportedOperationException("Method not decompiled: rn.a.<init>(java.lang.Float[], int, kotlin.jvm.internal.DefaultConstructorMarker):void");
    }
}
