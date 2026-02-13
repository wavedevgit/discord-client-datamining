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
    public final String f36855e;

    /* renamed from: i  reason: collision with root package name */
    public final String f36856i;

    /* renamed from: o  reason: collision with root package name */
    public final int f36857o;

    /* renamed from: p  reason: collision with root package name */
    public final byte[] f36858p;

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
        this.f36855e = str;
        this.f36856i = str2;
        this.f36857o = i10;
        this.f36858p = bArr;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj != null && a.class == obj.getClass()) {
            a aVar = (a) obj;
            if (this.f36857o == aVar.f36857o && w0.c(this.f36855e, aVar.f36855e) && w0.c(this.f36856i, aVar.f36856i) && Arrays.equals(this.f36858p, aVar.f36858p)) {
                return true;
            }
        }
        return false;
    }

    @Override // com.google.android.exoplayer2.metadata.Metadata.b
    public void f1(MediaMetadata.b bVar) {
        bVar.I(this.f36858p, this.f36857o);
    }

    public int hashCode() {
        int i10;
        int i11 = (527 + this.f36857o) * 31;
        String str = this.f36855e;
        int i12 = 0;
        if (str != null) {
            i10 = str.hashCode();
        } else {
            i10 = 0;
        }
        int i13 = (i11 + i10) * 31;
        String str2 = this.f36856i;
        if (str2 != null) {
            i12 = str2.hashCode();
        }
        return ((i13 + i12) * 31) + Arrays.hashCode(this.f36858p);
    }

    @Override // md.i
    public String toString() {
        return this.f36883d + ": mimeType=" + this.f36855e + ", description=" + this.f36856i;
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        parcel.writeString(this.f36855e);
        parcel.writeString(this.f36856i);
        parcel.writeInt(this.f36857o);
        parcel.writeByteArray(this.f36858p);
    }

    a(Parcel parcel) {
        super("APIC");
        this.f36855e = (String) w0.j(parcel.readString());
        this.f36856i = parcel.readString();
        this.f36857o = parcel.readInt();
        this.f36858p = (byte[]) w0.j(parcel.createByteArray());
    }
}
