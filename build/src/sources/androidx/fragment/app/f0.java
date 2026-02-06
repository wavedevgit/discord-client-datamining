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
    ArrayList f4698d;

    /* renamed from: e  reason: collision with root package name */
    ArrayList f4699e;

    /* renamed from: i  reason: collision with root package name */
    b[] f4700i;

    /* renamed from: o  reason: collision with root package name */
    int f4701o;

    /* renamed from: p  reason: collision with root package name */
    String f4702p;

    /* renamed from: q  reason: collision with root package name */
    ArrayList f4703q;

    /* renamed from: r  reason: collision with root package name */
    ArrayList f4704r;

    /* renamed from: s  reason: collision with root package name */
    ArrayList f4705s;

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
        this.f4702p = null;
        this.f4703q = new ArrayList();
        this.f4704r = new ArrayList();
    }

    @Override // android.os.Parcelable
    public int describeContents() {
        return 0;
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        parcel.writeStringList(this.f4698d);
        parcel.writeStringList(this.f4699e);
        parcel.writeTypedArray(this.f4700i, i10);
        parcel.writeInt(this.f4701o);
        parcel.writeString(this.f4702p);
        parcel.writeStringList(this.f4703q);
        parcel.writeTypedList(this.f4704r);
        parcel.writeTypedList(this.f4705s);
    }

    public f0(Parcel parcel) {
        this.f4702p = null;
        this.f4703q = new ArrayList();
        this.f4704r = new ArrayList();
        this.f4698d = parcel.createStringArrayList();
        this.f4699e = parcel.createStringArrayList();
        this.f4700i = (b[]) parcel.createTypedArray(b.CREATOR);
        this.f4701o = parcel.readInt();
        this.f4702p = parcel.readString();
        this.f4703q = parcel.createStringArrayList();
        this.f4704r = parcel.createTypedArrayList(c.CREATOR);
        this.f4705s = parcel.createTypedArrayList(FragmentManager.m.CREATOR);
    }
}
