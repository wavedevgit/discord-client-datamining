package df;

import android.os.Bundle;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class x extends v {
    /* JADX INFO: Access modifiers changed from: package-private */
    public x(int i10, int i11, Bundle bundle) {
        super(i10, i11, bundle);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // df.v
    public final void a(Bundle bundle) {
        Bundle bundle2 = bundle.getBundle("data");
        if (bundle2 == null) {
            bundle2 = Bundle.EMPTY;
        }
        d(bundle2);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // df.v
    public final boolean b() {
        return false;
    }
}
