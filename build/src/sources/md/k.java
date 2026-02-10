package md;

import android.os.Parcel;
import android.os.Parcelable;
import java.util.Arrays;
import oe.w0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class k extends i {
    public static final Parcelable.Creator<k> CREATOR = new a();

    /* renamed from: e  reason: collision with root package name */
    public final int f36943e;

    /* renamed from: i  reason: collision with root package name */
    public final int f36944i;

    /* renamed from: o  reason: collision with root package name */
    public final int f36945o;

    /* renamed from: p  reason: collision with root package name */
    public final int[] f36946p;

    /* renamed from: q  reason: collision with root package name */
    public final int[] f36947q;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    class a implements Parcelable.Creator {
        a() {
        }

        @Override // android.os.Parcelable.Creator
        /* renamed from: a */
        public k createFromParcel(Parcel parcel) {
            return new k(parcel);
        }

        @Override // android.os.Parcelable.Creator
        /* renamed from: b */
        public k[] newArray(int i10) {
            return new k[i10];
        }
    }

    public k(int i10, int i11, int i12, int[] iArr, int[] iArr2) {
        super("MLLT");
        this.f36943e = i10;
        this.f36944i = i11;
        this.f36945o = i12;
        this.f36946p = iArr;
        this.f36947q = iArr2;
    }

    @Override // md.i, android.os.Parcelable
    public int describeContents() {
        return 0;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj != null && k.class == obj.getClass()) {
            k kVar = (k) obj;
            if (this.f36943e == kVar.f36943e && this.f36944i == kVar.f36944i && this.f36945o == kVar.f36945o && Arrays.equals(this.f36946p, kVar.f36946p) && Arrays.equals(this.f36947q, kVar.f36947q)) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return ((((((((527 + this.f36943e) * 31) + this.f36944i) * 31) + this.f36945o) * 31) + Arrays.hashCode(this.f36946p)) * 31) + Arrays.hashCode(this.f36947q);
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        parcel.writeInt(this.f36943e);
        parcel.writeInt(this.f36944i);
        parcel.writeInt(this.f36945o);
        parcel.writeIntArray(this.f36946p);
        parcel.writeIntArray(this.f36947q);
    }

    k(Parcel parcel) {
        super("MLLT");
        this.f36943e = parcel.readInt();
        this.f36944i = parcel.readInt();
        this.f36945o = parcel.readInt();
        this.f36946p = (int[]) w0.j(parcel.createIntArray());
        this.f36947q = (int[]) w0.j(parcel.createIntArray());
    }
}
