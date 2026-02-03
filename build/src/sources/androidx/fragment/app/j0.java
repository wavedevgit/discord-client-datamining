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
    final String f4281d;

    /* renamed from: e  reason: collision with root package name */
    final String f4282e;

    /* renamed from: i  reason: collision with root package name */
    final boolean f4283i;

    /* renamed from: o  reason: collision with root package name */
    final boolean f4284o;

    /* renamed from: p  reason: collision with root package name */
    final int f4285p;

    /* renamed from: q  reason: collision with root package name */
    final int f4286q;

    /* renamed from: r  reason: collision with root package name */
    final String f4287r;

    /* renamed from: s  reason: collision with root package name */
    final boolean f4288s;

    /* renamed from: t  reason: collision with root package name */
    final boolean f4289t;

    /* renamed from: u  reason: collision with root package name */
    final boolean f4290u;

    /* renamed from: v  reason: collision with root package name */
    final boolean f4291v;

    /* renamed from: w  reason: collision with root package name */
    final int f4292w;

    /* renamed from: x  reason: collision with root package name */
    final String f4293x;

    /* renamed from: y  reason: collision with root package name */
    final int f4294y;

    /* renamed from: z  reason: collision with root package name */
    final boolean f4295z;

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
        this.f4281d = fragment.getClass().getName();
        this.f4282e = fragment.mWho;
        this.f4283i = fragment.mFromLayout;
        this.f4284o = fragment.mInDynamicContainer;
        this.f4285p = fragment.mFragmentId;
        this.f4286q = fragment.mContainerId;
        this.f4287r = fragment.mTag;
        this.f4288s = fragment.mRetainInstance;
        this.f4289t = fragment.mRemoving;
        this.f4290u = fragment.mDetached;
        this.f4291v = fragment.mHidden;
        this.f4292w = fragment.mMaxState.ordinal();
        this.f4293x = fragment.mTargetWho;
        this.f4294y = fragment.mTargetRequestCode;
        this.f4295z = fragment.mUserVisibleHint;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public Fragment a(u uVar, ClassLoader classLoader) {
        Fragment a10 = uVar.a(classLoader, this.f4281d);
        a10.mWho = this.f4282e;
        a10.mFromLayout = this.f4283i;
        a10.mInDynamicContainer = this.f4284o;
        a10.mRestored = true;
        a10.mFragmentId = this.f4285p;
        a10.mContainerId = this.f4286q;
        a10.mTag = this.f4287r;
        a10.mRetainInstance = this.f4288s;
        a10.mRemoving = this.f4289t;
        a10.mDetached = this.f4290u;
        a10.mHidden = this.f4291v;
        a10.mMaxState = Lifecycle.State.values()[this.f4292w];
        a10.mTargetWho = this.f4293x;
        a10.mTargetRequestCode = this.f4294y;
        a10.mUserVisibleHint = this.f4295z;
        return a10;
    }

    @Override // android.os.Parcelable
    public int describeContents() {
        return 0;
    }

    public String toString() {
        StringBuilder sb2 = new StringBuilder((int) IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT);
        sb2.append("FragmentState{");
        sb2.append(this.f4281d);
        sb2.append(" (");
        sb2.append(this.f4282e);
        sb2.append(")}:");
        if (this.f4283i) {
            sb2.append(" fromLayout");
        }
        if (this.f4284o) {
            sb2.append(" dynamicContainer");
        }
        if (this.f4286q != 0) {
            sb2.append(" id=0x");
            sb2.append(Integer.toHexString(this.f4286q));
        }
        String str = this.f4287r;
        if (str != null && !str.isEmpty()) {
            sb2.append(" tag=");
            sb2.append(this.f4287r);
        }
        if (this.f4288s) {
            sb2.append(" retainInstance");
        }
        if (this.f4289t) {
            sb2.append(" removing");
        }
        if (this.f4290u) {
            sb2.append(" detached");
        }
        if (this.f4291v) {
            sb2.append(" hidden");
        }
        if (this.f4293x != null) {
            sb2.append(" targetWho=");
            sb2.append(this.f4293x);
            sb2.append(" targetRequestCode=");
            sb2.append(this.f4294y);
        }
        if (this.f4295z) {
            sb2.append(" userVisibleHint");
        }
        return sb2.toString();
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        parcel.writeString(this.f4281d);
        parcel.writeString(this.f4282e);
        parcel.writeInt(this.f4283i ? 1 : 0);
        parcel.writeInt(this.f4284o ? 1 : 0);
        parcel.writeInt(this.f4285p);
        parcel.writeInt(this.f4286q);
        parcel.writeString(this.f4287r);
        parcel.writeInt(this.f4288s ? 1 : 0);
        parcel.writeInt(this.f4289t ? 1 : 0);
        parcel.writeInt(this.f4290u ? 1 : 0);
        parcel.writeInt(this.f4291v ? 1 : 0);
        parcel.writeInt(this.f4292w);
        parcel.writeString(this.f4293x);
        parcel.writeInt(this.f4294y);
        parcel.writeInt(this.f4295z ? 1 : 0);
    }

    j0(Parcel parcel) {
        this.f4281d = parcel.readString();
        this.f4282e = parcel.readString();
        this.f4283i = parcel.readInt() != 0;
        this.f4284o = parcel.readInt() != 0;
        this.f4285p = parcel.readInt();
        this.f4286q = parcel.readInt();
        this.f4287r = parcel.readString();
        this.f4288s = parcel.readInt() != 0;
        this.f4289t = parcel.readInt() != 0;
        this.f4290u = parcel.readInt() != 0;
        this.f4291v = parcel.readInt() != 0;
        this.f4292w = parcel.readInt();
        this.f4293x = parcel.readString();
        this.f4294y = parcel.readInt();
        this.f4295z = parcel.readInt() != 0;
    }
}
