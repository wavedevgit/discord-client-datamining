package androidx.work.impl.diagnostics;

import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import androidx.work.impl.workers.DiagnosticsWorker;
import k4.m;
import k4.p;
import k4.y;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class DiagnosticsReceiver extends BroadcastReceiver {

    /* renamed from: a  reason: collision with root package name */
    private static final String f5604a = m.i("DiagnosticsRcvr");

    @Override // android.content.BroadcastReceiver
    public void onReceive(Context context, Intent intent) {
        if (intent == null) {
            return;
        }
        m.e().a(f5604a, "Requesting diagnostics");
        try {
            y.e(context).b(p.e(DiagnosticsWorker.class));
        } catch (IllegalStateException e10) {
            m.e().d(f5604a, "WorkManager is not initialized", e10);
        }
    }
}
