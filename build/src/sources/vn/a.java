package vn;

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

    /* renamed from: e  reason: collision with root package name */
    public static final a f51336e = new a("UPLOAD", 0, "upload");

    /* renamed from: i  reason: collision with root package name */
    public static final a f51337i = new a("MANUAL", 1, "manual");

    /* renamed from: o  reason: collision with root package name */
    private static final /* synthetic */ a[] f51338o;

    /* renamed from: p  reason: collision with root package name */
    private static final /* synthetic */ EnumEntries f51339p;

    /* renamed from: d  reason: collision with root package name */
    private final String f51340d;

    static {
        a[] a10 = a();
        f51338o = a10;
        f51339p = pr.a.a(a10);
        CREATOR = new Parcelable.Creator() { // from class: vn.a.a
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

    private a(String str, int i10, String str2) {
        this.f51340d = str2;
    }

    private static final /* synthetic */ a[] a() {
        return new a[]{f51336e, f51337i};
    }

    public static a valueOf(String str) {
        return (a) Enum.valueOf(a.class, str);
    }

    public static a[] values() {
        return (a[]) f51338o.clone();
    }

    public final String d() {
        return this.f51340d;
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
