package md;

import android.os.Parcel;
import android.os.Parcelable;
import com.google.android.exoplayer2.metadata.Metadata;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class e implements Metadata.b {
    public static final Parcelable.Creator<e> CREATOR = new a();

    /* renamed from: d  reason: collision with root package name */
    public final float f37111d;

    /* renamed from: e  reason: collision with root package name */
    public final int f37112e;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    class a implements Parcelable.Creator {
        a() {
        }

        @Override // android.os.Parcelable.Creator
        /* renamed from: a */
        public e createFromParcel(Parcel parcel) {
            return new e(parcel, (a) null);
        }

        @Override // android.os.Parcelable.Creator
        /* renamed from: b */
        public e[] newArray(int i10) {
            return new e[i10];
        }
    }

    /* synthetic */ e(Parcel parcel, a aVar) {
        this(parcel);
    }

    @Override // android.os.Parcelable
    public int describeContents() {
        return 0;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj != null && e.class == obj.getClass()) {
            e eVar = (e) obj;
            if (this.f37111d == eVar.f37111d && this.f37112e == eVar.f37112e) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return ((527 + pi.c.a(this.f37111d)) * 31) + this.f37112e;
    }

    public String toString() {
        return "smta: captureFrameRate=" + this.f37111d + ", svcTemporalLayerCount=" + this.f37112e;
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        parcel.writeFloat(this.f37111d);
        parcel.writeInt(this.f37112e);
    }

    public e(float f10, int i10) {
        this.f37111d = f10;
        this.f37112e = i10;
    }

    private e(Parcel parcel) {
        this.f37111d = parcel.readFloat();
        this.f37112e = parcel.readInt();
    }
}
