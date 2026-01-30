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
    public final String f37130e;

    /* renamed from: i  reason: collision with root package name */
    public final String f37131i;

    /* renamed from: o  reason: collision with root package name */
    public final int f37132o;

    /* renamed from: p  reason: collision with root package name */
    public final byte[] f37133p;

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
        this.f37130e = str;
        this.f37131i = str2;
        this.f37132o = i10;
        this.f37133p = bArr;
    }

    @Override // com.google.android.exoplayer2.metadata.Metadata.b
    public void d1(MediaMetadata.b bVar) {
        bVar.I(this.f37133p, this.f37132o);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj != null && a.class == obj.getClass()) {
            a aVar = (a) obj;
            if (this.f37132o == aVar.f37132o && w0.c(this.f37130e, aVar.f37130e) && w0.c(this.f37131i, aVar.f37131i) && Arrays.equals(this.f37133p, aVar.f37133p)) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        int i10;
        int i11 = (527 + this.f37132o) * 31;
        String str = this.f37130e;
        int i12 = 0;
        if (str != null) {
            i10 = str.hashCode();
        } else {
            i10 = 0;
        }
        int i13 = (i11 + i10) * 31;
        String str2 = this.f37131i;
        if (str2 != null) {
            i12 = str2.hashCode();
        }
        return ((i13 + i12) * 31) + Arrays.hashCode(this.f37133p);
    }

    @Override // ld.i
    public String toString() {
        return this.f37158d + ": mimeType=" + this.f37130e + ", description=" + this.f37131i;
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        parcel.writeString(this.f37130e);
        parcel.writeString(this.f37131i);
        parcel.writeInt(this.f37132o);
        parcel.writeByteArray(this.f37133p);
    }

    a(Parcel parcel) {
        super("APIC");
        this.f37130e = (String) w0.j(parcel.readString());
        this.f37131i = parcel.readString();
        this.f37132o = parcel.readInt();
        this.f37133p = (byte[]) w0.j(parcel.createByteArray());
    }
}
