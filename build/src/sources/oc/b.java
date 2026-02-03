package oc;

import android.os.Parcel;
import android.os.Parcelable;
import com.google.android.exoplayer2.metadata.Metadata;
import li.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class b implements Metadata.b {
    public static final Parcelable.Creator<b> CREATOR = new a();

    /* renamed from: d  reason: collision with root package name */
    public final float f42651d;

    /* renamed from: e  reason: collision with root package name */
    public final float f42652e;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    class a implements Parcelable.Creator {
        a() {
        }

        @Override // android.os.Parcelable.Creator
        /* renamed from: a */
        public b createFromParcel(Parcel parcel) {
            return new b(parcel, (a) null);
        }

        @Override // android.os.Parcelable.Creator
        /* renamed from: b */
        public b[] newArray(int i10) {
            return new b[i10];
        }
    }

    /* synthetic */ b(Parcel parcel, a aVar) {
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
        if (obj != null && b.class == obj.getClass()) {
            b bVar = (b) obj;
            if (this.f42651d == bVar.f42651d && this.f42652e == bVar.f42652e) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return ((527 + c.a(this.f42651d)) * 31) + c.a(this.f42652e);
    }

    public String toString() {
        return "xyz: latitude=" + this.f42651d + ", longitude=" + this.f42652e;
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        parcel.writeFloat(this.f42651d);
        parcel.writeFloat(this.f42652e);
    }

    public b(float f10, float f11) {
        ne.a.b(f10 >= -90.0f && f10 <= 90.0f && f11 >= -180.0f && f11 <= 180.0f, "Invalid latitude or longitude");
        this.f42651d = f10;
        this.f42652e = f11;
    }

    private b(Parcel parcel) {
        this.f42651d = parcel.readFloat();
        this.f42652e = parcel.readFloat();
    }
}
