package md;

import android.os.Parcel;
import android.os.Parcelable;
import com.google.android.exoplayer2.metadata.Metadata;
import java.util.Arrays;
import ne.w0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class a implements Metadata.b {
    public static final Parcelable.Creator<a> CREATOR = new C0501a();

    /* renamed from: d  reason: collision with root package name */
    public final String f37049d;

    /* renamed from: e  reason: collision with root package name */
    public final byte[] f37050e;

    /* renamed from: i  reason: collision with root package name */
    public final int f37051i;

    /* renamed from: o  reason: collision with root package name */
    public final int f37052o;

    /* renamed from: md.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    class C0501a implements Parcelable.Creator {
        C0501a() {
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

    /* synthetic */ a(Parcel parcel, C0501a c0501a) {
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
            if (this.f37049d.equals(aVar.f37049d) && Arrays.equals(this.f37050e, aVar.f37050e) && this.f37051i == aVar.f37051i && this.f37052o == aVar.f37052o) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return ((((((527 + this.f37049d.hashCode()) * 31) + Arrays.hashCode(this.f37050e)) * 31) + this.f37051i) * 31) + this.f37052o;
    }

    public String toString() {
        String E;
        int i10 = this.f37052o;
        if (i10 != 1) {
            if (i10 != 23) {
                if (i10 != 67) {
                    E = w0.k1(this.f37050e);
                } else {
                    E = String.valueOf(w0.l1(this.f37050e));
                }
            } else {
                E = String.valueOf(w0.j1(this.f37050e));
            }
        } else {
            E = w0.E(this.f37050e);
        }
        return "mdta: key=" + this.f37049d + ", value=" + E;
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        parcel.writeString(this.f37049d);
        parcel.writeByteArray(this.f37050e);
        parcel.writeInt(this.f37051i);
        parcel.writeInt(this.f37052o);
    }

    public a(String str, byte[] bArr, int i10, int i11) {
        this.f37049d = str;
        this.f37050e = bArr;
        this.f37051i = i10;
        this.f37052o = i11;
    }

    private a(Parcel parcel) {
        this.f37049d = (String) w0.j(parcel.readString());
        this.f37050e = (byte[]) w0.j(parcel.createByteArray());
        this.f37051i = parcel.readInt();
        this.f37052o = parcel.readInt();
    }
}
