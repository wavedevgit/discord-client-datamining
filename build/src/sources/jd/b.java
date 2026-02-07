package jd;

import android.os.Parcel;
import android.os.Parcelable;
import com.google.android.exoplayer2.MediaMetadata;
import com.google.android.exoplayer2.metadata.Metadata;
import ne.w0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class b implements Metadata.b {
    public static final Parcelable.Creator<b> CREATOR = new a();

    /* renamed from: d  reason: collision with root package name */
    public final String f29884d;

    /* renamed from: e  reason: collision with root package name */
    public final String f29885e;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    class a implements Parcelable.Creator {
        a() {
        }

        @Override // android.os.Parcelable.Creator
        /* renamed from: a */
        public b createFromParcel(Parcel parcel) {
            return new b(parcel);
        }

        @Override // android.os.Parcelable.Creator
        /* renamed from: b */
        public b[] newArray(int i10) {
            return new b[i10];
        }
    }

    public b(String str, String str2) {
        this.f29884d = str;
        this.f29885e = str2;
    }

    @Override // com.google.android.exoplayer2.metadata.Metadata.b
    public void d1(MediaMetadata.b bVar) {
        String str = this.f29884d;
        str.getClass();
        char c10 = 65535;
        switch (str.hashCode()) {
            case 62359119:
                if (str.equals("ALBUM")) {
                    c10 = 0;
                    break;
                }
                break;
            case 79833656:
                if (str.equals("TITLE")) {
                    c10 = 1;
                    break;
                }
                break;
            case 428414940:
                if (str.equals("DESCRIPTION")) {
                    c10 = 2;
                    break;
                }
                break;
            case 1746739798:
                if (str.equals("ALBUMARTIST")) {
                    c10 = 3;
                    break;
                }
                break;
            case 1939198791:
                if (str.equals("ARTIST")) {
                    c10 = 4;
                    break;
                }
                break;
        }
        switch (c10) {
            case 0:
                bVar.N(this.f29885e);
                return;
            case 1:
                bVar.m0(this.f29885e);
                return;
            case 2:
                bVar.U(this.f29885e);
                return;
            case 3:
                bVar.M(this.f29885e);
                return;
            case 4:
                bVar.O(this.f29885e);
                return;
            default:
                return;
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
        if (obj != null && getClass() == obj.getClass()) {
            b bVar = (b) obj;
            if (this.f29884d.equals(bVar.f29884d) && this.f29885e.equals(bVar.f29885e)) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return ((527 + this.f29884d.hashCode()) * 31) + this.f29885e.hashCode();
    }

    public String toString() {
        return "VC: " + this.f29884d + "=" + this.f29885e;
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        parcel.writeString(this.f29884d);
        parcel.writeString(this.f29885e);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public b(Parcel parcel) {
        this.f29884d = (String) w0.j(parcel.readString());
        this.f29885e = (String) w0.j(parcel.readString());
    }
}
