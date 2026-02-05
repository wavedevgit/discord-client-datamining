package com.google.android.material.timepicker;

import android.content.res.Resources;
import android.os.Parcel;
import android.os.Parcelable;
import java.util.Arrays;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class e implements Parcelable {
    public static final Parcelable.Creator<e> CREATOR = new a();

    /* renamed from: d  reason: collision with root package name */
    private final b f15629d;

    /* renamed from: e  reason: collision with root package name */
    private final b f15630e;

    /* renamed from: i  reason: collision with root package name */
    final int f15631i;

    /* renamed from: o  reason: collision with root package name */
    int f15632o;

    /* renamed from: p  reason: collision with root package name */
    int f15633p;

    /* renamed from: q  reason: collision with root package name */
    int f15634q;

    /* renamed from: r  reason: collision with root package name */
    int f15635r;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    class a implements Parcelable.Creator {
        a() {
        }

        @Override // android.os.Parcelable.Creator
        /* renamed from: a */
        public e createFromParcel(Parcel parcel) {
            return new e(parcel);
        }

        @Override // android.os.Parcelable.Creator
        /* renamed from: b */
        public e[] newArray(int i10) {
            return new e[i10];
        }
    }

    public e(int i10, int i11, int i12, int i13) {
        this.f15632o = i10;
        this.f15633p = i11;
        this.f15634q = i12;
        this.f15631i = i13;
        this.f15635r = c(i10);
        this.f15629d = new b(59);
        this.f15630e = new b(i13 == 1 ? 23 : 12);
    }

    public static String a(Resources resources, CharSequence charSequence) {
        return b(resources, charSequence, "%02d");
    }

    public static String b(Resources resources, CharSequence charSequence, String str) {
        try {
            return String.format(resources.getConfiguration().locale, str, Integer.valueOf(Integer.parseInt(String.valueOf(charSequence))));
        } catch (NumberFormatException unused) {
            return null;
        }
    }

    private static int c(int i10) {
        return i10 >= 12 ? 1 : 0;
    }

    @Override // android.os.Parcelable
    public int describeContents() {
        return 0;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof e)) {
            return false;
        }
        e eVar = (e) obj;
        if (this.f15632o == eVar.f15632o && this.f15633p == eVar.f15633p && this.f15631i == eVar.f15631i && this.f15634q == eVar.f15634q) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return Arrays.hashCode(new Object[]{Integer.valueOf(this.f15631i), Integer.valueOf(this.f15632o), Integer.valueOf(this.f15633p), Integer.valueOf(this.f15634q)});
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        parcel.writeInt(this.f15632o);
        parcel.writeInt(this.f15633p);
        parcel.writeInt(this.f15634q);
        parcel.writeInt(this.f15631i);
    }

    protected e(Parcel parcel) {
        this(parcel.readInt(), parcel.readInt(), parcel.readInt(), parcel.readInt());
    }
}
