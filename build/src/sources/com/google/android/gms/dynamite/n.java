package com.google.android.gms.dynamite;

import android.os.IBinder;
import android.os.IInterface;
import android.os.Parcel;
import sf.a;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class n extends hg.a implements IInterface {
    /* JADX INFO: Access modifiers changed from: package-private */
    public n(IBinder iBinder) {
        super(iBinder, "com.google.android.gms.dynamite.IDynamiteLoader");
    }

    public final int W0(sf.a aVar, String str, boolean z10) {
        Parcel f10 = f();
        hg.o.b(f10, aVar);
        f10.writeString(str);
        f10.writeInt(z10 ? 1 : 0);
        Parcel e10 = e(3, f10);
        int readInt = e10.readInt();
        e10.recycle();
        return readInt;
    }

    public final sf.a X0(sf.a aVar, String str, int i10) {
        Parcel f10 = f();
        hg.o.b(f10, aVar);
        f10.writeString(str);
        f10.writeInt(i10);
        Parcel e10 = e(4, f10);
        sf.a f11 = a.AbstractBinderC0648a.f(e10.readStrongBinder());
        e10.recycle();
        return f11;
    }

    public final int Y0(sf.a aVar, String str, boolean z10) {
        Parcel f10 = f();
        hg.o.b(f10, aVar);
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

    public final sf.a a1(sf.a aVar, String str, boolean z10, long j10) {
        Parcel f10 = f();
        hg.o.b(f10, aVar);
        f10.writeString(str);
        f10.writeInt(z10 ? 1 : 0);
        f10.writeLong(j10);
        Parcel e10 = e(7, f10);
        sf.a f11 = a.AbstractBinderC0648a.f(e10.readStrongBinder());
        e10.recycle();
        return f11;
    }

    public final sf.a b1(sf.a aVar, String str, int i10, sf.a aVar2) {
        Parcel f10 = f();
        hg.o.b(f10, aVar);
        f10.writeString(str);
        f10.writeInt(i10);
        hg.o.b(f10, aVar2);
        Parcel e10 = e(8, f10);
        sf.a f11 = a.AbstractBinderC0648a.f(e10.readStrongBinder());
        e10.recycle();
        return f11;
    }

    public final sf.a h(sf.a aVar, String str, int i10) {
        Parcel f10 = f();
        hg.o.b(f10, aVar);
        f10.writeString(str);
        f10.writeInt(i10);
        Parcel e10 = e(2, f10);
        sf.a f11 = a.AbstractBinderC0648a.f(e10.readStrongBinder());
        e10.recycle();
        return f11;
    }
}
