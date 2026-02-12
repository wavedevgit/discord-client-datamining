package hr;

import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class a implements Parcelable {
    public static final Parcelable.Creator<a> CREATOR = new C0371a();

    /* renamed from: d  reason: collision with root package name */
    private final String f27645d;

    /* renamed from: e  reason: collision with root package name */
    private final float f27646e;

    /* renamed from: i  reason: collision with root package name */
    private final float f27647i;

    /* renamed from: hr.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    class C0371a implements Parcelable.Creator {
        C0371a() {
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
        this.f27645d = str;
        this.f27646e = f10;
        this.f27647i = f11;
    }

    public String a() {
        return this.f27645d;
    }

    public float b() {
        return this.f27646e;
    }

    public float c() {
        return this.f27647i;
    }

    @Override // android.os.Parcelable
    public int describeContents() {
        return 0;
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        parcel.writeString(this.f27645d);
        parcel.writeFloat(this.f27646e);
        parcel.writeFloat(this.f27647i);
    }

    protected a(Parcel parcel) {
        this.f27645d = parcel.readString();
        this.f27646e = parcel.readFloat();
        this.f27647i = parcel.readFloat();
    }
}
