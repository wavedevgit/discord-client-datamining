package gf;

import android.content.ComponentName;
import android.os.Handler;
import android.os.Message;
import android.util.Log;
import java.util.Objects;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class j1 implements Handler.Callback {

    /* renamed from: d  reason: collision with root package name */
    final /* synthetic */ k1 f25094d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public /* synthetic */ j1(k1 k1Var, byte[] bArr) {
        Objects.requireNonNull(k1Var);
        this.f25094d = k1Var;
    }

    @Override // android.os.Handler.Callback
    public final boolean handleMessage(Message message) {
        int i10 = message.what;
        if (i10 != 0) {
            if (i10 != 1) {
                return false;
            }
            k1 k1Var = this.f25094d;
            synchronized (k1Var.f()) {
                try {
                    h1 h1Var = (h1) message.obj;
                    i1 i1Var = (i1) k1Var.f().get(h1Var);
                    if (i1Var != null && i1Var.e() == 3) {
                        String valueOf = String.valueOf(h1Var);
                        StringBuilder sb2 = new StringBuilder(valueOf.length() + 47);
                        sb2.append("Timeout waiting for ServiceConnection callback ");
                        sb2.append(valueOf);
                        Log.e("GmsClientSupervisor", sb2.toString(), new Exception());
                        ComponentName i11 = i1Var.i();
                        if (i11 == null) {
                            i11 = h1Var.c();
                        }
                        if (i11 == null) {
                            String b10 = h1Var.b();
                            q.l(b10);
                            i11 = new ComponentName(b10, "unknown");
                        }
                        i1Var.onServiceDisconnected(i11);
                    }
                } finally {
                }
            }
            return true;
        }
        k1 k1Var2 = this.f25094d;
        synchronized (k1Var2.f()) {
            try {
                h1 h1Var2 = (h1) message.obj;
                i1 i1Var2 = (i1) k1Var2.f().get(h1Var2);
                if (i1Var2 != null && i1Var2.g()) {
                    if (i1Var2.d()) {
                        i1Var2.a("GmsClientSupervisor");
                    }
                    k1Var2.f().remove(h1Var2);
                }
            } finally {
            }
        }
        return true;
    }
}
