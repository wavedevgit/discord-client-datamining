package md;

import android.os.Parcel;
import android.os.Parcelable;
import java.util.Arrays;
import oe.w0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class c extends i {
    public static final Parcelable.Creator<c> CREATOR = new a();

    /* renamed from: e  reason: collision with root package name */
    public final String f36916e;

    /* renamed from: i  reason: collision with root package name */
    public final int f36917i;

    /* renamed from: o  reason: collision with root package name */
    public final int f36918o;

    /* renamed from: p  reason: collision with root package name */
    public final long f36919p;

    /* renamed from: q  reason: collision with root package name */
    public final long f36920q;

    /* renamed from: r  reason: collision with root package name */
    private final i[] f36921r;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    class a implements Parcelable.Creator {
        a() {
        }

        @Override // android.os.Parcelable.Creator
        /* renamed from: a */
        public c createFromParcel(Parcel parcel) {
            return new c(parcel);
        }

        @Override // android.os.Parcelable.Creator
        /* renamed from: b */
        public c[] newArray(int i10) {
            return new c[i10];
        }
    }

    public c(String str, int i10, int i11, long j10, long j11, i[] iVarArr) {
        super("CHAP");
        this.f36916e = str;
        this.f36917i = i10;
        this.f36918o = i11;
        this.f36919p = j10;
        this.f36920q = j11;
        this.f36921r = iVarArr;
    }

    @Override // md.i, android.os.Parcelable
    public int describeContents() {
        return 0;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj != null && c.class == obj.getClass()) {
            c cVar = (c) obj;
            if (this.f36917i == cVar.f36917i && this.f36918o == cVar.f36918o && this.f36919p == cVar.f36919p && this.f36920q == cVar.f36920q && w0.c(this.f36916e, cVar.f36916e) && Arrays.equals(this.f36921r, cVar.f36921r)) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        int i10;
        int i11 = (((((((527 + this.f36917i) * 31) + this.f36918o) * 31) + ((int) this.f36919p)) * 31) + ((int) this.f36920q)) * 31;
        String str = this.f36916e;
        if (str != null) {
            i10 = str.hashCode();
        } else {
            i10 = 0;
        }
        return i11 + i10;
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        parcel.writeString(this.f36916e);
        parcel.writeInt(this.f36917i);
        parcel.writeInt(this.f36918o);
        parcel.writeLong(this.f36919p);
        parcel.writeLong(this.f36920q);
        parcel.writeInt(this.f36921r.length);
        for (i iVar : this.f36921r) {
            parcel.writeParcelable(iVar, 0);
        }
    }

    c(Parcel parcel) {
        super("CHAP");
        this.f36916e = (String) w0.j(parcel.readString());
        this.f36917i = parcel.readInt();
        this.f36918o = parcel.readInt();
        this.f36919p = parcel.readLong();
        this.f36920q = parcel.readLong();
        int readInt = parcel.readInt();
        this.f36921r = new i[readInt];
        for (int i10 = 0; i10 < readInt; i10++) {
            this.f36921r[i10] = (i) parcel.readParcelable(i.class.getClassLoader());
        }
    }
}
