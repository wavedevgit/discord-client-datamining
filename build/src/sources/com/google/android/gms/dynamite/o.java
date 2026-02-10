package com.google.android.gms.dynamite;

import android.os.IBinder;
import android.os.IInterface;
import android.os.Parcel;
import tf.a;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class o extends ig.a implements IInterface {
    /* JADX INFO: Access modifiers changed from: package-private */
    public o(IBinder iBinder) {
        super(iBinder, "com.google.android.gms.dynamite.IDynamiteLoaderV2");
    }

    public final tf.a W0(tf.a aVar, String str, int i10, tf.a aVar2) {
        Parcel f10 = f();
        ig.o.b(f10, aVar);
        f10.writeString(str);
        f10.writeInt(i10);
        ig.o.b(f10, aVar2);
        Parcel e10 = e(3, f10);
        tf.a f11 = a.AbstractBinderC0694a.f(e10.readStrongBinder());
        e10.recycle();
        return f11;
    }

    public final tf.a h(tf.a aVar, String str, int i10, tf.a aVar2) {
        Parcel f10 = f();
        ig.o.b(f10, aVar);
        f10.writeString(str);
        f10.writeInt(i10);
        ig.o.b(f10, aVar2);
        Parcel e10 = e(2, f10);
        tf.a f11 = a.AbstractBinderC0694a.f(e10.readStrongBinder());
        e10.recycle();
        return f11;
    }
}
