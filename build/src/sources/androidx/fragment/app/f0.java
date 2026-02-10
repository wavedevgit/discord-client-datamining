package androidx.fragment.app;

import android.os.Parcel;
import android.os.Parcelable;
import androidx.fragment.app.FragmentManager;
import java.util.ArrayList;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class f0 implements Parcelable {
    public static final Parcelable.Creator<f0> CREATOR = new a();

    /* renamed from: d  reason: collision with root package name */
    ArrayList f4395d;

    /* renamed from: e  reason: collision with root package name */
    ArrayList f4396e;

    /* renamed from: i  reason: collision with root package name */
    b[] f4397i;

    /* renamed from: o  reason: collision with root package name */
    int f4398o;

    /* renamed from: p  reason: collision with root package name */
    String f4399p;

    /* renamed from: q  reason: collision with root package name */
    ArrayList f4400q;

    /* renamed from: r  reason: collision with root package name */
    ArrayList f4401r;

    /* renamed from: s  reason: collision with root package name */
    ArrayList f4402s;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class a implements Parcelable.Creator {
        a() {
        }

        @Override // android.os.Parcelable.Creator
        /* renamed from: a */
        public f0 createFromParcel(Parcel parcel) {
            return new f0(parcel);
        }

        @Override // android.os.Parcelable.Creator
        /* renamed from: b */
        public f0[] newArray(int i10) {
            return new f0[i10];
        }
    }

    public f0() {
        this.f4399p = null;
        this.f4400q = new ArrayList();
        this.f4401r = new ArrayList();
    }

    @Override // android.os.Parcelable
    public int describeContents() {
        return 0;
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        parcel.writeStringList(this.f4395d);
        parcel.writeStringList(this.f4396e);
        parcel.writeTypedArray(this.f4397i, i10);
        parcel.writeInt(this.f4398o);
        parcel.writeString(this.f4399p);
        parcel.writeStringList(this.f4400q);
        parcel.writeTypedList(this.f4401r);
        parcel.writeTypedList(this.f4402s);
    }

    public f0(Parcel parcel) {
        this.f4399p = null;
        this.f4400q = new ArrayList();
        this.f4401r = new ArrayList();
        this.f4395d = parcel.createStringArrayList();
        this.f4396e = parcel.createStringArrayList();
        this.f4397i = (b[]) parcel.createTypedArray(b.CREATOR);
        this.f4398o = parcel.readInt();
        this.f4399p = parcel.readString();
        this.f4400q = parcel.createStringArrayList();
        this.f4401r = parcel.createTypedArrayList(c.CREATOR);
        this.f4402s = parcel.createTypedArrayList(FragmentManager.m.CREATOR);
    }
}
