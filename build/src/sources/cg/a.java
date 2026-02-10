package cg;

import android.os.IBinder;
import android.os.IInterface;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class a implements IInterface {

    /* renamed from: c  reason: collision with root package name */
    private final IBinder f7593c;

    /* renamed from: d  reason: collision with root package name */
    private final String f7594d;

    /* JADX INFO: Access modifiers changed from: protected */
    public a(IBinder iBinder, String str) {
        this.f7593c = iBinder;
        this.f7594d = str;
    }

    @Override // android.os.IInterface
    public final IBinder asBinder() {
        return this.f7593c;
    }
}
