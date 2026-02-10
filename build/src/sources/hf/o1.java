package hf;

import android.os.Parcel;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class o1 extends ig.n implements p1 {
    public o1() {
        super("com.google.android.gms.common.internal.ICertData");
    }

    @Override // ig.n
    protected final boolean e(int i10, Parcel parcel, Parcel parcel2, int i11) {
        if (i10 != 1) {
            if (i10 != 2) {
                return false;
            }
            int h10 = h();
            parcel2.writeNoException();
            parcel2.writeInt(h10);
        } else {
            tf.a b10 = b();
            parcel2.writeNoException();
            ig.o.b(parcel2, b10);
        }
        return true;
    }
}
