package ld;

import android.os.Parcel;
import android.os.Parcelable;
import java.util.Arrays;
import ne.w0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class c extends i {
    public static final Parcelable.Creator<c> CREATOR = new a();

    /* renamed from: e  reason: collision with root package name */
    public final String f36645e;

    /* renamed from: i  reason: collision with root package name */
    public final int f36646i;

    /* renamed from: o  reason: collision with root package name */
    public final int f36647o;

    /* renamed from: p  reason: collision with root package name */
    public final long f36648p;

    /* renamed from: q  reason: collision with root package name */
    public final long f36649q;

    /* renamed from: r  reason: collision with root package name */
    private final i[] f36650r;

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
        this.f36645e = str;
        this.f36646i = i10;
        this.f36647o = i11;
        this.f36648p = j10;
        this.f36649q = j11;
        this.f36650r = iVarArr;
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
            if (this.f36646i == cVar.f36646i && this.f36647o == cVar.f36647o && this.f36648p == cVar.f36648p && this.f36649q == cVar.f36649q && w0.c(this.f36645e, cVar.f36645e) && Arrays.equals(this.f36650r, cVar.f36650r)) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        int i10;
        int i11 = (((((((527 + this.f36646i) * 31) + this.f36647o) * 31) + ((int) this.f36648p)) * 31) + ((int) this.f36649q)) * 31;
        String str = this.f36645e;
        if (str != null) {
            i10 = str.hashCode();
        } else {
            i10 = 0;
        }
        return i11 + i10;
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        parcel.writeString(this.f36645e);
        parcel.writeInt(this.f36646i);
        parcel.writeInt(this.f36647o);
        parcel.writeLong(this.f36648p);
        parcel.writeLong(this.f36649q);
        parcel.writeInt(this.f36650r.length);
        for (i iVar : this.f36650r) {
            parcel.writeParcelable(iVar, 0);
        }
    }

    c(Parcel parcel) {
        super("CHAP");
        this.f36645e = (String) w0.j(parcel.readString());
        this.f36646i = parcel.readInt();
        this.f36647o = parcel.readInt();
        this.f36648p = parcel.readLong();
        this.f36649q = parcel.readLong();
        int readInt = parcel.readInt();
        this.f36650r = new i[readInt];
        for (int i10 = 0; i10 < readInt; i10++) {
            this.f36650r[i10] = (i) parcel.readParcelable(i.class.getClassLoader());
        }
    }
}
