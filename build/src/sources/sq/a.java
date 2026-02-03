package sq;

import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class a implements Parcelable {
    public static final Parcelable.Creator<a> CREATOR = new C0613a();

    /* renamed from: d  reason: collision with root package name */
    private final String f49574d;

    /* renamed from: e  reason: collision with root package name */
    private final float f49575e;

    /* renamed from: i  reason: collision with root package name */
    private final float f49576i;

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
        this.f49574d = str;
        this.f49575e = f10;
        this.f49576i = f11;
    }

    public String a() {
        return this.f49574d;
    }

    public float b() {
        return this.f49575e;
    }

    public float c() {
        return this.f49576i;
    }

    @Override // android.os.Parcelable
    public int describeContents() {
        return 0;
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        parcel.writeString(this.f49574d);
        parcel.writeFloat(this.f49575e);
        parcel.writeFloat(this.f49576i);
    }

    protected a(Parcel parcel) {
        this.f49574d = parcel.readString();
        this.f49575e = parcel.readFloat();
        this.f49576i = parcel.readFloat();
    }
}
