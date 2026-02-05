package md;

import android.os.Parcel;
import android.os.Parcelable;
import com.google.android.exoplayer2.metadata.Metadata;
import java.util.Arrays;
import ne.w0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class a implements Metadata.b {
    public static final Parcelable.Creator<a> CREATOR = new C0497a();

    /* renamed from: d  reason: collision with root package name */
    public final String f37467d;

    /* renamed from: e  reason: collision with root package name */
    public final byte[] f37468e;

    /* renamed from: i  reason: collision with root package name */
    public final int f37469i;

    /* renamed from: o  reason: collision with root package name */
    public final int f37470o;

    /* renamed from: md.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    class C0497a implements Parcelable.Creator {
        C0497a() {
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

    /* synthetic */ a(Parcel parcel, C0497a c0497a) {
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
            if (this.f37467d.equals(aVar.f37467d) && Arrays.equals(this.f37468e, aVar.f37468e) && this.f37469i == aVar.f37469i && this.f37470o == aVar.f37470o) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return ((((((527 + this.f37467d.hashCode()) * 31) + Arrays.hashCode(this.f37468e)) * 31) + this.f37469i) * 31) + this.f37470o;
    }

    public String toString() {
        String E;
        int i10 = this.f37470o;
        if (i10 != 1) {
            if (i10 != 23) {
                if (i10 != 67) {
                    E = w0.k1(this.f37468e);
                } else {
                    E = String.valueOf(w0.l1(this.f37468e));
                }
            } else {
                E = String.valueOf(w0.j1(this.f37468e));
            }
        } else {
            E = w0.E(this.f37468e);
        }
        return "mdta: key=" + this.f37467d + ", value=" + E;
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        parcel.writeString(this.f37467d);
        parcel.writeByteArray(this.f37468e);
        parcel.writeInt(this.f37469i);
        parcel.writeInt(this.f37470o);
    }

    public a(String str, byte[] bArr, int i10, int i11) {
        this.f37467d = str;
        this.f37468e = bArr;
        this.f37469i = i10;
        this.f37470o = i11;
    }

    private a(Parcel parcel) {
        this.f37467d = (String) w0.j(parcel.readString());
        this.f37468e = (byte[]) w0.j(parcel.createByteArray());
        this.f37469i = parcel.readInt();
        this.f37470o = parcel.readInt();
    }
}
