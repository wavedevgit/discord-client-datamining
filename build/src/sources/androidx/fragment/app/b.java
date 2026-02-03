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
    final int[] f4186d;

    /* renamed from: e  reason: collision with root package name */
    final ArrayList f4187e;

    /* renamed from: i  reason: collision with root package name */
    final int[] f4188i;

    /* renamed from: o  reason: collision with root package name */
    final int[] f4189o;

    /* renamed from: p  reason: collision with root package name */
    final int f4190p;

    /* renamed from: q  reason: collision with root package name */
    final String f4191q;

    /* renamed from: r  reason: collision with root package name */
    final int f4192r;

    /* renamed from: s  reason: collision with root package name */
    final int f4193s;

    /* renamed from: t  reason: collision with root package name */
    final CharSequence f4194t;

    /* renamed from: u  reason: collision with root package name */
    final int f4195u;

    /* renamed from: v  reason: collision with root package name */
    final CharSequence f4196v;

    /* renamed from: w  reason: collision with root package name */
    final ArrayList f4197w;

    /* renamed from: x  reason: collision with root package name */
    final ArrayList f4198x;

    /* renamed from: y  reason: collision with root package name */
    final boolean f4199y;

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
        int size = aVar.f4149c.size();
        this.f4186d = new int[size * 6];
        if (aVar.f4155i) {
            this.f4187e = new ArrayList(size);
            this.f4188i = new int[size];
            this.f4189o = new int[size];
            int i10 = 0;
            for (int i11 = 0; i11 < size; i11++) {
                FragmentTransaction.a aVar2 = (FragmentTransaction.a) aVar.f4149c.get(i11);
                int i12 = i10 + 1;
                this.f4186d[i10] = aVar2.f4166a;
                ArrayList arrayList = this.f4187e;
                Fragment fragment = aVar2.f4167b;
                arrayList.add(fragment != null ? fragment.mWho : null);
                int[] iArr = this.f4186d;
                iArr[i12] = aVar2.f4168c ? 1 : 0;
                iArr[i10 + 2] = aVar2.f4169d;
                iArr[i10 + 3] = aVar2.f4170e;
                int i13 = i10 + 5;
                iArr[i10 + 4] = aVar2.f4171f;
                i10 += 6;
                iArr[i13] = aVar2.f4172g;
                this.f4188i[i11] = aVar2.f4173h.ordinal();
                this.f4189o[i11] = aVar2.f4174i.ordinal();
            }
            this.f4190p = aVar.f4154h;
            this.f4191q = aVar.f4157k;
            this.f4192r = aVar.f4183v;
            this.f4193s = aVar.f4158l;
            this.f4194t = aVar.f4159m;
            this.f4195u = aVar.f4160n;
            this.f4196v = aVar.f4161o;
            this.f4197w = aVar.f4162p;
            this.f4198x = aVar.f4163q;
            this.f4199y = aVar.f4164r;
            return;
        }
        throw new IllegalStateException("Not on back stack");
    }

    private void a(androidx.fragment.app.a aVar) {
        int i10 = 0;
        int i11 = 0;
        while (true) {
            boolean z10 = true;
            if (i10 < this.f4186d.length) {
                FragmentTransaction.a aVar2 = new FragmentTransaction.a();
                int i12 = i10 + 1;
                aVar2.f4166a = this.f4186d[i10];
                if (FragmentManager.O0(2)) {
                    Log.v("FragmentManager", "Instantiate " + aVar + " op #" + i11 + " base fragment #" + this.f4186d[i12]);
                }
                aVar2.f4173h = Lifecycle.State.values()[this.f4188i[i11]];
                aVar2.f4174i = Lifecycle.State.values()[this.f4189o[i11]];
                int[] iArr = this.f4186d;
                int i13 = i10 + 2;
                if (iArr[i12] == 0) {
                    z10 = false;
                }
                aVar2.f4168c = z10;
                int i14 = iArr[i13];
                aVar2.f4169d = i14;
                int i15 = iArr[i10 + 3];
                aVar2.f4170e = i15;
                int i16 = i10 + 5;
                int i17 = iArr[i10 + 4];
                aVar2.f4171f = i17;
                i10 += 6;
                int i18 = iArr[i16];
                aVar2.f4172g = i18;
                aVar.f4150d = i14;
                aVar.f4151e = i15;
                aVar.f4152f = i17;
                aVar.f4153g = i18;
                aVar.f(aVar2);
                i11++;
            } else {
                aVar.f4154h = this.f4190p;
                aVar.f4157k = this.f4191q;
                aVar.f4155i = true;
                aVar.f4158l = this.f4193s;
                aVar.f4159m = this.f4194t;
                aVar.f4160n = this.f4195u;
                aVar.f4161o = this.f4196v;
                aVar.f4162p = this.f4197w;
                aVar.f4163q = this.f4198x;
                aVar.f4164r = this.f4199y;
                return;
            }
        }
    }

    public androidx.fragment.app.a b(FragmentManager fragmentManager) {
        androidx.fragment.app.a aVar = new androidx.fragment.app.a(fragmentManager);
        a(aVar);
        aVar.f4183v = this.f4192r;
        for (int i10 = 0; i10 < this.f4187e.size(); i10++) {
            String str = (String) this.f4187e.get(i10);
            if (str != null) {
                ((FragmentTransaction.a) aVar.f4149c.get(i10)).f4167b = fragmentManager.k0(str);
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
        parcel.writeIntArray(this.f4186d);
        parcel.writeStringList(this.f4187e);
        parcel.writeIntArray(this.f4188i);
        parcel.writeIntArray(this.f4189o);
        parcel.writeInt(this.f4190p);
        parcel.writeString(this.f4191q);
        parcel.writeInt(this.f4192r);
        parcel.writeInt(this.f4193s);
        TextUtils.writeToParcel(this.f4194t, parcel, 0);
        parcel.writeInt(this.f4195u);
        TextUtils.writeToParcel(this.f4196v, parcel, 0);
        parcel.writeStringList(this.f4197w);
        parcel.writeStringList(this.f4198x);
        parcel.writeInt(this.f4199y ? 1 : 0);
    }

    b(Parcel parcel) {
        this.f4186d = parcel.createIntArray();
        this.f4187e = parcel.createStringArrayList();
        this.f4188i = parcel.createIntArray();
        this.f4189o = parcel.createIntArray();
        this.f4190p = parcel.readInt();
        this.f4191q = parcel.readString();
        this.f4192r = parcel.readInt();
        this.f4193s = parcel.readInt();
        Parcelable.Creator creator = TextUtils.CHAR_SEQUENCE_CREATOR;
        this.f4194t = (CharSequence) creator.createFromParcel(parcel);
        this.f4195u = parcel.readInt();
        this.f4196v = (CharSequence) creator.createFromParcel(parcel);
        this.f4197w = parcel.createStringArrayList();
        this.f4198x = parcel.createStringArrayList();
        this.f4199y = parcel.readInt() != 0;
    }
}
