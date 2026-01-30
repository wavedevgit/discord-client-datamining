package gf;

import android.content.ComponentName;
import android.os.Handler;
import android.os.Message;
import android.util.Log;
import java.util.HashMap;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class l1 implements Handler.Callback {

    /* renamed from: d  reason: collision with root package name */
    final /* synthetic */ n1 f26844d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public /* synthetic */ l1(n1 n1Var, m1 m1Var) {
        this.f26844d = n1Var;
    }

    @Override // android.os.Handler.Callback
    public final boolean handleMessage(Message message) {
        HashMap hashMap;
        HashMap hashMap2;
        HashMap hashMap3;
        HashMap hashMap4;
        HashMap hashMap5;
        int i10 = message.what;
        if (i10 == 0) {
            hashMap = this.f26844d.f26861g;
            synchronized (hashMap) {
                try {
                    j1 j1Var = (j1) message.obj;
                    hashMap2 = this.f26844d.f26861g;
                    k1 k1Var = (k1) hashMap2.get(j1Var);
                    if (k1Var != null && k1Var.i()) {
                        if (k1Var.j()) {
                            k1Var.g("GmsClientSupervisor");
                        }
                        hashMap3 = this.f26844d.f26861g;
                        hashMap3.remove(j1Var);
                    }
                } finally {
                }
            }
            return true;
        } else if (i10 == 1) {
            hashMap4 = this.f26844d.f26861g;
            synchronized (hashMap4) {
                try {
                    j1 j1Var2 = (j1) message.obj;
                    hashMap5 = this.f26844d.f26861g;
                    k1 k1Var2 = (k1) hashMap5.get(j1Var2);
                    if (k1Var2 != null && k1Var2.a() == 3) {
                        String valueOf = String.valueOf(j1Var2);
                        Log.e("GmsClientSupervisor", "Timeout waiting for ServiceConnection callback " + valueOf, new Exception());
                        ComponentName b10 = k1Var2.b();
                        if (b10 == null) {
                            b10 = j1Var2.a();
                        }
                        if (b10 == null) {
                            String c10 = j1Var2.c();
                            q.l(c10);
                            b10 = new ComponentName(c10, "unknown");
                        }
                        k1Var2.onServiceDisconnected(b10);
                    }
                } finally {
                }
            }
            return true;
        } else {
            return false;
        }
    }
}
