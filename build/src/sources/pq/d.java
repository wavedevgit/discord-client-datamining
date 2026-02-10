package pq;

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
    public static final d f44437d = new d("NetworkError", 0);

    /* renamed from: e  reason: collision with root package name */
    public static final d f44438e = new d("CameraPermissionError", 1);

    /* renamed from: i  reason: collision with root package name */
    public static final d f44439i = new d("SdkConfigurationError", 2);

    /* renamed from: o  reason: collision with root package name */
    public static final d f44440o = new d("CameraCompatibilityError", 3);

    /* renamed from: p  reason: collision with root package name */
    public static final d f44441p = new d("IntegrationError", 4);

    /* renamed from: q  reason: collision with root package name */
    public static final d f44442q = new d("SessionTokenError", 5);

    /* renamed from: r  reason: collision with root package name */
    public static final d f44443r = new d("RateLimitExceeded", 6);

    /* renamed from: s  reason: collision with root package name */
    public static final d f44444s = new d("UnexpectedError", 7);

    /* renamed from: t  reason: collision with root package name */
    public static final d f44445t = new d("NoDiskSpaceError", 8);

    /* renamed from: u  reason: collision with root package name */
    public static final d f44446u = new d("WebRtcIntegrationError", 9);

    /* renamed from: v  reason: collision with root package name */
    public static final d f44447v = new d("InvalidOneTimeLinkCode", 10);

    /* renamed from: w  reason: collision with root package name */
    public static final d f44448w = new d("ExceptionError", 11);

    /* renamed from: x  reason: collision with root package name */
    private static final /* synthetic */ d[] f44449x;

    /* renamed from: y  reason: collision with root package name */
    private static final /* synthetic */ EnumEntries f44450y;

    static {
        d[] a10 = a();
        f44449x = a10;
        f44450y = yr.a.a(a10);
        CREATOR = new Parcelable.Creator() { // from class: pq.d.a
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
        return new d[]{f44437d, f44438e, f44439i, f44440o, f44441p, f44442q, f44443r, f44444s, f44445t, f44446u, f44447v, f44448w};
    }

    public static d valueOf(String str) {
        return (d) Enum.valueOf(d.class, str);
    }

    public static d[] values() {
        return (d[]) f44449x.clone();
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
