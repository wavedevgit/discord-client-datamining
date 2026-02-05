package androidx.fragment.app;

import android.os.Parcel;
import android.os.Parcelable;
import android.text.TextUtils;
import android.util.Log;
import androidx.fragment.app.FragmentTransaction;
import androidx.lifecycle.Lifecycle;
import java.util.ArrayList;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class b implements Parcelable {
    public static final Parcelable.Creator<b> CREATOR = new a();

    /* renamed from: d  reason: collision with root package name */
    final int[] f4298d;

    /* renamed from: e  reason: collision with root package name */
    final ArrayList f4299e;

    /* renamed from: i  reason: collision with root package name */
    final int[] f4300i;

    /* renamed from: o  reason: collision with root package name */
    final int[] f4301o;

    /* renamed from: p  reason: collision with root package name */
    final int f4302p;

    /* renamed from: q  reason: collision with root package name */
    final String f4303q;

    /* renamed from: r  reason: collision with root package name */
    final int f4304r;

    /* renamed from: s  reason: collision with root package name */
    final int f4305s;

    /* renamed from: t  reason: collision with root package name */
    final CharSequence f4306t;

    /* renamed from: u  reason: collision with root package name */
    final int f4307u;

    /* renamed from: v  reason: collision with root package name */
    final CharSequence f4308v;

    /* renamed from: w  reason: collision with root package name */
    final ArrayList f4309w;

    /* renamed from: x  reason: collision with root package name */
    final ArrayList f4310x;

    /* renamed from: y  reason: collision with root package name */
    final boolean f4311y;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class a implements Parcelable.Creator {
        a() {
        }

        @Override // android.os.Parcelable.Creator
        /* renamed from: a */
        public b createFromParcel(Parcel parcel) {
            return new b(parcel);
        }

        @Override // android.os.Parcelable.Creator
        /* renamed from: b */
        public b[] newArray(int i10) {
            return new b[i10];
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public b(androidx.fragment.app.a aVar) {
        int size = aVar.f4261c.size();
        this.f4298d = new int[size * 6];
        if (aVar.f4267i) {
            this.f4299e = new ArrayList(size);
            this.f4300i = new int[size];
            this.f4301o = new int[size];
            int i10 = 0;
            for (int i11 = 0; i11 < size; i11++) {
                FragmentTransaction.a aVar2 = (FragmentTransaction.a) aVar.f4261c.get(i11);
                int i12 = i10 + 1;
                this.f4298d[i10] = aVar2.f4278a;
                ArrayList arrayList = this.f4299e;
                Fragment fragment = aVar2.f4279b;
                arrayList.add(fragment != null ? fragment.mWho : null);
                int[] iArr = this.f4298d;
                iArr[i12] = aVar2.f4280c ? 1 : 0;
                iArr[i10 + 2] = aVar2.f4281d;
                iArr[i10 + 3] = aVar2.f4282e;
                int i13 = i10 + 5;
                iArr[i10 + 4] = aVar2.f4283f;
                i10 += 6;
                iArr[i13] = aVar2.f4284g;
                this.f4300i[i11] = aVar2.f4285h.ordinal();
                this.f4301o[i11] = aVar2.f4286i.ordinal();
            }
            this.f4302p = aVar.f4266h;
            this.f4303q = aVar.f4269k;
            this.f4304r = aVar.f4295v;
            this.f4305s = aVar.f4270l;
            this.f4306t = aVar.f4271m;
            this.f4307u = aVar.f4272n;
            this.f4308v = aVar.f4273o;
            this.f4309w = aVar.f4274p;
            this.f4310x = aVar.f4275q;
            this.f4311y = aVar.f4276r;
            return;
        }
        throw new IllegalStateException("Not on back stack");
    }

    private void a(androidx.fragment.app.a aVar) {
        int i10 = 0;
        int i11 = 0;
        while (true) {
            boolean z10 = true;
            if (i10 < this.f4298d.length) {
                FragmentTransaction.a aVar2 = new FragmentTransaction.a();
                int i12 = i10 + 1;
                aVar2.f4278a = this.f4298d[i10];
                if (FragmentManager.O0(2)) {
                    Log.v("FragmentManager", "Instantiate " + aVar + " op #" + i11 + " base fragment #" + this.f4298d[i12]);
                }
                aVar2.f4285h = Lifecycle.State.values()[this.f4300i[i11]];
                aVar2.f4286i = Lifecycle.State.values()[this.f4301o[i11]];
                int[] iArr = this.f4298d;
                int i13 = i10 + 2;
                if (iArr[i12] == 0) {
                    z10 = false;
                }
                aVar2.f4280c = z10;
                int i14 = iArr[i13];
                aVar2.f4281d = i14;
                int i15 = iArr[i10 + 3];
                aVar2.f4282e = i15;
                int i16 = i10 + 5;
                int i17 = iArr[i10 + 4];
                aVar2.f4283f = i17;
                i10 += 6;
                int i18 = iArr[i16];
                aVar2.f4284g = i18;
                aVar.f4262d = i14;
                aVar.f4263e = i15;
                aVar.f4264f = i17;
                aVar.f4265g = i18;
                aVar.f(aVar2);
                i11++;
            } else {
                aVar.f4266h = this.f4302p;
                aVar.f4269k = this.f4303q;
                aVar.f4267i = true;
                aVar.f4270l = this.f4305s;
                aVar.f4271m = this.f4306t;
                aVar.f4272n = this.f4307u;
                aVar.f4273o = this.f4308v;
                aVar.f4274p = this.f4309w;
                aVar.f4275q = this.f4310x;
                aVar.f4276r = this.f4311y;
                return;
            }
        }
    }

    public androidx.fragment.app.a b(FragmentManager fragmentManager) {
        androidx.fragment.app.a aVar = new androidx.fragment.app.a(fragmentManager);
        a(aVar);
        aVar.f4295v = this.f4304r;
        for (int i10 = 0; i10 < this.f4299e.size(); i10++) {
            String str = (String) this.f4299e.get(i10);
            if (str != null) {
                ((FragmentTransaction.a) aVar.f4261c.get(i10)).f4279b = fragmentManager.k0(str);
            }
        }
        aVar.u(1);
        return aVar;
    }

    @Override // android.os.Parcelable
    public int describeContents() {
        return 0;
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        parcel.writeIntArray(this.f4298d);
        parcel.writeStringList(this.f4299e);
        parcel.writeIntArray(this.f4300i);
        parcel.writeIntArray(this.f4301o);
        parcel.writeInt(this.f4302p);
        parcel.writeString(this.f4303q);
        parcel.writeInt(this.f4304r);
        parcel.writeInt(this.f4305s);
        TextUtils.writeToParcel(this.f4306t, parcel, 0);
        parcel.writeInt(this.f4307u);
        TextUtils.writeToParcel(this.f4308v, parcel, 0);
        parcel.writeStringList(this.f4309w);
        parcel.writeStringList(this.f4310x);
        parcel.writeInt(this.f4311y ? 1 : 0);
    }

    b(Parcel parcel) {
        this.f4298d = parcel.createIntArray();
        this.f4299e = parcel.createStringArrayList();
        this.f4300i = parcel.createIntArray();
        this.f4301o = parcel.createIntArray();
        this.f4302p = parcel.readInt();
        this.f4303q = parcel.readString();
        this.f4304r = parcel.readInt();
        this.f4305s = parcel.readInt();
        Parcelable.Creator creator = TextUtils.CHAR_SEQUENCE_CREATOR;
        this.f4306t = (CharSequence) creator.createFromParcel(parcel);
        this.f4307u = parcel.readInt();
        this.f4308v = (CharSequence) creator.createFromParcel(parcel);
        this.f4309w = parcel.createStringArrayList();
        this.f4310x = parcel.createStringArrayList();
        this.f4311y = parcel.readInt() != 0;
    }
}
