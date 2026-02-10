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
    ArrayList f4405d;

    /* renamed from: e  reason: collision with root package name */
    ArrayList f4406e;

    /* renamed from: i  reason: collision with root package name */
    b[] f4407i;

    /* renamed from: o  reason: collision with root package name */
    int f4408o;

    /* renamed from: p  reason: collision with root package name */
    String f4409p;

    /* renamed from: q  reason: collision with root package name */
    ArrayList f4410q;

    /* renamed from: r  reason: collision with root package name */
    ArrayList f4411r;

    /* renamed from: s  reason: collision with root package name */
    ArrayList f4412s;

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
        this.f4409p = null;
        this.f4410q = new ArrayList();
        this.f4411r = new ArrayList();
    }

    @Override // android.os.Parcelable
    public int describeContents() {
        return 0;
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        parcel.writeStringList(this.f4405d);
        parcel.writeStringList(this.f4406e);
        parcel.writeTypedArray(this.f4407i, i10);
        parcel.writeInt(this.f4408o);
        parcel.writeString(this.f4409p);
        parcel.writeStringList(this.f4410q);
        parcel.writeTypedList(this.f4411r);
        parcel.writeTypedList(this.f4412s);
    }

    public f0(Parcel parcel) {
        this.f4409p = null;
        this.f4410q = new ArrayList();
        this.f4411r = new ArrayList();
        this.f4405d = parcel.createStringArrayList();
        this.f4406e = parcel.createStringArrayList();
        this.f4407i = (b[]) parcel.createTypedArray(b.CREATOR);
        this.f4408o = parcel.readInt();
        this.f4409p = parcel.readString();
        this.f4410q = parcel.createStringArrayList();
        this.f4411r = parcel.createTypedArrayList(c.CREATOR);
        this.f4412s = parcel.createTypedArrayList(FragmentManager.m.CREATOR);
    }
}
