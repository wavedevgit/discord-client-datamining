package ld;

import android.os.Parcel;
import android.os.Parcelable;
import java.util.Arrays;
import ne.w0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class k extends i {
    public static final Parcelable.Creator<k> CREATOR = new a();

    /* renamed from: e  reason: collision with root package name */
    public final int f36745e;

    /* renamed from: i  reason: collision with root package name */
    public final int f36746i;

    /* renamed from: o  reason: collision with root package name */
    public final int f36747o;

    /* renamed from: p  reason: collision with root package name */
    public final int[] f36748p;

    /* renamed from: q  reason: collision with root package name */
    public final int[] f36749q;

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
        this.f36745e = i10;
        this.f36746i = i11;
        this.f36747o = i12;
        this.f36748p = iArr;
        this.f36749q = iArr2;
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
            if (this.f36745e == kVar.f36745e && this.f36746i == kVar.f36746i && this.f36747o == kVar.f36747o && Arrays.equals(this.f36748p, kVar.f36748p) && Arrays.equals(this.f36749q, kVar.f36749q)) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return ((((((((527 + this.f36745e) * 31) + this.f36746i) * 31) + this.f36747o) * 31) + Arrays.hashCode(this.f36748p)) * 31) + Arrays.hashCode(this.f36749q);
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        parcel.writeInt(this.f36745e);
        parcel.writeInt(this.f36746i);
        parcel.writeInt(this.f36747o);
        parcel.writeIntArray(this.f36748p);
        parcel.writeIntArray(this.f36749q);
    }

    k(Parcel parcel) {
        super("MLLT");
        this.f36745e = parcel.readInt();
        this.f36746i = parcel.readInt();
        this.f36747o = parcel.readInt();
        this.f36748p = (int[]) w0.j(parcel.createIntArray());
        this.f36749q = (int[]) w0.j(parcel.createIntArray());
    }
}
