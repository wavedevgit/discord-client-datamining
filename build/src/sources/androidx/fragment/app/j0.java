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
    final String f4722d;

    /* renamed from: e  reason: collision with root package name */
    final String f4723e;

    /* renamed from: i  reason: collision with root package name */
    final boolean f4724i;

    /* renamed from: o  reason: collision with root package name */
    final boolean f4725o;

    /* renamed from: p  reason: collision with root package name */
    final int f4726p;

    /* renamed from: q  reason: collision with root package name */
    final int f4727q;

    /* renamed from: r  reason: collision with root package name */
    final String f4728r;

    /* renamed from: s  reason: collision with root package name */
    final boolean f4729s;

    /* renamed from: t  reason: collision with root package name */
    final boolean f4730t;

    /* renamed from: u  reason: collision with root package name */
    final boolean f4731u;

    /* renamed from: v  reason: collision with root package name */
    final boolean f4732v;

    /* renamed from: w  reason: collision with root package name */
    final int f4733w;

    /* renamed from: x  reason: collision with root package name */
    final String f4734x;

    /* renamed from: y  reason: collision with root package name */
    final int f4735y;

    /* renamed from: z  reason: collision with root package name */
    final boolean f4736z;

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
        this.f4722d = fragment.getClass().getName();
        this.f4723e = fragment.mWho;
        this.f4724i = fragment.mFromLayout;
        this.f4725o = fragment.mInDynamicContainer;
        this.f4726p = fragment.mFragmentId;
        this.f4727q = fragment.mContainerId;
        this.f4728r = fragment.mTag;
        this.f4729s = fragment.mRetainInstance;
        this.f4730t = fragment.mRemoving;
        this.f4731u = fragment.mDetached;
        this.f4732v = fragment.mHidden;
        this.f4733w = fragment.mMaxState.ordinal();
        this.f4734x = fragment.mTargetWho;
        this.f4735y = fragment.mTargetRequestCode;
        this.f4736z = fragment.mUserVisibleHint;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public Fragment a(u uVar, ClassLoader classLoader) {
        Fragment a10 = uVar.a(classLoader, this.f4722d);
        a10.mWho = this.f4723e;
        a10.mFromLayout = this.f4724i;
        a10.mInDynamicContainer = this.f4725o;
        a10.mRestored = true;
        a10.mFragmentId = this.f4726p;
        a10.mContainerId = this.f4727q;
        a10.mTag = this.f4728r;
        a10.mRetainInstance = this.f4729s;
        a10.mRemoving = this.f4730t;
        a10.mDetached = this.f4731u;
        a10.mHidden = this.f4732v;
        a10.mMaxState = Lifecycle.State.values()[this.f4733w];
        a10.mTargetWho = this.f4734x;
        a10.mTargetRequestCode = this.f4735y;
        a10.mUserVisibleHint = this.f4736z;
        return a10;
    }

    @Override // android.os.Parcelable
    public int describeContents() {
        return 0;
    }

    public String toString() {
        StringBuilder sb2 = new StringBuilder((int) IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT);
        sb2.append("FragmentState{");
        sb2.append(this.f4722d);
        sb2.append(" (");
        sb2.append(this.f4723e);
        sb2.append(")}:");
        if (this.f4724i) {
            sb2.append(" fromLayout");
        }
        if (this.f4725o) {
            sb2.append(" dynamicContainer");
        }
        if (this.f4727q != 0) {
            sb2.append(" id=0x");
            sb2.append(Integer.toHexString(this.f4727q));
        }
        String str = this.f4728r;
        if (str != null && !str.isEmpty()) {
            sb2.append(" tag=");
            sb2.append(this.f4728r);
        }
        if (this.f4729s) {
            sb2.append(" retainInstance");
        }
        if (this.f4730t) {
            sb2.append(" removing");
        }
        if (this.f4731u) {
            sb2.append(" detached");
        }
        if (this.f4732v) {
            sb2.append(" hidden");
        }
        if (this.f4734x != null) {
            sb2.append(" targetWho=");
            sb2.append(this.f4734x);
            sb2.append(" targetRequestCode=");
            sb2.append(this.f4735y);
        }
        if (this.f4736z) {
            sb2.append(" userVisibleHint");
        }
        return sb2.toString();
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        parcel.writeString(this.f4722d);
        parcel.writeString(this.f4723e);
        parcel.writeInt(this.f4724i ? 1 : 0);
        parcel.writeInt(this.f4725o ? 1 : 0);
        parcel.writeInt(this.f4726p);
        parcel.writeInt(this.f4727q);
        parcel.writeString(this.f4728r);
        parcel.writeInt(this.f4729s ? 1 : 0);
        parcel.writeInt(this.f4730t ? 1 : 0);
        parcel.writeInt(this.f4731u ? 1 : 0);
        parcel.writeInt(this.f4732v ? 1 : 0);
        parcel.writeInt(this.f4733w);
        parcel.writeString(this.f4734x);
        parcel.writeInt(this.f4735y);
        parcel.writeInt(this.f4736z ? 1 : 0);
    }

    j0(Parcel parcel) {
        this.f4722d = parcel.readString();
        this.f4723e = parcel.readString();
        this.f4724i = parcel.readInt() != 0;
        this.f4725o = parcel.readInt() != 0;
        this.f4726p = parcel.readInt();
        this.f4727q = parcel.readInt();
        this.f4728r = parcel.readString();
        this.f4729s = parcel.readInt() != 0;
        this.f4730t = parcel.readInt() != 0;
        this.f4731u = parcel.readInt() != 0;
        this.f4732v = parcel.readInt() != 0;
        this.f4733w = parcel.readInt();
        this.f4734x = parcel.readString();
        this.f4735y = parcel.readInt();
        this.f4736z = parcel.readInt() != 0;
    }
}
