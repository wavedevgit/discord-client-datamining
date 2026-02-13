package yq;

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
    public static final d f56292d = new d("NetworkError", 0);

    /* renamed from: e  reason: collision with root package name */
    public static final d f56293e = new d("CameraPermissionError", 1);

    /* renamed from: i  reason: collision with root package name */
    public static final d f56294i = new d("SdkConfigurationError", 2);

    /* renamed from: o  reason: collision with root package name */
    public static final d f56295o = new d("CameraCompatibilityError", 3);

    /* renamed from: p  reason: collision with root package name */
    public static final d f56296p = new d("IntegrationError", 4);

    /* renamed from: q  reason: collision with root package name */
    public static final d f56297q = new d("SessionTokenError", 5);

    /* renamed from: r  reason: collision with root package name */
    public static final d f56298r = new d("RateLimitExceeded", 6);

    /* renamed from: s  reason: collision with root package name */
    public static final d f56299s = new d("UnexpectedError", 7);

    /* renamed from: t  reason: collision with root package name */
    public static final d f56300t = new d("NoDiskSpaceError", 8);

    /* renamed from: u  reason: collision with root package name */
    public static final d f56301u = new d("WebRtcIntegrationError", 9);

    /* renamed from: v  reason: collision with root package name */
    public static final d f56302v = new d("InvalidOneTimeLinkCode", 10);

    /* renamed from: w  reason: collision with root package name */
    public static final d f56303w = new d("ExceptionError", 11);

    /* renamed from: x  reason: collision with root package name */
    private static final /* synthetic */ d[] f56304x;

    /* renamed from: y  reason: collision with root package name */
    private static final /* synthetic */ EnumEntries f56305y;

    static {
        d[] a10 = a();
        f56304x = a10;
        f56305y = hs.a.a(a10);
        CREATOR = new Parcelable.Creator() { // from class: yq.d.a
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
        return new d[]{f56292d, f56293e, f56294i, f56295o, f56296p, f56297q, f56298r, f56299s, f56300t, f56301u, f56302v, f56303w};
    }

    public static d valueOf(String str) {
        return (d) Enum.valueOf(d.class, str);
    }

    public static d[] values() {
        return (d[]) f56304x.clone();
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
