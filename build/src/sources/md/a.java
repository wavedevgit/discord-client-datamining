package md;

import android.os.Parcel;
import android.os.Parcelable;
import com.google.android.exoplayer2.metadata.Metadata;
import java.util.Arrays;
import ne.w0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class a implements Metadata.b {
    public static final Parcelable.Creator<a> CREATOR = new C0506a();

    /* renamed from: d  reason: collision with root package name */
    public final String f38008d;

    /* renamed from: e  reason: collision with root package name */
    public final byte[] f38009e;

    /* renamed from: i  reason: collision with root package name */
    public final int f38010i;

    /* renamed from: o  reason: collision with root package name */
    public final int f38011o;

    /* renamed from: md.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    class C0506a implements Parcelable.Creator {
        C0506a() {
        }

        @Override // android.os.Parcelable.Creator
        /* renamed from: a */
        public a createFromParcel(Parcel parcel) {
            return new a(parcel, null);
        }

        @Override // android.os.Parcelable.Creator
        /* renamed from: b */
        public a[] newArray(int i10) {
            return new a[i10];
        }
    }

    /* synthetic */ a(Parcel parcel, C0506a c0506a) {
        this(parcel);
    }

    @Override // android.os.Parcelable
    public int describeContents() {
        return 0;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj != null && a.class == obj.getClass()) {
            a aVar = (a) obj;
            if (this.f38008d.equals(aVar.f38008d) && Arrays.equals(this.f38009e, aVar.f38009e) && this.f38010i == aVar.f38010i && this.f38011o == aVar.f38011o) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return ((((((527 + this.f38008d.hashCode()) * 31) + Arrays.hashCode(this.f38009e)) * 31) + this.f38010i) * 31) + this.f38011o;
    }

    public String toString() {
        String E;
        int i10 = this.f38011o;
        if (i10 != 1) {
            if (i10 != 23) {
                if (i10 != 67) {
                    E = w0.k1(this.f38009e);
                } else {
                    E = String.valueOf(w0.l1(this.f38009e));
                }
            } else {
                E = String.valueOf(w0.j1(this.f38009e));
            }
        } else {
            E = w0.E(this.f38009e);
        }
        return "mdta: key=" + this.f38008d + ", value=" + E;
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        parcel.writeString(this.f38008d);
        parcel.writeByteArray(this.f38009e);
        parcel.writeInt(this.f38010i);
        parcel.writeInt(this.f38011o);
    }

    public a(String str, byte[] bArr, int i10, int i11) {
        this.f38008d = str;
        this.f38009e = bArr;
        this.f38010i = i10;
        this.f38011o = i11;
    }

    private a(Parcel parcel) {
        this.f38008d = (String) w0.j(parcel.readString());
        this.f38009e = (byte[]) w0.j(parcel.createByteArray());
        this.f38010i = parcel.readInt();
        this.f38011o = parcel.readInt();
    }
}
