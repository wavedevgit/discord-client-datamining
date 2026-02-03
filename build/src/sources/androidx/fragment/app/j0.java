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
    final String f4312d;

    /* renamed from: e  reason: collision with root package name */
    final String f4313e;

    /* renamed from: i  reason: collision with root package name */
    final boolean f4314i;

    /* renamed from: o  reason: collision with root package name */
    final boolean f4315o;

    /* renamed from: p  reason: collision with root package name */
    final int f4316p;

    /* renamed from: q  reason: collision with root package name */
    final int f4317q;

    /* renamed from: r  reason: collision with root package name */
    final String f4318r;

    /* renamed from: s  reason: collision with root package name */
    final boolean f4319s;

    /* renamed from: t  reason: collision with root package name */
    final boolean f4320t;

    /* renamed from: u  reason: collision with root package name */
    final boolean f4321u;

    /* renamed from: v  reason: collision with root package name */
    final boolean f4322v;

    /* renamed from: w  reason: collision with root package name */
    final int f4323w;

    /* renamed from: x  reason: collision with root package name */
    final String f4324x;

    /* renamed from: y  reason: collision with root package name */
    final int f4325y;

    /* renamed from: z  reason: collision with root package name */
    final boolean f4326z;

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
        this.f4312d = fragment.getClass().getName();
        this.f4313e = fragment.mWho;
        this.f4314i = fragment.mFromLayout;
        this.f4315o = fragment.mInDynamicContainer;
        this.f4316p = fragment.mFragmentId;
        this.f4317q = fragment.mContainerId;
        this.f4318r = fragment.mTag;
        this.f4319s = fragment.mRetainInstance;
        this.f4320t = fragment.mRemoving;
        this.f4321u = fragment.mDetached;
        this.f4322v = fragment.mHidden;
        this.f4323w = fragment.mMaxState.ordinal();
        this.f4324x = fragment.mTargetWho;
        this.f4325y = fragment.mTargetRequestCode;
        this.f4326z = fragment.mUserVisibleHint;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public Fragment a(u uVar, ClassLoader classLoader) {
        Fragment a10 = uVar.a(classLoader, this.f4312d);
        a10.mWho = this.f4313e;
        a10.mFromLayout = this.f4314i;
        a10.mInDynamicContainer = this.f4315o;
        a10.mRestored = true;
        a10.mFragmentId = this.f4316p;
        a10.mContainerId = this.f4317q;
        a10.mTag = this.f4318r;
        a10.mRetainInstance = this.f4319s;
        a10.mRemoving = this.f4320t;
        a10.mDetached = this.f4321u;
        a10.mHidden = this.f4322v;
        a10.mMaxState = Lifecycle.State.values()[this.f4323w];
        a10.mTargetWho = this.f4324x;
        a10.mTargetRequestCode = this.f4325y;
        a10.mUserVisibleHint = this.f4326z;
        return a10;
    }

    @Override // android.os.Parcelable
    public int describeContents() {
        return 0;
    }

    public String toString() {
        StringBuilder sb2 = new StringBuilder((int) IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT);
        sb2.append("FragmentState{");
        sb2.append(this.f4312d);
        sb2.append(" (");
        sb2.append(this.f4313e);
        sb2.append(")}:");
        if (this.f4314i) {
            sb2.append(" fromLayout");
        }
        if (this.f4315o) {
            sb2.append(" dynamicContainer");
        }
        if (this.f4317q != 0) {
            sb2.append(" id=0x");
            sb2.append(Integer.toHexString(this.f4317q));
        }
        String str = this.f4318r;
        if (str != null && !str.isEmpty()) {
            sb2.append(" tag=");
            sb2.append(this.f4318r);
        }
        if (this.f4319s) {
            sb2.append(" retainInstance");
        }
        if (this.f4320t) {
            sb2.append(" removing");
        }
        if (this.f4321u) {
            sb2.append(" detached");
        }
        if (this.f4322v) {
            sb2.append(" hidden");
        }
        if (this.f4324x != null) {
            sb2.append(" targetWho=");
            sb2.append(this.f4324x);
            sb2.append(" targetRequestCode=");
            sb2.append(this.f4325y);
        }
        if (this.f4326z) {
            sb2.append(" userVisibleHint");
        }
        return sb2.toString();
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        parcel.writeString(this.f4312d);
        parcel.writeString(this.f4313e);
        parcel.writeInt(this.f4314i ? 1 : 0);
        parcel.writeInt(this.f4315o ? 1 : 0);
        parcel.writeInt(this.f4316p);
        parcel.writeInt(this.f4317q);
        parcel.writeString(this.f4318r);
        parcel.writeInt(this.f4319s ? 1 : 0);
        parcel.writeInt(this.f4320t ? 1 : 0);
        parcel.writeInt(this.f4321u ? 1 : 0);
        parcel.writeInt(this.f4322v ? 1 : 0);
        parcel.writeInt(this.f4323w);
        parcel.writeString(this.f4324x);
        parcel.writeInt(this.f4325y);
        parcel.writeInt(this.f4326z ? 1 : 0);
    }

    j0(Parcel parcel) {
        this.f4312d = parcel.readString();
        this.f4313e = parcel.readString();
        this.f4314i = parcel.readInt() != 0;
        this.f4315o = parcel.readInt() != 0;
        this.f4316p = parcel.readInt();
        this.f4317q = parcel.readInt();
        this.f4318r = parcel.readString();
        this.f4319s = parcel.readInt() != 0;
        this.f4320t = parcel.readInt() != 0;
        this.f4321u = parcel.readInt() != 0;
        this.f4322v = parcel.readInt() != 0;
        this.f4323w = parcel.readInt();
        this.f4324x = parcel.readString();
        this.f4325y = parcel.readInt();
        this.f4326z = parcel.readInt() != 0;
    }
}
