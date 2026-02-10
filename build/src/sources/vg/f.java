package vg;

import android.os.Parcel;
import android.os.Parcelable;
import androidx.annotation.NonNull;
import com.google.android.gms.common.api.Status;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class f extends jf.a implements ff.k {
    @NonNull
    public static final Parcelable.Creator<f> CREATOR = new k();

    /* renamed from: d  reason: collision with root package name */
    private final Status f51594d;

    /* renamed from: e  reason: collision with root package name */
    private final g f51595e;

    public f(Status status, g gVar) {
        this.f51594d = status;
        this.f51595e = gVar;
    }

    @Override // ff.k
    public Status a() {
        return this.f51594d;
    }

    public g b() {
        return this.f51595e;
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        int a10 = jf.c.a(parcel);
        jf.c.q(parcel, 1, a(), i10, false);
        jf.c.q(parcel, 2, b(), i10, false);
        jf.c.b(parcel, a10);
    }
}
