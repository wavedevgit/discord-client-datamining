package pq;

import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class a implements Parcelable {
    public static final Parcelable.Creator<a> CREATOR = new C0556a();

    /* renamed from: d  reason: collision with root package name */
    private final String f46155d;

    /* renamed from: e  reason: collision with root package name */
    private final float f46156e;

    /* renamed from: i  reason: collision with root package name */
    private final float f46157i;

    /* renamed from: pq.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    class C0556a implements Parcelable.Creator {
        C0556a() {
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
        this.f46155d = str;
        this.f46156e = f10;
        this.f46157i = f11;
    }

    public String a() {
        return this.f46155d;
    }

    public float b() {
        return this.f46156e;
    }

    public float c() {
        return this.f46157i;
    }

    @Override // android.os.Parcelable
    public int describeContents() {
        return 0;
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        parcel.writeString(this.f46155d);
        parcel.writeFloat(this.f46156e);
        parcel.writeFloat(this.f46157i);
    }

    protected a(Parcel parcel) {
        this.f46155d = parcel.readString();
        this.f46156e = parcel.readFloat();
        this.f46157i = parcel.readFloat();
    }
}
