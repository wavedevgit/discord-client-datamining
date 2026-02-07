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
    public final String f36081e;

    /* renamed from: i  reason: collision with root package name */
    public final String f36082i;

    /* renamed from: o  reason: collision with root package name */
    public final int f36083o;

    /* renamed from: p  reason: collision with root package name */
    public final byte[] f36084p;

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
        this.f36081e = str;
        this.f36082i = str2;
        this.f36083o = i10;
        this.f36084p = bArr;
    }

    @Override // com.google.android.exoplayer2.metadata.Metadata.b
    public void d1(MediaMetadata.b bVar) {
        bVar.I(this.f36084p, this.f36083o);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj != null && a.class == obj.getClass()) {
            a aVar = (a) obj;
            if (this.f36083o == aVar.f36083o && w0.c(this.f36081e, aVar.f36081e) && w0.c(this.f36082i, aVar.f36082i) && Arrays.equals(this.f36084p, aVar.f36084p)) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        int i10;
        int i11 = (527 + this.f36083o) * 31;
        String str = this.f36081e;
        int i12 = 0;
        if (str != null) {
            i10 = str.hashCode();
        } else {
            i10 = 0;
        }
        int i13 = (i11 + i10) * 31;
        String str2 = this.f36082i;
        if (str2 != null) {
            i12 = str2.hashCode();
        }
        return ((i13 + i12) * 31) + Arrays.hashCode(this.f36084p);
    }

    @Override // ld.i
    public String toString() {
        return this.f36109d + ": mimeType=" + this.f36081e + ", description=" + this.f36082i;
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        parcel.writeString(this.f36081e);
        parcel.writeString(this.f36082i);
        parcel.writeInt(this.f36083o);
        parcel.writeByteArray(this.f36084p);
    }

    a(Parcel parcel) {
        super("APIC");
        this.f36081e = (String) w0.j(parcel.readString());
        this.f36082i = parcel.readString();
        this.f36083o = parcel.readInt();
        this.f36084p = (byte[]) w0.j(parcel.createByteArray());
    }
}
