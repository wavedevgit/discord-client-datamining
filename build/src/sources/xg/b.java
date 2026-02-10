package xg;

import android.content.Intent;
import android.os.Parcel;
import android.os.Parcelable;
import com.google.android.gms.common.api.Status;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class b extends jf.a implements ff.k {
    public static final Parcelable.Creator<b> CREATOR = new c();

    /* renamed from: d  reason: collision with root package name */
    final int f55030d;

    /* renamed from: e  reason: collision with root package name */
    private int f55031e;

    /* renamed from: i  reason: collision with root package name */
    private Intent f55032i;

    /* JADX INFO: Access modifiers changed from: package-private */
    public b(int i10, int i11, Intent intent) {
        this.f55030d = i10;
        this.f55031e = i11;
        this.f55032i = intent;
    }

    @Override // ff.k
    public final Status a() {
        if (this.f55031e == 0) {
            return Status.f13874q;
        }
        return Status.f13878u;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        int i11 = this.f55030d;
        int a10 = jf.c.a(parcel);
        jf.c.l(parcel, 1, i11);
        jf.c.l(parcel, 2, this.f55031e);
        jf.c.q(parcel, 3, this.f55032i, i10, false);
        jf.c.b(parcel, a10);
    }
}
