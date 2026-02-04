package sg;

import android.os.Parcel;
import android.os.Parcelable;
import androidx.annotation.NonNull;
import com.google.android.gms.common.api.Status;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class f extends hf.a implements ef.k {
    @NonNull
    public static final Parcelable.Creator<f> CREATOR = new k();

    /* renamed from: d  reason: collision with root package name */
    private final Status f49502d;

    /* renamed from: e  reason: collision with root package name */
    private final g f49503e;

    public f(Status status, g gVar) {
        this.f49502d = status;
        this.f49503e = gVar;
    }

    @Override // ef.k
    public Status a() {
        return this.f49502d;
    }

    public g b() {
        return this.f49503e;
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        int a10 = hf.c.a(parcel);
        hf.c.q(parcel, 1, a(), i10, false);
        hf.c.q(parcel, 2, b(), i10, false);
        hf.c.b(parcel, a10);
    }
}
