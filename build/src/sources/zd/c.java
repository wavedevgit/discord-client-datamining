package zd;

import android.os.Bundle;
import android.os.Parcel;
import java.util.ArrayList;
import ji.s;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class c {
    public s a(byte[] bArr) {
        Parcel obtain = Parcel.obtain();
        obtain.unmarshall(bArr, 0, bArr.length);
        obtain.setDataPosition(0);
        Bundle readBundle = obtain.readBundle(Bundle.class.getClassLoader());
        obtain.recycle();
        return ne.d.d(b.U, (ArrayList) ne.a.e(readBundle.getParcelableArrayList("c")));
    }
}
