package android.support.v4.media.session;

import android.annotation.SuppressLint;
import android.os.Parcel;
import android.os.Parcelable;
@SuppressLint({"BanParcelableUsage"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class ParcelableVolumeInfo implements Parcelable {
    public static final Parcelable.Creator<ParcelableVolumeInfo> CREATOR = new a();

    /* renamed from: d  reason: collision with root package name */
    public int f1207d;

    /* renamed from: e  reason: collision with root package name */
    public int f1208e;

    /* renamed from: i  reason: collision with root package name */
    public int f1209i;

    /* renamed from: o  reason: collision with root package name */
    public int f1210o;

    /* renamed from: p  reason: collision with root package name */
    public int f1211p;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class a implements Parcelable.Creator {
        a() {
        }

        @Override // android.os.Parcelable.Creator
        /* renamed from: a */
        public ParcelableVolumeInfo createFromParcel(Parcel parcel) {
            return new ParcelableVolumeInfo(parcel);
        }

        @Override // android.os.Parcelable.Creator
        /* renamed from: b */
        public ParcelableVolumeInfo[] newArray(int i10) {
            return new ParcelableVolumeInfo[i10];
        }
    }

    public ParcelableVolumeInfo(Parcel parcel) {
        this.f1207d = parcel.readInt();
        this.f1209i = parcel.readInt();
        this.f1210o = parcel.readInt();
        this.f1211p = parcel.readInt();
        this.f1208e = parcel.readInt();
    }

    @Override // android.os.Parcelable
    public int describeContents() {
        return 0;
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        parcel.writeInt(this.f1207d);
        parcel.writeInt(this.f1209i);
        parcel.writeInt(this.f1210o);
        parcel.writeInt(this.f1211p);
        parcel.writeInt(this.f1208e);
    }
}
