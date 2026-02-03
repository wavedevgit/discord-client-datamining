package jq;

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
    public static final d f31888d = new d("NetworkError", 0);

    /* renamed from: e  reason: collision with root package name */
    public static final d f31889e = new d("CameraPermissionError", 1);

    /* renamed from: i  reason: collision with root package name */
    public static final d f31890i = new d("SdkConfigurationError", 2);

    /* renamed from: o  reason: collision with root package name */
    public static final d f31891o = new d("CameraCompatibilityError", 3);

    /* renamed from: p  reason: collision with root package name */
    public static final d f31892p = new d("IntegrationError", 4);

    /* renamed from: q  reason: collision with root package name */
    public static final d f31893q = new d("SessionTokenError", 5);

    /* renamed from: r  reason: collision with root package name */
    public static final d f31894r = new d("RateLimitExceeded", 6);

    /* renamed from: s  reason: collision with root package name */
    public static final d f31895s = new d("UnexpectedError", 7);

    /* renamed from: t  reason: collision with root package name */
    public static final d f31896t = new d("NoDiskSpaceError", 8);

    /* renamed from: u  reason: collision with root package name */
    public static final d f31897u = new d("WebRtcIntegrationError", 9);

    /* renamed from: v  reason: collision with root package name */
    public static final d f31898v = new d("InvalidOneTimeLinkCode", 10);

    /* renamed from: w  reason: collision with root package name */
    public static final d f31899w = new d("ExceptionError", 11);

    /* renamed from: x  reason: collision with root package name */
    private static final /* synthetic */ d[] f31900x;

    /* renamed from: y  reason: collision with root package name */
    private static final /* synthetic */ EnumEntries f31901y;

    static {
        d[] a10 = a();
        f31900x = a10;
        f31901y = sr.a.a(a10);
        CREATOR = new Parcelable.Creator() { // from class: jq.d.a
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
        return new d[]{f31888d, f31889e, f31890i, f31891o, f31892p, f31893q, f31894r, f31895s, f31896t, f31897u, f31898v, f31899w};
    }

    public static d valueOf(String str) {
        return (d) Enum.valueOf(d.class, str);
    }

    public static d[] values() {
        return (d[]) f31900x.clone();
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
