package md;

import android.os.Parcel;
import android.os.Parcelable;
import java.util.Arrays;
import oe.w0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class k extends i {
    public static final Parcelable.Creator<k> CREATOR = new a();

    /* renamed from: e  reason: collision with root package name */
    public final int f36318e;

    /* renamed from: i  reason: collision with root package name */
    public final int f36319i;

    /* renamed from: o  reason: collision with root package name */
    public final int f36320o;

    /* renamed from: p  reason: collision with root package name */
    public final int[] f36321p;

    /* renamed from: q  reason: collision with root package name */
    public final int[] f36322q;

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
        this.f36318e = i10;
        this.f36319i = i11;
        this.f36320o = i12;
        this.f36321p = iArr;
        this.f36322q = iArr2;
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
            if (this.f36318e == kVar.f36318e && this.f36319i == kVar.f36319i && this.f36320o == kVar.f36320o && Arrays.equals(this.f36321p, kVar.f36321p) && Arrays.equals(this.f36322q, kVar.f36322q)) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return ((((((((527 + this.f36318e) * 31) + this.f36319i) * 31) + this.f36320o) * 31) + Arrays.hashCode(this.f36321p)) * 31) + Arrays.hashCode(this.f36322q);
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        parcel.writeInt(this.f36318e);
        parcel.writeInt(this.f36319i);
        parcel.writeInt(this.f36320o);
        parcel.writeIntArray(this.f36321p);
        parcel.writeIntArray(this.f36322q);
    }

    k(Parcel parcel) {
        super("MLLT");
        this.f36318e = parcel.readInt();
        this.f36319i = parcel.readInt();
        this.f36320o = parcel.readInt();
        this.f36321p = (int[]) w0.j(parcel.createIntArray());
        this.f36322q = (int[]) w0.j(parcel.createIntArray());
    }
}
