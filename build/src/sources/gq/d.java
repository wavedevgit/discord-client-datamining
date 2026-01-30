package gq;

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
    public static final d f27101d = new d("NetworkError", 0);

    /* renamed from: e  reason: collision with root package name */
    public static final d f27102e = new d("CameraPermissionError", 1);

    /* renamed from: i  reason: collision with root package name */
    public static final d f27103i = new d("SdkConfigurationError", 2);

    /* renamed from: o  reason: collision with root package name */
    public static final d f27104o = new d("CameraCompatibilityError", 3);

    /* renamed from: p  reason: collision with root package name */
    public static final d f27105p = new d("IntegrationError", 4);

    /* renamed from: q  reason: collision with root package name */
    public static final d f27106q = new d("SessionTokenError", 5);

    /* renamed from: r  reason: collision with root package name */
    public static final d f27107r = new d("RateLimitExceeded", 6);

    /* renamed from: s  reason: collision with root package name */
    public static final d f27108s = new d("UnexpectedError", 7);

    /* renamed from: t  reason: collision with root package name */
    public static final d f27109t = new d("NoDiskSpaceError", 8);

    /* renamed from: u  reason: collision with root package name */
    public static final d f27110u = new d("WebRtcIntegrationError", 9);

    /* renamed from: v  reason: collision with root package name */
    public static final d f27111v = new d("InvalidOneTimeLinkCode", 10);

    /* renamed from: w  reason: collision with root package name */
    public static final d f27112w = new d("ExceptionError", 11);

    /* renamed from: x  reason: collision with root package name */
    private static final /* synthetic */ d[] f27113x;

    /* renamed from: y  reason: collision with root package name */
    private static final /* synthetic */ EnumEntries f27114y;

    static {
        d[] a10 = a();
        f27113x = a10;
        f27114y = pr.a.a(a10);
        CREATOR = new Parcelable.Creator() { // from class: gq.d.a
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
        return new d[]{f27101d, f27102e, f27103i, f27104o, f27105p, f27106q, f27107r, f27108s, f27109t, f27110u, f27111v, f27112w};
    }

    public static d valueOf(String str) {
        return (d) Enum.valueOf(d.class, str);
    }

    public static d[] values() {
        return (d[]) f27113x.clone();
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
