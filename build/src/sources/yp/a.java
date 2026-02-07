package yp;

import android.os.Parcel;
import android.os.Parcelable;
import kotlin.enums.EnumEntries;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
/* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
/* JADX WARN: Unknown enum class pattern. Please report as an issue! */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a implements Parcelable {
    @NotNull
    public static final Parcelable.Creator<a> CREATOR;

    /* renamed from: d  reason: collision with root package name */
    public static final a f55583d = new a("REQUIRED", 0);

    /* renamed from: e  reason: collision with root package name */
    public static final a f55584e = new a("OPTIONAL", 1);

    /* renamed from: i  reason: collision with root package name */
    public static final a f55585i = new a("NONE", 2);

    /* renamed from: o  reason: collision with root package name */
    private static final /* synthetic */ a[] f55586o;

    /* renamed from: p  reason: collision with root package name */
    private static final /* synthetic */ EnumEntries f55587p;

    static {
        a[] a10 = a();
        f55586o = a10;
        f55587p = xr.a.a(a10);
        CREATOR = new Parcelable.Creator() { // from class: yp.a.a
            @Override // android.os.Parcelable.Creator
            /* renamed from: a */
            public final a createFromParcel(Parcel parcel) {
                Intrinsics.checkNotNullParameter(parcel, "parcel");
                return a.valueOf(parcel.readString());
            }

            @Override // android.os.Parcelable.Creator
            /* renamed from: b */
            public final a[] newArray(int i10) {
                return new a[i10];
            }
        };
    }

    private a(String str, int i10) {
    }

    private static final /* synthetic */ a[] a() {
        return new a[]{f55583d, f55584e, f55585i};
    }

    public static a valueOf(String str) {
        return (a) Enum.valueOf(a.class, str);
    }

    public static a[] values() {
        return (a[]) f55586o.clone();
    }

    @Override // android.os.Parcelable
    public final int describeContents() {
        return 0;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel dest, int i10) {
        Intrinsics.checkNotNullParameter(dest, "dest");
        dest.writeString(name());
    }
}
