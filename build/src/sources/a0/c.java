package a0;

import android.os.Handler;
import java.util.concurrent.Executor;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
final class c extends m0 {

    /* renamed from: a  reason: collision with root package name */
    private final Executor f21a;

    /* renamed from: b  reason: collision with root package name */
    private final Handler f22b;

    /* JADX INFO: Access modifiers changed from: package-private */
    public c(Executor executor, Handler handler) {
        if (executor != null) {
            this.f21a = executor;
            if (handler != null) {
                this.f22b = handler;
                return;
            }
            throw new NullPointerException("Null schedulerHandler");
        }
        throw new NullPointerException("Null cameraExecutor");
    }

    @Override // a0.m0
    public Executor b() {
        return this.f21a;
    }

    @Override // a0.m0
    public Handler c() {
        return this.f22b;
    }

    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof m0) {
            m0 m0Var = (m0) obj;
            if (this.f21a.equals(m0Var.b()) && this.f22b.equals(m0Var.c())) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return ((this.f21a.hashCode() ^ 1000003) * 1000003) ^ this.f22b.hashCode();
    }

    public String toString() {
        return "CameraThreadConfig{cameraExecutor=" + this.f21a + ", schedulerHandler=" + this.f22b + "}";
    }
}
