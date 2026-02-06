package ld;

import android.os.Parcel;
import android.os.Parcelable;
import java.util.Arrays;
import ne.w0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class k extends i {
    public static final Parcelable.Creator<k> CREATOR = new a();

    /* renamed from: e  reason: collision with root package name */
    public final int f36065e;

    /* renamed from: i  reason: collision with root package name */
    public final int f36066i;

    /* renamed from: o  reason: collision with root package name */
    public final int f36067o;

    /* renamed from: p  reason: collision with root package name */
    public final int[] f36068p;

    /* renamed from: q  reason: collision with root package name */
    public final int[] f36069q;

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
        this.f36065e = i10;
        this.f36066i = i11;
        this.f36067o = i12;
        this.f36068p = iArr;
        this.f36069q = iArr2;
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
            if (this.f36065e == kVar.f36065e && this.f36066i == kVar.f36066i && this.f36067o == kVar.f36067o && Arrays.equals(this.f36068p, kVar.f36068p) && Arrays.equals(this.f36069q, kVar.f36069q)) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return ((((((((527 + this.f36065e) * 31) + this.f36066i) * 31) + this.f36067o) * 31) + Arrays.hashCode(this.f36068p)) * 31) + Arrays.hashCode(this.f36069q);
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        parcel.writeInt(this.f36065e);
        parcel.writeInt(this.f36066i);
        parcel.writeInt(this.f36067o);
        parcel.writeIntArray(this.f36068p);
        parcel.writeIntArray(this.f36069q);
    }

    k(Parcel parcel) {
        super("MLLT");
        this.f36065e = parcel.readInt();
        this.f36066i = parcel.readInt();
        this.f36067o = parcel.readInt();
        this.f36068p = (int[]) w0.j(parcel.createIntArray());
        this.f36069q = (int[]) w0.j(parcel.createIntArray());
    }
}
