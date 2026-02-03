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
    private final b f16267d;

    /* renamed from: e  reason: collision with root package name */
    private final b f16268e;

    /* renamed from: i  reason: collision with root package name */
    final int f16269i;

    /* renamed from: o  reason: collision with root package name */
    int f16270o;

    /* renamed from: p  reason: collision with root package name */
    int f16271p;

    /* renamed from: q  reason: collision with root package name */
    int f16272q;

    /* renamed from: r  reason: collision with root package name */
    int f16273r;

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
        this.f16270o = i10;
        this.f16271p = i11;
        this.f16272q = i12;
        this.f16269i = i13;
        this.f16273r = c(i10);
        this.f16267d = new b(59);
        this.f16268e = new b(i13 == 1 ? 23 : 12);
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
        if (this.f16270o == eVar.f16270o && this.f16271p == eVar.f16271p && this.f16269i == eVar.f16269i && this.f16272q == eVar.f16272q) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return Arrays.hashCode(new Object[]{Integer.valueOf(this.f16269i), Integer.valueOf(this.f16270o), Integer.valueOf(this.f16271p), Integer.valueOf(this.f16272q)});
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        parcel.writeInt(this.f16270o);
        parcel.writeInt(this.f16271p);
        parcel.writeInt(this.f16272q);
        parcel.writeInt(this.f16269i);
    }

    protected e(Parcel parcel) {
        this(parcel.readInt(), parcel.readInt(), parcel.readInt(), parcel.readInt());
    }
}
