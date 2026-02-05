package ld;

import android.os.Parcel;
import android.os.Parcelable;
import java.util.Arrays;
import ne.w0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class k extends i {
    public static final Parcelable.Creator<k> CREATOR = new a();

    /* renamed from: e  reason: collision with root package name */
    public final int f36672e;

    /* renamed from: i  reason: collision with root package name */
    public final int f36673i;

    /* renamed from: o  reason: collision with root package name */
    public final int f36674o;

    /* renamed from: p  reason: collision with root package name */
    public final int[] f36675p;

    /* renamed from: q  reason: collision with root package name */
    public final int[] f36676q;

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
        this.f36672e = i10;
        this.f36673i = i11;
        this.f36674o = i12;
        this.f36675p = iArr;
        this.f36676q = iArr2;
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
            if (this.f36672e == kVar.f36672e && this.f36673i == kVar.f36673i && this.f36674o == kVar.f36674o && Arrays.equals(this.f36675p, kVar.f36675p) && Arrays.equals(this.f36676q, kVar.f36676q)) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return ((((((((527 + this.f36672e) * 31) + this.f36673i) * 31) + this.f36674o) * 31) + Arrays.hashCode(this.f36675p)) * 31) + Arrays.hashCode(this.f36676q);
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        parcel.writeInt(this.f36672e);
        parcel.writeInt(this.f36673i);
        parcel.writeInt(this.f36674o);
        parcel.writeIntArray(this.f36675p);
        parcel.writeIntArray(this.f36676q);
    }

    k(Parcel parcel) {
        super("MLLT");
        this.f36672e = parcel.readInt();
        this.f36673i = parcel.readInt();
        this.f36674o = parcel.readInt();
        this.f36675p = (int[]) w0.j(parcel.createIntArray());
        this.f36676q = (int[]) w0.j(parcel.createIntArray());
    }
}
