package mq;

import android.os.Parcel;
import android.os.Parcelable;
import kotlin.enums.EnumEntries;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
/* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
/* JADX WARN: Unknown enum class pattern. Please report as an issue! */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class d implements Parcelable {
    @NotNull
    public static final Parcelable.Creator<d> CREATOR;

    /* renamed from: d  reason: collision with root package name */
    public static final d f38850d = new d("NetworkError", 0);

    /* renamed from: e  reason: collision with root package name */
    public static final d f38851e = new d("CameraPermissionError", 1);

    /* renamed from: i  reason: collision with root package name */
    public static final d f38852i = new d("SdkConfigurationError", 2);

    /* renamed from: o  reason: collision with root package name */
    public static final d f38853o = new d("CameraCompatibilityError", 3);

    /* renamed from: p  reason: collision with root package name */
    public static final d f38854p = new d("IntegrationError", 4);

    /* renamed from: q  reason: collision with root package name */
    public static final d f38855q = new d("SessionTokenError", 5);

    /* renamed from: r  reason: collision with root package name */
    public static final d f38856r = new d("RateLimitExceeded", 6);

    /* renamed from: s  reason: collision with root package name */
    public static final d f38857s = new d("UnexpectedError", 7);

    /* renamed from: t  reason: collision with root package name */
    public static final d f38858t = new d("NoDiskSpaceError", 8);

    /* renamed from: u  reason: collision with root package name */
    public static final d f38859u = new d("WebRtcIntegrationError", 9);

    /* renamed from: v  reason: collision with root package name */
    public static final d f38860v = new d("InvalidOneTimeLinkCode", 10);

    /* renamed from: w  reason: collision with root package name */
    public static final d f38861w = new d("ExceptionError", 11);

    /* renamed from: x  reason: collision with root package name */
    private static final /* synthetic */ d[] f38862x;

    /* renamed from: y  reason: collision with root package name */
    private static final /* synthetic */ EnumEntries f38863y;

    static {
        d[] a10 = a();
        f38862x = a10;
        f38863y = vr.a.a(a10);
        CREATOR = new Parcelable.Creator() { // from class: mq.d.a
            @Override // android.os.Parcelable.Creator
            /* renamed from: a */
            public final d createFromParcel(Parcel parcel) {
                Intrinsics.checkNotNullParameter(parcel, "parcel");
                return d.valueOf(parcel.readString());
            }

            @Override // android.os.Parcelable.Creator
            /* renamed from: b */
            public final d[] newArray(int i10) {
                return new d[i10];
            }
        };
    }

    private d(String str, int i10) {
    }

    private static final /* synthetic */ d[] a() {
        return new d[]{f38850d, f38851e, f38852i, f38853o, f38854p, f38855q, f38856r, f38857s, f38858t, f38859u, f38860v, f38861w};
    }

    public static d valueOf(String str) {
        return (d) Enum.valueOf(d.class, str);
    }

    public static d[] values() {
        return (d[]) f38862x.clone();
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
