package md;

import android.os.Parcel;
import android.os.Parcelable;
import java.util.Arrays;
import oe.w0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class k extends i {
    public static final Parcelable.Creator<k> CREATOR = new a();

    /* renamed from: e  reason: collision with root package name */
    public final int f36887e;

    /* renamed from: i  reason: collision with root package name */
    public final int f36888i;

    /* renamed from: o  reason: collision with root package name */
    public final int f36889o;

    /* renamed from: p  reason: collision with root package name */
    public final int[] f36890p;

    /* renamed from: q  reason: collision with root package name */
    public final int[] f36891q;

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
        this.f36887e = i10;
        this.f36888i = i11;
        this.f36889o = i12;
        this.f36890p = iArr;
        this.f36891q = iArr2;
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
            if (this.f36887e == kVar.f36887e && this.f36888i == kVar.f36888i && this.f36889o == kVar.f36889o && Arrays.equals(this.f36890p, kVar.f36890p) && Arrays.equals(this.f36891q, kVar.f36891q)) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return ((((((((527 + this.f36887e) * 31) + this.f36888i) * 31) + this.f36889o) * 31) + Arrays.hashCode(this.f36890p)) * 31) + Arrays.hashCode(this.f36891q);
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        parcel.writeInt(this.f36887e);
        parcel.writeInt(this.f36888i);
        parcel.writeInt(this.f36889o);
        parcel.writeIntArray(this.f36890p);
        parcel.writeIntArray(this.f36891q);
    }

    k(Parcel parcel) {
        super("MLLT");
        this.f36887e = parcel.readInt();
        this.f36888i = parcel.readInt();
        this.f36889o = parcel.readInt();
        this.f36890p = (int[]) w0.j(parcel.createIntArray());
        this.f36891q = (int[]) w0.j(parcel.createIntArray());
    }
}
