package qq;

import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class a implements Parcelable {
    public static final Parcelable.Creator<a> CREATOR = new C0583a();

    /* renamed from: d  reason: collision with root package name */
    private final String f47812d;

    /* renamed from: e  reason: collision with root package name */
    private final float f47813e;

    /* renamed from: i  reason: collision with root package name */
    private final float f47814i;

    /* renamed from: qq.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    class C0583a implements Parcelable.Creator {
        C0583a() {
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
        this.f47812d = str;
        this.f47813e = f10;
        this.f47814i = f11;
    }

    public String a() {
        return this.f47812d;
    }

    public float b() {
        return this.f47813e;
    }

    public float c() {
        return this.f47814i;
    }

    @Override // android.os.Parcelable
    public int describeContents() {
        return 0;
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        parcel.writeString(this.f47812d);
        parcel.writeFloat(this.f47813e);
        parcel.writeFloat(this.f47814i);
    }

    protected a(Parcel parcel) {
        this.f47812d = parcel.readString();
        this.f47813e = parcel.readFloat();
        this.f47814i = parcel.readFloat();
    }
}
