package com.google.android.gms.internal.play_billing;

import java.util.Iterator;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class j3 extends t3 {
    /* JADX INFO: Access modifiers changed from: package-private */
    public j3(int i10) {
        super(i10, null);
    }

    @Override // com.google.android.gms.internal.play_billing.t3
    public final void a() {
        if (!j()) {
            if (b() <= 0) {
                Iterator it = c().iterator();
                if (it.hasNext()) {
                    android.support.v4.media.session.b.a(((Map.Entry) it.next()).getKey());
                    throw null;
                }
            } else {
                android.support.v4.media.session.b.a(g(0).getKey());
                throw null;
            }
        }
        super.a();
    }
}
