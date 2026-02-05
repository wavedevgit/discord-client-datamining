package vq;

import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class a implements Parcelable {
    public static final Parcelable.Creator<a> CREATOR = new C0686a();

    /* renamed from: d  reason: collision with root package name */
    private final String f52339d;

    /* renamed from: e  reason: collision with root package name */
    private final float f52340e;

    /* renamed from: i  reason: collision with root package name */
    private final float f52341i;

    /* renamed from: vq.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    class C0686a implements Parcelable.Creator {
        C0686a() {
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

    public a(String str, float f10, float f11) {
        this.f52339d = str;
        this.f52340e = f10;
        this.f52341i = f11;
    }

    public String a() {
        return this.f52339d;
    }

    public float b() {
        return this.f52340e;
    }

    public float c() {
        return this.f52341i;
    }

    @Override // android.os.Parcelable
    public int describeContents() {
        return 0;
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        parcel.writeString(this.f52339d);
        parcel.writeFloat(this.f52340e);
        parcel.writeFloat(this.f52341i);
    }

    protected a(Parcel parcel) {
        this.f52339d = parcel.readString();
        this.f52340e = parcel.readFloat();
        this.f52341i = parcel.readFloat();
    }
}
