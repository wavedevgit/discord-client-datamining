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
    private final b f16498d;

    /* renamed from: e  reason: collision with root package name */
    private final b f16499e;

    /* renamed from: i  reason: collision with root package name */
    final int f16500i;

    /* renamed from: o  reason: collision with root package name */
    int f16501o;

    /* renamed from: p  reason: collision with root package name */
    int f16502p;

    /* renamed from: q  reason: collision with root package name */
    int f16503q;

    /* renamed from: r  reason: collision with root package name */
    int f16504r;

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
        this.f16501o = i10;
        this.f16502p = i11;
        this.f16503q = i12;
        this.f16500i = i13;
        this.f16504r = c(i10);
        this.f16498d = new b(59);
        this.f16499e = new b(i13 == 1 ? 23 : 12);
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
        if (this.f16501o == eVar.f16501o && this.f16502p == eVar.f16502p && this.f16500i == eVar.f16500i && this.f16503q == eVar.f16503q) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return Arrays.hashCode(new Object[]{Integer.valueOf(this.f16500i), Integer.valueOf(this.f16501o), Integer.valueOf(this.f16502p), Integer.valueOf(this.f16503q)});
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        parcel.writeInt(this.f16501o);
        parcel.writeInt(this.f16502p);
        parcel.writeInt(this.f16503q);
        parcel.writeInt(this.f16500i);
    }

    protected e(Parcel parcel) {
        this(parcel.readInt(), parcel.readInt(), parcel.readInt(), parcel.readInt());
    }
}
