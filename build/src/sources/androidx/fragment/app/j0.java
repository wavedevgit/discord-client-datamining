package androidx.fragment.app;

import android.os.Parcel;
import android.os.Parcelable;
import androidx.lifecycle.Lifecycle;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class j0 implements Parcelable {
    public static final Parcelable.Creator<j0> CREATOR = new a();

    /* renamed from: d  reason: collision with root package name */
    final String f4393d;

    /* renamed from: e  reason: collision with root package name */
    final String f4394e;

    /* renamed from: i  reason: collision with root package name */
    final boolean f4395i;

    /* renamed from: o  reason: collision with root package name */
    final boolean f4396o;

    /* renamed from: p  reason: collision with root package name */
    final int f4397p;

    /* renamed from: q  reason: collision with root package name */
    final int f4398q;

    /* renamed from: r  reason: collision with root package name */
    final String f4399r;

    /* renamed from: s  reason: collision with root package name */
    final boolean f4400s;

    /* renamed from: t  reason: collision with root package name */
    final boolean f4401t;

    /* renamed from: u  reason: collision with root package name */
    final boolean f4402u;

    /* renamed from: v  reason: collision with root package name */
    final boolean f4403v;

    /* renamed from: w  reason: collision with root package name */
    final int f4404w;

    /* renamed from: x  reason: collision with root package name */
    final String f4405x;

    /* renamed from: y  reason: collision with root package name */
    final int f4406y;

    /* renamed from: z  reason: collision with root package name */
    final boolean f4407z;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class a implements Parcelable.Creator {
        a() {
        }

        @Override // android.os.Parcelable.Creator
        /* renamed from: a */
        public j0 createFromParcel(Parcel parcel) {
            return new j0(parcel);
        }

        @Override // android.os.Parcelable.Creator
        /* renamed from: b */
        public j0[] newArray(int i10) {
            return new j0[i10];
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public j0(Fragment fragment) {
        this.f4393d = fragment.getClass().getName();
        this.f4394e = fragment.mWho;
        this.f4395i = fragment.mFromLayout;
        this.f4396o = fragment.mInDynamicContainer;
        this.f4397p = fragment.mFragmentId;
        this.f4398q = fragment.mContainerId;
        this.f4399r = fragment.mTag;
        this.f4400s = fragment.mRetainInstance;
        this.f4401t = fragment.mRemoving;
        this.f4402u = fragment.mDetached;
        this.f4403v = fragment.mHidden;
        this.f4404w = fragment.mMaxState.ordinal();
        this.f4405x = fragment.mTargetWho;
        this.f4406y = fragment.mTargetRequestCode;
        this.f4407z = fragment.mUserVisibleHint;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public Fragment a(u uVar, ClassLoader classLoader) {
        Fragment a10 = uVar.a(classLoader, this.f4393d);
        a10.mWho = this.f4394e;
        a10.mFromLayout = this.f4395i;
        a10.mInDynamicContainer = this.f4396o;
        a10.mRestored = true;
        a10.mFragmentId = this.f4397p;
        a10.mContainerId = this.f4398q;
        a10.mTag = this.f4399r;
        a10.mRetainInstance = this.f4400s;
        a10.mRemoving = this.f4401t;
        a10.mDetached = this.f4402u;
        a10.mHidden = this.f4403v;
        a10.mMaxState = Lifecycle.State.values()[this.f4404w];
        a10.mTargetWho = this.f4405x;
        a10.mTargetRequestCode = this.f4406y;
        a10.mUserVisibleHint = this.f4407z;
        return a10;
    }

    @Override // android.os.Parcelable
    public int describeContents() {
        return 0;
    }

    public String toString() {
        StringBuilder sb2 = new StringBuilder((int) IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT);
        sb2.append("FragmentState{");
        sb2.append(this.f4393d);
        sb2.append(" (");
        sb2.append(this.f4394e);
        sb2.append(")}:");
        if (this.f4395i) {
            sb2.append(" fromLayout");
        }
        if (this.f4396o) {
            sb2.append(" dynamicContainer");
        }
        if (this.f4398q != 0) {
            sb2.append(" id=0x");
            sb2.append(Integer.toHexString(this.f4398q));
        }
        String str = this.f4399r;
        if (str != null && !str.isEmpty()) {
            sb2.append(" tag=");
            sb2.append(this.f4399r);
        }
        if (this.f4400s) {
            sb2.append(" retainInstance");
        }
        if (this.f4401t) {
            sb2.append(" removing");
        }
        if (this.f4402u) {
            sb2.append(" detached");
        }
        if (this.f4403v) {
            sb2.append(" hidden");
        }
        if (this.f4405x != null) {
            sb2.append(" targetWho=");
            sb2.append(this.f4405x);
            sb2.append(" targetRequestCode=");
            sb2.append(this.f4406y);
        }
        if (this.f4407z) {
            sb2.append(" userVisibleHint");
        }
        return sb2.toString();
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        parcel.writeString(this.f4393d);
        parcel.writeString(this.f4394e);
        parcel.writeInt(this.f4395i ? 1 : 0);
        parcel.writeInt(this.f4396o ? 1 : 0);
        parcel.writeInt(this.f4397p);
        parcel.writeInt(this.f4398q);
        parcel.writeString(this.f4399r);
        parcel.writeInt(this.f4400s ? 1 : 0);
        parcel.writeInt(this.f4401t ? 1 : 0);
        parcel.writeInt(this.f4402u ? 1 : 0);
        parcel.writeInt(this.f4403v ? 1 : 0);
        parcel.writeInt(this.f4404w);
        parcel.writeString(this.f4405x);
        parcel.writeInt(this.f4406y);
        parcel.writeInt(this.f4407z ? 1 : 0);
    }

    j0(Parcel parcel) {
        this.f4393d = parcel.readString();
        this.f4394e = parcel.readString();
        this.f4395i = parcel.readInt() != 0;
        this.f4396o = parcel.readInt() != 0;
        this.f4397p = parcel.readInt();
        this.f4398q = parcel.readInt();
        this.f4399r = parcel.readString();
        this.f4400s = parcel.readInt() != 0;
        this.f4401t = parcel.readInt() != 0;
        this.f4402u = parcel.readInt() != 0;
        this.f4403v = parcel.readInt() != 0;
        this.f4404w = parcel.readInt();
        this.f4405x = parcel.readString();
        this.f4406y = parcel.readInt();
        this.f4407z = parcel.readInt() != 0;
    }
}
