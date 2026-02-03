package ug;

import android.content.Intent;
import android.os.Parcel;
import android.os.Parcelable;
import com.google.android.gms.common.api.Status;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class b extends hf.a implements ef.k {
    public static final Parcelable.Creator<b> CREATOR = new c();

    /* renamed from: d  reason: collision with root package name */
    final int f50337d;

    /* renamed from: e  reason: collision with root package name */
    private int f50338e;

    /* renamed from: i  reason: collision with root package name */
    private Intent f50339i;

    /* JADX INFO: Access modifiers changed from: package-private */
    public b(int i10, int i11, Intent intent) {
        this.f50337d = i10;
        this.f50338e = i11;
        this.f50339i = intent;
    }

    @Override // ef.k
    public final Status a() {
        if (this.f50338e == 0) {
            return Status.f14418q;
        }
        return Status.f14422u;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        int i11 = this.f50337d;
        int a10 = hf.c.a(parcel);
        hf.c.l(parcel, 1, i11);
        hf.c.l(parcel, 2, this.f50338e);
        hf.c.q(parcel, 3, this.f50339i, i10, false);
        hf.c.b(parcel, a10);
    }
}
