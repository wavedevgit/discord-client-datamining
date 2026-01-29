package md;

import android.os.Parcel;
import android.os.Parcelable;
import com.google.android.exoplayer2.metadata.Metadata;
import java.util.Arrays;
import ne.w0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class a implements Metadata.b {
    public static final Parcelable.Creator<a> CREATOR = new C0495a();

    /* renamed from: d  reason: collision with root package name */
    public final String f38012d;

    /* renamed from: e  reason: collision with root package name */
    public final byte[] f38013e;

    /* renamed from: i  reason: collision with root package name */
    public final int f38014i;

    /* renamed from: o  reason: collision with root package name */
    public final int f38015o;

    /* renamed from: md.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    class C0495a implements Parcelable.Creator {
        C0495a() {
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

    /* synthetic */ a(Parcel parcel, C0495a c0495a) {
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
            if (this.f38012d.equals(aVar.f38012d) && Arrays.equals(this.f38013e, aVar.f38013e) && this.f38014i == aVar.f38014i && this.f38015o == aVar.f38015o) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return ((((((527 + this.f38012d.hashCode()) * 31) + Arrays.hashCode(this.f38013e)) * 31) + this.f38014i) * 31) + this.f38015o;
    }

    public String toString() {
        String E;
        int i10 = this.f38015o;
        if (i10 != 1) {
            if (i10 != 23) {
                if (i10 != 67) {
                    E = w0.k1(this.f38013e);
                } else {
                    E = String.valueOf(w0.l1(this.f38013e));
                }
            } else {
                E = String.valueOf(w0.j1(this.f38013e));
            }
        } else {
            E = w0.E(this.f38013e);
        }
        return "mdta: key=" + this.f38012d + ", value=" + E;
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        parcel.writeString(this.f38012d);
        parcel.writeByteArray(this.f38013e);
        parcel.writeInt(this.f38014i);
        parcel.writeInt(this.f38015o);
    }

    public a(String str, byte[] bArr, int i10, int i11) {
        this.f38012d = str;
        this.f38013e = bArr;
        this.f38014i = i10;
        this.f38015o = i11;
    }

    private a(Parcel parcel) {
        this.f38012d = (String) w0.j(parcel.readString());
        this.f38013e = (byte[]) w0.j(parcel.createByteArray());
        this.f38014i = parcel.readInt();
        this.f38015o = parcel.readInt();
    }
}
