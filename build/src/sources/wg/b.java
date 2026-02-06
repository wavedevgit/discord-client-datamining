package wg;

import android.content.Intent;
import android.os.Parcel;
import android.os.Parcelable;
import com.google.android.gms.common.api.Status;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class b extends hf.a implements ef.k {
    public static final Parcelable.Creator<b> CREATOR = new c();

    /* renamed from: d  reason: collision with root package name */
    final int f53819d;

    /* renamed from: e  reason: collision with root package name */
    private int f53820e;

    /* renamed from: i  reason: collision with root package name */
    private Intent f53821i;

    /* JADX INFO: Access modifiers changed from: package-private */
    public b(int i10, int i11, Intent intent) {
        this.f53819d = i10;
        this.f53820e = i11;
        this.f53821i = intent;
    }

    @Override // ef.k
    public final Status a() {
        if (this.f53820e == 0) {
            return Status.f13734q;
        }
        return Status.f13738u;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        int i11 = this.f53819d;
        int a10 = hf.c.a(parcel);
        hf.c.l(parcel, 1, i11);
        hf.c.l(parcel, 2, this.f53820e);
        hf.c.q(parcel, 3, this.f53821i, i10, false);
        hf.c.b(parcel, a10);
    }
}
