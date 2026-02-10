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
    final String f4429d;

    /* renamed from: e  reason: collision with root package name */
    final String f4430e;

    /* renamed from: i  reason: collision with root package name */
    final boolean f4431i;

    /* renamed from: o  reason: collision with root package name */
    final boolean f4432o;

    /* renamed from: p  reason: collision with root package name */
    final int f4433p;

    /* renamed from: q  reason: collision with root package name */
    final int f4434q;

    /* renamed from: r  reason: collision with root package name */
    final String f4435r;

    /* renamed from: s  reason: collision with root package name */
    final boolean f4436s;

    /* renamed from: t  reason: collision with root package name */
    final boolean f4437t;

    /* renamed from: u  reason: collision with root package name */
    final boolean f4438u;

    /* renamed from: v  reason: collision with root package name */
    final boolean f4439v;

    /* renamed from: w  reason: collision with root package name */
    final int f4440w;

    /* renamed from: x  reason: collision with root package name */
    final String f4441x;

    /* renamed from: y  reason: collision with root package name */
    final int f4442y;

    /* renamed from: z  reason: collision with root package name */
    final boolean f4443z;

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
        this.f4429d = fragment.getClass().getName();
        this.f4430e = fragment.mWho;
        this.f4431i = fragment.mFromLayout;
        this.f4432o = fragment.mInDynamicContainer;
        this.f4433p = fragment.mFragmentId;
        this.f4434q = fragment.mContainerId;
        this.f4435r = fragment.mTag;
        this.f4436s = fragment.mRetainInstance;
        this.f4437t = fragment.mRemoving;
        this.f4438u = fragment.mDetached;
        this.f4439v = fragment.mHidden;
        this.f4440w = fragment.mMaxState.ordinal();
        this.f4441x = fragment.mTargetWho;
        this.f4442y = fragment.mTargetRequestCode;
        this.f4443z = fragment.mUserVisibleHint;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public Fragment a(u uVar, ClassLoader classLoader) {
        Fragment a10 = uVar.a(classLoader, this.f4429d);
        a10.mWho = this.f4430e;
        a10.mFromLayout = this.f4431i;
        a10.mInDynamicContainer = this.f4432o;
        a10.mRestored = true;
        a10.mFragmentId = this.f4433p;
        a10.mContainerId = this.f4434q;
        a10.mTag = this.f4435r;
        a10.mRetainInstance = this.f4436s;
        a10.mRemoving = this.f4437t;
        a10.mDetached = this.f4438u;
        a10.mHidden = this.f4439v;
        a10.mMaxState = Lifecycle.State.values()[this.f4440w];
        a10.mTargetWho = this.f4441x;
        a10.mTargetRequestCode = this.f4442y;
        a10.mUserVisibleHint = this.f4443z;
        return a10;
    }

    @Override // android.os.Parcelable
    public int describeContents() {
        return 0;
    }

    public String toString() {
        StringBuilder sb2 = new StringBuilder((int) IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT);
        sb2.append("FragmentState{");
        sb2.append(this.f4429d);
        sb2.append(" (");
        sb2.append(this.f4430e);
        sb2.append(")}:");
        if (this.f4431i) {
            sb2.append(" fromLayout");
        }
        if (this.f4432o) {
            sb2.append(" dynamicContainer");
        }
        if (this.f4434q != 0) {
            sb2.append(" id=0x");
            sb2.append(Integer.toHexString(this.f4434q));
        }
        String str = this.f4435r;
        if (str != null && !str.isEmpty()) {
            sb2.append(" tag=");
            sb2.append(this.f4435r);
        }
        if (this.f4436s) {
            sb2.append(" retainInstance");
        }
        if (this.f4437t) {
            sb2.append(" removing");
        }
        if (this.f4438u) {
            sb2.append(" detached");
        }
        if (this.f4439v) {
            sb2.append(" hidden");
        }
        if (this.f4441x != null) {
            sb2.append(" targetWho=");
            sb2.append(this.f4441x);
            sb2.append(" targetRequestCode=");
            sb2.append(this.f4442y);
        }
        if (this.f4443z) {
            sb2.append(" userVisibleHint");
        }
        return sb2.toString();
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        parcel.writeString(this.f4429d);
        parcel.writeString(this.f4430e);
        parcel.writeInt(this.f4431i ? 1 : 0);
        parcel.writeInt(this.f4432o ? 1 : 0);
        parcel.writeInt(this.f4433p);
        parcel.writeInt(this.f4434q);
        parcel.writeString(this.f4435r);
        parcel.writeInt(this.f4436s ? 1 : 0);
        parcel.writeInt(this.f4437t ? 1 : 0);
        parcel.writeInt(this.f4438u ? 1 : 0);
        parcel.writeInt(this.f4439v ? 1 : 0);
        parcel.writeInt(this.f4440w);
        parcel.writeString(this.f4441x);
        parcel.writeInt(this.f4442y);
        parcel.writeInt(this.f4443z ? 1 : 0);
    }

    j0(Parcel parcel) {
        this.f4429d = parcel.readString();
        this.f4430e = parcel.readString();
        this.f4431i = parcel.readInt() != 0;
        this.f4432o = parcel.readInt() != 0;
        this.f4433p = parcel.readInt();
        this.f4434q = parcel.readInt();
        this.f4435r = parcel.readString();
        this.f4436s = parcel.readInt() != 0;
        this.f4437t = parcel.readInt() != 0;
        this.f4438u = parcel.readInt() != 0;
        this.f4439v = parcel.readInt() != 0;
        this.f4440w = parcel.readInt();
        this.f4441x = parcel.readString();
        this.f4442y = parcel.readInt();
        this.f4443z = parcel.readInt() != 0;
    }
}
