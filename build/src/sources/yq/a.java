package yq;

import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class a implements Parcelable {
    public static final Parcelable.Creator<a> CREATOR = new C0782a();

    /* renamed from: d  reason: collision with root package name */
    private final String f55722d;

    /* renamed from: e  reason: collision with root package name */
    private final float f55723e;

    /* renamed from: i  reason: collision with root package name */
    private final float f55724i;

    /* renamed from: yq.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    class C0782a implements Parcelable.Creator {
        C0782a() {
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
        this.f55722d = str;
        this.f55723e = f10;
        this.f55724i = f11;
    }

    public String a() {
        return this.f55722d;
    }

    public float b() {
        return this.f55723e;
    }

    public float c() {
        return this.f55724i;
    }

    @Override // android.os.Parcelable
    public int describeContents() {
        return 0;
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        parcel.writeString(this.f55722d);
        parcel.writeFloat(this.f55723e);
        parcel.writeFloat(this.f55724i);
    }

    protected a(Parcel parcel) {
        this.f55722d = parcel.readString();
        this.f55723e = parcel.readFloat();
        this.f55724i = parcel.readFloat();
    }
}
