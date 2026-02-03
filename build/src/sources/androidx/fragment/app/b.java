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
    final int[] f4217d;

    /* renamed from: e  reason: collision with root package name */
    final ArrayList f4218e;

    /* renamed from: i  reason: collision with root package name */
    final int[] f4219i;

    /* renamed from: o  reason: collision with root package name */
    final int[] f4220o;

    /* renamed from: p  reason: collision with root package name */
    final int f4221p;

    /* renamed from: q  reason: collision with root package name */
    final String f4222q;

    /* renamed from: r  reason: collision with root package name */
    final int f4223r;

    /* renamed from: s  reason: collision with root package name */
    final int f4224s;

    /* renamed from: t  reason: collision with root package name */
    final CharSequence f4225t;

    /* renamed from: u  reason: collision with root package name */
    final int f4226u;

    /* renamed from: v  reason: collision with root package name */
    final CharSequence f4227v;

    /* renamed from: w  reason: collision with root package name */
    final ArrayList f4228w;

    /* renamed from: x  reason: collision with root package name */
    final ArrayList f4229x;

    /* renamed from: y  reason: collision with root package name */
    final boolean f4230y;

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
        int size = aVar.f4180c.size();
        this.f4217d = new int[size * 6];
        if (aVar.f4186i) {
            this.f4218e = new ArrayList(size);
            this.f4219i = new int[size];
            this.f4220o = new int[size];
            int i10 = 0;
            for (int i11 = 0; i11 < size; i11++) {
                FragmentTransaction.a aVar2 = (FragmentTransaction.a) aVar.f4180c.get(i11);
                int i12 = i10 + 1;
                this.f4217d[i10] = aVar2.f4197a;
                ArrayList arrayList = this.f4218e;
                Fragment fragment = aVar2.f4198b;
                arrayList.add(fragment != null ? fragment.mWho : null);
                int[] iArr = this.f4217d;
                iArr[i12] = aVar2.f4199c ? 1 : 0;
                iArr[i10 + 2] = aVar2.f4200d;
                iArr[i10 + 3] = aVar2.f4201e;
                int i13 = i10 + 5;
                iArr[i10 + 4] = aVar2.f4202f;
                i10 += 6;
                iArr[i13] = aVar2.f4203g;
                this.f4219i[i11] = aVar2.f4204h.ordinal();
                this.f4220o[i11] = aVar2.f4205i.ordinal();
            }
            this.f4221p = aVar.f4185h;
            this.f4222q = aVar.f4188k;
            this.f4223r = aVar.f4214v;
            this.f4224s = aVar.f4189l;
            this.f4225t = aVar.f4190m;
            this.f4226u = aVar.f4191n;
            this.f4227v = aVar.f4192o;
            this.f4228w = aVar.f4193p;
            this.f4229x = aVar.f4194q;
            this.f4230y = aVar.f4195r;
            return;
        }
        throw new IllegalStateException("Not on back stack");
    }

    private void a(androidx.fragment.app.a aVar) {
        int i10 = 0;
        int i11 = 0;
        while (true) {
            boolean z10 = true;
            if (i10 < this.f4217d.length) {
                FragmentTransaction.a aVar2 = new FragmentTransaction.a();
                int i12 = i10 + 1;
                aVar2.f4197a = this.f4217d[i10];
                if (FragmentManager.O0(2)) {
                    Log.v("FragmentManager", "Instantiate " + aVar + " op #" + i11 + " base fragment #" + this.f4217d[i12]);
                }
                aVar2.f4204h = Lifecycle.State.values()[this.f4219i[i11]];
                aVar2.f4205i = Lifecycle.State.values()[this.f4220o[i11]];
                int[] iArr = this.f4217d;
                int i13 = i10 + 2;
                if (iArr[i12] == 0) {
                    z10 = false;
                }
                aVar2.f4199c = z10;
                int i14 = iArr[i13];
                aVar2.f4200d = i14;
                int i15 = iArr[i10 + 3];
                aVar2.f4201e = i15;
                int i16 = i10 + 5;
                int i17 = iArr[i10 + 4];
                aVar2.f4202f = i17;
                i10 += 6;
                int i18 = iArr[i16];
                aVar2.f4203g = i18;
                aVar.f4181d = i14;
                aVar.f4182e = i15;
                aVar.f4183f = i17;
                aVar.f4184g = i18;
                aVar.f(aVar2);
                i11++;
            } else {
                aVar.f4185h = this.f4221p;
                aVar.f4188k = this.f4222q;
                aVar.f4186i = true;
                aVar.f4189l = this.f4224s;
                aVar.f4190m = this.f4225t;
                aVar.f4191n = this.f4226u;
                aVar.f4192o = this.f4227v;
                aVar.f4193p = this.f4228w;
                aVar.f4194q = this.f4229x;
                aVar.f4195r = this.f4230y;
                return;
            }
        }
    }

    public androidx.fragment.app.a b(FragmentManager fragmentManager) {
        androidx.fragment.app.a aVar = new androidx.fragment.app.a(fragmentManager);
        a(aVar);
        aVar.f4214v = this.f4223r;
        for (int i10 = 0; i10 < this.f4218e.size(); i10++) {
            String str = (String) this.f4218e.get(i10);
            if (str != null) {
                ((FragmentTransaction.a) aVar.f4180c.get(i10)).f4198b = fragmentManager.k0(str);
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
        parcel.writeIntArray(this.f4217d);
        parcel.writeStringList(this.f4218e);
        parcel.writeIntArray(this.f4219i);
        parcel.writeIntArray(this.f4220o);
        parcel.writeInt(this.f4221p);
        parcel.writeString(this.f4222q);
        parcel.writeInt(this.f4223r);
        parcel.writeInt(this.f4224s);
        TextUtils.writeToParcel(this.f4225t, parcel, 0);
        parcel.writeInt(this.f4226u);
        TextUtils.writeToParcel(this.f4227v, parcel, 0);
        parcel.writeStringList(this.f4228w);
        parcel.writeStringList(this.f4229x);
        parcel.writeInt(this.f4230y ? 1 : 0);
    }

    b(Parcel parcel) {
        this.f4217d = parcel.createIntArray();
        this.f4218e = parcel.createStringArrayList();
        this.f4219i = parcel.createIntArray();
        this.f4220o = parcel.createIntArray();
        this.f4221p = parcel.readInt();
        this.f4222q = parcel.readString();
        this.f4223r = parcel.readInt();
        this.f4224s = parcel.readInt();
        Parcelable.Creator creator = TextUtils.CHAR_SEQUENCE_CREATOR;
        this.f4225t = (CharSequence) creator.createFromParcel(parcel);
        this.f4226u = parcel.readInt();
        this.f4227v = (CharSequence) creator.createFromParcel(parcel);
        this.f4228w = parcel.createStringArrayList();
        this.f4229x = parcel.createStringArrayList();
        this.f4230y = parcel.readInt() != 0;
    }
}
