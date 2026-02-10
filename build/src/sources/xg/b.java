package xg;

import android.content.Intent;
import android.os.Parcel;
import android.os.Parcelable;
import com.google.android.gms.common.api.Status;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class b extends jf.a implements ff.k {
    public static final Parcelable.Creator<b> CREATOR = new c();

    /* renamed from: d  reason: collision with root package name */
    final int f54762d;

    /* renamed from: e  reason: collision with root package name */
    private int f54763e;

    /* renamed from: i  reason: collision with root package name */
    private Intent f54764i;

    /* JADX INFO: Access modifiers changed from: package-private */
    public b(int i10, int i11, Intent intent) {
        this.f54762d = i10;
        this.f54763e = i11;
        this.f54764i = intent;
    }

    @Override // ff.k
    public final Status a() {
        if (this.f54763e == 0) {
            return Status.f14451q;
        }
        return Status.f14455u;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        int i11 = this.f54762d;
        int a10 = jf.c.a(parcel);
        jf.c.l(parcel, 1, i11);
        jf.c.l(parcel, 2, this.f54763e);
        jf.c.q(parcel, 3, this.f54764i, i10, false);
        jf.c.b(parcel, a10);
    }
}
