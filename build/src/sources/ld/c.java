package ld;

import android.os.Parcel;
import android.os.Parcelable;
import java.util.Arrays;
import ne.w0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class c extends i {
    public static final Parcelable.Creator<c> CREATOR = new a();

    /* renamed from: e  reason: collision with root package name */
    public final String f36718e;

    /* renamed from: i  reason: collision with root package name */
    public final int f36719i;

    /* renamed from: o  reason: collision with root package name */
    public final int f36720o;

    /* renamed from: p  reason: collision with root package name */
    public final long f36721p;

    /* renamed from: q  reason: collision with root package name */
    public final long f36722q;

    /* renamed from: r  reason: collision with root package name */
    private final i[] f36723r;

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
        this.f36718e = str;
        this.f36719i = i10;
        this.f36720o = i11;
        this.f36721p = j10;
        this.f36722q = j11;
        this.f36723r = iVarArr;
    }

    @Override // ld.i, android.os.Parcelable
    public int describeContents() {
        return 0;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj != null && c.class == obj.getClass()) {
            c cVar = (c) obj;
            if (this.f36719i == cVar.f36719i && this.f36720o == cVar.f36720o && this.f36721p == cVar.f36721p && this.f36722q == cVar.f36722q && w0.c(this.f36718e, cVar.f36718e) && Arrays.equals(this.f36723r, cVar.f36723r)) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        int i10;
        int i11 = (((((((527 + this.f36719i) * 31) + this.f36720o) * 31) + ((int) this.f36721p)) * 31) + ((int) this.f36722q)) * 31;
        String str = this.f36718e;
        if (str != null) {
            i10 = str.hashCode();
        } else {
            i10 = 0;
        }
        return i11 + i10;
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        parcel.writeString(this.f36718e);
        parcel.writeInt(this.f36719i);
        parcel.writeInt(this.f36720o);
        parcel.writeLong(this.f36721p);
        parcel.writeLong(this.f36722q);
        parcel.writeInt(this.f36723r.length);
        for (i iVar : this.f36723r) {
            parcel.writeParcelable(iVar, 0);
        }
    }

    c(Parcel parcel) {
        super("CHAP");
        this.f36718e = (String) w0.j(parcel.readString());
        this.f36719i = parcel.readInt();
        this.f36720o = parcel.readInt();
        this.f36721p = parcel.readLong();
        this.f36722q = parcel.readLong();
        int readInt = parcel.readInt();
        this.f36723r = new i[readInt];
        for (int i10 = 0; i10 < readInt; i10++) {
            this.f36723r[i10] = (i) parcel.readParcelable(i.class.getClassLoader());
        }
    }
}
