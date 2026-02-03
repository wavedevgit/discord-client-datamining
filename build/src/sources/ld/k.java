package ld;

import android.os.Parcel;
import android.os.Parcelable;
import java.util.Arrays;
import ne.w0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class k extends i {
    public static final Parcelable.Creator<k> CREATOR = new a();

    /* renamed from: e  reason: collision with root package name */
    public final int f37276e;

    /* renamed from: i  reason: collision with root package name */
    public final int f37277i;

    /* renamed from: o  reason: collision with root package name */
    public final int f37278o;

    /* renamed from: p  reason: collision with root package name */
    public final int[] f37279p;

    /* renamed from: q  reason: collision with root package name */
    public final int[] f37280q;

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
        this.f37276e = i10;
        this.f37277i = i11;
        this.f37278o = i12;
        this.f37279p = iArr;
        this.f37280q = iArr2;
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
            if (this.f37276e == kVar.f37276e && this.f37277i == kVar.f37277i && this.f37278o == kVar.f37278o && Arrays.equals(this.f37279p, kVar.f37279p) && Arrays.equals(this.f37280q, kVar.f37280q)) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return ((((((((527 + this.f37276e) * 31) + this.f37277i) * 31) + this.f37278o) * 31) + Arrays.hashCode(this.f37279p)) * 31) + Arrays.hashCode(this.f37280q);
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        parcel.writeInt(this.f37276e);
        parcel.writeInt(this.f37277i);
        parcel.writeInt(this.f37278o);
        parcel.writeIntArray(this.f37279p);
        parcel.writeIntArray(this.f37280q);
    }

    k(Parcel parcel) {
        super("MLLT");
        this.f37276e = parcel.readInt();
        this.f37277i = parcel.readInt();
        this.f37278o = parcel.readInt();
        this.f37279p = (int[]) w0.j(parcel.createIntArray());
        this.f37280q = (int[]) w0.j(parcel.createIntArray());
    }
}
