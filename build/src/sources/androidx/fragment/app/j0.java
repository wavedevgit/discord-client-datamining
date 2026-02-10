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
    final String f4419d;

    /* renamed from: e  reason: collision with root package name */
    final String f4420e;

    /* renamed from: i  reason: collision with root package name */
    final boolean f4421i;

    /* renamed from: o  reason: collision with root package name */
    final boolean f4422o;

    /* renamed from: p  reason: collision with root package name */
    final int f4423p;

    /* renamed from: q  reason: collision with root package name */
    final int f4424q;

    /* renamed from: r  reason: collision with root package name */
    final String f4425r;

    /* renamed from: s  reason: collision with root package name */
    final boolean f4426s;

    /* renamed from: t  reason: collision with root package name */
    final boolean f4427t;

    /* renamed from: u  reason: collision with root package name */
    final boolean f4428u;

    /* renamed from: v  reason: collision with root package name */
    final boolean f4429v;

    /* renamed from: w  reason: collision with root package name */
    final int f4430w;

    /* renamed from: x  reason: collision with root package name */
    final String f4431x;

    /* renamed from: y  reason: collision with root package name */
    final int f4432y;

    /* renamed from: z  reason: collision with root package name */
    final boolean f4433z;

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
        this.f4419d = fragment.getClass().getName();
        this.f4420e = fragment.mWho;
        this.f4421i = fragment.mFromLayout;
        this.f4422o = fragment.mInDynamicContainer;
        this.f4423p = fragment.mFragmentId;
        this.f4424q = fragment.mContainerId;
        this.f4425r = fragment.mTag;
        this.f4426s = fragment.mRetainInstance;
        this.f4427t = fragment.mRemoving;
        this.f4428u = fragment.mDetached;
        this.f4429v = fragment.mHidden;
        this.f4430w = fragment.mMaxState.ordinal();
        this.f4431x = fragment.mTargetWho;
        this.f4432y = fragment.mTargetRequestCode;
        this.f4433z = fragment.mUserVisibleHint;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public Fragment a(u uVar, ClassLoader classLoader) {
        Fragment a10 = uVar.a(classLoader, this.f4419d);
        a10.mWho = this.f4420e;
        a10.mFromLayout = this.f4421i;
        a10.mInDynamicContainer = this.f4422o;
        a10.mRestored = true;
        a10.mFragmentId = this.f4423p;
        a10.mContainerId = this.f4424q;
        a10.mTag = this.f4425r;
        a10.mRetainInstance = this.f4426s;
        a10.mRemoving = this.f4427t;
        a10.mDetached = this.f4428u;
        a10.mHidden = this.f4429v;
        a10.mMaxState = Lifecycle.State.values()[this.f4430w];
        a10.mTargetWho = this.f4431x;
        a10.mTargetRequestCode = this.f4432y;
        a10.mUserVisibleHint = this.f4433z;
        return a10;
    }

    @Override // android.os.Parcelable
    public int describeContents() {
        return 0;
    }

    public String toString() {
        StringBuilder sb2 = new StringBuilder((int) IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT);
        sb2.append("FragmentState{");
        sb2.append(this.f4419d);
        sb2.append(" (");
        sb2.append(this.f4420e);
        sb2.append(")}:");
        if (this.f4421i) {
            sb2.append(" fromLayout");
        }
        if (this.f4422o) {
            sb2.append(" dynamicContainer");
        }
        if (this.f4424q != 0) {
            sb2.append(" id=0x");
            sb2.append(Integer.toHexString(this.f4424q));
        }
        String str = this.f4425r;
        if (str != null && !str.isEmpty()) {
            sb2.append(" tag=");
            sb2.append(this.f4425r);
        }
        if (this.f4426s) {
            sb2.append(" retainInstance");
        }
        if (this.f4427t) {
            sb2.append(" removing");
        }
        if (this.f4428u) {
            sb2.append(" detached");
        }
        if (this.f4429v) {
            sb2.append(" hidden");
        }
        if (this.f4431x != null) {
            sb2.append(" targetWho=");
            sb2.append(this.f4431x);
            sb2.append(" targetRequestCode=");
            sb2.append(this.f4432y);
        }
        if (this.f4433z) {
            sb2.append(" userVisibleHint");
        }
        return sb2.toString();
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        parcel.writeString(this.f4419d);
        parcel.writeString(this.f4420e);
        parcel.writeInt(this.f4421i ? 1 : 0);
        parcel.writeInt(this.f4422o ? 1 : 0);
        parcel.writeInt(this.f4423p);
        parcel.writeInt(this.f4424q);
        parcel.writeString(this.f4425r);
        parcel.writeInt(this.f4426s ? 1 : 0);
        parcel.writeInt(this.f4427t ? 1 : 0);
        parcel.writeInt(this.f4428u ? 1 : 0);
        parcel.writeInt(this.f4429v ? 1 : 0);
        parcel.writeInt(this.f4430w);
        parcel.writeString(this.f4431x);
        parcel.writeInt(this.f4432y);
        parcel.writeInt(this.f4433z ? 1 : 0);
    }

    j0(Parcel parcel) {
        this.f4419d = parcel.readString();
        this.f4420e = parcel.readString();
        this.f4421i = parcel.readInt() != 0;
        this.f4422o = parcel.readInt() != 0;
        this.f4423p = parcel.readInt();
        this.f4424q = parcel.readInt();
        this.f4425r = parcel.readString();
        this.f4426s = parcel.readInt() != 0;
        this.f4427t = parcel.readInt() != 0;
        this.f4428u = parcel.readInt() != 0;
        this.f4429v = parcel.readInt() != 0;
        this.f4430w = parcel.readInt();
        this.f4431x = parcel.readString();
        this.f4432y = parcel.readInt();
        this.f4433z = parcel.readInt() != 0;
    }
}
