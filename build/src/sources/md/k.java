package md;

import android.os.Parcel;
import android.os.Parcelable;
import java.util.Arrays;
import oe.w0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class k extends i {
    public static final Parcelable.Creator<k> CREATOR = new a();

    /* renamed from: e  reason: collision with root package name */
    public final int f36319e;

    /* renamed from: i  reason: collision with root package name */
    public final int f36320i;

    /* renamed from: o  reason: collision with root package name */
    public final int f36321o;

    /* renamed from: p  reason: collision with root package name */
    public final int[] f36322p;

    /* renamed from: q  reason: collision with root package name */
    public final int[] f36323q;

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
        this.f36319e = i10;
        this.f36320i = i11;
        this.f36321o = i12;
        this.f36322p = iArr;
        this.f36323q = iArr2;
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
            if (this.f36319e == kVar.f36319e && this.f36320i == kVar.f36320i && this.f36321o == kVar.f36321o && Arrays.equals(this.f36322p, kVar.f36322p) && Arrays.equals(this.f36323q, kVar.f36323q)) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return ((((((((527 + this.f36319e) * 31) + this.f36320i) * 31) + this.f36321o) * 31) + Arrays.hashCode(this.f36322p)) * 31) + Arrays.hashCode(this.f36323q);
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        parcel.writeInt(this.f36319e);
        parcel.writeInt(this.f36320i);
        parcel.writeInt(this.f36321o);
        parcel.writeIntArray(this.f36322p);
        parcel.writeIntArray(this.f36323q);
    }

    k(Parcel parcel) {
        super("MLLT");
        this.f36319e = parcel.readInt();
        this.f36320i = parcel.readInt();
        this.f36321o = parcel.readInt();
        this.f36322p = (int[]) w0.j(parcel.createIntArray());
        this.f36323q = (int[]) w0.j(parcel.createIntArray());
    }
}
