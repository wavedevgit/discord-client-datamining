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
    final int[] f4334d;

    /* renamed from: e  reason: collision with root package name */
    final ArrayList f4335e;

    /* renamed from: i  reason: collision with root package name */
    final int[] f4336i;

    /* renamed from: o  reason: collision with root package name */
    final int[] f4337o;

    /* renamed from: p  reason: collision with root package name */
    final int f4338p;

    /* renamed from: q  reason: collision with root package name */
    final String f4339q;

    /* renamed from: r  reason: collision with root package name */
    final int f4340r;

    /* renamed from: s  reason: collision with root package name */
    final int f4341s;

    /* renamed from: t  reason: collision with root package name */
    final CharSequence f4342t;

    /* renamed from: u  reason: collision with root package name */
    final int f4343u;

    /* renamed from: v  reason: collision with root package name */
    final CharSequence f4344v;

    /* renamed from: w  reason: collision with root package name */
    final ArrayList f4345w;

    /* renamed from: x  reason: collision with root package name */
    final ArrayList f4346x;

    /* renamed from: y  reason: collision with root package name */
    final boolean f4347y;

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
        int size = aVar.f4297c.size();
        this.f4334d = new int[size * 6];
        if (aVar.f4303i) {
            this.f4335e = new ArrayList(size);
            this.f4336i = new int[size];
            this.f4337o = new int[size];
            int i10 = 0;
            for (int i11 = 0; i11 < size; i11++) {
                FragmentTransaction.a aVar2 = (FragmentTransaction.a) aVar.f4297c.get(i11);
                int i12 = i10 + 1;
                this.f4334d[i10] = aVar2.f4314a;
                ArrayList arrayList = this.f4335e;
                Fragment fragment = aVar2.f4315b;
                arrayList.add(fragment != null ? fragment.mWho : null);
                int[] iArr = this.f4334d;
                iArr[i12] = aVar2.f4316c ? 1 : 0;
                iArr[i10 + 2] = aVar2.f4317d;
                iArr[i10 + 3] = aVar2.f4318e;
                int i13 = i10 + 5;
                iArr[i10 + 4] = aVar2.f4319f;
                i10 += 6;
                iArr[i13] = aVar2.f4320g;
                this.f4336i[i11] = aVar2.f4321h.ordinal();
                this.f4337o[i11] = aVar2.f4322i.ordinal();
            }
            this.f4338p = aVar.f4302h;
            this.f4339q = aVar.f4305k;
            this.f4340r = aVar.f4331v;
            this.f4341s = aVar.f4306l;
            this.f4342t = aVar.f4307m;
            this.f4343u = aVar.f4308n;
            this.f4344v = aVar.f4309o;
            this.f4345w = aVar.f4310p;
            this.f4346x = aVar.f4311q;
            this.f4347y = aVar.f4312r;
            return;
        }
        throw new IllegalStateException("Not on back stack");
    }

    private void a(androidx.fragment.app.a aVar) {
        int i10 = 0;
        int i11 = 0;
        while (true) {
            boolean z10 = true;
            if (i10 < this.f4334d.length) {
                FragmentTransaction.a aVar2 = new FragmentTransaction.a();
                int i12 = i10 + 1;
                aVar2.f4314a = this.f4334d[i10];
                if (FragmentManager.P0(2)) {
                    Log.v("FragmentManager", "Instantiate " + aVar + " op #" + i11 + " base fragment #" + this.f4334d[i12]);
                }
                aVar2.f4321h = Lifecycle.State.values()[this.f4336i[i11]];
                aVar2.f4322i = Lifecycle.State.values()[this.f4337o[i11]];
                int[] iArr = this.f4334d;
                int i13 = i10 + 2;
                if (iArr[i12] == 0) {
                    z10 = false;
                }
                aVar2.f4316c = z10;
                int i14 = iArr[i13];
                aVar2.f4317d = i14;
                int i15 = iArr[i10 + 3];
                aVar2.f4318e = i15;
                int i16 = i10 + 5;
                int i17 = iArr[i10 + 4];
                aVar2.f4319f = i17;
                i10 += 6;
                int i18 = iArr[i16];
                aVar2.f4320g = i18;
                aVar.f4298d = i14;
                aVar.f4299e = i15;
                aVar.f4300f = i17;
                aVar.f4301g = i18;
                aVar.f(aVar2);
                i11++;
            } else {
                aVar.f4302h = this.f4338p;
                aVar.f4305k = this.f4339q;
                aVar.f4303i = true;
                aVar.f4306l = this.f4341s;
                aVar.f4307m = this.f4342t;
                aVar.f4308n = this.f4343u;
                aVar.f4309o = this.f4344v;
                aVar.f4310p = this.f4345w;
                aVar.f4311q = this.f4346x;
                aVar.f4312r = this.f4347y;
                return;
            }
        }
    }

    public androidx.fragment.app.a b(FragmentManager fragmentManager) {
        androidx.fragment.app.a aVar = new androidx.fragment.app.a(fragmentManager);
        a(aVar);
        aVar.f4331v = this.f4340r;
        for (int i10 = 0; i10 < this.f4335e.size(); i10++) {
            String str = (String) this.f4335e.get(i10);
            if (str != null) {
                ((FragmentTransaction.a) aVar.f4297c.get(i10)).f4315b = fragmentManager.l0(str);
            }
        }
        aVar.w(1);
        return aVar;
    }

    @Override // android.os.Parcelable
    public int describeContents() {
        return 0;
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        parcel.writeIntArray(this.f4334d);
        parcel.writeStringList(this.f4335e);
        parcel.writeIntArray(this.f4336i);
        parcel.writeIntArray(this.f4337o);
        parcel.writeInt(this.f4338p);
        parcel.writeString(this.f4339q);
        parcel.writeInt(this.f4340r);
        parcel.writeInt(this.f4341s);
        TextUtils.writeToParcel(this.f4342t, parcel, 0);
        parcel.writeInt(this.f4343u);
        TextUtils.writeToParcel(this.f4344v, parcel, 0);
        parcel.writeStringList(this.f4345w);
        parcel.writeStringList(this.f4346x);
        parcel.writeInt(this.f4347y ? 1 : 0);
    }

    b(Parcel parcel) {
        this.f4334d = parcel.createIntArray();
        this.f4335e = parcel.createStringArrayList();
        this.f4336i = parcel.createIntArray();
        this.f4337o = parcel.createIntArray();
        this.f4338p = parcel.readInt();
        this.f4339q = parcel.readString();
        this.f4340r = parcel.readInt();
        this.f4341s = parcel.readInt();
        Parcelable.Creator creator = TextUtils.CHAR_SEQUENCE_CREATOR;
        this.f4342t = (CharSequence) creator.createFromParcel(parcel);
        this.f4343u = parcel.readInt();
        this.f4344v = (CharSequence) creator.createFromParcel(parcel);
        this.f4345w = parcel.createStringArrayList();
        this.f4346x = parcel.createStringArrayList();
        this.f4347y = parcel.readInt() != 0;
    }
}
