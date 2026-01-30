package ld;

import android.os.Parcel;
import android.os.Parcelable;
import java.util.Arrays;
import ne.w0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class k extends i {
    public static final Parcelable.Creator<k> CREATOR = new a();

    /* renamed from: e  reason: collision with root package name */
    public final int f37162e;

    /* renamed from: i  reason: collision with root package name */
    public final int f37163i;

    /* renamed from: o  reason: collision with root package name */
    public final int f37164o;

    /* renamed from: p  reason: collision with root package name */
    public final int[] f37165p;

    /* renamed from: q  reason: collision with root package name */
    public final int[] f37166q;

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
        this.f37162e = i10;
        this.f37163i = i11;
        this.f37164o = i12;
        this.f37165p = iArr;
        this.f37166q = iArr2;
    }

    @Override // ld.i, android.os.Parcelable
    public int describeContents() {
        return 0;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj != null && k.class == obj.getClass()) {
            k kVar = (k) obj;
            if (this.f37162e == kVar.f37162e && this.f37163i == kVar.f37163i && this.f37164o == kVar.f37164o && Arrays.equals(this.f37165p, kVar.f37165p) && Arrays.equals(this.f37166q, kVar.f37166q)) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return ((((((((527 + this.f37162e) * 31) + this.f37163i) * 31) + this.f37164o) * 31) + Arrays.hashCode(this.f37165p)) * 31) + Arrays.hashCode(this.f37166q);
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        parcel.writeInt(this.f37162e);
        parcel.writeInt(this.f37163i);
        parcel.writeInt(this.f37164o);
        parcel.writeIntArray(this.f37165p);
        parcel.writeIntArray(this.f37166q);
    }

    k(Parcel parcel) {
        super("MLLT");
        this.f37162e = parcel.readInt();
        this.f37163i = parcel.readInt();
        this.f37164o = parcel.readInt();
        this.f37165p = (int[]) w0.j(parcel.createIntArray());
        this.f37166q = (int[]) w0.j(parcel.createIntArray());
    }
}
