package df;

import android.os.Bundle;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class u extends v {
    /* JADX INFO: Access modifiers changed from: package-private */
    public u(int i10, int i11, Bundle bundle) {
        super(i10, i11, bundle);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // df.v
    public final void a(Bundle bundle) {
        if (bundle.getBoolean("ack", false)) {
            d(null);
        } else {
            c(new w(4, "Invalid response to one way request", null));
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // df.v
    public final boolean b() {
        return true;
    }
}
