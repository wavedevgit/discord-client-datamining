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
    final int[] f4324d;

    /* renamed from: e  reason: collision with root package name */
    final ArrayList f4325e;

    /* renamed from: i  reason: collision with root package name */
    final int[] f4326i;

    /* renamed from: o  reason: collision with root package name */
    final int[] f4327o;

    /* renamed from: p  reason: collision with root package name */
    final int f4328p;

    /* renamed from: q  reason: collision with root package name */
    final String f4329q;

    /* renamed from: r  reason: collision with root package name */
    final int f4330r;

    /* renamed from: s  reason: collision with root package name */
    final int f4331s;

    /* renamed from: t  reason: collision with root package name */
    final CharSequence f4332t;

    /* renamed from: u  reason: collision with root package name */
    final int f4333u;

    /* renamed from: v  reason: collision with root package name */
    final CharSequence f4334v;

    /* renamed from: w  reason: collision with root package name */
    final ArrayList f4335w;

    /* renamed from: x  reason: collision with root package name */
    final ArrayList f4336x;

    /* renamed from: y  reason: collision with root package name */
    final boolean f4337y;

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
        int size = aVar.f4287c.size();
        this.f4324d = new int[size * 6];
        if (aVar.f4293i) {
            this.f4325e = new ArrayList(size);
            this.f4326i = new int[size];
            this.f4327o = new int[size];
            int i10 = 0;
            for (int i11 = 0; i11 < size; i11++) {
                FragmentTransaction.a aVar2 = (FragmentTransaction.a) aVar.f4287c.get(i11);
                int i12 = i10 + 1;
                this.f4324d[i10] = aVar2.f4304a;
                ArrayList arrayList = this.f4325e;
                Fragment fragment = aVar2.f4305b;
                arrayList.add(fragment != null ? fragment.mWho : null);
                int[] iArr = this.f4324d;
                iArr[i12] = aVar2.f4306c ? 1 : 0;
                iArr[i10 + 2] = aVar2.f4307d;
                iArr[i10 + 3] = aVar2.f4308e;
                int i13 = i10 + 5;
                iArr[i10 + 4] = aVar2.f4309f;
                i10 += 6;
                iArr[i13] = aVar2.f4310g;
                this.f4326i[i11] = aVar2.f4311h.ordinal();
                this.f4327o[i11] = aVar2.f4312i.ordinal();
            }
            this.f4328p = aVar.f4292h;
            this.f4329q = aVar.f4295k;
            this.f4330r = aVar.f4321v;
            this.f4331s = aVar.f4296l;
            this.f4332t = aVar.f4297m;
            this.f4333u = aVar.f4298n;
            this.f4334v = aVar.f4299o;
            this.f4335w = aVar.f4300p;
            this.f4336x = aVar.f4301q;
            this.f4337y = aVar.f4302r;
            return;
        }
        throw new IllegalStateException("Not on back stack");
    }

    private void a(androidx.fragment.app.a aVar) {
        int i10 = 0;
        int i11 = 0;
        while (true) {
            boolean z10 = true;
            if (i10 < this.f4324d.length) {
                FragmentTransaction.a aVar2 = new FragmentTransaction.a();
                int i12 = i10 + 1;
                aVar2.f4304a = this.f4324d[i10];
                if (FragmentManager.O0(2)) {
                    Log.v("FragmentManager", "Instantiate " + aVar + " op #" + i11 + " base fragment #" + this.f4324d[i12]);
                }
                aVar2.f4311h = Lifecycle.State.values()[this.f4326i[i11]];
                aVar2.f4312i = Lifecycle.State.values()[this.f4327o[i11]];
                int[] iArr = this.f4324d;
                int i13 = i10 + 2;
                if (iArr[i12] == 0) {
                    z10 = false;
                }
                aVar2.f4306c = z10;
                int i14 = iArr[i13];
                aVar2.f4307d = i14;
                int i15 = iArr[i10 + 3];
                aVar2.f4308e = i15;
                int i16 = i10 + 5;
                int i17 = iArr[i10 + 4];
                aVar2.f4309f = i17;
                i10 += 6;
                int i18 = iArr[i16];
                aVar2.f4310g = i18;
                aVar.f4288d = i14;
                aVar.f4289e = i15;
                aVar.f4290f = i17;
                aVar.f4291g = i18;
                aVar.f(aVar2);
                i11++;
            } else {
                aVar.f4292h = this.f4328p;
                aVar.f4295k = this.f4329q;
                aVar.f4293i = true;
                aVar.f4296l = this.f4331s;
                aVar.f4297m = this.f4332t;
                aVar.f4298n = this.f4333u;
                aVar.f4299o = this.f4334v;
                aVar.f4300p = this.f4335w;
                aVar.f4301q = this.f4336x;
                aVar.f4302r = this.f4337y;
                return;
            }
        }
    }

    public androidx.fragment.app.a b(FragmentManager fragmentManager) {
        androidx.fragment.app.a aVar = new androidx.fragment.app.a(fragmentManager);
        a(aVar);
        aVar.f4321v = this.f4330r;
        for (int i10 = 0; i10 < this.f4325e.size(); i10++) {
            String str = (String) this.f4325e.get(i10);
            if (str != null) {
                ((FragmentTransaction.a) aVar.f4287c.get(i10)).f4305b = fragmentManager.k0(str);
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
        parcel.writeIntArray(this.f4324d);
        parcel.writeStringList(this.f4325e);
        parcel.writeIntArray(this.f4326i);
        parcel.writeIntArray(this.f4327o);
        parcel.writeInt(this.f4328p);
        parcel.writeString(this.f4329q);
        parcel.writeInt(this.f4330r);
        parcel.writeInt(this.f4331s);
        TextUtils.writeToParcel(this.f4332t, parcel, 0);
        parcel.writeInt(this.f4333u);
        TextUtils.writeToParcel(this.f4334v, parcel, 0);
        parcel.writeStringList(this.f4335w);
        parcel.writeStringList(this.f4336x);
        parcel.writeInt(this.f4337y ? 1 : 0);
    }

    b(Parcel parcel) {
        this.f4324d = parcel.createIntArray();
        this.f4325e = parcel.createStringArrayList();
        this.f4326i = parcel.createIntArray();
        this.f4327o = parcel.createIntArray();
        this.f4328p = parcel.readInt();
        this.f4329q = parcel.readString();
        this.f4330r = parcel.readInt();
        this.f4331s = parcel.readInt();
        Parcelable.Creator creator = TextUtils.CHAR_SEQUENCE_CREATOR;
        this.f4332t = (CharSequence) creator.createFromParcel(parcel);
        this.f4333u = parcel.readInt();
        this.f4334v = (CharSequence) creator.createFromParcel(parcel);
        this.f4335w = parcel.createStringArrayList();
        this.f4336x = parcel.createStringArrayList();
        this.f4337y = parcel.readInt() != 0;
    }
}
