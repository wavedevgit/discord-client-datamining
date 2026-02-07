package ld;

import android.os.Parcel;
import android.os.Parcelable;
import java.util.Arrays;
import ne.w0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class k extends i {
    public static final Parcelable.Creator<k> CREATOR = new a();

    /* renamed from: e  reason: collision with root package name */
    public final int f36113e;

    /* renamed from: i  reason: collision with root package name */
    public final int f36114i;

    /* renamed from: o  reason: collision with root package name */
    public final int f36115o;

    /* renamed from: p  reason: collision with root package name */
    public final int[] f36116p;

    /* renamed from: q  reason: collision with root package name */
    public final int[] f36117q;

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
        this.f36113e = i10;
        this.f36114i = i11;
        this.f36115o = i12;
        this.f36116p = iArr;
        this.f36117q = iArr2;
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
            if (this.f36113e == kVar.f36113e && this.f36114i == kVar.f36114i && this.f36115o == kVar.f36115o && Arrays.equals(this.f36116p, kVar.f36116p) && Arrays.equals(this.f36117q, kVar.f36117q)) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return ((((((((527 + this.f36113e) * 31) + this.f36114i) * 31) + this.f36115o) * 31) + Arrays.hashCode(this.f36116p)) * 31) + Arrays.hashCode(this.f36117q);
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        parcel.writeInt(this.f36113e);
        parcel.writeInt(this.f36114i);
        parcel.writeInt(this.f36115o);
        parcel.writeIntArray(this.f36116p);
        parcel.writeIntArray(this.f36117q);
    }

    k(Parcel parcel) {
        super("MLLT");
        this.f36113e = parcel.readInt();
        this.f36114i = parcel.readInt();
        this.f36115o = parcel.readInt();
        this.f36116p = (int[]) w0.j(parcel.createIntArray());
        this.f36117q = (int[]) w0.j(parcel.createIntArray());
    }
}
