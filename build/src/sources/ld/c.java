package ld;

import android.os.Parcel;
import android.os.Parcelable;
import java.util.Arrays;
import ne.w0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class c extends i {
    public static final Parcelable.Creator<c> CREATOR = new a();

    /* renamed from: e  reason: collision with root package name */
    public final String f37249e;

    /* renamed from: i  reason: collision with root package name */
    public final int f37250i;

    /* renamed from: o  reason: collision with root package name */
    public final int f37251o;

    /* renamed from: p  reason: collision with root package name */
    public final long f37252p;

    /* renamed from: q  reason: collision with root package name */
    public final long f37253q;

    /* renamed from: r  reason: collision with root package name */
    private final i[] f37254r;

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
        this.f37249e = str;
        this.f37250i = i10;
        this.f37251o = i11;
        this.f37252p = j10;
        this.f37253q = j11;
        this.f37254r = iVarArr;
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
            if (this.f37250i == cVar.f37250i && this.f37251o == cVar.f37251o && this.f37252p == cVar.f37252p && this.f37253q == cVar.f37253q && w0.c(this.f37249e, cVar.f37249e) && Arrays.equals(this.f37254r, cVar.f37254r)) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        int i10;
        int i11 = (((((((527 + this.f37250i) * 31) + this.f37251o) * 31) + ((int) this.f37252p)) * 31) + ((int) this.f37253q)) * 31;
        String str = this.f37249e;
        if (str != null) {
            i10 = str.hashCode();
        } else {
            i10 = 0;
        }
        return i11 + i10;
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        parcel.writeString(this.f37249e);
        parcel.writeInt(this.f37250i);
        parcel.writeInt(this.f37251o);
        parcel.writeLong(this.f37252p);
        parcel.writeLong(this.f37253q);
        parcel.writeInt(this.f37254r.length);
        for (i iVar : this.f37254r) {
            parcel.writeParcelable(iVar, 0);
        }
    }

    c(Parcel parcel) {
        super("CHAP");
        this.f37249e = (String) w0.j(parcel.readString());
        this.f37250i = parcel.readInt();
        this.f37251o = parcel.readInt();
        this.f37252p = parcel.readLong();
        this.f37253q = parcel.readLong();
        int readInt = parcel.readInt();
        this.f37254r = new i[readInt];
        for (int i10 = 0; i10 < readInt; i10++) {
            this.f37254r[i10] = (i) parcel.readParcelable(i.class.getClassLoader());
        }
    }
}
