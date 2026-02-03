package ld;

import android.os.Parcel;
import android.os.Parcelable;
import com.google.android.exoplayer2.MediaMetadata;
import java.util.Arrays;
import ne.w0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class a extends i {
    public static final Parcelable.Creator<a> CREATOR = new C0482a();

    /* renamed from: e  reason: collision with root package name */
    public final String f37244e;

    /* renamed from: i  reason: collision with root package name */
    public final String f37245i;

    /* renamed from: o  reason: collision with root package name */
    public final int f37246o;

    /* renamed from: p  reason: collision with root package name */
    public final byte[] f37247p;

    /* renamed from: ld.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    class C0482a implements Parcelable.Creator {
        C0482a() {
        }

        @Override // android.os.Parcelable.Creator
        /* renamed from: a */
        public a createFromParcel(Parcel parcel) {
            return new a(parcel);
        }

        @Override // android.os.Parcelable.Creator
        /* renamed from: b */
        public a[] newArray(int i10) {
            return new a[i10];
        }
    }

    public a(String str, String str2, int i10, byte[] bArr) {
        super("APIC");
        this.f37244e = str;
        this.f37245i = str2;
        this.f37246o = i10;
        this.f37247p = bArr;
    }

    @Override // com.google.android.exoplayer2.metadata.Metadata.b
    public void e1(MediaMetadata.b bVar) {
        bVar.I(this.f37247p, this.f37246o);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj != null && a.class == obj.getClass()) {
            a aVar = (a) obj;
            if (this.f37246o == aVar.f37246o && w0.c(this.f37244e, aVar.f37244e) && w0.c(this.f37245i, aVar.f37245i) && Arrays.equals(this.f37247p, aVar.f37247p)) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        int i10;
        int i11 = (527 + this.f37246o) * 31;
        String str = this.f37244e;
        int i12 = 0;
        if (str != null) {
            i10 = str.hashCode();
        } else {
            i10 = 0;
        }
        int i13 = (i11 + i10) * 31;
        String str2 = this.f37245i;
        if (str2 != null) {
            i12 = str2.hashCode();
        }
        return ((i13 + i12) * 31) + Arrays.hashCode(this.f37247p);
    }

    @Override // ld.i
    public String toString() {
        return this.f37272d + ": mimeType=" + this.f37244e + ", description=" + this.f37245i;
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        parcel.writeString(this.f37244e);
        parcel.writeString(this.f37245i);
        parcel.writeInt(this.f37246o);
        parcel.writeByteArray(this.f37247p);
    }

    a(Parcel parcel) {
        super("APIC");
        this.f37244e = (String) w0.j(parcel.readString());
        this.f37245i = parcel.readString();
        this.f37246o = parcel.readInt();
        this.f37247p = (byte[]) w0.j(parcel.createByteArray());
    }
}
