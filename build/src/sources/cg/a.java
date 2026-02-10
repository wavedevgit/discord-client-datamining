package cg;

import android.os.IBinder;
import android.os.IInterface;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class a implements IInterface {

    /* renamed from: c  reason: collision with root package name */
    private final IBinder f8274c;

    /* renamed from: d  reason: collision with root package name */
    private final String f8275d;

    /* JADX INFO: Access modifiers changed from: protected */
    public a(IBinder iBinder, String str) {
        this.f8274c = iBinder;
        this.f8275d = str;
    }

    @Override // android.os.IInterface
    public final IBinder asBinder() {
        return this.f8274c;
    }
}
