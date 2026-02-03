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
    public final byte[] f32238d;

    /* renamed from: e  reason: collision with root package name */
    public final String f32239e;

    /* renamed from: i  reason: collision with root package name */
    public final String f32240i;

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
        this.f32238d = bArr;
        this.f32239e = str;
        this.f32240i = str2;
    }

    @Override // android.os.Parcelable
    public int describeContents() {
        return 0;
    }

    @Override // com.google.android.exoplayer2.metadata.Metadata.b
    public void e1(MediaMetadata.b bVar) {
        String str = this.f32239e;
        if (str != null) {
            bVar.m0(str);
        }
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj != null && c.class == obj.getClass()) {
            return Arrays.equals(this.f32238d, ((c) obj).f32238d);
        }
        return false;
    }

    public int hashCode() {
        return Arrays.hashCode(this.f32238d);
    }

    public String toString() {
        return String.format("ICY: title=\"%s\", url=\"%s\", rawMetadata.length=\"%s\"", this.f32239e, this.f32240i, Integer.valueOf(this.f32238d.length));
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        parcel.writeByteArray(this.f32238d);
        parcel.writeString(this.f32239e);
        parcel.writeString(this.f32240i);
    }

    c(Parcel parcel) {
        this.f32238d = (byte[]) ne.a.e(parcel.createByteArray());
        this.f32239e = parcel.readString();
        this.f32240i = parcel.readString();
    }
}
