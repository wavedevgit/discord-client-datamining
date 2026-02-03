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
    ArrayList f4288d;

    /* renamed from: e  reason: collision with root package name */
    ArrayList f4289e;

    /* renamed from: i  reason: collision with root package name */
    b[] f4290i;

    /* renamed from: o  reason: collision with root package name */
    int f4291o;

    /* renamed from: p  reason: collision with root package name */
    String f4292p;

    /* renamed from: q  reason: collision with root package name */
    ArrayList f4293q;

    /* renamed from: r  reason: collision with root package name */
    ArrayList f4294r;

    /* renamed from: s  reason: collision with root package name */
    ArrayList f4295s;

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
        this.f4292p = null;
        this.f4293q = new ArrayList();
        this.f4294r = new ArrayList();
    }

    @Override // android.os.Parcelable
    public int describeContents() {
        return 0;
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        parcel.writeStringList(this.f4288d);
        parcel.writeStringList(this.f4289e);
        parcel.writeTypedArray(this.f4290i, i10);
        parcel.writeInt(this.f4291o);
        parcel.writeString(this.f4292p);
        parcel.writeStringList(this.f4293q);
        parcel.writeTypedList(this.f4294r);
        parcel.writeTypedList(this.f4295s);
    }

    public f0(Parcel parcel) {
        this.f4292p = null;
        this.f4293q = new ArrayList();
        this.f4294r = new ArrayList();
        this.f4288d = parcel.createStringArrayList();
        this.f4289e = parcel.createStringArrayList();
        this.f4290i = (b[]) parcel.createTypedArray(b.CREATOR);
        this.f4291o = parcel.readInt();
        this.f4292p = parcel.readString();
        this.f4293q = parcel.createStringArrayList();
        this.f4294r = parcel.createTypedArrayList(c.CREATOR);
        this.f4295s = parcel.createTypedArrayList(FragmentManager.m.CREATOR);
    }
}
