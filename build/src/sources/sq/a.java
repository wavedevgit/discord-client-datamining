package sq;

import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class a implements Parcelable {
    public static final Parcelable.Creator<a> CREATOR = new C0613a();

    /* renamed from: d  reason: collision with root package name */
    private final String f49571d;

    /* renamed from: e  reason: collision with root package name */
    private final float f49572e;

    /* renamed from: i  reason: collision with root package name */
    private final float f49573i;

    /* renamed from: sq.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    class C0613a implements Parcelable.Creator {
        C0613a() {
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
        this.f49571d = str;
        this.f49572e = f10;
        this.f49573i = f11;
    }

    public String a() {
        return this.f49571d;
    }

    public float b() {
        return this.f49572e;
    }

    public float c() {
        return this.f49573i;
    }

    @Override // android.os.Parcelable
    public int describeContents() {
        return 0;
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        parcel.writeString(this.f49571d);
        parcel.writeFloat(this.f49572e);
        parcel.writeFloat(this.f49573i);
    }

    protected a(Parcel parcel) {
        this.f49571d = parcel.readString();
        this.f49572e = parcel.readFloat();
        this.f49573i = parcel.readFloat();
    }
}
