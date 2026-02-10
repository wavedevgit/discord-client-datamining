package md;

import android.os.Parcel;
import android.os.Parcelable;
import com.google.android.exoplayer2.MediaMetadata;
import java.util.Arrays;
import oe.w0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class a extends i {
    public static final Parcelable.Creator<a> CREATOR = new C0532a();

    /* renamed from: e  reason: collision with root package name */
    public final String f36911e;

    /* renamed from: i  reason: collision with root package name */
    public final String f36912i;

    /* renamed from: o  reason: collision with root package name */
    public final int f36913o;

    /* renamed from: p  reason: collision with root package name */
    public final byte[] f36914p;

    /* renamed from: md.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    class C0532a implements Parcelable.Creator {
        C0532a() {
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
        this.f36911e = str;
        this.f36912i = str2;
        this.f36913o = i10;
        this.f36914p = bArr;
    }

    @Override // com.google.android.exoplayer2.metadata.Metadata.b
    public void a1(MediaMetadata.b bVar) {
        bVar.I(this.f36914p, this.f36913o);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj != null && a.class == obj.getClass()) {
            a aVar = (a) obj;
            if (this.f36913o == aVar.f36913o && w0.c(this.f36911e, aVar.f36911e) && w0.c(this.f36912i, aVar.f36912i) && Arrays.equals(this.f36914p, aVar.f36914p)) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        int i10;
        int i11 = (527 + this.f36913o) * 31;
        String str = this.f36911e;
        int i12 = 0;
        if (str != null) {
            i10 = str.hashCode();
        } else {
            i10 = 0;
        }
        int i13 = (i11 + i10) * 31;
        String str2 = this.f36912i;
        if (str2 != null) {
            i12 = str2.hashCode();
        }
        return ((i13 + i12) * 31) + Arrays.hashCode(this.f36914p);
    }

    @Override // md.i
    public String toString() {
        return this.f36939d + ": mimeType=" + this.f36911e + ", description=" + this.f36912i;
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        parcel.writeString(this.f36911e);
        parcel.writeString(this.f36912i);
        parcel.writeInt(this.f36913o);
        parcel.writeByteArray(this.f36914p);
    }

    a(Parcel parcel) {
        super("APIC");
        this.f36911e = (String) w0.j(parcel.readString());
        this.f36912i = parcel.readString();
        this.f36913o = parcel.readInt();
        this.f36914p = (byte[]) w0.j(parcel.createByteArray());
    }
}
