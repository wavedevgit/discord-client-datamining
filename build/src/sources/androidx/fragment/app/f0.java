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
    ArrayList f4244d;

    /* renamed from: e  reason: collision with root package name */
    ArrayList f4245e;

    /* renamed from: i  reason: collision with root package name */
    b[] f4246i;

    /* renamed from: o  reason: collision with root package name */
    int f4247o;

    /* renamed from: p  reason: collision with root package name */
    String f4248p;

    /* renamed from: q  reason: collision with root package name */
    ArrayList f4249q;

    /* renamed from: r  reason: collision with root package name */
    ArrayList f4250r;

    /* renamed from: s  reason: collision with root package name */
    ArrayList f4251s;

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
        this.f4248p = null;
        this.f4249q = new ArrayList();
        this.f4250r = new ArrayList();
    }

    @Override // android.os.Parcelable
    public int describeContents() {
        return 0;
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        parcel.writeStringList(this.f4244d);
        parcel.writeStringList(this.f4245e);
        parcel.writeTypedArray(this.f4246i, i10);
        parcel.writeInt(this.f4247o);
        parcel.writeString(this.f4248p);
        parcel.writeStringList(this.f4249q);
        parcel.writeTypedList(this.f4250r);
        parcel.writeTypedList(this.f4251s);
    }

    public f0(Parcel parcel) {
        this.f4248p = null;
        this.f4249q = new ArrayList();
        this.f4250r = new ArrayList();
        this.f4244d = parcel.createStringArrayList();
        this.f4245e = parcel.createStringArrayList();
        this.f4246i = (b[]) parcel.createTypedArray(b.CREATOR);
        this.f4247o = parcel.readInt();
        this.f4248p = parcel.readString();
        this.f4249q = parcel.createStringArrayList();
        this.f4250r = parcel.createTypedArrayList(c.CREATOR);
        this.f4251s = parcel.createTypedArrayList(FragmentManager.m.CREATOR);
    }
}
