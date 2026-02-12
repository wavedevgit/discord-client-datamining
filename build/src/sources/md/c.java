package md;

import android.os.Parcel;
import android.os.Parcelable;
import java.util.Arrays;
import oe.w0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class c extends i {
    public static final Parcelable.Creator<c> CREATOR = new a();

    /* renamed from: e  reason: collision with root package name */
    public final String f36292e;

    /* renamed from: i  reason: collision with root package name */
    public final int f36293i;

    /* renamed from: o  reason: collision with root package name */
    public final int f36294o;

    /* renamed from: p  reason: collision with root package name */
    public final long f36295p;

    /* renamed from: q  reason: collision with root package name */
    public final long f36296q;

    /* renamed from: r  reason: collision with root package name */
    private final i[] f36297r;

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
        this.f36292e = str;
        this.f36293i = i10;
        this.f36294o = i11;
        this.f36295p = j10;
        this.f36296q = j11;
        this.f36297r = iVarArr;
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
            if (this.f36293i == cVar.f36293i && this.f36294o == cVar.f36294o && this.f36295p == cVar.f36295p && this.f36296q == cVar.f36296q && w0.c(this.f36292e, cVar.f36292e) && Arrays.equals(this.f36297r, cVar.f36297r)) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        int i10;
        int i11 = (((((((527 + this.f36293i) * 31) + this.f36294o) * 31) + ((int) this.f36295p)) * 31) + ((int) this.f36296q)) * 31;
        String str = this.f36292e;
        if (str != null) {
            i10 = str.hashCode();
        } else {
            i10 = 0;
        }
        return i11 + i10;
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        parcel.writeString(this.f36292e);
        parcel.writeInt(this.f36293i);
        parcel.writeInt(this.f36294o);
        parcel.writeLong(this.f36295p);
        parcel.writeLong(this.f36296q);
        parcel.writeInt(this.f36297r.length);
        for (i iVar : this.f36297r) {
            parcel.writeParcelable(iVar, 0);
        }
    }

    c(Parcel parcel) {
        super("CHAP");
        this.f36292e = (String) w0.j(parcel.readString());
        this.f36293i = parcel.readInt();
        this.f36294o = parcel.readInt();
        this.f36295p = parcel.readLong();
        this.f36296q = parcel.readLong();
        int readInt = parcel.readInt();
        this.f36297r = new i[readInt];
        for (int i10 = 0; i10 < readInt; i10++) {
            this.f36297r[i10] = (i) parcel.readParcelable(i.class.getClassLoader());
        }
    }
}
