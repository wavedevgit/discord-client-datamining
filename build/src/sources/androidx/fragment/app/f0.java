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
    ArrayList f4369d;

    /* renamed from: e  reason: collision with root package name */
    ArrayList f4370e;

    /* renamed from: i  reason: collision with root package name */
    b[] f4371i;

    /* renamed from: o  reason: collision with root package name */
    int f4372o;

    /* renamed from: p  reason: collision with root package name */
    String f4373p;

    /* renamed from: q  reason: collision with root package name */
    ArrayList f4374q;

    /* renamed from: r  reason: collision with root package name */
    ArrayList f4375r;

    /* renamed from: s  reason: collision with root package name */
    ArrayList f4376s;

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
        this.f4373p = null;
        this.f4374q = new ArrayList();
        this.f4375r = new ArrayList();
    }

    @Override // android.os.Parcelable
    public int describeContents() {
        return 0;
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        parcel.writeStringList(this.f4369d);
        parcel.writeStringList(this.f4370e);
        parcel.writeTypedArray(this.f4371i, i10);
        parcel.writeInt(this.f4372o);
        parcel.writeString(this.f4373p);
        parcel.writeStringList(this.f4374q);
        parcel.writeTypedList(this.f4375r);
        parcel.writeTypedList(this.f4376s);
    }

    public f0(Parcel parcel) {
        this.f4373p = null;
        this.f4374q = new ArrayList();
        this.f4375r = new ArrayList();
        this.f4369d = parcel.createStringArrayList();
        this.f4370e = parcel.createStringArrayList();
        this.f4371i = (b[]) parcel.createTypedArray(b.CREATOR);
        this.f4372o = parcel.readInt();
        this.f4373p = parcel.readString();
        this.f4374q = parcel.createStringArrayList();
        this.f4375r = parcel.createTypedArrayList(c.CREATOR);
        this.f4376s = parcel.createTypedArrayList(FragmentManager.m.CREATOR);
    }
}
