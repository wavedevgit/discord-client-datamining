package iq;

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
    public static final a f30388d = new a("REQUIRED", 0);

    /* renamed from: e  reason: collision with root package name */
    public static final a f30389e = new a("OPTIONAL", 1);

    /* renamed from: i  reason: collision with root package name */
    public static final a f30390i = new a("NONE", 2);

    /* renamed from: o  reason: collision with root package name */
    private static final /* synthetic */ a[] f30391o;

    /* renamed from: p  reason: collision with root package name */
    private static final /* synthetic */ EnumEntries f30392p;

    static {
        a[] a10 = a();
        f30391o = a10;
        f30392p = hs.a.a(a10);
        CREATOR = new Parcelable.Creator() { // from class: iq.a.a
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
        return new a[]{f30388d, f30389e, f30390i};
    }

    public static a valueOf(String str) {
        return (a) Enum.valueOf(a.class, str);
    }

    public static a[] values() {
        return (a[]) f30391o.clone();
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
