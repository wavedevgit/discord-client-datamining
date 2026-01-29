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
    final String f4268d;

    /* renamed from: e  reason: collision with root package name */
    final String f4269e;

    /* renamed from: i  reason: collision with root package name */
    final boolean f4270i;

    /* renamed from: o  reason: collision with root package name */
    final boolean f4271o;

    /* renamed from: p  reason: collision with root package name */
    final int f4272p;

    /* renamed from: q  reason: collision with root package name */
    final int f4273q;

    /* renamed from: r  reason: collision with root package name */
    final String f4274r;

    /* renamed from: s  reason: collision with root package name */
    final boolean f4275s;

    /* renamed from: t  reason: collision with root package name */
    final boolean f4276t;

    /* renamed from: u  reason: collision with root package name */
    final boolean f4277u;

    /* renamed from: v  reason: collision with root package name */
    final boolean f4278v;

    /* renamed from: w  reason: collision with root package name */
    final int f4279w;

    /* renamed from: x  reason: collision with root package name */
    final String f4280x;

    /* renamed from: y  reason: collision with root package name */
    final int f4281y;

    /* renamed from: z  reason: collision with root package name */
    final boolean f4282z;

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
        this.f4268d = fragment.getClass().getName();
        this.f4269e = fragment.mWho;
        this.f4270i = fragment.mFromLayout;
        this.f4271o = fragment.mInDynamicContainer;
        this.f4272p = fragment.mFragmentId;
        this.f4273q = fragment.mContainerId;
        this.f4274r = fragment.mTag;
        this.f4275s = fragment.mRetainInstance;
        this.f4276t = fragment.mRemoving;
        this.f4277u = fragment.mDetached;
        this.f4278v = fragment.mHidden;
        this.f4279w = fragment.mMaxState.ordinal();
        this.f4280x = fragment.mTargetWho;
        this.f4281y = fragment.mTargetRequestCode;
        this.f4282z = fragment.mUserVisibleHint;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public Fragment a(u uVar, ClassLoader classLoader) {
        Fragment a10 = uVar.a(classLoader, this.f4268d);
        a10.mWho = this.f4269e;
        a10.mFromLayout = this.f4270i;
        a10.mInDynamicContainer = this.f4271o;
        a10.mRestored = true;
        a10.mFragmentId = this.f4272p;
        a10.mContainerId = this.f4273q;
        a10.mTag = this.f4274r;
        a10.mRetainInstance = this.f4275s;
        a10.mRemoving = this.f4276t;
        a10.mDetached = this.f4277u;
        a10.mHidden = this.f4278v;
        a10.mMaxState = Lifecycle.State.values()[this.f4279w];
        a10.mTargetWho = this.f4280x;
        a10.mTargetRequestCode = this.f4281y;
        a10.mUserVisibleHint = this.f4282z;
        return a10;
    }

    @Override // android.os.Parcelable
    public int describeContents() {
        return 0;
    }

    public String toString() {
        StringBuilder sb2 = new StringBuilder((int) IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT);
        sb2.append("FragmentState{");
        sb2.append(this.f4268d);
        sb2.append(" (");
        sb2.append(this.f4269e);
        sb2.append(")}:");
        if (this.f4270i) {
            sb2.append(" fromLayout");
        }
        if (this.f4271o) {
            sb2.append(" dynamicContainer");
        }
        if (this.f4273q != 0) {
            sb2.append(" id=0x");
            sb2.append(Integer.toHexString(this.f4273q));
        }
        String str = this.f4274r;
        if (str != null && !str.isEmpty()) {
            sb2.append(" tag=");
            sb2.append(this.f4274r);
        }
        if (this.f4275s) {
            sb2.append(" retainInstance");
        }
        if (this.f4276t) {
            sb2.append(" removing");
        }
        if (this.f4277u) {
            sb2.append(" detached");
        }
        if (this.f4278v) {
            sb2.append(" hidden");
        }
        if (this.f4280x != null) {
            sb2.append(" targetWho=");
            sb2.append(this.f4280x);
            sb2.append(" targetRequestCode=");
            sb2.append(this.f4281y);
        }
        if (this.f4282z) {
            sb2.append(" userVisibleHint");
        }
        return sb2.toString();
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        parcel.writeString(this.f4268d);
        parcel.writeString(this.f4269e);
        parcel.writeInt(this.f4270i ? 1 : 0);
        parcel.writeInt(this.f4271o ? 1 : 0);
        parcel.writeInt(this.f4272p);
        parcel.writeInt(this.f4273q);
        parcel.writeString(this.f4274r);
        parcel.writeInt(this.f4275s ? 1 : 0);
        parcel.writeInt(this.f4276t ? 1 : 0);
        parcel.writeInt(this.f4277u ? 1 : 0);
        parcel.writeInt(this.f4278v ? 1 : 0);
        parcel.writeInt(this.f4279w);
        parcel.writeString(this.f4280x);
        parcel.writeInt(this.f4281y);
        parcel.writeInt(this.f4282z ? 1 : 0);
    }

    j0(Parcel parcel) {
        this.f4268d = parcel.readString();
        this.f4269e = parcel.readString();
        this.f4270i = parcel.readInt() != 0;
        this.f4271o = parcel.readInt() != 0;
        this.f4272p = parcel.readInt();
        this.f4273q = parcel.readInt();
        this.f4274r = parcel.readString();
        this.f4275s = parcel.readInt() != 0;
        this.f4276t = parcel.readInt() != 0;
        this.f4277u = parcel.readInt() != 0;
        this.f4278v = parcel.readInt() != 0;
        this.f4279w = parcel.readInt();
        this.f4280x = parcel.readString();
        this.f4281y = parcel.readInt();
        this.f4282z = parcel.readInt() != 0;
    }
}
