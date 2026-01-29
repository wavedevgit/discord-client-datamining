package ld;

import android.os.Parcel;
import android.os.Parcelable;
import com.google.android.exoplayer2.MediaMetadata;
import java.util.Arrays;
import ne.w0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class a extends i {
    public static final Parcelable.Creator<a> CREATOR = new C0477a();

    /* renamed from: e  reason: collision with root package name */
    public final String f37114e;

    /* renamed from: i  reason: collision with root package name */
    public final String f37115i;

    /* renamed from: o  reason: collision with root package name */
    public final int f37116o;

    /* renamed from: p  reason: collision with root package name */
    public final byte[] f37117p;

    /* renamed from: ld.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    class C0477a implements Parcelable.Creator {
        C0477a() {
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
        this.f37114e = str;
        this.f37115i = str2;
        this.f37116o = i10;
        this.f37117p = bArr;
    }

    @Override // com.google.android.exoplayer2.metadata.Metadata.b
    public void d1(MediaMetadata.b bVar) {
        bVar.I(this.f37117p, this.f37116o);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj != null && a.class == obj.getClass()) {
            a aVar = (a) obj;
            if (this.f37116o == aVar.f37116o && w0.c(this.f37114e, aVar.f37114e) && w0.c(this.f37115i, aVar.f37115i) && Arrays.equals(this.f37117p, aVar.f37117p)) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        int i10;
        int i11 = (527 + this.f37116o) * 31;
        String str = this.f37114e;
        int i12 = 0;
        if (str != null) {
            i10 = str.hashCode();
        } else {
            i10 = 0;
        }
        int i13 = (i11 + i10) * 31;
        String str2 = this.f37115i;
        if (str2 != null) {
            i12 = str2.hashCode();
        }
        return ((i13 + i12) * 31) + Arrays.hashCode(this.f37117p);
    }

    @Override // ld.i
    public String toString() {
        return this.f37142d + ": mimeType=" + this.f37114e + ", description=" + this.f37115i;
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        parcel.writeString(this.f37114e);
        parcel.writeString(this.f37115i);
        parcel.writeInt(this.f37116o);
        parcel.writeByteArray(this.f37117p);
    }

    a(Parcel parcel) {
        super("APIC");
        this.f37114e = (String) w0.j(parcel.readString());
        this.f37115i = parcel.readString();
        this.f37116o = parcel.readInt();
        this.f37117p = (byte[]) w0.j(parcel.createByteArray());
    }
}
