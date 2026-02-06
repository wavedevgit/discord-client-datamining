package kd;

import android.os.Parcel;
import android.os.Parcelable;
import com.google.android.exoplayer2.MediaMetadata;
import com.google.android.exoplayer2.metadata.Metadata;
import java.util.Arrays;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class c implements Metadata.b {
    public static final Parcelable.Creator<c> CREATOR = new a();

    /* renamed from: d  reason: collision with root package name */
    public final byte[] f31545d;

    /* renamed from: e  reason: collision with root package name */
    public final String f31546e;

    /* renamed from: i  reason: collision with root package name */
    public final String f31547i;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    class a implements Parcelable.Creator {
        a() {
        }

        @Override // android.os.Parcelable.Creator
        /* renamed from: a */
        public c createFromParcel(Parcel parcel) {
            return new c(parcel);
        }

        @Override // android.os.Parcelable.Creator
        /* renamed from: b */
        public c[] newArray(int i10) {
            return new c[i10];
        }
    }

    public c(byte[] bArr, String str, String str2) {
        this.f31545d = bArr;
        this.f31546e = str;
        this.f31547i = str2;
    }

    @Override // com.google.android.exoplayer2.metadata.Metadata.b
    public void d1(MediaMetadata.b bVar) {
        String str = this.f31546e;
        if (str != null) {
            bVar.m0(str);
        }
    }

    @Override // android.os.Parcelable
    public int describeContents() {
        return 0;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj != null && c.class == obj.getClass()) {
            return Arrays.equals(this.f31545d, ((c) obj).f31545d);
        }
        return false;
    }

    public int hashCode() {
        return Arrays.hashCode(this.f31545d);
    }

    public String toString() {
        return String.format("ICY: title=\"%s\", url=\"%s\", rawMetadata.length=\"%s\"", this.f31546e, this.f31547i, Integer.valueOf(this.f31545d.length));
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        parcel.writeByteArray(this.f31545d);
        parcel.writeString(this.f31546e);
        parcel.writeString(this.f31547i);
    }

    c(Parcel parcel) {
        this.f31545d = (byte[]) ne.a.e(parcel.createByteArray());
        this.f31546e = parcel.readString();
        this.f31547i = parcel.readString();
    }
}
