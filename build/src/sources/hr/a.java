package hr;

import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class a implements Parcelable {
    public static final Parcelable.Creator<a> CREATOR = new C0371a();

    /* renamed from: d  reason: collision with root package name */
    private final String f28213d;

    /* renamed from: e  reason: collision with root package name */
    private final float f28214e;

    /* renamed from: i  reason: collision with root package name */
    private final float f28215i;

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
        this.f28213d = str;
        this.f28214e = f10;
        this.f28215i = f11;
    }

    public String a() {
        return this.f28213d;
    }

    public float b() {
        return this.f28214e;
    }

    public float c() {
        return this.f28215i;
    }

    @Override // android.os.Parcelable
    public int describeContents() {
        return 0;
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        parcel.writeString(this.f28213d);
        parcel.writeFloat(this.f28214e);
        parcel.writeFloat(this.f28215i);
    }

    protected a(Parcel parcel) {
        this.f28213d = parcel.readString();
        this.f28214e = parcel.readFloat();
        this.f28215i = parcel.readFloat();
    }
}
