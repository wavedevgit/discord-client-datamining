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
    private final b f15749d;

    /* renamed from: e  reason: collision with root package name */
    private final b f15750e;

    /* renamed from: i  reason: collision with root package name */
    final int f15751i;

    /* renamed from: o  reason: collision with root package name */
    int f15752o;

    /* renamed from: p  reason: collision with root package name */
    int f15753p;

    /* renamed from: q  reason: collision with root package name */
    int f15754q;

    /* renamed from: r  reason: collision with root package name */
    int f15755r;

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
        this.f15752o = i10;
        this.f15753p = i11;
        this.f15754q = i12;
        this.f15751i = i13;
        this.f15755r = c(i10);
        this.f15749d = new b(59);
        this.f15750e = new b(i13 == 1 ? 23 : 12);
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
        if (this.f15752o == eVar.f15752o && this.f15753p == eVar.f15753p && this.f15751i == eVar.f15751i && this.f15754q == eVar.f15754q) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return Arrays.hashCode(new Object[]{Integer.valueOf(this.f15751i), Integer.valueOf(this.f15752o), Integer.valueOf(this.f15753p), Integer.valueOf(this.f15754q)});
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        parcel.writeInt(this.f15752o);
        parcel.writeInt(this.f15753p);
        parcel.writeInt(this.f15754q);
        parcel.writeInt(this.f15751i);
    }

    protected e(Parcel parcel) {
        this(parcel.readInt(), parcel.readInt(), parcel.readInt(), parcel.readInt());
    }
}
