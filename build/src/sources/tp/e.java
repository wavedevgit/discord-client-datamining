package tp;

import android.os.Parcel;
import android.os.Parcelable;
import kotlin.enums.EnumEntries;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
/* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
/* JADX WARN: Unknown enum class pattern. Please report as an issue! */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class e implements Parcelable {
    @NotNull
    public static final Parcelable.Creator<e> CREATOR;

    /* renamed from: d  reason: collision with root package name */
    public static final e f50214d = new e("ROUGH", 0);

    /* renamed from: e  reason: collision with root package name */
    public static final e f50215e = new e("PRECISE", 1);

    /* renamed from: i  reason: collision with root package name */
    private static final /* synthetic */ e[] f50216i;

    /* renamed from: o  reason: collision with root package name */
    private static final /* synthetic */ EnumEntries f50217o;

    static {
        e[] a10 = a();
        f50216i = a10;
        f50217o = sr.a.a(a10);
        CREATOR = new Parcelable.Creator() { // from class: tp.e.a
            @Override // android.os.Parcelable.Creator
            /* renamed from: a */
            public final e createFromParcel(Parcel parcel) {
                Intrinsics.checkNotNullParameter(parcel, "parcel");
                return e.valueOf(parcel.readString());
            }

            @Override // android.os.Parcelable.Creator
            /* renamed from: b */
            public final e[] newArray(int i10) {
                return new e[i10];
            }
        };
    }

    private e(String str, int i10) {
    }

    private static final /* synthetic */ e[] a() {
        return new e[]{f50214d, f50215e};
    }

    public static e valueOf(String str) {
        return (e) Enum.valueOf(e.class, str);
    }

    public static e[] values() {
        return (e[]) f50216i.clone();
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
