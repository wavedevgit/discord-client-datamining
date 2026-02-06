package ld;

import android.os.Parcel;
import android.os.Parcelable;
import com.google.android.exoplayer2.MediaMetadata;
import java.util.Arrays;
import ne.w0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class a extends i {
    public static final Parcelable.Creator<a> CREATOR = new C0480a();

    /* renamed from: e  reason: collision with root package name */
    public final String f36033e;

    /* renamed from: i  reason: collision with root package name */
    public final String f36034i;

    /* renamed from: o  reason: collision with root package name */
    public final int f36035o;

    /* renamed from: p  reason: collision with root package name */
    public final byte[] f36036p;

    /* renamed from: ld.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    class C0480a implements Parcelable.Creator {
        C0480a() {
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
        this.f36033e = str;
        this.f36034i = str2;
        this.f36035o = i10;
        this.f36036p = bArr;
    }

    @Override // com.google.android.exoplayer2.metadata.Metadata.b
    public void d1(MediaMetadata.b bVar) {
        bVar.I(this.f36036p, this.f36035o);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj != null && a.class == obj.getClass()) {
            a aVar = (a) obj;
            if (this.f36035o == aVar.f36035o && w0.c(this.f36033e, aVar.f36033e) && w0.c(this.f36034i, aVar.f36034i) && Arrays.equals(this.f36036p, aVar.f36036p)) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        int i10;
        int i11 = (527 + this.f36035o) * 31;
        String str = this.f36033e;
        int i12 = 0;
        if (str != null) {
            i10 = str.hashCode();
        } else {
            i10 = 0;
        }
        int i13 = (i11 + i10) * 31;
        String str2 = this.f36034i;
        if (str2 != null) {
            i12 = str2.hashCode();
        }
        return ((i13 + i12) * 31) + Arrays.hashCode(this.f36036p);
    }

    @Override // ld.i
    public String toString() {
        return this.f36061d + ": mimeType=" + this.f36033e + ", description=" + this.f36034i;
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        parcel.writeString(this.f36033e);
        parcel.writeString(this.f36034i);
        parcel.writeInt(this.f36035o);
        parcel.writeByteArray(this.f36036p);
    }

    a(Parcel parcel) {
        super("APIC");
        this.f36033e = (String) w0.j(parcel.readString());
        this.f36034i = parcel.readString();
        this.f36035o = parcel.readInt();
        this.f36036p = (byte[]) w0.j(parcel.createByteArray());
    }
}
