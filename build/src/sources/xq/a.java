package xq;

import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class a implements Parcelable {
    public static final Parcelable.Creator<a> CREATOR = new C0732a();

    /* renamed from: d  reason: collision with root package name */
    private final String f54739d;

    /* renamed from: e  reason: collision with root package name */
    private final float f54740e;

    /* renamed from: i  reason: collision with root package name */
    private final float f54741i;

    /* renamed from: xq.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    class C0732a implements Parcelable.Creator {
        C0732a() {
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
        this.f54739d = str;
        this.f54740e = f10;
        this.f54741i = f11;
    }

    public String a() {
        return this.f54739d;
    }

    public float b() {
        return this.f54740e;
    }

    public float c() {
        return this.f54741i;
    }

    @Override // android.os.Parcelable
    public int describeContents() {
        return 0;
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        parcel.writeString(this.f54739d);
        parcel.writeFloat(this.f54740e);
        parcel.writeFloat(this.f54741i);
    }

    protected a(Parcel parcel) {
        this.f54739d = parcel.readString();
        this.f54740e = parcel.readFloat();
        this.f54741i = parcel.readFloat();
    }
}
