package com.google.android.gms.dynamite;

import android.os.IBinder;
import android.os.IInterface;
import android.os.Parcel;
import tf.a;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class n extends ig.a implements IInterface {
    /* JADX INFO: Access modifiers changed from: package-private */
    public n(IBinder iBinder) {
        super(iBinder, "com.google.android.gms.dynamite.IDynamiteLoader");
    }

    public final int W0(tf.a aVar, String str, boolean z10) {
        Parcel f10 = f();
        ig.o.b(f10, aVar);
        f10.writeString(str);
        f10.writeInt(z10 ? 1 : 0);
        Parcel e10 = e(3, f10);
        int readInt = e10.readInt();
        e10.recycle();
        return readInt;
    }

    public final tf.a X0(tf.a aVar, String str, int i10) {
        Parcel f10 = f();
        ig.o.b(f10, aVar);
        f10.writeString(str);
        f10.writeInt(i10);
        Parcel e10 = e(4, f10);
        tf.a f11 = a.AbstractBinderC0660a.f(e10.readStrongBinder());
        e10.recycle();
        return f11;
    }

    public final int Y0(tf.a aVar, String str, boolean z10) {
        Parcel f10 = f();
        ig.o.b(f10, aVar);
        f10.writeString(str);
        f10.writeInt(z10 ? 1 : 0);
        Parcel e10 = e(5, f10);
        int readInt = e10.readInt();
        e10.recycle();
        return readInt;
    }

    public final int Z0() {
        Parcel e10 = e(6, f());
        int readInt = e10.readInt();
        e10.recycle();
        return readInt;
    }

    public final tf.a a1(tf.a aVar, String str, boolean z10, long j10) {
        Parcel f10 = f();
        ig.o.b(f10, aVar);
        f10.writeString(str);
        f10.writeInt(z10 ? 1 : 0);
        f10.writeLong(j10);
        Parcel e10 = e(7, f10);
        tf.a f11 = a.AbstractBinderC0660a.f(e10.readStrongBinder());
        e10.recycle();
        return f11;
    }

    public final tf.a b1(tf.a aVar, String str, int i10, tf.a aVar2) {
        Parcel f10 = f();
        ig.o.b(f10, aVar);
        f10.writeString(str);
        f10.writeInt(i10);
        ig.o.b(f10, aVar2);
        Parcel e10 = e(8, f10);
        tf.a f11 = a.AbstractBinderC0660a.f(e10.readStrongBinder());
        e10.recycle();
        return f11;
    }

    public final tf.a i(tf.a aVar, String str, int i10) {
        Parcel f10 = f();
        ig.o.b(f10, aVar);
        f10.writeString(str);
        f10.writeInt(i10);
        Parcel e10 = e(2, f10);
        tf.a f11 = a.AbstractBinderC0660a.f(e10.readStrongBinder());
        e10.recycle();
        return f11;
    }
}
