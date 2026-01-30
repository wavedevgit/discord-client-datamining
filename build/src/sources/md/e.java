package md;

import android.os.Parcel;
import android.os.Parcelable;
import com.google.android.exoplayer2.metadata.Metadata;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class e implements Metadata.b {
    public static final Parcelable.Creator<e> CREATOR = new a();

    /* renamed from: d  reason: collision with root package name */
    public final float f38042d;

    /* renamed from: e  reason: collision with root package name */
    public final int f38043e;

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
            if (this.f38042d == eVar.f38042d && this.f38043e == eVar.f38043e) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return ((527 + li.c.a(this.f38042d)) * 31) + this.f38043e;
    }

    public String toString() {
        return "smta: captureFrameRate=" + this.f38042d + ", svcTemporalLayerCount=" + this.f38043e;
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        parcel.writeFloat(this.f38042d);
        parcel.writeInt(this.f38043e);
    }

    public e(float f10, int i10) {
        this.f38042d = f10;
        this.f38043e = i10;
    }

    private e(Parcel parcel) {
        this.f38042d = parcel.readFloat();
        this.f38043e = parcel.readInt();
    }
}
