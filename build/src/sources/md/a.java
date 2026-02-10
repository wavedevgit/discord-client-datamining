package md;

import android.os.Parcel;
import android.os.Parcelable;
import com.google.android.exoplayer2.MediaMetadata;
import java.util.Arrays;
import oe.w0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class a extends i {
    public static final Parcelable.Creator<a> CREATOR = new C0514a();

    /* renamed from: e  reason: collision with root package name */
    public final String f36286e;

    /* renamed from: i  reason: collision with root package name */
    public final String f36287i;

    /* renamed from: o  reason: collision with root package name */
    public final int f36288o;

    /* renamed from: p  reason: collision with root package name */
    public final byte[] f36289p;

    /* renamed from: md.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    class C0514a implements Parcelable.Creator {
        C0514a() {
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
        this.f36286e = str;
        this.f36287i = str2;
        this.f36288o = i10;
        this.f36289p = bArr;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj != null && a.class == obj.getClass()) {
            a aVar = (a) obj;
            if (this.f36288o == aVar.f36288o && w0.c(this.f36286e, aVar.f36286e) && w0.c(this.f36287i, aVar.f36287i) && Arrays.equals(this.f36289p, aVar.f36289p)) {
                return true;
            }
        }
        return false;
    }

    @Override // com.google.android.exoplayer2.metadata.Metadata.b
    public void f1(MediaMetadata.b bVar) {
        bVar.I(this.f36289p, this.f36288o);
    }

    public int hashCode() {
        int i10;
        int i11 = (527 + this.f36288o) * 31;
        String str = this.f36286e;
        int i12 = 0;
        if (str != null) {
            i10 = str.hashCode();
        } else {
            i10 = 0;
        }
        int i13 = (i11 + i10) * 31;
        String str2 = this.f36287i;
        if (str2 != null) {
            i12 = str2.hashCode();
        }
        return ((i13 + i12) * 31) + Arrays.hashCode(this.f36289p);
    }

    @Override // md.i
    public String toString() {
        return this.f36314d + ": mimeType=" + this.f36286e + ", description=" + this.f36287i;
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        parcel.writeString(this.f36286e);
        parcel.writeString(this.f36287i);
        parcel.writeInt(this.f36288o);
        parcel.writeByteArray(this.f36289p);
    }

    a(Parcel parcel) {
        super("APIC");
        this.f36286e = (String) w0.j(parcel.readString());
        this.f36287i = parcel.readString();
        this.f36288o = parcel.readInt();
        this.f36289p = (byte[]) w0.j(parcel.createByteArray());
    }
}
