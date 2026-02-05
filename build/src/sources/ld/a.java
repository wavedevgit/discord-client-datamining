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
    public final String f36640e;

    /* renamed from: i  reason: collision with root package name */
    public final String f36641i;

    /* renamed from: o  reason: collision with root package name */
    public final int f36642o;

    /* renamed from: p  reason: collision with root package name */
    public final byte[] f36643p;

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
        this.f36640e = str;
        this.f36641i = str2;
        this.f36642o = i10;
        this.f36643p = bArr;
    }

    @Override // com.google.android.exoplayer2.metadata.Metadata.b
    public void e1(MediaMetadata.b bVar) {
        bVar.I(this.f36643p, this.f36642o);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj != null && a.class == obj.getClass()) {
            a aVar = (a) obj;
            if (this.f36642o == aVar.f36642o && w0.c(this.f36640e, aVar.f36640e) && w0.c(this.f36641i, aVar.f36641i) && Arrays.equals(this.f36643p, aVar.f36643p)) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        int i10;
        int i11 = (527 + this.f36642o) * 31;
        String str = this.f36640e;
        int i12 = 0;
        if (str != null) {
            i10 = str.hashCode();
        } else {
            i10 = 0;
        }
        int i13 = (i11 + i10) * 31;
        String str2 = this.f36641i;
        if (str2 != null) {
            i12 = str2.hashCode();
        }
        return ((i13 + i12) * 31) + Arrays.hashCode(this.f36643p);
    }

    @Override // ld.i
    public String toString() {
        return this.f36668d + ": mimeType=" + this.f36640e + ", description=" + this.f36641i;
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        parcel.writeString(this.f36640e);
        parcel.writeString(this.f36641i);
        parcel.writeInt(this.f36642o);
        parcel.writeByteArray(this.f36643p);
    }

    a(Parcel parcel) {
        super("APIC");
        this.f36640e = (String) w0.j(parcel.readString());
        this.f36641i = parcel.readString();
        this.f36642o = parcel.readInt();
        this.f36643p = (byte[]) w0.j(parcel.createByteArray());
    }
}
