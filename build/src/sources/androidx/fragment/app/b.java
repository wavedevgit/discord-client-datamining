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
    final int[] f4173d;

    /* renamed from: e  reason: collision with root package name */
    final ArrayList f4174e;

    /* renamed from: i  reason: collision with root package name */
    final int[] f4175i;

    /* renamed from: o  reason: collision with root package name */
    final int[] f4176o;

    /* renamed from: p  reason: collision with root package name */
    final int f4177p;

    /* renamed from: q  reason: collision with root package name */
    final String f4178q;

    /* renamed from: r  reason: collision with root package name */
    final int f4179r;

    /* renamed from: s  reason: collision with root package name */
    final int f4180s;

    /* renamed from: t  reason: collision with root package name */
    final CharSequence f4181t;

    /* renamed from: u  reason: collision with root package name */
    final int f4182u;

    /* renamed from: v  reason: collision with root package name */
    final CharSequence f4183v;

    /* renamed from: w  reason: collision with root package name */
    final ArrayList f4184w;

    /* renamed from: x  reason: collision with root package name */
    final ArrayList f4185x;

    /* renamed from: y  reason: collision with root package name */
    final boolean f4186y;

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
        int size = aVar.f4136c.size();
        this.f4173d = new int[size * 6];
        if (aVar.f4142i) {
            this.f4174e = new ArrayList(size);
            this.f4175i = new int[size];
            this.f4176o = new int[size];
            int i10 = 0;
            for (int i11 = 0; i11 < size; i11++) {
                FragmentTransaction.a aVar2 = (FragmentTransaction.a) aVar.f4136c.get(i11);
                int i12 = i10 + 1;
                this.f4173d[i10] = aVar2.f4153a;
                ArrayList arrayList = this.f4174e;
                Fragment fragment = aVar2.f4154b;
                arrayList.add(fragment != null ? fragment.mWho : null);
                int[] iArr = this.f4173d;
                iArr[i12] = aVar2.f4155c ? 1 : 0;
                iArr[i10 + 2] = aVar2.f4156d;
                iArr[i10 + 3] = aVar2.f4157e;
                int i13 = i10 + 5;
                iArr[i10 + 4] = aVar2.f4158f;
                i10 += 6;
                iArr[i13] = aVar2.f4159g;
                this.f4175i[i11] = aVar2.f4160h.ordinal();
                this.f4176o[i11] = aVar2.f4161i.ordinal();
            }
            this.f4177p = aVar.f4141h;
            this.f4178q = aVar.f4144k;
            this.f4179r = aVar.f4170v;
            this.f4180s = aVar.f4145l;
            this.f4181t = aVar.f4146m;
            this.f4182u = aVar.f4147n;
            this.f4183v = aVar.f4148o;
            this.f4184w = aVar.f4149p;
            this.f4185x = aVar.f4150q;
            this.f4186y = aVar.f4151r;
            return;
        }
        throw new IllegalStateException("Not on back stack");
    }

    private void a(androidx.fragment.app.a aVar) {
        int i10 = 0;
        int i11 = 0;
        while (true) {
            boolean z10 = true;
            if (i10 < this.f4173d.length) {
                FragmentTransaction.a aVar2 = new FragmentTransaction.a();
                int i12 = i10 + 1;
                aVar2.f4153a = this.f4173d[i10];
                if (FragmentManager.O0(2)) {
                    Log.v("FragmentManager", "Instantiate " + aVar + " op #" + i11 + " base fragment #" + this.f4173d[i12]);
                }
                aVar2.f4160h = Lifecycle.State.values()[this.f4175i[i11]];
                aVar2.f4161i = Lifecycle.State.values()[this.f4176o[i11]];
                int[] iArr = this.f4173d;
                int i13 = i10 + 2;
                if (iArr[i12] == 0) {
                    z10 = false;
                }
                aVar2.f4155c = z10;
                int i14 = iArr[i13];
                aVar2.f4156d = i14;
                int i15 = iArr[i10 + 3];
                aVar2.f4157e = i15;
                int i16 = i10 + 5;
                int i17 = iArr[i10 + 4];
                aVar2.f4158f = i17;
                i10 += 6;
                int i18 = iArr[i16];
                aVar2.f4159g = i18;
                aVar.f4137d = i14;
                aVar.f4138e = i15;
                aVar.f4139f = i17;
                aVar.f4140g = i18;
                aVar.f(aVar2);
                i11++;
            } else {
                aVar.f4141h = this.f4177p;
                aVar.f4144k = this.f4178q;
                aVar.f4142i = true;
                aVar.f4145l = this.f4180s;
                aVar.f4146m = this.f4181t;
                aVar.f4147n = this.f4182u;
                aVar.f4148o = this.f4183v;
                aVar.f4149p = this.f4184w;
                aVar.f4150q = this.f4185x;
                aVar.f4151r = this.f4186y;
                return;
            }
        }
    }

    public androidx.fragment.app.a b(FragmentManager fragmentManager) {
        androidx.fragment.app.a aVar = new androidx.fragment.app.a(fragmentManager);
        a(aVar);
        aVar.f4170v = this.f4179r;
        for (int i10 = 0; i10 < this.f4174e.size(); i10++) {
            String str = (String) this.f4174e.get(i10);
            if (str != null) {
                ((FragmentTransaction.a) aVar.f4136c.get(i10)).f4154b = fragmentManager.k0(str);
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
        parcel.writeIntArray(this.f4173d);
        parcel.writeStringList(this.f4174e);
        parcel.writeIntArray(this.f4175i);
        parcel.writeIntArray(this.f4176o);
        parcel.writeInt(this.f4177p);
        parcel.writeString(this.f4178q);
        parcel.writeInt(this.f4179r);
        parcel.writeInt(this.f4180s);
        TextUtils.writeToParcel(this.f4181t, parcel, 0);
        parcel.writeInt(this.f4182u);
        TextUtils.writeToParcel(this.f4183v, parcel, 0);
        parcel.writeStringList(this.f4184w);
        parcel.writeStringList(this.f4185x);
        parcel.writeInt(this.f4186y ? 1 : 0);
    }

    b(Parcel parcel) {
        this.f4173d = parcel.createIntArray();
        this.f4174e = parcel.createStringArrayList();
        this.f4175i = parcel.createIntArray();
        this.f4176o = parcel.createIntArray();
        this.f4177p = parcel.readInt();
        this.f4178q = parcel.readString();
        this.f4179r = parcel.readInt();
        this.f4180s = parcel.readInt();
        Parcelable.Creator creator = TextUtils.CHAR_SEQUENCE_CREATOR;
        this.f4181t = (CharSequence) creator.createFromParcel(parcel);
        this.f4182u = parcel.readInt();
        this.f4183v = (CharSequence) creator.createFromParcel(parcel);
        this.f4184w = parcel.createStringArrayList();
        this.f4185x = parcel.createStringArrayList();
        this.f4186y = parcel.readInt() != 0;
    }
}
